export const GET = async () => {
  return Response.json({
    token:process.env.TOKEN,
    userData: {
      id: 123,
      name: "Ali",
      email: "ali@example.com",
      role: "user",
    },
  });
};
