export const extractGrapQLErrorMessage = (error: any) => {
  const errorMessages = error.graphQLErrors?.map((error: any) => error.extensions.originalError.message.join(', '));
  return errorMessages?.join(', ') || error.message;
}