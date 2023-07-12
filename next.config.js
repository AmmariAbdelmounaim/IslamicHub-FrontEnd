module.exports = () => {
  const rewrites = () => {
    return [
      {
        source: "/authentication/signup",
        destination: "http://localhost:8085/api/users/auth/register",
      },
    ];
  };
  return {
    rewrites,
  };
};
