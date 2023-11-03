import articleData from "../../translations/enArticleData.json";
import { ArticleCard } from "./ArticleCard";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

const ArticleWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
  max-width: 100%;
  padding: 38px 15px;
  @media (min-width: 768px) {
    
  }

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }
`;

let articleArray = articleData.articles;
console.log(articleArray);

export const Article = () => {
  const { t, ready } = useTranslation();

  const articles = t("articles", { returnObjects: true });

  if (!ready) return "loading translations...";
  return (
    <>
      <ArticleWrapper className="article-wrapper">
        {articles.map((article, index) => (
          <ArticleCard key={index} articles={article} />
        ))}
      </ArticleWrapper>
    </>
  );
};