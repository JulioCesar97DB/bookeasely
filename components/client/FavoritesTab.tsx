import React from "react";
import { Card, CardContent } from "../ui/card";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { Heart, Star } from "lucide-react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

const mockFavorites = [
  {
    id: 1,
    name: "Sarah's Hair Studio",
    owner: "Sarah Johnson",
    rating: 4.8,
    category: "Beauty & Personal Care",
    lastVisit: "Nov 28, 2024",
  },
  {
    id: 2,
    name: "Ink Masters Tattoo",
    owner: "Alex Rivera",
    rating: 4.9,
    category: "Creative Services",
    lastVisit: "Oct 15, 2024",
  },
];

const FavoritesTab = () => {
  const handleToggleFavorite = (providerId: number) => {
    console.log(`Toggle favorite for provider ${providerId}`);
  };

  return (
    <>
      <div>
        <h3 className="text-2xl font-bold">Favorite Providers</h3>
        <p className="text-muted-foreground">Your saved service providers</p>
      </div>

      <div className="grid gap-4">
        {mockFavorites.map((favorite) => (
          <Card key={favorite.id}>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Avatar className="h-12 w-12">
                    <AvatarFallback>
                      {favorite.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-semibold">{favorite.name}</h4>
                    <p className="text-sm text-muted-foreground">
                      by {favorite.owner}
                    </p>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="flex items-center gap-1">
                        <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm">{favorite.rating}</span>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {favorite.category}
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      Last visit: {favorite.lastVisit}
                    </p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button>Book Again</Button>
                  <Button
                    variant="outline"
                    onClick={() => handleToggleFavorite(favorite.id)}
                  >
                    <Heart className="h-4 w-4 fill-red-500 text-red-500" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
};

export default FavoritesTab;
