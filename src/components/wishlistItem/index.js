import React, { Component, Fragment } from 'react';

export default class WishlistItem extends Component {
    render() {

        let data = this.props.item;

        return (
        <Fragment>
            <tr>
            <td scope="row">{data.id}</td>
            <td scope="row">{data.name}</td>
            <td scope="row">€{data.price}</td>
            <td scope="row"><a target="_blank" href={data.link}><span class="glyphicon glyphicon-globe"></span></a></td>
            <td scope="row"><a href="#"><span class="glyphicon glyphicon-trash"></span></a></td>
            </tr>
        </Fragment>
          );
      }
  } 

  //   let line = this.props.post.link ? (
        //       <a href={this.props.post.link}>{this.props.post.title}</a>
        //   ) : (
        //       <span>{this.props.post.title}</span>
        //   );

        //   return (
        //       <Fragment>
        //           <span className="ptr" >
        //               <FontAwesomeIcon icon={["fas", "thumbs-up"]} size="2x" />
        //           {` ${this.props.post.upvotes}`}
        //           </span>
        //           <span className="newsitem">
        //               {line}
        //               <span>
        //                   <a href="/">Comments</a>
        //               </span>
        //           </span>
        //           <p className="author">{this.props.post.author}</p>
        //       </Fragment>