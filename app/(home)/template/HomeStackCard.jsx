import { FiBook, FiSearch, ImLoop2 } from "../../common/icon/homeMenuIcons";
import DescriptionCard from "../organisms/DescriptionCard";

const contents = [
  {
    id: 0,
    icon: FiBook,
    header: "単語駆動学習",
    body: `Sublimは、学習を単語で管理します。学習内容を記録するためのテキストエディターを備えた、少しパワフルでクセのある単語帳です。`,
  },
  {
    id: 1,
    icon: FiSearch,
    header: "発見と探索",
    body: `常にトレンドをキャッチすることは重要です。Sublimは、あなたの興味を惹こうと、関心のありそうな単語を提案します。もちろん、あなた自身が収集した情報を管理することもサポートします。`,
  },
  {
    id: 2,
    icon: ImLoop2,
    header: "共有と循環",
    body: `学習内容を他のユーザーに共有することができます。一方で、個人的な学習はプライベートにすることもできます。単語だけでなく、単語帳を元にワードクラウドを生成し、共有することができます。ユーザーそれぞれが学習した内容が結びつく環境で、他者の知見と自己の学習を比較して再評価し、新たな学習の循環へ導きます。`,
  },
];
export default function HomeStackCard(params) {
  return (
    <>
      {contents.map((content) => {
        return <DescriptionCard key={content.id} content={content} />;
      })}
    </>
  );
}
