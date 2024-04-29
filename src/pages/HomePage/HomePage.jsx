import DocumentTitle from '../../components/DocumentTitle';
import css from './HomePage.module.css';


// TODO: styles css, login

export default function HomePage() {
  return (
    <>
      <DocumentTitle>Home</DocumentTitle>

      <div className={css.container}>
        <h1 className={css.title}>
          Wellcome
        </h1>
      </div>
    </>
  );
}
