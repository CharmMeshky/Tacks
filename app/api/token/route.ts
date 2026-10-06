export const GET = async () => {
  return Response.json({
    token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjMiLCJlbWFpbCI6ImFsaUBleGFtcGxlLmNvbSIsImlhdCI6MTcyODE4MDAwMH0",
    userData: {
      id: 123,
      name: "Ali",
      email: "ali@example.com",
      role: "user",
    },
  });
};
