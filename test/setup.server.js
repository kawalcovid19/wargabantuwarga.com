import fetchMock from "jest-fetch-mock";

// Mock both cross-fetch and global fetch
// eslint-disable-next-line no-undef
jest.setMock("cross-fetch", fetchMock);
fetchMock.enableMocks();
