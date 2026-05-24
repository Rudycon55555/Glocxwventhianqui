/**
 * Typings for Integrated Scripting.
 * This file is auto-generated on server start, so do not modify this file!
 */

declare global {
  var idContext: Context;
}

export interface Context {
  ops: Operations;
}

export interface Operations {
  /**
   * The item from the item entity
   */
  entityItem: (arg0: ValueEntity) => ValueItemstack;
  /**
   * The bucket fill sound for the fluid
   */
  fluidstackBucketFillSound: (arg0: ValueFluidstack) => string;
  /**
   * Cast any Number to a Long
   */
  numberToLong: (arg0: number) => number;
  /**
   * Apply the given operator on all elements of a list, resulting in a new list of mapped values.
   */
  operatorMap: (arg0: Function, arg1: any[]) => any[];
  /**
   * If the given item has a fluid
   */
  itemstackIsFluidStack: (arg0: ValueItemstack) => boolean;
  anyLessThanOrEquals: (arg0: any, arg1: any) => boolean;
  /**
   * Get a copy of the given NBT compound tag with the given NBT Integer Array entry
   */
  nbtWithIntList: (arg0: Record<string, any>, arg1: string, arg2: any[]) => Record<string, any>;
  /**
   * Get a copy of the given NBT compound tag with the given Integer entry
   */
  nbtWithInteger: (arg0: Record<string, any>, arg1: string, arg2: number) => Record<string, any>;
  /**
   * Create an NBT Byte tag from the given Boolean value
   */
  booleanAsNbt: (arg0: boolean) => Record<string, any>;
  /**
   * If the raw fluids are equal, ignoring quantity
   */
  fluidstackIsRawEqual: (arg0: ValueFluidstack, arg1: ValueFluidstack) => boolean;
  /**
   * If the list contains the given element.
   */
  listContains: (arg0: any[], arg1: any) => boolean;
  /**
   * Takes the smallest of two values.
   */
  numberMin: (arg0: number, arg1: number) => number;
  /**
   * The NBT List value in the given NBT compound tag with the given key
   */
  nbtGetListTag: (arg0: Record<string, any>, arg1: string) => any[];
  /**
   * If the entity is burning
   */
  entityEntityIsBurning: (arg0: ValueEntity) => boolean;
  longLongToInteger: (arg0: number) => number;
  /**
   * The entity type name.
   */
  entityType: (arg0: ValueEntity) => string;
  /**
   * Get a copy of the given ingredients with the given item at the given ingredient position
   */
  ingredientsWithItem: (arg0: ValueIngredients, arg1: number, arg2: ValueItemstack) => ValueIngredients;
  stringParseAsNbt: (arg0: string) => Record<string, any>;
  /**
   * Search for the given regular expression and return in that match a list of all its groups, in the given string.
   */
  stringRegexGroups: (arg0: string, arg1: string) => any[];
  /**
   * The value type in the given NBT compound tag corresponding to the given key
   */
  nbtType: (arg0: Record<string, any>, arg1: string) => string;
  doubleDoubleToLong: (arg0: number) => number;
  /**
   * If the data components of the given items are equal
   */
  itemstackIsNbtEqual: (arg0: ValueItemstack, arg1: ValueItemstack) => boolean;
  /**
   * The death sound of the given entity.
   */
  entityDeathSound: (arg0: ValueEntity) => string;
  /**
   * Takes the negation of a predicate.
   */
  operatorNegation: (arg0: Function) => Function;
  /**
   * Returns a list of items present in both supplied lists
   */
  listIntersection: (arg0: any[], arg1: any[]) => any[];
  /**
   * Takes the disjunction of two predicates.
   */
  operatorDisjunction: (arg0: Function, arg1: Function) => Function;
  /**
   * The entity health
   */
  entityHealth: (arg0: ValueEntity) => number;
  /**
   * The item the given entity is currently holding in its main hand.
   */
  entityHeldItem: (arg0: ValueEntity) => ValueItemstack;
  /**
   * Copy the given fluid with the given amount
   */
  fluidstackWithAmount: (arg0: ValueFluidstack, arg1: number) => ValueFluidstack;
  /**
   * Create an NBT Integer tag from the given Integer value
   */
  integerAsNbt: (arg0: number) => Record<string, any>;
  /**
   * Remove the first element from the list.
   */
  listTail: (arg0: any[]) => any[];
  /**
   * The break sound of the given block
   */
  blockBreakSound: (arg0: ValueBlock) => string;
  /**
   * Apply the given operator on all elements of a list to reduce the list to one value.
   */
  operatorReduce: (arg0: Function, arg1: any[], arg2: any) => any;
  /**
   * Get a copy of the given ingredients with the given fluid at the given ingredient position
   */
  ingredientsWithFluid: (arg0: ValueIngredients, arg1: number, arg2: ValueFluidstack) => ValueIngredients;
  /**
   * The Tag names (strings) of the given block
   */
  blockTags: (arg0: ValueBlock) => any[];
  stringParseAsDouble: (arg0: string) => number;
  /**
   * Get a copy of the given NBT compound tag with the given Double as a float entry
   */
  nbtWithFloat: (arg0: Record<string, any>, arg1: string, arg2: number) => Record<string, any>;
  numberModulus: (arg0: number, arg1: number) => number;
  /**
   * The entity width
   */
  entityWidth: (arg0: ValueEntity) => number;
  /**
   * The current stack size
   */
  itemstackSize: (arg0: ValueItemstack) => number;
  /**
   * If the entity is an animal
   */
  entityIsAnimal: (arg0: ValueEntity) => boolean;
  /**
   * Create an NBT String tag from the given String value
   */
  stringAsNbt: (arg0: string) => Record<string, any>;
  integerLeftShift: (arg0: number, arg1: number) => number;
  /**
   * If the given value is null
   */
  anyIsNull: (arg0: any) => boolean;
  /**
   * If the entity is a player
   */
  entityIsPlayer: (arg0: ValueEntity) => boolean;
  /**
   * The name of the mod owning the given item
   */
  itemstackMod: (arg0: ValueItemstack) => string;
  /**
   * The fluid temperature
   */
  fluidstackTemperature: (arg0: ValueFluidstack) => number;
  /**
   * Get a copy of the given NBT compound tag with the given NBT entry
   */
  nbtWithTag: (arg0: Record<string, any>, arg1: string, arg2: Record<string, any>) => Record<string, any>;
  integerIntegerToLong: (arg0: number) => number;
  /**
   * The difference of the given NBT compound tags. Nested tags will be subtracted recursively.
   */
  nbtMinus: (arg0: Record<string, any>, arg1: Record<string, any>) => Record<string, any>;
  /**
   * In the context of the given Player Entity, get the tooltip of the given item as a list of strings.
   */
  entityEntityItemTooltip: (arg0: ValueEntity, arg1: ValueItemstack) => any[];
  /**
   * Get a copy of the given NBT compound tag with the given NBT Long Array entry
   */
  nbtWithListLong: (arg0: Record<string, any>, arg1: string, arg2: any[]) => Record<string, any>;
  /**
   * The length of the given String
   */
  stringLength: (arg0: string) => number;
  /**
   * The Tag values (items) of the given item tag name
   */
  stringItemsByTag: (arg0: string) => any[];
  /**
   * Create a new operator that gives its input to the first and second operators, and pipes the outputs from both of them to the third operator.
   */
  operatorPipe2: (arg0: Function, arg1: Function, arg2: Function) => Function;
  /**
   * Get the Integer value of the given NBT Integer tag
   */
  nbtAsInt: (arg0: Record<string, any>) => number;
  /**
   * If the item can harvest the given block
   */
  itemstackCanHarvest: (arg0: ValueItemstack, arg1: ValueBlock) => boolean;
  /**
   * The number of times the given element is found in the list.
   */
  listCount: (arg0: any[], arg1: any) => number;
  /**
   * Get the value of the given data component key.
   */
  itemstackDataValue: (arg0: ValueItemstack, arg1: string) => Record<string, any>;
  booleanNand: (arg0: boolean, arg1: boolean) => boolean;
  /**
   * The list of items the entity is carrying as armor.
   */
  entityArmorInventory: (arg0: ValueEntity) => any[];
  /**
   * Cast any Number to a Double
   */
  numberToDouble: (arg0: number) => number;
  /**
   * Create a new operator that pipes the output from the first operator to the second operator.
   */
  operatorPipe: (arg0: Function, arg1: Function) => Function;
  /**
   * If the entity is a minecart
   */
  entityIsMinecart: (arg0: ValueEntity) => boolean;
  /**
   * Get a list containing pieces, split on the given regular expression, of the given string.
   */
  stringSplitOnRegex: (arg0: string, arg1: string) => any[];
  numberLessThan: (arg0: number, arg1: number) => boolean;
  integerComplement: (arg0: number) => number;
  /**
   * The fuel burn time in ticks of the given item
   */
  itemstackBurnTime: (arg0: ValueItemstack) => number;
  /**
   * The number of times the given predicate returns true for the elements in the list.
   */
  listCountPredicate: (arg0: any[], arg1: Function) => number;
  /**
   * If the entity is a mob
   */
  entityIsMob: (arg0: ValueEntity) => boolean;
  /**
   * Get a copy of the given NBT compound tag with the given Boolean entry
   */
  nbtWithBoolean: (arg0: Record<string, any>, arg1: string, arg2: boolean) => Record<string, any>;
  /**
   * The energy capacity of this entity.
   */
  entityEnergyCapacity: (arg0: ValueEntity) => number;
  /**
   * Get the Long value of the given NBT Long tag
   */
  nbtAsLong: (arg0: Record<string, any>) => number;
  /**
   * If the list is empty
   */
  listIsEmpty: (arg0: any[]) => boolean;
  /**
   * The current item damage
   */
  itemstackDamage: (arg0: ValueItemstack) => number;
  /**
   * Round to the nearest Integer
   */
  numberRound: (arg0: number) => number;
  /**
   * The fluids that are contained within this entity.
   */
  entityFluids: (arg0: ValueEntity) => any[];
  /**
   * If the fluid is lighter than air
   */
  fluidstackIsLighterThanAir: (arg0: ValueFluidstack) => boolean;
  /**
   * Check if two lists are equal according to set semantics.
   */
  listEquals_set: (arg0: any[], arg1: any[]) => boolean;
  /**
   * The entities that are currently mounted on the given entity.
   */
  entityMounted: (arg0: ValueEntity) => any[];
  stringParseAsLong: (arg0: string) => number;
  /**
   * If the given NBT compound tag contains the given key
   */
  nbtHasKey: (arg0: Record<string, any>, arg1: string) => boolean;
  /**
   * Get the data of the given item as NBT.
   */
  itemstackNbt: (arg0: ValueItemstack) => Record<string, any>;
  /**
   * If the given block is opaque, non-transparent
   */
  blockIsOpaque: (arg0: ValueBlock) => boolean;
  /**
   * If the entity is wet
   */
  entityIsWet: (arg0: ValueEntity) => boolean;
  /**
   * Cast any Number to an Integer
   */
  numberToInteger: (arg0: number) => number;
  booleanOr: (arg0: boolean, arg1: boolean) => boolean;
  /**
   * A copy of the input value.
   */
  anyIdentity: (arg0: any) => any;
  /**
   * The fluid viscosity
   */
  fluidstackViscosity: (arg0: ValueFluidstack) => number;
  /**
   * Get a copy of the given recipe with the given ingredients as output
   */
  recipeWithOutput: (arg0: ValueRecipe, arg1: ValueIngredients) => ValueRecipe;
  /**
   * If the raw items of the given items are equal, ignoring NBT, item count, and damage values.
   */
  itemstackIsEqualRaw: (arg0: ValueItemstack, arg1: ValueItemstack) => boolean;
  /**
   * Get a copy of the given NBT compound tag without the given key
   */
  nbtWithout: (arg0: Record<string, any>, arg1: string) => Record<string, any>;
  /**
   * Tests whether two values are unequal. The types of both must be the same.
   */
  anyNotEquals: (arg0: any, arg1: any) => boolean;
  numberSubtract: (arg0: number, arg1: number) => number;
  /**
   * Get the string or name of a named object or converts it to a string
   */
  namedName: (arg0: any) => string;
  /**
   * The rotation from the given Item Frame.
   */
  entityItemFrameRotation: (arg0: ValueEntity) => number;
  /**
   * Get the Byte List value of the given NBT Byte Array tag
   */
  nbtAsByteList: (arg0: Record<string, any>) => any[];
  /**
   * Create an NBT List tag from the given NBT List value
   */
  tagListAsNbt: (arg0: any[]) => Record<string, any>;
  /**
   * The items that are contained within this entity.
   */
  entityItems: (arg0: ValueEntity) => any[];
  /**
   * The output ingredients of the given recipe
   */
  recipeOutput: (arg0: ValueRecipe) => ValueIngredients;
  /**
   * Get a copy of the given ingredients with the given list of fluids at the given ingredient position
   */
  ingredientsWithFluids: (arg0: ValueIngredients, arg1: any[]) => ValueIngredients;
  /**
   * Apply for a given operator a given value.
   */
  operatorApply: (arg0: Function, arg1: any) => any;
  /**
   * Show a shorter, less precise representation of a Number
   */
  numberCompact: (arg0: number) => string;
  /**
   * Create an NBT Integer Array tag from the given Integer List value
   */
  intListAsNbt: (arg0: any[]) => Record<string, any>;
  /**
   * The Compound value in the given NBT compound tag with the given key
   */
  nbtGetCompound: (arg0: Record<string, any>, arg1: string) => Record<string, any>;
  /**
   * The fluid from the given item
   */
  itemstackFluidStack: (arg0: ValueItemstack) => ValueFluidstack;
  /**
   * The entity height
   */
  entityHeight: (arg0: ValueEntity) => number;
  /**
   * Create a recipe with the first ingredients as input, and the second ingredients as output
   */
  ingredientsWithInputOutput: (arg0: ValueIngredients, arg1: ValueIngredients) => ValueRecipe;
  /**
   * Get the unique name of an object
   */
  uniquely_namedUniqueName: (arg0: any) => string;
  /**
   * Get the value of the given data component key.
   */
  fluidstackDataValue: (arg0: ValueFluidstack, arg1: string) => Record<string, any>;
  /**
   * If the given block is shearable
   */
  blockIsShearable: (arg0: ValueBlock) => boolean;
  doubleDoubleToInteger: (arg0: number) => number;
  /**
   * If the item is enchanted
   */
  itemstackIsEnchanted: (arg0: ValueItemstack) => boolean;
  /**
   * The age of the given plant block
   */
  blockPlantAge: (arg0: ValueBlock) => number;
  /**
   * If the string given matches the end of the given string.
   */
  stringEndsWith: (arg0: string, arg1: string) => boolean;
  /**
   * If the given item has an inventory
   */
  itemstackHasInventory: (arg0: ValueItemstack) => boolean;
  numberAdd: (arg0: number, arg1: number) => number;
  /**
   * Flip the two first input parameters of an operator.
   */
  operatorFlip: (arg0: Function) => Function;
  /**
   * Get a copy of the given recipe with the given ingredients as input
   */
  recipeWithInput: (arg0: ValueRecipe, arg1: ValueIngredients) => ValueRecipe;
  numberIncrement: (arg0: number) => number;
  /**
   * The strength this item has against the given block
   */
  itemstackStrength: (arg0: ValueItemstack, arg1: ValueBlock) => number;
  /**
   * Round down to the nearest Integer
   */
  numberFloor: (arg0: number) => number;
  integerBinaryOr: (arg0: number, arg1: number) => number;
  /**
   * The list of items
   */
  ingredientsItems: (arg0: ValueIngredients) => any[];
  /**
   * The union of the given NBT compound tags. Nested tags will be joined recursively.
   */
  nbtUnion: (arg0: Record<string, any>, arg1: Record<string, any>) => Record<string, any>;
  /**
   * Deduplicate all elements in the list.
   */
  listUnique: (arg0: any[]) => any[];
  integerBinaryAnd: (arg0: number, arg1: number) => number;
  /**
   * The item the given entity is currently holding in its off-hand.
   */
  entityHeldItemOffHand: (arg0: ValueEntity) => ValueItemstack;
  /**
   * Create a joined string with the given string delimiter and the given list of strings.
   */
  stringJoin: (arg0: string, arg1: any[]) => string;
  numberGreaterThan: (arg0: number, arg1: number) => boolean;
  /**
   * Safely get the list element at the given position, if that element is not available, return the given default value.
   */
  listGetOrDefault: (arg0: any[], arg1: number, arg2: any) => any;
  /**
   * Get the block properties as NBT compound tag.
   */
  blockProperties: (arg0: ValueBlock) => Record<string, any>;
  /**
   * If the given value is not null
   */
  anyIsNotNull: (arg0: any) => boolean;
  /**
   * Get a copy of the given NBT compound tag with the given Long entry
   */
  nbtWithLong: (arg0: Record<string, any>, arg1: string, arg2: number) => Record<string, any>;
  /**
   * The rarity of the item
   */
  itemstackRarity: (arg0: ValueItemstack) => string;
  /**
   * If the entity is eating
   */
  entityIsEating: (arg0: ValueEntity) => boolean;
  /**
   * Apply for a given operator without arguments.
   */
  operatorApply0: (arg0: Function) => any;
  /**
   * Get the Integer value of the given NBT Byte tag
   */
  nbtAsByte: (arg0: Record<string, any>) => number;
  /**
   * Get the NBT List value of the given NBT List tag
   */
  nbtAsTagList: (arg0: Record<string, any>) => any[];
  booleanNor: (arg0: boolean, arg1: boolean) => boolean;
  /**
   * Apply for a given operator the given three values.
   */
  operatorApply3: (arg0: Function, arg1: any, arg2: any, arg3: any) => any;
  booleanNot: (arg0: boolean) => boolean;
  doubleSqrt: (arg0: number) => number;
  /**
   * Apply for a given operator the given two values.
   */
  operatorApply2: (arg0: Function, arg1: any, arg2: any) => any;
  /**
   * If the given item can be used as fuel
   */
  itemstackCanBurn: (arg0: ValueItemstack) => boolean;
  /**
   * Right Shift with ones fill
   */
  integerRightShift: (arg0: number, arg1: number) => number;
  /**
   * The Integer Array in the given NBT compound tag with the given key as Integer List
   */
  nbtGetListInt: (arg0: Record<string, any>, arg1: string) => any[];
  /**
   * The contents from the given Item Frame.
   */
  entityItemFrameContents: (arg0: ValueEntity) => ValueItemstack;
  /**
   * Get the list element at the given position, throws an error if the index is out of bounds.
   */
  listGet: (arg0: any[], arg1: number) => any;
  /**
   * If the first NBT compound tag is a subset of, or equal to the second NBT compound tag. This will recursively check nested tags.
   */
  nbtIsSubset: (arg0: Record<string, any>, arg1: Record<string, any>) => boolean;
  /**
   * The bucket empty sound for the fluid
   */
  fluidstackBucketEmptySound: (arg0: ValueFluidstack) => string;
  /**
   * Create an NBT Byte Array tag from the given Integer List value
   */
  byteListAsNbt: (arg0: any[]) => Record<string, any>;
  /**
   * If the regular expression given matches the given string.
   */
  stringMatchesRegex: (arg0: string, arg1: string) => boolean;
  /**
   * Takes the largest of two values.
   */
  numberMax: (arg0: number, arg1: number) => number;
  /**
   * Create an NBT Float tag from the given Double value
   */
  floatAsNbt: (arg0: number) => Record<string, any>;
  /**
   * If the list is not empty
   */
  listIsNotEmpty: (arg0: any[]) => boolean;
  /**
   * The name of the mod owning the given fluid
   */
  fluidstackMod: (arg0: ValueFluidstack) => string;
  /**
   * The maximum amount of energy that can be stored in this item
   */
  itemstackEnergyCapacity: (arg0: ValueItemstack) => number;
  stringParseAsInteger: (arg0: string) => number;
  /**
   * If the entity is crouching
   */
  entityIsCrouching: (arg0: ValueEntity) => boolean;
  /**
   * The Long value in the given NBT compound tag with the given key
   */
  nbtGetLong: (arg0: Record<string, any>, arg1: string) => number;
  /**
   * Get a copy of the given NBT compound tag with the given String entry
   */
  nbtWithString: (arg0: Record<string, any>, arg1: string, arg2: string) => Record<string, any>;
  /**
   * If the given entity is in love and is ready to breed.
   */
  entityIsInLove: (arg0: ValueEntity) => boolean;
  /**
   * The value of any type in the given NBT compound tag with the given key
   */
  nbtGetTag: (arg0: Record<string, any>, arg1: string) => Record<string, any>;
  /**
   * The String value in the given NBT compound tag with the given key
   */
  nbtGetString: (arg0: Record<string, any>, arg1: string) => string;
  /**
   * A copy of the first input value.
   */
  anyConstant: (arg0: any, arg1: any) => any;
  /**
   * The filled bucket for the fluid
   */
  fluidstackBucket: (arg0: ValueFluidstack) => ValueItemstack;
  /**
   * Build a list lazily using a start value and an operator that is applied to the previous element to get a next element.
   */
  anyLazyBuilt: (arg0: any, arg1: Function) => any[];
  /**
   * Get the given block applied with the given properties.
   */
  blockWithProperties: (arg0: ValueBlock, arg1: Record<string, any>) => ValueBlock;
  numberMultiply: (arg0: number, arg1: number) => number;
  /**
   * Right Shift with zeros fill
   */
  integerUnsignedRightShift: (arg0: number, arg1: number) => number;
  /**
   * Get the operator that has the given unique name.
   */
  stringOperatorByName: (arg0: string) => Function;
  /**
   * The Integer value in the given NBT compound tag with the given key
   */
  nbtGetInteger: (arg0: Record<string, any>, arg1: string) => number;
  /**
   * The input ingredients of the given recipe
   */
  recipeInput: (arg0: ValueRecipe) => ValueIngredients;
  /**
   * Get the Integer value of the given NBT Short tag
   */
  nbtAsShort: (arg0: Record<string, any>) => number;
  /**
   * Get a copy of the given ingredients with the given energy at the given ingredient position
   */
  ingredientsWithEnergy: (arg0: ValueIngredients, arg1: number, arg2: number) => ValueIngredients;
  doublePow: (arg0: number, arg1: number) => number;
  /**
   * Get all possible block properties as an NBT compound tag with list values.
   */
  blockPossibleProperties: (arg0: ValueBlock) => Record<string, any>;
  /**
   * The Long Array in the given NBT compound tag with the given key as Long List
   */
  nbtGetListLong: (arg0: Record<string, any>, arg1: string) => any[];
  /**
   * The Boolean value in the given NBT compound tag with the given key
   */
  nbtGetBoolean: (arg0: Record<string, any>, arg1: string) => boolean;
  /**
   * The entity the given entity is currently looking at.
   */
  entityTargetEntity: (arg0: ValueEntity) => ValueEntity;
  /**
   * If the first value is true, the second value is taken, otherwise the third value.\nType two and three must be equal.
   */
  booleanChoice: (arg0: boolean, arg1: any, arg2: any) => any;
  /**
   * Create an NBT Short tag from the given Integer value
   */
  shortAsNbt: (arg0: number) => Record<string, any>;
  /**
   * The place sound of the given block
   */
  blockPlaceSound: (arg0: ValueBlock) => string;
  /**
   * Get the fluid corresponding to the given unique name.
   */
  stringFluidByName: (arg0: string) => ValueFluidstack;
  /**
   * Get the data of the given fluid as NBT.
   */
  fluidstackNbt: (arg0: ValueFluidstack) => Record<string, any>;
  /**
   * If the item stack can hold at least two items.
   */
  itemstackIsStackable: (arg0: ValueItemstack) => boolean;
  /**
   * The hurt sound of the given entity.
   */
  entityHurtSound: (arg0: ValueEntity) => string;
  /**
   * Get the tooltip of the given item as a list of strings.
   */
  itemstackTooltip: (arg0: ValueItemstack) => any[];
  /**
   * The fluid density
   */
  fluidstackDensity: (arg0: ValueFluidstack) => number;
  /**
   * The fluid vaporize sound for the fluid
   */
  fluidstackFluidVaporizeSound: (arg0: ValueFluidstack) => string;
  /**
   * Get all data component keys of the fluid stack.
   */
  fluidstackDataKeys: (arg0: ValueFluidstack) => any[];
  /**
   * If the given substring matches the start of the given string.
   */
  stringStartsWith: (arg0: string, arg1: string) => boolean;
  /**
   * If the given item can hold energy
   */
  itemstackIsEnergyContainer: (arg0: ValueItemstack) => boolean;
  /**
   * If the given entity is a child.
   */
  entityIsChild: (arg0: ValueEntity) => boolean;
  /**
   * Apply for a given operator the given list of values.
   */
  operatorApply_n: (arg0: Function, arg1: any[]) => any;
  /**
   * The name of the mod owning the given block
   */
  blockMod: (arg0: ValueBlock) => string;
  /**
   * If the given substring is contained within the given string.
   */
  stringContains: (arg0: string, arg1: string) => boolean;
  /**
   * Get the Double value of the given NBT Double tag
   */
  nbtAsDouble: (arg0: Record<string, any>) => number;
  /**
   * Get the index of the first occurrence of a substring matching the pattern in the given string.
   */
  stringIndexOfRegex: (arg0: string, arg1: string) => number;
  /**
   * Get a copy of the given NBT compound tag with the given Integer List as an NBT Byte Array entry
   */
  nbtWithByteList: (arg0: Record<string, any>, arg1: string, arg2: any[]) => Record<string, any>;
  /**
   * The block the given entity is currently looking at.
   */
  entityTargetBlock: (arg0: ValueEntity) => ValueBlock;
  /**
   * Get the Double value of the given NBT Float tag
   */
  nbtAsFloat: (arg0: Record<string, any>) => number;
  /**
   * Tests whether two values are equal. The types of both must be the same.
   */
  anyEquals: (arg0: any, arg1: any) => boolean;
  /**
   * If the given entity can be bred using the given item.
   */
  entityCanBreedWith: (arg0: ValueEntity, arg1: ValueItemstack) => boolean;
  /**
   * The Tag names (strings) of the given fluid
   */
  fluidstackTags: (arg0: ValueFluidstack) => any[];
  /**
   * Create an NBT Long Array tag from the given Long List value
   */
  longListAsNbt: (arg0: any[]) => Record<string, any>;
  /**
   * Get the Long List value of the given NBT Long Array tag
   */
  nbtAsLongList: (arg0: Record<string, any>) => any[];
  /**
   * Throw a custom error
   */
  stringStringError: (arg0: string) => string;
  /**
   * Create an NBT Long tag from the given Long value
   */
  longAsNbt: (arg0: number) => Record<string, any>;
  /**
   * Get the item corresponding to the given unique name.
   */
  stringItemByName: (arg0: string) => ValueItemstack;
  /**
   * Deduplicate all elements in the list based on the given comparator predicate.
   */
  listUniquePredicate: (arg0: any[], arg1: Function) => any[];
  /**
   * Get a list containing pieces, split on the given (literal) delimiter, of the given string.
   */
  stringSplitOn: (arg0: string, arg1: string) => any[];
  /**
   * If the regular expression given matches any substring of the given string.
   */
  stringContainsRegex: (arg0: string, arg1: string) => boolean;
  /**
   * Get all data component keys of the item stack.
   */
  itemstackDataKeys: (arg0: ValueItemstack) => any[];
  /**
   * Get the String value of the given NBT String tag
   */
  nbtAsString: (arg0: Record<string, any>) => string;
  stringParseAsBoolean: (arg0: string) => boolean;
  /**
   * Get a substring, from the given index (inclusive) to the given index (exclusive), of the given string.
   */
  integerSubstring: (arg0: number, arg1: number, arg2: string) => string;
  /**
   * Get a copy of the given NBT compound tag with the given Double entry
   */
  nbtWithDouble: (arg0: Record<string, any>, arg1: string, arg2: number) => Record<string, any>;
  /**
   * Round up to the nearest Integer
   */
  numberCeil: (arg0: number) => number;
  /**
   * Add the given data component key and value to the given item stack.
   */
  fluidstackWithData: (arg0: ValueFluidstack, arg1: string, arg2: Record<string, any>) => Record<string, any>;
  /**
   * The amount of mB
   */
  fluidstackAmount: (arg0: ValueFluidstack) => number;
  /**
   * Concatenate the two lists to each other.
   */
  listConcat: (arg0: any[], arg1: any[]) => any[];
  /**
   * Get a copy of the given NBT compound tag with the given NBT List entry
   */
  nbtWithTagList: (arg0: Record<string, any>, arg1: string, arg2: any[]) => Record<string, any>;
  /**
   * Apply the given NBT Path expression on the given NBT value, and return the first match
   */
  stringNbtPathMatchFirst: (arg0: string, arg1: Record<string, any>) => Record<string, any>;
  /**
   * The Tag values (fluids) of the given fluid tag name
   */
  stringFluidsByTag: (arg0: string) => any[];
  /**
   * Get the given entity as NBT.
   */
  entityNbt: (arg0: ValueEntity) => Record<string, any>;
  /**
   * If the item stack has data components.
   */
  itemstackHasNbt: (arg0: ValueItemstack) => boolean;
  /**
   * Append to the given list the given item.
   */
  listAppend: (arg0: any[], arg1: any) => any[];
  /**
   * Add the given data component key and value to the given item stack.
   */
  itemstackWithData: (arg0: ValueItemstack, arg1: string, arg2: Record<string, any>) => Record<string, any>;
  /**
   * Create an NBT Byte tag from the given Integer value
   */
  byteAsNbt: (arg0: number) => Record<string, any>;
  numberDivide: (arg0: number, arg1: number) => number;
  /**
   * If the raw items of the given stacks are equal, ignoring data components and item count but including damage values.
   */
  itemstackIsEqualNonNbt: (arg0: ValueItemstack, arg1: ValueItemstack) => boolean;
  /**
   * The list of energy elements
   */
  ingredientsEnergies: (arg0: ValueIngredients) => any[];
  /**
   * Get a copy of the given ingredients with the given list of items at the given ingredient position
   */
  ingredientsWithItems: (arg0: ValueIngredients, arg1: any[]) => ValueIngredients;
  anyGreaterThanOrEquals: (arg0: any, arg1: any) => boolean;
  /**
   * The fluid capacity of the given item in mB
   */
  itemstackFluidCapacity: (arg0: ValueItemstack) => number;
  /**
   * Get the total item count of exactly the given item in a list.
   */
  listItemListCount: (arg0: any[], arg1: ValueItemstack) => number;
  /**
   * The maximum stack size
   */
  itemstackMaxSize: (arg0: ValueItemstack) => number;
  /**
   * The intersection of the given NBT compound tags. Nested tags will be intersected recursively.
   */
  nbtIntersection: (arg0: Record<string, any>, arg1: Record<string, any>) => Record<string, any>;
  /**
   * The fluid rarity
   */
  fluidstackRarity: (arg0: ValueFluidstack) => string;
  /**
   * Find all instances of the search term and replace them with the given string, in the given string.
   */
  stringReplace: (arg0: string, arg1: string, arg2: string) => string;
  /**
   * Get a copy of the given NBT compound tag with the given Integer as a short entry
   */
  nbtWithShort: (arg0: Record<string, any>, arg1: string, arg2: number) => Record<string, any>;
  longLongToDouble: (arg0: number) => number;
  /**
   * Find all matches of the search pattern and replace them with the given string, in the given string.
   */
  stringReplaceRegex: (arg0: string, arg1: string, arg2: string) => string;
  /**
   * Get the index of the first occurrence of a substring matching the search term in the given string.
   */
  stringIndexOf: (arg0: string, arg1: string) => number;
  /**
   * The item representation of the given block
   */
  blockItemStack: (arg0: ValueBlock) => ValueItemstack;
  /**
   * Get the Integer List value of the given NBT Integer Array tag
   */
  nbtAsIntList: (arg0: Record<string, any>) => any[];
  /**
   * Get the block corresponding to the given unique name.
   */
  stringBlockByName: (arg0: string) => ValueBlock;
  /**
   * The block from the given item
   */
  itemstackBlock: (arg0: ValueItemstack) => ValueBlock;
  /**
   * Apply the given NBT Path expression on the given NBT value, and return all matches as a list
   */
  stringNbtPathMatchAll: (arg0: string, arg1: Record<string, any>) => any[];
  /**
   * The light level emitted by the fluid
   */
  fluidstackLightLevel: (arg0: ValueFluidstack) => number;
  /**
   * Get the first element of the given list.
   */
  listHead: (arg0: any[]) => any;
  /**
   * The Tag names (strings) of the given item
   */
  itemstackTags: (arg0: ValueItemstack) => any[];
  /**
   * Create an NBT Double tag from the given Double value
   */
  doubleAsNbt: (arg0: number) => Record<string, any>;
  /**
   * If the entity is an item
   */
  entityIsItem: (arg0: ValueEntity) => boolean;
  /**
   * The Byte Array in the given NBT compound tag with the given key as Integer List
   */
  nbtGetListByte: (arg0: Record<string, any>, arg1: string) => any[];
  /**
   * If the given player has an external gui open.
   */
  entityHasGuiOpen: (arg0: ValueEntity) => boolean;
  /**
   * Check if two lists are equal according to multiset semantics.
   */
  listEquals_multiset: (arg0: any[], arg1: any[]) => boolean;
  /**
   * Retrieve the inventory of the given item handler contents
   */
  itemstackInventory: (arg0: ValueItemstack) => any[];
  /**
   * Takes the conjunction of two predicates.
   */
  operatorConjunction: (arg0: Function, arg1: Function) => Function;
  /**
   * Retrieve the inventory size of the given item handler contents
   */
  itemstackInventorySize: (arg0: ValueItemstack) => number;
  /**
   * Concatenate the two given Strings to one
   */
  stringConcat: (arg0: string, arg1: string) => string;
  /**
   * If at least one of the elements of the list returns true for the given predicate.
   */
  listContainsPredicate: (arg0: any[], arg1: Function) => boolean;
  /**
   * The maximum item damage
   */
  itemstackMaxDamage: (arg0: ValueItemstack) => number;
  /**
   * The amount of energy that is stored in this entity.
   */
  entityEnergy: (arg0: ValueEntity) => number;
  /**
   * The name of the mod owning the given entity
   */
  entityMod: (arg0: ValueEntity) => string;
  /**
   * Get a copy of the given ingredients with the given list of energy elements at the given ingredient position
   */
  ingredientsWithEnergies: (arg0: ValueIngredients, arg1: any[]) => ValueIngredients;
  /**
   * Search for all matches of the given regular expression and return the group at the given index, in the given string.
   */
  stringRegexScan: (arg0: string, arg1: number, arg2: string) => any[];
  integerIntegerToDouble: (arg0: number) => number;
  /**
   * The age of the given entity.
   */
  entityAge: (arg0: ValueEntity) => number;
  /**
   * Take a subset of the given list from the given index (inclusive) to the given index (exclusive).
   */
  listSlice: (arg0: any[], arg1: number, arg2: number) => any[];
  /**
   * The list of items the player is carrying.
   */
  entityInventory: (arg0: ValueEntity) => any[];
  /**
   * Search for the given regular expression and return in that match the group at the given index, in the given string.
   */
  stringRegexGroup: (arg0: string, arg1: number, arg2: string) => string;
  /**
   * The Double value in the given NBT compound tag with the given key
   */
  nbtGetDouble: (arg0: Record<string, any>, arg1: string) => number;
  integerXor: (arg0: number, arg1: number) => number;
  /**
   * The Tag values (blocks) of the given block tag name
   */
  stringBlocksByTag: (arg0: string) => any[];
  /**
   * Set the stacksize for the given item
   */
  itemstackWithSize: (arg0: ValueItemstack, arg1: number) => ValueItemstack;
  /**
   * The number of entries inside the given NBT compound tag
   */
  nbtSize: (arg0: Record<string, any>) => number;
  /**
   * If the given entity is shearable
   */
  entityIsShearable: (arg0: ValueEntity) => boolean;
  /**
   * The repair cost of the item
   */
  itemstackRepairCost: (arg0: ValueItemstack) => number;
  /**
   * The step sound of the given block
   */
  blockStepSound: (arg0: ValueBlock) => string;
  /**
   * The length of the given list
   */
  listLength: (arg0: any[]) => number;
  /**
   * If the item can take damage.
   */
  itemstackIsDamageable: (arg0: ValueItemstack) => boolean;
  /**
   * If the item can be enchanted
   */
  itemstackIsEnchantable: (arg0: ValueItemstack) => boolean;
  /**
   * Filter a list of elements by matching them all with the given predicate.
   */
  operatorFilter: (arg0: Function, arg1: any[]) => any[];
  /**
   * Apply the given operator on all elements of a list to reduce the list to one value. reduce1(op, list) is equivalent to reduce(op, tail(list), head(list)).
   */
  operatorReduce1: (arg0: Function, arg1: any[]) => any;
  /**
   * Test if the given NBT Path expression matches with the given NBT value
   */
  stringNbtPathTest: (arg0: string, arg1: Record<string, any>) => boolean;
  /**
   * The list of fluids
   */
  ingredientsFluids: (arg0: ValueIngredients) => any[];
  /**
   * Get the Boolean value of the given NBT Byte tag
   */
  nbtAsBoolean: (arg0: Record<string, any>) => boolean;
  /**
   * If the given entity is ready to be bred.
   */
  entityCanBreed: (arg0: ValueEntity) => boolean;
  /**
   * The block of the fluid
   */
  fluidstackBlock: (arg0: ValueFluidstack) => ValueBlock;
  /**
   * The amount of energy stored in this item
   */
  itemstackEnergyStored: (arg0: ValueItemstack) => number;
  /**
   * The list of keys inside the given NBT compound tag
   */
  nbtKeys: (arg0: Record<string, any>) => any[];
  numberDecrement: (arg0: number) => number;
  booleanAnd: (arg0: boolean, arg1: boolean) => boolean;
}

export interface ValueItemstack {
  id_item: Record<string, any>;

  /**
   * If the raw items of the given stacks are equal, ignoring data components and item count but including damage values.
   */
  isEqualNonNbt: (arg0: ValueItemstack) => boolean;
  /**
   * If the raw items of the given items are equal, ignoring NBT, item count, and damage values.
   */
  isEqualRaw: (arg0: ValueItemstack) => boolean;
  /**
   * The current item damage
   */
  damage: () => number;
  /**
   * Get the data of the given item as NBT.
   */
  nbt: () => Record<string, any>;
  /**
   * If the item stack has data components.
   */
  hasNbt: () => boolean;
  /**
   * The name of the mod owning the given item
   */
  mod: () => string;
  /**
   * If the given item can be used as fuel
   */
  canBurn: () => boolean;
  /**
   * The strength this item has against the given block
   */
  strength: (arg0: ValueBlock) => number;
  /**
   * The maximum item damage
   */
  maxDamage: () => number;
  /**
   * Get the tooltip of the given item as a list of strings.
   */
  tooltip: () => any[];
  /**
   * The maximum stack size
   */
  maxSize: () => number;
  /**
   * Set the stacksize for the given item
   */
  withSize: (arg0: number) => ValueItemstack;
  /**
   * Retrieve the inventory of the given item handler contents
   */
  inventory: () => any[];
  /**
   * The maximum amount of energy that can be stored in this item
   */
  energyCapacity: () => number;
  /**
   * If the data components of the given items are equal
   */
  isNbtEqual: (arg0: ValueItemstack) => boolean;
  /**
   * If the given item can hold energy
   */
  isEnergyContainer: () => boolean;
  /**
   * The fuel burn time in ticks of the given item
   */
  burnTime: () => number;
  /**
   * If the item stack can hold at least two items.
   */
  isStackable: () => boolean;
  /**
   * If the item can be enchanted
   */
  isEnchantable: () => boolean;
  /**
   * The block from the given item
   */
  block: () => ValueBlock;
  /**
   * Get all data component keys of the item stack.
   */
  dataKeys: () => any[];
  /**
   * If the item can harvest the given block
   */
  canHarvest: (arg0: ValueBlock) => boolean;
  /**
   * If the item is enchanted
   */
  isEnchanted: () => boolean;
  /**
   * Get the value of the given data component key.
   */
  dataValue: (arg0: string) => Record<string, any>;
  /**
   * Retrieve the inventory size of the given item handler contents
   */
  inventorySize: () => number;
  /**
   * The Tag names (strings) of the given item
   */
  tags: () => any[];
  /**
   * If the given item has an inventory
   */
  hasInventory: () => boolean;
  /**
   * The fluid capacity of the given item in mB
   */
  fluidCapacity: () => number;
  /**
   * The current stack size
   */
  size: () => number;
  /**
   * If the item can take damage.
   */
  isDamageable: () => boolean;
  /**
   * Add the given data component key and value to the given item stack.
   */
  withData: (arg0: string, arg1: Record<string, any>) => Record<string, any>;
  /**
   * The fluid from the given item
   */
  fluidStack: () => ValueFluidstack;
  /**
   * If the given item has a fluid
   */
  isFluidStack: () => boolean;
  /**
   * The amount of energy stored in this item
   */
  energyStored: () => number;
  /**
   * The repair cost of the item
   */
  repairCost: () => number;
  /**
   * The rarity of the item
   */
  rarity: () => string;
}

export interface ValueBlock {
  id_block: Record<string, any>;

  /**
   * The item representation of the given block
   */
  itemStack: () => ValueItemstack;
  /**
   * The place sound of the given block
   */
  placeSound: () => string;
  /**
   * The name of the mod owning the given block
   */
  mod: () => string;
  /**
   * The step sound of the given block
   */
  stepSound: () => string;
  /**
   * Get the given block applied with the given properties.
   */
  withProperties: (arg0: Record<string, any>) => ValueBlock;
  /**
   * If the given block is opaque, non-transparent
   */
  isOpaque: () => boolean;
  /**
   * If the given block is shearable
   */
  isShearable: () => boolean;
  /**
   * The break sound of the given block
   */
  breakSound: () => string;
  /**
   * Get all possible block properties as an NBT compound tag with list values.
   */
  possibleProperties: () => Record<string, any>;
  /**
   * The age of the given plant block
   */
  plantAge: () => number;
  /**
   * Get the block properties as NBT compound tag.
   */
  properties: () => Record<string, any>;
  /**
   * The Tag names (strings) of the given block
   */
  tags: () => any[];
}

export interface ValueIngredients {
  id_ingredients: Record<string, any>;

  /**
   * Get a copy of the given ingredients with the given item at the given ingredient position
   */
  withItem: (arg0: number, arg1: ValueItemstack) => ValueIngredients;
  /**
   * The list of energy elements
   */
  energies: () => any[];
  /**
   * Get a copy of the given ingredients with the given fluid at the given ingredient position
   */
  withFluid: (arg0: number, arg1: ValueFluidstack) => ValueIngredients;
  /**
   * Get a copy of the given ingredients with the given list of energy elements at the given ingredient position
   */
  withEnergies: (arg0: any[]) => ValueIngredients;
  /**
   * Get a copy of the given ingredients with the given list of items at the given ingredient position
   */
  withItems: (arg0: any[]) => ValueIngredients;
  /**
   * The list of items
   */
  items: () => any[];
  /**
   * Create a recipe with the first ingredients as input, and the second ingredients as output
   */
  withInputOutput: (arg0: ValueIngredients) => ValueRecipe;
  /**
   * Get a copy of the given ingredients with the given list of fluids at the given ingredient position
   */
  withFluids: (arg0: any[]) => ValueIngredients;
  /**
   * The list of fluids
   */
  fluids: () => any[];
  /**
   * Get a copy of the given ingredients with the given energy at the given ingredient position
   */
  withEnergy: (arg0: number, arg1: number) => ValueIngredients;
}

export interface ValueRecipe {
  id_recipe: Record<string, any>;

  /**
   * The output ingredients of the given recipe
   */
  output: () => ValueIngredients;
  /**
   * The input ingredients of the given recipe
   */
  input: () => ValueIngredients;
  /**
   * Get a copy of the given recipe with the given ingredients as input
   */
  withInput: (arg0: ValueIngredients) => ValueRecipe;
  /**
   * Get a copy of the given recipe with the given ingredients as output
   */
  withOutput: (arg0: ValueIngredients) => ValueRecipe;
}

export interface ValueFluidstack {
  id_fluid: Record<string, any>;

  /**
   * Get all data component keys of the fluid stack.
   */
  dataKeys: () => any[];
  /**
   * Get the data of the given fluid as NBT.
   */
  nbt: () => Record<string, any>;
  /**
   * The amount of mB
   */
  amount: () => number;
  /**
   * The fluid vaporize sound for the fluid
   */
  fluidVaporizeSound: () => string;
  /**
   * The name of the mod owning the given fluid
   */
  mod: () => string;
  /**
   * The fluid density
   */
  density: () => number;
  /**
   * If the fluid is lighter than air
   */
  isLighterThanAir: () => boolean;
  /**
   * Get the value of the given data component key.
   */
  dataValue: (arg0: string) => Record<string, any>;
  /**
   * The bucket empty sound for the fluid
   */
  bucketEmptySound: () => string;
  /**
   * The bucket fill sound for the fluid
   */
  bucketFillSound: () => string;
  /**
   * The Tag names (strings) of the given fluid
   */
  tags: () => any[];
  /**
   * The filled bucket for the fluid
   */
  bucket: () => ValueItemstack;
  /**
   * The light level emitted by the fluid
   */
  lightLevel: () => number;
  /**
   * The fluid viscosity
   */
  viscosity: () => number;
  /**
   * Add the given data component key and value to the given item stack.
   */
  withData: (arg0: string, arg1: Record<string, any>) => Record<string, any>;
  /**
   * The fluid temperature
   */
  temperature: () => number;
  /**
   * The block of the fluid
   */
  block: () => ValueBlock;
  /**
   * If the raw fluids are equal, ignoring quantity
   */
  isRawEqual: (arg0: ValueFluidstack) => boolean;
  /**
   * Copy the given fluid with the given amount
   */
  withAmount: (arg0: number) => ValueFluidstack;
  /**
   * The fluid rarity
   */
  rarity: () => string;
}

export interface ValueEntity {
  id_entity: Record<string, any>;

  /**
   * If the entity is a player
   */
  isPlayer: () => boolean;
  /**
   * Get the given entity as NBT.
   */
  nbt: () => Record<string, any>;
  /**
   * In the context of the given Player Entity, get the tooltip of the given item as a list of strings.
   */
  entityItemTooltip: (arg0: ValueItemstack) => any[];
  /**
   * The name of the mod owning the given entity
   */
  mod: () => string;
  /**
   * The entity the given entity is currently looking at.
   */
  targetEntity: () => ValueEntity;
  /**
   * If the entity is a minecart
   */
  isMinecart: () => boolean;
  /**
   * If the entity is crouching
   */
  isCrouching: () => boolean;
  /**
   * If the entity is eating
   */
  isEating: () => boolean;
  /**
   * If the given entity can be bred using the given item.
   */
  canBreedWith: (arg0: ValueItemstack) => boolean;
  /**
   * If the entity is a mob
   */
  isMob: () => boolean;
  /**
   * The list of items the player is carrying.
   */
  inventory: () => any[];
  /**
   * The entity type name.
   */
  type: () => string;
  /**
   * If the given entity is in love and is ready to breed.
   */
  isInLove: () => boolean;
  /**
   * The energy capacity of this entity.
   */
  energyCapacity: () => number;
  /**
   * If the entity is burning
   */
  entityIsBurning: () => boolean;
  /**
   * The item the given entity is currently holding in its main hand.
   */
  heldItem: () => ValueItemstack;
  /**
   * If the given entity is ready to be bred.
   */
  canBreed: () => boolean;
  /**
   * If the given entity is a child.
   */
  isChild: () => boolean;
  /**
   * The entity height
   */
  height: () => number;
  /**
   * The block the given entity is currently looking at.
   */
  targetBlock: () => ValueBlock;
  /**
   * The fluids that are contained within this entity.
   */
  fluids: () => any[];
  /**
   * The amount of energy that is stored in this entity.
   */
  energy: () => number;
  /**
   * If the entity is wet
   */
  isWet: () => boolean;
  /**
   * The item from the item entity
   */
  item: () => ValueItemstack;
  /**
   * The entity health
   */
  health: () => number;
  /**
   * The death sound of the given entity.
   */
  deathSound: () => string;
  /**
   * The rotation from the given Item Frame.
   */
  itemFrameRotation: () => number;
  /**
   * The entities that are currently mounted on the given entity.
   */
  mounted: () => any[];
  /**
   * The item the given entity is currently holding in its off-hand.
   */
  heldItemOffHand: () => ValueItemstack;
  /**
   * If the given player has an external gui open.
   */
  hasGuiOpen: () => boolean;
  /**
   * If the entity is an animal
   */
  isAnimal: () => boolean;
  /**
   * The hurt sound of the given entity.
   */
  hurtSound: () => string;
  /**
   * If the given entity is shearable
   */
  isShearable: () => boolean;
  /**
   * The entity width
   */
  width: () => number;
  /**
   * The list of items the entity is carrying as armor.
   */
  armorInventory: () => any[];
  /**
   * If the entity is an item
   */
  isItem: () => boolean;
  /**
   * The items that are contained within this entity.
   */
  items: () => any[];
  /**
   * The contents from the given Item Frame.
   */
  itemFrameContents: () => ValueItemstack;
  /**
   * The age of the given entity.
   */
  age: () => number;
}

