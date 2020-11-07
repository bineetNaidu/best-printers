import Head from 'next/head';
function Error({ statusCode }) {
  return (
    <>
      <Head>
        <title>Opps! {statusCode}</title>
      </Head>
      {statusCode ? (
        <div
          style={{
            padding: '0 15rem',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <img
            src="/not-found.svg"
            alt="not-found"
            style={{
              objectFit: 'contain',
              width: '100%',
            }}
          />
        </div>
      ) : (
        'An error occurred on client'
      )}
    </>
  );
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
