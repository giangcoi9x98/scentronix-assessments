export interface ItemResponse {
  _id: string;
  title: string;
  image: string;
  items: ItemDetail[];
  description: string;
  is_publish: boolean;
  author: string;
  is_deleted: boolean;
  updatedAt: string; // Date in ISO format
  createdAt: string; // Date in ISO format
  sort: number;
  story_id: string;
}

interface ItemDetail {
  title: string;
  content: string;
}