/* tslint:disable */
/* eslint-disable */
/**
 * This file was automatically generated by Payload.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

export interface Config {
  auth: {
    users: UserAuthOperations;
  };
  collections: {
    users: User;
    media: Media;
    cars: Car;
    manufacturers: Manufacturer;
    'payload-locked-documents': PayloadLockedDocument;
    'payload-preferences': PayloadPreference;
    'payload-migrations': PayloadMigration;
  };
  collectionsJoins: {
    manufacturers: {
      cars: 'cars';
    };
  };
  collectionsSelect: {
    users: UsersSelect<false> | UsersSelect<true>;
    media: MediaSelect<false> | MediaSelect<true>;
    cars: CarsSelect<false> | CarsSelect<true>;
    manufacturers: ManufacturersSelect<false> | ManufacturersSelect<true>;
    'payload-locked-documents': PayloadLockedDocumentsSelect<false> | PayloadLockedDocumentsSelect<true>;
    'payload-preferences': PayloadPreferencesSelect<false> | PayloadPreferencesSelect<true>;
    'payload-migrations': PayloadMigrationsSelect<false> | PayloadMigrationsSelect<true>;
  };
  db: {
    defaultIDType: string;
  };
  globals: {};
  globalsSelect: {};
  locale: null;
  user: User & {
    collection: 'users';
  };
  jobs: {
    tasks: unknown;
    workflows: unknown;
  };
}
export interface UserAuthOperations {
  forgotPassword: {
    email: string;
    password: string;
  };
  login: {
    email: string;
    password: string;
  };
  registerFirstUser: {
    email: string;
    password: string;
  };
  unlock: {
    email: string;
    password: string;
  };
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users".
 */
export interface User {
  id: string;
  updatedAt: string;
  createdAt: string;
  email: string;
  resetPasswordToken?: string | null;
  resetPasswordExpiration?: string | null;
  salt?: string | null;
  hash?: string | null;
  loginAttempts?: number | null;
  lockUntil?: string | null;
  password?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "media".
 */
export interface Media {
  id: string;
  alt: string;
  updatedAt: string;
  createdAt: string;
  url?: string | null;
  thumbnailURL?: string | null;
  filename?: string | null;
  mimeType?: string | null;
  filesize?: number | null;
  width?: number | null;
  height?: number | null;
  focalX?: number | null;
  focalY?: number | null;
  sizes?: {
    thumbnail?: {
      url?: string | null;
      width?: number | null;
      height?: number | null;
      mimeType?: string | null;
      filesize?: number | null;
      filename?: string | null;
    };
    banner?: {
      url?: string | null;
      width?: number | null;
      height?: number | null;
      mimeType?: string | null;
      filesize?: number | null;
      filename?: string | null;
    };
    squere?: {
      url?: string | null;
      width?: number | null;
      height?: number | null;
      mimeType?: string | null;
      filesize?: number | null;
      filename?: string | null;
    };
  };
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "cars".
 */
export interface Car {
  id: string;
  title?: string | null;
  model?: string | null;
  description?: string | null;
  year?: number | null;
  engineSpecifications?: {
    engineType?: string | null;
    horsePower?: number | null;
    torque?: number | null;
    cylinders?: number | null;
  };
  acceleration?: string | null;
  topSpeed?: number | null;
  transmission?:
    | (
        | 'Automatic Transmission'
        | 'Manual Transmission'
        | 'Dual-clutch transmission'
        | 'Automated Manual Transmission'
        | 'Continuously Variable Transmission'
      )
    | null;
  fuelType?: ('Petrol' | 'Diesel' | 'Electric' | 'Hybrid' | 'Hydrogen') | null;
  manufacturer?: (string | null) | Manufacturer;
  featuredImage?: (string | null) | Media;
  gallery?:
    | {
        image?: (string | null) | Media;
        id?: string | null;
      }[]
    | null;
  colorOptions?:
    | {
        color?: string | null;
        id?: string | null;
      }[]
    | null;
  seatingCapacity?: number | null;
  bodyType?: ('Sedan' | 'SUV' | 'Hatchback' | 'Coupe' | 'Convertible' | 'Wagon' | 'Pickup Truck' | 'Van') | null;
  weight?: number | null;
  dimensions?: {
    length?: number | null;
    width?: number | null;
    height?: number | null;
    wheelbase?: number | null;
  };
  mileage?: {
    city?: number | null;
    highway?: number | null;
  };
  safetyFeatures?:
    | {
        feature?: string | null;
        id?: string | null;
      }[]
    | null;
  price?: number | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "manufacturers".
 */
export interface Manufacturer {
  id: string;
  title?: string | null;
  description?: string | null;
  year?: number | null;
  logo?: (string | null) | Media;
  imageCover?: (string | null) | Media;
  locations?:
    | {
        location?: string | null;
        locationImage?: (string | null) | Media;
        id?: string | null;
      }[]
    | null;
  cars?: {
    docs?: (string | Car)[] | null;
    hasNextPage?: boolean | null;
  } | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-locked-documents".
 */
export interface PayloadLockedDocument {
  id: string;
  document?:
    | ({
        relationTo: 'users';
        value: string | User;
      } | null)
    | ({
        relationTo: 'media';
        value: string | Media;
      } | null)
    | ({
        relationTo: 'cars';
        value: string | Car;
      } | null)
    | ({
        relationTo: 'manufacturers';
        value: string | Manufacturer;
      } | null);
  globalSlug?: string | null;
  user: {
    relationTo: 'users';
    value: string | User;
  };
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences".
 */
export interface PayloadPreference {
  id: string;
  user: {
    relationTo: 'users';
    value: string | User;
  };
  key?: string | null;
  value?:
    | {
        [k: string]: unknown;
      }
    | unknown[]
    | string
    | number
    | boolean
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations".
 */
export interface PayloadMigration {
  id: string;
  name?: string | null;
  batch?: number | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users_select".
 */
export interface UsersSelect<T extends boolean = true> {
  updatedAt?: T;
  createdAt?: T;
  email?: T;
  resetPasswordToken?: T;
  resetPasswordExpiration?: T;
  salt?: T;
  hash?: T;
  loginAttempts?: T;
  lockUntil?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "media_select".
 */
export interface MediaSelect<T extends boolean = true> {
  alt?: T;
  updatedAt?: T;
  createdAt?: T;
  url?: T;
  thumbnailURL?: T;
  filename?: T;
  mimeType?: T;
  filesize?: T;
  width?: T;
  height?: T;
  focalX?: T;
  focalY?: T;
  sizes?:
    | T
    | {
        thumbnail?:
          | T
          | {
              url?: T;
              width?: T;
              height?: T;
              mimeType?: T;
              filesize?: T;
              filename?: T;
            };
        banner?:
          | T
          | {
              url?: T;
              width?: T;
              height?: T;
              mimeType?: T;
              filesize?: T;
              filename?: T;
            };
        squere?:
          | T
          | {
              url?: T;
              width?: T;
              height?: T;
              mimeType?: T;
              filesize?: T;
              filename?: T;
            };
      };
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "cars_select".
 */
export interface CarsSelect<T extends boolean = true> {
  title?: T;
  model?: T;
  description?: T;
  year?: T;
  engineSpecifications?:
    | T
    | {
        engineType?: T;
        horsePower?: T;
        torque?: T;
        cylinders?: T;
      };
  acceleration?: T;
  topSpeed?: T;
  transmission?: T;
  fuelType?: T;
  manufacturer?: T;
  featuredImage?: T;
  gallery?:
    | T
    | {
        image?: T;
        id?: T;
      };
  colorOptions?:
    | T
    | {
        color?: T;
        id?: T;
      };
  seatingCapacity?: T;
  bodyType?: T;
  weight?: T;
  dimensions?:
    | T
    | {
        length?: T;
        width?: T;
        height?: T;
        wheelbase?: T;
      };
  mileage?:
    | T
    | {
        city?: T;
        highway?: T;
      };
  safetyFeatures?:
    | T
    | {
        feature?: T;
        id?: T;
      };
  price?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "manufacturers_select".
 */
export interface ManufacturersSelect<T extends boolean = true> {
  title?: T;
  description?: T;
  year?: T;
  logo?: T;
  imageCover?: T;
  locations?:
    | T
    | {
        location?: T;
        locationImage?: T;
        id?: T;
      };
  cars?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-locked-documents_select".
 */
export interface PayloadLockedDocumentsSelect<T extends boolean = true> {
  document?: T;
  globalSlug?: T;
  user?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences_select".
 */
export interface PayloadPreferencesSelect<T extends boolean = true> {
  user?: T;
  key?: T;
  value?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations_select".
 */
export interface PayloadMigrationsSelect<T extends boolean = true> {
  name?: T;
  batch?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "auth".
 */
export interface Auth {
  [k: string]: unknown;
}


declare module 'payload' {
  export interface GeneratedTypes extends Config {}
}