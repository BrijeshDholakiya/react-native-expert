import classes from "./css/BlogTitleSection.module.css";

const BlogItemTitleSection = () => {
  return (
    <div
      className={`${classes.blogTitleContainer} ${classes.secondBlogContainer}`}
    >
      <h1>Stories From Our Community: Kohaku & Moyo Shiro</h1>
      <p>
        We are React Native community-trusted, extremely skilled Javascript
        developers ready to hire to your next React Native and React projects,
        now.
      </p>
    </div>
  );
};

export default BlogItemTitleSection;
