var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};

// src/index.tsx
import { cva } from "class-variance-authority";

// src/utils/cn.ts
import clsx from "clsx";
import { twMerge } from "tailwind-merge";
function cn(...inputs) {
  return twMerge(clsx(...inputs));
}

// src/index.tsx
import { jsx } from "react/jsx-runtime";
var buttonVariants = cva(
  "py-2 px-3 rounded-lg flex items-center gap-2 text-sm",
  {
    variants: {
      variant: {
        primary: "bg-jojo700 enabled:hover:bg-jojo500 text-gray-100",
        secondary: "border border-jojo700 text-jojo700 font-semibold"
      }
    },
    defaultVariants: {
      variant: "primary"
    }
  }
);
function Button(_a) {
  var _b = _a, { variant, className } = _b, props = __objRest(_b, ["variant", "className"]);
  return /* @__PURE__ */ jsx(
    "button",
    __spreadValues({
      className: cn(buttonVariants({ className, variant }), "")
    }, props)
  );
}
export {
  Button
};
