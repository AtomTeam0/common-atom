export enum Category {
  ONE = "one",
  TWO = "two",
  THREE = "three",
}

// Temporal solution for sorting categories, will be removed after mono-repo migration.
// We are using lowercase for this enum because it uses the value of the  Category enum.
export enum CategoryNumbers {
  one = 1,
  two = 2,
  three = 3,
}
