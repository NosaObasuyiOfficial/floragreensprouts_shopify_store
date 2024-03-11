import {
  Page,
  Card,
  TextContainer,
  Image,
  Stack,
  Link,
  Text,
  Button,
  LegacyCard,
} from "@shopify/polaris";

import { useState } from "react";
import axios from "axios";
import { IoCheckmarkCircle } from "react-icons/io5";
import { ImCancelCircle } from "react-icons/im";
import FadeLoader from "react-spinners/FadeLoader";

export default function HomePage() {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    try {
      setLoading(true);
      setText("");
      setText("Downloading Products. Please wait...");

      const download_response = await axios.get(
        "http://localhost:6070/download_products",
        {
          auth: {
            username: "flora",
            password: "green",
          },
        }
      );

      if (download_response) {
        console.log(download_response);
        setText(download_response.data.message);
        setLoading(false);
      }

      setTimeout(() => {
        setText("");
      }, 4000);
    } catch (error) {
      setLoading(false);
      setText("Cannot download products. System Error.");
      console.log(error);

      setTimeout(() => {
        setText("");
      }, 4000);
    }
  };

  return (
    <Page narrowWidth>
      <TextContainer>
        <p
          style={{
            textAlign: "left",
            fontSize: "35px",
            color: "green",
            paddingBottom: "25px",
          }}
        >
          Main Dashboard
        </p>
      </TextContainer>
      <Button onClick={handleClick} primary>
        Download products
      </Button>

      <div
        style={{
          paddingTop: "20px",
          opacity: text ? 1 : 0,
          transition: "opacity 1s ease-in-out",
        }}
      >
        <LegacyCard>
          {text ===
          "Products have been downloaded successfully. New products found." ? (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "10px",
              }}
            >
              <IoCheckmarkCircle style={{ fontSize: "50px", color: "green" }} />
            </div>
          ) : text === "Cannot download products. System Error." ? (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "10px",
              }}
            >
              <ImCancelCircle style={{ fontSize: "50px", color: "red" }} />
            </div>
          ) : loading ? (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "10px",
              }}
            >
              <FadeLoader
                color={"#0F1514"}
                loading={loading}
                size={60}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
            </div>
          ) : (
            <div></div>
          )}
          <TextContainer>
            {text ===
            "Products have been downloaded successfully. New products found." ? (
              <p
                style={{
                  textAlign: "center",
                  fontSize: "18px",
                  color: "green",
                }}
              >
                Products have been downloaded successfully. <br />
                <span
                  style={{
                    textAlign: "center",
                    fontSize: "14px",
                    color: "green",
                    fontStyle: "italic",
                  }}
                >
                  New products found.
                </span>
              </p>
            ) : text ==
              "`Products have been downloaded successfully. No new product found." ? (
              <p
                style={{
                  textAlign: "center",
                  fontSize: "18px",
                  color: "green",
                }}
              >
                Products have been downloaded successfully. <br />
                <span
                  style={{
                    textAlign: "center",
                    fontSize: "14px",
                    color: "green",
                    fontStyle: "italic",
                  }}
                >
                  No new product found.
                </span>
              </p>
            ) : text === "Cannot download products. System Error." ? (
              <p
                style={{
                  textAlign: "center",
                  fontSize: "14px",
                  color: "red",
                  fontStyle: "italic",
                }}
              >
                {text}
              </p>
            ) : (
              <p style={{ textAlign: "center", fontStyle: "italic" }}>{text}</p>
            )}
          </TextContainer>
        </LegacyCard>
      </div>
    </Page>
  );
}
