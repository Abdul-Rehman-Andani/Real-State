export interface Property {
  $id: string;
  name: string;
  type: string;
  description: string;
  address: string;
  price: number;
  area: number;
  bedrooms: number;
  bathrooms: number;
  rating: number;
  facilities?: string[];
  image: string;
  geolocation: string;
  agent?: string;
  gallery?: string[];
  $createdAt: string;
  $updatedAt: string;
}