import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class BlogItem extends Component {
  render() {
    const { blog } = this.props;

    const category = blog.category.map((category) => <a href="#" className="post-category bg-blue-light mr-2">{category}</a>)

    return (
      <div className="col col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
        <div className="ui-block">


          <article className="hentry blog-post">

            <div className="post-thumb">
              <img src={blog.image} alt="cover" />
            </div>
            <div className="post-content">
              {category}
              <Link className="h4 post-title"
                to={{
                  pathname: `/${blog._id.$oid}`,
                  state: { blog }
                }}
              >
                {blog.title.toUpperCase()}
              </Link>
              <p>{blog.text.substring(0, 100)}</p>

              <div className="author-date">
                de
								<a className="h6 post__author-name fn" href="#"> {blog.author}</a>
                <div className="post__date">
                  <time className="published" dateTime="2017-03-24T18:18">
                    - 7 horas
									</time>
                </div>
              </div>
            </div>
            <Link className="btn btn-md-2 btn-border-think c-grey btn-transparent custom-color ml-3"
              to={{
                pathname: `/${blog._id.$oid}`,
                state: { blog }
              }}
            >
              Leia Mais
              </Link>
          </article>
        </div>
      </div>
    );
  }
}

export default BlogItem;
