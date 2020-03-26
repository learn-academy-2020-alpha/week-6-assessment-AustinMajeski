# ASSESSMENT 6: Rails Commenting Challenge
# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# app/controller/blog_posts_controller.rb

# 1)  Declaring a class called 'BlogPostsController' that extends 'ApplicationController'
		#  This will be automatically generated when creating a controller ( console: " rails generate controller BlogPosts " )
		#  ( controller class of the model )
class BlogPostsController < ApplicationController
  def index
    # 2)  This is retrieving all blog posts from the database as an array and store them in the instance variable: @posts
    @posts = BlogPost.all
  end

  def show
    # 3)  This will take an id of a blog post (an integer) and retrieve that ONE entry from the database.
			# ( And store it in the instance variable: @post )
	  		#  shows a specific blog post ( with a given id )
    @post = BlogPost.find(params[:id])
  end

  # 4)  This, to my knowledge, is one of those 'required words' that gets automatically called / redirected to when creating a new blog post ( presumably from the 'create' method )
	# form
  def new
  end

  def create
    # 5)   Taking in the parameters required to create a blog post, this function will be called when creating a blog post.
			#  This will also check if the parameters were entered correctly by calling 'valid?' on the object.
	  		#  Creating a blog post, and checking validations
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to @post
    else
      render action: :new
    end
  end

  def delete
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else
      # 6)   If a blog post cannot be destroyed, this redirects you (if you weren't already) to the page showcasing the blog entry
	    	#  creating a redirect if not successful
      redirect_to blog_post_path(@post)
    end
  end

  # 7)   Any methods after the 'private' keyword in a class can only be called from within the class itself; no outside entry
		#  (  No shoes, No shirt, No service  )
		#  These methods can only be called within this class
  private
  def blog_post_params
    # 8)   Taking the params past to it ( from the other methods ), this will allow a 'title' and a 'content' to be passed into a 'blog_post'
	    #   Then, it wil return those params
	    #   Checking our table and permitting only appropriate columns
	    # < strong params >
    params.require(:blog_post).permit(:title, :content)
  end

end


# app/models/blog_post.rb

# 9)   This is the class representing our Model in our databse titled, 'BlogPost'
	#  Model Class
class BlogPost < ApplicationRecord
  # 10)   This will link any specific BlogPost with any number of 'comment' models, 
            #  as long as 'comments' has that specific BlogPost's key ( foreign key:  " blog_post_id:integer " )
	    #  ( the foreign key lives on the belongs_to side )
	    # relational model declaring
  has_many :comments
end
