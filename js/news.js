const newsTitle = document.querySelector("h2");
const newsDesc = document.querySelector("#main-news-desc");
const moreNewsTitle = document.querySelectorAll("h3");
const newsImg = document.querySelectorAll(".news-img");

const getNews = async () => {
  const resNews = await fetch("../js/news.json");
  const news = await resNews.json();

  newsTitle.innerHTML = `${news[0].newsTitle}`;
  newsDesc.innerHTML = `${news[0].newsDesc}`;
  newsImg[0].src = `${news[0].newsImg}`;
  newsImg[0].alt = `${news[0].altImg}`;

  for (let i = 0; i < moreNewsTitle.length; i++)
    moreNewsTitle[i].innerHTML = `${news[i + 1].newsTitle}`;

  for (let i = 0; i < (moreNewsTitle.length + 1 ); i++) {
    newsImg[i].src = `${news[i].newsImg}`;
    newsImg[i].alt = `${news[i].altImg}`;
  }
};
getNews();
