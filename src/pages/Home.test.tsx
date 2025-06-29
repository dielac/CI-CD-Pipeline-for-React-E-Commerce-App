jest.mock("@tanstack/react-query", () => ({
  useQuery: ({ queryKey }: any) => {
    if (queryKey[0] === "products") {
      return {
        data: {
          data: [
            {
              id: 1,
              title: "Test Product",
              price: 50,
              category: "shoes",
              image: "https://via.placeholder.com/150",
              rating: { rate: 4.5, count: 10 },
              description: "Test product desc",
            },
          ],
        },
        isLoading: false,
        isError: false,
      };
    }

    if (queryKey[0] === "categories") {
      return {
        data: { data: ["shoes", "hats"] },
        isLoading: false,
        isError: false,
      };
    }

    return { data: null, isLoading: false, isError: false };
  },
}));
