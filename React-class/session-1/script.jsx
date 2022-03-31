class Blog extends React.Component {
  render() {
    return (
      <div className="column">
        <h3 className="heading">{this.props.title}</h3>
        <p>
          Blog là một nhật ký, một chủ đề, tâm sự, suy nghĩ của một cá nhân trên
          internet. Ngày nay với sự phát triển internet thuật ngữ “blog” ngày
          càng được phổ biến. Những người xây dựng viết blog được gọi là
          blogger. Giờ đây khi blog thực sự kiếm ra tiền thì blog càng ngày được
          ưa chuộng và trở thành công cụ tiếp thị hàng đầu trên internet hiện
          nay.
        </p>
        <img src={this.props.image} alt={this.props.title} />
      </div>
    );
  }
}

function SubscribeButton(props) {
  const { type = "main" } = props;

  const buttonStyle = {
    main: {
      backgroundColor: "green",
      color: "white",
    },
    secondary: {
      backgroundColor: "yellow",
    },
  };

  return (
    <button
      style={{
        border: "none",
        padding: "10px 24px",
        ...buttonStyle[type],
      }}
    >
      {props.title}
    </button>
  );
}

function App() {
  return (
    <div className="app" style={{ maxWidth: "1200px", margin: "60px auto" }}>
      <Blog
        title="Blog là gì?"
        image="https://emailbusiness.vn/wp-content/uploads/2020/08/blog-ca-nhan-768x403.jpg"
      />
      <Blog
        title="Lịch sử của blog?"
        image="https://emailbusiness.vn/wp-content/uploads/2020/08/phat-trien-website.jpg"
      />
      <Blog
        title="Tăng phạm vi khách hàng"
        image="https://emailbusiness.vn/wp-content/uploads/2020/08/content.png"
      />

      <SubscribeButton type="main" title="Đăng ký ngay" />
      <SubscribeButton type="secondary" title="Xem thêm" />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));
