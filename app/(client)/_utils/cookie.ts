import { getCookie, setCookie, deleteCookie } from "cookies-next";
import { OptionsType } from "cookies-next/lib/types";
import merge from "lodash.merge";

export class CookieManager {
  private _key: string | null = null;
  private _defaultOptions: OptionsType | null = null;

  constructor(key: string, defaultOptions?: OptionsType) {
    this._key = key;
    this._defaultOptions = defaultOptions ?? null;
  }

  get(options?: OptionsType) {
    if (!this._key) {
      throw new Error("Error on CookieManager.get(): key is not set");
    }
    return getCookie(this._key, merge(this._defaultOptions, options));
  }
  set(data: any, options?: OptionsType) {
    if (!this._key) {
      throw new Error("Error on CookieManager.set(): key is not set");
    }
    return setCookie(this._key, data, merge(this._defaultOptions, options));
  }
  delete(options?: OptionsType) {
    if (!this._key) {
      throw new Error("Error on CookieManager.delete(): key is not set");
    }
    return deleteCookie(this._key, merge(this._defaultOptions, options));
  }
}
