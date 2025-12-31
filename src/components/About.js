import React from "react";

export default function About(props) {
  
  const containerStyle = {
    color: props.mode === "dark" ? "#f1f1f1" : "#1a1a1a",
    backgroundColor: "transparent",
    padding: "10px 15px",
    lineHeight: "1.8",
  };

  const cardStyle = {
    backgroundColor: props.mode === "dark" ? "#121212" : "#ffffff",
    color: props.mode === "dark" ? "#f1f1f1" : "#1a1a1a",
    padding: "32px",
    borderRadius: "12px",
    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.12)",
  };

  const headingStyle = {
    marginBottom: "30px",
    fontWeight: "700",
    letterSpacing: "1.5px",
    fontSize: "3rem",
  };

  return (
    <div className="container" style={containerStyle}>
      <div className="row justify-content-center">
        {/* Centered Column (Laptop-friendly width) */}
        <div className="col-12 col-md-11 col-lg-10 col-xl-9">
          {/* Heading */}
          <h1 className="text-center italiana" style={headingStyle}>
            About TextUtils
          </h1>

          {/* Card */}
          <div style={cardStyle}>
            <p>
              <strong>TextUtils</strong> is a modern and user-friendly text
              utility web application designed to simplify everyday text
              processing tasks. In today's digital world, text plays a vital
              role in communication, documentation, and content creation.
              TextUtils provides a reliable platform where users can quickly
              analyze and transform text without the need for complex software
              or technical knowledge.
            </p>

            <p>
              The application offers a wide range of features that help users
              work efficiently with text. It allows users to count words and
              characters accurately, remove unnecessary extra spaces, and
              convert text into uppercase or lowercase formats. Additionally,
              TextUtils calculates the estimated reading time of the entered
              text, making it especially useful for writers, bloggers,
              students, and professionals.
            </p>

            <p>
              TextUtils has been carefully designed with usability and
              accessibility in mind. The clean interface ensures that users
              can focus entirely on their content without distractions. The
              application supports both <strong>light mode</strong> and{" "}
              <strong>dark mode</strong>, enhancing visual comfort and reducing
              eye strain.
            </p>

            <p>
              One of the key advantages of TextUtils is its browser
              compatibility and privacy-focused approach. All text processing
              happens directly in the browser, ensuring that user content
              remains private, secure, and under complete control at all
              times.
            </p>

            <p className="mb-0">
              Overall, TextUtils is a practical and efficient tool for anyone
              who works with text regularly. Its simplicity, performance, and
              thoughtful design make it an essential utility for everyday text
              analysis.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}