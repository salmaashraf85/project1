export interface Topic {
    id: number;
    title: string;
    description: string;
    popularity: number;
    createdAt?: string;
    updatedAt?: string;
  }
  
  export interface TopicsResponse {
    data: Topic[];
    meta?: {
      total: number;
      page: number;
      limit: number;
    };
  }