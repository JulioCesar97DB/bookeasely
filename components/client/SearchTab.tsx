import React, { useState } from "react";
import { Card, CardContent } from "../ui/card";
import { Filter, Search, Heart, Star, MapPin, DollarSign, Scissors, Palette, Briefcase, Dumbbell, Clock } from "lucide-react";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Button } from "../ui/button";
import Image from "next/image";
import { Badge } from "../ui/badge";

const mockProviders = [
  {
    id: 1,
    name: "Sarah's Hair Studio",
    type: "individual",
    owner: "Sarah Johnson",
    rating: 4.8,
    reviews: 127,
    distance: "0.5 miles",
    category: "Beauty & Personal Care",
    services: ["Hair Cut", "Hair Color", "Styling"],
    priceRange: "$35 - $120",
    image: "/placeholder.svg?height=200&width=300",
    nextAvailable: "Today 2:00 PM",
    featured: true,
  },
  {
    id: 2,
    name: "Elite Barbershop",
    type: "business",
    owner: "Mike Wilson",
    rating: 4.6,
    reviews: 89,
    distance: "1.2 miles",
    category: "Beauty & Personal Care",
    services: ["Haircut", "Beard Trim", "Hot Towel Shave"],
    priceRange: "$25 - $65",
    image: "/placeholder.svg?height=200&width=300",
    nextAvailable: "Tomorrow 10:00 AM",
    featured: false,
  },
  {
    id: 3,
    name: "Ink Masters Tattoo",
    type: "business",
    owner: "Alex Rivera",
    rating: 4.9,
    reviews: 203,
    distance: "2.1 miles",
    category: "Creative Services",
    services: ["Custom Tattoos", "Consultations", "Touch-ups"],
    priceRange: "$100 - $500",
    image: "/placeholder.svg?height=200&width=300",
    nextAvailable: "Dec 20, 3:00 PM",
    featured: true,
  },
];
const serviceCategories = [
  { name: "Beauty & Personal Care", icon: Scissors, count: 45 },
  { name: "Creative Services", icon: Palette, count: 23 },
  { name: "Professional Services", icon: Briefcase, count: 67 },
  { name: "Fitness & Sports", icon: Dumbbell, count: 34 },
];

export const SearchTab = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedLocation, setSelectedLocation] = useState("current");

  const handleBookService = (providerId: number) => {
    console.log(`Book service with provider ${providerId}`);
  };

    const handleToggleFavorite = (providerId: number) => {
    console.log(`Toggle favorite for provider ${providerId}`);
  };

  return (
    <>
      {/* Welcome Section */}
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold text-foreground">
          Find the perfect service provider
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Discover talented professionals and businesses in your area
        </p>
      </div>

      {/* Search Bar */}
      <Card className="shadow-lg">
        <CardContent className="pt-6">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search for services, businesses, or professionals..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 h-12"
                />
              </div>
            </div>
            <Select
              value={selectedCategory}
              onValueChange={setSelectedCategory}
            >
              <SelectTrigger className="w-full lg:w-48 h-12">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="beauty">Beauty & Personal Care</SelectItem>
                <SelectItem value="creative">Creative Services</SelectItem>
                <SelectItem value="professional">
                  Professional Services
                </SelectItem>
                <SelectItem value="fitness">Fitness & Sports</SelectItem>
              </SelectContent>
            </Select>
            <Select
              value={selectedLocation}
              onValueChange={setSelectedLocation}
            >
              <SelectTrigger className="w-full lg:w-48 h-12">
                <SelectValue placeholder="Location" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="current">Current Location</SelectItem>
                <SelectItem value="manhattan">Manhattan, NY</SelectItem>
                <SelectItem value="brooklyn">Brooklyn, NY</SelectItem>
                <SelectItem value="queens">Queens, NY</SelectItem>
              </SelectContent>
            </Select>
            <Button className="h-12 px-8">
              <Search className="h-4 w-4 mr-2" />
              Search
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Service Categories */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {serviceCategories.map((category) => {
          const IconComponent = category.icon;
          return (
            <Card
              key={category.name}
              className="hover:shadow-lg transition-shadow cursor-pointer"
            >
              <CardContent className="pt-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <IconComponent className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-sm">{category.name}</h3>
                <p className="text-xs text-muted-foreground">
                  {category.count} providers
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Search Results */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold">Featured Providers</h3>
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-2" />
            Filters
          </Button>
        </div>

        <div className="grid gap-6">
          {mockProviders.map((provider) => (
            <Card
              key={provider.id}
              className="overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="grid md:grid-cols-3 gap-6">
                <div className="relative">
                  <Image
                    src={provider.image || "/placeholder.svg"}
                    alt={provider.name}
                    width={300}
                    height={200}
                    className="w-full h-48 md:h-full object-cover"
                  />
                  {provider.featured && (
                    <Badge className="absolute top-2 left-2">Featured</Badge>
                  )}
                  <Button
                    variant="ghost"
                    size="sm"
                    className="absolute top-2 right-2 bg-white/80 hover:bg-white"
                    onClick={() => handleToggleFavorite(provider.id)}
                  >
                    <Heart className="h-4 w-4" />
                  </Button>
                </div>

                <div className="md:col-span-2 p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-semibold">{provider.name}</h4>
                      <p className="text-muted-foreground">
                        by {provider.owner}
                      </p>
                      <Badge variant="outline" className="mt-1">
                        {provider.category}
                      </Badge>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-medium">{provider.rating}</span>
                        <span className="text-muted-foreground">
                          ({provider.reviews})
                        </span>
                      </div>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
                        <MapPin className="h-3 w-3" />
                        {provider.distance}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <p className="text-sm font-medium mb-1">Services:</p>
                      <div className="flex flex-wrap gap-1">
                        {provider.services.map((service) => (
                          <Badge
                            key={service}
                            variant="secondary"
                            className="text-xs"
                          >
                            {service}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1 text-sm">
                          <DollarSign className="h-3 w-3" />
                          {provider.priceRange}
                        </div>
                        <div className="flex items-center gap-1 text-sm text-green-600">
                          <Clock className="h-3 w-3" />
                          {provider.nextAvailable}
                        </div>
                      </div>
                      <Button onClick={() => handleBookService(provider.id)}>
                        Book Now
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
};
