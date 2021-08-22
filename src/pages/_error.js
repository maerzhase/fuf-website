import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Layout from "@/components/Layout";

function Error({ statusCode }) {
  return (
    <Layout minHeight>
      <Box
        position="absolute"
        top="50%"
        left="50%"
        style={{ transform: "translate(-50%, -50%)" }}
      >
        <Typography variant="body1">
          {statusCode
            ? `Error ${statusCode} occurred on server`
            : "Error occurred on client"}
        </Typography>
      </Box>
    </Layout>
  );
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
