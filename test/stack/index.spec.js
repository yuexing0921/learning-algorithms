import { testStack } from "./init";

import { Stack } from "../../src/stack";
import { ObjectStack } from "../../src/stack/ObjectStack";

testStack(Stack, "用数组构造的stack");
testStack(ObjectStack, "用Object构造的stack");
