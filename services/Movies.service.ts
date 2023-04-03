import { api } from "@/api/api";

class MoviesService {
  async getMovies({ page, query }: { page: number; query: string }) {
    const response = await api.get("", {
      params: { s: query, type: "movie", page },
    });
    const modifiedResponse = await response.data.Search.map((item: any) => ({
      ...item,
      bookmark: false,
    }));
    return modifiedResponse;
  }
  async getPagesQuantity({ query }: { query: string }) {
    const response = await api.get("", {
      params: { s: query, type: "movie" },
    });
    const data = response.data;
    const pagesQuantity = Math.ceil(parseInt(data.totalResults) / 10);
    return pagesQuantity;
  }
  async getDetailedInfo({ id }: { id: string | string[] | undefined }) {
    const response = await await api.get("", {
      params: { i: id, type: "movie", plot: "full" },
    });
    const data = response.data;
    return data;
  }
}

export default new MoviesService();
