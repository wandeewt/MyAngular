import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

// Model
import { PostModel } from '../../models/post.model';

// Service
import { PostsService } from '../../service/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {
  
  posts!: PostModel[];
  
  constructor(
    private postsService: PostsService,
  ) {
    this.getPosts()
  }

  getPosts() {
    
    this.postsService.getPosts().subscribe( (data: any) => {
      this.posts = data
      console.log(data)
    })
  }


}
