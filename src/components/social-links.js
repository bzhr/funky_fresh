import React, { Component } from "react";
import { ShareButtons, ShareCounts, generateShareIcon } from "react-share";
import config from "../../gatsby-config";

class SocialLinks extends Component {
  render() {
    const { postNode, postPath } = this.props;
    const post = postNode.frontmatter;
    const url = config.siteMetadata.siteUrl + postPath;
    const {
      FacebookShareButton,
      TwitterShareButton,
    } = ShareButtons;
    const {
      FacebookShareCount
    } = ShareCounts;

    const FacebookIcon = generateShareIcon("facebook");
    const TwitterIcon = generateShareIcon("twitter");
    const TelegramIcon = generateShareIcon("telegram");
    const GooglePlusIcon = generateShareIcon("google");
    const LinkedinIcon = generateShareIcon("linkedin");
    const RedditIcon = generateShareIcon("reddit");
    const iconSize = 42
    const filter = count => (count > 0 ? count : "");

    return (
      <div className="social-links w-100">
        <h3>Share:</h3>
        <TwitterShareButton className="pr4 pv2 mw2 dim dib" url={url} title={post.title}>
          <TwitterIcon className="" round size={iconSize} />
        </TwitterShareButton>
        <FacebookShareButton
          className="pl4 pv2 mw2 dim dib"
          url={url}
          title={post.title}
          picture={post.cover}
          description={postNode.excerpt}
        >
          <FacebookIcon className="" round size={iconSize} />
          <FacebookShareCount url={url}>
            {count =>
              <div className="share-count">
                {filter(count)}
              </div>}
          </FacebookShareCount>
        </FacebookShareButton>
      </div>
    );
  }
}

export default SocialLinks;
