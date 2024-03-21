import Video from "./video/video";
const products = [
    { title: "Cabbage", isFruit: false, id: 1 },
    { title: "Garlic", isFruit: false, id: 2 },
    { title: "Apple", isFruit: true, id: 3 },
  ];
  const VideoBackground = () => {
    return (
      <div className="video-container">
        <video autoPlay loop muted className="video">
          <source src="/src/assets/video-1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="content">
          {/* Your content goes here */}
        </div>
      </div>
    );
  };
  export default function ShoppingList() {
    const listItems = products.map((product) => (
      <li
        key={product.id}
        style={{
          color: product.isFruit ? "magenta" : "darkgreen",
        }}
      >
        {product.title}
      </li>
    ));
  return(
    <div>
      {/* <VideoBackground/>
      <Video/>
      {listItems} */}
    </div>
  );
    // return <ul>{listItems}</ul>;
  }
  