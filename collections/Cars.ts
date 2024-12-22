import { CollectionConfig } from "payload";

export const Cars: CollectionConfig = {
  slug: "cars",
  admin: {
    useAsTitle: "title",
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "title",
      type: "text",
    },
    {
      name: "model",
      type: "text",
    },
    {
      name: "description",
      type: "textarea",
    },
    {
      name: "year",
      type: "number",
    },
    {
      name: "transmission",
      type: "select",
      options: [
        "Automatic Transmission",
        "Manual Transmission",
        "Dual-clutch transmission",
        "Automated Manual Transmission",
        "Continuously Variable Transmission",
      ],
    },
    {
      name: "fuelType",
      type: "select",
      options: [
        "Petrol",
        "Diesel",
        "Electric",
        "Hybrid",
        "Hydrogen",
      ],
    },
    {
      name: "manufacturer",
      type: "relationship",
      relationTo: "manufacturers",
    },
    {
      name: "featuredImage",
      type: "upload",
      relationTo: "media",
    },
    {
      name: 'gallery',
      type: 'array',
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
        },
      ],
    },
    {
      name: "colorOptions",
      type: "array",
      fields: [
        {
          name: "color",
          type: "text",
        },
      ],
    },
    {
      name: "seatingCapacity",
      type: "number",
    },
    {
      name: "bodyType",
      type: "select",
      options: [
        "Sedan",
        "SUV",
        "Hatchback",
        "Coupe",
        "Convertible",
        "Wagon",
        "Pickup Truck",
        "Van",
      ],
    },
    {
      name: "engineSpecifications",
      type: "group",
      fields: [
        {
          name: "engineType",
          type: "text",
        },
        {
          name: "horsePower",
          type: "number",
        },
        {
          name: "torque",
          type: "number",
        },
        {
          name: "cylinders",
          type: "number",
        },
      ],
    },
    {
      name: "dimensions",
      type: "group",
      fields: [
        {
          name: "length",
          type: "number",
        },
        {
          name: "width",
          type: "number",
        },
        {
          name: "height",
          type: "number",
        },
        {
          name: "wheelbase",
          type: "number",
        },
      ],
    },
    {
      name: "mileage",
      type: "group",
      fields: [
        {
          name: "city",
          type: "number",
          admin: { description: "Mileage in city (km/l or mi/gal)" },
        },
        {
          name: "highway",
          type: "number",
          admin: { description: "Mileage on highway (km/l or mi/gal)" },
        },
      ],
    },
    {
      name: "safetyFeatures",
      type: "array",
      fields: [
        {
          name: "feature",
          type: "text",
        },
      ],
    },
    {
      name: "price",
      type: "number",
      admin: { description: "Price in USD or local currency" },
    },
  ],
};
