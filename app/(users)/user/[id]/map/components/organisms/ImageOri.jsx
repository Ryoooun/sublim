import { useEffect, useState } from "react";

export const ImageOri = () => {
  const [imageURL, setImageURL] = useState();

  useEffect(() => {
    // canvasを生成
    const Canvas = document.createElement("canvas");
    // 画像サイズ
    Canvas.width = 1200;
    Canvas.height = 630;

    // 背景作成
    const baseCtx = Canvas.getContext("2d");
    if (baseCtx) {
      baseCtx.fillStyle = "#fff";
      baseCtx.fillRect(0, 0, 1200, 630);
    }
    // 文章作成
    const textCtx = Canvas.getContext("2d");
    if (textCtx) {
      textCtx.fillStyle = "gray";
      textCtx.font = "50px 'ＭＳ ゴシック'";
      textCtx.textAlign = "left";
      textCtx.textBaseline = "top";
      textCtx.fillText("tset", 120, 200, 1200);
    }
    // 画像URLを生成
    setImageURL(Canvas.toDataURL("image/png"));
  }, []);
  return <img src={imageURL} />;
};
