import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { PostsService } from '../posts.service';
import { mimeType } from './mime-type.validator';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css'],
})
export class PostCreateComponent implements OnInit {
  enteredTitle = '';
  enteredContent = '';
  isLoading = false;
  mode = 'create';
  postId!: any;
  postForm!: FormGroup;
  @ViewChild('postFromRef') postFromRef!: NgForm;

  constructor(
    public postsService: PostsService,
    public route: ActivatedRoute,
    public fb: FormBuilder
  ) {}

  ngOnInit() {
    this.postForm = this.fb.group({
      title: [
        null,
        {
          validators: [Validators.required, Validators.minLength(3)],
        },
      ],
      content: [null, { validators: [Validators.required] }],
      image: [
        null,
        {
          validators: [Validators.required],
          asyncValidators: [mimeType],
        },
      ],
    });

    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('postId')) {
        this.mode = 'edit';
        this.postId = paramMap.get('postId');
        this.setupPost();
      }
    });
  }

  setupPost() {
    this.isLoading = true;
    this.postsService.getPost(this.postId).subscribe((postData) => {
      this.isLoading = false;
      console.log(postData);
      this.postForm = this.fb.group({
        title: [postData.post.title, Validators.required],
        content: [postData.post.content, Validators.required],
      });
    });
  }

  onPostSubmit() {
    if (this.postForm.invalid) {
      return;
    }

    if (this.mode === 'create') {
      this.postsService.addPost(
        this.postForm.value.title,
        this.postForm.value.content
      );
    } else {
      this.postsService.updatePost(
        this.postId,
        this.postForm.value.title,
        this.postForm.value.content
      );
    }
    this.postFromRef.resetForm();
  }

  get f() {
    return (<FormGroup>this.postForm).controls;
  }
}
