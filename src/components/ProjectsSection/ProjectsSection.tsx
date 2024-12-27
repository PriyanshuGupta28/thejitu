import React from "react";
import { Lock } from "lucide-react";
import GifBackgroundCard from "../GifBackgroundCard/GifBackgroundCard";

const ProjectsSection: React.FC = () => {
  return (
    <div className="flex flex-col gap-[20px] py-[24px] w-[928px]">
      <div className="flex flex-col items-center gap-[20px]">
        <img
          src="https://s3-alpha-sig.figma.com/img/fb53/b23d/fa08b9d0d398c8c13bb0af77f4505c84?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VEyDCd3DI11IytDvy4Ykt8N~2xMqTBPG8jTxT4b7CZJvMguJz39WNlc3rZgnRYtTDFQkMs6Hq6oertfHAQor4Qpcr1s8TkpMeaBymHdV7Ke0ZQFcbu76t3Colrm53EFPOWE5MZRTGKUuup5-VbXCdAQreU-DbOjhnOw8Emw15oKdHgBZVn75VeZIUs-0wiSmGfHvvYWZCOlqAfYXlR37EpZhjwg43JK2zhvTg2~-EeyvqmDmjapkqvqEXLUWtCTPxOfDM1Ek3K73~Wu~aXP0w3Av~4rkXCgp95mPJO8WCMOEVlfi9TZpF68gHEQQQx4uLBSJdlg2WCC0c8zlrUGW6Q__"
          alt="jituthumb_img"
          className="w-[79.65px] h-[90px]"
        />
        <h2 className="text-[32px] font-semibold">Case studies and projects</h2>
        <div className="flex gap-[20px]">
          <GifBackgroundCard
            title="iOS Case Study"
            description={["UX Correction", "Case Study", "Self"]}
            gif="https://media.giphy.com/media/ehgM1JRwNXAtaYDRzi/giphy.gif?cid=ecf05e47n16m0tbpdyrsm5l5tuuqiczx1uf2krb1rj31ifrw&ep=v1_gifs_search&rid=giphy.gif&ct=g"
            img="https://images3.alphacoders.com/100/thumb-350-1006667.webp"
            icon={<Lock size={12} />}
          />
          <GifBackgroundCard
            title="iOS Case Study"
            description={["UX Correction", "Case Study", "Self"]}
            gif="https://media.giphy.com/media/ehgM1JRwNXAtaYDRzi/giphy.gif?cid=ecf05e47n16m0tbpdyrsm5l5tuuqiczx1uf2krb1rj31ifrw&ep=v1_gifs_search&rid=giphy.gif&ct=g"
            img="https://images3.alphacoders.com/100/thumb-350-1006667.webp"
            icon={<Lock size={12} />}
          />
        </div>
        <div className="flex gap-[20px]">
          <GifBackgroundCard
            title="iOS Case Study"
            description={["UX Correction", "Case Study", "Self"]}
            gif="https://media.giphy.com/media/ehgM1JRwNXAtaYDRzi/giphy.gif?cid=ecf05e47n16m0tbpdyrsm5l5tuuqiczx1uf2krb1rj31ifrw&ep=v1_gifs_search&rid=giphy.gif&ct=g"
            img="https://images3.alphacoders.com/100/thumb-350-1006667.webp"
            icon={<Lock size={12} />}
          />
          <GifBackgroundCard
            title="iOS Case Study"
            description={["UX Correction", "Case Study", "Self"]}
            gif="https://media.giphy.com/media/ehgM1JRwNXAtaYDRzi/giphy.gif?cid=ecf05e47n16m0tbpdyrsm5l5tuuqiczx1uf2krb1rj31ifrw&ep=v1_gifs_search&rid=giphy.gif&ct=g"
            img="https://images3.alphacoders.com/100/thumb-350-1006667.webp"
            icon={<Lock size={12} />}
          />
        </div>
        <GifBackgroundCard
          title="iOS Case Study"
          description={["UX Correction", "Case Study", "Self"]}
          gif="https://media.giphy.com/media/ehgM1JRwNXAtaYDRzi/giphy.gif?cid=ecf05e47n16m0tbpdyrsm5l5tuuqiczx1uf2krb1rj31ifrw&ep=v1_gifs_search&rid=giphy.gif&ct=g"
          img="https://images3.alphacoders.com/100/thumb-350-1006667.webp"
          icon={<Lock size={12} />}
        />
      </div>
    </div>
  );
};

export default ProjectsSection;
