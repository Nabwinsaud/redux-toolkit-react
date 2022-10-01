import { useEffect } from "react";
import { getPosts } from "./features/posts/postSlice";
import { useAppDispatch, useAppSelector } from "./app/store/hooks/usePosts";
import "./styles/styles.scss";
import { IPostType } from "./types/postTypes";
function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  // interface PostProps {
  //   post: IPostType;
  // }
  const { isLoading, errror, data } = useAppSelector((state) => ({
    ...state.posts,
  }));
  console.log(data);

  if (isLoading) return <h1 className="loading">loading....</h1>;
  if (errror) return <h1 className="error">something went wrong ....</h1>;
  return (
    <div className="App">
      <h1 className="loading">Redux(toolkit) typescript state </h1>

      {data &&
        data.map((post: IPostType) => (
          <div key={post.id} className="posts">
            <p className="title">{post.title}</p>
          </div>
        ))}
    </div>
  );
}

export default App;
