import React from "react";
import { Button } from "../ui/button";
import { Edit, Plus, Scissors, Trash2 } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { Switch } from "../ui/switch";

const mockServices = [
  {
    id: 1,
    name: "Hair Cut & Style",
    description: "Professional haircut with styling",
    duration: 90,
    price: 85,
    category: "Hair",
    active: true,
  },
  {
    id: 2,
    name: "Hair Color",
    description: "Full hair coloring service",
    duration: 120,
    price: 120,
    category: "Hair",
    active: true,
  },
  {
    id: 3,
    name: "Beard Trim",
    description: "Professional beard trimming and shaping",
    duration: 45,
    price: 35,
    category: "Grooming",
    active: false,
  },
];

const ServicesTab = () => {
  return (
    <>
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-2xl font-bold">Services</h3>
          <p className="text-muted-foreground">Manage your offered services</p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Add Service
        </Button>
      </div>

      <div className="grid gap-6">
        {mockServices.map((service) => (
          <Card key={service.id}>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Scissors className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">{service.name}</h4>
                    <p className="text-sm text-muted-foreground">
                      {service.description}
                    </p>
                    <div className="flex items-center gap-4 mt-2">
                      <span className="text-sm text-muted-foreground">
                        {service.duration} min
                      </span>
                      <span className="text-sm font-medium">
                        ${service.price}
                      </span>
                      <Badge variant="outline">{service.category}</Badge>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Switch checked={service.active} />
                  <Button variant="ghost" size="sm">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Trash2 className="h-4 w-4" />
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

export default ServicesTab;
