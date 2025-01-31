import css from './NotFoundPage.module.css';

const NotFoundPage = () => {
  return (
    <div className={css.bg}>
      <picture>
        <source
          media='(max-width: 1440px)'
          srcSet='/img/not-found-page-bg.jpg 1x, /img/not-found-page-bg@2x.jpg 2x'
          type='image/jpg'
        />
        <img src='/img/not-found-page-bg.jpg' alt='Page not found' />
      </picture>
    </div>
  );
};

export default NotFoundPage;
