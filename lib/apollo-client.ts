import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  ApolloLink,
  concat,
  NormalizedCacheObject,
} from "@apollo/client";

const httpLink = createHttpLink({ uri: "/graphql" });

const authMiddleware = new ApolloLink((operation, forward) => {
  return forward(operation);
});

const errorLink = new ApolloLink((operation, forward) => {
  return forward(operation).map((response) => {
    if (response.errors) {
      console.error("GraphQL error:", response.errors);
    }
    return response;
  });
});

const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  link: concat(authMiddleware, concat(errorLink, httpLink)),
  cache: new InMemoryCache(),
});

export default client;
