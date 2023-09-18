"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("obsidian");
const PUBLIC_VERSION = "4";
if (typeof window !== "undefined")
  (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(PUBLIC_VERSION);
function setActiveTabTitle(document, title) {
  const tabTitleElement = document.querySelector(
    ".workspace-tabs.mod-active .workspace-tab-header.is-active .workspace-tab-header-inner-title"
  );
  if (tabTitleElement && "innerText" in tabTitleElement) {
    tabTitleElement.innerText = title;
  }
}
var commonjsGlobal$1 = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
var lib = {};
Object.defineProperty(lib, "__esModule", { value: true });
class LuxonError extends Error {
}
class InvalidDateTimeError extends LuxonError {
  constructor(reason) {
    super(`Invalid DateTime: ${reason.toMessage()}`);
  }
}
class InvalidIntervalError extends LuxonError {
  constructor(reason) {
    super(`Invalid Interval: ${reason.toMessage()}`);
  }
}
class InvalidDurationError extends LuxonError {
  constructor(reason) {
    super(`Invalid Duration: ${reason.toMessage()}`);
  }
}
class ConflictingSpecificationError extends LuxonError {
}
class InvalidUnitError extends LuxonError {
  constructor(unit) {
    super(`Invalid unit ${unit}`);
  }
}
class InvalidArgumentError extends LuxonError {
}
class ZoneIsAbstractError extends LuxonError {
  constructor() {
    super("Zone is an abstract class");
  }
}
const n = "numeric", s = "short", l = "long";
const DATE_SHORT = {
  year: n,
  month: n,
  day: n
};
const DATE_MED = {
  year: n,
  month: s,
  day: n
};
const DATE_MED_WITH_WEEKDAY = {
  year: n,
  month: s,
  day: n,
  weekday: s
};
const DATE_FULL = {
  year: n,
  month: l,
  day: n
};
const DATE_HUGE = {
  year: n,
  month: l,
  day: n,
  weekday: l
};
const TIME_SIMPLE = {
  hour: n,
  minute: n
};
const TIME_WITH_SECONDS = {
  hour: n,
  minute: n,
  second: n
};
const TIME_WITH_SHORT_OFFSET = {
  hour: n,
  minute: n,
  second: n,
  timeZoneName: s
};
const TIME_WITH_LONG_OFFSET = {
  hour: n,
  minute: n,
  second: n,
  timeZoneName: l
};
const TIME_24_SIMPLE = {
  hour: n,
  minute: n,
  hourCycle: "h23"
};
const TIME_24_WITH_SECONDS = {
  hour: n,
  minute: n,
  second: n,
  hourCycle: "h23"
};
const TIME_24_WITH_SHORT_OFFSET = {
  hour: n,
  minute: n,
  second: n,
  hourCycle: "h23",
  timeZoneName: s
};
const TIME_24_WITH_LONG_OFFSET = {
  hour: n,
  minute: n,
  second: n,
  hourCycle: "h23",
  timeZoneName: l
};
const DATETIME_SHORT = {
  year: n,
  month: n,
  day: n,
  hour: n,
  minute: n
};
const DATETIME_SHORT_WITH_SECONDS = {
  year: n,
  month: n,
  day: n,
  hour: n,
  minute: n,
  second: n
};
const DATETIME_MED = {
  year: n,
  month: s,
  day: n,
  hour: n,
  minute: n
};
const DATETIME_MED_WITH_SECONDS = {
  year: n,
  month: s,
  day: n,
  hour: n,
  minute: n,
  second: n
};
const DATETIME_MED_WITH_WEEKDAY = {
  year: n,
  month: s,
  day: n,
  weekday: s,
  hour: n,
  minute: n
};
const DATETIME_FULL = {
  year: n,
  month: l,
  day: n,
  hour: n,
  minute: n,
  timeZoneName: s
};
const DATETIME_FULL_WITH_SECONDS = {
  year: n,
  month: l,
  day: n,
  hour: n,
  minute: n,
  second: n,
  timeZoneName: s
};
const DATETIME_HUGE = {
  year: n,
  month: l,
  day: n,
  weekday: l,
  hour: n,
  minute: n,
  timeZoneName: l
};
const DATETIME_HUGE_WITH_SECONDS = {
  year: n,
  month: l,
  day: n,
  weekday: l,
  hour: n,
  minute: n,
  second: n,
  timeZoneName: l
};
class Zone {
  /**
   * The type of zone
   * @abstract
   * @type {string}
   */
  get type() {
    throw new ZoneIsAbstractError();
  }
  /**
   * The name of this zone.
   * @abstract
   * @type {string}
   */
  get name() {
    throw new ZoneIsAbstractError();
  }
  get ianaName() {
    return this.name;
  }
  /**
   * Returns whether the offset is known to be fixed for the whole year.
   * @abstract
   * @type {boolean}
   */
  get isUniversal() {
    throw new ZoneIsAbstractError();
  }
  /**
   * Returns the offset's common name (such as EST) at the specified timestamp
   * @abstract
   * @param {number} ts - Epoch milliseconds for which to get the name
   * @param {Object} opts - Options to affect the format
   * @param {string} opts.format - What style of offset to return. Accepts 'long' or 'short'.
   * @param {string} opts.locale - What locale to return the offset name in.
   * @return {string}
   */
  offsetName(ts, opts) {
    throw new ZoneIsAbstractError();
  }
  /**
   * Returns the offset's value as a string
   * @abstract
   * @param {number} ts - Epoch milliseconds for which to get the offset
   * @param {string} format - What style of offset to return.
   *                          Accepts 'narrow', 'short', or 'techie'. Returning '+6', '+06:00', or '+0600' respectively
   * @return {string}
   */
  formatOffset(ts, format) {
    throw new ZoneIsAbstractError();
  }
  /**
   * Return the offset in minutes for this zone at the specified timestamp.
   * @abstract
   * @param {number} ts - Epoch milliseconds for which to compute the offset
   * @return {number}
   */
  offset(ts) {
    throw new ZoneIsAbstractError();
  }
  /**
   * Return whether this Zone is equal to another zone
   * @abstract
   * @param {Zone} otherZone - the zone to compare
   * @return {boolean}
   */
  equals(otherZone) {
    throw new ZoneIsAbstractError();
  }
  /**
   * Return whether this Zone is valid.
   * @abstract
   * @type {boolean}
   */
  get isValid() {
    throw new ZoneIsAbstractError();
  }
}
let singleton$1 = null;
class SystemZone extends Zone {
  /**
   * Get a singleton instance of the local zone
   * @return {SystemZone}
   */
  static get instance() {
    if (singleton$1 === null) {
      singleton$1 = new SystemZone();
    }
    return singleton$1;
  }
  /** @override **/
  get type() {
    return "system";
  }
  /** @override **/
  get name() {
    return new Intl.DateTimeFormat().resolvedOptions().timeZone;
  }
  /** @override **/
  get isUniversal() {
    return false;
  }
  /** @override **/
  offsetName(ts, { format, locale }) {
    return parseZoneInfo(ts, format, locale);
  }
  /** @override **/
  formatOffset(ts, format) {
    return formatOffset(this.offset(ts), format);
  }
  /** @override **/
  offset(ts) {
    return -new Date(ts).getTimezoneOffset();
  }
  /** @override **/
  equals(otherZone) {
    return otherZone.type === "system";
  }
  /** @override **/
  get isValid() {
    return true;
  }
}
let dtfCache = {};
function makeDTF(zone) {
  if (!dtfCache[zone]) {
    dtfCache[zone] = new Intl.DateTimeFormat("en-US", {
      hour12: false,
      timeZone: zone,
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      era: "short"
    });
  }
  return dtfCache[zone];
}
const typeToPos = {
  year: 0,
  month: 1,
  day: 2,
  era: 3,
  hour: 4,
  minute: 5,
  second: 6
};
function hackyOffset(dtf, date) {
  const formatted = dtf.format(date).replace(/\u200E/g, ""), parsed = /(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(formatted), [, fMonth, fDay, fYear, fadOrBc, fHour, fMinute, fSecond] = parsed;
  return [fYear, fMonth, fDay, fadOrBc, fHour, fMinute, fSecond];
}
function partsOffset(dtf, date) {
  const formatted = dtf.formatToParts(date);
  const filled = [];
  for (let i = 0; i < formatted.length; i++) {
    const { type, value } = formatted[i];
    const pos = typeToPos[type];
    if (type === "era") {
      filled[pos] = value;
    } else if (!isUndefined(pos)) {
      filled[pos] = parseInt(value, 10);
    }
  }
  return filled;
}
let ianaZoneCache = {};
class IANAZone extends Zone {
  /**
   * @param {string} name - Zone name
   * @return {IANAZone}
   */
  static create(name) {
    if (!ianaZoneCache[name]) {
      ianaZoneCache[name] = new IANAZone(name);
    }
    return ianaZoneCache[name];
  }
  /**
   * Reset local caches. Should only be necessary in testing scenarios.
   * @return {void}
   */
  static resetCache() {
    ianaZoneCache = {};
    dtfCache = {};
  }
  /**
   * Returns whether the provided string is a valid specifier. This only checks the string's format, not that the specifier identifies a known zone; see isValidZone for that.
   * @param {string} s - The string to check validity on
   * @example IANAZone.isValidSpecifier("America/New_York") //=> true
   * @example IANAZone.isValidSpecifier("Sport~~blorp") //=> false
   * @deprecated This method returns false for some valid IANA names. Use isValidZone instead.
   * @return {boolean}
   */
  static isValidSpecifier(s2) {
    return this.isValidZone(s2);
  }
  /**
   * Returns whether the provided string identifies a real zone
   * @param {string} zone - The string to check
   * @example IANAZone.isValidZone("America/New_York") //=> true
   * @example IANAZone.isValidZone("Fantasia/Castle") //=> false
   * @example IANAZone.isValidZone("Sport~~blorp") //=> false
   * @return {boolean}
   */
  static isValidZone(zone) {
    if (!zone) {
      return false;
    }
    try {
      new Intl.DateTimeFormat("en-US", { timeZone: zone }).format();
      return true;
    } catch (e) {
      return false;
    }
  }
  constructor(name) {
    super();
    this.zoneName = name;
    this.valid = IANAZone.isValidZone(name);
  }
  /** @override **/
  get type() {
    return "iana";
  }
  /** @override **/
  get name() {
    return this.zoneName;
  }
  /** @override **/
  get isUniversal() {
    return false;
  }
  /** @override **/
  offsetName(ts, { format, locale }) {
    return parseZoneInfo(ts, format, locale, this.name);
  }
  /** @override **/
  formatOffset(ts, format) {
    return formatOffset(this.offset(ts), format);
  }
  /** @override **/
  offset(ts) {
    const date = new Date(ts);
    if (isNaN(date))
      return NaN;
    const dtf = makeDTF(this.name);
    let [year, month, day, adOrBc, hour, minute, second] = dtf.formatToParts ? partsOffset(dtf, date) : hackyOffset(dtf, date);
    if (adOrBc === "BC") {
      year = -Math.abs(year) + 1;
    }
    const adjustedHour = hour === 24 ? 0 : hour;
    const asUTC = objToLocalTS({
      year,
      month,
      day,
      hour: adjustedHour,
      minute,
      second,
      millisecond: 0
    });
    let asTS = +date;
    const over = asTS % 1e3;
    asTS -= over >= 0 ? over : 1e3 + over;
    return (asUTC - asTS) / (60 * 1e3);
  }
  /** @override **/
  equals(otherZone) {
    return otherZone.type === "iana" && otherZone.name === this.name;
  }
  /** @override **/
  get isValid() {
    return this.valid;
  }
}
let intlLFCache = {};
function getCachedLF(locString, opts = {}) {
  const key = JSON.stringify([locString, opts]);
  let dtf = intlLFCache[key];
  if (!dtf) {
    dtf = new Intl.ListFormat(locString, opts);
    intlLFCache[key] = dtf;
  }
  return dtf;
}
let intlDTCache = {};
function getCachedDTF(locString, opts = {}) {
  const key = JSON.stringify([locString, opts]);
  let dtf = intlDTCache[key];
  if (!dtf) {
    dtf = new Intl.DateTimeFormat(locString, opts);
    intlDTCache[key] = dtf;
  }
  return dtf;
}
let intlNumCache = {};
function getCachedINF(locString, opts = {}) {
  const key = JSON.stringify([locString, opts]);
  let inf = intlNumCache[key];
  if (!inf) {
    inf = new Intl.NumberFormat(locString, opts);
    intlNumCache[key] = inf;
  }
  return inf;
}
let intlRelCache = {};
function getCachedRTF(locString, opts = {}) {
  const { base, ...cacheKeyOpts } = opts;
  const key = JSON.stringify([locString, cacheKeyOpts]);
  let inf = intlRelCache[key];
  if (!inf) {
    inf = new Intl.RelativeTimeFormat(locString, opts);
    intlRelCache[key] = inf;
  }
  return inf;
}
let sysLocaleCache = null;
function systemLocale() {
  if (sysLocaleCache) {
    return sysLocaleCache;
  } else {
    sysLocaleCache = new Intl.DateTimeFormat().resolvedOptions().locale;
    return sysLocaleCache;
  }
}
function parseLocaleString(localeStr) {
  const xIndex = localeStr.indexOf("-x-");
  if (xIndex !== -1) {
    localeStr = localeStr.substring(0, xIndex);
  }
  const uIndex = localeStr.indexOf("-u-");
  if (uIndex === -1) {
    return [localeStr];
  } else {
    let options;
    let selectedStr;
    try {
      options = getCachedDTF(localeStr).resolvedOptions();
      selectedStr = localeStr;
    } catch (e) {
      const smaller = localeStr.substring(0, uIndex);
      options = getCachedDTF(smaller).resolvedOptions();
      selectedStr = smaller;
    }
    const { numberingSystem, calendar } = options;
    return [selectedStr, numberingSystem, calendar];
  }
}
function intlConfigString(localeStr, numberingSystem, outputCalendar) {
  if (outputCalendar || numberingSystem) {
    if (!localeStr.includes("-u-")) {
      localeStr += "-u";
    }
    if (outputCalendar) {
      localeStr += `-ca-${outputCalendar}`;
    }
    if (numberingSystem) {
      localeStr += `-nu-${numberingSystem}`;
    }
    return localeStr;
  } else {
    return localeStr;
  }
}
function mapMonths(f) {
  const ms = [];
  for (let i = 1; i <= 12; i++) {
    const dt = DateTime.utc(2016, i, 1);
    ms.push(f(dt));
  }
  return ms;
}
function mapWeekdays(f) {
  const ms = [];
  for (let i = 1; i <= 7; i++) {
    const dt = DateTime.utc(2016, 11, 13 + i);
    ms.push(f(dt));
  }
  return ms;
}
function listStuff(loc, length, defaultOK, englishFn, intlFn) {
  const mode = loc.listingMode(defaultOK);
  if (mode === "error") {
    return null;
  } else if (mode === "en") {
    return englishFn(length);
  } else {
    return intlFn(length);
  }
}
function supportsFastNumbers(loc) {
  if (loc.numberingSystem && loc.numberingSystem !== "latn") {
    return false;
  } else {
    return loc.numberingSystem === "latn" || !loc.locale || loc.locale.startsWith("en") || new Intl.DateTimeFormat(loc.intl).resolvedOptions().numberingSystem === "latn";
  }
}
class PolyNumberFormatter {
  constructor(intl, forceSimple, opts) {
    this.padTo = opts.padTo || 0;
    this.floor = opts.floor || false;
    const { padTo, floor, ...otherOpts } = opts;
    if (!forceSimple || Object.keys(otherOpts).length > 0) {
      const intlOpts = { useGrouping: false, ...opts };
      if (opts.padTo > 0)
        intlOpts.minimumIntegerDigits = opts.padTo;
      this.inf = getCachedINF(intl, intlOpts);
    }
  }
  format(i) {
    if (this.inf) {
      const fixed = this.floor ? Math.floor(i) : i;
      return this.inf.format(fixed);
    } else {
      const fixed = this.floor ? Math.floor(i) : roundTo(i, 3);
      return padStart(fixed, this.padTo);
    }
  }
}
class PolyDateFormatter {
  constructor(dt, intl, opts) {
    this.opts = opts;
    let z = void 0;
    if (dt.zone.isUniversal) {
      const gmtOffset = -1 * (dt.offset / 60);
      const offsetZ = gmtOffset >= 0 ? `Etc/GMT+${gmtOffset}` : `Etc/GMT${gmtOffset}`;
      if (dt.offset !== 0 && IANAZone.create(offsetZ).valid) {
        z = offsetZ;
        this.dt = dt;
      } else {
        z = "UTC";
        if (opts.timeZoneName) {
          this.dt = dt;
        } else {
          this.dt = dt.offset === 0 ? dt : DateTime.fromMillis(dt.ts + dt.offset * 60 * 1e3);
        }
      }
    } else if (dt.zone.type === "system") {
      this.dt = dt;
    } else {
      this.dt = dt;
      z = dt.zone.name;
    }
    const intlOpts = { ...this.opts };
    intlOpts.timeZone = intlOpts.timeZone || z;
    this.dtf = getCachedDTF(intl, intlOpts);
  }
  format() {
    return this.dtf.format(this.dt.toJSDate());
  }
  formatToParts() {
    return this.dtf.formatToParts(this.dt.toJSDate());
  }
  resolvedOptions() {
    return this.dtf.resolvedOptions();
  }
}
class PolyRelFormatter {
  constructor(intl, isEnglish, opts) {
    this.opts = { style: "long", ...opts };
    if (!isEnglish && hasRelative()) {
      this.rtf = getCachedRTF(intl, opts);
    }
  }
  format(count, unit) {
    if (this.rtf) {
      return this.rtf.format(count, unit);
    } else {
      return formatRelativeTime(unit, count, this.opts.numeric, this.opts.style !== "long");
    }
  }
  formatToParts(count, unit) {
    if (this.rtf) {
      return this.rtf.formatToParts(count, unit);
    } else {
      return [];
    }
  }
}
class Locale {
  static fromOpts(opts) {
    return Locale.create(opts.locale, opts.numberingSystem, opts.outputCalendar, opts.defaultToEN);
  }
  static create(locale, numberingSystem, outputCalendar, defaultToEN = false) {
    const specifiedLocale = locale || Settings.defaultLocale;
    const localeR = specifiedLocale || (defaultToEN ? "en-US" : systemLocale());
    const numberingSystemR = numberingSystem || Settings.defaultNumberingSystem;
    const outputCalendarR = outputCalendar || Settings.defaultOutputCalendar;
    return new Locale(localeR, numberingSystemR, outputCalendarR, specifiedLocale);
  }
  static resetCache() {
    sysLocaleCache = null;
    intlDTCache = {};
    intlNumCache = {};
    intlRelCache = {};
  }
  static fromObject({ locale, numberingSystem, outputCalendar } = {}) {
    return Locale.create(locale, numberingSystem, outputCalendar);
  }
  constructor(locale, numbering, outputCalendar, specifiedLocale) {
    const [parsedLocale, parsedNumberingSystem, parsedOutputCalendar] = parseLocaleString(locale);
    this.locale = parsedLocale;
    this.numberingSystem = numbering || parsedNumberingSystem || null;
    this.outputCalendar = outputCalendar || parsedOutputCalendar || null;
    this.intl = intlConfigString(this.locale, this.numberingSystem, this.outputCalendar);
    this.weekdaysCache = { format: {}, standalone: {} };
    this.monthsCache = { format: {}, standalone: {} };
    this.meridiemCache = null;
    this.eraCache = {};
    this.specifiedLocale = specifiedLocale;
    this.fastNumbersCached = null;
  }
  get fastNumbers() {
    if (this.fastNumbersCached == null) {
      this.fastNumbersCached = supportsFastNumbers(this);
    }
    return this.fastNumbersCached;
  }
  listingMode() {
    const isActuallyEn = this.isEnglish();
    const hasNoWeirdness = (this.numberingSystem === null || this.numberingSystem === "latn") && (this.outputCalendar === null || this.outputCalendar === "gregory");
    return isActuallyEn && hasNoWeirdness ? "en" : "intl";
  }
  clone(alts) {
    if (!alts || Object.getOwnPropertyNames(alts).length === 0) {
      return this;
    } else {
      return Locale.create(
        alts.locale || this.specifiedLocale,
        alts.numberingSystem || this.numberingSystem,
        alts.outputCalendar || this.outputCalendar,
        alts.defaultToEN || false
      );
    }
  }
  redefaultToEN(alts = {}) {
    return this.clone({ ...alts, defaultToEN: true });
  }
  redefaultToSystem(alts = {}) {
    return this.clone({ ...alts, defaultToEN: false });
  }
  months(length, format = false, defaultOK = true) {
    return listStuff(this, length, defaultOK, months, () => {
      const intl = format ? { month: length, day: "numeric" } : { month: length }, formatStr = format ? "format" : "standalone";
      if (!this.monthsCache[formatStr][length]) {
        this.monthsCache[formatStr][length] = mapMonths((dt) => this.extract(dt, intl, "month"));
      }
      return this.monthsCache[formatStr][length];
    });
  }
  weekdays(length, format = false, defaultOK = true) {
    return listStuff(this, length, defaultOK, weekdays, () => {
      const intl = format ? { weekday: length, year: "numeric", month: "long", day: "numeric" } : { weekday: length }, formatStr = format ? "format" : "standalone";
      if (!this.weekdaysCache[formatStr][length]) {
        this.weekdaysCache[formatStr][length] = mapWeekdays(
          (dt) => this.extract(dt, intl, "weekday")
        );
      }
      return this.weekdaysCache[formatStr][length];
    });
  }
  meridiems(defaultOK = true) {
    return listStuff(
      this,
      void 0,
      defaultOK,
      () => meridiems,
      () => {
        if (!this.meridiemCache) {
          const intl = { hour: "numeric", hourCycle: "h12" };
          this.meridiemCache = [DateTime.utc(2016, 11, 13, 9), DateTime.utc(2016, 11, 13, 19)].map(
            (dt) => this.extract(dt, intl, "dayperiod")
          );
        }
        return this.meridiemCache;
      }
    );
  }
  eras(length, defaultOK = true) {
    return listStuff(this, length, defaultOK, eras, () => {
      const intl = { era: length };
      if (!this.eraCache[length]) {
        this.eraCache[length] = [DateTime.utc(-40, 1, 1), DateTime.utc(2017, 1, 1)].map(
          (dt) => this.extract(dt, intl, "era")
        );
      }
      return this.eraCache[length];
    });
  }
  extract(dt, intlOpts, field) {
    const df = this.dtFormatter(dt, intlOpts), results = df.formatToParts(), matching = results.find((m) => m.type.toLowerCase() === field);
    return matching ? matching.value : null;
  }
  numberFormatter(opts = {}) {
    return new PolyNumberFormatter(this.intl, opts.forceSimple || this.fastNumbers, opts);
  }
  dtFormatter(dt, intlOpts = {}) {
    return new PolyDateFormatter(dt, this.intl, intlOpts);
  }
  relFormatter(opts = {}) {
    return new PolyRelFormatter(this.intl, this.isEnglish(), opts);
  }
  listFormatter(opts = {}) {
    return getCachedLF(this.intl, opts);
  }
  isEnglish() {
    return this.locale === "en" || this.locale.toLowerCase() === "en-us" || new Intl.DateTimeFormat(this.intl).resolvedOptions().locale.startsWith("en-us");
  }
  equals(other) {
    return this.locale === other.locale && this.numberingSystem === other.numberingSystem && this.outputCalendar === other.outputCalendar;
  }
}
let singleton = null;
class FixedOffsetZone extends Zone {
  /**
   * Get a singleton instance of UTC
   * @return {FixedOffsetZone}
   */
  static get utcInstance() {
    if (singleton === null) {
      singleton = new FixedOffsetZone(0);
    }
    return singleton;
  }
  /**
   * Get an instance with a specified offset
   * @param {number} offset - The offset in minutes
   * @return {FixedOffsetZone}
   */
  static instance(offset2) {
    return offset2 === 0 ? FixedOffsetZone.utcInstance : new FixedOffsetZone(offset2);
  }
  /**
   * Get an instance of FixedOffsetZone from a UTC offset string, like "UTC+6"
   * @param {string} s - The offset string to parse
   * @example FixedOffsetZone.parseSpecifier("UTC+6")
   * @example FixedOffsetZone.parseSpecifier("UTC+06")
   * @example FixedOffsetZone.parseSpecifier("UTC-6:00")
   * @return {FixedOffsetZone}
   */
  static parseSpecifier(s2) {
    if (s2) {
      const r = s2.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);
      if (r) {
        return new FixedOffsetZone(signedOffset(r[1], r[2]));
      }
    }
    return null;
  }
  constructor(offset2) {
    super();
    this.fixed = offset2;
  }
  /** @override **/
  get type() {
    return "fixed";
  }
  /** @override **/
  get name() {
    return this.fixed === 0 ? "UTC" : `UTC${formatOffset(this.fixed, "narrow")}`;
  }
  get ianaName() {
    if (this.fixed === 0) {
      return "Etc/UTC";
    } else {
      return `Etc/GMT${formatOffset(-this.fixed, "narrow")}`;
    }
  }
  /** @override **/
  offsetName() {
    return this.name;
  }
  /** @override **/
  formatOffset(ts, format) {
    return formatOffset(this.fixed, format);
  }
  /** @override **/
  get isUniversal() {
    return true;
  }
  /** @override **/
  offset() {
    return this.fixed;
  }
  /** @override **/
  equals(otherZone) {
    return otherZone.type === "fixed" && otherZone.fixed === this.fixed;
  }
  /** @override **/
  get isValid() {
    return true;
  }
}
class InvalidZone extends Zone {
  constructor(zoneName) {
    super();
    this.zoneName = zoneName;
  }
  /** @override **/
  get type() {
    return "invalid";
  }
  /** @override **/
  get name() {
    return this.zoneName;
  }
  /** @override **/
  get isUniversal() {
    return false;
  }
  /** @override **/
  offsetName() {
    return null;
  }
  /** @override **/
  formatOffset() {
    return "";
  }
  /** @override **/
  offset() {
    return NaN;
  }
  /** @override **/
  equals() {
    return false;
  }
  /** @override **/
  get isValid() {
    return false;
  }
}
function normalizeZone(input, defaultZone2) {
  if (isUndefined(input) || input === null) {
    return defaultZone2;
  } else if (input instanceof Zone) {
    return input;
  } else if (isString(input)) {
    const lowered = input.toLowerCase();
    if (lowered === "default")
      return defaultZone2;
    else if (lowered === "local" || lowered === "system")
      return SystemZone.instance;
    else if (lowered === "utc" || lowered === "gmt")
      return FixedOffsetZone.utcInstance;
    else
      return FixedOffsetZone.parseSpecifier(lowered) || IANAZone.create(input);
  } else if (isNumber(input)) {
    return FixedOffsetZone.instance(input);
  } else if (typeof input === "object" && input.offset && typeof input.offset === "number") {
    return input;
  } else {
    return new InvalidZone(input);
  }
}
let now = () => Date.now(), defaultZone = "system", defaultLocale = null, defaultNumberingSystem = null, defaultOutputCalendar = null, twoDigitCutoffYear = 60, throwOnInvalid;
class Settings {
  /**
   * Get the callback for returning the current timestamp.
   * @type {function}
   */
  static get now() {
    return now;
  }
  /**
   * Set the callback for returning the current timestamp.
   * The function should return a number, which will be interpreted as an Epoch millisecond count
   * @type {function}
   * @example Settings.now = () => Date.now() + 3000 // pretend it is 3 seconds in the future
   * @example Settings.now = () => 0 // always pretend it's Jan 1, 1970 at midnight in UTC time
   */
  static set now(n2) {
    now = n2;
  }
  /**
   * Set the default time zone to create DateTimes in. Does not affect existing instances.
   * Use the value "system" to reset this value to the system's time zone.
   * @type {string}
   */
  static set defaultZone(zone) {
    defaultZone = zone;
  }
  /**
   * Get the default time zone object currently used to create DateTimes. Does not affect existing instances.
   * The default value is the system's time zone (the one set on the machine that runs this code).
   * @type {Zone}
   */
  static get defaultZone() {
    return normalizeZone(defaultZone, SystemZone.instance);
  }
  /**
   * Get the default locale to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static get defaultLocale() {
    return defaultLocale;
  }
  /**
   * Set the default locale to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static set defaultLocale(locale) {
    defaultLocale = locale;
  }
  /**
   * Get the default numbering system to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static get defaultNumberingSystem() {
    return defaultNumberingSystem;
  }
  /**
   * Set the default numbering system to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static set defaultNumberingSystem(numberingSystem) {
    defaultNumberingSystem = numberingSystem;
  }
  /**
   * Get the default output calendar to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static get defaultOutputCalendar() {
    return defaultOutputCalendar;
  }
  /**
   * Set the default output calendar to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static set defaultOutputCalendar(outputCalendar) {
    defaultOutputCalendar = outputCalendar;
  }
  /**
   * Get the cutoff year after which a string encoding a year as two digits is interpreted to occur in the current century.
   * @type {number}
   */
  static get twoDigitCutoffYear() {
    return twoDigitCutoffYear;
  }
  /**
   * Set the cutoff year after which a string encoding a year as two digits is interpreted to occur in the current century.
   * @type {number}
   * @example Settings.twoDigitCutoffYear = 0 // cut-off year is 0, so all 'yy' are interpretted as current century
   * @example Settings.twoDigitCutoffYear = 50 // '49' -> 1949; '50' -> 2050
   * @example Settings.twoDigitCutoffYear = 1950 // interpretted as 50
   * @example Settings.twoDigitCutoffYear = 2050 // ALSO interpretted as 50
   */
  static set twoDigitCutoffYear(cutoffYear) {
    twoDigitCutoffYear = cutoffYear % 100;
  }
  /**
   * Get whether Luxon will throw when it encounters invalid DateTimes, Durations, or Intervals
   * @type {boolean}
   */
  static get throwOnInvalid() {
    return throwOnInvalid;
  }
  /**
   * Set whether Luxon will throw when it encounters invalid DateTimes, Durations, or Intervals
   * @type {boolean}
   */
  static set throwOnInvalid(t) {
    throwOnInvalid = t;
  }
  /**
   * Reset Luxon's global caches. Should only be necessary in testing scenarios.
   * @return {void}
   */
  static resetCaches() {
    Locale.resetCache();
    IANAZone.resetCache();
  }
}
function isUndefined(o) {
  return typeof o === "undefined";
}
function isNumber(o) {
  return typeof o === "number";
}
function isInteger(o) {
  return typeof o === "number" && o % 1 === 0;
}
function isString(o) {
  return typeof o === "string";
}
function isDate(o) {
  return Object.prototype.toString.call(o) === "[object Date]";
}
function hasRelative() {
  try {
    return typeof Intl !== "undefined" && !!Intl.RelativeTimeFormat;
  } catch (e) {
    return false;
  }
}
function maybeArray(thing) {
  return Array.isArray(thing) ? thing : [thing];
}
function bestBy(arr, by, compare) {
  if (arr.length === 0) {
    return void 0;
  }
  return arr.reduce((best, next) => {
    const pair = [by(next), next];
    if (!best) {
      return pair;
    } else if (compare(best[0], pair[0]) === best[0]) {
      return best;
    } else {
      return pair;
    }
  }, null)[1];
}
function pick(obj, keys) {
  return keys.reduce((a, k) => {
    a[k] = obj[k];
    return a;
  }, {});
}
function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}
function integerBetween(thing, bottom, top) {
  return isInteger(thing) && thing >= bottom && thing <= top;
}
function floorMod(x, n2) {
  return x - n2 * Math.floor(x / n2);
}
function padStart(input, n2 = 2) {
  const isNeg = input < 0;
  let padded;
  if (isNeg) {
    padded = "-" + ("" + -input).padStart(n2, "0");
  } else {
    padded = ("" + input).padStart(n2, "0");
  }
  return padded;
}
function parseInteger(string) {
  if (isUndefined(string) || string === null || string === "") {
    return void 0;
  } else {
    return parseInt(string, 10);
  }
}
function parseFloating(string) {
  if (isUndefined(string) || string === null || string === "") {
    return void 0;
  } else {
    return parseFloat(string);
  }
}
function parseMillis(fraction) {
  if (isUndefined(fraction) || fraction === null || fraction === "") {
    return void 0;
  } else {
    const f = parseFloat("0." + fraction) * 1e3;
    return Math.floor(f);
  }
}
function roundTo(number, digits, towardZero = false) {
  const factor = 10 ** digits, rounder = towardZero ? Math.trunc : Math.round;
  return rounder(number * factor) / factor;
}
function isLeapYear(year) {
  return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
}
function daysInYear(year) {
  return isLeapYear(year) ? 366 : 365;
}
function daysInMonth(year, month) {
  const modMonth = floorMod(month - 1, 12) + 1, modYear = year + (month - modMonth) / 12;
  if (modMonth === 2) {
    return isLeapYear(modYear) ? 29 : 28;
  } else {
    return [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][modMonth - 1];
  }
}
function objToLocalTS(obj) {
  let d = Date.UTC(
    obj.year,
    obj.month - 1,
    obj.day,
    obj.hour,
    obj.minute,
    obj.second,
    obj.millisecond
  );
  if (obj.year < 100 && obj.year >= 0) {
    d = new Date(d);
    d.setUTCFullYear(d.getUTCFullYear() - 1900);
  }
  return +d;
}
function weeksInWeekYear(weekYear) {
  const p1 = (weekYear + Math.floor(weekYear / 4) - Math.floor(weekYear / 100) + Math.floor(weekYear / 400)) % 7, last = weekYear - 1, p2 = (last + Math.floor(last / 4) - Math.floor(last / 100) + Math.floor(last / 400)) % 7;
  return p1 === 4 || p2 === 3 ? 53 : 52;
}
function untruncateYear(year) {
  if (year > 99) {
    return year;
  } else
    return year > Settings.twoDigitCutoffYear ? 1900 + year : 2e3 + year;
}
function parseZoneInfo(ts, offsetFormat, locale, timeZone = null) {
  const date = new Date(ts), intlOpts = {
    hourCycle: "h23",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit"
  };
  if (timeZone) {
    intlOpts.timeZone = timeZone;
  }
  const modified = { timeZoneName: offsetFormat, ...intlOpts };
  const parsed = new Intl.DateTimeFormat(locale, modified).formatToParts(date).find((m) => m.type.toLowerCase() === "timezonename");
  return parsed ? parsed.value : null;
}
function signedOffset(offHourStr, offMinuteStr) {
  let offHour = parseInt(offHourStr, 10);
  if (Number.isNaN(offHour)) {
    offHour = 0;
  }
  const offMin = parseInt(offMinuteStr, 10) || 0, offMinSigned = offHour < 0 || Object.is(offHour, -0) ? -offMin : offMin;
  return offHour * 60 + offMinSigned;
}
function asNumber(value) {
  const numericValue = Number(value);
  if (typeof value === "boolean" || value === "" || Number.isNaN(numericValue))
    throw new InvalidArgumentError(`Invalid unit value ${value}`);
  return numericValue;
}
function normalizeObject(obj, normalizer) {
  const normalized = {};
  for (const u in obj) {
    if (hasOwnProperty(obj, u)) {
      const v = obj[u];
      if (v === void 0 || v === null)
        continue;
      normalized[normalizer(u)] = asNumber(v);
    }
  }
  return normalized;
}
function formatOffset(offset2, format) {
  const hours = Math.trunc(Math.abs(offset2 / 60)), minutes = Math.trunc(Math.abs(offset2 % 60)), sign = offset2 >= 0 ? "+" : "-";
  switch (format) {
    case "short":
      return `${sign}${padStart(hours, 2)}:${padStart(minutes, 2)}`;
    case "narrow":
      return `${sign}${hours}${minutes > 0 ? `:${minutes}` : ""}`;
    case "techie":
      return `${sign}${padStart(hours, 2)}${padStart(minutes, 2)}`;
    default:
      throw new RangeError(`Value format ${format} is out of range for property format`);
  }
}
function timeObject(obj) {
  return pick(obj, ["hour", "minute", "second", "millisecond"]);
}
const monthsLong = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
const monthsShort = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];
const monthsNarrow = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];
function months(length) {
  switch (length) {
    case "narrow":
      return [...monthsNarrow];
    case "short":
      return [...monthsShort];
    case "long":
      return [...monthsLong];
    case "numeric":
      return ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
    case "2-digit":
      return ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
    default:
      return null;
  }
}
const weekdaysLong = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
];
const weekdaysShort = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const weekdaysNarrow = ["M", "T", "W", "T", "F", "S", "S"];
function weekdays(length) {
  switch (length) {
    case "narrow":
      return [...weekdaysNarrow];
    case "short":
      return [...weekdaysShort];
    case "long":
      return [...weekdaysLong];
    case "numeric":
      return ["1", "2", "3", "4", "5", "6", "7"];
    default:
      return null;
  }
}
const meridiems = ["AM", "PM"];
const erasLong = ["Before Christ", "Anno Domini"];
const erasShort = ["BC", "AD"];
const erasNarrow = ["B", "A"];
function eras(length) {
  switch (length) {
    case "narrow":
      return [...erasNarrow];
    case "short":
      return [...erasShort];
    case "long":
      return [...erasLong];
    default:
      return null;
  }
}
function meridiemForDateTime(dt) {
  return meridiems[dt.hour < 12 ? 0 : 1];
}
function weekdayForDateTime(dt, length) {
  return weekdays(length)[dt.weekday - 1];
}
function monthForDateTime(dt, length) {
  return months(length)[dt.month - 1];
}
function eraForDateTime(dt, length) {
  return eras(length)[dt.year < 0 ? 0 : 1];
}
function formatRelativeTime(unit, count, numeric = "always", narrow = false) {
  const units = {
    years: ["year", "yr."],
    quarters: ["quarter", "qtr."],
    months: ["month", "mo."],
    weeks: ["week", "wk."],
    days: ["day", "day", "days"],
    hours: ["hour", "hr."],
    minutes: ["minute", "min."],
    seconds: ["second", "sec."]
  };
  const lastable = ["hours", "minutes", "seconds"].indexOf(unit) === -1;
  if (numeric === "auto" && lastable) {
    const isDay = unit === "days";
    switch (count) {
      case 1:
        return isDay ? "tomorrow" : `next ${units[unit][0]}`;
      case -1:
        return isDay ? "yesterday" : `last ${units[unit][0]}`;
      case 0:
        return isDay ? "today" : `this ${units[unit][0]}`;
    }
  }
  const isInPast = Object.is(count, -0) || count < 0, fmtValue = Math.abs(count), singular = fmtValue === 1, lilUnits = units[unit], fmtUnit = narrow ? singular ? lilUnits[1] : lilUnits[2] || lilUnits[1] : singular ? units[unit][0] : unit;
  return isInPast ? `${fmtValue} ${fmtUnit} ago` : `in ${fmtValue} ${fmtUnit}`;
}
function stringifyTokens(splits, tokenToString) {
  let s2 = "";
  for (const token of splits) {
    if (token.literal) {
      s2 += token.val;
    } else {
      s2 += tokenToString(token.val);
    }
  }
  return s2;
}
const macroTokenToFormatOpts = {
  D: DATE_SHORT,
  DD: DATE_MED,
  DDD: DATE_FULL,
  DDDD: DATE_HUGE,
  t: TIME_SIMPLE,
  tt: TIME_WITH_SECONDS,
  ttt: TIME_WITH_SHORT_OFFSET,
  tttt: TIME_WITH_LONG_OFFSET,
  T: TIME_24_SIMPLE,
  TT: TIME_24_WITH_SECONDS,
  TTT: TIME_24_WITH_SHORT_OFFSET,
  TTTT: TIME_24_WITH_LONG_OFFSET,
  f: DATETIME_SHORT,
  ff: DATETIME_MED,
  fff: DATETIME_FULL,
  ffff: DATETIME_HUGE,
  F: DATETIME_SHORT_WITH_SECONDS,
  FF: DATETIME_MED_WITH_SECONDS,
  FFF: DATETIME_FULL_WITH_SECONDS,
  FFFF: DATETIME_HUGE_WITH_SECONDS
};
class Formatter {
  static create(locale, opts = {}) {
    return new Formatter(locale, opts);
  }
  static parseFormat(fmt) {
    let current = null, currentFull = "", bracketed = false;
    const splits = [];
    for (let i = 0; i < fmt.length; i++) {
      const c = fmt.charAt(i);
      if (c === "'") {
        if (currentFull.length > 0) {
          splits.push({ literal: bracketed, val: currentFull });
        }
        current = null;
        currentFull = "";
        bracketed = !bracketed;
      } else if (bracketed) {
        currentFull += c;
      } else if (c === current) {
        currentFull += c;
      } else {
        if (currentFull.length > 0) {
          splits.push({ literal: false, val: currentFull });
        }
        currentFull = c;
        current = c;
      }
    }
    if (currentFull.length > 0) {
      splits.push({ literal: bracketed, val: currentFull });
    }
    return splits;
  }
  static macroTokenToFormatOpts(token) {
    return macroTokenToFormatOpts[token];
  }
  constructor(locale, formatOpts) {
    this.opts = formatOpts;
    this.loc = locale;
    this.systemLoc = null;
  }
  formatWithSystemDefault(dt, opts) {
    if (this.systemLoc === null) {
      this.systemLoc = this.loc.redefaultToSystem();
    }
    const df = this.systemLoc.dtFormatter(dt, { ...this.opts, ...opts });
    return df.format();
  }
  formatDateTime(dt, opts = {}) {
    const df = this.loc.dtFormatter(dt, { ...this.opts, ...opts });
    return df.format();
  }
  formatDateTimeParts(dt, opts = {}) {
    const df = this.loc.dtFormatter(dt, { ...this.opts, ...opts });
    return df.formatToParts();
  }
  formatInterval(interval, opts = {}) {
    const df = this.loc.dtFormatter(interval.start, { ...this.opts, ...opts });
    return df.dtf.formatRange(interval.start.toJSDate(), interval.end.toJSDate());
  }
  resolvedOptions(dt, opts = {}) {
    const df = this.loc.dtFormatter(dt, { ...this.opts, ...opts });
    return df.resolvedOptions();
  }
  num(n2, p = 0) {
    if (this.opts.forceSimple) {
      return padStart(n2, p);
    }
    const opts = { ...this.opts };
    if (p > 0) {
      opts.padTo = p;
    }
    return this.loc.numberFormatter(opts).format(n2);
  }
  formatDateTimeFromString(dt, fmt) {
    const knownEnglish = this.loc.listingMode() === "en", useDateTimeFormatter = this.loc.outputCalendar && this.loc.outputCalendar !== "gregory", string = (opts, extract) => this.loc.extract(dt, opts, extract), formatOffset2 = (opts) => {
      if (dt.isOffsetFixed && dt.offset === 0 && opts.allowZ) {
        return "Z";
      }
      return dt.isValid ? dt.zone.formatOffset(dt.ts, opts.format) : "";
    }, meridiem = () => knownEnglish ? meridiemForDateTime(dt) : string({ hour: "numeric", hourCycle: "h12" }, "dayperiod"), month = (length, standalone) => knownEnglish ? monthForDateTime(dt, length) : string(standalone ? { month: length } : { month: length, day: "numeric" }, "month"), weekday = (length, standalone) => knownEnglish ? weekdayForDateTime(dt, length) : string(
      standalone ? { weekday: length } : { weekday: length, month: "long", day: "numeric" },
      "weekday"
    ), maybeMacro = (token) => {
      const formatOpts = Formatter.macroTokenToFormatOpts(token);
      if (formatOpts) {
        return this.formatWithSystemDefault(dt, formatOpts);
      } else {
        return token;
      }
    }, era = (length) => knownEnglish ? eraForDateTime(dt, length) : string({ era: length }, "era"), tokenToString = (token) => {
      switch (token) {
        case "S":
          return this.num(dt.millisecond);
        case "u":
        case "SSS":
          return this.num(dt.millisecond, 3);
        case "s":
          return this.num(dt.second);
        case "ss":
          return this.num(dt.second, 2);
        case "uu":
          return this.num(Math.floor(dt.millisecond / 10), 2);
        case "uuu":
          return this.num(Math.floor(dt.millisecond / 100));
        case "m":
          return this.num(dt.minute);
        case "mm":
          return this.num(dt.minute, 2);
        case "h":
          return this.num(dt.hour % 12 === 0 ? 12 : dt.hour % 12);
        case "hh":
          return this.num(dt.hour % 12 === 0 ? 12 : dt.hour % 12, 2);
        case "H":
          return this.num(dt.hour);
        case "HH":
          return this.num(dt.hour, 2);
        case "Z":
          return formatOffset2({ format: "narrow", allowZ: this.opts.allowZ });
        case "ZZ":
          return formatOffset2({ format: "short", allowZ: this.opts.allowZ });
        case "ZZZ":
          return formatOffset2({ format: "techie", allowZ: this.opts.allowZ });
        case "ZZZZ":
          return dt.zone.offsetName(dt.ts, { format: "short", locale: this.loc.locale });
        case "ZZZZZ":
          return dt.zone.offsetName(dt.ts, { format: "long", locale: this.loc.locale });
        case "z":
          return dt.zoneName;
        case "a":
          return meridiem();
        case "d":
          return useDateTimeFormatter ? string({ day: "numeric" }, "day") : this.num(dt.day);
        case "dd":
          return useDateTimeFormatter ? string({ day: "2-digit" }, "day") : this.num(dt.day, 2);
        case "c":
          return this.num(dt.weekday);
        case "ccc":
          return weekday("short", true);
        case "cccc":
          return weekday("long", true);
        case "ccccc":
          return weekday("narrow", true);
        case "E":
          return this.num(dt.weekday);
        case "EEE":
          return weekday("short", false);
        case "EEEE":
          return weekday("long", false);
        case "EEEEE":
          return weekday("narrow", false);
        case "L":
          return useDateTimeFormatter ? string({ month: "numeric", day: "numeric" }, "month") : this.num(dt.month);
        case "LL":
          return useDateTimeFormatter ? string({ month: "2-digit", day: "numeric" }, "month") : this.num(dt.month, 2);
        case "LLL":
          return month("short", true);
        case "LLLL":
          return month("long", true);
        case "LLLLL":
          return month("narrow", true);
        case "M":
          return useDateTimeFormatter ? string({ month: "numeric" }, "month") : this.num(dt.month);
        case "MM":
          return useDateTimeFormatter ? string({ month: "2-digit" }, "month") : this.num(dt.month, 2);
        case "MMM":
          return month("short", false);
        case "MMMM":
          return month("long", false);
        case "MMMMM":
          return month("narrow", false);
        case "y":
          return useDateTimeFormatter ? string({ year: "numeric" }, "year") : this.num(dt.year);
        case "yy":
          return useDateTimeFormatter ? string({ year: "2-digit" }, "year") : this.num(dt.year.toString().slice(-2), 2);
        case "yyyy":
          return useDateTimeFormatter ? string({ year: "numeric" }, "year") : this.num(dt.year, 4);
        case "yyyyyy":
          return useDateTimeFormatter ? string({ year: "numeric" }, "year") : this.num(dt.year, 6);
        case "G":
          return era("short");
        case "GG":
          return era("long");
        case "GGGGG":
          return era("narrow");
        case "kk":
          return this.num(dt.weekYear.toString().slice(-2), 2);
        case "kkkk":
          return this.num(dt.weekYear, 4);
        case "W":
          return this.num(dt.weekNumber);
        case "WW":
          return this.num(dt.weekNumber, 2);
        case "o":
          return this.num(dt.ordinal);
        case "ooo":
          return this.num(dt.ordinal, 3);
        case "q":
          return this.num(dt.quarter);
        case "qq":
          return this.num(dt.quarter, 2);
        case "X":
          return this.num(Math.floor(dt.ts / 1e3));
        case "x":
          return this.num(dt.ts);
        default:
          return maybeMacro(token);
      }
    };
    return stringifyTokens(Formatter.parseFormat(fmt), tokenToString);
  }
  formatDurationFromString(dur, fmt) {
    const tokenToField = (token) => {
      switch (token[0]) {
        case "S":
          return "millisecond";
        case "s":
          return "second";
        case "m":
          return "minute";
        case "h":
          return "hour";
        case "d":
          return "day";
        case "w":
          return "week";
        case "M":
          return "month";
        case "y":
          return "year";
        default:
          return null;
      }
    }, tokenToString = (lildur) => (token) => {
      const mapped = tokenToField(token);
      if (mapped) {
        return this.num(lildur.get(mapped), token.length);
      } else {
        return token;
      }
    }, tokens = Formatter.parseFormat(fmt), realTokens = tokens.reduce(
      (found, { literal, val }) => literal ? found : found.concat(val),
      []
    ), collapsed = dur.shiftTo(...realTokens.map(tokenToField).filter((t) => t));
    return stringifyTokens(tokens, tokenToString(collapsed));
  }
}
class Invalid {
  constructor(reason, explanation) {
    this.reason = reason;
    this.explanation = explanation;
  }
  toMessage() {
    if (this.explanation) {
      return `${this.reason}: ${this.explanation}`;
    } else {
      return this.reason;
    }
  }
}
const ianaRegex = /[A-Za-z_+-]{1,256}(?::?\/[A-Za-z0-9_+-]{1,256}(?:\/[A-Za-z0-9_+-]{1,256})?)?/;
function combineRegexes(...regexes) {
  const full = regexes.reduce((f, r) => f + r.source, "");
  return RegExp(`^${full}$`);
}
function combineExtractors(...extractors) {
  return (m) => extractors.reduce(
    ([mergedVals, mergedZone, cursor], ex) => {
      const [val, zone, next] = ex(m, cursor);
      return [{ ...mergedVals, ...val }, zone || mergedZone, next];
    },
    [{}, null, 1]
  ).slice(0, 2);
}
function parse(s2, ...patterns) {
  if (s2 == null) {
    return [null, null];
  }
  for (const [regex, extractor] of patterns) {
    const m = regex.exec(s2);
    if (m) {
      return extractor(m);
    }
  }
  return [null, null];
}
function simpleParse(...keys) {
  return (match2, cursor) => {
    const ret = {};
    let i;
    for (i = 0; i < keys.length; i++) {
      ret[keys[i]] = parseInteger(match2[cursor + i]);
    }
    return [ret, null, cursor + i];
  };
}
const offsetRegex = /(?:(Z)|([+-]\d\d)(?::?(\d\d))?)/;
const isoExtendedZone = `(?:${offsetRegex.source}?(?:\\[(${ianaRegex.source})\\])?)?`;
const isoTimeBaseRegex = /(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/;
const isoTimeRegex = RegExp(`${isoTimeBaseRegex.source}${isoExtendedZone}`);
const isoTimeExtensionRegex = RegExp(`(?:T${isoTimeRegex.source})?`);
const isoYmdRegex = /([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/;
const isoWeekRegex = /(\d{4})-?W(\d\d)(?:-?(\d))?/;
const isoOrdinalRegex = /(\d{4})-?(\d{3})/;
const extractISOWeekData = simpleParse("weekYear", "weekNumber", "weekDay");
const extractISOOrdinalData = simpleParse("year", "ordinal");
const sqlYmdRegex = /(\d{4})-(\d\d)-(\d\d)/;
const sqlTimeRegex = RegExp(
  `${isoTimeBaseRegex.source} ?(?:${offsetRegex.source}|(${ianaRegex.source}))?`
);
const sqlTimeExtensionRegex = RegExp(`(?: ${sqlTimeRegex.source})?`);
function int(match2, pos, fallback) {
  const m = match2[pos];
  return isUndefined(m) ? fallback : parseInteger(m);
}
function extractISOYmd(match2, cursor) {
  const item = {
    year: int(match2, cursor),
    month: int(match2, cursor + 1, 1),
    day: int(match2, cursor + 2, 1)
  };
  return [item, null, cursor + 3];
}
function extractISOTime(match2, cursor) {
  const item = {
    hours: int(match2, cursor, 0),
    minutes: int(match2, cursor + 1, 0),
    seconds: int(match2, cursor + 2, 0),
    milliseconds: parseMillis(match2[cursor + 3])
  };
  return [item, null, cursor + 4];
}
function extractISOOffset(match2, cursor) {
  const local = !match2[cursor] && !match2[cursor + 1], fullOffset = signedOffset(match2[cursor + 1], match2[cursor + 2]), zone = local ? null : FixedOffsetZone.instance(fullOffset);
  return [{}, zone, cursor + 3];
}
function extractIANAZone(match2, cursor) {
  const zone = match2[cursor] ? IANAZone.create(match2[cursor]) : null;
  return [{}, zone, cursor + 1];
}
const isoTimeOnly = RegExp(`^T?${isoTimeBaseRegex.source}$`);
const isoDuration = /^-?P(?:(?:(-?\d{1,20}(?:\.\d{1,20})?)Y)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20}(?:\.\d{1,20})?)W)?(?:(-?\d{1,20}(?:\.\d{1,20})?)D)?(?:T(?:(-?\d{1,20}(?:\.\d{1,20})?)H)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,20}))?S)?)?)$/;
function extractISODuration(match2) {
  const [s2, yearStr, monthStr, weekStr, dayStr, hourStr, minuteStr, secondStr, millisecondsStr] = match2;
  const hasNegativePrefix = s2[0] === "-";
  const negativeSeconds = secondStr && secondStr[0] === "-";
  const maybeNegate = (num, force = false) => num !== void 0 && (force || num && hasNegativePrefix) ? -num : num;
  return [
    {
      years: maybeNegate(parseFloating(yearStr)),
      months: maybeNegate(parseFloating(monthStr)),
      weeks: maybeNegate(parseFloating(weekStr)),
      days: maybeNegate(parseFloating(dayStr)),
      hours: maybeNegate(parseFloating(hourStr)),
      minutes: maybeNegate(parseFloating(minuteStr)),
      seconds: maybeNegate(parseFloating(secondStr), secondStr === "-0"),
      milliseconds: maybeNegate(parseMillis(millisecondsStr), negativeSeconds)
    }
  ];
}
const obsOffsets = {
  GMT: 0,
  EDT: -4 * 60,
  EST: -5 * 60,
  CDT: -5 * 60,
  CST: -6 * 60,
  MDT: -6 * 60,
  MST: -7 * 60,
  PDT: -7 * 60,
  PST: -8 * 60
};
function fromStrings(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr) {
  const result = {
    year: yearStr.length === 2 ? untruncateYear(parseInteger(yearStr)) : parseInteger(yearStr),
    month: monthsShort.indexOf(monthStr) + 1,
    day: parseInteger(dayStr),
    hour: parseInteger(hourStr),
    minute: parseInteger(minuteStr)
  };
  if (secondStr)
    result.second = parseInteger(secondStr);
  if (weekdayStr) {
    result.weekday = weekdayStr.length > 3 ? weekdaysLong.indexOf(weekdayStr) + 1 : weekdaysShort.indexOf(weekdayStr) + 1;
  }
  return result;
}
const rfc2822 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;
function extractRFC2822(match2) {
  const [
    ,
    weekdayStr,
    dayStr,
    monthStr,
    yearStr,
    hourStr,
    minuteStr,
    secondStr,
    obsOffset,
    milOffset,
    offHourStr,
    offMinuteStr
  ] = match2, result = fromStrings(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr);
  let offset2;
  if (obsOffset) {
    offset2 = obsOffsets[obsOffset];
  } else if (milOffset) {
    offset2 = 0;
  } else {
    offset2 = signedOffset(offHourStr, offMinuteStr);
  }
  return [result, new FixedOffsetZone(offset2)];
}
function preprocessRFC2822(s2) {
  return s2.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").trim();
}
const rfc1123 = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/, rfc850 = /^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/, ascii = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;
function extractRFC1123Or850(match2) {
  const [, weekdayStr, dayStr, monthStr, yearStr, hourStr, minuteStr, secondStr] = match2, result = fromStrings(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr);
  return [result, FixedOffsetZone.utcInstance];
}
function extractASCII(match2) {
  const [, weekdayStr, monthStr, dayStr, hourStr, minuteStr, secondStr, yearStr] = match2, result = fromStrings(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr);
  return [result, FixedOffsetZone.utcInstance];
}
const isoYmdWithTimeExtensionRegex = combineRegexes(isoYmdRegex, isoTimeExtensionRegex);
const isoWeekWithTimeExtensionRegex = combineRegexes(isoWeekRegex, isoTimeExtensionRegex);
const isoOrdinalWithTimeExtensionRegex = combineRegexes(isoOrdinalRegex, isoTimeExtensionRegex);
const isoTimeCombinedRegex = combineRegexes(isoTimeRegex);
const extractISOYmdTimeAndOffset = combineExtractors(
  extractISOYmd,
  extractISOTime,
  extractISOOffset,
  extractIANAZone
);
const extractISOWeekTimeAndOffset = combineExtractors(
  extractISOWeekData,
  extractISOTime,
  extractISOOffset,
  extractIANAZone
);
const extractISOOrdinalDateAndTime = combineExtractors(
  extractISOOrdinalData,
  extractISOTime,
  extractISOOffset,
  extractIANAZone
);
const extractISOTimeAndOffset = combineExtractors(
  extractISOTime,
  extractISOOffset,
  extractIANAZone
);
function parseISODate(s2) {
  return parse(
    s2,
    [isoYmdWithTimeExtensionRegex, extractISOYmdTimeAndOffset],
    [isoWeekWithTimeExtensionRegex, extractISOWeekTimeAndOffset],
    [isoOrdinalWithTimeExtensionRegex, extractISOOrdinalDateAndTime],
    [isoTimeCombinedRegex, extractISOTimeAndOffset]
  );
}
function parseRFC2822Date(s2) {
  return parse(preprocessRFC2822(s2), [rfc2822, extractRFC2822]);
}
function parseHTTPDate(s2) {
  return parse(
    s2,
    [rfc1123, extractRFC1123Or850],
    [rfc850, extractRFC1123Or850],
    [ascii, extractASCII]
  );
}
function parseISODuration(s2) {
  return parse(s2, [isoDuration, extractISODuration]);
}
const extractISOTimeOnly = combineExtractors(extractISOTime);
function parseISOTimeOnly(s2) {
  return parse(s2, [isoTimeOnly, extractISOTimeOnly]);
}
const sqlYmdWithTimeExtensionRegex = combineRegexes(sqlYmdRegex, sqlTimeExtensionRegex);
const sqlTimeCombinedRegex = combineRegexes(sqlTimeRegex);
const extractISOTimeOffsetAndIANAZone = combineExtractors(
  extractISOTime,
  extractISOOffset,
  extractIANAZone
);
function parseSQL(s2) {
  return parse(
    s2,
    [sqlYmdWithTimeExtensionRegex, extractISOYmdTimeAndOffset],
    [sqlTimeCombinedRegex, extractISOTimeOffsetAndIANAZone]
  );
}
const INVALID$2 = "Invalid Duration";
const lowOrderMatrix = {
  weeks: {
    days: 7,
    hours: 7 * 24,
    minutes: 7 * 24 * 60,
    seconds: 7 * 24 * 60 * 60,
    milliseconds: 7 * 24 * 60 * 60 * 1e3
  },
  days: {
    hours: 24,
    minutes: 24 * 60,
    seconds: 24 * 60 * 60,
    milliseconds: 24 * 60 * 60 * 1e3
  },
  hours: { minutes: 60, seconds: 60 * 60, milliseconds: 60 * 60 * 1e3 },
  minutes: { seconds: 60, milliseconds: 60 * 1e3 },
  seconds: { milliseconds: 1e3 }
}, casualMatrix = {
  years: {
    quarters: 4,
    months: 12,
    weeks: 52,
    days: 365,
    hours: 365 * 24,
    minutes: 365 * 24 * 60,
    seconds: 365 * 24 * 60 * 60,
    milliseconds: 365 * 24 * 60 * 60 * 1e3
  },
  quarters: {
    months: 3,
    weeks: 13,
    days: 91,
    hours: 91 * 24,
    minutes: 91 * 24 * 60,
    seconds: 91 * 24 * 60 * 60,
    milliseconds: 91 * 24 * 60 * 60 * 1e3
  },
  months: {
    weeks: 4,
    days: 30,
    hours: 30 * 24,
    minutes: 30 * 24 * 60,
    seconds: 30 * 24 * 60 * 60,
    milliseconds: 30 * 24 * 60 * 60 * 1e3
  },
  ...lowOrderMatrix
}, daysInYearAccurate = 146097 / 400, daysInMonthAccurate = 146097 / 4800, accurateMatrix = {
  years: {
    quarters: 4,
    months: 12,
    weeks: daysInYearAccurate / 7,
    days: daysInYearAccurate,
    hours: daysInYearAccurate * 24,
    minutes: daysInYearAccurate * 24 * 60,
    seconds: daysInYearAccurate * 24 * 60 * 60,
    milliseconds: daysInYearAccurate * 24 * 60 * 60 * 1e3
  },
  quarters: {
    months: 3,
    weeks: daysInYearAccurate / 28,
    days: daysInYearAccurate / 4,
    hours: daysInYearAccurate * 24 / 4,
    minutes: daysInYearAccurate * 24 * 60 / 4,
    seconds: daysInYearAccurate * 24 * 60 * 60 / 4,
    milliseconds: daysInYearAccurate * 24 * 60 * 60 * 1e3 / 4
  },
  months: {
    weeks: daysInMonthAccurate / 7,
    days: daysInMonthAccurate,
    hours: daysInMonthAccurate * 24,
    minutes: daysInMonthAccurate * 24 * 60,
    seconds: daysInMonthAccurate * 24 * 60 * 60,
    milliseconds: daysInMonthAccurate * 24 * 60 * 60 * 1e3
  },
  ...lowOrderMatrix
};
const orderedUnits$1 = [
  "years",
  "quarters",
  "months",
  "weeks",
  "days",
  "hours",
  "minutes",
  "seconds",
  "milliseconds"
];
const reverseUnits = orderedUnits$1.slice(0).reverse();
function clone$1(dur, alts, clear = false) {
  const conf = {
    values: clear ? alts.values : { ...dur.values, ...alts.values || {} },
    loc: dur.loc.clone(alts.loc),
    conversionAccuracy: alts.conversionAccuracy || dur.conversionAccuracy,
    matrix: alts.matrix || dur.matrix
  };
  return new Duration(conf);
}
function antiTrunc(n2) {
  return n2 < 0 ? Math.floor(n2) : Math.ceil(n2);
}
function convert(matrix, fromMap, fromUnit, toMap, toUnit) {
  const conv = matrix[toUnit][fromUnit], raw = fromMap[fromUnit] / conv, sameSign = Math.sign(raw) === Math.sign(toMap[toUnit]), added = !sameSign && toMap[toUnit] !== 0 && Math.abs(raw) <= 1 ? antiTrunc(raw) : Math.trunc(raw);
  toMap[toUnit] += added;
  fromMap[fromUnit] -= added * conv;
}
function normalizeValues(matrix, vals) {
  reverseUnits.reduce((previous, current) => {
    if (!isUndefined(vals[current])) {
      if (previous) {
        convert(matrix, vals, previous, vals, current);
      }
      return current;
    } else {
      return previous;
    }
  }, null);
}
function removeZeroes(vals) {
  const newVals = {};
  for (const [key, value] of Object.entries(vals)) {
    if (value !== 0) {
      newVals[key] = value;
    }
  }
  return newVals;
}
class Duration {
  /**
   * @private
   */
  constructor(config) {
    const accurate = config.conversionAccuracy === "longterm" || false;
    let matrix = accurate ? accurateMatrix : casualMatrix;
    if (config.matrix) {
      matrix = config.matrix;
    }
    this.values = config.values;
    this.loc = config.loc || Locale.create();
    this.conversionAccuracy = accurate ? "longterm" : "casual";
    this.invalid = config.invalid || null;
    this.matrix = matrix;
    this.isLuxonDuration = true;
  }
  /**
   * Create Duration from a number of milliseconds.
   * @param {number} count of milliseconds
   * @param {Object} opts - options for parsing
   * @param {string} [opts.locale='en-US'] - the locale to use
   * @param {string} opts.numberingSystem - the numbering system to use
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @return {Duration}
   */
  static fromMillis(count, opts) {
    return Duration.fromObject({ milliseconds: count }, opts);
  }
  /**
   * Create a Duration from a JavaScript object with keys like 'years' and 'hours'.
   * If this object is empty then a zero milliseconds duration is returned.
   * @param {Object} obj - the object to create the DateTime from
   * @param {number} obj.years
   * @param {number} obj.quarters
   * @param {number} obj.months
   * @param {number} obj.weeks
   * @param {number} obj.days
   * @param {number} obj.hours
   * @param {number} obj.minutes
   * @param {number} obj.seconds
   * @param {number} obj.milliseconds
   * @param {Object} [opts=[]] - options for creating this Duration
   * @param {string} [opts.locale='en-US'] - the locale to use
   * @param {string} opts.numberingSystem - the numbering system to use
   * @param {string} [opts.conversionAccuracy='casual'] - the preset conversion system to use
   * @param {string} [opts.matrix=Object] - the custom conversion system to use
   * @return {Duration}
   */
  static fromObject(obj, opts = {}) {
    if (obj == null || typeof obj !== "object") {
      throw new InvalidArgumentError(
        `Duration.fromObject: argument expected to be an object, got ${obj === null ? "null" : typeof obj}`
      );
    }
    return new Duration({
      values: normalizeObject(obj, Duration.normalizeUnit),
      loc: Locale.fromObject(opts),
      conversionAccuracy: opts.conversionAccuracy,
      matrix: opts.matrix
    });
  }
  /**
   * Create a Duration from DurationLike.
   *
   * @param {Object | number | Duration} durationLike
   * One of:
   * - object with keys like 'years' and 'hours'.
   * - number representing milliseconds
   * - Duration instance
   * @return {Duration}
   */
  static fromDurationLike(durationLike) {
    if (isNumber(durationLike)) {
      return Duration.fromMillis(durationLike);
    } else if (Duration.isDuration(durationLike)) {
      return durationLike;
    } else if (typeof durationLike === "object") {
      return Duration.fromObject(durationLike);
    } else {
      throw new InvalidArgumentError(
        `Unknown duration argument ${durationLike} of type ${typeof durationLike}`
      );
    }
  }
  /**
   * Create a Duration from an ISO 8601 duration string.
   * @param {string} text - text to parse
   * @param {Object} opts - options for parsing
   * @param {string} [opts.locale='en-US'] - the locale to use
   * @param {string} opts.numberingSystem - the numbering system to use
   * @param {string} [opts.conversionAccuracy='casual'] - the preset conversion system to use
   * @param {string} [opts.matrix=Object] - the preset conversion system to use
   * @see https://en.wikipedia.org/wiki/ISO_8601#Durations
   * @example Duration.fromISO('P3Y6M1W4DT12H30M5S').toObject() //=> { years: 3, months: 6, weeks: 1, days: 4, hours: 12, minutes: 30, seconds: 5 }
   * @example Duration.fromISO('PT23H').toObject() //=> { hours: 23 }
   * @example Duration.fromISO('P5Y3M').toObject() //=> { years: 5, months: 3 }
   * @return {Duration}
   */
  static fromISO(text, opts) {
    const [parsed] = parseISODuration(text);
    if (parsed) {
      return Duration.fromObject(parsed, opts);
    } else {
      return Duration.invalid("unparsable", `the input "${text}" can't be parsed as ISO 8601`);
    }
  }
  /**
   * Create a Duration from an ISO 8601 time string.
   * @param {string} text - text to parse
   * @param {Object} opts - options for parsing
   * @param {string} [opts.locale='en-US'] - the locale to use
   * @param {string} opts.numberingSystem - the numbering system to use
   * @param {string} [opts.conversionAccuracy='casual'] - the preset conversion system to use
   * @param {string} [opts.matrix=Object] - the conversion system to use
   * @see https://en.wikipedia.org/wiki/ISO_8601#Times
   * @example Duration.fromISOTime('11:22:33.444').toObject() //=> { hours: 11, minutes: 22, seconds: 33, milliseconds: 444 }
   * @example Duration.fromISOTime('11:00').toObject() //=> { hours: 11, minutes: 0, seconds: 0 }
   * @example Duration.fromISOTime('T11:00').toObject() //=> { hours: 11, minutes: 0, seconds: 0 }
   * @example Duration.fromISOTime('1100').toObject() //=> { hours: 11, minutes: 0, seconds: 0 }
   * @example Duration.fromISOTime('T1100').toObject() //=> { hours: 11, minutes: 0, seconds: 0 }
   * @return {Duration}
   */
  static fromISOTime(text, opts) {
    const [parsed] = parseISOTimeOnly(text);
    if (parsed) {
      return Duration.fromObject(parsed, opts);
    } else {
      return Duration.invalid("unparsable", `the input "${text}" can't be parsed as ISO 8601`);
    }
  }
  /**
   * Create an invalid Duration.
   * @param {string} reason - simple string of why this datetime is invalid. Should not contain parameters or anything else data-dependent
   * @param {string} [explanation=null] - longer explanation, may include parameters and other useful debugging information
   * @return {Duration}
   */
  static invalid(reason, explanation = null) {
    if (!reason) {
      throw new InvalidArgumentError("need to specify a reason the Duration is invalid");
    }
    const invalid = reason instanceof Invalid ? reason : new Invalid(reason, explanation);
    if (Settings.throwOnInvalid) {
      throw new InvalidDurationError(invalid);
    } else {
      return new Duration({ invalid });
    }
  }
  /**
   * @private
   */
  static normalizeUnit(unit) {
    const normalized = {
      year: "years",
      years: "years",
      quarter: "quarters",
      quarters: "quarters",
      month: "months",
      months: "months",
      week: "weeks",
      weeks: "weeks",
      day: "days",
      days: "days",
      hour: "hours",
      hours: "hours",
      minute: "minutes",
      minutes: "minutes",
      second: "seconds",
      seconds: "seconds",
      millisecond: "milliseconds",
      milliseconds: "milliseconds"
    }[unit ? unit.toLowerCase() : unit];
    if (!normalized)
      throw new InvalidUnitError(unit);
    return normalized;
  }
  /**
   * Check if an object is a Duration. Works across context boundaries
   * @param {object} o
   * @return {boolean}
   */
  static isDuration(o) {
    return o && o.isLuxonDuration || false;
  }
  /**
   * Get  the locale of a Duration, such 'en-GB'
   * @type {string}
   */
  get locale() {
    return this.isValid ? this.loc.locale : null;
  }
  /**
   * Get the numbering system of a Duration, such 'beng'. The numbering system is used when formatting the Duration
   *
   * @type {string}
   */
  get numberingSystem() {
    return this.isValid ? this.loc.numberingSystem : null;
  }
  /**
   * Returns a string representation of this Duration formatted according to the specified format string. You may use these tokens:
   * * `S` for milliseconds
   * * `s` for seconds
   * * `m` for minutes
   * * `h` for hours
   * * `d` for days
   * * `w` for weeks
   * * `M` for months
   * * `y` for years
   * Notes:
   * * Add padding by repeating the token, e.g. "yy" pads the years to two digits, "hhhh" pads the hours out to four digits
   * * Tokens can be escaped by wrapping with single quotes.
   * * The duration will be converted to the set of units in the format string using {@link Duration#shiftTo} and the Durations's conversion accuracy setting.
   * @param {string} fmt - the format string
   * @param {Object} opts - options
   * @param {boolean} [opts.floor=true] - floor numerical values
   * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toFormat("y d s") //=> "1 6 2"
   * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toFormat("yy dd sss") //=> "01 06 002"
   * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toFormat("M S") //=> "12 518402000"
   * @return {string}
   */
  toFormat(fmt, opts = {}) {
    const fmtOpts = {
      ...opts,
      floor: opts.round !== false && opts.floor !== false
    };
    return this.isValid ? Formatter.create(this.loc, fmtOpts).formatDurationFromString(this, fmt) : INVALID$2;
  }
  /**
   * Returns a string representation of a Duration with all units included.
   * To modify its behavior use the `listStyle` and any Intl.NumberFormat option, though `unitDisplay` is especially relevant.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
   * @param opts - On option object to override the formatting. Accepts the same keys as the options parameter of the native `Int.NumberFormat` constructor, as well as `listStyle`.
   * @example
   * ```js
   * var dur = Duration.fromObject({ days: 1, hours: 5, minutes: 6 })
   * dur.toHuman() //=> '1 day, 5 hours, 6 minutes'
   * dur.toHuman({ listStyle: "long" }) //=> '1 day, 5 hours, and 6 minutes'
   * dur.toHuman({ unitDisplay: "short" }) //=> '1 day, 5 hr, 6 min'
   * ```
   */
  toHuman(opts = {}) {
    const l2 = orderedUnits$1.map((unit) => {
      const val = this.values[unit];
      if (isUndefined(val)) {
        return null;
      }
      return this.loc.numberFormatter({ style: "unit", unitDisplay: "long", ...opts, unit: unit.slice(0, -1) }).format(val);
    }).filter((n2) => n2);
    return this.loc.listFormatter({ type: "conjunction", style: opts.listStyle || "narrow", ...opts }).format(l2);
  }
  /**
   * Returns a JavaScript object with this Duration's values.
   * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toObject() //=> { years: 1, days: 6, seconds: 2 }
   * @return {Object}
   */
  toObject() {
    if (!this.isValid)
      return {};
    return { ...this.values };
  }
  /**
   * Returns an ISO 8601-compliant string representation of this Duration.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Durations
   * @example Duration.fromObject({ years: 3, seconds: 45 }).toISO() //=> 'P3YT45S'
   * @example Duration.fromObject({ months: 4, seconds: 45 }).toISO() //=> 'P4MT45S'
   * @example Duration.fromObject({ months: 5 }).toISO() //=> 'P5M'
   * @example Duration.fromObject({ minutes: 5 }).toISO() //=> 'PT5M'
   * @example Duration.fromObject({ milliseconds: 6 }).toISO() //=> 'PT0.006S'
   * @return {string}
   */
  toISO() {
    if (!this.isValid)
      return null;
    let s2 = "P";
    if (this.years !== 0)
      s2 += this.years + "Y";
    if (this.months !== 0 || this.quarters !== 0)
      s2 += this.months + this.quarters * 3 + "M";
    if (this.weeks !== 0)
      s2 += this.weeks + "W";
    if (this.days !== 0)
      s2 += this.days + "D";
    if (this.hours !== 0 || this.minutes !== 0 || this.seconds !== 0 || this.milliseconds !== 0)
      s2 += "T";
    if (this.hours !== 0)
      s2 += this.hours + "H";
    if (this.minutes !== 0)
      s2 += this.minutes + "M";
    if (this.seconds !== 0 || this.milliseconds !== 0)
      s2 += roundTo(this.seconds + this.milliseconds / 1e3, 3) + "S";
    if (s2 === "P")
      s2 += "T0S";
    return s2;
  }
  /**
   * Returns an ISO 8601-compliant string representation of this Duration, formatted as a time of day.
   * Note that this will return null if the duration is invalid, negative, or equal to or greater than 24 hours.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Times
   * @param {Object} opts - options
   * @param {boolean} [opts.suppressMilliseconds=false] - exclude milliseconds from the format if they're 0
   * @param {boolean} [opts.suppressSeconds=false] - exclude seconds from the format if they're 0
   * @param {boolean} [opts.includePrefix=false] - include the `T` prefix
   * @param {string} [opts.format='extended'] - choose between the basic and extended format
   * @example Duration.fromObject({ hours: 11 }).toISOTime() //=> '11:00:00.000'
   * @example Duration.fromObject({ hours: 11 }).toISOTime({ suppressMilliseconds: true }) //=> '11:00:00'
   * @example Duration.fromObject({ hours: 11 }).toISOTime({ suppressSeconds: true }) //=> '11:00'
   * @example Duration.fromObject({ hours: 11 }).toISOTime({ includePrefix: true }) //=> 'T11:00:00.000'
   * @example Duration.fromObject({ hours: 11 }).toISOTime({ format: 'basic' }) //=> '110000.000'
   * @return {string}
   */
  toISOTime(opts = {}) {
    if (!this.isValid)
      return null;
    const millis = this.toMillis();
    if (millis < 0 || millis >= 864e5)
      return null;
    opts = {
      suppressMilliseconds: false,
      suppressSeconds: false,
      includePrefix: false,
      format: "extended",
      ...opts
    };
    const value = this.shiftTo("hours", "minutes", "seconds", "milliseconds");
    let fmt = opts.format === "basic" ? "hhmm" : "hh:mm";
    if (!opts.suppressSeconds || value.seconds !== 0 || value.milliseconds !== 0) {
      fmt += opts.format === "basic" ? "ss" : ":ss";
      if (!opts.suppressMilliseconds || value.milliseconds !== 0) {
        fmt += ".SSS";
      }
    }
    let str = value.toFormat(fmt);
    if (opts.includePrefix) {
      str = "T" + str;
    }
    return str;
  }
  /**
   * Returns an ISO 8601 representation of this Duration appropriate for use in JSON.
   * @return {string}
   */
  toJSON() {
    return this.toISO();
  }
  /**
   * Returns an ISO 8601 representation of this Duration appropriate for use in debugging.
   * @return {string}
   */
  toString() {
    return this.toISO();
  }
  /**
   * Returns an milliseconds value of this Duration.
   * @return {number}
   */
  toMillis() {
    return this.as("milliseconds");
  }
  /**
   * Returns an milliseconds value of this Duration. Alias of {@link toMillis}
   * @return {number}
   */
  valueOf() {
    return this.toMillis();
  }
  /**
   * Make this Duration longer by the specified amount. Return a newly-constructed Duration.
   * @param {Duration|Object|number} duration - The amount to add. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
   * @return {Duration}
   */
  plus(duration) {
    if (!this.isValid)
      return this;
    const dur = Duration.fromDurationLike(duration), result = {};
    for (const k of orderedUnits$1) {
      if (hasOwnProperty(dur.values, k) || hasOwnProperty(this.values, k)) {
        result[k] = dur.get(k) + this.get(k);
      }
    }
    return clone$1(this, { values: result }, true);
  }
  /**
   * Make this Duration shorter by the specified amount. Return a newly-constructed Duration.
   * @param {Duration|Object|number} duration - The amount to subtract. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
   * @return {Duration}
   */
  minus(duration) {
    if (!this.isValid)
      return this;
    const dur = Duration.fromDurationLike(duration);
    return this.plus(dur.negate());
  }
  /**
   * Scale this Duration by the specified amount. Return a newly-constructed Duration.
   * @param {function} fn - The function to apply to each unit. Arity is 1 or 2: the value of the unit and, optionally, the unit name. Must return a number.
   * @example Duration.fromObject({ hours: 1, minutes: 30 }).mapUnits(x => x * 2) //=> { hours: 2, minutes: 60 }
   * @example Duration.fromObject({ hours: 1, minutes: 30 }).mapUnits((x, u) => u === "hours" ? x * 2 : x) //=> { hours: 2, minutes: 30 }
   * @return {Duration}
   */
  mapUnits(fn) {
    if (!this.isValid)
      return this;
    const result = {};
    for (const k of Object.keys(this.values)) {
      result[k] = asNumber(fn(this.values[k], k));
    }
    return clone$1(this, { values: result }, true);
  }
  /**
   * Get the value of unit.
   * @param {string} unit - a unit such as 'minute' or 'day'
   * @example Duration.fromObject({years: 2, days: 3}).get('years') //=> 2
   * @example Duration.fromObject({years: 2, days: 3}).get('months') //=> 0
   * @example Duration.fromObject({years: 2, days: 3}).get('days') //=> 3
   * @return {number}
   */
  get(unit) {
    return this[Duration.normalizeUnit(unit)];
  }
  /**
   * "Set" the values of specified units. Return a newly-constructed Duration.
   * @param {Object} values - a mapping of units to numbers
   * @example dur.set({ years: 2017 })
   * @example dur.set({ hours: 8, minutes: 30 })
   * @return {Duration}
   */
  set(values) {
    if (!this.isValid)
      return this;
    const mixed = { ...this.values, ...normalizeObject(values, Duration.normalizeUnit) };
    return clone$1(this, { values: mixed });
  }
  /**
   * "Set" the locale and/or numberingSystem.  Returns a newly-constructed Duration.
   * @example dur.reconfigure({ locale: 'en-GB' })
   * @return {Duration}
   */
  reconfigure({ locale, numberingSystem, conversionAccuracy, matrix } = {}) {
    const loc = this.loc.clone({ locale, numberingSystem });
    const opts = { loc, matrix, conversionAccuracy };
    return clone$1(this, opts);
  }
  /**
   * Return the length of the duration in the specified unit.
   * @param {string} unit - a unit such as 'minutes' or 'days'
   * @example Duration.fromObject({years: 1}).as('days') //=> 365
   * @example Duration.fromObject({years: 1}).as('months') //=> 12
   * @example Duration.fromObject({hours: 60}).as('days') //=> 2.5
   * @return {number}
   */
  as(unit) {
    return this.isValid ? this.shiftTo(unit).get(unit) : NaN;
  }
  /**
   * Reduce this Duration to its canonical representation in its current units.
   * @example Duration.fromObject({ years: 2, days: 5000 }).normalize().toObject() //=> { years: 15, days: 255 }
   * @example Duration.fromObject({ hours: 12, minutes: -45 }).normalize().toObject() //=> { hours: 11, minutes: 15 }
   * @return {Duration}
   */
  normalize() {
    if (!this.isValid)
      return this;
    const vals = this.toObject();
    normalizeValues(this.matrix, vals);
    return clone$1(this, { values: vals }, true);
  }
  /**
   * Rescale units to its largest representation
   * @example Duration.fromObject({ milliseconds: 90000 }).rescale().toObject() //=> { minutes: 1, seconds: 30 }
   * @return {Duration}
   */
  rescale() {
    if (!this.isValid)
      return this;
    const vals = removeZeroes(this.normalize().shiftToAll().toObject());
    return clone$1(this, { values: vals }, true);
  }
  /**
   * Convert this Duration into its representation in a different set of units.
   * @example Duration.fromObject({ hours: 1, seconds: 30 }).shiftTo('minutes', 'milliseconds').toObject() //=> { minutes: 60, milliseconds: 30000 }
   * @return {Duration}
   */
  shiftTo(...units) {
    if (!this.isValid)
      return this;
    if (units.length === 0) {
      return this;
    }
    units = units.map((u) => Duration.normalizeUnit(u));
    const built = {}, accumulated = {}, vals = this.toObject();
    let lastUnit;
    for (const k of orderedUnits$1) {
      if (units.indexOf(k) >= 0) {
        lastUnit = k;
        let own = 0;
        for (const ak in accumulated) {
          own += this.matrix[ak][k] * accumulated[ak];
          accumulated[ak] = 0;
        }
        if (isNumber(vals[k])) {
          own += vals[k];
        }
        const i = Math.trunc(own);
        built[k] = i;
        accumulated[k] = (own * 1e3 - i * 1e3) / 1e3;
        for (const down in vals) {
          if (orderedUnits$1.indexOf(down) > orderedUnits$1.indexOf(k)) {
            convert(this.matrix, vals, down, built, k);
          }
        }
      } else if (isNumber(vals[k])) {
        accumulated[k] = vals[k];
      }
    }
    for (const key in accumulated) {
      if (accumulated[key] !== 0) {
        built[lastUnit] += key === lastUnit ? accumulated[key] : accumulated[key] / this.matrix[lastUnit][key];
      }
    }
    return clone$1(this, { values: built }, true).normalize();
  }
  /**
   * Shift this Duration to all available units.
   * Same as shiftTo("years", "months", "weeks", "days", "hours", "minutes", "seconds", "milliseconds")
   * @return {Duration}
   */
  shiftToAll() {
    if (!this.isValid)
      return this;
    return this.shiftTo(
      "years",
      "months",
      "weeks",
      "days",
      "hours",
      "minutes",
      "seconds",
      "milliseconds"
    );
  }
  /**
   * Return the negative of this Duration.
   * @example Duration.fromObject({ hours: 1, seconds: 30 }).negate().toObject() //=> { hours: -1, seconds: -30 }
   * @return {Duration}
   */
  negate() {
    if (!this.isValid)
      return this;
    const negated = {};
    for (const k of Object.keys(this.values)) {
      negated[k] = this.values[k] === 0 ? 0 : -this.values[k];
    }
    return clone$1(this, { values: negated }, true);
  }
  /**
   * Get the years.
   * @type {number}
   */
  get years() {
    return this.isValid ? this.values.years || 0 : NaN;
  }
  /**
   * Get the quarters.
   * @type {number}
   */
  get quarters() {
    return this.isValid ? this.values.quarters || 0 : NaN;
  }
  /**
   * Get the months.
   * @type {number}
   */
  get months() {
    return this.isValid ? this.values.months || 0 : NaN;
  }
  /**
   * Get the weeks
   * @type {number}
   */
  get weeks() {
    return this.isValid ? this.values.weeks || 0 : NaN;
  }
  /**
   * Get the days.
   * @type {number}
   */
  get days() {
    return this.isValid ? this.values.days || 0 : NaN;
  }
  /**
   * Get the hours.
   * @type {number}
   */
  get hours() {
    return this.isValid ? this.values.hours || 0 : NaN;
  }
  /**
   * Get the minutes.
   * @type {number}
   */
  get minutes() {
    return this.isValid ? this.values.minutes || 0 : NaN;
  }
  /**
   * Get the seconds.
   * @return {number}
   */
  get seconds() {
    return this.isValid ? this.values.seconds || 0 : NaN;
  }
  /**
   * Get the milliseconds.
   * @return {number}
   */
  get milliseconds() {
    return this.isValid ? this.values.milliseconds || 0 : NaN;
  }
  /**
   * Returns whether the Duration is invalid. Invalid durations are returned by diff operations
   * on invalid DateTimes or Intervals.
   * @return {boolean}
   */
  get isValid() {
    return this.invalid === null;
  }
  /**
   * Returns an error code if this Duration became invalid, or null if the Duration is valid
   * @return {string}
   */
  get invalidReason() {
    return this.invalid ? this.invalid.reason : null;
  }
  /**
   * Returns an explanation of why this Duration became invalid, or null if the Duration is valid
   * @type {string}
   */
  get invalidExplanation() {
    return this.invalid ? this.invalid.explanation : null;
  }
  /**
   * Equality check
   * Two Durations are equal iff they have the same units and the same values for each unit.
   * @param {Duration} other
   * @return {boolean}
   */
  equals(other) {
    if (!this.isValid || !other.isValid) {
      return false;
    }
    if (!this.loc.equals(other.loc)) {
      return false;
    }
    function eq(v1, v2) {
      if (v1 === void 0 || v1 === 0)
        return v2 === void 0 || v2 === 0;
      return v1 === v2;
    }
    for (const u of orderedUnits$1) {
      if (!eq(this.values[u], other.values[u])) {
        return false;
      }
    }
    return true;
  }
}
const INVALID$1 = "Invalid Interval";
function validateStartEnd(start, end) {
  if (!start || !start.isValid) {
    return Interval.invalid("missing or invalid start");
  } else if (!end || !end.isValid) {
    return Interval.invalid("missing or invalid end");
  } else if (end < start) {
    return Interval.invalid(
      "end before start",
      `The end of an interval must be after its start, but you had start=${start.toISO()} and end=${end.toISO()}`
    );
  } else {
    return null;
  }
}
class Interval {
  /**
   * @private
   */
  constructor(config) {
    this.s = config.start;
    this.e = config.end;
    this.invalid = config.invalid || null;
    this.isLuxonInterval = true;
  }
  /**
   * Create an invalid Interval.
   * @param {string} reason - simple string of why this Interval is invalid. Should not contain parameters or anything else data-dependent
   * @param {string} [explanation=null] - longer explanation, may include parameters and other useful debugging information
   * @return {Interval}
   */
  static invalid(reason, explanation = null) {
    if (!reason) {
      throw new InvalidArgumentError("need to specify a reason the Interval is invalid");
    }
    const invalid = reason instanceof Invalid ? reason : new Invalid(reason, explanation);
    if (Settings.throwOnInvalid) {
      throw new InvalidIntervalError(invalid);
    } else {
      return new Interval({ invalid });
    }
  }
  /**
   * Create an Interval from a start DateTime and an end DateTime. Inclusive of the start but not the end.
   * @param {DateTime|Date|Object} start
   * @param {DateTime|Date|Object} end
   * @return {Interval}
   */
  static fromDateTimes(start, end) {
    const builtStart = friendlyDateTime(start), builtEnd = friendlyDateTime(end);
    const validateError = validateStartEnd(builtStart, builtEnd);
    if (validateError == null) {
      return new Interval({
        start: builtStart,
        end: builtEnd
      });
    } else {
      return validateError;
    }
  }
  /**
   * Create an Interval from a start DateTime and a Duration to extend to.
   * @param {DateTime|Date|Object} start
   * @param {Duration|Object|number} duration - the length of the Interval.
   * @return {Interval}
   */
  static after(start, duration) {
    const dur = Duration.fromDurationLike(duration), dt = friendlyDateTime(start);
    return Interval.fromDateTimes(dt, dt.plus(dur));
  }
  /**
   * Create an Interval from an end DateTime and a Duration to extend backwards to.
   * @param {DateTime|Date|Object} end
   * @param {Duration|Object|number} duration - the length of the Interval.
   * @return {Interval}
   */
  static before(end, duration) {
    const dur = Duration.fromDurationLike(duration), dt = friendlyDateTime(end);
    return Interval.fromDateTimes(dt.minus(dur), dt);
  }
  /**
   * Create an Interval from an ISO 8601 string.
   * Accepts `<start>/<end>`, `<start>/<duration>`, and `<duration>/<end>` formats.
   * @param {string} text - the ISO string to parse
   * @param {Object} [opts] - options to pass {@link DateTime#fromISO} and optionally {@link Duration#fromISO}
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @return {Interval}
   */
  static fromISO(text, opts) {
    const [s2, e] = (text || "").split("/", 2);
    if (s2 && e) {
      let start, startIsValid;
      try {
        start = DateTime.fromISO(s2, opts);
        startIsValid = start.isValid;
      } catch (e2) {
        startIsValid = false;
      }
      let end, endIsValid;
      try {
        end = DateTime.fromISO(e, opts);
        endIsValid = end.isValid;
      } catch (e2) {
        endIsValid = false;
      }
      if (startIsValid && endIsValid) {
        return Interval.fromDateTimes(start, end);
      }
      if (startIsValid) {
        const dur = Duration.fromISO(e, opts);
        if (dur.isValid) {
          return Interval.after(start, dur);
        }
      } else if (endIsValid) {
        const dur = Duration.fromISO(s2, opts);
        if (dur.isValid) {
          return Interval.before(end, dur);
        }
      }
    }
    return Interval.invalid("unparsable", `the input "${text}" can't be parsed as ISO 8601`);
  }
  /**
   * Check if an object is an Interval. Works across context boundaries
   * @param {object} o
   * @return {boolean}
   */
  static isInterval(o) {
    return o && o.isLuxonInterval || false;
  }
  /**
   * Returns the start of the Interval
   * @type {DateTime}
   */
  get start() {
    return this.isValid ? this.s : null;
  }
  /**
   * Returns the end of the Interval
   * @type {DateTime}
   */
  get end() {
    return this.isValid ? this.e : null;
  }
  /**
   * Returns whether this Interval's end is at least its start, meaning that the Interval isn't 'backwards'.
   * @type {boolean}
   */
  get isValid() {
    return this.invalidReason === null;
  }
  /**
   * Returns an error code if this Interval is invalid, or null if the Interval is valid
   * @type {string}
   */
  get invalidReason() {
    return this.invalid ? this.invalid.reason : null;
  }
  /**
   * Returns an explanation of why this Interval became invalid, or null if the Interval is valid
   * @type {string}
   */
  get invalidExplanation() {
    return this.invalid ? this.invalid.explanation : null;
  }
  /**
   * Returns the length of the Interval in the specified unit.
   * @param {string} unit - the unit (such as 'hours' or 'days') to return the length in.
   * @return {number}
   */
  length(unit = "milliseconds") {
    return this.isValid ? this.toDuration(...[unit]).get(unit) : NaN;
  }
  /**
   * Returns the count of minutes, hours, days, months, or years included in the Interval, even in part.
   * Unlike {@link Interval#length} this counts sections of the calendar, not periods of time, e.g. specifying 'day'
   * asks 'what dates are included in this interval?', not 'how many days long is this interval?'
   * @param {string} [unit='milliseconds'] - the unit of time to count.
   * @return {number}
   */
  count(unit = "milliseconds") {
    if (!this.isValid)
      return NaN;
    const start = this.start.startOf(unit), end = this.end.startOf(unit);
    return Math.floor(end.diff(start, unit).get(unit)) + 1;
  }
  /**
   * Returns whether this Interval's start and end are both in the same unit of time
   * @param {string} unit - the unit of time to check sameness on
   * @return {boolean}
   */
  hasSame(unit) {
    return this.isValid ? this.isEmpty() || this.e.minus(1).hasSame(this.s, unit) : false;
  }
  /**
   * Return whether this Interval has the same start and end DateTimes.
   * @return {boolean}
   */
  isEmpty() {
    return this.s.valueOf() === this.e.valueOf();
  }
  /**
   * Return whether this Interval's start is after the specified DateTime.
   * @param {DateTime} dateTime
   * @return {boolean}
   */
  isAfter(dateTime) {
    if (!this.isValid)
      return false;
    return this.s > dateTime;
  }
  /**
   * Return whether this Interval's end is before the specified DateTime.
   * @param {DateTime} dateTime
   * @return {boolean}
   */
  isBefore(dateTime) {
    if (!this.isValid)
      return false;
    return this.e <= dateTime;
  }
  /**
   * Return whether this Interval contains the specified DateTime.
   * @param {DateTime} dateTime
   * @return {boolean}
   */
  contains(dateTime) {
    if (!this.isValid)
      return false;
    return this.s <= dateTime && this.e > dateTime;
  }
  /**
   * "Sets" the start and/or end dates. Returns a newly-constructed Interval.
   * @param {Object} values - the values to set
   * @param {DateTime} values.start - the starting DateTime
   * @param {DateTime} values.end - the ending DateTime
   * @return {Interval}
   */
  set({ start, end } = {}) {
    if (!this.isValid)
      return this;
    return Interval.fromDateTimes(start || this.s, end || this.e);
  }
  /**
   * Split this Interval at each of the specified DateTimes
   * @param {...DateTime} dateTimes - the unit of time to count.
   * @return {Array}
   */
  splitAt(...dateTimes) {
    if (!this.isValid)
      return [];
    const sorted = dateTimes.map(friendlyDateTime).filter((d) => this.contains(d)).sort(), results = [];
    let { s: s2 } = this, i = 0;
    while (s2 < this.e) {
      const added = sorted[i] || this.e, next = +added > +this.e ? this.e : added;
      results.push(Interval.fromDateTimes(s2, next));
      s2 = next;
      i += 1;
    }
    return results;
  }
  /**
   * Split this Interval into smaller Intervals, each of the specified length.
   * Left over time is grouped into a smaller interval
   * @param {Duration|Object|number} duration - The length of each resulting interval.
   * @return {Array}
   */
  splitBy(duration) {
    const dur = Duration.fromDurationLike(duration);
    if (!this.isValid || !dur.isValid || dur.as("milliseconds") === 0) {
      return [];
    }
    let { s: s2 } = this, idx = 1, next;
    const results = [];
    while (s2 < this.e) {
      const added = this.start.plus(dur.mapUnits((x) => x * idx));
      next = +added > +this.e ? this.e : added;
      results.push(Interval.fromDateTimes(s2, next));
      s2 = next;
      idx += 1;
    }
    return results;
  }
  /**
   * Split this Interval into the specified number of smaller intervals.
   * @param {number} numberOfParts - The number of Intervals to divide the Interval into.
   * @return {Array}
   */
  divideEqually(numberOfParts) {
    if (!this.isValid)
      return [];
    return this.splitBy(this.length() / numberOfParts).slice(0, numberOfParts);
  }
  /**
   * Return whether this Interval overlaps with the specified Interval
   * @param {Interval} other
   * @return {boolean}
   */
  overlaps(other) {
    return this.e > other.s && this.s < other.e;
  }
  /**
   * Return whether this Interval's end is adjacent to the specified Interval's start.
   * @param {Interval} other
   * @return {boolean}
   */
  abutsStart(other) {
    if (!this.isValid)
      return false;
    return +this.e === +other.s;
  }
  /**
   * Return whether this Interval's start is adjacent to the specified Interval's end.
   * @param {Interval} other
   * @return {boolean}
   */
  abutsEnd(other) {
    if (!this.isValid)
      return false;
    return +other.e === +this.s;
  }
  /**
   * Return whether this Interval engulfs the start and end of the specified Interval.
   * @param {Interval} other
   * @return {boolean}
   */
  engulfs(other) {
    if (!this.isValid)
      return false;
    return this.s <= other.s && this.e >= other.e;
  }
  /**
   * Return whether this Interval has the same start and end as the specified Interval.
   * @param {Interval} other
   * @return {boolean}
   */
  equals(other) {
    if (!this.isValid || !other.isValid) {
      return false;
    }
    return this.s.equals(other.s) && this.e.equals(other.e);
  }
  /**
   * Return an Interval representing the intersection of this Interval and the specified Interval.
   * Specifically, the resulting Interval has the maximum start time and the minimum end time of the two Intervals.
   * Returns null if the intersection is empty, meaning, the intervals don't intersect.
   * @param {Interval} other
   * @return {Interval}
   */
  intersection(other) {
    if (!this.isValid)
      return this;
    const s2 = this.s > other.s ? this.s : other.s, e = this.e < other.e ? this.e : other.e;
    if (s2 >= e) {
      return null;
    } else {
      return Interval.fromDateTimes(s2, e);
    }
  }
  /**
   * Return an Interval representing the union of this Interval and the specified Interval.
   * Specifically, the resulting Interval has the minimum start time and the maximum end time of the two Intervals.
   * @param {Interval} other
   * @return {Interval}
   */
  union(other) {
    if (!this.isValid)
      return this;
    const s2 = this.s < other.s ? this.s : other.s, e = this.e > other.e ? this.e : other.e;
    return Interval.fromDateTimes(s2, e);
  }
  /**
   * Merge an array of Intervals into a equivalent minimal set of Intervals.
   * Combines overlapping and adjacent Intervals.
   * @param {Array} intervals
   * @return {Array}
   */
  static merge(intervals) {
    const [found, final] = intervals.sort((a, b) => a.s - b.s).reduce(
      ([sofar, current], item) => {
        if (!current) {
          return [sofar, item];
        } else if (current.overlaps(item) || current.abutsStart(item)) {
          return [sofar, current.union(item)];
        } else {
          return [sofar.concat([current]), item];
        }
      },
      [[], null]
    );
    if (final) {
      found.push(final);
    }
    return found;
  }
  /**
   * Return an array of Intervals representing the spans of time that only appear in one of the specified Intervals.
   * @param {Array} intervals
   * @return {Array}
   */
  static xor(intervals) {
    let start = null, currentCount = 0;
    const results = [], ends = intervals.map((i) => [
      { time: i.s, type: "s" },
      { time: i.e, type: "e" }
    ]), flattened = Array.prototype.concat(...ends), arr = flattened.sort((a, b) => a.time - b.time);
    for (const i of arr) {
      currentCount += i.type === "s" ? 1 : -1;
      if (currentCount === 1) {
        start = i.time;
      } else {
        if (start && +start !== +i.time) {
          results.push(Interval.fromDateTimes(start, i.time));
        }
        start = null;
      }
    }
    return Interval.merge(results);
  }
  /**
   * Return an Interval representing the span of time in this Interval that doesn't overlap with any of the specified Intervals.
   * @param {...Interval} intervals
   * @return {Array}
   */
  difference(...intervals) {
    return Interval.xor([this].concat(intervals)).map((i) => this.intersection(i)).filter((i) => i && !i.isEmpty());
  }
  /**
   * Returns a string representation of this Interval appropriate for debugging.
   * @return {string}
   */
  toString() {
    if (!this.isValid)
      return INVALID$1;
    return `[${this.s.toISO()} – ${this.e.toISO()})`;
  }
  /**
   * Returns a localized string representing this Interval. Accepts the same options as the
   * Intl.DateTimeFormat constructor and any presets defined by Luxon, such as
   * {@link DateTime.DATE_FULL} or {@link DateTime.TIME_SIMPLE}. The exact behavior of this method
   * is browser-specific, but in general it will return an appropriate representation of the
   * Interval in the assigned locale. Defaults to the system's locale if no locale has been
   * specified.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
   * @param {Object} [formatOpts=DateTime.DATE_SHORT] - Either a DateTime preset or
   * Intl.DateTimeFormat constructor options.
   * @param {Object} opts - Options to override the configuration of the start DateTime.
   * @example Interval.fromISO('2022-11-07T09:00Z/2022-11-08T09:00Z').toLocaleString(); //=> 11/7/2022 – 11/8/2022
   * @example Interval.fromISO('2022-11-07T09:00Z/2022-11-08T09:00Z').toLocaleString(DateTime.DATE_FULL); //=> November 7 – 8, 2022
   * @example Interval.fromISO('2022-11-07T09:00Z/2022-11-08T09:00Z').toLocaleString(DateTime.DATE_FULL, { locale: 'fr-FR' }); //=> 7–8 novembre 2022
   * @example Interval.fromISO('2022-11-07T17:00Z/2022-11-07T19:00Z').toLocaleString(DateTime.TIME_SIMPLE); //=> 6:00 – 8:00 PM
   * @example Interval.fromISO('2022-11-07T17:00Z/2022-11-07T19:00Z').toLocaleString({ weekday: 'short', month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit' }); //=> Mon, Nov 07, 6:00 – 8:00 p
   * @return {string}
   */
  toLocaleString(formatOpts = DATE_SHORT, opts = {}) {
    return this.isValid ? Formatter.create(this.s.loc.clone(opts), formatOpts).formatInterval(this) : INVALID$1;
  }
  /**
   * Returns an ISO 8601-compliant string representation of this Interval.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @param {Object} opts - The same options as {@link DateTime#toISO}
   * @return {string}
   */
  toISO(opts) {
    if (!this.isValid)
      return INVALID$1;
    return `${this.s.toISO(opts)}/${this.e.toISO(opts)}`;
  }
  /**
   * Returns an ISO 8601-compliant string representation of date of this Interval.
   * The time components are ignored.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @return {string}
   */
  toISODate() {
    if (!this.isValid)
      return INVALID$1;
    return `${this.s.toISODate()}/${this.e.toISODate()}`;
  }
  /**
   * Returns an ISO 8601-compliant string representation of time of this Interval.
   * The date components are ignored.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @param {Object} opts - The same options as {@link DateTime#toISO}
   * @return {string}
   */
  toISOTime(opts) {
    if (!this.isValid)
      return INVALID$1;
    return `${this.s.toISOTime(opts)}/${this.e.toISOTime(opts)}`;
  }
  /**
   * Returns a string representation of this Interval formatted according to the specified format
   * string. **You may not want this.** See {@link Interval#toLocaleString} for a more flexible
   * formatting tool.
   * @param {string} dateFormat - The format string. This string formats the start and end time.
   * See {@link DateTime#toFormat} for details.
   * @param {Object} opts - Options.
   * @param {string} [opts.separator =  ' – '] - A separator to place between the start and end
   * representations.
   * @return {string}
   */
  toFormat(dateFormat, { separator = " – " } = {}) {
    if (!this.isValid)
      return INVALID$1;
    return `${this.s.toFormat(dateFormat)}${separator}${this.e.toFormat(dateFormat)}`;
  }
  /**
   * Return a Duration representing the time spanned by this interval.
   * @param {string|string[]} [unit=['milliseconds']] - the unit or units (such as 'hours' or 'days') to include in the duration.
   * @param {Object} opts - options that affect the creation of the Duration
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @example Interval.fromDateTimes(dt1, dt2).toDuration().toObject() //=> { milliseconds: 88489257 }
   * @example Interval.fromDateTimes(dt1, dt2).toDuration('days').toObject() //=> { days: 1.0241812152777778 }
   * @example Interval.fromDateTimes(dt1, dt2).toDuration(['hours', 'minutes']).toObject() //=> { hours: 24, minutes: 34.82095 }
   * @example Interval.fromDateTimes(dt1, dt2).toDuration(['hours', 'minutes', 'seconds']).toObject() //=> { hours: 24, minutes: 34, seconds: 49.257 }
   * @example Interval.fromDateTimes(dt1, dt2).toDuration('seconds').toObject() //=> { seconds: 88489.257 }
   * @return {Duration}
   */
  toDuration(unit, opts) {
    if (!this.isValid) {
      return Duration.invalid(this.invalidReason);
    }
    return this.e.diff(this.s, unit, opts);
  }
  /**
   * Run mapFn on the interval start and end, returning a new Interval from the resulting DateTimes
   * @param {function} mapFn
   * @return {Interval}
   * @example Interval.fromDateTimes(dt1, dt2).mapEndpoints(endpoint => endpoint.toUTC())
   * @example Interval.fromDateTimes(dt1, dt2).mapEndpoints(endpoint => endpoint.plus({ hours: 2 }))
   */
  mapEndpoints(mapFn) {
    return Interval.fromDateTimes(mapFn(this.s), mapFn(this.e));
  }
}
class Info {
  /**
   * Return whether the specified zone contains a DST.
   * @param {string|Zone} [zone='local'] - Zone to check. Defaults to the environment's local zone.
   * @return {boolean}
   */
  static hasDST(zone = Settings.defaultZone) {
    const proto = DateTime.now().setZone(zone).set({ month: 12 });
    return !zone.isUniversal && proto.offset !== proto.set({ month: 6 }).offset;
  }
  /**
   * Return whether the specified zone is a valid IANA specifier.
   * @param {string} zone - Zone to check
   * @return {boolean}
   */
  static isValidIANAZone(zone) {
    return IANAZone.isValidZone(zone);
  }
  /**
   * Converts the input into a {@link Zone} instance.
   *
   * * If `input` is already a Zone instance, it is returned unchanged.
   * * If `input` is a string containing a valid time zone name, a Zone instance
   *   with that name is returned.
   * * If `input` is a string that doesn't refer to a known time zone, a Zone
   *   instance with {@link Zone#isValid} == false is returned.
   * * If `input is a number, a Zone instance with the specified fixed offset
   *   in minutes is returned.
   * * If `input` is `null` or `undefined`, the default zone is returned.
   * @param {string|Zone|number} [input] - the value to be converted
   * @return {Zone}
   */
  static normalizeZone(input) {
    return normalizeZone(input, Settings.defaultZone);
  }
  /**
   * Return an array of standalone month names.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
   * @param {string} [length='long'] - the length of the month representation, such as "numeric", "2-digit", "narrow", "short", "long"
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @param {string} [opts.numberingSystem=null] - the numbering system
   * @param {string} [opts.locObj=null] - an existing locale object to use
   * @param {string} [opts.outputCalendar='gregory'] - the calendar
   * @example Info.months()[0] //=> 'January'
   * @example Info.months('short')[0] //=> 'Jan'
   * @example Info.months('numeric')[0] //=> '1'
   * @example Info.months('short', { locale: 'fr-CA' } )[0] //=> 'janv.'
   * @example Info.months('numeric', { locale: 'ar' })[0] //=> '١'
   * @example Info.months('long', { outputCalendar: 'islamic' })[0] //=> 'Rabiʻ I'
   * @return {Array}
   */
  static months(length = "long", { locale = null, numberingSystem = null, locObj = null, outputCalendar = "gregory" } = {}) {
    return (locObj || Locale.create(locale, numberingSystem, outputCalendar)).months(length);
  }
  /**
   * Return an array of format month names.
   * Format months differ from standalone months in that they're meant to appear next to the day of the month. In some languages, that
   * changes the string.
   * See {@link Info#months}
   * @param {string} [length='long'] - the length of the month representation, such as "numeric", "2-digit", "narrow", "short", "long"
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @param {string} [opts.numberingSystem=null] - the numbering system
   * @param {string} [opts.locObj=null] - an existing locale object to use
   * @param {string} [opts.outputCalendar='gregory'] - the calendar
   * @return {Array}
   */
  static monthsFormat(length = "long", { locale = null, numberingSystem = null, locObj = null, outputCalendar = "gregory" } = {}) {
    return (locObj || Locale.create(locale, numberingSystem, outputCalendar)).months(length, true);
  }
  /**
   * Return an array of standalone week names.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
   * @param {string} [length='long'] - the length of the weekday representation, such as "narrow", "short", "long".
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @param {string} [opts.numberingSystem=null] - the numbering system
   * @param {string} [opts.locObj=null] - an existing locale object to use
   * @example Info.weekdays()[0] //=> 'Monday'
   * @example Info.weekdays('short')[0] //=> 'Mon'
   * @example Info.weekdays('short', { locale: 'fr-CA' })[0] //=> 'lun.'
   * @example Info.weekdays('short', { locale: 'ar' })[0] //=> 'الاثنين'
   * @return {Array}
   */
  static weekdays(length = "long", { locale = null, numberingSystem = null, locObj = null } = {}) {
    return (locObj || Locale.create(locale, numberingSystem, null)).weekdays(length);
  }
  /**
   * Return an array of format week names.
   * Format weekdays differ from standalone weekdays in that they're meant to appear next to more date information. In some languages, that
   * changes the string.
   * See {@link Info#weekdays}
   * @param {string} [length='long'] - the length of the month representation, such as "narrow", "short", "long".
   * @param {Object} opts - options
   * @param {string} [opts.locale=null] - the locale code
   * @param {string} [opts.numberingSystem=null] - the numbering system
   * @param {string} [opts.locObj=null] - an existing locale object to use
   * @return {Array}
   */
  static weekdaysFormat(length = "long", { locale = null, numberingSystem = null, locObj = null } = {}) {
    return (locObj || Locale.create(locale, numberingSystem, null)).weekdays(length, true);
  }
  /**
   * Return an array of meridiems.
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @example Info.meridiems() //=> [ 'AM', 'PM' ]
   * @example Info.meridiems({ locale: 'my' }) //=> [ 'နံနက်', 'ညနေ' ]
   * @return {Array}
   */
  static meridiems({ locale = null } = {}) {
    return Locale.create(locale).meridiems();
  }
  /**
   * Return an array of eras, such as ['BC', 'AD']. The locale can be specified, but the calendar system is always Gregorian.
   * @param {string} [length='short'] - the length of the era representation, such as "short" or "long".
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @example Info.eras() //=> [ 'BC', 'AD' ]
   * @example Info.eras('long') //=> [ 'Before Christ', 'Anno Domini' ]
   * @example Info.eras('long', { locale: 'fr' }) //=> [ 'avant Jésus-Christ', 'après Jésus-Christ' ]
   * @return {Array}
   */
  static eras(length = "short", { locale = null } = {}) {
    return Locale.create(locale, null, "gregory").eras(length);
  }
  /**
   * Return the set of available features in this environment.
   * Some features of Luxon are not available in all environments. For example, on older browsers, relative time formatting support is not available. Use this function to figure out if that's the case.
   * Keys:
   * * `relative`: whether this environment supports relative time formatting
   * @example Info.features() //=> { relative: false }
   * @return {Object}
   */
  static features() {
    return { relative: hasRelative() };
  }
}
function dayDiff(earlier, later) {
  const utcDayStart = (dt) => dt.toUTC(0, { keepLocalTime: true }).startOf("day").valueOf(), ms = utcDayStart(later) - utcDayStart(earlier);
  return Math.floor(Duration.fromMillis(ms).as("days"));
}
function highOrderDiffs(cursor, later, units) {
  const differs = [
    ["years", (a, b) => b.year - a.year],
    ["quarters", (a, b) => b.quarter - a.quarter + (b.year - a.year) * 4],
    ["months", (a, b) => b.month - a.month + (b.year - a.year) * 12],
    [
      "weeks",
      (a, b) => {
        const days = dayDiff(a, b);
        return (days - days % 7) / 7;
      }
    ],
    ["days", dayDiff]
  ];
  const results = {};
  const earlier = cursor;
  let lowestOrder, highWater;
  for (const [unit, differ] of differs) {
    if (units.indexOf(unit) >= 0) {
      lowestOrder = unit;
      results[unit] = differ(cursor, later);
      highWater = earlier.plus(results);
      if (highWater > later) {
        results[unit]--;
        cursor = earlier.plus(results);
      } else {
        cursor = highWater;
      }
    }
  }
  return [cursor, results, highWater, lowestOrder];
}
function diff(earlier, later, units, opts) {
  let [cursor, results, highWater, lowestOrder] = highOrderDiffs(earlier, later, units);
  const remainingMillis = later - cursor;
  const lowerOrderUnits = units.filter(
    (u) => ["hours", "minutes", "seconds", "milliseconds"].indexOf(u) >= 0
  );
  if (lowerOrderUnits.length === 0) {
    if (highWater < later) {
      highWater = cursor.plus({ [lowestOrder]: 1 });
    }
    if (highWater !== cursor) {
      results[lowestOrder] = (results[lowestOrder] || 0) + remainingMillis / (highWater - cursor);
    }
  }
  const duration = Duration.fromObject(results, opts);
  if (lowerOrderUnits.length > 0) {
    return Duration.fromMillis(remainingMillis, opts).shiftTo(...lowerOrderUnits).plus(duration);
  } else {
    return duration;
  }
}
const numberingSystems = {
  arab: "[٠-٩]",
  arabext: "[۰-۹]",
  bali: "[᭐-᭙]",
  beng: "[০-৯]",
  deva: "[०-९]",
  fullwide: "[０-９]",
  gujr: "[૦-૯]",
  hanidec: "[〇|一|二|三|四|五|六|七|八|九]",
  khmr: "[០-៩]",
  knda: "[೦-೯]",
  laoo: "[໐-໙]",
  limb: "[᥆-᥏]",
  mlym: "[൦-൯]",
  mong: "[᠐-᠙]",
  mymr: "[၀-၉]",
  orya: "[୦-୯]",
  tamldec: "[௦-௯]",
  telu: "[౦-౯]",
  thai: "[๐-๙]",
  tibt: "[༠-༩]",
  latn: "\\d"
};
const numberingSystemsUTF16 = {
  arab: [1632, 1641],
  arabext: [1776, 1785],
  bali: [6992, 7001],
  beng: [2534, 2543],
  deva: [2406, 2415],
  fullwide: [65296, 65303],
  gujr: [2790, 2799],
  khmr: [6112, 6121],
  knda: [3302, 3311],
  laoo: [3792, 3801],
  limb: [6470, 6479],
  mlym: [3430, 3439],
  mong: [6160, 6169],
  mymr: [4160, 4169],
  orya: [2918, 2927],
  tamldec: [3046, 3055],
  telu: [3174, 3183],
  thai: [3664, 3673],
  tibt: [3872, 3881]
};
const hanidecChars = numberingSystems.hanidec.replace(/[\[|\]]/g, "").split("");
function parseDigits(str) {
  let value = parseInt(str, 10);
  if (isNaN(value)) {
    value = "";
    for (let i = 0; i < str.length; i++) {
      const code = str.charCodeAt(i);
      if (str[i].search(numberingSystems.hanidec) !== -1) {
        value += hanidecChars.indexOf(str[i]);
      } else {
        for (const key in numberingSystemsUTF16) {
          const [min, max] = numberingSystemsUTF16[key];
          if (code >= min && code <= max) {
            value += code - min;
          }
        }
      }
    }
    return parseInt(value, 10);
  } else {
    return value;
  }
}
function digitRegex({ numberingSystem }, append = "") {
  return new RegExp(`${numberingSystems[numberingSystem || "latn"]}${append}`);
}
const MISSING_FTP = "missing Intl.DateTimeFormat.formatToParts support";
function intUnit(regex, post = (i) => i) {
  return { regex, deser: ([s2]) => post(parseDigits(s2)) };
}
const NBSP = String.fromCharCode(160);
const spaceOrNBSP = `[ ${NBSP}]`;
const spaceOrNBSPRegExp = new RegExp(spaceOrNBSP, "g");
function fixListRegex(s2) {
  return s2.replace(/\./g, "\\.?").replace(spaceOrNBSPRegExp, spaceOrNBSP);
}
function stripInsensitivities(s2) {
  return s2.replace(/\./g, "").replace(spaceOrNBSPRegExp, " ").toLowerCase();
}
function oneOf(strings, startIndex) {
  if (strings === null) {
    return null;
  } else {
    return {
      regex: RegExp(strings.map(fixListRegex).join("|")),
      deser: ([s2]) => strings.findIndex((i) => stripInsensitivities(s2) === stripInsensitivities(i)) + startIndex
    };
  }
}
function offset(regex, groups) {
  return { regex, deser: ([, h, m]) => signedOffset(h, m), groups };
}
function simple(regex) {
  return { regex, deser: ([s2]) => s2 };
}
function escapeToken(value) {
  return value.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
}
function unitForToken(token, loc) {
  const one = digitRegex(loc), two = digitRegex(loc, "{2}"), three = digitRegex(loc, "{3}"), four = digitRegex(loc, "{4}"), six = digitRegex(loc, "{6}"), oneOrTwo = digitRegex(loc, "{1,2}"), oneToThree = digitRegex(loc, "{1,3}"), oneToSix = digitRegex(loc, "{1,6}"), oneToNine = digitRegex(loc, "{1,9}"), twoToFour = digitRegex(loc, "{2,4}"), fourToSix = digitRegex(loc, "{4,6}"), literal = (t) => ({ regex: RegExp(escapeToken(t.val)), deser: ([s2]) => s2, literal: true }), unitate = (t) => {
    if (token.literal) {
      return literal(t);
    }
    switch (t.val) {
      case "G":
        return oneOf(loc.eras("short", false), 0);
      case "GG":
        return oneOf(loc.eras("long", false), 0);
      case "y":
        return intUnit(oneToSix);
      case "yy":
        return intUnit(twoToFour, untruncateYear);
      case "yyyy":
        return intUnit(four);
      case "yyyyy":
        return intUnit(fourToSix);
      case "yyyyyy":
        return intUnit(six);
      case "M":
        return intUnit(oneOrTwo);
      case "MM":
        return intUnit(two);
      case "MMM":
        return oneOf(loc.months("short", true, false), 1);
      case "MMMM":
        return oneOf(loc.months("long", true, false), 1);
      case "L":
        return intUnit(oneOrTwo);
      case "LL":
        return intUnit(two);
      case "LLL":
        return oneOf(loc.months("short", false, false), 1);
      case "LLLL":
        return oneOf(loc.months("long", false, false), 1);
      case "d":
        return intUnit(oneOrTwo);
      case "dd":
        return intUnit(two);
      case "o":
        return intUnit(oneToThree);
      case "ooo":
        return intUnit(three);
      case "HH":
        return intUnit(two);
      case "H":
        return intUnit(oneOrTwo);
      case "hh":
        return intUnit(two);
      case "h":
        return intUnit(oneOrTwo);
      case "mm":
        return intUnit(two);
      case "m":
        return intUnit(oneOrTwo);
      case "q":
        return intUnit(oneOrTwo);
      case "qq":
        return intUnit(two);
      case "s":
        return intUnit(oneOrTwo);
      case "ss":
        return intUnit(two);
      case "S":
        return intUnit(oneToThree);
      case "SSS":
        return intUnit(three);
      case "u":
        return simple(oneToNine);
      case "uu":
        return simple(oneOrTwo);
      case "uuu":
        return intUnit(one);
      case "a":
        return oneOf(loc.meridiems(), 0);
      case "kkkk":
        return intUnit(four);
      case "kk":
        return intUnit(twoToFour, untruncateYear);
      case "W":
        return intUnit(oneOrTwo);
      case "WW":
        return intUnit(two);
      case "E":
      case "c":
        return intUnit(one);
      case "EEE":
        return oneOf(loc.weekdays("short", false, false), 1);
      case "EEEE":
        return oneOf(loc.weekdays("long", false, false), 1);
      case "ccc":
        return oneOf(loc.weekdays("short", true, false), 1);
      case "cccc":
        return oneOf(loc.weekdays("long", true, false), 1);
      case "Z":
      case "ZZ":
        return offset(new RegExp(`([+-]${oneOrTwo.source})(?::(${two.source}))?`), 2);
      case "ZZZ":
        return offset(new RegExp(`([+-]${oneOrTwo.source})(${two.source})?`), 2);
      case "z":
        return simple(/[a-z_+-/]{1,256}?/i);
      default:
        return literal(t);
    }
  };
  const unit = unitate(token) || {
    invalidReason: MISSING_FTP
  };
  unit.token = token;
  return unit;
}
const partTypeStyleToTokenVal = {
  year: {
    "2-digit": "yy",
    numeric: "yyyyy"
  },
  month: {
    numeric: "M",
    "2-digit": "MM",
    short: "MMM",
    long: "MMMM"
  },
  day: {
    numeric: "d",
    "2-digit": "dd"
  },
  weekday: {
    short: "EEE",
    long: "EEEE"
  },
  dayperiod: "a",
  dayPeriod: "a",
  hour: {
    numeric: "h",
    "2-digit": "hh"
  },
  minute: {
    numeric: "m",
    "2-digit": "mm"
  },
  second: {
    numeric: "s",
    "2-digit": "ss"
  },
  timeZoneName: {
    long: "ZZZZZ",
    short: "ZZZ"
  }
};
function tokenForPart(part, formatOpts) {
  const { type, value } = part;
  if (type === "literal") {
    return {
      literal: true,
      val: value
    };
  }
  const style = formatOpts[type];
  let val = partTypeStyleToTokenVal[type];
  if (typeof val === "object") {
    val = val[style];
  }
  if (val) {
    return {
      literal: false,
      val
    };
  }
  return void 0;
}
function buildRegex(units) {
  const re = units.map((u) => u.regex).reduce((f, r) => `${f}(${r.source})`, "");
  return [`^${re}$`, units];
}
function match(input, regex, handlers) {
  const matches = input.match(regex);
  if (matches) {
    const all = {};
    let matchIndex = 1;
    for (const i in handlers) {
      if (hasOwnProperty(handlers, i)) {
        const h = handlers[i], groups = h.groups ? h.groups + 1 : 1;
        if (!h.literal && h.token) {
          all[h.token.val[0]] = h.deser(matches.slice(matchIndex, matchIndex + groups));
        }
        matchIndex += groups;
      }
    }
    return [matches, all];
  } else {
    return [matches, {}];
  }
}
function dateTimeFromMatches(matches) {
  const toField = (token) => {
    switch (token) {
      case "S":
        return "millisecond";
      case "s":
        return "second";
      case "m":
        return "minute";
      case "h":
      case "H":
        return "hour";
      case "d":
        return "day";
      case "o":
        return "ordinal";
      case "L":
      case "M":
        return "month";
      case "y":
        return "year";
      case "E":
      case "c":
        return "weekday";
      case "W":
        return "weekNumber";
      case "k":
        return "weekYear";
      case "q":
        return "quarter";
      default:
        return null;
    }
  };
  let zone = null;
  let specificOffset;
  if (!isUndefined(matches.z)) {
    zone = IANAZone.create(matches.z);
  }
  if (!isUndefined(matches.Z)) {
    if (!zone) {
      zone = new FixedOffsetZone(matches.Z);
    }
    specificOffset = matches.Z;
  }
  if (!isUndefined(matches.q)) {
    matches.M = (matches.q - 1) * 3 + 1;
  }
  if (!isUndefined(matches.h)) {
    if (matches.h < 12 && matches.a === 1) {
      matches.h += 12;
    } else if (matches.h === 12 && matches.a === 0) {
      matches.h = 0;
    }
  }
  if (matches.G === 0 && matches.y) {
    matches.y = -matches.y;
  }
  if (!isUndefined(matches.u)) {
    matches.S = parseMillis(matches.u);
  }
  const vals = Object.keys(matches).reduce((r, k) => {
    const f = toField(k);
    if (f) {
      r[f] = matches[k];
    }
    return r;
  }, {});
  return [vals, zone, specificOffset];
}
let dummyDateTimeCache = null;
function getDummyDateTime() {
  if (!dummyDateTimeCache) {
    dummyDateTimeCache = DateTime.fromMillis(1555555555555);
  }
  return dummyDateTimeCache;
}
function maybeExpandMacroToken(token, locale) {
  if (token.literal) {
    return token;
  }
  const formatOpts = Formatter.macroTokenToFormatOpts(token.val);
  const tokens = formatOptsToTokens(formatOpts, locale);
  if (tokens == null || tokens.includes(void 0)) {
    return token;
  }
  return tokens;
}
function expandMacroTokens(tokens, locale) {
  return Array.prototype.concat(...tokens.map((t) => maybeExpandMacroToken(t, locale)));
}
function explainFromTokens(locale, input, format) {
  const tokens = expandMacroTokens(Formatter.parseFormat(format), locale), units = tokens.map((t) => unitForToken(t, locale)), disqualifyingUnit = units.find((t) => t.invalidReason);
  if (disqualifyingUnit) {
    return { input, tokens, invalidReason: disqualifyingUnit.invalidReason };
  } else {
    const [regexString, handlers] = buildRegex(units), regex = RegExp(regexString, "i"), [rawMatches, matches] = match(input, regex, handlers), [result, zone, specificOffset] = matches ? dateTimeFromMatches(matches) : [null, null, void 0];
    if (hasOwnProperty(matches, "a") && hasOwnProperty(matches, "H")) {
      throw new ConflictingSpecificationError(
        "Can't include meridiem when specifying 24-hour format"
      );
    }
    return { input, tokens, regex, rawMatches, matches, result, zone, specificOffset };
  }
}
function parseFromTokens(locale, input, format) {
  const { result, zone, specificOffset, invalidReason } = explainFromTokens(locale, input, format);
  return [result, zone, specificOffset, invalidReason];
}
function formatOptsToTokens(formatOpts, locale) {
  if (!formatOpts) {
    return null;
  }
  const formatter = Formatter.create(locale, formatOpts);
  const parts = formatter.formatDateTimeParts(getDummyDateTime());
  return parts.map((p) => tokenForPart(p, formatOpts));
}
const nonLeapLadder = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334], leapLadder = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335];
function unitOutOfRange(unit, value) {
  return new Invalid(
    "unit out of range",
    `you specified ${value} (of type ${typeof value}) as a ${unit}, which is invalid`
  );
}
function dayOfWeek(year, month, day) {
  const d = new Date(Date.UTC(year, month - 1, day));
  if (year < 100 && year >= 0) {
    d.setUTCFullYear(d.getUTCFullYear() - 1900);
  }
  const js = d.getUTCDay();
  return js === 0 ? 7 : js;
}
function computeOrdinal(year, month, day) {
  return day + (isLeapYear(year) ? leapLadder : nonLeapLadder)[month - 1];
}
function uncomputeOrdinal(year, ordinal) {
  const table = isLeapYear(year) ? leapLadder : nonLeapLadder, month0 = table.findIndex((i) => i < ordinal), day = ordinal - table[month0];
  return { month: month0 + 1, day };
}
function gregorianToWeek(gregObj) {
  const { year, month, day } = gregObj, ordinal = computeOrdinal(year, month, day), weekday = dayOfWeek(year, month, day);
  let weekNumber = Math.floor((ordinal - weekday + 10) / 7), weekYear;
  if (weekNumber < 1) {
    weekYear = year - 1;
    weekNumber = weeksInWeekYear(weekYear);
  } else if (weekNumber > weeksInWeekYear(year)) {
    weekYear = year + 1;
    weekNumber = 1;
  } else {
    weekYear = year;
  }
  return { weekYear, weekNumber, weekday, ...timeObject(gregObj) };
}
function weekToGregorian(weekData) {
  const { weekYear, weekNumber, weekday } = weekData, weekdayOfJan4 = dayOfWeek(weekYear, 1, 4), yearInDays = daysInYear(weekYear);
  let ordinal = weekNumber * 7 + weekday - weekdayOfJan4 - 3, year;
  if (ordinal < 1) {
    year = weekYear - 1;
    ordinal += daysInYear(year);
  } else if (ordinal > yearInDays) {
    year = weekYear + 1;
    ordinal -= daysInYear(weekYear);
  } else {
    year = weekYear;
  }
  const { month, day } = uncomputeOrdinal(year, ordinal);
  return { year, month, day, ...timeObject(weekData) };
}
function gregorianToOrdinal(gregData) {
  const { year, month, day } = gregData;
  const ordinal = computeOrdinal(year, month, day);
  return { year, ordinal, ...timeObject(gregData) };
}
function ordinalToGregorian(ordinalData) {
  const { year, ordinal } = ordinalData;
  const { month, day } = uncomputeOrdinal(year, ordinal);
  return { year, month, day, ...timeObject(ordinalData) };
}
function hasInvalidWeekData(obj) {
  const validYear = isInteger(obj.weekYear), validWeek = integerBetween(obj.weekNumber, 1, weeksInWeekYear(obj.weekYear)), validWeekday = integerBetween(obj.weekday, 1, 7);
  if (!validYear) {
    return unitOutOfRange("weekYear", obj.weekYear);
  } else if (!validWeek) {
    return unitOutOfRange("week", obj.week);
  } else if (!validWeekday) {
    return unitOutOfRange("weekday", obj.weekday);
  } else
    return false;
}
function hasInvalidOrdinalData(obj) {
  const validYear = isInteger(obj.year), validOrdinal = integerBetween(obj.ordinal, 1, daysInYear(obj.year));
  if (!validYear) {
    return unitOutOfRange("year", obj.year);
  } else if (!validOrdinal) {
    return unitOutOfRange("ordinal", obj.ordinal);
  } else
    return false;
}
function hasInvalidGregorianData(obj) {
  const validYear = isInteger(obj.year), validMonth = integerBetween(obj.month, 1, 12), validDay = integerBetween(obj.day, 1, daysInMonth(obj.year, obj.month));
  if (!validYear) {
    return unitOutOfRange("year", obj.year);
  } else if (!validMonth) {
    return unitOutOfRange("month", obj.month);
  } else if (!validDay) {
    return unitOutOfRange("day", obj.day);
  } else
    return false;
}
function hasInvalidTimeData(obj) {
  const { hour, minute, second, millisecond } = obj;
  const validHour = integerBetween(hour, 0, 23) || hour === 24 && minute === 0 && second === 0 && millisecond === 0, validMinute = integerBetween(minute, 0, 59), validSecond = integerBetween(second, 0, 59), validMillisecond = integerBetween(millisecond, 0, 999);
  if (!validHour) {
    return unitOutOfRange("hour", hour);
  } else if (!validMinute) {
    return unitOutOfRange("minute", minute);
  } else if (!validSecond) {
    return unitOutOfRange("second", second);
  } else if (!validMillisecond) {
    return unitOutOfRange("millisecond", millisecond);
  } else
    return false;
}
const INVALID = "Invalid DateTime";
const MAX_DATE = 864e13;
function unsupportedZone(zone) {
  return new Invalid("unsupported zone", `the zone "${zone.name}" is not supported`);
}
function possiblyCachedWeekData(dt) {
  if (dt.weekData === null) {
    dt.weekData = gregorianToWeek(dt.c);
  }
  return dt.weekData;
}
function clone(inst, alts) {
  const current = {
    ts: inst.ts,
    zone: inst.zone,
    c: inst.c,
    o: inst.o,
    loc: inst.loc,
    invalid: inst.invalid
  };
  return new DateTime({ ...current, ...alts, old: current });
}
function fixOffset(localTS, o, tz) {
  let utcGuess = localTS - o * 60 * 1e3;
  const o2 = tz.offset(utcGuess);
  if (o === o2) {
    return [utcGuess, o];
  }
  utcGuess -= (o2 - o) * 60 * 1e3;
  const o3 = tz.offset(utcGuess);
  if (o2 === o3) {
    return [utcGuess, o2];
  }
  return [localTS - Math.min(o2, o3) * 60 * 1e3, Math.max(o2, o3)];
}
function tsToObj(ts, offset2) {
  ts += offset2 * 60 * 1e3;
  const d = new Date(ts);
  return {
    year: d.getUTCFullYear(),
    month: d.getUTCMonth() + 1,
    day: d.getUTCDate(),
    hour: d.getUTCHours(),
    minute: d.getUTCMinutes(),
    second: d.getUTCSeconds(),
    millisecond: d.getUTCMilliseconds()
  };
}
function objToTS(obj, offset2, zone) {
  return fixOffset(objToLocalTS(obj), offset2, zone);
}
function adjustTime(inst, dur) {
  const oPre = inst.o, year = inst.c.year + Math.trunc(dur.years), month = inst.c.month + Math.trunc(dur.months) + Math.trunc(dur.quarters) * 3, c = {
    ...inst.c,
    year,
    month,
    day: Math.min(inst.c.day, daysInMonth(year, month)) + Math.trunc(dur.days) + Math.trunc(dur.weeks) * 7
  }, millisToAdd = Duration.fromObject({
    years: dur.years - Math.trunc(dur.years),
    quarters: dur.quarters - Math.trunc(dur.quarters),
    months: dur.months - Math.trunc(dur.months),
    weeks: dur.weeks - Math.trunc(dur.weeks),
    days: dur.days - Math.trunc(dur.days),
    hours: dur.hours,
    minutes: dur.minutes,
    seconds: dur.seconds,
    milliseconds: dur.milliseconds
  }).as("milliseconds"), localTS = objToLocalTS(c);
  let [ts, o] = fixOffset(localTS, oPre, inst.zone);
  if (millisToAdd !== 0) {
    ts += millisToAdd;
    o = inst.zone.offset(ts);
  }
  return { ts, o };
}
function parseDataToDateTime(parsed, parsedZone, opts, format, text, specificOffset) {
  const { setZone, zone } = opts;
  if (parsed && Object.keys(parsed).length !== 0) {
    const interpretationZone = parsedZone || zone, inst = DateTime.fromObject(parsed, {
      ...opts,
      zone: interpretationZone,
      specificOffset
    });
    return setZone ? inst : inst.setZone(zone);
  } else {
    return DateTime.invalid(
      new Invalid("unparsable", `the input "${text}" can't be parsed as ${format}`)
    );
  }
}
function toTechFormat(dt, format, allowZ = true) {
  return dt.isValid ? Formatter.create(Locale.create("en-US"), {
    allowZ,
    forceSimple: true
  }).formatDateTimeFromString(dt, format) : null;
}
function toISODate(o, extended) {
  const longFormat = o.c.year > 9999 || o.c.year < 0;
  let c = "";
  if (longFormat && o.c.year >= 0)
    c += "+";
  c += padStart(o.c.year, longFormat ? 6 : 4);
  if (extended) {
    c += "-";
    c += padStart(o.c.month);
    c += "-";
    c += padStart(o.c.day);
  } else {
    c += padStart(o.c.month);
    c += padStart(o.c.day);
  }
  return c;
}
function toISOTime(o, extended, suppressSeconds, suppressMilliseconds, includeOffset, extendedZone) {
  let c = padStart(o.c.hour);
  if (extended) {
    c += ":";
    c += padStart(o.c.minute);
    if (o.c.second !== 0 || !suppressSeconds) {
      c += ":";
    }
  } else {
    c += padStart(o.c.minute);
  }
  if (o.c.second !== 0 || !suppressSeconds) {
    c += padStart(o.c.second);
    if (o.c.millisecond !== 0 || !suppressMilliseconds) {
      c += ".";
      c += padStart(o.c.millisecond, 3);
    }
  }
  if (includeOffset) {
    if (o.isOffsetFixed && o.offset === 0 && !extendedZone) {
      c += "Z";
    } else if (o.o < 0) {
      c += "-";
      c += padStart(Math.trunc(-o.o / 60));
      c += ":";
      c += padStart(Math.trunc(-o.o % 60));
    } else {
      c += "+";
      c += padStart(Math.trunc(o.o / 60));
      c += ":";
      c += padStart(Math.trunc(o.o % 60));
    }
  }
  if (extendedZone) {
    c += "[" + o.zone.ianaName + "]";
  }
  return c;
}
const defaultUnitValues = {
  month: 1,
  day: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
}, defaultWeekUnitValues = {
  weekNumber: 1,
  weekday: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
}, defaultOrdinalUnitValues = {
  ordinal: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
};
const orderedUnits = ["year", "month", "day", "hour", "minute", "second", "millisecond"], orderedWeekUnits = [
  "weekYear",
  "weekNumber",
  "weekday",
  "hour",
  "minute",
  "second",
  "millisecond"
], orderedOrdinalUnits = ["year", "ordinal", "hour", "minute", "second", "millisecond"];
function normalizeUnit(unit) {
  const normalized = {
    year: "year",
    years: "year",
    month: "month",
    months: "month",
    day: "day",
    days: "day",
    hour: "hour",
    hours: "hour",
    minute: "minute",
    minutes: "minute",
    quarter: "quarter",
    quarters: "quarter",
    second: "second",
    seconds: "second",
    millisecond: "millisecond",
    milliseconds: "millisecond",
    weekday: "weekday",
    weekdays: "weekday",
    weeknumber: "weekNumber",
    weeksnumber: "weekNumber",
    weeknumbers: "weekNumber",
    weekyear: "weekYear",
    weekyears: "weekYear",
    ordinal: "ordinal"
  }[unit.toLowerCase()];
  if (!normalized)
    throw new InvalidUnitError(unit);
  return normalized;
}
function quickDT(obj, opts) {
  const zone = normalizeZone(opts.zone, Settings.defaultZone), loc = Locale.fromObject(opts), tsNow = Settings.now();
  let ts, o;
  if (!isUndefined(obj.year)) {
    for (const u of orderedUnits) {
      if (isUndefined(obj[u])) {
        obj[u] = defaultUnitValues[u];
      }
    }
    const invalid = hasInvalidGregorianData(obj) || hasInvalidTimeData(obj);
    if (invalid) {
      return DateTime.invalid(invalid);
    }
    const offsetProvis = zone.offset(tsNow);
    [ts, o] = objToTS(obj, offsetProvis, zone);
  } else {
    ts = tsNow;
  }
  return new DateTime({ ts, zone, loc, o });
}
function diffRelative(start, end, opts) {
  const round = isUndefined(opts.round) ? true : opts.round, format = (c, unit) => {
    c = roundTo(c, round || opts.calendary ? 0 : 2, true);
    const formatter = end.loc.clone(opts).relFormatter(opts);
    return formatter.format(c, unit);
  }, differ = (unit) => {
    if (opts.calendary) {
      if (!end.hasSame(start, unit)) {
        return end.startOf(unit).diff(start.startOf(unit), unit).get(unit);
      } else
        return 0;
    } else {
      return end.diff(start, unit).get(unit);
    }
  };
  if (opts.unit) {
    return format(differ(opts.unit), opts.unit);
  }
  for (const unit of opts.units) {
    const count = differ(unit);
    if (Math.abs(count) >= 1) {
      return format(count, unit);
    }
  }
  return format(start > end ? -0 : 0, opts.units[opts.units.length - 1]);
}
function lastOpts(argList) {
  let opts = {}, args;
  if (argList.length > 0 && typeof argList[argList.length - 1] === "object") {
    opts = argList[argList.length - 1];
    args = Array.from(argList).slice(0, argList.length - 1);
  } else {
    args = Array.from(argList);
  }
  return [opts, args];
}
class DateTime {
  /**
   * @access private
   */
  constructor(config) {
    const zone = config.zone || Settings.defaultZone;
    let invalid = config.invalid || (Number.isNaN(config.ts) ? new Invalid("invalid input") : null) || (!zone.isValid ? unsupportedZone(zone) : null);
    this.ts = isUndefined(config.ts) ? Settings.now() : config.ts;
    let c = null, o = null;
    if (!invalid) {
      const unchanged = config.old && config.old.ts === this.ts && config.old.zone.equals(zone);
      if (unchanged) {
        [c, o] = [config.old.c, config.old.o];
      } else {
        const ot = zone.offset(this.ts);
        c = tsToObj(this.ts, ot);
        invalid = Number.isNaN(c.year) ? new Invalid("invalid input") : null;
        c = invalid ? null : c;
        o = invalid ? null : ot;
      }
    }
    this._zone = zone;
    this.loc = config.loc || Locale.create();
    this.invalid = invalid;
    this.weekData = null;
    this.c = c;
    this.o = o;
    this.isLuxonDateTime = true;
  }
  // CONSTRUCT
  /**
   * Create a DateTime for the current instant, in the system's time zone.
   *
   * Use Settings to override these default values if needed.
   * @example DateTime.now().toISO() //~> now in the ISO format
   * @return {DateTime}
   */
  static now() {
    return new DateTime({});
  }
  /**
   * Create a local DateTime
   * @param {number} [year] - The calendar year. If omitted (as in, call `local()` with no arguments), the current time will be used
   * @param {number} [month=1] - The month, 1-indexed
   * @param {number} [day=1] - The day of the month, 1-indexed
   * @param {number} [hour=0] - The hour of the day, in 24-hour time
   * @param {number} [minute=0] - The minute of the hour, meaning a number between 0 and 59
   * @param {number} [second=0] - The second of the minute, meaning a number between 0 and 59
   * @param {number} [millisecond=0] - The millisecond of the second, meaning a number between 0 and 999
   * @example DateTime.local()                                  //~> now
   * @example DateTime.local({ zone: "America/New_York" })      //~> now, in US east coast time
   * @example DateTime.local(2017)                              //~> 2017-01-01T00:00:00
   * @example DateTime.local(2017, 3)                           //~> 2017-03-01T00:00:00
   * @example DateTime.local(2017, 3, 12, { locale: "fr" })     //~> 2017-03-12T00:00:00, with a French locale
   * @example DateTime.local(2017, 3, 12, 5)                    //~> 2017-03-12T05:00:00
   * @example DateTime.local(2017, 3, 12, 5, { zone: "utc" })   //~> 2017-03-12T05:00:00, in UTC
   * @example DateTime.local(2017, 3, 12, 5, 45)                //~> 2017-03-12T05:45:00
   * @example DateTime.local(2017, 3, 12, 5, 45, 10)            //~> 2017-03-12T05:45:10
   * @example DateTime.local(2017, 3, 12, 5, 45, 10, 765)       //~> 2017-03-12T05:45:10.765
   * @return {DateTime}
   */
  static local() {
    const [opts, args] = lastOpts(arguments), [year, month, day, hour, minute, second, millisecond] = args;
    return quickDT({ year, month, day, hour, minute, second, millisecond }, opts);
  }
  /**
   * Create a DateTime in UTC
   * @param {number} [year] - The calendar year. If omitted (as in, call `utc()` with no arguments), the current time will be used
   * @param {number} [month=1] - The month, 1-indexed
   * @param {number} [day=1] - The day of the month
   * @param {number} [hour=0] - The hour of the day, in 24-hour time
   * @param {number} [minute=0] - The minute of the hour, meaning a number between 0 and 59
   * @param {number} [second=0] - The second of the minute, meaning a number between 0 and 59
   * @param {number} [millisecond=0] - The millisecond of the second, meaning a number between 0 and 999
   * @param {Object} options - configuration options for the DateTime
   * @param {string} [options.locale] - a locale to set on the resulting DateTime instance
   * @param {string} [options.outputCalendar] - the output calendar to set on the resulting DateTime instance
   * @param {string} [options.numberingSystem] - the numbering system to set on the resulting DateTime instance
   * @example DateTime.utc()                                              //~> now
   * @example DateTime.utc(2017)                                          //~> 2017-01-01T00:00:00Z
   * @example DateTime.utc(2017, 3)                                       //~> 2017-03-01T00:00:00Z
   * @example DateTime.utc(2017, 3, 12)                                   //~> 2017-03-12T00:00:00Z
   * @example DateTime.utc(2017, 3, 12, 5)                                //~> 2017-03-12T05:00:00Z
   * @example DateTime.utc(2017, 3, 12, 5, 45)                            //~> 2017-03-12T05:45:00Z
   * @example DateTime.utc(2017, 3, 12, 5, 45, { locale: "fr" })          //~> 2017-03-12T05:45:00Z with a French locale
   * @example DateTime.utc(2017, 3, 12, 5, 45, 10)                        //~> 2017-03-12T05:45:10Z
   * @example DateTime.utc(2017, 3, 12, 5, 45, 10, 765, { locale: "fr" }) //~> 2017-03-12T05:45:10.765Z with a French locale
   * @return {DateTime}
   */
  static utc() {
    const [opts, args] = lastOpts(arguments), [year, month, day, hour, minute, second, millisecond] = args;
    opts.zone = FixedOffsetZone.utcInstance;
    return quickDT({ year, month, day, hour, minute, second, millisecond }, opts);
  }
  /**
   * Create a DateTime from a JavaScript Date object. Uses the default zone.
   * @param {Date} date - a JavaScript Date object
   * @param {Object} options - configuration options for the DateTime
   * @param {string|Zone} [options.zone='local'] - the zone to place the DateTime into
   * @return {DateTime}
   */
  static fromJSDate(date, options = {}) {
    const ts = isDate(date) ? date.valueOf() : NaN;
    if (Number.isNaN(ts)) {
      return DateTime.invalid("invalid input");
    }
    const zoneToUse = normalizeZone(options.zone, Settings.defaultZone);
    if (!zoneToUse.isValid) {
      return DateTime.invalid(unsupportedZone(zoneToUse));
    }
    return new DateTime({
      ts,
      zone: zoneToUse,
      loc: Locale.fromObject(options)
    });
  }
  /**
   * Create a DateTime from a number of milliseconds since the epoch (meaning since 1 January 1970 00:00:00 UTC). Uses the default zone.
   * @param {number} milliseconds - a number of milliseconds since 1970 UTC
   * @param {Object} options - configuration options for the DateTime
   * @param {string|Zone} [options.zone='local'] - the zone to place the DateTime into
   * @param {string} [options.locale] - a locale to set on the resulting DateTime instance
   * @param {string} options.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} options.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @return {DateTime}
   */
  static fromMillis(milliseconds, options = {}) {
    if (!isNumber(milliseconds)) {
      throw new InvalidArgumentError(
        `fromMillis requires a numerical input, but received a ${typeof milliseconds} with value ${milliseconds}`
      );
    } else if (milliseconds < -MAX_DATE || milliseconds > MAX_DATE) {
      return DateTime.invalid("Timestamp out of range");
    } else {
      return new DateTime({
        ts: milliseconds,
        zone: normalizeZone(options.zone, Settings.defaultZone),
        loc: Locale.fromObject(options)
      });
    }
  }
  /**
   * Create a DateTime from a number of seconds since the epoch (meaning since 1 January 1970 00:00:00 UTC). Uses the default zone.
   * @param {number} seconds - a number of seconds since 1970 UTC
   * @param {Object} options - configuration options for the DateTime
   * @param {string|Zone} [options.zone='local'] - the zone to place the DateTime into
   * @param {string} [options.locale] - a locale to set on the resulting DateTime instance
   * @param {string} options.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} options.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @return {DateTime}
   */
  static fromSeconds(seconds, options = {}) {
    if (!isNumber(seconds)) {
      throw new InvalidArgumentError("fromSeconds requires a numerical input");
    } else {
      return new DateTime({
        ts: seconds * 1e3,
        zone: normalizeZone(options.zone, Settings.defaultZone),
        loc: Locale.fromObject(options)
      });
    }
  }
  /**
   * Create a DateTime from a JavaScript object with keys like 'year' and 'hour' with reasonable defaults.
   * @param {Object} obj - the object to create the DateTime from
   * @param {number} obj.year - a year, such as 1987
   * @param {number} obj.month - a month, 1-12
   * @param {number} obj.day - a day of the month, 1-31, depending on the month
   * @param {number} obj.ordinal - day of the year, 1-365 or 366
   * @param {number} obj.weekYear - an ISO week year
   * @param {number} obj.weekNumber - an ISO week number, between 1 and 52 or 53, depending on the year
   * @param {number} obj.weekday - an ISO weekday, 1-7, where 1 is Monday and 7 is Sunday
   * @param {number} obj.hour - hour of the day, 0-23
   * @param {number} obj.minute - minute of the hour, 0-59
   * @param {number} obj.second - second of the minute, 0-59
   * @param {number} obj.millisecond - millisecond of the second, 0-999
   * @param {Object} opts - options for creating this DateTime
   * @param {string|Zone} [opts.zone='local'] - interpret the numbers in the context of a particular zone. Can take any value taken as the first argument to setZone()
   * @param {string} [opts.locale='system's locale'] - a locale to set on the resulting DateTime instance
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} opts.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @example DateTime.fromObject({ year: 1982, month: 5, day: 25}).toISODate() //=> '1982-05-25'
   * @example DateTime.fromObject({ year: 1982 }).toISODate() //=> '1982-01-01'
   * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6 }) //~> today at 10:26:06
   * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6 }, { zone: 'utc' }),
   * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6 }, { zone: 'local' })
   * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6 }, { zone: 'America/New_York' })
   * @example DateTime.fromObject({ weekYear: 2016, weekNumber: 2, weekday: 3 }).toISODate() //=> '2016-01-13'
   * @return {DateTime}
   */
  static fromObject(obj, opts = {}) {
    obj = obj || {};
    const zoneToUse = normalizeZone(opts.zone, Settings.defaultZone);
    if (!zoneToUse.isValid) {
      return DateTime.invalid(unsupportedZone(zoneToUse));
    }
    const tsNow = Settings.now(), offsetProvis = !isUndefined(opts.specificOffset) ? opts.specificOffset : zoneToUse.offset(tsNow), normalized = normalizeObject(obj, normalizeUnit), containsOrdinal = !isUndefined(normalized.ordinal), containsGregorYear = !isUndefined(normalized.year), containsGregorMD = !isUndefined(normalized.month) || !isUndefined(normalized.day), containsGregor = containsGregorYear || containsGregorMD, definiteWeekDef = normalized.weekYear || normalized.weekNumber, loc = Locale.fromObject(opts);
    if ((containsGregor || containsOrdinal) && definiteWeekDef) {
      throw new ConflictingSpecificationError(
        "Can't mix weekYear/weekNumber units with year/month/day or ordinals"
      );
    }
    if (containsGregorMD && containsOrdinal) {
      throw new ConflictingSpecificationError("Can't mix ordinal dates with month/day");
    }
    const useWeekData = definiteWeekDef || normalized.weekday && !containsGregor;
    let units, defaultValues, objNow = tsToObj(tsNow, offsetProvis);
    if (useWeekData) {
      units = orderedWeekUnits;
      defaultValues = defaultWeekUnitValues;
      objNow = gregorianToWeek(objNow);
    } else if (containsOrdinal) {
      units = orderedOrdinalUnits;
      defaultValues = defaultOrdinalUnitValues;
      objNow = gregorianToOrdinal(objNow);
    } else {
      units = orderedUnits;
      defaultValues = defaultUnitValues;
    }
    let foundFirst = false;
    for (const u of units) {
      const v = normalized[u];
      if (!isUndefined(v)) {
        foundFirst = true;
      } else if (foundFirst) {
        normalized[u] = defaultValues[u];
      } else {
        normalized[u] = objNow[u];
      }
    }
    const higherOrderInvalid = useWeekData ? hasInvalidWeekData(normalized) : containsOrdinal ? hasInvalidOrdinalData(normalized) : hasInvalidGregorianData(normalized), invalid = higherOrderInvalid || hasInvalidTimeData(normalized);
    if (invalid) {
      return DateTime.invalid(invalid);
    }
    const gregorian = useWeekData ? weekToGregorian(normalized) : containsOrdinal ? ordinalToGregorian(normalized) : normalized, [tsFinal, offsetFinal] = objToTS(gregorian, offsetProvis, zoneToUse), inst = new DateTime({
      ts: tsFinal,
      zone: zoneToUse,
      o: offsetFinal,
      loc
    });
    if (normalized.weekday && containsGregor && obj.weekday !== inst.weekday) {
      return DateTime.invalid(
        "mismatched weekday",
        `you can't specify both a weekday of ${normalized.weekday} and a date of ${inst.toISO()}`
      );
    }
    return inst;
  }
  /**
   * Create a DateTime from an ISO 8601 string
   * @param {string} text - the ISO string
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - use this zone if no offset is specified in the input string itself. Will also convert the time to this zone
   * @param {boolean} [opts.setZone=false] - override the zone with a fixed-offset zone specified in the string itself, if it specifies one
   * @param {string} [opts.locale='system's locale'] - a locale to set on the resulting DateTime instance
   * @param {string} [opts.outputCalendar] - the output calendar to set on the resulting DateTime instance
   * @param {string} [opts.numberingSystem] - the numbering system to set on the resulting DateTime instance
   * @example DateTime.fromISO('2016-05-25T09:08:34.123')
   * @example DateTime.fromISO('2016-05-25T09:08:34.123+06:00')
   * @example DateTime.fromISO('2016-05-25T09:08:34.123+06:00', {setZone: true})
   * @example DateTime.fromISO('2016-05-25T09:08:34.123', {zone: 'utc'})
   * @example DateTime.fromISO('2016-W05-4')
   * @return {DateTime}
   */
  static fromISO(text, opts = {}) {
    const [vals, parsedZone] = parseISODate(text);
    return parseDataToDateTime(vals, parsedZone, opts, "ISO 8601", text);
  }
  /**
   * Create a DateTime from an RFC 2822 string
   * @param {string} text - the RFC 2822 string
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - convert the time to this zone. Since the offset is always specified in the string itself, this has no effect on the interpretation of string, merely the zone the resulting DateTime is expressed in.
   * @param {boolean} [opts.setZone=false] - override the zone with a fixed-offset zone specified in the string itself, if it specifies one
   * @param {string} [opts.locale='system's locale'] - a locale to set on the resulting DateTime instance
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} opts.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @example DateTime.fromRFC2822('25 Nov 2016 13:23:12 GMT')
   * @example DateTime.fromRFC2822('Fri, 25 Nov 2016 13:23:12 +0600')
   * @example DateTime.fromRFC2822('25 Nov 2016 13:23 Z')
   * @return {DateTime}
   */
  static fromRFC2822(text, opts = {}) {
    const [vals, parsedZone] = parseRFC2822Date(text);
    return parseDataToDateTime(vals, parsedZone, opts, "RFC 2822", text);
  }
  /**
   * Create a DateTime from an HTTP header date
   * @see https://www.w3.org/Protocols/rfc2616/rfc2616-sec3.html#sec3.3.1
   * @param {string} text - the HTTP header date
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - convert the time to this zone. Since HTTP dates are always in UTC, this has no effect on the interpretation of string, merely the zone the resulting DateTime is expressed in.
   * @param {boolean} [opts.setZone=false] - override the zone with the fixed-offset zone specified in the string. For HTTP dates, this is always UTC, so this option is equivalent to setting the `zone` option to 'utc', but this option is included for consistency with similar methods.
   * @param {string} [opts.locale='system's locale'] - a locale to set on the resulting DateTime instance
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} opts.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @example DateTime.fromHTTP('Sun, 06 Nov 1994 08:49:37 GMT')
   * @example DateTime.fromHTTP('Sunday, 06-Nov-94 08:49:37 GMT')
   * @example DateTime.fromHTTP('Sun Nov  6 08:49:37 1994')
   * @return {DateTime}
   */
  static fromHTTP(text, opts = {}) {
    const [vals, parsedZone] = parseHTTPDate(text);
    return parseDataToDateTime(vals, parsedZone, opts, "HTTP", opts);
  }
  /**
   * Create a DateTime from an input string and format string.
   * Defaults to en-US if no locale has been specified, regardless of the system's locale. For a table of tokens and their interpretations, see [here](https://moment.github.io/luxon/#/parsing?id=table-of-tokens).
   * @param {string} text - the string to parse
   * @param {string} fmt - the format the string is expected to be in (see the link below for the formats)
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - use this zone if no offset is specified in the input string itself. Will also convert the DateTime to this zone
   * @param {boolean} [opts.setZone=false] - override the zone with a zone specified in the string itself, if it specifies one
   * @param {string} [opts.locale='en-US'] - a locale string to use when parsing. Will also set the DateTime to this locale
   * @param {string} opts.numberingSystem - the numbering system to use when parsing. Will also set the resulting DateTime to this numbering system
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @return {DateTime}
   */
  static fromFormat(text, fmt, opts = {}) {
    if (isUndefined(text) || isUndefined(fmt)) {
      throw new InvalidArgumentError("fromFormat requires an input string and a format");
    }
    const { locale = null, numberingSystem = null } = opts, localeToUse = Locale.fromOpts({
      locale,
      numberingSystem,
      defaultToEN: true
    }), [vals, parsedZone, specificOffset, invalid] = parseFromTokens(localeToUse, text, fmt);
    if (invalid) {
      return DateTime.invalid(invalid);
    } else {
      return parseDataToDateTime(vals, parsedZone, opts, `format ${fmt}`, text, specificOffset);
    }
  }
  /**
   * @deprecated use fromFormat instead
   */
  static fromString(text, fmt, opts = {}) {
    return DateTime.fromFormat(text, fmt, opts);
  }
  /**
   * Create a DateTime from a SQL date, time, or datetime
   * Defaults to en-US if no locale has been specified, regardless of the system's locale
   * @param {string} text - the string to parse
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - use this zone if no offset is specified in the input string itself. Will also convert the DateTime to this zone
   * @param {boolean} [opts.setZone=false] - override the zone with a zone specified in the string itself, if it specifies one
   * @param {string} [opts.locale='en-US'] - a locale string to use when parsing. Will also set the DateTime to this locale
   * @param {string} opts.numberingSystem - the numbering system to use when parsing. Will also set the resulting DateTime to this numbering system
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @example DateTime.fromSQL('2017-05-15')
   * @example DateTime.fromSQL('2017-05-15 09:12:34')
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342')
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342+06:00')
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342 America/Los_Angeles')
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342 America/Los_Angeles', { setZone: true })
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342', { zone: 'America/Los_Angeles' })
   * @example DateTime.fromSQL('09:12:34.342')
   * @return {DateTime}
   */
  static fromSQL(text, opts = {}) {
    const [vals, parsedZone] = parseSQL(text);
    return parseDataToDateTime(vals, parsedZone, opts, "SQL", text);
  }
  /**
   * Create an invalid DateTime.
   * @param {DateTime} reason - simple string of why this DateTime is invalid. Should not contain parameters or anything else data-dependent
   * @param {string} [explanation=null] - longer explanation, may include parameters and other useful debugging information
   * @return {DateTime}
   */
  static invalid(reason, explanation = null) {
    if (!reason) {
      throw new InvalidArgumentError("need to specify a reason the DateTime is invalid");
    }
    const invalid = reason instanceof Invalid ? reason : new Invalid(reason, explanation);
    if (Settings.throwOnInvalid) {
      throw new InvalidDateTimeError(invalid);
    } else {
      return new DateTime({ invalid });
    }
  }
  /**
   * Check if an object is an instance of DateTime. Works across context boundaries
   * @param {object} o
   * @return {boolean}
   */
  static isDateTime(o) {
    return o && o.isLuxonDateTime || false;
  }
  /**
   * Produce the format string for a set of options
   * @param formatOpts
   * @param localeOpts
   * @returns {string}
   */
  static parseFormatForOpts(formatOpts, localeOpts = {}) {
    const tokenList = formatOptsToTokens(formatOpts, Locale.fromObject(localeOpts));
    return !tokenList ? null : tokenList.map((t) => t ? t.val : null).join("");
  }
  /**
   * Produce the the fully expanded format token for the locale
   * Does NOT quote characters, so quoted tokens will not round trip correctly
   * @param fmt
   * @param localeOpts
   * @returns {string}
   */
  static expandFormat(fmt, localeOpts = {}) {
    const expanded = expandMacroTokens(Formatter.parseFormat(fmt), Locale.fromObject(localeOpts));
    return expanded.map((t) => t.val).join("");
  }
  // INFO
  /**
   * Get the value of unit.
   * @param {string} unit - a unit such as 'minute' or 'day'
   * @example DateTime.local(2017, 7, 4).get('month'); //=> 7
   * @example DateTime.local(2017, 7, 4).get('day'); //=> 4
   * @return {number}
   */
  get(unit) {
    return this[unit];
  }
  /**
   * Returns whether the DateTime is valid. Invalid DateTimes occur when:
   * * The DateTime was created from invalid calendar information, such as the 13th month or February 30
   * * The DateTime was created by an operation on another invalid date
   * @type {boolean}
   */
  get isValid() {
    return this.invalid === null;
  }
  /**
   * Returns an error code if this DateTime is invalid, or null if the DateTime is valid
   * @type {string}
   */
  get invalidReason() {
    return this.invalid ? this.invalid.reason : null;
  }
  /**
   * Returns an explanation of why this DateTime became invalid, or null if the DateTime is valid
   * @type {string}
   */
  get invalidExplanation() {
    return this.invalid ? this.invalid.explanation : null;
  }
  /**
   * Get the locale of a DateTime, such 'en-GB'. The locale is used when formatting the DateTime
   *
   * @type {string}
   */
  get locale() {
    return this.isValid ? this.loc.locale : null;
  }
  /**
   * Get the numbering system of a DateTime, such 'beng'. The numbering system is used when formatting the DateTime
   *
   * @type {string}
   */
  get numberingSystem() {
    return this.isValid ? this.loc.numberingSystem : null;
  }
  /**
   * Get the output calendar of a DateTime, such 'islamic'. The output calendar is used when formatting the DateTime
   *
   * @type {string}
   */
  get outputCalendar() {
    return this.isValid ? this.loc.outputCalendar : null;
  }
  /**
   * Get the time zone associated with this DateTime.
   * @type {Zone}
   */
  get zone() {
    return this._zone;
  }
  /**
   * Get the name of the time zone.
   * @type {string}
   */
  get zoneName() {
    return this.isValid ? this.zone.name : null;
  }
  /**
   * Get the year
   * @example DateTime.local(2017, 5, 25).year //=> 2017
   * @type {number}
   */
  get year() {
    return this.isValid ? this.c.year : NaN;
  }
  /**
   * Get the quarter
   * @example DateTime.local(2017, 5, 25).quarter //=> 2
   * @type {number}
   */
  get quarter() {
    return this.isValid ? Math.ceil(this.c.month / 3) : NaN;
  }
  /**
   * Get the month (1-12).
   * @example DateTime.local(2017, 5, 25).month //=> 5
   * @type {number}
   */
  get month() {
    return this.isValid ? this.c.month : NaN;
  }
  /**
   * Get the day of the month (1-30ish).
   * @example DateTime.local(2017, 5, 25).day //=> 25
   * @type {number}
   */
  get day() {
    return this.isValid ? this.c.day : NaN;
  }
  /**
   * Get the hour of the day (0-23).
   * @example DateTime.local(2017, 5, 25, 9).hour //=> 9
   * @type {number}
   */
  get hour() {
    return this.isValid ? this.c.hour : NaN;
  }
  /**
   * Get the minute of the hour (0-59).
   * @example DateTime.local(2017, 5, 25, 9, 30).minute //=> 30
   * @type {number}
   */
  get minute() {
    return this.isValid ? this.c.minute : NaN;
  }
  /**
   * Get the second of the minute (0-59).
   * @example DateTime.local(2017, 5, 25, 9, 30, 52).second //=> 52
   * @type {number}
   */
  get second() {
    return this.isValid ? this.c.second : NaN;
  }
  /**
   * Get the millisecond of the second (0-999).
   * @example DateTime.local(2017, 5, 25, 9, 30, 52, 654).millisecond //=> 654
   * @type {number}
   */
  get millisecond() {
    return this.isValid ? this.c.millisecond : NaN;
  }
  /**
   * Get the week year
   * @see https://en.wikipedia.org/wiki/ISO_week_date
   * @example DateTime.local(2014, 12, 31).weekYear //=> 2015
   * @type {number}
   */
  get weekYear() {
    return this.isValid ? possiblyCachedWeekData(this).weekYear : NaN;
  }
  /**
   * Get the week number of the week year (1-52ish).
   * @see https://en.wikipedia.org/wiki/ISO_week_date
   * @example DateTime.local(2017, 5, 25).weekNumber //=> 21
   * @type {number}
   */
  get weekNumber() {
    return this.isValid ? possiblyCachedWeekData(this).weekNumber : NaN;
  }
  /**
   * Get the day of the week.
   * 1 is Monday and 7 is Sunday
   * @see https://en.wikipedia.org/wiki/ISO_week_date
   * @example DateTime.local(2014, 11, 31).weekday //=> 4
   * @type {number}
   */
  get weekday() {
    return this.isValid ? possiblyCachedWeekData(this).weekday : NaN;
  }
  /**
   * Get the ordinal (meaning the day of the year)
   * @example DateTime.local(2017, 5, 25).ordinal //=> 145
   * @type {number|DateTime}
   */
  get ordinal() {
    return this.isValid ? gregorianToOrdinal(this.c).ordinal : NaN;
  }
  /**
   * Get the human readable short month name, such as 'Oct'.
   * Defaults to the system's locale if no locale has been specified
   * @example DateTime.local(2017, 10, 30).monthShort //=> Oct
   * @type {string}
   */
  get monthShort() {
    return this.isValid ? Info.months("short", { locObj: this.loc })[this.month - 1] : null;
  }
  /**
   * Get the human readable long month name, such as 'October'.
   * Defaults to the system's locale if no locale has been specified
   * @example DateTime.local(2017, 10, 30).monthLong //=> October
   * @type {string}
   */
  get monthLong() {
    return this.isValid ? Info.months("long", { locObj: this.loc })[this.month - 1] : null;
  }
  /**
   * Get the human readable short weekday, such as 'Mon'.
   * Defaults to the system's locale if no locale has been specified
   * @example DateTime.local(2017, 10, 30).weekdayShort //=> Mon
   * @type {string}
   */
  get weekdayShort() {
    return this.isValid ? Info.weekdays("short", { locObj: this.loc })[this.weekday - 1] : null;
  }
  /**
   * Get the human readable long weekday, such as 'Monday'.
   * Defaults to the system's locale if no locale has been specified
   * @example DateTime.local(2017, 10, 30).weekdayLong //=> Monday
   * @type {string}
   */
  get weekdayLong() {
    return this.isValid ? Info.weekdays("long", { locObj: this.loc })[this.weekday - 1] : null;
  }
  /**
   * Get the UTC offset of this DateTime in minutes
   * @example DateTime.now().offset //=> -240
   * @example DateTime.utc().offset //=> 0
   * @type {number}
   */
  get offset() {
    return this.isValid ? +this.o : NaN;
  }
  /**
   * Get the short human name for the zone's current offset, for example "EST" or "EDT".
   * Defaults to the system's locale if no locale has been specified
   * @type {string}
   */
  get offsetNameShort() {
    if (this.isValid) {
      return this.zone.offsetName(this.ts, {
        format: "short",
        locale: this.locale
      });
    } else {
      return null;
    }
  }
  /**
   * Get the long human name for the zone's current offset, for example "Eastern Standard Time" or "Eastern Daylight Time".
   * Defaults to the system's locale if no locale has been specified
   * @type {string}
   */
  get offsetNameLong() {
    if (this.isValid) {
      return this.zone.offsetName(this.ts, {
        format: "long",
        locale: this.locale
      });
    } else {
      return null;
    }
  }
  /**
   * Get whether this zone's offset ever changes, as in a DST.
   * @type {boolean}
   */
  get isOffsetFixed() {
    return this.isValid ? this.zone.isUniversal : null;
  }
  /**
   * Get whether the DateTime is in a DST.
   * @type {boolean}
   */
  get isInDST() {
    if (this.isOffsetFixed) {
      return false;
    } else {
      return this.offset > this.set({ month: 1, day: 1 }).offset || this.offset > this.set({ month: 5 }).offset;
    }
  }
  /**
   * Returns true if this DateTime is in a leap year, false otherwise
   * @example DateTime.local(2016).isInLeapYear //=> true
   * @example DateTime.local(2013).isInLeapYear //=> false
   * @type {boolean}
   */
  get isInLeapYear() {
    return isLeapYear(this.year);
  }
  /**
   * Returns the number of days in this DateTime's month
   * @example DateTime.local(2016, 2).daysInMonth //=> 29
   * @example DateTime.local(2016, 3).daysInMonth //=> 31
   * @type {number}
   */
  get daysInMonth() {
    return daysInMonth(this.year, this.month);
  }
  /**
   * Returns the number of days in this DateTime's year
   * @example DateTime.local(2016).daysInYear //=> 366
   * @example DateTime.local(2013).daysInYear //=> 365
   * @type {number}
   */
  get daysInYear() {
    return this.isValid ? daysInYear(this.year) : NaN;
  }
  /**
   * Returns the number of weeks in this DateTime's year
   * @see https://en.wikipedia.org/wiki/ISO_week_date
   * @example DateTime.local(2004).weeksInWeekYear //=> 53
   * @example DateTime.local(2013).weeksInWeekYear //=> 52
   * @type {number}
   */
  get weeksInWeekYear() {
    return this.isValid ? weeksInWeekYear(this.weekYear) : NaN;
  }
  /**
   * Returns the resolved Intl options for this DateTime.
   * This is useful in understanding the behavior of formatting methods
   * @param {Object} opts - the same options as toLocaleString
   * @return {Object}
   */
  resolvedLocaleOptions(opts = {}) {
    const { locale, numberingSystem, calendar } = Formatter.create(
      this.loc.clone(opts),
      opts
    ).resolvedOptions(this);
    return { locale, numberingSystem, outputCalendar: calendar };
  }
  // TRANSFORM
  /**
   * "Set" the DateTime's zone to UTC. Returns a newly-constructed DateTime.
   *
   * Equivalent to {@link DateTime#setZone}('utc')
   * @param {number} [offset=0] - optionally, an offset from UTC in minutes
   * @param {Object} [opts={}] - options to pass to `setZone()`
   * @return {DateTime}
   */
  toUTC(offset2 = 0, opts = {}) {
    return this.setZone(FixedOffsetZone.instance(offset2), opts);
  }
  /**
   * "Set" the DateTime's zone to the host's local zone. Returns a newly-constructed DateTime.
   *
   * Equivalent to `setZone('local')`
   * @return {DateTime}
   */
  toLocal() {
    return this.setZone(Settings.defaultZone);
  }
  /**
   * "Set" the DateTime's zone to specified zone. Returns a newly-constructed DateTime.
   *
   * By default, the setter keeps the underlying time the same (as in, the same timestamp), but the new instance will report different local times and consider DSTs when making computations, as with {@link DateTime#plus}. You may wish to use {@link DateTime#toLocal} and {@link DateTime#toUTC} which provide simple convenience wrappers for commonly used zones.
   * @param {string|Zone} [zone='local'] - a zone identifier. As a string, that can be any IANA zone supported by the host environment, or a fixed-offset name of the form 'UTC+3', or the strings 'local' or 'utc'. You may also supply an instance of a {@link DateTime#Zone} class.
   * @param {Object} opts - options
   * @param {boolean} [opts.keepLocalTime=false] - If true, adjust the underlying time so that the local time stays the same, but in the target zone. You should rarely need this.
   * @return {DateTime}
   */
  setZone(zone, { keepLocalTime = false, keepCalendarTime = false } = {}) {
    zone = normalizeZone(zone, Settings.defaultZone);
    if (zone.equals(this.zone)) {
      return this;
    } else if (!zone.isValid) {
      return DateTime.invalid(unsupportedZone(zone));
    } else {
      let newTS = this.ts;
      if (keepLocalTime || keepCalendarTime) {
        const offsetGuess = zone.offset(this.ts);
        const asObj = this.toObject();
        [newTS] = objToTS(asObj, offsetGuess, zone);
      }
      return clone(this, { ts: newTS, zone });
    }
  }
  /**
   * "Set" the locale, numberingSystem, or outputCalendar. Returns a newly-constructed DateTime.
   * @param {Object} properties - the properties to set
   * @example DateTime.local(2017, 5, 25).reconfigure({ locale: 'en-GB' })
   * @return {DateTime}
   */
  reconfigure({ locale, numberingSystem, outputCalendar } = {}) {
    const loc = this.loc.clone({ locale, numberingSystem, outputCalendar });
    return clone(this, { loc });
  }
  /**
   * "Set" the locale. Returns a newly-constructed DateTime.
   * Just a convenient alias for reconfigure({ locale })
   * @example DateTime.local(2017, 5, 25).setLocale('en-GB')
   * @return {DateTime}
   */
  setLocale(locale) {
    return this.reconfigure({ locale });
  }
  /**
   * "Set" the values of specified units. Returns a newly-constructed DateTime.
   * You can only set units with this method; for "setting" metadata, see {@link DateTime#reconfigure} and {@link DateTime#setZone}.
   * @param {Object} values - a mapping of units to numbers
   * @example dt.set({ year: 2017 })
   * @example dt.set({ hour: 8, minute: 30 })
   * @example dt.set({ weekday: 5 })
   * @example dt.set({ year: 2005, ordinal: 234 })
   * @return {DateTime}
   */
  set(values) {
    if (!this.isValid)
      return this;
    const normalized = normalizeObject(values, normalizeUnit), settingWeekStuff = !isUndefined(normalized.weekYear) || !isUndefined(normalized.weekNumber) || !isUndefined(normalized.weekday), containsOrdinal = !isUndefined(normalized.ordinal), containsGregorYear = !isUndefined(normalized.year), containsGregorMD = !isUndefined(normalized.month) || !isUndefined(normalized.day), containsGregor = containsGregorYear || containsGregorMD, definiteWeekDef = normalized.weekYear || normalized.weekNumber;
    if ((containsGregor || containsOrdinal) && definiteWeekDef) {
      throw new ConflictingSpecificationError(
        "Can't mix weekYear/weekNumber units with year/month/day or ordinals"
      );
    }
    if (containsGregorMD && containsOrdinal) {
      throw new ConflictingSpecificationError("Can't mix ordinal dates with month/day");
    }
    let mixed;
    if (settingWeekStuff) {
      mixed = weekToGregorian({ ...gregorianToWeek(this.c), ...normalized });
    } else if (!isUndefined(normalized.ordinal)) {
      mixed = ordinalToGregorian({ ...gregorianToOrdinal(this.c), ...normalized });
    } else {
      mixed = { ...this.toObject(), ...normalized };
      if (isUndefined(normalized.day)) {
        mixed.day = Math.min(daysInMonth(mixed.year, mixed.month), mixed.day);
      }
    }
    const [ts, o] = objToTS(mixed, this.o, this.zone);
    return clone(this, { ts, o });
  }
  /**
   * Add a period of time to this DateTime and return the resulting DateTime
   *
   * Adding hours, minutes, seconds, or milliseconds increases the timestamp by the right number of milliseconds. Adding days, months, or years shifts the calendar, accounting for DSTs and leap years along the way. Thus, `dt.plus({ hours: 24 })` may result in a different time than `dt.plus({ days: 1 })` if there's a DST shift in between.
   * @param {Duration|Object|number} duration - The amount to add. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
   * @example DateTime.now().plus(123) //~> in 123 milliseconds
   * @example DateTime.now().plus({ minutes: 15 }) //~> in 15 minutes
   * @example DateTime.now().plus({ days: 1 }) //~> this time tomorrow
   * @example DateTime.now().plus({ days: -1 }) //~> this time yesterday
   * @example DateTime.now().plus({ hours: 3, minutes: 13 }) //~> in 3 hr, 13 min
   * @example DateTime.now().plus(Duration.fromObject({ hours: 3, minutes: 13 })) //~> in 3 hr, 13 min
   * @return {DateTime}
   */
  plus(duration) {
    if (!this.isValid)
      return this;
    const dur = Duration.fromDurationLike(duration);
    return clone(this, adjustTime(this, dur));
  }
  /**
   * Subtract a period of time to this DateTime and return the resulting DateTime
   * See {@link DateTime#plus}
   * @param {Duration|Object|number} duration - The amount to subtract. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
   @return {DateTime}
   */
  minus(duration) {
    if (!this.isValid)
      return this;
    const dur = Duration.fromDurationLike(duration).negate();
    return clone(this, adjustTime(this, dur));
  }
  /**
   * "Set" this DateTime to the beginning of a unit of time.
   * @param {string} unit - The unit to go to the beginning of. Can be 'year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second', or 'millisecond'.
   * @example DateTime.local(2014, 3, 3).startOf('month').toISODate(); //=> '2014-03-01'
   * @example DateTime.local(2014, 3, 3).startOf('year').toISODate(); //=> '2014-01-01'
   * @example DateTime.local(2014, 3, 3).startOf('week').toISODate(); //=> '2014-03-03', weeks always start on Mondays
   * @example DateTime.local(2014, 3, 3, 5, 30).startOf('day').toISOTime(); //=> '00:00.000-05:00'
   * @example DateTime.local(2014, 3, 3, 5, 30).startOf('hour').toISOTime(); //=> '05:00:00.000-05:00'
   * @return {DateTime}
   */
  startOf(unit) {
    if (!this.isValid)
      return this;
    const o = {}, normalizedUnit = Duration.normalizeUnit(unit);
    switch (normalizedUnit) {
      case "years":
        o.month = 1;
      case "quarters":
      case "months":
        o.day = 1;
      case "weeks":
      case "days":
        o.hour = 0;
      case "hours":
        o.minute = 0;
      case "minutes":
        o.second = 0;
      case "seconds":
        o.millisecond = 0;
        break;
    }
    if (normalizedUnit === "weeks") {
      o.weekday = 1;
    }
    if (normalizedUnit === "quarters") {
      const q = Math.ceil(this.month / 3);
      o.month = (q - 1) * 3 + 1;
    }
    return this.set(o);
  }
  /**
   * "Set" this DateTime to the end (meaning the last millisecond) of a unit of time
   * @param {string} unit - The unit to go to the end of. Can be 'year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second', or 'millisecond'.
   * @example DateTime.local(2014, 3, 3).endOf('month').toISO(); //=> '2014-03-31T23:59:59.999-05:00'
   * @example DateTime.local(2014, 3, 3).endOf('year').toISO(); //=> '2014-12-31T23:59:59.999-05:00'
   * @example DateTime.local(2014, 3, 3).endOf('week').toISO(); // => '2014-03-09T23:59:59.999-05:00', weeks start on Mondays
   * @example DateTime.local(2014, 3, 3, 5, 30).endOf('day').toISO(); //=> '2014-03-03T23:59:59.999-05:00'
   * @example DateTime.local(2014, 3, 3, 5, 30).endOf('hour').toISO(); //=> '2014-03-03T05:59:59.999-05:00'
   * @return {DateTime}
   */
  endOf(unit) {
    return this.isValid ? this.plus({ [unit]: 1 }).startOf(unit).minus(1) : this;
  }
  // OUTPUT
  /**
   * Returns a string representation of this DateTime formatted according to the specified format string.
   * **You may not want this.** See {@link DateTime#toLocaleString} for a more flexible formatting tool. For a table of tokens and their interpretations, see [here](https://moment.github.io/luxon/#/formatting?id=table-of-tokens).
   * Defaults to en-US if no locale has been specified, regardless of the system's locale.
   * @param {string} fmt - the format string
   * @param {Object} opts - opts to override the configuration options on this DateTime
   * @example DateTime.now().toFormat('yyyy LLL dd') //=> '2017 Apr 22'
   * @example DateTime.now().setLocale('fr').toFormat('yyyy LLL dd') //=> '2017 avr. 22'
   * @example DateTime.now().toFormat('yyyy LLL dd', { locale: "fr" }) //=> '2017 avr. 22'
   * @example DateTime.now().toFormat("HH 'hours and' mm 'minutes'") //=> '20 hours and 55 minutes'
   * @return {string}
   */
  toFormat(fmt, opts = {}) {
    return this.isValid ? Formatter.create(this.loc.redefaultToEN(opts)).formatDateTimeFromString(this, fmt) : INVALID;
  }
  /**
   * Returns a localized string representing this date. Accepts the same options as the Intl.DateTimeFormat constructor and any presets defined by Luxon, such as `DateTime.DATE_FULL` or `DateTime.TIME_SIMPLE`.
   * The exact behavior of this method is browser-specific, but in general it will return an appropriate representation
   * of the DateTime in the assigned locale.
   * Defaults to the system's locale if no locale has been specified
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
   * @param formatOpts {Object} - Intl.DateTimeFormat constructor options and configuration options
   * @param {Object} opts - opts to override the configuration options on this DateTime
   * @example DateTime.now().toLocaleString(); //=> 4/20/2017
   * @example DateTime.now().setLocale('en-gb').toLocaleString(); //=> '20/04/2017'
   * @example DateTime.now().toLocaleString(DateTime.DATE_FULL); //=> 'April 20, 2017'
   * @example DateTime.now().toLocaleString(DateTime.DATE_FULL, { locale: 'fr' }); //=> '28 août 2022'
   * @example DateTime.now().toLocaleString(DateTime.TIME_SIMPLE); //=> '11:32 AM'
   * @example DateTime.now().toLocaleString(DateTime.DATETIME_SHORT); //=> '4/20/2017, 11:32 AM'
   * @example DateTime.now().toLocaleString({ weekday: 'long', month: 'long', day: '2-digit' }); //=> 'Thursday, April 20'
   * @example DateTime.now().toLocaleString({ weekday: 'short', month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit' }); //=> 'Thu, Apr 20, 11:27 AM'
   * @example DateTime.now().toLocaleString({ hour: '2-digit', minute: '2-digit', hourCycle: 'h23' }); //=> '11:32'
   * @return {string}
   */
  toLocaleString(formatOpts = DATE_SHORT, opts = {}) {
    return this.isValid ? Formatter.create(this.loc.clone(opts), formatOpts).formatDateTime(this) : INVALID;
  }
  /**
   * Returns an array of format "parts", meaning individual tokens along with metadata. This is allows callers to post-process individual sections of the formatted output.
   * Defaults to the system's locale if no locale has been specified
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat/formatToParts
   * @param opts {Object} - Intl.DateTimeFormat constructor options, same as `toLocaleString`.
   * @example DateTime.now().toLocaleParts(); //=> [
   *                                   //=>   { type: 'day', value: '25' },
   *                                   //=>   { type: 'literal', value: '/' },
   *                                   //=>   { type: 'month', value: '05' },
   *                                   //=>   { type: 'literal', value: '/' },
   *                                   //=>   { type: 'year', value: '1982' }
   *                                   //=> ]
   */
  toLocaleParts(opts = {}) {
    return this.isValid ? Formatter.create(this.loc.clone(opts), opts).formatDateTimeParts(this) : [];
  }
  /**
   * Returns an ISO 8601-compliant string representation of this DateTime
   * @param {Object} opts - options
   * @param {boolean} [opts.suppressMilliseconds=false] - exclude milliseconds from the format if they're 0
   * @param {boolean} [opts.suppressSeconds=false] - exclude seconds from the format if they're 0
   * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
   * @param {boolean} [opts.extendedZone=false] - add the time zone format extension
   * @param {string} [opts.format='extended'] - choose between the basic and extended format
   * @example DateTime.utc(1983, 5, 25).toISO() //=> '1982-05-25T00:00:00.000Z'
   * @example DateTime.now().toISO() //=> '2017-04-22T20:47:05.335-04:00'
   * @example DateTime.now().toISO({ includeOffset: false }) //=> '2017-04-22T20:47:05.335'
   * @example DateTime.now().toISO({ format: 'basic' }) //=> '20170422T204705.335-0400'
   * @return {string}
   */
  toISO({
    format = "extended",
    suppressSeconds = false,
    suppressMilliseconds = false,
    includeOffset = true,
    extendedZone = false
  } = {}) {
    if (!this.isValid) {
      return null;
    }
    const ext = format === "extended";
    let c = toISODate(this, ext);
    c += "T";
    c += toISOTime(this, ext, suppressSeconds, suppressMilliseconds, includeOffset, extendedZone);
    return c;
  }
  /**
   * Returns an ISO 8601-compliant string representation of this DateTime's date component
   * @param {Object} opts - options
   * @param {string} [opts.format='extended'] - choose between the basic and extended format
   * @example DateTime.utc(1982, 5, 25).toISODate() //=> '1982-05-25'
   * @example DateTime.utc(1982, 5, 25).toISODate({ format: 'basic' }) //=> '19820525'
   * @return {string}
   */
  toISODate({ format = "extended" } = {}) {
    if (!this.isValid) {
      return null;
    }
    return toISODate(this, format === "extended");
  }
  /**
   * Returns an ISO 8601-compliant string representation of this DateTime's week date
   * @example DateTime.utc(1982, 5, 25).toISOWeekDate() //=> '1982-W21-2'
   * @return {string}
   */
  toISOWeekDate() {
    return toTechFormat(this, "kkkk-'W'WW-c");
  }
  /**
   * Returns an ISO 8601-compliant string representation of this DateTime's time component
   * @param {Object} opts - options
   * @param {boolean} [opts.suppressMilliseconds=false] - exclude milliseconds from the format if they're 0
   * @param {boolean} [opts.suppressSeconds=false] - exclude seconds from the format if they're 0
   * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
   * @param {boolean} [opts.extendedZone=true] - add the time zone format extension
   * @param {boolean} [opts.includePrefix=false] - include the `T` prefix
   * @param {string} [opts.format='extended'] - choose between the basic and extended format
   * @example DateTime.utc().set({ hour: 7, minute: 34 }).toISOTime() //=> '07:34:19.361Z'
   * @example DateTime.utc().set({ hour: 7, minute: 34, seconds: 0, milliseconds: 0 }).toISOTime({ suppressSeconds: true }) //=> '07:34Z'
   * @example DateTime.utc().set({ hour: 7, minute: 34 }).toISOTime({ format: 'basic' }) //=> '073419.361Z'
   * @example DateTime.utc().set({ hour: 7, minute: 34 }).toISOTime({ includePrefix: true }) //=> 'T07:34:19.361Z'
   * @return {string}
   */
  toISOTime({
    suppressMilliseconds = false,
    suppressSeconds = false,
    includeOffset = true,
    includePrefix = false,
    extendedZone = false,
    format = "extended"
  } = {}) {
    if (!this.isValid) {
      return null;
    }
    let c = includePrefix ? "T" : "";
    return c + toISOTime(
      this,
      format === "extended",
      suppressSeconds,
      suppressMilliseconds,
      includeOffset,
      extendedZone
    );
  }
  /**
   * Returns an RFC 2822-compatible string representation of this DateTime
   * @example DateTime.utc(2014, 7, 13).toRFC2822() //=> 'Sun, 13 Jul 2014 00:00:00 +0000'
   * @example DateTime.local(2014, 7, 13).toRFC2822() //=> 'Sun, 13 Jul 2014 00:00:00 -0400'
   * @return {string}
   */
  toRFC2822() {
    return toTechFormat(this, "EEE, dd LLL yyyy HH:mm:ss ZZZ", false);
  }
  /**
   * Returns a string representation of this DateTime appropriate for use in HTTP headers. The output is always expressed in GMT.
   * Specifically, the string conforms to RFC 1123.
   * @see https://www.w3.org/Protocols/rfc2616/rfc2616-sec3.html#sec3.3.1
   * @example DateTime.utc(2014, 7, 13).toHTTP() //=> 'Sun, 13 Jul 2014 00:00:00 GMT'
   * @example DateTime.utc(2014, 7, 13, 19).toHTTP() //=> 'Sun, 13 Jul 2014 19:00:00 GMT'
   * @return {string}
   */
  toHTTP() {
    return toTechFormat(this.toUTC(), "EEE, dd LLL yyyy HH:mm:ss 'GMT'");
  }
  /**
   * Returns a string representation of this DateTime appropriate for use in SQL Date
   * @example DateTime.utc(2014, 7, 13).toSQLDate() //=> '2014-07-13'
   * @return {string}
   */
  toSQLDate() {
    if (!this.isValid) {
      return null;
    }
    return toISODate(this, true);
  }
  /**
   * Returns a string representation of this DateTime appropriate for use in SQL Time
   * @param {Object} opts - options
   * @param {boolean} [opts.includeZone=false] - include the zone, such as 'America/New_York'. Overrides includeOffset.
   * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
   * @param {boolean} [opts.includeOffsetSpace=true] - include the space between the time and the offset, such as '05:15:16.345 -04:00'
   * @example DateTime.utc().toSQL() //=> '05:15:16.345'
   * @example DateTime.now().toSQL() //=> '05:15:16.345 -04:00'
   * @example DateTime.now().toSQL({ includeOffset: false }) //=> '05:15:16.345'
   * @example DateTime.now().toSQL({ includeZone: false }) //=> '05:15:16.345 America/New_York'
   * @return {string}
   */
  toSQLTime({ includeOffset = true, includeZone = false, includeOffsetSpace = true } = {}) {
    let fmt = "HH:mm:ss.SSS";
    if (includeZone || includeOffset) {
      if (includeOffsetSpace) {
        fmt += " ";
      }
      if (includeZone) {
        fmt += "z";
      } else if (includeOffset) {
        fmt += "ZZ";
      }
    }
    return toTechFormat(this, fmt, true);
  }
  /**
   * Returns a string representation of this DateTime appropriate for use in SQL DateTime
   * @param {Object} opts - options
   * @param {boolean} [opts.includeZone=false] - include the zone, such as 'America/New_York'. Overrides includeOffset.
   * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
   * @param {boolean} [opts.includeOffsetSpace=true] - include the space between the time and the offset, such as '05:15:16.345 -04:00'
   * @example DateTime.utc(2014, 7, 13).toSQL() //=> '2014-07-13 00:00:00.000 Z'
   * @example DateTime.local(2014, 7, 13).toSQL() //=> '2014-07-13 00:00:00.000 -04:00'
   * @example DateTime.local(2014, 7, 13).toSQL({ includeOffset: false }) //=> '2014-07-13 00:00:00.000'
   * @example DateTime.local(2014, 7, 13).toSQL({ includeZone: true }) //=> '2014-07-13 00:00:00.000 America/New_York'
   * @return {string}
   */
  toSQL(opts = {}) {
    if (!this.isValid) {
      return null;
    }
    return `${this.toSQLDate()} ${this.toSQLTime(opts)}`;
  }
  /**
   * Returns a string representation of this DateTime appropriate for debugging
   * @return {string}
   */
  toString() {
    return this.isValid ? this.toISO() : INVALID;
  }
  /**
   * Returns the epoch milliseconds of this DateTime. Alias of {@link DateTime#toMillis}
   * @return {number}
   */
  valueOf() {
    return this.toMillis();
  }
  /**
   * Returns the epoch milliseconds of this DateTime.
   * @return {number}
   */
  toMillis() {
    return this.isValid ? this.ts : NaN;
  }
  /**
   * Returns the epoch seconds of this DateTime.
   * @return {number}
   */
  toSeconds() {
    return this.isValid ? this.ts / 1e3 : NaN;
  }
  /**
   * Returns the epoch seconds (as a whole number) of this DateTime.
   * @return {number}
   */
  toUnixInteger() {
    return this.isValid ? Math.floor(this.ts / 1e3) : NaN;
  }
  /**
   * Returns an ISO 8601 representation of this DateTime appropriate for use in JSON.
   * @return {string}
   */
  toJSON() {
    return this.toISO();
  }
  /**
   * Returns a BSON serializable equivalent to this DateTime.
   * @return {Date}
   */
  toBSON() {
    return this.toJSDate();
  }
  /**
   * Returns a JavaScript object with this DateTime's year, month, day, and so on.
   * @param opts - options for generating the object
   * @param {boolean} [opts.includeConfig=false] - include configuration attributes in the output
   * @example DateTime.now().toObject() //=> { year: 2017, month: 4, day: 22, hour: 20, minute: 49, second: 42, millisecond: 268 }
   * @return {Object}
   */
  toObject(opts = {}) {
    if (!this.isValid)
      return {};
    const base = { ...this.c };
    if (opts.includeConfig) {
      base.outputCalendar = this.outputCalendar;
      base.numberingSystem = this.loc.numberingSystem;
      base.locale = this.loc.locale;
    }
    return base;
  }
  /**
   * Returns a JavaScript Date equivalent to this DateTime.
   * @return {Date}
   */
  toJSDate() {
    return new Date(this.isValid ? this.ts : NaN);
  }
  // COMPARE
  /**
   * Return the difference between two DateTimes as a Duration.
   * @param {DateTime} otherDateTime - the DateTime to compare this one to
   * @param {string|string[]} [unit=['milliseconds']] - the unit or array of units (such as 'hours' or 'days') to include in the duration.
   * @param {Object} opts - options that affect the creation of the Duration
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @example
   * var i1 = DateTime.fromISO('1982-05-25T09:45'),
   *     i2 = DateTime.fromISO('1983-10-14T10:30');
   * i2.diff(i1).toObject() //=> { milliseconds: 43807500000 }
   * i2.diff(i1, 'hours').toObject() //=> { hours: 12168.75 }
   * i2.diff(i1, ['months', 'days']).toObject() //=> { months: 16, days: 19.03125 }
   * i2.diff(i1, ['months', 'days', 'hours']).toObject() //=> { months: 16, days: 19, hours: 0.75 }
   * @return {Duration}
   */
  diff(otherDateTime, unit = "milliseconds", opts = {}) {
    if (!this.isValid || !otherDateTime.isValid) {
      return Duration.invalid("created by diffing an invalid DateTime");
    }
    const durOpts = { locale: this.locale, numberingSystem: this.numberingSystem, ...opts };
    const units = maybeArray(unit).map(Duration.normalizeUnit), otherIsLater = otherDateTime.valueOf() > this.valueOf(), earlier = otherIsLater ? this : otherDateTime, later = otherIsLater ? otherDateTime : this, diffed = diff(earlier, later, units, durOpts);
    return otherIsLater ? diffed.negate() : diffed;
  }
  /**
   * Return the difference between this DateTime and right now.
   * See {@link DateTime#diff}
   * @param {string|string[]} [unit=['milliseconds']] - the unit or units units (such as 'hours' or 'days') to include in the duration
   * @param {Object} opts - options that affect the creation of the Duration
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @return {Duration}
   */
  diffNow(unit = "milliseconds", opts = {}) {
    return this.diff(DateTime.now(), unit, opts);
  }
  /**
   * Return an Interval spanning between this DateTime and another DateTime
   * @param {DateTime} otherDateTime - the other end point of the Interval
   * @return {Interval}
   */
  until(otherDateTime) {
    return this.isValid ? Interval.fromDateTimes(this, otherDateTime) : this;
  }
  /**
   * Return whether this DateTime is in the same unit of time as another DateTime.
   * Higher-order units must also be identical for this function to return `true`.
   * Note that time zones are **ignored** in this comparison, which compares the **local** calendar time. Use {@link DateTime#setZone} to convert one of the dates if needed.
   * @param {DateTime} otherDateTime - the other DateTime
   * @param {string} unit - the unit of time to check sameness on
   * @example DateTime.now().hasSame(otherDT, 'day'); //~> true if otherDT is in the same current calendar day
   * @return {boolean}
   */
  hasSame(otherDateTime, unit) {
    if (!this.isValid)
      return false;
    const inputMs = otherDateTime.valueOf();
    const adjustedToZone = this.setZone(otherDateTime.zone, { keepLocalTime: true });
    return adjustedToZone.startOf(unit) <= inputMs && inputMs <= adjustedToZone.endOf(unit);
  }
  /**
   * Equality check
   * Two DateTimes are equal if and only if they represent the same millisecond, have the same zone and location, and are both valid.
   * To compare just the millisecond values, use `+dt1 === +dt2`.
   * @param {DateTime} other - the other DateTime
   * @return {boolean}
   */
  equals(other) {
    return this.isValid && other.isValid && this.valueOf() === other.valueOf() && this.zone.equals(other.zone) && this.loc.equals(other.loc);
  }
  /**
   * Returns a string representation of a this time relative to now, such as "in two days". Can only internationalize if your
   * platform supports Intl.RelativeTimeFormat. Rounds down by default.
   * @param {Object} options - options that affect the output
   * @param {DateTime} [options.base=DateTime.now()] - the DateTime to use as the basis to which this time is compared. Defaults to now.
   * @param {string} [options.style="long"] - the style of units, must be "long", "short", or "narrow"
   * @param {string|string[]} options.unit - use a specific unit or array of units; if omitted, or an array, the method will pick the best unit. Use an array or one of "years", "quarters", "months", "weeks", "days", "hours", "minutes", or "seconds"
   * @param {boolean} [options.round=true] - whether to round the numbers in the output.
   * @param {number} [options.padding=0] - padding in milliseconds. This allows you to round up the result if it fits inside the threshold. Don't use in combination with {round: false} because the decimal output will include the padding.
   * @param {string} options.locale - override the locale of this DateTime
   * @param {string} options.numberingSystem - override the numberingSystem of this DateTime. The Intl system may choose not to honor this
   * @example DateTime.now().plus({ days: 1 }).toRelative() //=> "in 1 day"
   * @example DateTime.now().setLocale("es").toRelative({ days: 1 }) //=> "dentro de 1 día"
   * @example DateTime.now().plus({ days: 1 }).toRelative({ locale: "fr" }) //=> "dans 23 heures"
   * @example DateTime.now().minus({ days: 2 }).toRelative() //=> "2 days ago"
   * @example DateTime.now().minus({ days: 2 }).toRelative({ unit: "hours" }) //=> "48 hours ago"
   * @example DateTime.now().minus({ hours: 36 }).toRelative({ round: false }) //=> "1.5 days ago"
   */
  toRelative(options = {}) {
    if (!this.isValid)
      return null;
    const base = options.base || DateTime.fromObject({}, { zone: this.zone }), padding = options.padding ? this < base ? -options.padding : options.padding : 0;
    let units = ["years", "months", "days", "hours", "minutes", "seconds"];
    let unit = options.unit;
    if (Array.isArray(options.unit)) {
      units = options.unit;
      unit = void 0;
    }
    return diffRelative(base, this.plus(padding), {
      ...options,
      numeric: "always",
      units,
      unit
    });
  }
  /**
   * Returns a string representation of this date relative to today, such as "yesterday" or "next month".
   * Only internationalizes on platforms that supports Intl.RelativeTimeFormat.
   * @param {Object} options - options that affect the output
   * @param {DateTime} [options.base=DateTime.now()] - the DateTime to use as the basis to which this time is compared. Defaults to now.
   * @param {string} options.locale - override the locale of this DateTime
   * @param {string} options.unit - use a specific unit; if omitted, the method will pick the unit. Use one of "years", "quarters", "months", "weeks", or "days"
   * @param {string} options.numberingSystem - override the numberingSystem of this DateTime. The Intl system may choose not to honor this
   * @example DateTime.now().plus({ days: 1 }).toRelativeCalendar() //=> "tomorrow"
   * @example DateTime.now().setLocale("es").plus({ days: 1 }).toRelative() //=> ""mañana"
   * @example DateTime.now().plus({ days: 1 }).toRelativeCalendar({ locale: "fr" }) //=> "demain"
   * @example DateTime.now().minus({ days: 2 }).toRelativeCalendar() //=> "2 days ago"
   */
  toRelativeCalendar(options = {}) {
    if (!this.isValid)
      return null;
    return diffRelative(options.base || DateTime.fromObject({}, { zone: this.zone }), this, {
      ...options,
      numeric: "auto",
      units: ["years", "months", "days"],
      calendary: true
    });
  }
  /**
   * Return the min of several date times
   * @param {...DateTime} dateTimes - the DateTimes from which to choose the minimum
   * @return {DateTime} the min DateTime, or undefined if called with no argument
   */
  static min(...dateTimes) {
    if (!dateTimes.every(DateTime.isDateTime)) {
      throw new InvalidArgumentError("min requires all arguments be DateTimes");
    }
    return bestBy(dateTimes, (i) => i.valueOf(), Math.min);
  }
  /**
   * Return the max of several date times
   * @param {...DateTime} dateTimes - the DateTimes from which to choose the maximum
   * @return {DateTime} the max DateTime, or undefined if called with no argument
   */
  static max(...dateTimes) {
    if (!dateTimes.every(DateTime.isDateTime)) {
      throw new InvalidArgumentError("max requires all arguments be DateTimes");
    }
    return bestBy(dateTimes, (i) => i.valueOf(), Math.max);
  }
  // MISC
  /**
   * Explain how a string would be parsed by fromFormat()
   * @param {string} text - the string to parse
   * @param {string} fmt - the format the string is expected to be in (see description)
   * @param {Object} options - options taken by fromFormat()
   * @return {Object}
   */
  static fromFormatExplain(text, fmt, options = {}) {
    const { locale = null, numberingSystem = null } = options, localeToUse = Locale.fromOpts({
      locale,
      numberingSystem,
      defaultToEN: true
    });
    return explainFromTokens(localeToUse, text, fmt);
  }
  /**
   * @deprecated use fromFormatExplain instead
   */
  static fromStringExplain(text, fmt, options = {}) {
    return DateTime.fromFormatExplain(text, fmt, options);
  }
  // FORMAT PRESETS
  /**
   * {@link DateTime#toLocaleString} format like 10/14/1983
   * @type {Object}
   */
  static get DATE_SHORT() {
    return DATE_SHORT;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Oct 14, 1983'
   * @type {Object}
   */
  static get DATE_MED() {
    return DATE_MED;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Fri, Oct 14, 1983'
   * @type {Object}
   */
  static get DATE_MED_WITH_WEEKDAY() {
    return DATE_MED_WITH_WEEKDAY;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'October 14, 1983'
   * @type {Object}
   */
  static get DATE_FULL() {
    return DATE_FULL;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Tuesday, October 14, 1983'
   * @type {Object}
   */
  static get DATE_HUGE() {
    return DATE_HUGE;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get TIME_SIMPLE() {
    return TIME_SIMPLE;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30:23 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get TIME_WITH_SECONDS() {
    return TIME_WITH_SECONDS;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30:23 AM EDT'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get TIME_WITH_SHORT_OFFSET() {
    return TIME_WITH_SHORT_OFFSET;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30:23 AM Eastern Daylight Time'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get TIME_WITH_LONG_OFFSET() {
    return TIME_WITH_LONG_OFFSET;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30', always 24-hour.
   * @type {Object}
   */
  static get TIME_24_SIMPLE() {
    return TIME_24_SIMPLE;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30:23', always 24-hour.
   * @type {Object}
   */
  static get TIME_24_WITH_SECONDS() {
    return TIME_24_WITH_SECONDS;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30:23 EDT', always 24-hour.
   * @type {Object}
   */
  static get TIME_24_WITH_SHORT_OFFSET() {
    return TIME_24_WITH_SHORT_OFFSET;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30:23 Eastern Daylight Time', always 24-hour.
   * @type {Object}
   */
  static get TIME_24_WITH_LONG_OFFSET() {
    return TIME_24_WITH_LONG_OFFSET;
  }
  /**
   * {@link DateTime#toLocaleString} format like '10/14/1983, 9:30 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_SHORT() {
    return DATETIME_SHORT;
  }
  /**
   * {@link DateTime#toLocaleString} format like '10/14/1983, 9:30:33 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_SHORT_WITH_SECONDS() {
    return DATETIME_SHORT_WITH_SECONDS;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Oct 14, 1983, 9:30 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_MED() {
    return DATETIME_MED;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Oct 14, 1983, 9:30:33 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_MED_WITH_SECONDS() {
    return DATETIME_MED_WITH_SECONDS;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Fri, 14 Oct 1983, 9:30 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_MED_WITH_WEEKDAY() {
    return DATETIME_MED_WITH_WEEKDAY;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'October 14, 1983, 9:30 AM EDT'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_FULL() {
    return DATETIME_FULL;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'October 14, 1983, 9:30:33 AM EDT'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_FULL_WITH_SECONDS() {
    return DATETIME_FULL_WITH_SECONDS;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Friday, October 14, 1983, 9:30 AM Eastern Daylight Time'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_HUGE() {
    return DATETIME_HUGE;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Friday, October 14, 1983, 9:30:33 AM Eastern Daylight Time'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_HUGE_WITH_SECONDS() {
    return DATETIME_HUGE_WITH_SECONDS;
  }
}
function friendlyDateTime(dateTimeish) {
  if (DateTime.isDateTime(dateTimeish)) {
    return dateTimeish;
  } else if (dateTimeish && dateTimeish.valueOf && isNumber(dateTimeish.valueOf())) {
    return DateTime.fromJSDate(dateTimeish);
  } else if (dateTimeish && typeof dateTimeish === "object") {
    return DateTime.fromObject(dateTimeish);
  } else {
    throw new InvalidArgumentError(
      `Unknown datetime argument: ${dateTimeish}, of type ${typeof dateTimeish}`
    );
  }
}
const DEFAULT_QUERY_SETTINGS = {
  renderNullAs: "\\-",
  taskCompletionTracking: false,
  taskCompletionUseEmojiShorthand: false,
  taskCompletionText: "completion",
  taskCompletionDateFormat: "yyyy-MM-dd",
  recursiveSubTaskCompletion: false,
  warnOnEmptyResult: true,
  refreshEnabled: true,
  refreshInterval: 2500,
  defaultDateFormat: "MMMM dd, yyyy",
  defaultDateTimeFormat: "h:mm a - MMMM dd, yyyy",
  maxRecursiveRenderDepth: 4,
  tableIdColumnName: "File",
  tableGroupColumnName: "Group",
  showResultCount: true
};
const DEFAULT_EXPORT_SETTINGS = {
  allowHtml: true
};
({
  ...DEFAULT_QUERY_SETTINGS,
  ...DEFAULT_EXPORT_SETTINGS,
  ...{
    inlineQueryPrefix: "=",
    inlineJsQueryPrefix: "$=",
    inlineQueriesInCodeblocks: true,
    enableInlineDataview: true,
    enableDataviewJs: false,
    enableInlineDataviewJs: false,
    prettyRenderInlineFields: true,
    dataviewJsKeyword: "dataviewjs"
  }
});
class Success {
  constructor(value) {
    this.value = value;
    this.successful = true;
  }
  map(f) {
    return new Success(f(this.value));
  }
  flatMap(f) {
    return f(this.value);
  }
  mapErr(f) {
    return this;
  }
  bimap(succ, _fail) {
    return this.map(succ);
  }
  orElse(_value) {
    return this.value;
  }
  cast() {
    return this;
  }
  orElseThrow(_message) {
    return this.value;
  }
}
class Failure {
  constructor(error) {
    this.error = error;
    this.successful = false;
  }
  map(_f) {
    return this;
  }
  flatMap(_f) {
    return this;
  }
  mapErr(f) {
    return new Failure(f(this.error));
  }
  bimap(_succ, fail) {
    return this.mapErr(fail);
  }
  orElse(value) {
    return value;
  }
  cast() {
    return this;
  }
  orElseThrow(message) {
    if (message)
      throw new Error(message(this.error));
    else
      throw new Error("" + this.error);
  }
}
var Result;
(function(Result2) {
  function success(value) {
    return new Success(value);
  }
  Result2.success = success;
  function failure(error) {
    return new Failure(error);
  }
  Result2.failure = failure;
  function flatMap2(first, second, f) {
    if (first.successful) {
      if (second.successful)
        return f(first.value, second.value);
      else
        return failure(second.error);
    } else {
      return failure(first.error);
    }
  }
  Result2.flatMap2 = flatMap2;
  function map2(first, second, f) {
    return flatMap2(first, second, (a, b) => success(f(a, b)));
  }
  Result2.map2 = map2;
})(Result || (Result = {}));
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof commonjsGlobal$1 !== "undefined" ? commonjsGlobal$1 : typeof self !== "undefined" ? self : {};
var parsimmon_umd_min = { exports: {} };
(function(module2, exports2) {
  !function(n2, t) {
    module2.exports = t();
  }("undefined" != typeof self ? self : commonjsGlobal, function() {
    return function(n2) {
      var t = {};
      function r(e) {
        if (t[e])
          return t[e].exports;
        var u = t[e] = { i: e, l: false, exports: {} };
        return n2[e].call(u.exports, u, u.exports, r), u.l = true, u.exports;
      }
      return r.m = n2, r.c = t, r.d = function(n3, t2, e) {
        r.o(n3, t2) || Object.defineProperty(n3, t2, { configurable: false, enumerable: true, get: e });
      }, r.r = function(n3) {
        Object.defineProperty(n3, "__esModule", { value: true });
      }, r.n = function(n3) {
        var t2 = n3 && n3.__esModule ? function() {
          return n3.default;
        } : function() {
          return n3;
        };
        return r.d(t2, "a", t2), t2;
      }, r.o = function(n3, t2) {
        return Object.prototype.hasOwnProperty.call(n3, t2);
      }, r.p = "", r(r.s = 0);
    }([function(n2, t, r) {
      function e(n3) {
        if (!(this instanceof e))
          return new e(n3);
        this._ = n3;
      }
      var u = e.prototype;
      function o(n3, t2) {
        for (var r2 = 0; r2 < n3; r2++)
          t2(r2);
      }
      function i(n3, t2, r2) {
        return function(n4, t3) {
          o(t3.length, function(r3) {
            n4(t3[r3], r3, t3);
          });
        }(function(r3, e2, u2) {
          t2 = n3(t2, r3, e2, u2);
        }, r2), t2;
      }
      function a(n3, t2) {
        return i(function(t3, r2, e2, u2) {
          return t3.concat([n3(r2, e2, u2)]);
        }, [], t2);
      }
      function f(n3, t2) {
        var r2 = { v: 0, buf: t2 };
        return o(n3, function() {
          var n4;
          r2 = { v: r2.v << 1 | (n4 = r2.buf, n4[0] >> 7), buf: function(n5) {
            var t3 = i(function(n6, t4, r3, e2) {
              return n6.concat(r3 === e2.length - 1 ? Buffer.from([t4, 0]).readUInt16BE(0) : e2.readUInt16BE(r3));
            }, [], n5);
            return Buffer.from(a(function(n6) {
              return (n6 << 1 & 65535) >> 8;
            }, t3));
          }(r2.buf) };
        }), r2;
      }
      function c() {
        return "undefined" != typeof Buffer;
      }
      function s2() {
        if (!c())
          throw new Error("Buffer global does not exist; please use webpack if you need to parse Buffers in the browser.");
      }
      function l2(n3) {
        s2();
        var t2 = i(function(n4, t3) {
          return n4 + t3;
        }, 0, n3);
        if (t2 % 8 != 0)
          throw new Error("The bits [" + n3.join(", ") + "] add up to " + t2 + " which is not an even number of bytes; the total should be divisible by 8");
        var r2, u2 = t2 / 8, o2 = (r2 = function(n4) {
          return n4 > 48;
        }, i(function(n4, t3) {
          return n4 || (r2(t3) ? t3 : n4);
        }, null, n3));
        if (o2)
          throw new Error(o2 + " bit range requested exceeds 48 bit (6 byte) Number max.");
        return new e(function(t3, r3) {
          var e2 = u2 + r3;
          return e2 > t3.length ? x(r3, u2.toString() + " bytes") : b(e2, i(function(n4, t4) {
            var r4 = f(t4, n4.buf);
            return { coll: n4.coll.concat(r4.v), buf: r4.buf };
          }, { coll: [], buf: t3.slice(r3, e2) }, n3).coll);
        });
      }
      function h(n3, t2) {
        return new e(function(r2, e2) {
          return s2(), e2 + t2 > r2.length ? x(e2, t2 + " bytes for " + n3) : b(e2 + t2, r2.slice(e2, e2 + t2));
        });
      }
      function p(n3, t2) {
        if ("number" != typeof (r2 = t2) || Math.floor(r2) !== r2 || t2 < 0 || t2 > 6)
          throw new Error(n3 + " requires integer length in range [0, 6].");
        var r2;
      }
      function d(n3) {
        return p("uintBE", n3), h("uintBE(" + n3 + ")", n3).map(function(t2) {
          return t2.readUIntBE(0, n3);
        });
      }
      function v(n3) {
        return p("uintLE", n3), h("uintLE(" + n3 + ")", n3).map(function(t2) {
          return t2.readUIntLE(0, n3);
        });
      }
      function g(n3) {
        return p("intBE", n3), h("intBE(" + n3 + ")", n3).map(function(t2) {
          return t2.readIntBE(0, n3);
        });
      }
      function m(n3) {
        return p("intLE", n3), h("intLE(" + n3 + ")", n3).map(function(t2) {
          return t2.readIntLE(0, n3);
        });
      }
      function y(n3) {
        return n3 instanceof e;
      }
      function E(n3) {
        return "[object Array]" === {}.toString.call(n3);
      }
      function w(n3) {
        return c() && Buffer.isBuffer(n3);
      }
      function b(n3, t2) {
        return { status: true, index: n3, value: t2, furthest: -1, expected: [] };
      }
      function x(n3, t2) {
        return E(t2) || (t2 = [t2]), { status: false, index: -1, value: null, furthest: n3, expected: t2 };
      }
      function B(n3, t2) {
        if (!t2)
          return n3;
        if (n3.furthest > t2.furthest)
          return n3;
        var r2 = n3.furthest === t2.furthest ? function(n4, t3) {
          if (function() {
            if (void 0 !== e._supportsSet)
              return e._supportsSet;
            var n5 = "undefined" != typeof Set;
            return e._supportsSet = n5, n5;
          }() && Array.from) {
            for (var r3 = new Set(n4), u2 = 0; u2 < t3.length; u2++)
              r3.add(t3[u2]);
            var o2 = Array.from(r3);
            return o2.sort(), o2;
          }
          for (var i2 = {}, a2 = 0; a2 < n4.length; a2++)
            i2[n4[a2]] = true;
          for (var f2 = 0; f2 < t3.length; f2++)
            i2[t3[f2]] = true;
          var c2 = [];
          for (var s3 in i2)
            ({}).hasOwnProperty.call(i2, s3) && c2.push(s3);
          return c2.sort(), c2;
        }(n3.expected, t2.expected) : t2.expected;
        return { status: n3.status, index: n3.index, value: n3.value, furthest: t2.furthest, expected: r2 };
      }
      var j = {};
      function S(n3, t2) {
        if (w(n3))
          return { offset: t2, line: -1, column: -1 };
        n3 in j || (j[n3] = {});
        for (var r2 = j[n3], e2 = 0, u2 = 0, o2 = 0, i2 = t2; i2 >= 0; ) {
          if (i2 in r2) {
            e2 = r2[i2].line, 0 === o2 && (o2 = r2[i2].lineStart);
            break;
          }
          ("\n" === n3.charAt(i2) || "\r" === n3.charAt(i2) && "\n" !== n3.charAt(i2 + 1)) && (u2++, 0 === o2 && (o2 = i2 + 1)), i2--;
        }
        var a2 = e2 + u2, f2 = t2 - o2;
        return r2[t2] = { line: a2, lineStart: o2 }, { offset: t2, line: a2 + 1, column: f2 + 1 };
      }
      function _(n3) {
        if (!y(n3))
          throw new Error("not a parser: " + n3);
      }
      function L(n3, t2) {
        return "string" == typeof n3 ? n3.charAt(t2) : n3[t2];
      }
      function O(n3) {
        if ("number" != typeof n3)
          throw new Error("not a number: " + n3);
      }
      function k(n3) {
        if ("function" != typeof n3)
          throw new Error("not a function: " + n3);
      }
      function P(n3) {
        if ("string" != typeof n3)
          throw new Error("not a string: " + n3);
      }
      var q = 2, A = 3, I = 8, F = 5 * I, M = 4 * I, z = "  ";
      function R(n3, t2) {
        return new Array(t2 + 1).join(n3);
      }
      function U(n3, t2, r2) {
        var e2 = t2 - n3.length;
        return e2 <= 0 ? n3 : R(r2, e2) + n3;
      }
      function W(n3, t2, r2, e2) {
        return { from: n3 - t2 > 0 ? n3 - t2 : 0, to: n3 + r2 > e2 ? e2 : n3 + r2 };
      }
      function D(n3, t2) {
        var r2, e2, u2, o2, f2, c2 = t2.index, s3 = c2.offset, l3 = 1;
        if (s3 === n3.length)
          return "Got the end of the input";
        if (w(n3)) {
          var h2 = s3 - s3 % I, p2 = s3 - h2, d2 = W(h2, F, M + I, n3.length), v2 = a(function(n4) {
            return a(function(n5) {
              return U(n5.toString(16), 2, "0");
            }, n4);
          }, function(n4, t3) {
            var r3 = n4.length, e3 = [], u3 = 0;
            if (r3 <= t3)
              return [n4.slice()];
            for (var o3 = 0; o3 < r3; o3++)
              e3[u3] || e3.push([]), e3[u3].push(n4[o3]), (o3 + 1) % t3 == 0 && u3++;
            return e3;
          }(n3.slice(d2.from, d2.to).toJSON().data, I));
          o2 = function(n4) {
            return 0 === n4.from && 1 === n4.to ? { from: n4.from, to: n4.to } : { from: n4.from / I, to: Math.floor(n4.to / I) };
          }(d2), e2 = h2 / I, r2 = 3 * p2, p2 >= 4 && (r2 += 1), l3 = 2, u2 = a(function(n4) {
            return n4.length <= 4 ? n4.join(" ") : n4.slice(0, 4).join(" ") + "  " + n4.slice(4).join(" ");
          }, v2), (f2 = (8 * (o2.to > 0 ? o2.to - 1 : o2.to)).toString(16).length) < 2 && (f2 = 2);
        } else {
          var g2 = n3.split(/\r\n|[\n\r\u2028\u2029]/);
          r2 = c2.column - 1, e2 = c2.line - 1, o2 = W(e2, q, A, g2.length), u2 = g2.slice(o2.from, o2.to), f2 = o2.to.toString().length;
        }
        var m2 = e2 - o2.from;
        return w(n3) && (f2 = (8 * (o2.to > 0 ? o2.to - 1 : o2.to)).toString(16).length) < 2 && (f2 = 2), i(function(t3, e3, u3) {
          var i2, a2 = u3 === m2, c3 = a2 ? "> " : z;
          return i2 = w(n3) ? U((8 * (o2.from + u3)).toString(16), f2, "0") : U((o2.from + u3 + 1).toString(), f2, " "), [].concat(t3, [c3 + i2 + " | " + e3], a2 ? [z + R(" ", f2) + " | " + U("", r2, " ") + R("^", l3)] : []);
        }, [], u2).join("\n");
      }
      function N(n3, t2) {
        return ["\n", "-- PARSING FAILED " + R("-", 50), "\n\n", D(n3, t2), "\n\n", (r2 = t2.expected, 1 === r2.length ? "Expected:\n\n" + r2[0] : "Expected one of the following: \n\n" + r2.join(", ")), "\n"].join("");
        var r2;
      }
      function G(n3) {
        return void 0 !== n3.flags ? n3.flags : [n3.global ? "g" : "", n3.ignoreCase ? "i" : "", n3.multiline ? "m" : "", n3.unicode ? "u" : "", n3.sticky ? "y" : ""].join("");
      }
      function C() {
        for (var n3 = [].slice.call(arguments), t2 = n3.length, r2 = 0; r2 < t2; r2 += 1)
          _(n3[r2]);
        return e(function(r3, e2) {
          for (var u2, o2 = new Array(t2), i2 = 0; i2 < t2; i2 += 1) {
            if (!(u2 = B(n3[i2]._(r3, e2), u2)).status)
              return u2;
            o2[i2] = u2.value, e2 = u2.index;
          }
          return B(b(e2, o2), u2);
        });
      }
      function J() {
        var n3 = [].slice.call(arguments);
        if (0 === n3.length)
          throw new Error("seqMap needs at least one argument");
        var t2 = n3.pop();
        return k(t2), C.apply(null, n3).map(function(n4) {
          return t2.apply(null, n4);
        });
      }
      function T() {
        var n3 = [].slice.call(arguments), t2 = n3.length;
        if (0 === t2)
          return Y("zero alternates");
        for (var r2 = 0; r2 < t2; r2 += 1)
          _(n3[r2]);
        return e(function(t3, r3) {
          for (var e2, u2 = 0; u2 < n3.length; u2 += 1)
            if ((e2 = B(n3[u2]._(t3, r3), e2)).status)
              return e2;
          return e2;
        });
      }
      function V(n3, t2) {
        return H(n3, t2).or(X([]));
      }
      function H(n3, t2) {
        return _(n3), _(t2), J(n3, t2.then(n3).many(), function(n4, t3) {
          return [n4].concat(t3);
        });
      }
      function K(n3) {
        P(n3);
        var t2 = "'" + n3 + "'";
        return e(function(r2, e2) {
          var u2 = e2 + n3.length, o2 = r2.slice(e2, u2);
          return o2 === n3 ? b(u2, o2) : x(e2, t2);
        });
      }
      function Q(n3, t2) {
        !function(n4) {
          if (!(n4 instanceof RegExp))
            throw new Error("not a regexp: " + n4);
          for (var t3 = G(n4), r3 = 0; r3 < t3.length; r3++) {
            var e2 = t3.charAt(r3);
            if ("i" !== e2 && "m" !== e2 && "u" !== e2 && "s" !== e2)
              throw new Error('unsupported regexp flag "' + e2 + '": ' + n4);
          }
        }(n3), arguments.length >= 2 ? O(t2) : t2 = 0;
        var r2 = function(n4) {
          return RegExp("^(?:" + n4.source + ")", G(n4));
        }(n3), u2 = "" + n3;
        return e(function(n4, e2) {
          var o2 = r2.exec(n4.slice(e2));
          if (o2) {
            if (0 <= t2 && t2 <= o2.length) {
              var i2 = o2[0], a2 = o2[t2];
              return b(e2 + i2.length, a2);
            }
            return x(e2, "valid match group (0 to " + o2.length + ") in " + u2);
          }
          return x(e2, u2);
        });
      }
      function X(n3) {
        return e(function(t2, r2) {
          return b(r2, n3);
        });
      }
      function Y(n3) {
        return e(function(t2, r2) {
          return x(r2, n3);
        });
      }
      function Z(n3) {
        if (y(n3))
          return e(function(t2, r2) {
            var e2 = n3._(t2, r2);
            return e2.index = r2, e2.value = "", e2;
          });
        if ("string" == typeof n3)
          return Z(K(n3));
        if (n3 instanceof RegExp)
          return Z(Q(n3));
        throw new Error("not a string, regexp, or parser: " + n3);
      }
      function $(n3) {
        return _(n3), e(function(t2, r2) {
          var e2 = n3._(t2, r2), u2 = t2.slice(r2, e2.index);
          return e2.status ? x(r2, 'not "' + u2 + '"') : b(r2, null);
        });
      }
      function nn(n3) {
        return k(n3), e(function(t2, r2) {
          var e2 = L(t2, r2);
          return r2 < t2.length && n3(e2) ? b(r2 + 1, e2) : x(r2, "a character/byte matching " + n3);
        });
      }
      function tn(n3, t2) {
        arguments.length < 2 && (t2 = n3, n3 = void 0);
        var r2 = e(function(n4, e2) {
          return r2._ = t2()._, r2._(n4, e2);
        });
        return n3 ? r2.desc(n3) : r2;
      }
      function rn() {
        return Y("fantasy-land/empty");
      }
      u.parse = function(n3) {
        if ("string" != typeof n3 && !w(n3))
          throw new Error(".parse must be called with a string or Buffer as its argument");
        var t2, r2 = this.skip(an)._(n3, 0);
        return t2 = r2.status ? { status: true, value: r2.value } : { status: false, index: S(n3, r2.furthest), expected: r2.expected }, delete j[n3], t2;
      }, u.tryParse = function(n3) {
        var t2 = this.parse(n3);
        if (t2.status)
          return t2.value;
        var r2 = N(n3, t2), e2 = new Error(r2);
        throw e2.type = "ParsimmonError", e2.result = t2, e2;
      }, u.assert = function(n3, t2) {
        return this.chain(function(r2) {
          return n3(r2) ? X(r2) : Y(t2);
        });
      }, u.or = function(n3) {
        return T(this, n3);
      }, u.trim = function(n3) {
        return this.wrap(n3, n3);
      }, u.wrap = function(n3, t2) {
        return J(n3, this, t2, function(n4, t3) {
          return t3;
        });
      }, u.thru = function(n3) {
        return n3(this);
      }, u.then = function(n3) {
        return _(n3), C(this, n3).map(function(n4) {
          return n4[1];
        });
      }, u.many = function() {
        var n3 = this;
        return e(function(t2, r2) {
          for (var e2 = [], u2 = void 0; ; ) {
            if (!(u2 = B(n3._(t2, r2), u2)).status)
              return B(b(r2, e2), u2);
            if (r2 === u2.index)
              throw new Error("infinite loop detected in .many() parser --- calling .many() on a parser which can accept zero characters is usually the cause");
            r2 = u2.index, e2.push(u2.value);
          }
        });
      }, u.tieWith = function(n3) {
        return P(n3), this.map(function(t2) {
          if (function(n4) {
            if (!E(n4))
              throw new Error("not an array: " + n4);
          }(t2), t2.length) {
            P(t2[0]);
            for (var r2 = t2[0], e2 = 1; e2 < t2.length; e2++)
              P(t2[e2]), r2 += n3 + t2[e2];
            return r2;
          }
          return "";
        });
      }, u.tie = function() {
        return this.tieWith("");
      }, u.times = function(n3, t2) {
        var r2 = this;
        return arguments.length < 2 && (t2 = n3), O(n3), O(t2), e(function(e2, u2) {
          for (var o2 = [], i2 = void 0, a2 = void 0, f2 = 0; f2 < n3; f2 += 1) {
            if (a2 = B(i2 = r2._(e2, u2), a2), !i2.status)
              return a2;
            u2 = i2.index, o2.push(i2.value);
          }
          for (; f2 < t2 && (a2 = B(i2 = r2._(e2, u2), a2), i2.status); f2 += 1)
            u2 = i2.index, o2.push(i2.value);
          return B(b(u2, o2), a2);
        });
      }, u.result = function(n3) {
        return this.map(function() {
          return n3;
        });
      }, u.atMost = function(n3) {
        return this.times(0, n3);
      }, u.atLeast = function(n3) {
        return J(this.times(n3), this.many(), function(n4, t2) {
          return n4.concat(t2);
        });
      }, u.map = function(n3) {
        k(n3);
        var t2 = this;
        return e(function(r2, e2) {
          var u2 = t2._(r2, e2);
          return u2.status ? B(b(u2.index, n3(u2.value)), u2) : u2;
        });
      }, u.contramap = function(n3) {
        k(n3);
        var t2 = this;
        return e(function(r2, e2) {
          var u2 = t2.parse(n3(r2.slice(e2)));
          return u2.status ? b(e2 + r2.length, u2.value) : u2;
        });
      }, u.promap = function(n3, t2) {
        return k(n3), k(t2), this.contramap(n3).map(t2);
      }, u.skip = function(n3) {
        return C(this, n3).map(function(n4) {
          return n4[0];
        });
      }, u.mark = function() {
        return J(en, this, en, function(n3, t2, r2) {
          return { start: n3, value: t2, end: r2 };
        });
      }, u.node = function(n3) {
        return J(en, this, en, function(t2, r2, e2) {
          return { name: n3, value: r2, start: t2, end: e2 };
        });
      }, u.sepBy = function(n3) {
        return V(this, n3);
      }, u.sepBy1 = function(n3) {
        return H(this, n3);
      }, u.lookahead = function(n3) {
        return this.skip(Z(n3));
      }, u.notFollowedBy = function(n3) {
        return this.skip($(n3));
      }, u.desc = function(n3) {
        E(n3) || (n3 = [n3]);
        var t2 = this;
        return e(function(r2, e2) {
          var u2 = t2._(r2, e2);
          return u2.status || (u2.expected = n3), u2;
        });
      }, u.fallback = function(n3) {
        return this.or(X(n3));
      }, u.ap = function(n3) {
        return J(n3, this, function(n4, t2) {
          return n4(t2);
        });
      }, u.chain = function(n3) {
        var t2 = this;
        return e(function(r2, e2) {
          var u2 = t2._(r2, e2);
          return u2.status ? B(n3(u2.value)._(r2, u2.index), u2) : u2;
        });
      }, u.concat = u.or, u.empty = rn, u.of = X, u["fantasy-land/ap"] = u.ap, u["fantasy-land/chain"] = u.chain, u["fantasy-land/concat"] = u.concat, u["fantasy-land/empty"] = u.empty, u["fantasy-land/of"] = u.of, u["fantasy-land/map"] = u.map;
      var en = e(function(n3, t2) {
        return b(t2, S(n3, t2));
      }), un = e(function(n3, t2) {
        return t2 >= n3.length ? x(t2, "any character/byte") : b(t2 + 1, L(n3, t2));
      }), on = e(function(n3, t2) {
        return b(n3.length, n3.slice(t2));
      }), an = e(function(n3, t2) {
        return t2 < n3.length ? x(t2, "EOF") : b(t2, null);
      }), fn = Q(/[0-9]/).desc("a digit"), cn = Q(/[0-9]*/).desc("optional digits"), sn = Q(/[a-z]/i).desc("a letter"), ln = Q(/[a-z]*/i).desc("optional letters"), hn = Q(/\s*/).desc("optional whitespace"), pn = Q(/\s+/).desc("whitespace"), dn = K("\r"), vn = K("\n"), gn = K("\r\n"), mn = T(gn, vn, dn).desc("newline"), yn = T(mn, an);
      e.all = on, e.alt = T, e.any = un, e.cr = dn, e.createLanguage = function(n3) {
        var t2 = {};
        for (var r2 in n3)
          ({}).hasOwnProperty.call(n3, r2) && function(r3) {
            t2[r3] = tn(function() {
              return n3[r3](t2);
            });
          }(r2);
        return t2;
      }, e.crlf = gn, e.custom = function(n3) {
        return e(n3(b, x));
      }, e.digit = fn, e.digits = cn, e.empty = rn, e.end = yn, e.eof = an, e.fail = Y, e.formatError = N, e.index = en, e.isParser = y, e.lazy = tn, e.letter = sn, e.letters = ln, e.lf = vn, e.lookahead = Z, e.makeFailure = x, e.makeSuccess = b, e.newline = mn, e.noneOf = function(n3) {
        return nn(function(t2) {
          return n3.indexOf(t2) < 0;
        }).desc("none of '" + n3 + "'");
      }, e.notFollowedBy = $, e.of = X, e.oneOf = function(n3) {
        for (var t2 = n3.split(""), r2 = 0; r2 < t2.length; r2++)
          t2[r2] = "'" + t2[r2] + "'";
        return nn(function(t3) {
          return n3.indexOf(t3) >= 0;
        }).desc(t2);
      }, e.optWhitespace = hn, e.Parser = e, e.range = function(n3, t2) {
        return nn(function(r2) {
          return n3 <= r2 && r2 <= t2;
        }).desc(n3 + "-" + t2);
      }, e.regex = Q, e.regexp = Q, e.sepBy = V, e.sepBy1 = H, e.seq = C, e.seqMap = J, e.seqObj = function() {
        for (var n3, t2 = {}, r2 = 0, u2 = (n3 = arguments, Array.prototype.slice.call(n3)), o2 = u2.length, i2 = 0; i2 < o2; i2 += 1) {
          var a2 = u2[i2];
          if (!y(a2)) {
            if (E(a2) && 2 === a2.length && "string" == typeof a2[0] && y(a2[1])) {
              var f2 = a2[0];
              if (Object.prototype.hasOwnProperty.call(t2, f2))
                throw new Error("seqObj: duplicate key " + f2);
              t2[f2] = true, r2++;
              continue;
            }
            throw new Error("seqObj arguments must be parsers or [string, parser] array pairs.");
          }
        }
        if (0 === r2)
          throw new Error("seqObj expects at least one named parser, found zero");
        return e(function(n4, t3) {
          for (var r3, e2 = {}, i3 = 0; i3 < o2; i3 += 1) {
            var a3, f3;
            if (E(u2[i3]) ? (a3 = u2[i3][0], f3 = u2[i3][1]) : (a3 = null, f3 = u2[i3]), !(r3 = B(f3._(n4, t3), r3)).status)
              return r3;
            a3 && (e2[a3] = r3.value), t3 = r3.index;
          }
          return B(b(t3, e2), r3);
        });
      }, e.string = K, e.succeed = X, e.takeWhile = function(n3) {
        return k(n3), e(function(t2, r2) {
          for (var e2 = r2; e2 < t2.length && n3(L(t2, e2)); )
            e2++;
          return b(e2, t2.slice(r2, e2));
        });
      }, e.test = nn, e.whitespace = pn, e["fantasy-land/empty"] = rn, e["fantasy-land/of"] = X, e.Binary = { bitSeq: l2, bitSeqObj: function(n3) {
        s2();
        var t2 = {}, r2 = 0, e2 = a(function(n4) {
          if (E(n4)) {
            var e3 = n4;
            if (2 !== e3.length)
              throw new Error("[" + e3.join(", ") + "] should be length 2, got length " + e3.length);
            if (P(e3[0]), O(e3[1]), Object.prototype.hasOwnProperty.call(t2, e3[0]))
              throw new Error("duplicate key in bitSeqObj: " + e3[0]);
            return t2[e3[0]] = true, r2++, e3;
          }
          return O(n4), [null, n4];
        }, n3);
        if (r2 < 1)
          throw new Error("bitSeqObj expects at least one named pair, got [" + n3.join(", ") + "]");
        var u2 = a(function(n4) {
          return n4[0];
        }, e2);
        return l2(a(function(n4) {
          return n4[1];
        }, e2)).map(function(n4) {
          return i(function(n5, t3) {
            return null !== t3[0] && (n5[t3[0]] = t3[1]), n5;
          }, {}, a(function(t3, r3) {
            return [t3, n4[r3]];
          }, u2));
        });
      }, byte: function(n3) {
        if (s2(), O(n3), n3 > 255)
          throw new Error("Value specified to byte constructor (" + n3 + "=0x" + n3.toString(16) + ") is larger in value than a single byte.");
        var t2 = (n3 > 15 ? "0x" : "0x0") + n3.toString(16);
        return e(function(r2, e2) {
          var u2 = L(r2, e2);
          return u2 === n3 ? b(e2 + 1, u2) : x(e2, t2);
        });
      }, buffer: function(n3) {
        return h("buffer", n3).map(function(n4) {
          return Buffer.from(n4);
        });
      }, encodedString: function(n3, t2) {
        return h("string", t2).map(function(t3) {
          return t3.toString(n3);
        });
      }, uintBE: d, uint8BE: d(1), uint16BE: d(2), uint32BE: d(4), uintLE: v, uint8LE: v(1), uint16LE: v(2), uint32LE: v(4), intBE: g, int8BE: g(1), int16BE: g(2), int32BE: g(4), intLE: m, int8LE: m(1), int16LE: m(2), int32LE: m(4), floatBE: h("floatBE", 4).map(function(n3) {
        return n3.readFloatBE(0);
      }), floatLE: h("floatLE", 4).map(function(n3) {
        return n3.readFloatLE(0);
      }), doubleBE: h("doubleBE", 8).map(function(n3) {
        return n3.readDoubleBE(0);
      }), doubleLE: h("doubleLE", 8).map(function(n3) {
        return n3.readDoubleLE(0);
      }) }, n2.exports = e;
    }]);
  });
})(parsimmon_umd_min);
var emojiRegex = () => {
  return /(?:[#*0-9]\uFE0F?\u20E3|[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23ED-\u23EF\u23F1\u23F2\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB\u25FC\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692\u2694-\u2697\u2699\u269B\u269C\u26A0\u26A7\u26AA\u26B0\u26B1\u26BD\u26BE\u26C4\u26C8\u26CF\u26D1\u26D3\u26E9\u26F0-\u26F5\u26F7\u26F8\u26FA\u2702\u2708\u2709\u270F\u2712\u2714\u2716\u271D\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u27A1\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B55\u3030\u303D\u3297\u3299]\uFE0F?|[\u261D\u270C\u270D](?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?|[\u270A\u270B](?:\uD83C[\uDFFB-\uDFFF])?|[\u23E9-\u23EC\u23F0\u23F3\u25FD\u2693\u26A1\u26AB\u26C5\u26CE\u26D4\u26EA\u26FD\u2705\u2728\u274C\u274E\u2753-\u2755\u2795-\u2797\u27B0\u27BF\u2B50]|\u26F9(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|\u2764\uFE0F?(?:\u200D(?:\uD83D\uDD25|\uD83E\uDE79))?|\uD83C(?:[\uDC04\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37\uDF21\uDF24-\uDF2C\uDF36\uDF7D\uDF96\uDF97\uDF99-\uDF9B\uDF9E\uDF9F\uDFCD\uDFCE\uDFD4-\uDFDF\uDFF5\uDFF7]\uFE0F?|[\uDF85\uDFC2\uDFC7](?:\uD83C[\uDFFB-\uDFFF])?|[\uDFC3\uDFC4\uDFCA](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDFCB\uDFCC](?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDCCF\uDD8E\uDD91-\uDD9A\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF84\uDF86-\uDF93\uDFA0-\uDFC1\uDFC5\uDFC6\uDFC8\uDFC9\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF8-\uDFFF]|\uDDE6\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF]|\uDDE7\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF]|\uDDE8\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF]|\uDDE9\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF]|\uDDEA\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA]|\uDDEB\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7]|\uDDEC\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE]|\uDDED\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA]|\uDDEE\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9]|\uDDEF\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5]|\uDDF0\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF]|\uDDF1\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE]|\uDDF2\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF]|\uDDF3\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF]|\uDDF4\uD83C\uDDF2|\uDDF5\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE]|\uDDF6\uD83C\uDDE6|\uDDF7\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC]|\uDDF8\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF]|\uDDF9\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF]|\uDDFA\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF]|\uDDFB\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA]|\uDDFC\uD83C[\uDDEB\uDDF8]|\uDDFD\uD83C\uDDF0|\uDDFE\uD83C[\uDDEA\uDDF9]|\uDDFF\uD83C[\uDDE6\uDDF2\uDDFC]|\uDFF3\uFE0F?(?:\u200D(?:\u26A7\uFE0F?|\uD83C\uDF08))?|\uDFF4(?:\u200D\u2620\uFE0F?|\uDB40\uDC67\uDB40\uDC62\uDB40(?:\uDC65\uDB40\uDC6E\uDB40\uDC67|\uDC73\uDB40\uDC63\uDB40\uDC74|\uDC77\uDB40\uDC6C\uDB40\uDC73)\uDB40\uDC7F)?)|\uD83D(?:[\uDC3F\uDCFD\uDD49\uDD4A\uDD6F\uDD70\uDD73\uDD76-\uDD79\uDD87\uDD8A-\uDD8D\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA\uDECB\uDECD-\uDECF\uDEE0-\uDEE5\uDEE9\uDEF0\uDEF3]\uFE0F?|[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC](?:\uD83C[\uDFFB-\uDFFF])?|[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD74\uDD90](?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?|[\uDC00-\uDC07\uDC09-\uDC14\uDC16-\uDC3A\uDC3C-\uDC3E\uDC40\uDC44\uDC45\uDC51-\uDC65\uDC6A\uDC79-\uDC7B\uDC7D-\uDC80\uDC84\uDC88-\uDC8E\uDC90\uDC92-\uDCA9\uDCAB-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDDA4\uDDFB-\uDE2D\uDE2F-\uDE34\uDE37-\uDE44\uDE48-\uDE4A\uDE80-\uDEA2\uDEA4-\uDEB3\uDEB7-\uDEBF\uDEC1-\uDEC5\uDED0-\uDED2\uDED5-\uDED7\uDEDD-\uDEDF\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB\uDFF0]|\uDC08(?:\u200D\u2B1B)?|\uDC15(?:\u200D\uD83E\uDDBA)?|\uDC3B(?:\u200D\u2744\uFE0F?)?|\uDC41\uFE0F?(?:\u200D\uD83D\uDDE8\uFE0F?)?|\uDC68(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDC68\uDC69]\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFE])))?))?|\uDC69(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?[\uDC68\uDC69]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?|\uDC69\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?))|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFE])))?))?|\uDC6F(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDD75(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDE2E(?:\u200D\uD83D\uDCA8)?|\uDE35(?:\u200D\uD83D\uDCAB)?|\uDE36(?:\u200D\uD83C\uDF2B\uFE0F?)?)|\uD83E(?:[\uDD0C\uDD0F\uDD18-\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5\uDEC3-\uDEC5\uDEF0\uDEF2-\uDEF6](?:\uD83C[\uDFFB-\uDFFF])?|[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDDDE\uDDDF](?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD0D\uDD0E\uDD10-\uDD17\uDD20-\uDD25\uDD27-\uDD2F\uDD3A\uDD3F-\uDD45\uDD47-\uDD76\uDD78-\uDDB4\uDDB7\uDDBA\uDDBC-\uDDCC\uDDD0\uDDE0-\uDDFF\uDE70-\uDE74\uDE78-\uDE7C\uDE80-\uDE86\uDE90-\uDEAC\uDEB0-\uDEBA\uDEC0-\uDEC2\uDED0-\uDED9\uDEE0-\uDEE7]|\uDD3C(?:\u200D[\u2640\u2642]\uFE0F?|\uD83C[\uDFFB-\uDFFF])?|\uDDD1(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83E\uDDD1))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFC-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFD-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFD\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFE]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?))?|\uDEF1(?:\uD83C(?:\uDFFB(?:\u200D\uD83E\uDEF2\uD83C[\uDFFC-\uDFFF])?|\uDFFC(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFD-\uDFFF])?|\uDFFD(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])?|\uDFFE(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFD\uDFFF])?|\uDFFF(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFE])?))?))/g;
};
function normalizeDuration(dur) {
  if (dur === void 0 || dur === null)
    return dur;
  return dur.shiftToAll().normalize();
}
function getFileTitle(path) {
  if (path.includes("/"))
    path = path.substring(path.lastIndexOf("/") + 1);
  if (path.endsWith(".md"))
    path = path.substring(0, path.length - 3);
  return path;
}
parsimmon_umd_min.exports.alt(parsimmon_umd_min.exports.regex(new RegExp(emojiRegex(), "")), parsimmon_umd_min.exports.regex(/[0-9\p{Letter}_-]+/u).map((str) => str.toLocaleLowerCase()), parsimmon_umd_min.exports.whitespace.map((_) => "-"), parsimmon_umd_min.exports.any.map((_) => "")).many().map((result) => result.join(""));
const HEADER_CANONICALIZER = parsimmon_umd_min.exports.alt(parsimmon_umd_min.exports.regex(new RegExp(emojiRegex(), "")), parsimmon_umd_min.exports.regex(/[0-9\p{Letter}_-]+/u), parsimmon_umd_min.exports.whitespace.map((_) => " "), parsimmon_umd_min.exports.any.map((_) => " ")).many().map((result) => {
  return result.join("").split(/\s+/).join(" ").trim();
});
function normalizeHeaderForLink(header) {
  return HEADER_CANONICALIZER.tryParse(header);
}
function renderMinimalDuration(dur) {
  dur = normalizeDuration(dur);
  dur = Duration.fromObject(Object.fromEntries(Object.entries(dur.toObject()).filter(([, quantity]) => quantity > 0)));
  return dur.toHuman();
}
var Values;
(function(Values2) {
  function toString(field, setting = DEFAULT_QUERY_SETTINGS, recursive = false) {
    let wrapped = wrapValue(field);
    if (!wrapped)
      return setting.renderNullAs;
    switch (wrapped.type) {
      case "null":
        return setting.renderNullAs;
      case "string":
        return wrapped.value;
      case "number":
      case "boolean":
        return "" + wrapped.value;
      case "html":
        return wrapped.value.outerHTML;
      case "widget":
        return wrapped.value.markdown();
      case "link":
        return wrapped.value.markdown();
      case "function":
        return "<function>";
      case "array":
        let result = "";
        if (recursive)
          result += "[";
        result += wrapped.value.map((f) => toString(f, setting, true)).join(", ");
        if (recursive)
          result += "]";
        return result;
      case "object":
        return "{ " + Object.entries(wrapped.value).map((e) => e[0] + ": " + toString(e[1], setting, true)).join(", ") + " }";
      case "date":
        if (wrapped.value.second == 0 && wrapped.value.hour == 0 && wrapped.value.minute == 0) {
          return wrapped.value.toFormat(setting.defaultDateFormat);
        }
        return wrapped.value.toFormat(setting.defaultDateTimeFormat);
      case "duration":
        return renderMinimalDuration(wrapped.value);
    }
  }
  Values2.toString = toString;
  function wrapValue(val) {
    if (isNull(val))
      return { type: "null", value: val };
    else if (isNumber2(val))
      return { type: "number", value: val };
    else if (isString2(val))
      return { type: "string", value: val };
    else if (isBoolean(val))
      return { type: "boolean", value: val };
    else if (isDuration(val))
      return { type: "duration", value: val };
    else if (isDate2(val))
      return { type: "date", value: val };
    else if (isWidget(val))
      return { type: "widget", value: val };
    else if (isArray(val))
      return { type: "array", value: val };
    else if (isLink(val))
      return { type: "link", value: val };
    else if (isFunction(val))
      return { type: "function", value: val };
    else if (isHtml(val))
      return { type: "html", value: val };
    else if (isObject(val))
      return { type: "object", value: val };
    else
      return void 0;
  }
  Values2.wrapValue = wrapValue;
  function mapLeaves(val, func) {
    if (isObject(val)) {
      let result = {};
      for (let [key, value] of Object.entries(val))
        result[key] = mapLeaves(value, func);
      return result;
    } else if (isArray(val)) {
      let result = [];
      for (let value of val)
        result.push(mapLeaves(value, func));
      return result;
    } else {
      return func(val);
    }
  }
  Values2.mapLeaves = mapLeaves;
  function compareValue(val1, val2, linkNormalizer) {
    var _a, _b;
    if (val1 === void 0)
      val1 = null;
    if (val2 === void 0)
      val2 = null;
    if (val1 === null && val2 === null)
      return 0;
    else if (val1 === null)
      return -1;
    else if (val2 === null)
      return 1;
    let wrap1 = wrapValue(val1);
    let wrap2 = wrapValue(val2);
    if (wrap1 === void 0 && wrap2 === void 0)
      return 0;
    else if (wrap1 === void 0)
      return -1;
    else if (wrap2 === void 0)
      return 1;
    if (wrap1.type != wrap2.type)
      return wrap1.type.localeCompare(wrap2.type);
    if (wrap1.value === wrap2.value)
      return 0;
    switch (wrap1.type) {
      case "string":
        return wrap1.value.localeCompare(wrap2.value);
      case "number":
        if (wrap1.value < wrap2.value)
          return -1;
        else if (wrap1.value == wrap2.value)
          return 0;
        return 1;
      case "null":
        return 0;
      case "boolean":
        if (wrap1.value == wrap2.value)
          return 0;
        else
          return wrap1.value ? 1 : -1;
      case "link":
        let link1 = wrap1.value;
        let link2 = wrap2.value;
        let normalize = linkNormalizer !== null && linkNormalizer !== void 0 ? linkNormalizer : (x) => x;
        let pathCompare = normalize(link1.path).localeCompare(normalize(link2.path));
        if (pathCompare != 0)
          return pathCompare;
        let typeCompare = link1.type.localeCompare(link2.type);
        if (typeCompare != 0)
          return typeCompare;
        if (link1.subpath && !link2.subpath)
          return 1;
        if (!link1.subpath && link2.subpath)
          return -1;
        if (!link1.subpath && !link2.subpath)
          return 0;
        return ((_a = link1.subpath) !== null && _a !== void 0 ? _a : "").localeCompare((_b = link2.subpath) !== null && _b !== void 0 ? _b : "");
      case "date":
        return wrap1.value < wrap2.value ? -1 : wrap1.value.equals(wrap2.value) ? 0 : 1;
      case "duration":
        return wrap1.value < wrap2.value ? -1 : wrap1.value.equals(wrap2.value) ? 0 : 1;
      case "array":
        let f1 = wrap1.value;
        let f2 = wrap2.value;
        for (let index = 0; index < Math.min(f1.length, f2.length); index++) {
          let comp = compareValue(f1[index], f2[index]);
          if (comp != 0)
            return comp;
        }
        return f1.length - f2.length;
      case "object":
        let o1 = wrap1.value;
        let o2 = wrap2.value;
        let k1 = Array.from(Object.keys(o1));
        let k2 = Array.from(Object.keys(o2));
        k1.sort();
        k2.sort();
        let keyCompare = compareValue(k1, k2);
        if (keyCompare != 0)
          return keyCompare;
        for (let key of k1) {
          let comp = compareValue(o1[key], o2[key]);
          if (comp != 0)
            return comp;
        }
        return 0;
      case "widget":
      case "html":
      case "function":
        return 0;
    }
  }
  Values2.compareValue = compareValue;
  function typeOf(val) {
    var _a;
    return (_a = wrapValue(val)) === null || _a === void 0 ? void 0 : _a.type;
  }
  Values2.typeOf = typeOf;
  function isTruthy(field) {
    let wrapped = wrapValue(field);
    if (!wrapped)
      return false;
    switch (wrapped.type) {
      case "number":
        return wrapped.value != 0;
      case "string":
        return wrapped.value.length > 0;
      case "boolean":
        return wrapped.value;
      case "link":
        return !!wrapped.value.path;
      case "date":
        return wrapped.value.toMillis() != 0;
      case "duration":
        return wrapped.value.as("seconds") != 0;
      case "object":
        return Object.keys(wrapped.value).length > 0;
      case "array":
        return wrapped.value.length > 0;
      case "null":
        return false;
      case "html":
      case "widget":
      case "function":
        return true;
    }
  }
  Values2.isTruthy = isTruthy;
  function deepCopy(field) {
    if (field === null || field === void 0)
      return field;
    if (Values2.isArray(field)) {
      return [].concat(field.map((v) => deepCopy(v)));
    } else if (Values2.isObject(field)) {
      let result = {};
      for (let [key, value] of Object.entries(field))
        result[key] = deepCopy(value);
      return result;
    } else {
      return field;
    }
  }
  Values2.deepCopy = deepCopy;
  function isString2(val) {
    return typeof val == "string";
  }
  Values2.isString = isString2;
  function isNumber2(val) {
    return typeof val == "number";
  }
  Values2.isNumber = isNumber2;
  function isDate2(val) {
    return val instanceof DateTime;
  }
  Values2.isDate = isDate2;
  function isDuration(val) {
    return val instanceof Duration;
  }
  Values2.isDuration = isDuration;
  function isNull(val) {
    return val === null || val === void 0;
  }
  Values2.isNull = isNull;
  function isArray(val) {
    return Array.isArray(val);
  }
  Values2.isArray = isArray;
  function isBoolean(val) {
    return typeof val === "boolean";
  }
  Values2.isBoolean = isBoolean;
  function isLink(val) {
    return val instanceof Link;
  }
  Values2.isLink = isLink;
  function isWidget(val) {
    return val instanceof Widget;
  }
  Values2.isWidget = isWidget;
  function isHtml(val) {
    if (typeof HTMLElement !== "undefined") {
      return val instanceof HTMLElement;
    } else {
      return false;
    }
  }
  Values2.isHtml = isHtml;
  function isObject(val) {
    return typeof val == "object" && !isHtml(val) && !isWidget(val) && !isArray(val) && !isDuration(val) && !isDate2(val) && !isLink(val) && val !== void 0 && !isNull(val);
  }
  Values2.isObject = isObject;
  function isFunction(val) {
    return typeof val == "function";
  }
  Values2.isFunction = isFunction;
})(Values || (Values = {}));
var Groupings;
(function(Groupings2) {
  function isElementGroup(entry) {
    return Values.isObject(entry) && Object.keys(entry).length == 2 && "key" in entry && "rows" in entry;
  }
  Groupings2.isElementGroup = isElementGroup;
  function isGrouping(entry) {
    for (let element of entry)
      if (!isElementGroup(element))
        return false;
    return true;
  }
  Groupings2.isGrouping = isGrouping;
  function count(elements) {
    if (isGrouping(elements)) {
      let result = 0;
      for (let subgroup of elements)
        result += count(subgroup.rows);
      return result;
    } else {
      return elements.length;
    }
  }
  Groupings2.count = count;
})(Groupings || (Groupings = {}));
class Link {
  constructor(fields) {
    Object.assign(this, fields);
  }
  /** Create a link to a specific file. */
  static file(path, embed = false, display) {
    return new Link({
      path,
      embed,
      display,
      subpath: void 0,
      type: "file"
    });
  }
  static infer(linkpath, embed = false, display) {
    if (linkpath.includes("#^")) {
      let split = linkpath.split("#^");
      return Link.block(split[0], split[1], embed, display);
    } else if (linkpath.includes("#")) {
      let split = linkpath.split("#");
      return Link.header(split[0], split[1], embed, display);
    } else
      return Link.file(linkpath, embed, display);
  }
  /** Create a link to a specific file and header in that file. */
  static header(path, header, embed, display) {
    return new Link({
      path,
      embed,
      display,
      subpath: normalizeHeaderForLink(header),
      type: "header"
    });
  }
  /** Create a link to a specific file and block in that file. */
  static block(path, blockId, embed, display) {
    return new Link({
      path,
      embed,
      display,
      subpath: blockId,
      type: "block"
    });
  }
  static fromObject(object) {
    return new Link(object);
  }
  /** Checks for link equality (i.e., that the links are pointing to the same exact location). */
  equals(other) {
    if (other == void 0 || other == null)
      return false;
    return this.path == other.path && this.type == other.type && this.subpath == other.subpath;
  }
  /** Convert this link to it's markdown representation. */
  toString() {
    return this.markdown();
  }
  /** Convert this link to a raw object which is serialization-friendly. */
  toObject() {
    return { path: this.path, type: this.type, subpath: this.subpath, display: this.display, embed: this.embed };
  }
  /** Update this link with a new path. */
  //@ts-ignore; error appeared after updating Obsidian to 0.15.4; it also updated other packages but didn't say which
  withPath(path) {
    return new Link(Object.assign({}, this, { path }));
  }
  /** Return a new link which points to the same location but with a new display value. */
  withDisplay(display) {
    return new Link(Object.assign({}, this, { display }));
  }
  /** Convert a file link into a link to a specific header. */
  withHeader(header) {
    return Link.header(this.path, header, this.embed, this.display);
  }
  /** Convert any link into a link to its file. */
  toFile() {
    return Link.file(this.path, this.embed, this.display);
  }
  /** Convert this link into an embedded link. */
  toEmbed() {
    if (this.embed) {
      return this;
    } else {
      let link = new Link(this);
      link.embed = true;
      return link;
    }
  }
  /** Convert this link into a non-embedded link. */
  fromEmbed() {
    if (!this.embed) {
      return this;
    } else {
      let link = new Link(this);
      link.embed = false;
      return link;
    }
  }
  /** Convert this link to markdown so it can be rendered. */
  markdown() {
    let result = (this.embed ? "!" : "") + "[[" + this.obsidianLink();
    if (this.display) {
      result += "|" + this.display;
    } else {
      result += "|" + getFileTitle(this.path);
      if (this.type == "header" || this.type == "block")
        result += " > " + this.subpath;
    }
    result += "]]";
    return result;
  }
  /** Convert the inner part of the link to something that Obsidian can open / understand. */
  obsidianLink() {
    var _a, _b;
    const escaped = this.path.replace("|", "\\|");
    if (this.type == "header")
      return escaped + "#" + ((_a = this.subpath) === null || _a === void 0 ? void 0 : _a.replace("|", "\\|"));
    if (this.type == "block")
      return escaped + "#^" + ((_b = this.subpath) === null || _b === void 0 ? void 0 : _b.replace("|", "\\|"));
    else
      return escaped;
  }
  /** The stripped name of the file this link points to. */
  fileName() {
    return getFileTitle(this.path).replace(".md", "");
  }
}
class Widget {
  constructor($widget) {
    this.$widget = $widget;
  }
}
class ListPairWidget extends Widget {
  constructor(key, value) {
    super("dataview:list-pair");
    this.key = key;
    this.value = value;
  }
  markdown() {
    return `${Values.toString(this.key)}: ${Values.toString(this.value)}`;
  }
}
class ExternalLinkWidget extends Widget {
  constructor(url, display) {
    super("dataview:external-link");
    this.url = url;
    this.display = display;
  }
  markdown() {
    var _a;
    return `[${(_a = this.display) !== null && _a !== void 0 ? _a : this.url}](${this.url})`;
  }
}
var Widgets;
(function(Widgets2) {
  function listPair(key, value) {
    return new ListPairWidget(key, value);
  }
  Widgets2.listPair = listPair;
  function externalLink(url, display) {
    return new ExternalLinkWidget(url, display);
  }
  Widgets2.externalLink = externalLink;
  function isListPair(widget) {
    return widget.$widget === "dataview:list-pair";
  }
  Widgets2.isListPair = isListPair;
  function isExternalLink(widget) {
    return widget.$widget === "dataview:external-link";
  }
  Widgets2.isExternalLink = isExternalLink;
  function isBuiltin(widget) {
    return isListPair(widget) || isExternalLink(widget);
  }
  Widgets2.isBuiltin = isBuiltin;
})(Widgets || (Widgets = {}));
var Fields;
(function(Fields2) {
  function variable(name) {
    return { type: "variable", name };
  }
  Fields2.variable = variable;
  function literal(value) {
    return { type: "literal", value };
  }
  Fields2.literal = literal;
  function binaryOp(left, op, right) {
    return { type: "binaryop", left, op, right };
  }
  Fields2.binaryOp = binaryOp;
  function index(obj, index2) {
    return { type: "index", object: obj, index: index2 };
  }
  Fields2.index = index;
  function indexVariable(name) {
    let parts = name.split(".");
    let result = Fields2.variable(parts[0]);
    for (let index2 = 1; index2 < parts.length; index2++) {
      result = Fields2.index(result, Fields2.literal(parts[index2]));
    }
    return result;
  }
  Fields2.indexVariable = indexVariable;
  function lambda(args, value) {
    return { type: "lambda", arguments: args, value };
  }
  Fields2.lambda = lambda;
  function func(func2, args) {
    return { type: "function", func: func2, arguments: args };
  }
  Fields2.func = func;
  function list(values) {
    return { type: "list", values };
  }
  Fields2.list = list;
  function object(values) {
    return { type: "object", values };
  }
  Fields2.object = object;
  function negate(child) {
    return { type: "negated", child };
  }
  Fields2.negate = negate;
  function isCompareOp(op) {
    return op == "<=" || op == "<" || op == ">" || op == ">=" || op == "!=" || op == "=";
  }
  Fields2.isCompareOp = isCompareOp;
  Fields2.NULL = Fields2.literal(null);
})(Fields || (Fields = {}));
var Sources;
(function(Sources2) {
  function tag(tag2) {
    return { type: "tag", tag: tag2 };
  }
  Sources2.tag = tag;
  function csv(path) {
    return { type: "csv", path };
  }
  Sources2.csv = csv;
  function folder(prefix) {
    return { type: "folder", folder: prefix };
  }
  Sources2.folder = folder;
  function link(file, incoming) {
    return { type: "link", file, direction: incoming ? "incoming" : "outgoing" };
  }
  Sources2.link = link;
  function binaryOp(left, op, right) {
    return { type: "binaryop", left, op, right };
  }
  Sources2.binaryOp = binaryOp;
  function and(left, right) {
    return { type: "binaryop", left, op: "&", right };
  }
  Sources2.and = and;
  function or(left, right) {
    return { type: "binaryop", left, op: "|", right };
  }
  Sources2.or = or;
  function negate(child) {
    return { type: "negate", child };
  }
  Sources2.negate = negate;
  function empty() {
    return { type: "empty" };
  }
  Sources2.empty = empty;
})(Sources || (Sources = {}));
const EMOJI_REGEX = new RegExp(emojiRegex(), "");
const DURATION_TYPES = {
  year: Duration.fromObject({ years: 1 }),
  years: Duration.fromObject({ years: 1 }),
  yr: Duration.fromObject({ years: 1 }),
  yrs: Duration.fromObject({ years: 1 }),
  month: Duration.fromObject({ months: 1 }),
  months: Duration.fromObject({ months: 1 }),
  mo: Duration.fromObject({ months: 1 }),
  mos: Duration.fromObject({ months: 1 }),
  week: Duration.fromObject({ weeks: 1 }),
  weeks: Duration.fromObject({ weeks: 1 }),
  wk: Duration.fromObject({ weeks: 1 }),
  wks: Duration.fromObject({ weeks: 1 }),
  w: Duration.fromObject({ weeks: 1 }),
  day: Duration.fromObject({ days: 1 }),
  days: Duration.fromObject({ days: 1 }),
  d: Duration.fromObject({ days: 1 }),
  hour: Duration.fromObject({ hours: 1 }),
  hours: Duration.fromObject({ hours: 1 }),
  hr: Duration.fromObject({ hours: 1 }),
  hrs: Duration.fromObject({ hours: 1 }),
  h: Duration.fromObject({ hours: 1 }),
  minute: Duration.fromObject({ minutes: 1 }),
  minutes: Duration.fromObject({ minutes: 1 }),
  min: Duration.fromObject({ minutes: 1 }),
  mins: Duration.fromObject({ minutes: 1 }),
  m: Duration.fromObject({ minutes: 1 }),
  second: Duration.fromObject({ seconds: 1 }),
  seconds: Duration.fromObject({ seconds: 1 }),
  sec: Duration.fromObject({ seconds: 1 }),
  secs: Duration.fromObject({ seconds: 1 }),
  s: Duration.fromObject({ seconds: 1 })
};
const DATE_SHORTHANDS = {
  now: () => DateTime.local(),
  today: () => DateTime.local().startOf("day"),
  yesterday: () => DateTime.local().startOf("day").minus(Duration.fromObject({ days: 1 })),
  tomorrow: () => DateTime.local().startOf("day").plus(Duration.fromObject({ days: 1 })),
  sow: () => DateTime.local().startOf("week"),
  "start-of-week": () => DateTime.local().startOf("week"),
  eow: () => DateTime.local().endOf("week"),
  "end-of-week": () => DateTime.local().endOf("week"),
  soy: () => DateTime.local().startOf("year"),
  "start-of-year": () => DateTime.local().startOf("year"),
  eoy: () => DateTime.local().endOf("year"),
  "end-of-year": () => DateTime.local().endOf("year"),
  som: () => DateTime.local().startOf("month"),
  "start-of-month": () => DateTime.local().startOf("month"),
  eom: () => DateTime.local().endOf("month"),
  "end-of-month": () => DateTime.local().endOf("month")
};
const KEYWORDS = ["FROM", "WHERE", "LIMIT", "GROUP", "FLATTEN"];
function splitOnUnescapedPipe(link) {
  let pipe = -1;
  while ((pipe = link.indexOf("|", pipe + 1)) >= 0) {
    if (pipe > 0 && link[pipe - 1] == "\\")
      continue;
    return [link.substring(0, pipe).replace(/\\\|/g, "|"), link.substring(pipe + 1)];
  }
  return [link.replace(/\\\|/g, "|"), void 0];
}
function parseInnerLink(rawlink) {
  let [link, display] = splitOnUnescapedPipe(rawlink);
  return Link.infer(link, false, display);
}
function createBinaryParser(child, sep, combine) {
  return parsimmon_umd_min.exports.seqMap(child, parsimmon_umd_min.exports.seq(parsimmon_umd_min.exports.optWhitespace, sep, parsimmon_umd_min.exports.optWhitespace, child).many(), (first, rest) => {
    if (rest.length == 0)
      return first;
    let node = combine(first, rest[0][1], rest[0][3]);
    for (let index = 1; index < rest.length; index++) {
      node = combine(node, rest[index][1], rest[index][3]);
    }
    return node;
  });
}
function chainOpt(base, ...funcs) {
  return parsimmon_umd_min.exports.custom((success, failure) => {
    return (input, i) => {
      let result = base._(input, i);
      if (!result.status)
        return result;
      for (let func of funcs) {
        let next = func(result.value)._(input, result.index);
        if (!next.status)
          return result;
        result = next;
      }
      return result;
    };
  });
}
const EXPRESSION = parsimmon_umd_min.exports.createLanguage({
  // A floating point number; the decimal point is optional.
  number: (q) => parsimmon_umd_min.exports.regexp(/-?[0-9]+(\.[0-9]+)?/).map((str) => Number.parseFloat(str)).desc("number"),
  // A quote-surrounded string which supports escape characters ('\').
  string: (q) => parsimmon_umd_min.exports.string('"').then(parsimmon_umd_min.exports.alt(q.escapeCharacter, parsimmon_umd_min.exports.noneOf('"\\')).atLeast(0).map((chars) => chars.join(""))).skip(parsimmon_umd_min.exports.string('"')).desc("string"),
  escapeCharacter: (_) => parsimmon_umd_min.exports.string("\\").then(parsimmon_umd_min.exports.any).map((escaped) => {
    if (escaped === '"')
      return '"';
    if (escaped === "\\")
      return "\\";
    else
      return "\\" + escaped;
  }),
  // A boolean true/false value.
  bool: (_) => parsimmon_umd_min.exports.regexp(/true|false|True|False/).map((str) => str.toLowerCase() == "true").desc("boolean ('true' or 'false')"),
  // A tag of the form '#stuff/hello-there'.
  tag: (_) => parsimmon_umd_min.exports.seqMap(parsimmon_umd_min.exports.string("#"), parsimmon_umd_min.exports.alt(parsimmon_umd_min.exports.regexp(/[^\u2000-\u206F\u2E00-\u2E7F'!"#$%&()*+,.:;<=>?@^`{|}~\[\]\\\s]/).desc("text")).many(), (start, rest) => start + rest.join("")).desc("tag ('#hello/stuff')"),
  // A variable identifier, which is alphanumeric and must start with a letter or... emoji.
  identifier: (_) => parsimmon_umd_min.exports.seqMap(parsimmon_umd_min.exports.alt(parsimmon_umd_min.exports.regexp(/\p{Letter}/u), parsimmon_umd_min.exports.regexp(EMOJI_REGEX).desc("text")), parsimmon_umd_min.exports.alt(parsimmon_umd_min.exports.regexp(/[0-9\p{Letter}_-]/u), parsimmon_umd_min.exports.regexp(EMOJI_REGEX).desc("text")).many(), (first, rest) => first + rest.join("")).desc("variable identifier"),
  // An Obsidian link of the form [[<link>]].
  link: (_) => parsimmon_umd_min.exports.regexp(/\[\[([^\[\]]*?)\]\]/u, 1).map((linkInner) => parseInnerLink(linkInner)).desc("file link"),
  // An embeddable link which can start with '!'. This overlaps with the normal negation operator, so it is only
  // provided for metadata parsing.
  embedLink: (q) => parsimmon_umd_min.exports.seqMap(parsimmon_umd_min.exports.string("!").atMost(1), q.link, (p, l2) => {
    if (p.length > 0)
      l2.embed = true;
    return l2;
  }).desc("file link"),
  // Binary plus or minus operator.
  binaryPlusMinus: (_) => parsimmon_umd_min.exports.regexp(/\+|-/).map((str) => str).desc("'+' or '-'"),
  // Binary times or divide operator.
  binaryMulDiv: (_) => parsimmon_umd_min.exports.regexp(/\*|\/|%/).map((str) => str).desc("'*' or '/' or '%'"),
  // Binary comparison operator.
  binaryCompareOp: (_) => parsimmon_umd_min.exports.regexp(/>=|<=|!=|>|<|=/).map((str) => str).desc("'>=' or '<=' or '!=' or '=' or '>' or '<'"),
  // Binary boolean combination operator.
  binaryBooleanOp: (_) => parsimmon_umd_min.exports.regexp(/and|or|&|\|/i).map((str) => {
    if (str.toLowerCase() == "and")
      return "&";
    else if (str.toLowerCase() == "or")
      return "|";
    else
      return str;
  }).desc("'and' or 'or'"),
  // A date which can be YYYY-MM[-DDTHH:mm:ss].
  rootDate: (_) => parsimmon_umd_min.exports.seqMap(parsimmon_umd_min.exports.regexp(/\d{4}/), parsimmon_umd_min.exports.string("-"), parsimmon_umd_min.exports.regexp(/\d{2}/), (year, _2, month) => {
    return DateTime.fromObject({ year: Number.parseInt(year), month: Number.parseInt(month) });
  }).desc("date in format YYYY-MM[-DDTHH-MM-SS.MS]"),
  dateShorthand: (_) => parsimmon_umd_min.exports.alt(...Object.keys(DATE_SHORTHANDS).sort((a, b) => b.length - a.length).map(parsimmon_umd_min.exports.string)),
  date: (q) => chainOpt(q.rootDate, (ym) => parsimmon_umd_min.exports.seqMap(parsimmon_umd_min.exports.string("-"), parsimmon_umd_min.exports.regexp(/\d{2}/), (_, day) => ym.set({ day: Number.parseInt(day) })), (ymd) => parsimmon_umd_min.exports.seqMap(parsimmon_umd_min.exports.string("T"), parsimmon_umd_min.exports.regexp(/\d{2}/), (_, hour) => ymd.set({ hour: Number.parseInt(hour) })), (ymdh) => parsimmon_umd_min.exports.seqMap(parsimmon_umd_min.exports.string(":"), parsimmon_umd_min.exports.regexp(/\d{2}/), (_, minute) => ymdh.set({ minute: Number.parseInt(minute) })), (ymdhm) => parsimmon_umd_min.exports.seqMap(parsimmon_umd_min.exports.string(":"), parsimmon_umd_min.exports.regexp(/\d{2}/), (_, second) => ymdhm.set({ second: Number.parseInt(second) })), (ymdhms) => parsimmon_umd_min.exports.alt(
    parsimmon_umd_min.exports.seqMap(parsimmon_umd_min.exports.string("."), parsimmon_umd_min.exports.regexp(/\d{3}/), (_, millisecond) => ymdhms.set({ millisecond: Number.parseInt(millisecond) })),
    parsimmon_umd_min.exports.succeed(ymdhms)
    // pass
  ), (dt) => parsimmon_umd_min.exports.alt(parsimmon_umd_min.exports.seqMap(parsimmon_umd_min.exports.string("+").or(parsimmon_umd_min.exports.string("-")), parsimmon_umd_min.exports.regexp(/\d{1,2}(:\d{2})?/), (pm, hr) => dt.setZone("UTC" + pm + hr, { keepLocalTime: true })), parsimmon_umd_min.exports.seqMap(parsimmon_umd_min.exports.string("Z"), () => dt.setZone("utc", { keepLocalTime: true })), parsimmon_umd_min.exports.seqMap(parsimmon_umd_min.exports.string("["), parsimmon_umd_min.exports.regexp(/[0-9A-Za-z+-\/]+/u), parsimmon_umd_min.exports.string("]"), (_a, zone, _b) => dt.setZone(zone, { keepLocalTime: true })))).assert((dt) => dt.isValid, "valid date").desc("date in format YYYY-MM[-DDTHH-MM-SS.MS]"),
  // A date, plus various shorthand times of day it could be.
  datePlus: (q) => parsimmon_umd_min.exports.alt(q.dateShorthand.map((d) => DATE_SHORTHANDS[d]()), q.date).desc("date in format YYYY-MM[-DDTHH-MM-SS.MS] or in shorthand"),
  // A duration of time.
  durationType: (_) => parsimmon_umd_min.exports.alt(...Object.keys(DURATION_TYPES).sort((a, b) => b.length - a.length).map(parsimmon_umd_min.exports.string)),
  duration: (q) => parsimmon_umd_min.exports.seqMap(q.number, parsimmon_umd_min.exports.optWhitespace, q.durationType, (count, _, t) => DURATION_TYPES[t].mapUnits((x) => x * count)).sepBy1(parsimmon_umd_min.exports.string(",").trim(parsimmon_umd_min.exports.optWhitespace).or(parsimmon_umd_min.exports.optWhitespace)).map((durations) => durations.reduce((p, c) => p.plus(c))).desc("duration like 4hr2min"),
  // A raw null value.
  rawNull: (_) => parsimmon_umd_min.exports.string("null"),
  // Source parsing.
  tagSource: (q) => q.tag.map((tag) => Sources.tag(tag)),
  csvSource: (q) => parsimmon_umd_min.exports.seqMap(parsimmon_umd_min.exports.string("csv(").skip(parsimmon_umd_min.exports.optWhitespace), q.string, parsimmon_umd_min.exports.string(")"), (_1, path, _2) => Sources.csv(path)),
  linkIncomingSource: (q) => q.link.map((link) => Sources.link(link.path, true)),
  linkOutgoingSource: (q) => parsimmon_umd_min.exports.seqMap(parsimmon_umd_min.exports.string("outgoing(").skip(parsimmon_umd_min.exports.optWhitespace), q.link, parsimmon_umd_min.exports.string(")"), (_1, link, _2) => Sources.link(link.path, false)),
  folderSource: (q) => q.string.map((str) => Sources.folder(str)),
  parensSource: (q) => parsimmon_umd_min.exports.seqMap(parsimmon_umd_min.exports.string("("), parsimmon_umd_min.exports.optWhitespace, q.source, parsimmon_umd_min.exports.optWhitespace, parsimmon_umd_min.exports.string(")"), (_1, _2, field, _3, _4) => field),
  negateSource: (q) => parsimmon_umd_min.exports.seqMap(parsimmon_umd_min.exports.alt(parsimmon_umd_min.exports.string("-"), parsimmon_umd_min.exports.string("!")), q.atomSource, (_, source) => Sources.negate(source)),
  atomSource: (q) => parsimmon_umd_min.exports.alt(q.parensSource, q.negateSource, q.linkOutgoingSource, q.linkIncomingSource, q.folderSource, q.tagSource, q.csvSource),
  binaryOpSource: (q) => createBinaryParser(q.atomSource, q.binaryBooleanOp.map((s2) => s2), Sources.binaryOp),
  source: (q) => q.binaryOpSource,
  // Field parsing.
  variableField: (q) => q.identifier.chain((r) => {
    if (KEYWORDS.includes(r.toUpperCase())) {
      return parsimmon_umd_min.exports.fail("Variable fields cannot be a keyword (" + KEYWORDS.join(" or ") + ")");
    } else {
      return parsimmon_umd_min.exports.succeed(Fields.variable(r));
    }
  }).desc("variable"),
  numberField: (q) => q.number.map((val) => Fields.literal(val)).desc("number"),
  stringField: (q) => q.string.map((val) => Fields.literal(val)).desc("string"),
  boolField: (q) => q.bool.map((val) => Fields.literal(val)).desc("boolean"),
  dateField: (q) => parsimmon_umd_min.exports.seqMap(parsimmon_umd_min.exports.string("date("), parsimmon_umd_min.exports.optWhitespace, q.datePlus, parsimmon_umd_min.exports.optWhitespace, parsimmon_umd_min.exports.string(")"), (prefix, _1, date, _2, postfix) => Fields.literal(date)).desc("date"),
  durationField: (q) => parsimmon_umd_min.exports.seqMap(parsimmon_umd_min.exports.string("dur("), parsimmon_umd_min.exports.optWhitespace, q.duration, parsimmon_umd_min.exports.optWhitespace, parsimmon_umd_min.exports.string(")"), (prefix, _1, dur, _2, postfix) => Fields.literal(dur)).desc("duration"),
  nullField: (q) => q.rawNull.map((_) => Fields.NULL),
  linkField: (q) => q.link.map((f) => Fields.literal(f)),
  listField: (q) => q.field.sepBy(parsimmon_umd_min.exports.string(",").trim(parsimmon_umd_min.exports.optWhitespace)).wrap(parsimmon_umd_min.exports.string("[").skip(parsimmon_umd_min.exports.optWhitespace), parsimmon_umd_min.exports.optWhitespace.then(parsimmon_umd_min.exports.string("]"))).map((l2) => Fields.list(l2)).desc("list ('[1, 2, 3]')"),
  objectField: (q) => parsimmon_umd_min.exports.seqMap(q.identifier.or(q.string), parsimmon_umd_min.exports.string(":").trim(parsimmon_umd_min.exports.optWhitespace), q.field, (name, _sep, value) => {
    return { name, value };
  }).sepBy(parsimmon_umd_min.exports.string(",").trim(parsimmon_umd_min.exports.optWhitespace)).wrap(parsimmon_umd_min.exports.string("{").skip(parsimmon_umd_min.exports.optWhitespace), parsimmon_umd_min.exports.optWhitespace.then(parsimmon_umd_min.exports.string("}"))).map((vals) => {
    let res = {};
    for (let entry of vals)
      res[entry.name] = entry.value;
    return Fields.object(res);
  }).desc("object ('{ a: 1, b: 2 }')"),
  atomInlineField: (q) => parsimmon_umd_min.exports.alt(q.date, q.duration.map((d) => normalizeDuration(d)), q.string, q.tag, q.embedLink, q.bool, q.number, q.rawNull),
  inlineFieldList: (q) => q.atomInlineField.sepBy(parsimmon_umd_min.exports.string(",").trim(parsimmon_umd_min.exports.optWhitespace).lookahead(q.atomInlineField)),
  inlineField: (q) => parsimmon_umd_min.exports.alt(parsimmon_umd_min.exports.seqMap(q.atomInlineField, parsimmon_umd_min.exports.string(",").trim(parsimmon_umd_min.exports.optWhitespace), q.inlineFieldList, (f, _s, l2) => [f].concat(l2)), q.atomInlineField),
  atomField: (q) => parsimmon_umd_min.exports.alt(
    // Place embed links above negated fields as they are the special parser case '![[thing]]' and are generally unambigious.
    q.embedLink.map((l2) => Fields.literal(l2)),
    q.negatedField,
    q.linkField,
    q.listField,
    q.objectField,
    q.lambdaField,
    q.parensField,
    q.boolField,
    q.numberField,
    q.stringField,
    q.dateField,
    q.durationField,
    q.nullField,
    q.variableField
  ),
  indexField: (q) => parsimmon_umd_min.exports.seqMap(q.atomField, parsimmon_umd_min.exports.alt(q.dotPostfix, q.indexPostfix, q.functionPostfix).many(), (obj, postfixes) => {
    let result = obj;
    for (let post of postfixes) {
      switch (post.type) {
        case "dot":
          result = Fields.index(result, Fields.literal(post.field));
          break;
        case "index":
          result = Fields.index(result, post.field);
          break;
        case "function":
          result = Fields.func(result, post.fields);
          break;
      }
    }
    return result;
  }),
  negatedField: (q) => parsimmon_umd_min.exports.seqMap(parsimmon_umd_min.exports.string("!"), q.indexField, (_, field) => Fields.negate(field)).desc("negated field"),
  parensField: (q) => parsimmon_umd_min.exports.seqMap(parsimmon_umd_min.exports.string("("), parsimmon_umd_min.exports.optWhitespace, q.field, parsimmon_umd_min.exports.optWhitespace, parsimmon_umd_min.exports.string(")"), (_1, _2, field, _3, _4) => field),
  lambdaField: (q) => parsimmon_umd_min.exports.seqMap(q.identifier.sepBy(parsimmon_umd_min.exports.string(",").trim(parsimmon_umd_min.exports.optWhitespace)).wrap(parsimmon_umd_min.exports.string("(").trim(parsimmon_umd_min.exports.optWhitespace), parsimmon_umd_min.exports.string(")").trim(parsimmon_umd_min.exports.optWhitespace)), parsimmon_umd_min.exports.string("=>").trim(parsimmon_umd_min.exports.optWhitespace), q.field, (ident, _ignore, value) => {
    return { type: "lambda", arguments: ident, value };
  }),
  dotPostfix: (q) => parsimmon_umd_min.exports.seqMap(parsimmon_umd_min.exports.string("."), q.identifier, (_, field) => {
    return { type: "dot", field };
  }),
  indexPostfix: (q) => parsimmon_umd_min.exports.seqMap(parsimmon_umd_min.exports.string("["), parsimmon_umd_min.exports.optWhitespace, q.field, parsimmon_umd_min.exports.optWhitespace, parsimmon_umd_min.exports.string("]"), (_, _2, field, _3, _4) => {
    return { type: "index", field };
  }),
  functionPostfix: (q) => parsimmon_umd_min.exports.seqMap(parsimmon_umd_min.exports.string("("), parsimmon_umd_min.exports.optWhitespace, q.field.sepBy(parsimmon_umd_min.exports.string(",").trim(parsimmon_umd_min.exports.optWhitespace)), parsimmon_umd_min.exports.optWhitespace, parsimmon_umd_min.exports.string(")"), (_, _1, fields, _2, _3) => {
    return { type: "function", fields };
  }),
  // The precedence hierarchy of operators - multiply/divide, add/subtract, compare, and then boolean operations.
  binaryMulDivField: (q) => createBinaryParser(q.indexField, q.binaryMulDiv, Fields.binaryOp),
  binaryPlusMinusField: (q) => createBinaryParser(q.binaryMulDivField, q.binaryPlusMinus, Fields.binaryOp),
  binaryCompareField: (q) => createBinaryParser(q.binaryPlusMinusField, q.binaryCompareOp, Fields.binaryOp),
  binaryBooleanField: (q) => createBinaryParser(q.binaryCompareField, q.binaryBooleanOp, Fields.binaryOp),
  binaryOpField: (q) => q.binaryBooleanField,
  field: (q) => q.binaryOpField
});
function parseField(text) {
  try {
    return Result.success(EXPRESSION.field.tryParse(text));
  } catch (error) {
    return Result.failure("" + error);
  }
}
var QueryFields;
(function(QueryFields2) {
  function named(name, field) {
    return { name, field };
  }
  QueryFields2.named = named;
  function sortBy(field, dir) {
    return { field, direction: dir };
  }
  QueryFields2.sortBy = sortBy;
})(QueryFields || (QueryFields = {}));
function captureRaw(base) {
  return parsimmon_umd_min.exports.custom((success, failure) => {
    return (input, i) => {
      let result = base._(input, i);
      if (!result.status)
        return result;
      return Object.assign({}, result, { value: [result.value, input.substring(i, result.index)] });
    };
  });
}
function stripNewlines(text) {
  return text.split(/[\r\n]+/).map((t) => t.trim()).join("");
}
const QUERY_LANGUAGE = parsimmon_umd_min.exports.createLanguage({
  // Simple atom parsing, like words, identifiers, numbers.
  queryType: (q) => parsimmon_umd_min.exports.alt(parsimmon_umd_min.exports.regexp(/TABLE|LIST|TASK|CALENDAR/i)).map((str) => str.toLowerCase()).desc("query type ('TABLE', 'LIST', 'TASK', or 'CALENDAR')"),
  explicitNamedField: (q) => parsimmon_umd_min.exports.seqMap(EXPRESSION.field.skip(parsimmon_umd_min.exports.whitespace), parsimmon_umd_min.exports.regexp(/AS/i).skip(parsimmon_umd_min.exports.whitespace), EXPRESSION.identifier.or(EXPRESSION.string), (field, _as, ident) => QueryFields.named(ident, field)),
  namedField: (q) => parsimmon_umd_min.exports.alt(q.explicitNamedField, captureRaw(EXPRESSION.field).map(([value, text]) => QueryFields.named(stripNewlines(text), value))),
  sortField: (q) => parsimmon_umd_min.exports.seqMap(EXPRESSION.field.skip(parsimmon_umd_min.exports.optWhitespace), parsimmon_umd_min.exports.regexp(/ASCENDING|DESCENDING|ASC|DESC/i).atMost(1), (field, dir) => {
    let direction = dir.length == 0 ? "ascending" : dir[0].toLowerCase();
    if (direction == "desc")
      direction = "descending";
    if (direction == "asc")
      direction = "ascending";
    return {
      field,
      direction
    };
  }),
  headerClause: (q) => q.queryType.skip(parsimmon_umd_min.exports.whitespace).chain((qtype) => {
    switch (qtype) {
      case "table":
        return parsimmon_umd_min.exports.seqMap(parsimmon_umd_min.exports.regexp(/WITHOUT\s+ID/i).skip(parsimmon_umd_min.exports.optWhitespace).atMost(1), parsimmon_umd_min.exports.sepBy(q.namedField, parsimmon_umd_min.exports.string(",").trim(parsimmon_umd_min.exports.optWhitespace)), (withoutId, fields) => {
          return { type: "table", fields, showId: withoutId.length == 0 };
        });
      case "list":
        return parsimmon_umd_min.exports.seqMap(parsimmon_umd_min.exports.regexp(/WITHOUT\s+ID/i).skip(parsimmon_umd_min.exports.optWhitespace).atMost(1), EXPRESSION.field.atMost(1), (withoutId, format) => {
          return {
            type: "list",
            format: format.length == 1 ? format[0] : void 0,
            showId: withoutId.length == 0
          };
        });
      case "task":
        return parsimmon_umd_min.exports.succeed({ type: "task" });
      case "calendar":
        return parsimmon_umd_min.exports.seqMap(q.namedField, (field) => {
          return {
            type: "calendar",
            showId: true,
            field
          };
        });
      default:
        return parsimmon_umd_min.exports.fail(`Unrecognized query type '${qtype}'`);
    }
  }).desc("TABLE or LIST or TASK or CALENDAR"),
  fromClause: (q) => parsimmon_umd_min.exports.seqMap(parsimmon_umd_min.exports.regexp(/FROM/i), parsimmon_umd_min.exports.whitespace, EXPRESSION.source, (_1, _2, source) => source),
  whereClause: (q) => parsimmon_umd_min.exports.seqMap(parsimmon_umd_min.exports.regexp(/WHERE/i), parsimmon_umd_min.exports.whitespace, EXPRESSION.field, (where, _, field) => {
    return { type: "where", clause: field };
  }).desc("WHERE <expression>"),
  sortByClause: (q) => parsimmon_umd_min.exports.seqMap(parsimmon_umd_min.exports.regexp(/SORT/i), parsimmon_umd_min.exports.whitespace, q.sortField.sepBy1(parsimmon_umd_min.exports.string(",").trim(parsimmon_umd_min.exports.optWhitespace)), (sort, _1, fields) => {
    return { type: "sort", fields };
  }).desc("SORT field [ASC/DESC]"),
  limitClause: (q) => parsimmon_umd_min.exports.seqMap(parsimmon_umd_min.exports.regexp(/LIMIT/i), parsimmon_umd_min.exports.whitespace, EXPRESSION.field, (limit, _1, field) => {
    return { type: "limit", amount: field };
  }).desc("LIMIT <value>"),
  flattenClause: (q) => parsimmon_umd_min.exports.seqMap(parsimmon_umd_min.exports.regexp(/FLATTEN/i).skip(parsimmon_umd_min.exports.whitespace), q.namedField, (_, field) => {
    return { type: "flatten", field };
  }).desc("FLATTEN <value> [AS <name>]"),
  groupByClause: (q) => parsimmon_umd_min.exports.seqMap(parsimmon_umd_min.exports.regexp(/GROUP BY/i).skip(parsimmon_umd_min.exports.whitespace), q.namedField, (_, field) => {
    return { type: "group", field };
  }).desc("GROUP BY <value> [AS <name>]"),
  // Full query parsing.
  clause: (q) => parsimmon_umd_min.exports.alt(q.fromClause, q.whereClause, q.sortByClause, q.limitClause, q.groupByClause, q.flattenClause),
  query: (q) => parsimmon_umd_min.exports.seqMap(q.headerClause.trim(parsimmon_umd_min.exports.optWhitespace), q.fromClause.trim(parsimmon_umd_min.exports.optWhitespace).atMost(1), q.clause.trim(parsimmon_umd_min.exports.optWhitespace).many(), (header, from, clauses) => {
    return {
      header,
      source: from.length == 0 ? Sources.folder("") : from[0],
      operations: clauses,
      settings: DEFAULT_QUERY_SETTINGS
    };
  })
});
const getAPI = (app) => {
  var _a;
  if (app)
    return (_a = app.plugins.plugins.dataview) === null || _a === void 0 ? void 0 : _a.api;
  else
    return window.DataviewAPI;
};
const isPluginEnabled = (app) => app.plugins.enabledPlugins.has("dataview");
lib.DATE_SHORTHANDS = DATE_SHORTHANDS;
lib.DURATION_TYPES = DURATION_TYPES;
lib.EXPRESSION = EXPRESSION;
lib.KEYWORDS = KEYWORDS;
lib.QUERY_LANGUAGE = QUERY_LANGUAGE;
lib.getAPI = getAPI;
lib.isPluginEnabled = isPluginEnabled;
lib.parseField = parseField;
exports.setActiveTabTitle = setActiveTabTitle;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOlsiLi4vbm9kZV9tb2R1bGVzL3N2ZWx0ZS9zcmMvc2hhcmVkL3ZlcnNpb24uanMiLCIuLi9ub2RlX21vZHVsZXMvc3ZlbHRlL3NyYy9ydW50aW1lL2ludGVybmFsL2Rpc2Nsb3NlLXZlcnNpb24vaW5kZXguanMiLCIuLi9zcmMvc2VydmljZS9PYnNpZGlhblV0aWxzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL29ic2lkaWFuLWRhdGF2aWV3L2xpYi9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBnZW5lcmF0ZWQgZHVyaW5nIHJlbGVhc2UsIGRvIG5vdCBtb2RpZnlcblxuLyoqXG4gKiBUaGUgY3VycmVudCB2ZXJzaW9uLCBhcyBzZXQgaW4gcGFja2FnZS5qc29uLlxuICpcbiAqIGh0dHBzOi8vc3ZlbHRlLmRldi9kb2NzL3N2ZWx0ZS1jb21waWxlciNzdmVsdGUtdmVyc2lvblxuICogQHR5cGUge3N0cmluZ31cbiAqL1xuZXhwb3J0IGNvbnN0IFZFUlNJT04gPSAnNC4yLjAnO1xuZXhwb3J0IGNvbnN0IFBVQkxJQ19WRVJTSU9OID0gJzQnO1xuIiwiaW1wb3J0IHsgUFVCTElDX1ZFUlNJT04gfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvdmVyc2lvbi5qcyc7XG5cbmlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJylcblx0Ly8gQHRzLWlnbm9yZVxuXHQod2luZG93Ll9fc3ZlbHRlIHx8ICh3aW5kb3cuX19zdmVsdGUgPSB7IHY6IG5ldyBTZXQoKSB9KSkudi5hZGQoUFVCTElDX1ZFUlNJT04pO1xuIiwiZXhwb3J0IGZ1bmN0aW9uIHNldEFjdGl2ZVRhYlRpdGxlKGRvY3VtZW50OiBEb2N1bWVudCwgdGl0bGU6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IHRhYlRpdGxlRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICcud29ya3NwYWNlLXRhYnMubW9kLWFjdGl2ZSAud29ya3NwYWNlLXRhYi1oZWFkZXIuaXMtYWN0aXZlIC53b3Jrc3BhY2UtdGFiLWhlYWRlci1pbm5lci10aXRsZSdcbiAgICApO1xuXG4gICAgaWYgKHRhYlRpdGxlRWxlbWVudCAmJiAnaW5uZXJUZXh0JyBpbiB0YWJUaXRsZUVsZW1lbnQpIHtcbiAgICAgICAgdGFiVGl0bGVFbGVtZW50LmlubmVyVGV4dCA9IHRpdGxlXG4gICAgfVxufVxuXG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnJlcXVpcmUoJ29ic2lkaWFuJyk7XG5cbi8vIHRoZXNlIGFyZW4ndCByZWFsbHkgcHJpdmF0ZSwgYnV0IG5vciBhcmUgdGhleSByZWFsbHkgdXNlZnVsIHRvIGRvY3VtZW50XG5cbi8qKlxuICogQHByaXZhdGVcbiAqL1xuY2xhc3MgTHV4b25FcnJvciBleHRlbmRzIEVycm9yIHt9XG5cbi8qKlxuICogQHByaXZhdGVcbiAqL1xuY2xhc3MgSW52YWxpZERhdGVUaW1lRXJyb3IgZXh0ZW5kcyBMdXhvbkVycm9yIHtcbiAgY29uc3RydWN0b3IocmVhc29uKSB7XG4gICAgc3VwZXIoYEludmFsaWQgRGF0ZVRpbWU6ICR7cmVhc29uLnRvTWVzc2FnZSgpfWApO1xuICB9XG59XG5cbi8qKlxuICogQHByaXZhdGVcbiAqL1xuY2xhc3MgSW52YWxpZEludGVydmFsRXJyb3IgZXh0ZW5kcyBMdXhvbkVycm9yIHtcbiAgY29uc3RydWN0b3IocmVhc29uKSB7XG4gICAgc3VwZXIoYEludmFsaWQgSW50ZXJ2YWw6ICR7cmVhc29uLnRvTWVzc2FnZSgpfWApO1xuICB9XG59XG5cbi8qKlxuICogQHByaXZhdGVcbiAqL1xuY2xhc3MgSW52YWxpZER1cmF0aW9uRXJyb3IgZXh0ZW5kcyBMdXhvbkVycm9yIHtcbiAgY29uc3RydWN0b3IocmVhc29uKSB7XG4gICAgc3VwZXIoYEludmFsaWQgRHVyYXRpb246ICR7cmVhc29uLnRvTWVzc2FnZSgpfWApO1xuICB9XG59XG5cbi8qKlxuICogQHByaXZhdGVcbiAqL1xuY2xhc3MgQ29uZmxpY3RpbmdTcGVjaWZpY2F0aW9uRXJyb3IgZXh0ZW5kcyBMdXhvbkVycm9yIHt9XG5cbi8qKlxuICogQHByaXZhdGVcbiAqL1xuY2xhc3MgSW52YWxpZFVuaXRFcnJvciBleHRlbmRzIEx1eG9uRXJyb3Ige1xuICBjb25zdHJ1Y3Rvcih1bml0KSB7XG4gICAgc3VwZXIoYEludmFsaWQgdW5pdCAke3VuaXR9YCk7XG4gIH1cbn1cblxuLyoqXG4gKiBAcHJpdmF0ZVxuICovXG5jbGFzcyBJbnZhbGlkQXJndW1lbnRFcnJvciBleHRlbmRzIEx1eG9uRXJyb3Ige31cblxuLyoqXG4gKiBAcHJpdmF0ZVxuICovXG5jbGFzcyBab25lSXNBYnN0cmFjdEVycm9yIGV4dGVuZHMgTHV4b25FcnJvciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKFwiWm9uZSBpcyBhbiBhYnN0cmFjdCBjbGFzc1wiKTtcbiAgfVxufVxuXG4vKipcbiAqIEBwcml2YXRlXG4gKi9cblxuY29uc3QgbiA9IFwibnVtZXJpY1wiLFxuICBzID0gXCJzaG9ydFwiLFxuICBsID0gXCJsb25nXCI7XG5cbmNvbnN0IERBVEVfU0hPUlQgPSB7XG4gIHllYXI6IG4sXG4gIG1vbnRoOiBuLFxuICBkYXk6IG4sXG59O1xuXG5jb25zdCBEQVRFX01FRCA9IHtcbiAgeWVhcjogbixcbiAgbW9udGg6IHMsXG4gIGRheTogbixcbn07XG5cbmNvbnN0IERBVEVfTUVEX1dJVEhfV0VFS0RBWSA9IHtcbiAgeWVhcjogbixcbiAgbW9udGg6IHMsXG4gIGRheTogbixcbiAgd2Vla2RheTogcyxcbn07XG5cbmNvbnN0IERBVEVfRlVMTCA9IHtcbiAgeWVhcjogbixcbiAgbW9udGg6IGwsXG4gIGRheTogbixcbn07XG5cbmNvbnN0IERBVEVfSFVHRSA9IHtcbiAgeWVhcjogbixcbiAgbW9udGg6IGwsXG4gIGRheTogbixcbiAgd2Vla2RheTogbCxcbn07XG5cbmNvbnN0IFRJTUVfU0lNUExFID0ge1xuICBob3VyOiBuLFxuICBtaW51dGU6IG4sXG59O1xuXG5jb25zdCBUSU1FX1dJVEhfU0VDT05EUyA9IHtcbiAgaG91cjogbixcbiAgbWludXRlOiBuLFxuICBzZWNvbmQ6IG4sXG59O1xuXG5jb25zdCBUSU1FX1dJVEhfU0hPUlRfT0ZGU0VUID0ge1xuICBob3VyOiBuLFxuICBtaW51dGU6IG4sXG4gIHNlY29uZDogbixcbiAgdGltZVpvbmVOYW1lOiBzLFxufTtcblxuY29uc3QgVElNRV9XSVRIX0xPTkdfT0ZGU0VUID0ge1xuICBob3VyOiBuLFxuICBtaW51dGU6IG4sXG4gIHNlY29uZDogbixcbiAgdGltZVpvbmVOYW1lOiBsLFxufTtcblxuY29uc3QgVElNRV8yNF9TSU1QTEUgPSB7XG4gIGhvdXI6IG4sXG4gIG1pbnV0ZTogbixcbiAgaG91ckN5Y2xlOiBcImgyM1wiLFxufTtcblxuY29uc3QgVElNRV8yNF9XSVRIX1NFQ09ORFMgPSB7XG4gIGhvdXI6IG4sXG4gIG1pbnV0ZTogbixcbiAgc2Vjb25kOiBuLFxuICBob3VyQ3ljbGU6IFwiaDIzXCIsXG59O1xuXG5jb25zdCBUSU1FXzI0X1dJVEhfU0hPUlRfT0ZGU0VUID0ge1xuICBob3VyOiBuLFxuICBtaW51dGU6IG4sXG4gIHNlY29uZDogbixcbiAgaG91ckN5Y2xlOiBcImgyM1wiLFxuICB0aW1lWm9uZU5hbWU6IHMsXG59O1xuXG5jb25zdCBUSU1FXzI0X1dJVEhfTE9OR19PRkZTRVQgPSB7XG4gIGhvdXI6IG4sXG4gIG1pbnV0ZTogbixcbiAgc2Vjb25kOiBuLFxuICBob3VyQ3ljbGU6IFwiaDIzXCIsXG4gIHRpbWVab25lTmFtZTogbCxcbn07XG5cbmNvbnN0IERBVEVUSU1FX1NIT1JUID0ge1xuICB5ZWFyOiBuLFxuICBtb250aDogbixcbiAgZGF5OiBuLFxuICBob3VyOiBuLFxuICBtaW51dGU6IG4sXG59O1xuXG5jb25zdCBEQVRFVElNRV9TSE9SVF9XSVRIX1NFQ09ORFMgPSB7XG4gIHllYXI6IG4sXG4gIG1vbnRoOiBuLFxuICBkYXk6IG4sXG4gIGhvdXI6IG4sXG4gIG1pbnV0ZTogbixcbiAgc2Vjb25kOiBuLFxufTtcblxuY29uc3QgREFURVRJTUVfTUVEID0ge1xuICB5ZWFyOiBuLFxuICBtb250aDogcyxcbiAgZGF5OiBuLFxuICBob3VyOiBuLFxuICBtaW51dGU6IG4sXG59O1xuXG5jb25zdCBEQVRFVElNRV9NRURfV0lUSF9TRUNPTkRTID0ge1xuICB5ZWFyOiBuLFxuICBtb250aDogcyxcbiAgZGF5OiBuLFxuICBob3VyOiBuLFxuICBtaW51dGU6IG4sXG4gIHNlY29uZDogbixcbn07XG5cbmNvbnN0IERBVEVUSU1FX01FRF9XSVRIX1dFRUtEQVkgPSB7XG4gIHllYXI6IG4sXG4gIG1vbnRoOiBzLFxuICBkYXk6IG4sXG4gIHdlZWtkYXk6IHMsXG4gIGhvdXI6IG4sXG4gIG1pbnV0ZTogbixcbn07XG5cbmNvbnN0IERBVEVUSU1FX0ZVTEwgPSB7XG4gIHllYXI6IG4sXG4gIG1vbnRoOiBsLFxuICBkYXk6IG4sXG4gIGhvdXI6IG4sXG4gIG1pbnV0ZTogbixcbiAgdGltZVpvbmVOYW1lOiBzLFxufTtcblxuY29uc3QgREFURVRJTUVfRlVMTF9XSVRIX1NFQ09ORFMgPSB7XG4gIHllYXI6IG4sXG4gIG1vbnRoOiBsLFxuICBkYXk6IG4sXG4gIGhvdXI6IG4sXG4gIG1pbnV0ZTogbixcbiAgc2Vjb25kOiBuLFxuICB0aW1lWm9uZU5hbWU6IHMsXG59O1xuXG5jb25zdCBEQVRFVElNRV9IVUdFID0ge1xuICB5ZWFyOiBuLFxuICBtb250aDogbCxcbiAgZGF5OiBuLFxuICB3ZWVrZGF5OiBsLFxuICBob3VyOiBuLFxuICBtaW51dGU6IG4sXG4gIHRpbWVab25lTmFtZTogbCxcbn07XG5cbmNvbnN0IERBVEVUSU1FX0hVR0VfV0lUSF9TRUNPTkRTID0ge1xuICB5ZWFyOiBuLFxuICBtb250aDogbCxcbiAgZGF5OiBuLFxuICB3ZWVrZGF5OiBsLFxuICBob3VyOiBuLFxuICBtaW51dGU6IG4sXG4gIHNlY29uZDogbixcbiAgdGltZVpvbmVOYW1lOiBsLFxufTtcblxuLyoqXG4gKiBAaW50ZXJmYWNlXG4gKi9cbmNsYXNzIFpvbmUge1xuICAvKipcbiAgICogVGhlIHR5cGUgb2Ygem9uZVxuICAgKiBAYWJzdHJhY3RcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIGdldCB0eXBlKCkge1xuICAgIHRocm93IG5ldyBab25lSXNBYnN0cmFjdEVycm9yKCk7XG4gIH1cblxuICAvKipcbiAgICogVGhlIG5hbWUgb2YgdGhpcyB6b25lLlxuICAgKiBAYWJzdHJhY3RcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIGdldCBuYW1lKCkge1xuICAgIHRocm93IG5ldyBab25lSXNBYnN0cmFjdEVycm9yKCk7XG4gIH1cblxuICBnZXQgaWFuYU5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHdoZXRoZXIgdGhlIG9mZnNldCBpcyBrbm93biB0byBiZSBmaXhlZCBmb3IgdGhlIHdob2xlIHllYXIuXG4gICAqIEBhYnN0cmFjdFxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICovXG4gIGdldCBpc1VuaXZlcnNhbCgpIHtcbiAgICB0aHJvdyBuZXcgWm9uZUlzQWJzdHJhY3RFcnJvcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIG9mZnNldCdzIGNvbW1vbiBuYW1lIChzdWNoIGFzIEVTVCkgYXQgdGhlIHNwZWNpZmllZCB0aW1lc3RhbXBcbiAgICogQGFic3RyYWN0XG4gICAqIEBwYXJhbSB7bnVtYmVyfSB0cyAtIEVwb2NoIG1pbGxpc2Vjb25kcyBmb3Igd2hpY2ggdG8gZ2V0IHRoZSBuYW1lXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIC0gT3B0aW9ucyB0byBhZmZlY3QgdGhlIGZvcm1hdFxuICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0cy5mb3JtYXQgLSBXaGF0IHN0eWxlIG9mIG9mZnNldCB0byByZXR1cm4uIEFjY2VwdHMgJ2xvbmcnIG9yICdzaG9ydCcuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRzLmxvY2FsZSAtIFdoYXQgbG9jYWxlIHRvIHJldHVybiB0aGUgb2Zmc2V0IG5hbWUgaW4uXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIG9mZnNldE5hbWUodHMsIG9wdHMpIHtcbiAgICB0aHJvdyBuZXcgWm9uZUlzQWJzdHJhY3RFcnJvcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIG9mZnNldCdzIHZhbHVlIGFzIGEgc3RyaW5nXG4gICAqIEBhYnN0cmFjdFxuICAgKiBAcGFyYW0ge251bWJlcn0gdHMgLSBFcG9jaCBtaWxsaXNlY29uZHMgZm9yIHdoaWNoIHRvIGdldCB0aGUgb2Zmc2V0XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBmb3JtYXQgLSBXaGF0IHN0eWxlIG9mIG9mZnNldCB0byByZXR1cm4uXG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgICBBY2NlcHRzICduYXJyb3cnLCAnc2hvcnQnLCBvciAndGVjaGllJy4gUmV0dXJuaW5nICcrNicsICcrMDY6MDAnLCBvciAnKzA2MDAnIHJlc3BlY3RpdmVseVxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICBmb3JtYXRPZmZzZXQodHMsIGZvcm1hdCkge1xuICAgIHRocm93IG5ldyBab25lSXNBYnN0cmFjdEVycm9yKCk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIHRoZSBvZmZzZXQgaW4gbWludXRlcyBmb3IgdGhpcyB6b25lIGF0IHRoZSBzcGVjaWZpZWQgdGltZXN0YW1wLlxuICAgKiBAYWJzdHJhY3RcbiAgICogQHBhcmFtIHtudW1iZXJ9IHRzIC0gRXBvY2ggbWlsbGlzZWNvbmRzIGZvciB3aGljaCB0byBjb21wdXRlIHRoZSBvZmZzZXRcbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgb2Zmc2V0KHRzKSB7XG4gICAgdGhyb3cgbmV3IFpvbmVJc0Fic3RyYWN0RXJyb3IoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gd2hldGhlciB0aGlzIFpvbmUgaXMgZXF1YWwgdG8gYW5vdGhlciB6b25lXG4gICAqIEBhYnN0cmFjdFxuICAgKiBAcGFyYW0ge1pvbmV9IG90aGVyWm9uZSAtIHRoZSB6b25lIHRvIGNvbXBhcmVcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIGVxdWFscyhvdGhlclpvbmUpIHtcbiAgICB0aHJvdyBuZXcgWm9uZUlzQWJzdHJhY3RFcnJvcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiB3aGV0aGVyIHRoaXMgWm9uZSBpcyB2YWxpZC5cbiAgICogQGFic3RyYWN0XG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKi9cbiAgZ2V0IGlzVmFsaWQoKSB7XG4gICAgdGhyb3cgbmV3IFpvbmVJc0Fic3RyYWN0RXJyb3IoKTtcbiAgfVxufVxuXG5sZXQgc2luZ2xldG9uJDEgPSBudWxsO1xuXG4vKipcbiAqIFJlcHJlc2VudHMgdGhlIGxvY2FsIHpvbmUgZm9yIHRoaXMgSmF2YVNjcmlwdCBlbnZpcm9ubWVudC5cbiAqIEBpbXBsZW1lbnRzIHtab25lfVxuICovXG5jbGFzcyBTeXN0ZW1ab25lIGV4dGVuZHMgWm9uZSB7XG4gIC8qKlxuICAgKiBHZXQgYSBzaW5nbGV0b24gaW5zdGFuY2Ugb2YgdGhlIGxvY2FsIHpvbmVcbiAgICogQHJldHVybiB7U3lzdGVtWm9uZX1cbiAgICovXG4gIHN0YXRpYyBnZXQgaW5zdGFuY2UoKSB7XG4gICAgaWYgKHNpbmdsZXRvbiQxID09PSBudWxsKSB7XG4gICAgICBzaW5nbGV0b24kMSA9IG5ldyBTeXN0ZW1ab25lKCk7XG4gICAgfVxuICAgIHJldHVybiBzaW5nbGV0b24kMTtcbiAgfVxuXG4gIC8qKiBAb3ZlcnJpZGUgKiovXG4gIGdldCB0eXBlKCkge1xuICAgIHJldHVybiBcInN5c3RlbVwiO1xuICB9XG5cbiAgLyoqIEBvdmVycmlkZSAqKi9cbiAgZ2V0IG5hbWUoKSB7XG4gICAgcmV0dXJuIG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KCkucmVzb2x2ZWRPcHRpb25zKCkudGltZVpvbmU7XG4gIH1cblxuICAvKiogQG92ZXJyaWRlICoqL1xuICBnZXQgaXNVbml2ZXJzYWwoKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLyoqIEBvdmVycmlkZSAqKi9cbiAgb2Zmc2V0TmFtZSh0cywgeyBmb3JtYXQsIGxvY2FsZSB9KSB7XG4gICAgcmV0dXJuIHBhcnNlWm9uZUluZm8odHMsIGZvcm1hdCwgbG9jYWxlKTtcbiAgfVxuXG4gIC8qKiBAb3ZlcnJpZGUgKiovXG4gIGZvcm1hdE9mZnNldCh0cywgZm9ybWF0KSB7XG4gICAgcmV0dXJuIGZvcm1hdE9mZnNldCh0aGlzLm9mZnNldCh0cyksIGZvcm1hdCk7XG4gIH1cblxuICAvKiogQG92ZXJyaWRlICoqL1xuICBvZmZzZXQodHMpIHtcbiAgICByZXR1cm4gLW5ldyBEYXRlKHRzKS5nZXRUaW1lem9uZU9mZnNldCgpO1xuICB9XG5cbiAgLyoqIEBvdmVycmlkZSAqKi9cbiAgZXF1YWxzKG90aGVyWm9uZSkge1xuICAgIHJldHVybiBvdGhlclpvbmUudHlwZSA9PT0gXCJzeXN0ZW1cIjtcbiAgfVxuXG4gIC8qKiBAb3ZlcnJpZGUgKiovXG4gIGdldCBpc1ZhbGlkKCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59XG5cbmxldCBkdGZDYWNoZSA9IHt9O1xuZnVuY3Rpb24gbWFrZURURih6b25lKSB7XG4gIGlmICghZHRmQ2FjaGVbem9uZV0pIHtcbiAgICBkdGZDYWNoZVt6b25lXSA9IG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KFwiZW4tVVNcIiwge1xuICAgICAgaG91cjEyOiBmYWxzZSxcbiAgICAgIHRpbWVab25lOiB6b25lLFxuICAgICAgeWVhcjogXCJudW1lcmljXCIsXG4gICAgICBtb250aDogXCIyLWRpZ2l0XCIsXG4gICAgICBkYXk6IFwiMi1kaWdpdFwiLFxuICAgICAgaG91cjogXCIyLWRpZ2l0XCIsXG4gICAgICBtaW51dGU6IFwiMi1kaWdpdFwiLFxuICAgICAgc2Vjb25kOiBcIjItZGlnaXRcIixcbiAgICAgIGVyYTogXCJzaG9ydFwiLFxuICAgIH0pO1xuICB9XG4gIHJldHVybiBkdGZDYWNoZVt6b25lXTtcbn1cblxuY29uc3QgdHlwZVRvUG9zID0ge1xuICB5ZWFyOiAwLFxuICBtb250aDogMSxcbiAgZGF5OiAyLFxuICBlcmE6IDMsXG4gIGhvdXI6IDQsXG4gIG1pbnV0ZTogNSxcbiAgc2Vjb25kOiA2LFxufTtcblxuZnVuY3Rpb24gaGFja3lPZmZzZXQoZHRmLCBkYXRlKSB7XG4gIGNvbnN0IGZvcm1hdHRlZCA9IGR0Zi5mb3JtYXQoZGF0ZSkucmVwbGFjZSgvXFx1MjAwRS9nLCBcIlwiKSxcbiAgICBwYXJzZWQgPSAvKFxcZCspXFwvKFxcZCspXFwvKFxcZCspIChBRHxCQyksPyAoXFxkKyk6KFxcZCspOihcXGQrKS8uZXhlYyhmb3JtYXR0ZWQpLFxuICAgIFssIGZNb250aCwgZkRheSwgZlllYXIsIGZhZE9yQmMsIGZIb3VyLCBmTWludXRlLCBmU2Vjb25kXSA9IHBhcnNlZDtcbiAgcmV0dXJuIFtmWWVhciwgZk1vbnRoLCBmRGF5LCBmYWRPckJjLCBmSG91ciwgZk1pbnV0ZSwgZlNlY29uZF07XG59XG5cbmZ1bmN0aW9uIHBhcnRzT2Zmc2V0KGR0ZiwgZGF0ZSkge1xuICBjb25zdCBmb3JtYXR0ZWQgPSBkdGYuZm9ybWF0VG9QYXJ0cyhkYXRlKTtcbiAgY29uc3QgZmlsbGVkID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZm9ybWF0dGVkLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgeyB0eXBlLCB2YWx1ZSB9ID0gZm9ybWF0dGVkW2ldO1xuICAgIGNvbnN0IHBvcyA9IHR5cGVUb1Bvc1t0eXBlXTtcblxuICAgIGlmICh0eXBlID09PSBcImVyYVwiKSB7XG4gICAgICBmaWxsZWRbcG9zXSA9IHZhbHVlO1xuICAgIH0gZWxzZSBpZiAoIWlzVW5kZWZpbmVkKHBvcykpIHtcbiAgICAgIGZpbGxlZFtwb3NdID0gcGFyc2VJbnQodmFsdWUsIDEwKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZpbGxlZDtcbn1cblxubGV0IGlhbmFab25lQ2FjaGUgPSB7fTtcbi8qKlxuICogQSB6b25lIGlkZW50aWZpZWQgYnkgYW4gSUFOQSBpZGVudGlmaWVyLCBsaWtlIEFtZXJpY2EvTmV3X1lvcmtcbiAqIEBpbXBsZW1lbnRzIHtab25lfVxuICovXG5jbGFzcyBJQU5BWm9uZSBleHRlbmRzIFpvbmUge1xuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgLSBab25lIG5hbWVcbiAgICogQHJldHVybiB7SUFOQVpvbmV9XG4gICAqL1xuICBzdGF0aWMgY3JlYXRlKG5hbWUpIHtcbiAgICBpZiAoIWlhbmFab25lQ2FjaGVbbmFtZV0pIHtcbiAgICAgIGlhbmFab25lQ2FjaGVbbmFtZV0gPSBuZXcgSUFOQVpvbmUobmFtZSk7XG4gICAgfVxuICAgIHJldHVybiBpYW5hWm9uZUNhY2hlW25hbWVdO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlc2V0IGxvY2FsIGNhY2hlcy4gU2hvdWxkIG9ubHkgYmUgbmVjZXNzYXJ5IGluIHRlc3Rpbmcgc2NlbmFyaW9zLlxuICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgKi9cbiAgc3RhdGljIHJlc2V0Q2FjaGUoKSB7XG4gICAgaWFuYVpvbmVDYWNoZSA9IHt9O1xuICAgIGR0ZkNhY2hlID0ge307XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB3aGV0aGVyIHRoZSBwcm92aWRlZCBzdHJpbmcgaXMgYSB2YWxpZCBzcGVjaWZpZXIuIFRoaXMgb25seSBjaGVja3MgdGhlIHN0cmluZydzIGZvcm1hdCwgbm90IHRoYXQgdGhlIHNwZWNpZmllciBpZGVudGlmaWVzIGEga25vd24gem9uZTsgc2VlIGlzVmFsaWRab25lIGZvciB0aGF0LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gcyAtIFRoZSBzdHJpbmcgdG8gY2hlY2sgdmFsaWRpdHkgb25cbiAgICogQGV4YW1wbGUgSUFOQVpvbmUuaXNWYWxpZFNwZWNpZmllcihcIkFtZXJpY2EvTmV3X1lvcmtcIikgLy89PiB0cnVlXG4gICAqIEBleGFtcGxlIElBTkFab25lLmlzVmFsaWRTcGVjaWZpZXIoXCJTcG9ydH5+YmxvcnBcIikgLy89PiBmYWxzZVxuICAgKiBAZGVwcmVjYXRlZCBUaGlzIG1ldGhvZCByZXR1cm5zIGZhbHNlIGZvciBzb21lIHZhbGlkIElBTkEgbmFtZXMuIFVzZSBpc1ZhbGlkWm9uZSBpbnN0ZWFkLlxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgc3RhdGljIGlzVmFsaWRTcGVjaWZpZXIocykge1xuICAgIHJldHVybiB0aGlzLmlzVmFsaWRab25lKHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgd2hldGhlciB0aGUgcHJvdmlkZWQgc3RyaW5nIGlkZW50aWZpZXMgYSByZWFsIHpvbmVcbiAgICogQHBhcmFtIHtzdHJpbmd9IHpvbmUgLSBUaGUgc3RyaW5nIHRvIGNoZWNrXG4gICAqIEBleGFtcGxlIElBTkFab25lLmlzVmFsaWRab25lKFwiQW1lcmljYS9OZXdfWW9ya1wiKSAvLz0+IHRydWVcbiAgICogQGV4YW1wbGUgSUFOQVpvbmUuaXNWYWxpZFpvbmUoXCJGYW50YXNpYS9DYXN0bGVcIikgLy89PiBmYWxzZVxuICAgKiBAZXhhbXBsZSBJQU5BWm9uZS5pc1ZhbGlkWm9uZShcIlNwb3J0fn5ibG9ycFwiKSAvLz0+IGZhbHNlXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBzdGF0aWMgaXNWYWxpZFpvbmUoem9uZSkge1xuICAgIGlmICghem9uZSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQoXCJlbi1VU1wiLCB7IHRpbWVab25lOiB6b25lIH0pLmZvcm1hdCgpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICBzdXBlcigpO1xuICAgIC8qKiBAcHJpdmF0ZSAqKi9cbiAgICB0aGlzLnpvbmVOYW1lID0gbmFtZTtcbiAgICAvKiogQHByaXZhdGUgKiovXG4gICAgdGhpcy52YWxpZCA9IElBTkFab25lLmlzVmFsaWRab25lKG5hbWUpO1xuICB9XG5cbiAgLyoqIEBvdmVycmlkZSAqKi9cbiAgZ2V0IHR5cGUoKSB7XG4gICAgcmV0dXJuIFwiaWFuYVwiO1xuICB9XG5cbiAgLyoqIEBvdmVycmlkZSAqKi9cbiAgZ2V0IG5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuem9uZU5hbWU7XG4gIH1cblxuICAvKiogQG92ZXJyaWRlICoqL1xuICBnZXQgaXNVbml2ZXJzYWwoKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLyoqIEBvdmVycmlkZSAqKi9cbiAgb2Zmc2V0TmFtZSh0cywgeyBmb3JtYXQsIGxvY2FsZSB9KSB7XG4gICAgcmV0dXJuIHBhcnNlWm9uZUluZm8odHMsIGZvcm1hdCwgbG9jYWxlLCB0aGlzLm5hbWUpO1xuICB9XG5cbiAgLyoqIEBvdmVycmlkZSAqKi9cbiAgZm9ybWF0T2Zmc2V0KHRzLCBmb3JtYXQpIHtcbiAgICByZXR1cm4gZm9ybWF0T2Zmc2V0KHRoaXMub2Zmc2V0KHRzKSwgZm9ybWF0KTtcbiAgfVxuXG4gIC8qKiBAb3ZlcnJpZGUgKiovXG4gIG9mZnNldCh0cykge1xuICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSh0cyk7XG5cbiAgICBpZiAoaXNOYU4oZGF0ZSkpIHJldHVybiBOYU47XG5cbiAgICBjb25zdCBkdGYgPSBtYWtlRFRGKHRoaXMubmFtZSk7XG4gICAgbGV0IFt5ZWFyLCBtb250aCwgZGF5LCBhZE9yQmMsIGhvdXIsIG1pbnV0ZSwgc2Vjb25kXSA9IGR0Zi5mb3JtYXRUb1BhcnRzXG4gICAgICA/IHBhcnRzT2Zmc2V0KGR0ZiwgZGF0ZSlcbiAgICAgIDogaGFja3lPZmZzZXQoZHRmLCBkYXRlKTtcblxuICAgIGlmIChhZE9yQmMgPT09IFwiQkNcIikge1xuICAgICAgeWVhciA9IC1NYXRoLmFicyh5ZWFyKSArIDE7XG4gICAgfVxuXG4gICAgLy8gYmVjYXVzZSB3ZSdyZSB1c2luZyBob3VyMTIgYW5kIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTEwMjU1NjQmY2FuPTImcT0lMjIyNCUzQTAwJTIyJTIwZGF0ZXRpbWVmb3JtYXRcbiAgICBjb25zdCBhZGp1c3RlZEhvdXIgPSBob3VyID09PSAyNCA/IDAgOiBob3VyO1xuXG4gICAgY29uc3QgYXNVVEMgPSBvYmpUb0xvY2FsVFMoe1xuICAgICAgeWVhcixcbiAgICAgIG1vbnRoLFxuICAgICAgZGF5LFxuICAgICAgaG91cjogYWRqdXN0ZWRIb3VyLFxuICAgICAgbWludXRlLFxuICAgICAgc2Vjb25kLFxuICAgICAgbWlsbGlzZWNvbmQ6IDAsXG4gICAgfSk7XG5cbiAgICBsZXQgYXNUUyA9ICtkYXRlO1xuICAgIGNvbnN0IG92ZXIgPSBhc1RTICUgMTAwMDtcbiAgICBhc1RTIC09IG92ZXIgPj0gMCA/IG92ZXIgOiAxMDAwICsgb3ZlcjtcbiAgICByZXR1cm4gKGFzVVRDIC0gYXNUUykgLyAoNjAgKiAxMDAwKTtcbiAgfVxuXG4gIC8qKiBAb3ZlcnJpZGUgKiovXG4gIGVxdWFscyhvdGhlclpvbmUpIHtcbiAgICByZXR1cm4gb3RoZXJab25lLnR5cGUgPT09IFwiaWFuYVwiICYmIG90aGVyWm9uZS5uYW1lID09PSB0aGlzLm5hbWU7XG4gIH1cblxuICAvKiogQG92ZXJyaWRlICoqL1xuICBnZXQgaXNWYWxpZCgpIHtcbiAgICByZXR1cm4gdGhpcy52YWxpZDtcbiAgfVxufVxuXG4vLyB0b2RvIC0gcmVtYXAgY2FjaGluZ1xuXG5sZXQgaW50bExGQ2FjaGUgPSB7fTtcbmZ1bmN0aW9uIGdldENhY2hlZExGKGxvY1N0cmluZywgb3B0cyA9IHt9KSB7XG4gIGNvbnN0IGtleSA9IEpTT04uc3RyaW5naWZ5KFtsb2NTdHJpbmcsIG9wdHNdKTtcbiAgbGV0IGR0ZiA9IGludGxMRkNhY2hlW2tleV07XG4gIGlmICghZHRmKSB7XG4gICAgZHRmID0gbmV3IEludGwuTGlzdEZvcm1hdChsb2NTdHJpbmcsIG9wdHMpO1xuICAgIGludGxMRkNhY2hlW2tleV0gPSBkdGY7XG4gIH1cbiAgcmV0dXJuIGR0Zjtcbn1cblxubGV0IGludGxEVENhY2hlID0ge307XG5mdW5jdGlvbiBnZXRDYWNoZWREVEYobG9jU3RyaW5nLCBvcHRzID0ge30pIHtcbiAgY29uc3Qga2V5ID0gSlNPTi5zdHJpbmdpZnkoW2xvY1N0cmluZywgb3B0c10pO1xuICBsZXQgZHRmID0gaW50bERUQ2FjaGVba2V5XTtcbiAgaWYgKCFkdGYpIHtcbiAgICBkdGYgPSBuZXcgSW50bC5EYXRlVGltZUZvcm1hdChsb2NTdHJpbmcsIG9wdHMpO1xuICAgIGludGxEVENhY2hlW2tleV0gPSBkdGY7XG4gIH1cbiAgcmV0dXJuIGR0Zjtcbn1cblxubGV0IGludGxOdW1DYWNoZSA9IHt9O1xuZnVuY3Rpb24gZ2V0Q2FjaGVkSU5GKGxvY1N0cmluZywgb3B0cyA9IHt9KSB7XG4gIGNvbnN0IGtleSA9IEpTT04uc3RyaW5naWZ5KFtsb2NTdHJpbmcsIG9wdHNdKTtcbiAgbGV0IGluZiA9IGludGxOdW1DYWNoZVtrZXldO1xuICBpZiAoIWluZikge1xuICAgIGluZiA9IG5ldyBJbnRsLk51bWJlckZvcm1hdChsb2NTdHJpbmcsIG9wdHMpO1xuICAgIGludGxOdW1DYWNoZVtrZXldID0gaW5mO1xuICB9XG4gIHJldHVybiBpbmY7XG59XG5cbmxldCBpbnRsUmVsQ2FjaGUgPSB7fTtcbmZ1bmN0aW9uIGdldENhY2hlZFJURihsb2NTdHJpbmcsIG9wdHMgPSB7fSkge1xuICBjb25zdCB7IGJhc2UsIC4uLmNhY2hlS2V5T3B0cyB9ID0gb3B0czsgLy8gZXhjbHVkZSBgYmFzZWAgZnJvbSB0aGUgb3B0aW9uc1xuICBjb25zdCBrZXkgPSBKU09OLnN0cmluZ2lmeShbbG9jU3RyaW5nLCBjYWNoZUtleU9wdHNdKTtcbiAgbGV0IGluZiA9IGludGxSZWxDYWNoZVtrZXldO1xuICBpZiAoIWluZikge1xuICAgIGluZiA9IG5ldyBJbnRsLlJlbGF0aXZlVGltZUZvcm1hdChsb2NTdHJpbmcsIG9wdHMpO1xuICAgIGludGxSZWxDYWNoZVtrZXldID0gaW5mO1xuICB9XG4gIHJldHVybiBpbmY7XG59XG5cbmxldCBzeXNMb2NhbGVDYWNoZSA9IG51bGw7XG5mdW5jdGlvbiBzeXN0ZW1Mb2NhbGUoKSB7XG4gIGlmIChzeXNMb2NhbGVDYWNoZSkge1xuICAgIHJldHVybiBzeXNMb2NhbGVDYWNoZTtcbiAgfSBlbHNlIHtcbiAgICBzeXNMb2NhbGVDYWNoZSA9IG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KCkucmVzb2x2ZWRPcHRpb25zKCkubG9jYWxlO1xuICAgIHJldHVybiBzeXNMb2NhbGVDYWNoZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBwYXJzZUxvY2FsZVN0cmluZyhsb2NhbGVTdHIpIHtcbiAgLy8gSSByZWFsbHkgd2FudCB0byBhdm9pZCB3cml0aW5nIGEgQkNQIDQ3IHBhcnNlclxuICAvLyBzZWUsIGUuZy4gaHR0cHM6Ly9naXRodWIuY29tL3dvb29ybS9iY3AtNDdcbiAgLy8gSW5zdGVhZCwgd2UnbGwgZG8gdGhpczpcblxuICAvLyBhKSBpZiB0aGUgc3RyaW5nIGhhcyBubyAtdSBleHRlbnNpb25zLCBqdXN0IGxlYXZlIGl0IGFsb25lXG4gIC8vIGIpIGlmIGl0IGRvZXMsIHVzZSBJbnRsIHRvIHJlc29sdmUgZXZlcnl0aGluZ1xuICAvLyBjKSBpZiBJbnRsIGZhaWxzLCB0cnkgYWdhaW4gd2l0aG91dCB0aGUgLXVcblxuICAvLyBwcml2YXRlIHN1YnRhZ3MgYW5kIHVuaWNvZGUgc3VidGFncyBoYXZlIG9yZGVyaW5nIHJlcXVpcmVtZW50cyxcbiAgLy8gYW5kIHdlJ3JlIG5vdCBwcm9wZXJseSBwYXJzaW5nIHRoaXMsIHNvIGp1c3Qgc3RyaXAgb3V0IHRoZVxuICAvLyBwcml2YXRlIG9uZXMgaWYgdGhleSBleGlzdC5cbiAgY29uc3QgeEluZGV4ID0gbG9jYWxlU3RyLmluZGV4T2YoXCIteC1cIik7XG4gIGlmICh4SW5kZXggIT09IC0xKSB7XG4gICAgbG9jYWxlU3RyID0gbG9jYWxlU3RyLnN1YnN0cmluZygwLCB4SW5kZXgpO1xuICB9XG5cbiAgY29uc3QgdUluZGV4ID0gbG9jYWxlU3RyLmluZGV4T2YoXCItdS1cIik7XG4gIGlmICh1SW5kZXggPT09IC0xKSB7XG4gICAgcmV0dXJuIFtsb2NhbGVTdHJdO1xuICB9IGVsc2Uge1xuICAgIGxldCBvcHRpb25zO1xuICAgIGxldCBzZWxlY3RlZFN0cjtcbiAgICB0cnkge1xuICAgICAgb3B0aW9ucyA9IGdldENhY2hlZERURihsb2NhbGVTdHIpLnJlc29sdmVkT3B0aW9ucygpO1xuICAgICAgc2VsZWN0ZWRTdHIgPSBsb2NhbGVTdHI7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc3Qgc21hbGxlciA9IGxvY2FsZVN0ci5zdWJzdHJpbmcoMCwgdUluZGV4KTtcbiAgICAgIG9wdGlvbnMgPSBnZXRDYWNoZWREVEYoc21hbGxlcikucmVzb2x2ZWRPcHRpb25zKCk7XG4gICAgICBzZWxlY3RlZFN0ciA9IHNtYWxsZXI7XG4gICAgfVxuXG4gICAgY29uc3QgeyBudW1iZXJpbmdTeXN0ZW0sIGNhbGVuZGFyIH0gPSBvcHRpb25zO1xuICAgIHJldHVybiBbc2VsZWN0ZWRTdHIsIG51bWJlcmluZ1N5c3RlbSwgY2FsZW5kYXJdO1xuICB9XG59XG5cbmZ1bmN0aW9uIGludGxDb25maWdTdHJpbmcobG9jYWxlU3RyLCBudW1iZXJpbmdTeXN0ZW0sIG91dHB1dENhbGVuZGFyKSB7XG4gIGlmIChvdXRwdXRDYWxlbmRhciB8fCBudW1iZXJpbmdTeXN0ZW0pIHtcbiAgICBpZiAoIWxvY2FsZVN0ci5pbmNsdWRlcyhcIi11LVwiKSkge1xuICAgICAgbG9jYWxlU3RyICs9IFwiLXVcIjtcbiAgICB9XG5cbiAgICBpZiAob3V0cHV0Q2FsZW5kYXIpIHtcbiAgICAgIGxvY2FsZVN0ciArPSBgLWNhLSR7b3V0cHV0Q2FsZW5kYXJ9YDtcbiAgICB9XG5cbiAgICBpZiAobnVtYmVyaW5nU3lzdGVtKSB7XG4gICAgICBsb2NhbGVTdHIgKz0gYC1udS0ke251bWJlcmluZ1N5c3RlbX1gO1xuICAgIH1cbiAgICByZXR1cm4gbG9jYWxlU3RyO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBsb2NhbGVTdHI7XG4gIH1cbn1cblxuZnVuY3Rpb24gbWFwTW9udGhzKGYpIHtcbiAgY29uc3QgbXMgPSBbXTtcbiAgZm9yIChsZXQgaSA9IDE7IGkgPD0gMTI7IGkrKykge1xuICAgIGNvbnN0IGR0ID0gRGF0ZVRpbWUudXRjKDIwMTYsIGksIDEpO1xuICAgIG1zLnB1c2goZihkdCkpO1xuICB9XG4gIHJldHVybiBtcztcbn1cblxuZnVuY3Rpb24gbWFwV2Vla2RheXMoZikge1xuICBjb25zdCBtcyA9IFtdO1xuICBmb3IgKGxldCBpID0gMTsgaSA8PSA3OyBpKyspIHtcbiAgICBjb25zdCBkdCA9IERhdGVUaW1lLnV0YygyMDE2LCAxMSwgMTMgKyBpKTtcbiAgICBtcy5wdXNoKGYoZHQpKTtcbiAgfVxuICByZXR1cm4gbXM7XG59XG5cbmZ1bmN0aW9uIGxpc3RTdHVmZihsb2MsIGxlbmd0aCwgZGVmYXVsdE9LLCBlbmdsaXNoRm4sIGludGxGbikge1xuICBjb25zdCBtb2RlID0gbG9jLmxpc3RpbmdNb2RlKGRlZmF1bHRPSyk7XG5cbiAgaWYgKG1vZGUgPT09IFwiZXJyb3JcIikge1xuICAgIHJldHVybiBudWxsO1xuICB9IGVsc2UgaWYgKG1vZGUgPT09IFwiZW5cIikge1xuICAgIHJldHVybiBlbmdsaXNoRm4obGVuZ3RoKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gaW50bEZuKGxlbmd0aCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gc3VwcG9ydHNGYXN0TnVtYmVycyhsb2MpIHtcbiAgaWYgKGxvYy5udW1iZXJpbmdTeXN0ZW0gJiYgbG9jLm51bWJlcmluZ1N5c3RlbSAhPT0gXCJsYXRuXCIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIChcbiAgICAgIGxvYy5udW1iZXJpbmdTeXN0ZW0gPT09IFwibGF0blwiIHx8XG4gICAgICAhbG9jLmxvY2FsZSB8fFxuICAgICAgbG9jLmxvY2FsZS5zdGFydHNXaXRoKFwiZW5cIikgfHxcbiAgICAgIG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KGxvYy5pbnRsKS5yZXNvbHZlZE9wdGlvbnMoKS5udW1iZXJpbmdTeXN0ZW0gPT09IFwibGF0blwiXG4gICAgKTtcbiAgfVxufVxuXG4vKipcbiAqIEBwcml2YXRlXG4gKi9cblxuY2xhc3MgUG9seU51bWJlckZvcm1hdHRlciB7XG4gIGNvbnN0cnVjdG9yKGludGwsIGZvcmNlU2ltcGxlLCBvcHRzKSB7XG4gICAgdGhpcy5wYWRUbyA9IG9wdHMucGFkVG8gfHwgMDtcbiAgICB0aGlzLmZsb29yID0gb3B0cy5mbG9vciB8fCBmYWxzZTtcblxuICAgIGNvbnN0IHsgcGFkVG8sIGZsb29yLCAuLi5vdGhlck9wdHMgfSA9IG9wdHM7XG5cbiAgICBpZiAoIWZvcmNlU2ltcGxlIHx8IE9iamVjdC5rZXlzKG90aGVyT3B0cykubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgaW50bE9wdHMgPSB7IHVzZUdyb3VwaW5nOiBmYWxzZSwgLi4ub3B0cyB9O1xuICAgICAgaWYgKG9wdHMucGFkVG8gPiAwKSBpbnRsT3B0cy5taW5pbXVtSW50ZWdlckRpZ2l0cyA9IG9wdHMucGFkVG87XG4gICAgICB0aGlzLmluZiA9IGdldENhY2hlZElORihpbnRsLCBpbnRsT3B0cyk7XG4gICAgfVxuICB9XG5cbiAgZm9ybWF0KGkpIHtcbiAgICBpZiAodGhpcy5pbmYpIHtcbiAgICAgIGNvbnN0IGZpeGVkID0gdGhpcy5mbG9vciA/IE1hdGguZmxvb3IoaSkgOiBpO1xuICAgICAgcmV0dXJuIHRoaXMuaW5mLmZvcm1hdChmaXhlZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIHRvIG1hdGNoIHRoZSBicm93c2VyJ3MgbnVtYmVyZm9ybWF0dGVyIGRlZmF1bHRzXG4gICAgICBjb25zdCBmaXhlZCA9IHRoaXMuZmxvb3IgPyBNYXRoLmZsb29yKGkpIDogcm91bmRUbyhpLCAzKTtcbiAgICAgIHJldHVybiBwYWRTdGFydChmaXhlZCwgdGhpcy5wYWRUbyk7XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogQHByaXZhdGVcbiAqL1xuXG5jbGFzcyBQb2x5RGF0ZUZvcm1hdHRlciB7XG4gIGNvbnN0cnVjdG9yKGR0LCBpbnRsLCBvcHRzKSB7XG4gICAgdGhpcy5vcHRzID0gb3B0cztcblxuICAgIGxldCB6ID0gdW5kZWZpbmVkO1xuICAgIGlmIChkdC56b25lLmlzVW5pdmVyc2FsKSB7XG4gICAgICAvLyBVVEMtOCBvciBFdGMvVVRDLTggYXJlIG5vdCBwYXJ0IG9mIHR6ZGF0YSwgb25seSBFdGMvR01UKzggYW5kIHRoZSBsaWtlLlxuICAgICAgLy8gVGhhdCBpcyB3aHkgZml4ZWQtb2Zmc2V0IFRaIGlzIHNldCB0byB0aGF0IHVubGVzcyBpdCBpczpcbiAgICAgIC8vIDEuIFJlcHJlc2VudGluZyBvZmZzZXQgMCB3aGVuIFVUQyBpcyB1c2VkIHRvIG1haW50YWluIHByZXZpb3VzIGJlaGF2aW9yIGFuZCBkb2VzIG5vdCBiZWNvbWUgR01ULlxuICAgICAgLy8gMi4gVW5zdXBwb3J0ZWQgYnkgdGhlIGJyb3dzZXI6XG4gICAgICAvLyAgICAtIHNvbWUgZG8gbm90IHN1cHBvcnQgRXRjL1xuICAgICAgLy8gICAgLSA8IEV0Yy9HTVQtMTQsID4gRXRjL0dNVCsxMiwgYW5kIDMwLW1pbnV0ZSBvciA0NS1taW51dGUgb2Zmc2V0cyBhcmUgbm90IHBhcnQgb2YgdHpkYXRhXG4gICAgICBjb25zdCBnbXRPZmZzZXQgPSAtMSAqIChkdC5vZmZzZXQgLyA2MCk7XG4gICAgICBjb25zdCBvZmZzZXRaID0gZ210T2Zmc2V0ID49IDAgPyBgRXRjL0dNVCske2dtdE9mZnNldH1gIDogYEV0Yy9HTVQke2dtdE9mZnNldH1gO1xuICAgICAgaWYgKGR0Lm9mZnNldCAhPT0gMCAmJiBJQU5BWm9uZS5jcmVhdGUob2Zmc2V0WikudmFsaWQpIHtcbiAgICAgICAgeiA9IG9mZnNldFo7XG4gICAgICAgIHRoaXMuZHQgPSBkdDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIE5vdCBhbGwgZml4ZWQtb2Zmc2V0IHpvbmVzIGxpa2UgRXRjLys0OjMwIGFyZSBwcmVzZW50IGluIHR6ZGF0YS5cbiAgICAgICAgLy8gU28gd2UgaGF2ZSB0byBtYWtlIGRvLiBUd28gY2FzZXM6XG4gICAgICAgIC8vIDEuIFRoZSBmb3JtYXQgb3B0aW9ucyB0ZWxsIHVzIHRvIHNob3cgdGhlIHpvbmUuIFdlIGNhbid0IGRvIHRoYXQsIHNvIHRoZSBiZXN0XG4gICAgICAgIC8vIHdlIGNhbiBkbyBpcyBmb3JtYXQgdGhlIGRhdGUgaW4gVVRDLlxuICAgICAgICAvLyAyLiBUaGUgZm9ybWF0IG9wdGlvbnMgZG9uJ3QgdGVsbCB1cyB0byBzaG93IHRoZSB6b25lLiBUaGVuIHdlIGNhbiBhZGp1c3QgdGhlbVxuICAgICAgICAvLyB0aGUgdGltZSBhbmQgdGVsbCB0aGUgZm9ybWF0dGVyIHRvIHNob3cgaXQgdG8gdXMgaW4gVVRDLCBzbyB0aGF0IHRoZSB0aW1lIGlzIHJpZ2h0XG4gICAgICAgIC8vIGFuZCB0aGUgYmFkIHpvbmUgZG9lc24ndCBzaG93IHVwLlxuICAgICAgICB6ID0gXCJVVENcIjtcbiAgICAgICAgaWYgKG9wdHMudGltZVpvbmVOYW1lKSB7XG4gICAgICAgICAgdGhpcy5kdCA9IGR0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuZHQgPSBkdC5vZmZzZXQgPT09IDAgPyBkdCA6IERhdGVUaW1lLmZyb21NaWxsaXMoZHQudHMgKyBkdC5vZmZzZXQgKiA2MCAqIDEwMDApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChkdC56b25lLnR5cGUgPT09IFwic3lzdGVtXCIpIHtcbiAgICAgIHRoaXMuZHQgPSBkdDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kdCA9IGR0O1xuICAgICAgeiA9IGR0LnpvbmUubmFtZTtcbiAgICB9XG5cbiAgICBjb25zdCBpbnRsT3B0cyA9IHsgLi4udGhpcy5vcHRzIH07XG4gICAgaW50bE9wdHMudGltZVpvbmUgPSBpbnRsT3B0cy50aW1lWm9uZSB8fCB6O1xuICAgIHRoaXMuZHRmID0gZ2V0Q2FjaGVkRFRGKGludGwsIGludGxPcHRzKTtcbiAgfVxuXG4gIGZvcm1hdCgpIHtcbiAgICByZXR1cm4gdGhpcy5kdGYuZm9ybWF0KHRoaXMuZHQudG9KU0RhdGUoKSk7XG4gIH1cblxuICBmb3JtYXRUb1BhcnRzKCkge1xuICAgIHJldHVybiB0aGlzLmR0Zi5mb3JtYXRUb1BhcnRzKHRoaXMuZHQudG9KU0RhdGUoKSk7XG4gIH1cblxuICByZXNvbHZlZE9wdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZHRmLnJlc29sdmVkT3B0aW9ucygpO1xuICB9XG59XG5cbi8qKlxuICogQHByaXZhdGVcbiAqL1xuY2xhc3MgUG9seVJlbEZvcm1hdHRlciB7XG4gIGNvbnN0cnVjdG9yKGludGwsIGlzRW5nbGlzaCwgb3B0cykge1xuICAgIHRoaXMub3B0cyA9IHsgc3R5bGU6IFwibG9uZ1wiLCAuLi5vcHRzIH07XG4gICAgaWYgKCFpc0VuZ2xpc2ggJiYgaGFzUmVsYXRpdmUoKSkge1xuICAgICAgdGhpcy5ydGYgPSBnZXRDYWNoZWRSVEYoaW50bCwgb3B0cyk7XG4gICAgfVxuICB9XG5cbiAgZm9ybWF0KGNvdW50LCB1bml0KSB7XG4gICAgaWYgKHRoaXMucnRmKSB7XG4gICAgICByZXR1cm4gdGhpcy5ydGYuZm9ybWF0KGNvdW50LCB1bml0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZvcm1hdFJlbGF0aXZlVGltZSh1bml0LCBjb3VudCwgdGhpcy5vcHRzLm51bWVyaWMsIHRoaXMub3B0cy5zdHlsZSAhPT0gXCJsb25nXCIpO1xuICAgIH1cbiAgfVxuXG4gIGZvcm1hdFRvUGFydHMoY291bnQsIHVuaXQpIHtcbiAgICBpZiAodGhpcy5ydGYpIHtcbiAgICAgIHJldHVybiB0aGlzLnJ0Zi5mb3JtYXRUb1BhcnRzKGNvdW50LCB1bml0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIEBwcml2YXRlXG4gKi9cblxuY2xhc3MgTG9jYWxlIHtcbiAgc3RhdGljIGZyb21PcHRzKG9wdHMpIHtcbiAgICByZXR1cm4gTG9jYWxlLmNyZWF0ZShvcHRzLmxvY2FsZSwgb3B0cy5udW1iZXJpbmdTeXN0ZW0sIG9wdHMub3V0cHV0Q2FsZW5kYXIsIG9wdHMuZGVmYXVsdFRvRU4pO1xuICB9XG5cbiAgc3RhdGljIGNyZWF0ZShsb2NhbGUsIG51bWJlcmluZ1N5c3RlbSwgb3V0cHV0Q2FsZW5kYXIsIGRlZmF1bHRUb0VOID0gZmFsc2UpIHtcbiAgICBjb25zdCBzcGVjaWZpZWRMb2NhbGUgPSBsb2NhbGUgfHwgU2V0dGluZ3MuZGVmYXVsdExvY2FsZTtcbiAgICAvLyB0aGUgc3lzdGVtIGxvY2FsZSBpcyB1c2VmdWwgZm9yIGh1bWFuIHJlYWRhYmxlIHN0cmluZ3MgYnV0IGFubm95aW5nIGZvciBwYXJzaW5nL2Zvcm1hdHRpbmcga25vd24gZm9ybWF0c1xuICAgIGNvbnN0IGxvY2FsZVIgPSBzcGVjaWZpZWRMb2NhbGUgfHwgKGRlZmF1bHRUb0VOID8gXCJlbi1VU1wiIDogc3lzdGVtTG9jYWxlKCkpO1xuICAgIGNvbnN0IG51bWJlcmluZ1N5c3RlbVIgPSBudW1iZXJpbmdTeXN0ZW0gfHwgU2V0dGluZ3MuZGVmYXVsdE51bWJlcmluZ1N5c3RlbTtcbiAgICBjb25zdCBvdXRwdXRDYWxlbmRhclIgPSBvdXRwdXRDYWxlbmRhciB8fCBTZXR0aW5ncy5kZWZhdWx0T3V0cHV0Q2FsZW5kYXI7XG4gICAgcmV0dXJuIG5ldyBMb2NhbGUobG9jYWxlUiwgbnVtYmVyaW5nU3lzdGVtUiwgb3V0cHV0Q2FsZW5kYXJSLCBzcGVjaWZpZWRMb2NhbGUpO1xuICB9XG5cbiAgc3RhdGljIHJlc2V0Q2FjaGUoKSB7XG4gICAgc3lzTG9jYWxlQ2FjaGUgPSBudWxsO1xuICAgIGludGxEVENhY2hlID0ge307XG4gICAgaW50bE51bUNhY2hlID0ge307XG4gICAgaW50bFJlbENhY2hlID0ge307XG4gIH1cblxuICBzdGF0aWMgZnJvbU9iamVjdCh7IGxvY2FsZSwgbnVtYmVyaW5nU3lzdGVtLCBvdXRwdXRDYWxlbmRhciB9ID0ge30pIHtcbiAgICByZXR1cm4gTG9jYWxlLmNyZWF0ZShsb2NhbGUsIG51bWJlcmluZ1N5c3RlbSwgb3V0cHV0Q2FsZW5kYXIpO1xuICB9XG5cbiAgY29uc3RydWN0b3IobG9jYWxlLCBudW1iZXJpbmcsIG91dHB1dENhbGVuZGFyLCBzcGVjaWZpZWRMb2NhbGUpIHtcbiAgICBjb25zdCBbcGFyc2VkTG9jYWxlLCBwYXJzZWROdW1iZXJpbmdTeXN0ZW0sIHBhcnNlZE91dHB1dENhbGVuZGFyXSA9IHBhcnNlTG9jYWxlU3RyaW5nKGxvY2FsZSk7XG5cbiAgICB0aGlzLmxvY2FsZSA9IHBhcnNlZExvY2FsZTtcbiAgICB0aGlzLm51bWJlcmluZ1N5c3RlbSA9IG51bWJlcmluZyB8fCBwYXJzZWROdW1iZXJpbmdTeXN0ZW0gfHwgbnVsbDtcbiAgICB0aGlzLm91dHB1dENhbGVuZGFyID0gb3V0cHV0Q2FsZW5kYXIgfHwgcGFyc2VkT3V0cHV0Q2FsZW5kYXIgfHwgbnVsbDtcbiAgICB0aGlzLmludGwgPSBpbnRsQ29uZmlnU3RyaW5nKHRoaXMubG9jYWxlLCB0aGlzLm51bWJlcmluZ1N5c3RlbSwgdGhpcy5vdXRwdXRDYWxlbmRhcik7XG5cbiAgICB0aGlzLndlZWtkYXlzQ2FjaGUgPSB7IGZvcm1hdDoge30sIHN0YW5kYWxvbmU6IHt9IH07XG4gICAgdGhpcy5tb250aHNDYWNoZSA9IHsgZm9ybWF0OiB7fSwgc3RhbmRhbG9uZToge30gfTtcbiAgICB0aGlzLm1lcmlkaWVtQ2FjaGUgPSBudWxsO1xuICAgIHRoaXMuZXJhQ2FjaGUgPSB7fTtcblxuICAgIHRoaXMuc3BlY2lmaWVkTG9jYWxlID0gc3BlY2lmaWVkTG9jYWxlO1xuICAgIHRoaXMuZmFzdE51bWJlcnNDYWNoZWQgPSBudWxsO1xuICB9XG5cbiAgZ2V0IGZhc3ROdW1iZXJzKCkge1xuICAgIGlmICh0aGlzLmZhc3ROdW1iZXJzQ2FjaGVkID09IG51bGwpIHtcbiAgICAgIHRoaXMuZmFzdE51bWJlcnNDYWNoZWQgPSBzdXBwb3J0c0Zhc3ROdW1iZXJzKHRoaXMpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmZhc3ROdW1iZXJzQ2FjaGVkO1xuICB9XG5cbiAgbGlzdGluZ01vZGUoKSB7XG4gICAgY29uc3QgaXNBY3R1YWxseUVuID0gdGhpcy5pc0VuZ2xpc2goKTtcbiAgICBjb25zdCBoYXNOb1dlaXJkbmVzcyA9XG4gICAgICAodGhpcy5udW1iZXJpbmdTeXN0ZW0gPT09IG51bGwgfHwgdGhpcy5udW1iZXJpbmdTeXN0ZW0gPT09IFwibGF0blwiKSAmJlxuICAgICAgKHRoaXMub3V0cHV0Q2FsZW5kYXIgPT09IG51bGwgfHwgdGhpcy5vdXRwdXRDYWxlbmRhciA9PT0gXCJncmVnb3J5XCIpO1xuICAgIHJldHVybiBpc0FjdHVhbGx5RW4gJiYgaGFzTm9XZWlyZG5lc3MgPyBcImVuXCIgOiBcImludGxcIjtcbiAgfVxuXG4gIGNsb25lKGFsdHMpIHtcbiAgICBpZiAoIWFsdHMgfHwgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoYWx0cykubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIExvY2FsZS5jcmVhdGUoXG4gICAgICAgIGFsdHMubG9jYWxlIHx8IHRoaXMuc3BlY2lmaWVkTG9jYWxlLFxuICAgICAgICBhbHRzLm51bWJlcmluZ1N5c3RlbSB8fCB0aGlzLm51bWJlcmluZ1N5c3RlbSxcbiAgICAgICAgYWx0cy5vdXRwdXRDYWxlbmRhciB8fCB0aGlzLm91dHB1dENhbGVuZGFyLFxuICAgICAgICBhbHRzLmRlZmF1bHRUb0VOIHx8IGZhbHNlXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHJlZGVmYXVsdFRvRU4oYWx0cyA9IHt9KSB7XG4gICAgcmV0dXJuIHRoaXMuY2xvbmUoeyAuLi5hbHRzLCBkZWZhdWx0VG9FTjogdHJ1ZSB9KTtcbiAgfVxuXG4gIHJlZGVmYXVsdFRvU3lzdGVtKGFsdHMgPSB7fSkge1xuICAgIHJldHVybiB0aGlzLmNsb25lKHsgLi4uYWx0cywgZGVmYXVsdFRvRU46IGZhbHNlIH0pO1xuICB9XG5cbiAgbW9udGhzKGxlbmd0aCwgZm9ybWF0ID0gZmFsc2UsIGRlZmF1bHRPSyA9IHRydWUpIHtcbiAgICByZXR1cm4gbGlzdFN0dWZmKHRoaXMsIGxlbmd0aCwgZGVmYXVsdE9LLCBtb250aHMsICgpID0+IHtcbiAgICAgIGNvbnN0IGludGwgPSBmb3JtYXQgPyB7IG1vbnRoOiBsZW5ndGgsIGRheTogXCJudW1lcmljXCIgfSA6IHsgbW9udGg6IGxlbmd0aCB9LFxuICAgICAgICBmb3JtYXRTdHIgPSBmb3JtYXQgPyBcImZvcm1hdFwiIDogXCJzdGFuZGFsb25lXCI7XG4gICAgICBpZiAoIXRoaXMubW9udGhzQ2FjaGVbZm9ybWF0U3RyXVtsZW5ndGhdKSB7XG4gICAgICAgIHRoaXMubW9udGhzQ2FjaGVbZm9ybWF0U3RyXVtsZW5ndGhdID0gbWFwTW9udGhzKChkdCkgPT4gdGhpcy5leHRyYWN0KGR0LCBpbnRsLCBcIm1vbnRoXCIpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLm1vbnRoc0NhY2hlW2Zvcm1hdFN0cl1bbGVuZ3RoXTtcbiAgICB9KTtcbiAgfVxuXG4gIHdlZWtkYXlzKGxlbmd0aCwgZm9ybWF0ID0gZmFsc2UsIGRlZmF1bHRPSyA9IHRydWUpIHtcbiAgICByZXR1cm4gbGlzdFN0dWZmKHRoaXMsIGxlbmd0aCwgZGVmYXVsdE9LLCB3ZWVrZGF5cywgKCkgPT4ge1xuICAgICAgY29uc3QgaW50bCA9IGZvcm1hdFxuICAgICAgICAgID8geyB3ZWVrZGF5OiBsZW5ndGgsIHllYXI6IFwibnVtZXJpY1wiLCBtb250aDogXCJsb25nXCIsIGRheTogXCJudW1lcmljXCIgfVxuICAgICAgICAgIDogeyB3ZWVrZGF5OiBsZW5ndGggfSxcbiAgICAgICAgZm9ybWF0U3RyID0gZm9ybWF0ID8gXCJmb3JtYXRcIiA6IFwic3RhbmRhbG9uZVwiO1xuICAgICAgaWYgKCF0aGlzLndlZWtkYXlzQ2FjaGVbZm9ybWF0U3RyXVtsZW5ndGhdKSB7XG4gICAgICAgIHRoaXMud2Vla2RheXNDYWNoZVtmb3JtYXRTdHJdW2xlbmd0aF0gPSBtYXBXZWVrZGF5cygoZHQpID0+XG4gICAgICAgICAgdGhpcy5leHRyYWN0KGR0LCBpbnRsLCBcIndlZWtkYXlcIilcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLndlZWtkYXlzQ2FjaGVbZm9ybWF0U3RyXVtsZW5ndGhdO1xuICAgIH0pO1xuICB9XG5cbiAgbWVyaWRpZW1zKGRlZmF1bHRPSyA9IHRydWUpIHtcbiAgICByZXR1cm4gbGlzdFN0dWZmKFxuICAgICAgdGhpcyxcbiAgICAgIHVuZGVmaW5lZCxcbiAgICAgIGRlZmF1bHRPSyxcbiAgICAgICgpID0+IG1lcmlkaWVtcyxcbiAgICAgICgpID0+IHtcbiAgICAgICAgLy8gSW4gdGhlb3J5IHRoZXJlIGNvdWxkIGJlIGFyaWJpdHJhcnkgZGF5IHBlcmlvZHMuIFdlJ3JlIGdvbm5hIGFzc3VtZSB0aGVyZSBhcmUgZXhhY3RseSB0d29cbiAgICAgICAgLy8gZm9yIEFNIGFuZCBQTS4gVGhpcyBpcyBwcm9iYWJseSB3cm9uZywgYnV0IGl0J3MgbWFrZXMgcGFyc2luZyB3YXkgZWFzaWVyLlxuICAgICAgICBpZiAoIXRoaXMubWVyaWRpZW1DYWNoZSkge1xuICAgICAgICAgIGNvbnN0IGludGwgPSB7IGhvdXI6IFwibnVtZXJpY1wiLCBob3VyQ3ljbGU6IFwiaDEyXCIgfTtcbiAgICAgICAgICB0aGlzLm1lcmlkaWVtQ2FjaGUgPSBbRGF0ZVRpbWUudXRjKDIwMTYsIDExLCAxMywgOSksIERhdGVUaW1lLnV0YygyMDE2LCAxMSwgMTMsIDE5KV0ubWFwKFxuICAgICAgICAgICAgKGR0KSA9PiB0aGlzLmV4dHJhY3QoZHQsIGludGwsIFwiZGF5cGVyaW9kXCIpXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLm1lcmlkaWVtQ2FjaGU7XG4gICAgICB9XG4gICAgKTtcbiAgfVxuXG4gIGVyYXMobGVuZ3RoLCBkZWZhdWx0T0sgPSB0cnVlKSB7XG4gICAgcmV0dXJuIGxpc3RTdHVmZih0aGlzLCBsZW5ndGgsIGRlZmF1bHRPSywgZXJhcywgKCkgPT4ge1xuICAgICAgY29uc3QgaW50bCA9IHsgZXJhOiBsZW5ndGggfTtcblxuICAgICAgLy8gVGhpcyBpcyBwcm9ibGVtYXRpYy4gRGlmZmVyZW50IGNhbGVuZGFycyBhcmUgZ29pbmcgdG8gZGVmaW5lIGVyYXMgdG90YWxseSBkaWZmZXJlbnRseS4gV2hhdCBJIG5lZWQgaXMgdGhlIG1pbmltdW0gc2V0IG9mIGRhdGVzXG4gICAgICAvLyB0byBkZWZpbml0ZWx5IGVudW1lcmF0ZSB0aGVtLlxuICAgICAgaWYgKCF0aGlzLmVyYUNhY2hlW2xlbmd0aF0pIHtcbiAgICAgICAgdGhpcy5lcmFDYWNoZVtsZW5ndGhdID0gW0RhdGVUaW1lLnV0YygtNDAsIDEsIDEpLCBEYXRlVGltZS51dGMoMjAxNywgMSwgMSldLm1hcCgoZHQpID0+XG4gICAgICAgICAgdGhpcy5leHRyYWN0KGR0LCBpbnRsLCBcImVyYVwiKVxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5lcmFDYWNoZVtsZW5ndGhdO1xuICAgIH0pO1xuICB9XG5cbiAgZXh0cmFjdChkdCwgaW50bE9wdHMsIGZpZWxkKSB7XG4gICAgY29uc3QgZGYgPSB0aGlzLmR0Rm9ybWF0dGVyKGR0LCBpbnRsT3B0cyksXG4gICAgICByZXN1bHRzID0gZGYuZm9ybWF0VG9QYXJ0cygpLFxuICAgICAgbWF0Y2hpbmcgPSByZXN1bHRzLmZpbmQoKG0pID0+IG0udHlwZS50b0xvd2VyQ2FzZSgpID09PSBmaWVsZCk7XG4gICAgcmV0dXJuIG1hdGNoaW5nID8gbWF0Y2hpbmcudmFsdWUgOiBudWxsO1xuICB9XG5cbiAgbnVtYmVyRm9ybWF0dGVyKG9wdHMgPSB7fSkge1xuICAgIC8vIHRoaXMgZm9yY2VzaW1wbGUgb3B0aW9uIGlzIG5ldmVyIHVzZWQgKHRoZSBvbmx5IGNhbGxlciBzaG9ydC1jaXJjdWl0cyBvbiBpdCwgYnV0IGl0IHNlZW1zIHNhZmVyIHRvIGxlYXZlKVxuICAgIC8vIChpbiBjb250cmFzdCwgdGhlIHJlc3Qgb2YgdGhlIGNvbmRpdGlvbiBpcyB1c2VkIGhlYXZpbHkpXG4gICAgcmV0dXJuIG5ldyBQb2x5TnVtYmVyRm9ybWF0dGVyKHRoaXMuaW50bCwgb3B0cy5mb3JjZVNpbXBsZSB8fCB0aGlzLmZhc3ROdW1iZXJzLCBvcHRzKTtcbiAgfVxuXG4gIGR0Rm9ybWF0dGVyKGR0LCBpbnRsT3B0cyA9IHt9KSB7XG4gICAgcmV0dXJuIG5ldyBQb2x5RGF0ZUZvcm1hdHRlcihkdCwgdGhpcy5pbnRsLCBpbnRsT3B0cyk7XG4gIH1cblxuICByZWxGb3JtYXR0ZXIob3B0cyA9IHt9KSB7XG4gICAgcmV0dXJuIG5ldyBQb2x5UmVsRm9ybWF0dGVyKHRoaXMuaW50bCwgdGhpcy5pc0VuZ2xpc2goKSwgb3B0cyk7XG4gIH1cblxuICBsaXN0Rm9ybWF0dGVyKG9wdHMgPSB7fSkge1xuICAgIHJldHVybiBnZXRDYWNoZWRMRih0aGlzLmludGwsIG9wdHMpO1xuICB9XG5cbiAgaXNFbmdsaXNoKCkge1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLmxvY2FsZSA9PT0gXCJlblwiIHx8XG4gICAgICB0aGlzLmxvY2FsZS50b0xvd2VyQ2FzZSgpID09PSBcImVuLXVzXCIgfHxcbiAgICAgIG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KHRoaXMuaW50bCkucmVzb2x2ZWRPcHRpb25zKCkubG9jYWxlLnN0YXJ0c1dpdGgoXCJlbi11c1wiKVxuICAgICk7XG4gIH1cblxuICBlcXVhbHMob3RoZXIpIHtcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5sb2NhbGUgPT09IG90aGVyLmxvY2FsZSAmJlxuICAgICAgdGhpcy5udW1iZXJpbmdTeXN0ZW0gPT09IG90aGVyLm51bWJlcmluZ1N5c3RlbSAmJlxuICAgICAgdGhpcy5vdXRwdXRDYWxlbmRhciA9PT0gb3RoZXIub3V0cHV0Q2FsZW5kYXJcbiAgICApO1xuICB9XG59XG5cbmxldCBzaW5nbGV0b24gPSBudWxsO1xuXG4vKipcbiAqIEEgem9uZSB3aXRoIGEgZml4ZWQgb2Zmc2V0IChtZWFuaW5nIG5vIERTVClcbiAqIEBpbXBsZW1lbnRzIHtab25lfVxuICovXG5jbGFzcyBGaXhlZE9mZnNldFpvbmUgZXh0ZW5kcyBab25lIHtcbiAgLyoqXG4gICAqIEdldCBhIHNpbmdsZXRvbiBpbnN0YW5jZSBvZiBVVENcbiAgICogQHJldHVybiB7Rml4ZWRPZmZzZXRab25lfVxuICAgKi9cbiAgc3RhdGljIGdldCB1dGNJbnN0YW5jZSgpIHtcbiAgICBpZiAoc2luZ2xldG9uID09PSBudWxsKSB7XG4gICAgICBzaW5nbGV0b24gPSBuZXcgRml4ZWRPZmZzZXRab25lKDApO1xuICAgIH1cbiAgICByZXR1cm4gc2luZ2xldG9uO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhbiBpbnN0YW5jZSB3aXRoIGEgc3BlY2lmaWVkIG9mZnNldFxuICAgKiBAcGFyYW0ge251bWJlcn0gb2Zmc2V0IC0gVGhlIG9mZnNldCBpbiBtaW51dGVzXG4gICAqIEByZXR1cm4ge0ZpeGVkT2Zmc2V0Wm9uZX1cbiAgICovXG4gIHN0YXRpYyBpbnN0YW5jZShvZmZzZXQpIHtcbiAgICByZXR1cm4gb2Zmc2V0ID09PSAwID8gRml4ZWRPZmZzZXRab25lLnV0Y0luc3RhbmNlIDogbmV3IEZpeGVkT2Zmc2V0Wm9uZShvZmZzZXQpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhbiBpbnN0YW5jZSBvZiBGaXhlZE9mZnNldFpvbmUgZnJvbSBhIFVUQyBvZmZzZXQgc3RyaW5nLCBsaWtlIFwiVVRDKzZcIlxuICAgKiBAcGFyYW0ge3N0cmluZ30gcyAtIFRoZSBvZmZzZXQgc3RyaW5nIHRvIHBhcnNlXG4gICAqIEBleGFtcGxlIEZpeGVkT2Zmc2V0Wm9uZS5wYXJzZVNwZWNpZmllcihcIlVUQys2XCIpXG4gICAqIEBleGFtcGxlIEZpeGVkT2Zmc2V0Wm9uZS5wYXJzZVNwZWNpZmllcihcIlVUQyswNlwiKVxuICAgKiBAZXhhbXBsZSBGaXhlZE9mZnNldFpvbmUucGFyc2VTcGVjaWZpZXIoXCJVVEMtNjowMFwiKVxuICAgKiBAcmV0dXJuIHtGaXhlZE9mZnNldFpvbmV9XG4gICAqL1xuICBzdGF0aWMgcGFyc2VTcGVjaWZpZXIocykge1xuICAgIGlmIChzKSB7XG4gICAgICBjb25zdCByID0gcy5tYXRjaCgvXnV0Yyg/OihbKy1dXFxkezEsMn0pKD86OihcXGR7Mn0pKT8pPyQvaSk7XG4gICAgICBpZiAocikge1xuICAgICAgICByZXR1cm4gbmV3IEZpeGVkT2Zmc2V0Wm9uZShzaWduZWRPZmZzZXQoclsxXSwgclsyXSkpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKG9mZnNldCkge1xuICAgIHN1cGVyKCk7XG4gICAgLyoqIEBwcml2YXRlICoqL1xuICAgIHRoaXMuZml4ZWQgPSBvZmZzZXQ7XG4gIH1cblxuICAvKiogQG92ZXJyaWRlICoqL1xuICBnZXQgdHlwZSgpIHtcbiAgICByZXR1cm4gXCJmaXhlZFwiO1xuICB9XG5cbiAgLyoqIEBvdmVycmlkZSAqKi9cbiAgZ2V0IG5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZml4ZWQgPT09IDAgPyBcIlVUQ1wiIDogYFVUQyR7Zm9ybWF0T2Zmc2V0KHRoaXMuZml4ZWQsIFwibmFycm93XCIpfWA7XG4gIH1cblxuICBnZXQgaWFuYU5hbWUoKSB7XG4gICAgaWYgKHRoaXMuZml4ZWQgPT09IDApIHtcbiAgICAgIHJldHVybiBcIkV0Yy9VVENcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGBFdGMvR01UJHtmb3JtYXRPZmZzZXQoLXRoaXMuZml4ZWQsIFwibmFycm93XCIpfWA7XG4gICAgfVxuICB9XG5cbiAgLyoqIEBvdmVycmlkZSAqKi9cbiAgb2Zmc2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgLyoqIEBvdmVycmlkZSAqKi9cbiAgZm9ybWF0T2Zmc2V0KHRzLCBmb3JtYXQpIHtcbiAgICByZXR1cm4gZm9ybWF0T2Zmc2V0KHRoaXMuZml4ZWQsIGZvcm1hdCk7XG4gIH1cblxuICAvKiogQG92ZXJyaWRlICoqL1xuICBnZXQgaXNVbml2ZXJzYWwoKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvKiogQG92ZXJyaWRlICoqL1xuICBvZmZzZXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZml4ZWQ7XG4gIH1cblxuICAvKiogQG92ZXJyaWRlICoqL1xuICBlcXVhbHMob3RoZXJab25lKSB7XG4gICAgcmV0dXJuIG90aGVyWm9uZS50eXBlID09PSBcImZpeGVkXCIgJiYgb3RoZXJab25lLmZpeGVkID09PSB0aGlzLmZpeGVkO1xuICB9XG5cbiAgLyoqIEBvdmVycmlkZSAqKi9cbiAgZ2V0IGlzVmFsaWQoKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn1cblxuLyoqXG4gKiBBIHpvbmUgdGhhdCBmYWlsZWQgdG8gcGFyc2UuIFlvdSBzaG91bGQgbmV2ZXIgbmVlZCB0byBpbnN0YW50aWF0ZSB0aGlzLlxuICogQGltcGxlbWVudHMge1pvbmV9XG4gKi9cbmNsYXNzIEludmFsaWRab25lIGV4dGVuZHMgWm9uZSB7XG4gIGNvbnN0cnVjdG9yKHpvbmVOYW1lKSB7XG4gICAgc3VwZXIoKTtcbiAgICAvKiogIEBwcml2YXRlICovXG4gICAgdGhpcy56b25lTmFtZSA9IHpvbmVOYW1lO1xuICB9XG5cbiAgLyoqIEBvdmVycmlkZSAqKi9cbiAgZ2V0IHR5cGUoKSB7XG4gICAgcmV0dXJuIFwiaW52YWxpZFwiO1xuICB9XG5cbiAgLyoqIEBvdmVycmlkZSAqKi9cbiAgZ2V0IG5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuem9uZU5hbWU7XG4gIH1cblxuICAvKiogQG92ZXJyaWRlICoqL1xuICBnZXQgaXNVbml2ZXJzYWwoKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLyoqIEBvdmVycmlkZSAqKi9cbiAgb2Zmc2V0TmFtZSgpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIC8qKiBAb3ZlcnJpZGUgKiovXG4gIGZvcm1hdE9mZnNldCgpIHtcbiAgICByZXR1cm4gXCJcIjtcbiAgfVxuXG4gIC8qKiBAb3ZlcnJpZGUgKiovXG4gIG9mZnNldCgpIHtcbiAgICByZXR1cm4gTmFOO1xuICB9XG5cbiAgLyoqIEBvdmVycmlkZSAqKi9cbiAgZXF1YWxzKCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8qKiBAb3ZlcnJpZGUgKiovXG4gIGdldCBpc1ZhbGlkKCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuXG4vKipcbiAqIEBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gbm9ybWFsaXplWm9uZShpbnB1dCwgZGVmYXVsdFpvbmUpIHtcbiAgaWYgKGlzVW5kZWZpbmVkKGlucHV0KSB8fCBpbnB1dCA9PT0gbnVsbCkge1xuICAgIHJldHVybiBkZWZhdWx0Wm9uZTtcbiAgfSBlbHNlIGlmIChpbnB1dCBpbnN0YW5jZW9mIFpvbmUpIHtcbiAgICByZXR1cm4gaW5wdXQ7XG4gIH0gZWxzZSBpZiAoaXNTdHJpbmcoaW5wdXQpKSB7XG4gICAgY29uc3QgbG93ZXJlZCA9IGlucHV0LnRvTG93ZXJDYXNlKCk7XG4gICAgaWYgKGxvd2VyZWQgPT09IFwiZGVmYXVsdFwiKSByZXR1cm4gZGVmYXVsdFpvbmU7XG4gICAgZWxzZSBpZiAobG93ZXJlZCA9PT0gXCJsb2NhbFwiIHx8IGxvd2VyZWQgPT09IFwic3lzdGVtXCIpIHJldHVybiBTeXN0ZW1ab25lLmluc3RhbmNlO1xuICAgIGVsc2UgaWYgKGxvd2VyZWQgPT09IFwidXRjXCIgfHwgbG93ZXJlZCA9PT0gXCJnbXRcIikgcmV0dXJuIEZpeGVkT2Zmc2V0Wm9uZS51dGNJbnN0YW5jZTtcbiAgICBlbHNlIHJldHVybiBGaXhlZE9mZnNldFpvbmUucGFyc2VTcGVjaWZpZXIobG93ZXJlZCkgfHwgSUFOQVpvbmUuY3JlYXRlKGlucHV0KTtcbiAgfSBlbHNlIGlmIChpc051bWJlcihpbnB1dCkpIHtcbiAgICByZXR1cm4gRml4ZWRPZmZzZXRab25lLmluc3RhbmNlKGlucHV0KTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgaW5wdXQgPT09IFwib2JqZWN0XCIgJiYgaW5wdXQub2Zmc2V0ICYmIHR5cGVvZiBpbnB1dC5vZmZzZXQgPT09IFwibnVtYmVyXCIpIHtcbiAgICAvLyBUaGlzIGlzIGR1bWIsIGJ1dCB0aGUgaW5zdGFuY2VvZiBjaGVjayBhYm92ZSBkb2Vzbid0IHNlZW0gdG8gcmVhbGx5IHdvcmtcbiAgICAvLyBzbyB3ZSdyZSBkdWNrIGNoZWNraW5nIGl0XG4gICAgcmV0dXJuIGlucHV0O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBuZXcgSW52YWxpZFpvbmUoaW5wdXQpO1xuICB9XG59XG5cbmxldCBub3cgPSAoKSA9PiBEYXRlLm5vdygpLFxuICBkZWZhdWx0Wm9uZSA9IFwic3lzdGVtXCIsXG4gIGRlZmF1bHRMb2NhbGUgPSBudWxsLFxuICBkZWZhdWx0TnVtYmVyaW5nU3lzdGVtID0gbnVsbCxcbiAgZGVmYXVsdE91dHB1dENhbGVuZGFyID0gbnVsbCxcbiAgdHdvRGlnaXRDdXRvZmZZZWFyID0gNjAsXG4gIHRocm93T25JbnZhbGlkO1xuXG4vKipcbiAqIFNldHRpbmdzIGNvbnRhaW5zIHN0YXRpYyBnZXR0ZXJzIGFuZCBzZXR0ZXJzIHRoYXQgY29udHJvbCBMdXhvbidzIG92ZXJhbGwgYmVoYXZpb3IuIEx1eG9uIGlzIGEgc2ltcGxlIGxpYnJhcnkgd2l0aCBmZXcgb3B0aW9ucywgYnV0IHRoZSBvbmVzIGl0IGRvZXMgaGF2ZSBsaXZlIGhlcmUuXG4gKi9cbmNsYXNzIFNldHRpbmdzIHtcbiAgLyoqXG4gICAqIEdldCB0aGUgY2FsbGJhY2sgZm9yIHJldHVybmluZyB0aGUgY3VycmVudCB0aW1lc3RhbXAuXG4gICAqIEB0eXBlIHtmdW5jdGlvbn1cbiAgICovXG4gIHN0YXRpYyBnZXQgbm93KCkge1xuICAgIHJldHVybiBub3c7XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRoZSBjYWxsYmFjayBmb3IgcmV0dXJuaW5nIHRoZSBjdXJyZW50IHRpbWVzdGFtcC5cbiAgICogVGhlIGZ1bmN0aW9uIHNob3VsZCByZXR1cm4gYSBudW1iZXIsIHdoaWNoIHdpbGwgYmUgaW50ZXJwcmV0ZWQgYXMgYW4gRXBvY2ggbWlsbGlzZWNvbmQgY291bnRcbiAgICogQHR5cGUge2Z1bmN0aW9ufVxuICAgKiBAZXhhbXBsZSBTZXR0aW5ncy5ub3cgPSAoKSA9PiBEYXRlLm5vdygpICsgMzAwMCAvLyBwcmV0ZW5kIGl0IGlzIDMgc2Vjb25kcyBpbiB0aGUgZnV0dXJlXG4gICAqIEBleGFtcGxlIFNldHRpbmdzLm5vdyA9ICgpID0+IDAgLy8gYWx3YXlzIHByZXRlbmQgaXQncyBKYW4gMSwgMTk3MCBhdCBtaWRuaWdodCBpbiBVVEMgdGltZVxuICAgKi9cbiAgc3RhdGljIHNldCBub3cobikge1xuICAgIG5vdyA9IG47XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRoZSBkZWZhdWx0IHRpbWUgem9uZSB0byBjcmVhdGUgRGF0ZVRpbWVzIGluLiBEb2VzIG5vdCBhZmZlY3QgZXhpc3RpbmcgaW5zdGFuY2VzLlxuICAgKiBVc2UgdGhlIHZhbHVlIFwic3lzdGVtXCIgdG8gcmVzZXQgdGhpcyB2YWx1ZSB0byB0aGUgc3lzdGVtJ3MgdGltZSB6b25lLlxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgc3RhdGljIHNldCBkZWZhdWx0Wm9uZSh6b25lKSB7XG4gICAgZGVmYXVsdFpvbmUgPSB6b25lO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgZGVmYXVsdCB0aW1lIHpvbmUgb2JqZWN0IGN1cnJlbnRseSB1c2VkIHRvIGNyZWF0ZSBEYXRlVGltZXMuIERvZXMgbm90IGFmZmVjdCBleGlzdGluZyBpbnN0YW5jZXMuXG4gICAqIFRoZSBkZWZhdWx0IHZhbHVlIGlzIHRoZSBzeXN0ZW0ncyB0aW1lIHpvbmUgKHRoZSBvbmUgc2V0IG9uIHRoZSBtYWNoaW5lIHRoYXQgcnVucyB0aGlzIGNvZGUpLlxuICAgKiBAdHlwZSB7Wm9uZX1cbiAgICovXG4gIHN0YXRpYyBnZXQgZGVmYXVsdFpvbmUoKSB7XG4gICAgcmV0dXJuIG5vcm1hbGl6ZVpvbmUoZGVmYXVsdFpvbmUsIFN5c3RlbVpvbmUuaW5zdGFuY2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgZGVmYXVsdCBsb2NhbGUgdG8gY3JlYXRlIERhdGVUaW1lcyB3aXRoLiBEb2VzIG5vdCBhZmZlY3QgZXhpc3RpbmcgaW5zdGFuY2VzLlxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgc3RhdGljIGdldCBkZWZhdWx0TG9jYWxlKCkge1xuICAgIHJldHVybiBkZWZhdWx0TG9jYWxlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgZGVmYXVsdCBsb2NhbGUgdG8gY3JlYXRlIERhdGVUaW1lcyB3aXRoLiBEb2VzIG5vdCBhZmZlY3QgZXhpc3RpbmcgaW5zdGFuY2VzLlxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgc3RhdGljIHNldCBkZWZhdWx0TG9jYWxlKGxvY2FsZSkge1xuICAgIGRlZmF1bHRMb2NhbGUgPSBsb2NhbGU7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBkZWZhdWx0IG51bWJlcmluZyBzeXN0ZW0gdG8gY3JlYXRlIERhdGVUaW1lcyB3aXRoLiBEb2VzIG5vdCBhZmZlY3QgZXhpc3RpbmcgaW5zdGFuY2VzLlxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgc3RhdGljIGdldCBkZWZhdWx0TnVtYmVyaW5nU3lzdGVtKCkge1xuICAgIHJldHVybiBkZWZhdWx0TnVtYmVyaW5nU3lzdGVtO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgZGVmYXVsdCBudW1iZXJpbmcgc3lzdGVtIHRvIGNyZWF0ZSBEYXRlVGltZXMgd2l0aC4gRG9lcyBub3QgYWZmZWN0IGV4aXN0aW5nIGluc3RhbmNlcy5cbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIHN0YXRpYyBzZXQgZGVmYXVsdE51bWJlcmluZ1N5c3RlbShudW1iZXJpbmdTeXN0ZW0pIHtcbiAgICBkZWZhdWx0TnVtYmVyaW5nU3lzdGVtID0gbnVtYmVyaW5nU3lzdGVtO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgZGVmYXVsdCBvdXRwdXQgY2FsZW5kYXIgdG8gY3JlYXRlIERhdGVUaW1lcyB3aXRoLiBEb2VzIG5vdCBhZmZlY3QgZXhpc3RpbmcgaW5zdGFuY2VzLlxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgc3RhdGljIGdldCBkZWZhdWx0T3V0cHV0Q2FsZW5kYXIoKSB7XG4gICAgcmV0dXJuIGRlZmF1bHRPdXRwdXRDYWxlbmRhcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdGhlIGRlZmF1bHQgb3V0cHV0IGNhbGVuZGFyIHRvIGNyZWF0ZSBEYXRlVGltZXMgd2l0aC4gRG9lcyBub3QgYWZmZWN0IGV4aXN0aW5nIGluc3RhbmNlcy5cbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIHN0YXRpYyBzZXQgZGVmYXVsdE91dHB1dENhbGVuZGFyKG91dHB1dENhbGVuZGFyKSB7XG4gICAgZGVmYXVsdE91dHB1dENhbGVuZGFyID0gb3V0cHV0Q2FsZW5kYXI7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBjdXRvZmYgeWVhciBhZnRlciB3aGljaCBhIHN0cmluZyBlbmNvZGluZyBhIHllYXIgYXMgdHdvIGRpZ2l0cyBpcyBpbnRlcnByZXRlZCB0byBvY2N1ciBpbiB0aGUgY3VycmVudCBjZW50dXJ5LlxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKi9cbiAgc3RhdGljIGdldCB0d29EaWdpdEN1dG9mZlllYXIoKSB7XG4gICAgcmV0dXJuIHR3b0RpZ2l0Q3V0b2ZmWWVhcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdGhlIGN1dG9mZiB5ZWFyIGFmdGVyIHdoaWNoIGEgc3RyaW5nIGVuY29kaW5nIGEgeWVhciBhcyB0d28gZGlnaXRzIGlzIGludGVycHJldGVkIHRvIG9jY3VyIGluIHRoZSBjdXJyZW50IGNlbnR1cnkuXG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqIEBleGFtcGxlIFNldHRpbmdzLnR3b0RpZ2l0Q3V0b2ZmWWVhciA9IDAgLy8gY3V0LW9mZiB5ZWFyIGlzIDAsIHNvIGFsbCAneXknIGFyZSBpbnRlcnByZXR0ZWQgYXMgY3VycmVudCBjZW50dXJ5XG4gICAqIEBleGFtcGxlIFNldHRpbmdzLnR3b0RpZ2l0Q3V0b2ZmWWVhciA9IDUwIC8vICc0OScgLT4gMTk0OTsgJzUwJyAtPiAyMDUwXG4gICAqIEBleGFtcGxlIFNldHRpbmdzLnR3b0RpZ2l0Q3V0b2ZmWWVhciA9IDE5NTAgLy8gaW50ZXJwcmV0dGVkIGFzIDUwXG4gICAqIEBleGFtcGxlIFNldHRpbmdzLnR3b0RpZ2l0Q3V0b2ZmWWVhciA9IDIwNTAgLy8gQUxTTyBpbnRlcnByZXR0ZWQgYXMgNTBcbiAgICovXG4gIHN0YXRpYyBzZXQgdHdvRGlnaXRDdXRvZmZZZWFyKGN1dG9mZlllYXIpIHtcbiAgICB0d29EaWdpdEN1dG9mZlllYXIgPSBjdXRvZmZZZWFyICUgMTAwO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB3aGV0aGVyIEx1eG9uIHdpbGwgdGhyb3cgd2hlbiBpdCBlbmNvdW50ZXJzIGludmFsaWQgRGF0ZVRpbWVzLCBEdXJhdGlvbnMsIG9yIEludGVydmFsc1xuICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICovXG4gIHN0YXRpYyBnZXQgdGhyb3dPbkludmFsaWQoKSB7XG4gICAgcmV0dXJuIHRocm93T25JbnZhbGlkO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB3aGV0aGVyIEx1eG9uIHdpbGwgdGhyb3cgd2hlbiBpdCBlbmNvdW50ZXJzIGludmFsaWQgRGF0ZVRpbWVzLCBEdXJhdGlvbnMsIG9yIEludGVydmFsc1xuICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICovXG4gIHN0YXRpYyBzZXQgdGhyb3dPbkludmFsaWQodCkge1xuICAgIHRocm93T25JbnZhbGlkID0gdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXNldCBMdXhvbidzIGdsb2JhbCBjYWNoZXMuIFNob3VsZCBvbmx5IGJlIG5lY2Vzc2FyeSBpbiB0ZXN0aW5nIHNjZW5hcmlvcy5cbiAgICogQHJldHVybiB7dm9pZH1cbiAgICovXG4gIHN0YXRpYyByZXNldENhY2hlcygpIHtcbiAgICBMb2NhbGUucmVzZXRDYWNoZSgpO1xuICAgIElBTkFab25lLnJlc2V0Q2FjaGUoKTtcbiAgfVxufVxuXG4vKlxuICBUaGlzIGlzIGp1c3QgYSBqdW5rIGRyYXdlciwgY29udGFpbmluZyBhbnl0aGluZyB1c2VkIGFjcm9zcyBtdWx0aXBsZSBjbGFzc2VzLlxuICBCZWNhdXNlIEx1eG9uIGlzIHNtYWxsKGlzaCksIHRoaXMgc2hvdWxkIHN0YXkgc21hbGwgYW5kIHdlIHdvbid0IHdvcnJ5IGFib3V0IHNwbGl0dGluZ1xuICBpdCB1cCBpbnRvLCBzYXksIHBhcnNpbmdVdGlsLmpzIGFuZCBiYXNpY1V0aWwuanMgYW5kIHNvIG9uLiBCdXQgdGhleSBhcmUgZGl2aWRlZCB1cCBieSBmZWF0dXJlIGFyZWEuXG4qL1xuXG4vKipcbiAqIEBwcml2YXRlXG4gKi9cblxuLy8gVFlQRVNcblxuZnVuY3Rpb24gaXNVbmRlZmluZWQobykge1xuICByZXR1cm4gdHlwZW9mIG8gPT09IFwidW5kZWZpbmVkXCI7XG59XG5cbmZ1bmN0aW9uIGlzTnVtYmVyKG8pIHtcbiAgcmV0dXJuIHR5cGVvZiBvID09PSBcIm51bWJlclwiO1xufVxuXG5mdW5jdGlvbiBpc0ludGVnZXIobykge1xuICByZXR1cm4gdHlwZW9mIG8gPT09IFwibnVtYmVyXCIgJiYgbyAlIDEgPT09IDA7XG59XG5cbmZ1bmN0aW9uIGlzU3RyaW5nKG8pIHtcbiAgcmV0dXJuIHR5cGVvZiBvID09PSBcInN0cmluZ1wiO1xufVxuXG5mdW5jdGlvbiBpc0RhdGUobykge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pID09PSBcIltvYmplY3QgRGF0ZV1cIjtcbn1cblxuLy8gQ0FQQUJJTElUSUVTXG5cbmZ1bmN0aW9uIGhhc1JlbGF0aXZlKCkge1xuICB0cnkge1xuICAgIHJldHVybiB0eXBlb2YgSW50bCAhPT0gXCJ1bmRlZmluZWRcIiAmJiAhIUludGwuUmVsYXRpdmVUaW1lRm9ybWF0O1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbi8vIE9CSkVDVFMgQU5EIEFSUkFZU1xuXG5mdW5jdGlvbiBtYXliZUFycmF5KHRoaW5nKSB7XG4gIHJldHVybiBBcnJheS5pc0FycmF5KHRoaW5nKSA/IHRoaW5nIDogW3RoaW5nXTtcbn1cblxuZnVuY3Rpb24gYmVzdEJ5KGFyciwgYnksIGNvbXBhcmUpIHtcbiAgaWYgKGFyci5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG4gIHJldHVybiBhcnIucmVkdWNlKChiZXN0LCBuZXh0KSA9PiB7XG4gICAgY29uc3QgcGFpciA9IFtieShuZXh0KSwgbmV4dF07XG4gICAgaWYgKCFiZXN0KSB7XG4gICAgICByZXR1cm4gcGFpcjtcbiAgICB9IGVsc2UgaWYgKGNvbXBhcmUoYmVzdFswXSwgcGFpclswXSkgPT09IGJlc3RbMF0pIHtcbiAgICAgIHJldHVybiBiZXN0O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gcGFpcjtcbiAgICB9XG4gIH0sIG51bGwpWzFdO1xufVxuXG5mdW5jdGlvbiBwaWNrKG9iaiwga2V5cykge1xuICByZXR1cm4ga2V5cy5yZWR1Y2UoKGEsIGspID0+IHtcbiAgICBhW2tdID0gb2JqW2tdO1xuICAgIHJldHVybiBhO1xuICB9LCB7fSk7XG59XG5cbmZ1bmN0aW9uIGhhc093blByb3BlcnR5KG9iaiwgcHJvcCkge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCk7XG59XG5cbi8vIE5VTUJFUlMgQU5EIFNUUklOR1NcblxuZnVuY3Rpb24gaW50ZWdlckJldHdlZW4odGhpbmcsIGJvdHRvbSwgdG9wKSB7XG4gIHJldHVybiBpc0ludGVnZXIodGhpbmcpICYmIHRoaW5nID49IGJvdHRvbSAmJiB0aGluZyA8PSB0b3A7XG59XG5cbi8vIHggJSBuIGJ1dCB0YWtlcyB0aGUgc2lnbiBvZiBuIGluc3RlYWQgb2YgeFxuZnVuY3Rpb24gZmxvb3JNb2QoeCwgbikge1xuICByZXR1cm4geCAtIG4gKiBNYXRoLmZsb29yKHggLyBuKTtcbn1cblxuZnVuY3Rpb24gcGFkU3RhcnQoaW5wdXQsIG4gPSAyKSB7XG4gIGNvbnN0IGlzTmVnID0gaW5wdXQgPCAwO1xuICBsZXQgcGFkZGVkO1xuICBpZiAoaXNOZWcpIHtcbiAgICBwYWRkZWQgPSBcIi1cIiArIChcIlwiICsgLWlucHV0KS5wYWRTdGFydChuLCBcIjBcIik7XG4gIH0gZWxzZSB7XG4gICAgcGFkZGVkID0gKFwiXCIgKyBpbnB1dCkucGFkU3RhcnQobiwgXCIwXCIpO1xuICB9XG4gIHJldHVybiBwYWRkZWQ7XG59XG5cbmZ1bmN0aW9uIHBhcnNlSW50ZWdlcihzdHJpbmcpIHtcbiAgaWYgKGlzVW5kZWZpbmVkKHN0cmluZykgfHwgc3RyaW5nID09PSBudWxsIHx8IHN0cmluZyA9PT0gXCJcIikge1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHBhcnNlSW50KHN0cmluZywgMTApO1xuICB9XG59XG5cbmZ1bmN0aW9uIHBhcnNlRmxvYXRpbmcoc3RyaW5nKSB7XG4gIGlmIChpc1VuZGVmaW5lZChzdHJpbmcpIHx8IHN0cmluZyA9PT0gbnVsbCB8fCBzdHJpbmcgPT09IFwiXCIpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBwYXJzZUZsb2F0KHN0cmluZyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcGFyc2VNaWxsaXMoZnJhY3Rpb24pIHtcbiAgLy8gUmV0dXJuIHVuZGVmaW5lZCAoaW5zdGVhZCBvZiAwKSBpbiB0aGVzZSBjYXNlcywgd2hlcmUgZnJhY3Rpb24gaXMgbm90IHNldFxuICBpZiAoaXNVbmRlZmluZWQoZnJhY3Rpb24pIHx8IGZyYWN0aW9uID09PSBudWxsIHx8IGZyYWN0aW9uID09PSBcIlwiKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBmID0gcGFyc2VGbG9hdChcIjAuXCIgKyBmcmFjdGlvbikgKiAxMDAwO1xuICAgIHJldHVybiBNYXRoLmZsb29yKGYpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJvdW5kVG8obnVtYmVyLCBkaWdpdHMsIHRvd2FyZFplcm8gPSBmYWxzZSkge1xuICBjb25zdCBmYWN0b3IgPSAxMCAqKiBkaWdpdHMsXG4gICAgcm91bmRlciA9IHRvd2FyZFplcm8gPyBNYXRoLnRydW5jIDogTWF0aC5yb3VuZDtcbiAgcmV0dXJuIHJvdW5kZXIobnVtYmVyICogZmFjdG9yKSAvIGZhY3Rvcjtcbn1cblxuLy8gREFURSBCQVNJQ1NcblxuZnVuY3Rpb24gaXNMZWFwWWVhcih5ZWFyKSB7XG4gIHJldHVybiB5ZWFyICUgNCA9PT0gMCAmJiAoeWVhciAlIDEwMCAhPT0gMCB8fCB5ZWFyICUgNDAwID09PSAwKTtcbn1cblxuZnVuY3Rpb24gZGF5c0luWWVhcih5ZWFyKSB7XG4gIHJldHVybiBpc0xlYXBZZWFyKHllYXIpID8gMzY2IDogMzY1O1xufVxuXG5mdW5jdGlvbiBkYXlzSW5Nb250aCh5ZWFyLCBtb250aCkge1xuICBjb25zdCBtb2RNb250aCA9IGZsb29yTW9kKG1vbnRoIC0gMSwgMTIpICsgMSxcbiAgICBtb2RZZWFyID0geWVhciArIChtb250aCAtIG1vZE1vbnRoKSAvIDEyO1xuXG4gIGlmIChtb2RNb250aCA9PT0gMikge1xuICAgIHJldHVybiBpc0xlYXBZZWFyKG1vZFllYXIpID8gMjkgOiAyODtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gWzMxLCBudWxsLCAzMSwgMzAsIDMxLCAzMCwgMzEsIDMxLCAzMCwgMzEsIDMwLCAzMV1bbW9kTW9udGggLSAxXTtcbiAgfVxufVxuXG4vLyBjb3ZlcnQgYSBjYWxlbmRhciBvYmplY3QgdG8gYSBsb2NhbCB0aW1lc3RhbXAgKGVwb2NoLCBidXQgd2l0aCB0aGUgb2Zmc2V0IGJha2VkIGluKVxuZnVuY3Rpb24gb2JqVG9Mb2NhbFRTKG9iaikge1xuICBsZXQgZCA9IERhdGUuVVRDKFxuICAgIG9iai55ZWFyLFxuICAgIG9iai5tb250aCAtIDEsXG4gICAgb2JqLmRheSxcbiAgICBvYmouaG91cixcbiAgICBvYmoubWludXRlLFxuICAgIG9iai5zZWNvbmQsXG4gICAgb2JqLm1pbGxpc2Vjb25kXG4gICk7XG5cbiAgLy8gZm9yIGxlZ2FjeSByZWFzb25zLCB5ZWFycyBiZXR3ZWVuIDAgYW5kIDk5IGFyZSBpbnRlcnByZXRlZCBhcyAxOVhYOyByZXZlcnQgdGhhdFxuICBpZiAob2JqLnllYXIgPCAxMDAgJiYgb2JqLnllYXIgPj0gMCkge1xuICAgIGQgPSBuZXcgRGF0ZShkKTtcbiAgICBkLnNldFVUQ0Z1bGxZZWFyKGQuZ2V0VVRDRnVsbFllYXIoKSAtIDE5MDApO1xuICB9XG4gIHJldHVybiArZDtcbn1cblxuZnVuY3Rpb24gd2Vla3NJbldlZWtZZWFyKHdlZWtZZWFyKSB7XG4gIGNvbnN0IHAxID1cbiAgICAgICh3ZWVrWWVhciArXG4gICAgICAgIE1hdGguZmxvb3Iod2Vla1llYXIgLyA0KSAtXG4gICAgICAgIE1hdGguZmxvb3Iod2Vla1llYXIgLyAxMDApICtcbiAgICAgICAgTWF0aC5mbG9vcih3ZWVrWWVhciAvIDQwMCkpICVcbiAgICAgIDcsXG4gICAgbGFzdCA9IHdlZWtZZWFyIC0gMSxcbiAgICBwMiA9IChsYXN0ICsgTWF0aC5mbG9vcihsYXN0IC8gNCkgLSBNYXRoLmZsb29yKGxhc3QgLyAxMDApICsgTWF0aC5mbG9vcihsYXN0IC8gNDAwKSkgJSA3O1xuICByZXR1cm4gcDEgPT09IDQgfHwgcDIgPT09IDMgPyA1MyA6IDUyO1xufVxuXG5mdW5jdGlvbiB1bnRydW5jYXRlWWVhcih5ZWFyKSB7XG4gIGlmICh5ZWFyID4gOTkpIHtcbiAgICByZXR1cm4geWVhcjtcbiAgfSBlbHNlIHJldHVybiB5ZWFyID4gU2V0dGluZ3MudHdvRGlnaXRDdXRvZmZZZWFyID8gMTkwMCArIHllYXIgOiAyMDAwICsgeWVhcjtcbn1cblxuLy8gUEFSU0lOR1xuXG5mdW5jdGlvbiBwYXJzZVpvbmVJbmZvKHRzLCBvZmZzZXRGb3JtYXQsIGxvY2FsZSwgdGltZVpvbmUgPSBudWxsKSB7XG4gIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSh0cyksXG4gICAgaW50bE9wdHMgPSB7XG4gICAgICBob3VyQ3ljbGU6IFwiaDIzXCIsXG4gICAgICB5ZWFyOiBcIm51bWVyaWNcIixcbiAgICAgIG1vbnRoOiBcIjItZGlnaXRcIixcbiAgICAgIGRheTogXCIyLWRpZ2l0XCIsXG4gICAgICBob3VyOiBcIjItZGlnaXRcIixcbiAgICAgIG1pbnV0ZTogXCIyLWRpZ2l0XCIsXG4gICAgfTtcblxuICBpZiAodGltZVpvbmUpIHtcbiAgICBpbnRsT3B0cy50aW1lWm9uZSA9IHRpbWVab25lO1xuICB9XG5cbiAgY29uc3QgbW9kaWZpZWQgPSB7IHRpbWVab25lTmFtZTogb2Zmc2V0Rm9ybWF0LCAuLi5pbnRsT3B0cyB9O1xuXG4gIGNvbnN0IHBhcnNlZCA9IG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KGxvY2FsZSwgbW9kaWZpZWQpXG4gICAgLmZvcm1hdFRvUGFydHMoZGF0ZSlcbiAgICAuZmluZCgobSkgPT4gbS50eXBlLnRvTG93ZXJDYXNlKCkgPT09IFwidGltZXpvbmVuYW1lXCIpO1xuICByZXR1cm4gcGFyc2VkID8gcGFyc2VkLnZhbHVlIDogbnVsbDtcbn1cblxuLy8gc2lnbmVkT2Zmc2V0KCctNScsICczMCcpIC0+IC0zMzBcbmZ1bmN0aW9uIHNpZ25lZE9mZnNldChvZmZIb3VyU3RyLCBvZmZNaW51dGVTdHIpIHtcbiAgbGV0IG9mZkhvdXIgPSBwYXJzZUludChvZmZIb3VyU3RyLCAxMCk7XG5cbiAgLy8gZG9uJ3QgfHwgdGhpcyBiZWNhdXNlIHdlIHdhbnQgdG8gcHJlc2VydmUgLTBcbiAgaWYgKE51bWJlci5pc05hTihvZmZIb3VyKSkge1xuICAgIG9mZkhvdXIgPSAwO1xuICB9XG5cbiAgY29uc3Qgb2ZmTWluID0gcGFyc2VJbnQob2ZmTWludXRlU3RyLCAxMCkgfHwgMCxcbiAgICBvZmZNaW5TaWduZWQgPSBvZmZIb3VyIDwgMCB8fCBPYmplY3QuaXMob2ZmSG91ciwgLTApID8gLW9mZk1pbiA6IG9mZk1pbjtcbiAgcmV0dXJuIG9mZkhvdXIgKiA2MCArIG9mZk1pblNpZ25lZDtcbn1cblxuLy8gQ09FUkNJT05cblxuZnVuY3Rpb24gYXNOdW1iZXIodmFsdWUpIHtcbiAgY29uc3QgbnVtZXJpY1ZhbHVlID0gTnVtYmVyKHZhbHVlKTtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJib29sZWFuXCIgfHwgdmFsdWUgPT09IFwiXCIgfHwgTnVtYmVyLmlzTmFOKG51bWVyaWNWYWx1ZSkpXG4gICAgdGhyb3cgbmV3IEludmFsaWRBcmd1bWVudEVycm9yKGBJbnZhbGlkIHVuaXQgdmFsdWUgJHt2YWx1ZX1gKTtcbiAgcmV0dXJuIG51bWVyaWNWYWx1ZTtcbn1cblxuZnVuY3Rpb24gbm9ybWFsaXplT2JqZWN0KG9iaiwgbm9ybWFsaXplcikge1xuICBjb25zdCBub3JtYWxpemVkID0ge307XG4gIGZvciAoY29uc3QgdSBpbiBvYmopIHtcbiAgICBpZiAoaGFzT3duUHJvcGVydHkob2JqLCB1KSkge1xuICAgICAgY29uc3QgdiA9IG9ialt1XTtcbiAgICAgIGlmICh2ID09PSB1bmRlZmluZWQgfHwgdiA9PT0gbnVsbCkgY29udGludWU7XG4gICAgICBub3JtYWxpemVkW25vcm1hbGl6ZXIodSldID0gYXNOdW1iZXIodik7XG4gICAgfVxuICB9XG4gIHJldHVybiBub3JtYWxpemVkO1xufVxuXG5mdW5jdGlvbiBmb3JtYXRPZmZzZXQob2Zmc2V0LCBmb3JtYXQpIHtcbiAgY29uc3QgaG91cnMgPSBNYXRoLnRydW5jKE1hdGguYWJzKG9mZnNldCAvIDYwKSksXG4gICAgbWludXRlcyA9IE1hdGgudHJ1bmMoTWF0aC5hYnMob2Zmc2V0ICUgNjApKSxcbiAgICBzaWduID0gb2Zmc2V0ID49IDAgPyBcIitcIiA6IFwiLVwiO1xuXG4gIHN3aXRjaCAoZm9ybWF0KSB7XG4gICAgY2FzZSBcInNob3J0XCI6XG4gICAgICByZXR1cm4gYCR7c2lnbn0ke3BhZFN0YXJ0KGhvdXJzLCAyKX06JHtwYWRTdGFydChtaW51dGVzLCAyKX1gO1xuICAgIGNhc2UgXCJuYXJyb3dcIjpcbiAgICAgIHJldHVybiBgJHtzaWdufSR7aG91cnN9JHttaW51dGVzID4gMCA/IGA6JHttaW51dGVzfWAgOiBcIlwifWA7XG4gICAgY2FzZSBcInRlY2hpZVwiOlxuICAgICAgcmV0dXJuIGAke3NpZ259JHtwYWRTdGFydChob3VycywgMil9JHtwYWRTdGFydChtaW51dGVzLCAyKX1gO1xuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihgVmFsdWUgZm9ybWF0ICR7Zm9ybWF0fSBpcyBvdXQgb2YgcmFuZ2UgZm9yIHByb3BlcnR5IGZvcm1hdGApO1xuICB9XG59XG5cbmZ1bmN0aW9uIHRpbWVPYmplY3Qob2JqKSB7XG4gIHJldHVybiBwaWNrKG9iaiwgW1wiaG91clwiLCBcIm1pbnV0ZVwiLCBcInNlY29uZFwiLCBcIm1pbGxpc2Vjb25kXCJdKTtcbn1cblxuLyoqXG4gKiBAcHJpdmF0ZVxuICovXG5cbmNvbnN0IG1vbnRoc0xvbmcgPSBbXG4gIFwiSmFudWFyeVwiLFxuICBcIkZlYnJ1YXJ5XCIsXG4gIFwiTWFyY2hcIixcbiAgXCJBcHJpbFwiLFxuICBcIk1heVwiLFxuICBcIkp1bmVcIixcbiAgXCJKdWx5XCIsXG4gIFwiQXVndXN0XCIsXG4gIFwiU2VwdGVtYmVyXCIsXG4gIFwiT2N0b2JlclwiLFxuICBcIk5vdmVtYmVyXCIsXG4gIFwiRGVjZW1iZXJcIixcbl07XG5cbmNvbnN0IG1vbnRoc1Nob3J0ID0gW1xuICBcIkphblwiLFxuICBcIkZlYlwiLFxuICBcIk1hclwiLFxuICBcIkFwclwiLFxuICBcIk1heVwiLFxuICBcIkp1blwiLFxuICBcIkp1bFwiLFxuICBcIkF1Z1wiLFxuICBcIlNlcFwiLFxuICBcIk9jdFwiLFxuICBcIk5vdlwiLFxuICBcIkRlY1wiLFxuXTtcblxuY29uc3QgbW9udGhzTmFycm93ID0gW1wiSlwiLCBcIkZcIiwgXCJNXCIsIFwiQVwiLCBcIk1cIiwgXCJKXCIsIFwiSlwiLCBcIkFcIiwgXCJTXCIsIFwiT1wiLCBcIk5cIiwgXCJEXCJdO1xuXG5mdW5jdGlvbiBtb250aHMobGVuZ3RoKSB7XG4gIHN3aXRjaCAobGVuZ3RoKSB7XG4gICAgY2FzZSBcIm5hcnJvd1wiOlxuICAgICAgcmV0dXJuIFsuLi5tb250aHNOYXJyb3ddO1xuICAgIGNhc2UgXCJzaG9ydFwiOlxuICAgICAgcmV0dXJuIFsuLi5tb250aHNTaG9ydF07XG4gICAgY2FzZSBcImxvbmdcIjpcbiAgICAgIHJldHVybiBbLi4ubW9udGhzTG9uZ107XG4gICAgY2FzZSBcIm51bWVyaWNcIjpcbiAgICAgIHJldHVybiBbXCIxXCIsIFwiMlwiLCBcIjNcIiwgXCI0XCIsIFwiNVwiLCBcIjZcIiwgXCI3XCIsIFwiOFwiLCBcIjlcIiwgXCIxMFwiLCBcIjExXCIsIFwiMTJcIl07XG4gICAgY2FzZSBcIjItZGlnaXRcIjpcbiAgICAgIHJldHVybiBbXCIwMVwiLCBcIjAyXCIsIFwiMDNcIiwgXCIwNFwiLCBcIjA1XCIsIFwiMDZcIiwgXCIwN1wiLCBcIjA4XCIsIFwiMDlcIiwgXCIxMFwiLCBcIjExXCIsIFwiMTJcIl07XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbmNvbnN0IHdlZWtkYXlzTG9uZyA9IFtcbiAgXCJNb25kYXlcIixcbiAgXCJUdWVzZGF5XCIsXG4gIFwiV2VkbmVzZGF5XCIsXG4gIFwiVGh1cnNkYXlcIixcbiAgXCJGcmlkYXlcIixcbiAgXCJTYXR1cmRheVwiLFxuICBcIlN1bmRheVwiLFxuXTtcblxuY29uc3Qgd2Vla2RheXNTaG9ydCA9IFtcIk1vblwiLCBcIlR1ZVwiLCBcIldlZFwiLCBcIlRodVwiLCBcIkZyaVwiLCBcIlNhdFwiLCBcIlN1blwiXTtcblxuY29uc3Qgd2Vla2RheXNOYXJyb3cgPSBbXCJNXCIsIFwiVFwiLCBcIldcIiwgXCJUXCIsIFwiRlwiLCBcIlNcIiwgXCJTXCJdO1xuXG5mdW5jdGlvbiB3ZWVrZGF5cyhsZW5ndGgpIHtcbiAgc3dpdGNoIChsZW5ndGgpIHtcbiAgICBjYXNlIFwibmFycm93XCI6XG4gICAgICByZXR1cm4gWy4uLndlZWtkYXlzTmFycm93XTtcbiAgICBjYXNlIFwic2hvcnRcIjpcbiAgICAgIHJldHVybiBbLi4ud2Vla2RheXNTaG9ydF07XG4gICAgY2FzZSBcImxvbmdcIjpcbiAgICAgIHJldHVybiBbLi4ud2Vla2RheXNMb25nXTtcbiAgICBjYXNlIFwibnVtZXJpY1wiOlxuICAgICAgcmV0dXJuIFtcIjFcIiwgXCIyXCIsIFwiM1wiLCBcIjRcIiwgXCI1XCIsIFwiNlwiLCBcIjdcIl07XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbmNvbnN0IG1lcmlkaWVtcyA9IFtcIkFNXCIsIFwiUE1cIl07XG5cbmNvbnN0IGVyYXNMb25nID0gW1wiQmVmb3JlIENocmlzdFwiLCBcIkFubm8gRG9taW5pXCJdO1xuXG5jb25zdCBlcmFzU2hvcnQgPSBbXCJCQ1wiLCBcIkFEXCJdO1xuXG5jb25zdCBlcmFzTmFycm93ID0gW1wiQlwiLCBcIkFcIl07XG5cbmZ1bmN0aW9uIGVyYXMobGVuZ3RoKSB7XG4gIHN3aXRjaCAobGVuZ3RoKSB7XG4gICAgY2FzZSBcIm5hcnJvd1wiOlxuICAgICAgcmV0dXJuIFsuLi5lcmFzTmFycm93XTtcbiAgICBjYXNlIFwic2hvcnRcIjpcbiAgICAgIHJldHVybiBbLi4uZXJhc1Nob3J0XTtcbiAgICBjYXNlIFwibG9uZ1wiOlxuICAgICAgcmV0dXJuIFsuLi5lcmFzTG9uZ107XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbmZ1bmN0aW9uIG1lcmlkaWVtRm9yRGF0ZVRpbWUoZHQpIHtcbiAgcmV0dXJuIG1lcmlkaWVtc1tkdC5ob3VyIDwgMTIgPyAwIDogMV07XG59XG5cbmZ1bmN0aW9uIHdlZWtkYXlGb3JEYXRlVGltZShkdCwgbGVuZ3RoKSB7XG4gIHJldHVybiB3ZWVrZGF5cyhsZW5ndGgpW2R0LndlZWtkYXkgLSAxXTtcbn1cblxuZnVuY3Rpb24gbW9udGhGb3JEYXRlVGltZShkdCwgbGVuZ3RoKSB7XG4gIHJldHVybiBtb250aHMobGVuZ3RoKVtkdC5tb250aCAtIDFdO1xufVxuXG5mdW5jdGlvbiBlcmFGb3JEYXRlVGltZShkdCwgbGVuZ3RoKSB7XG4gIHJldHVybiBlcmFzKGxlbmd0aClbZHQueWVhciA8IDAgPyAwIDogMV07XG59XG5cbmZ1bmN0aW9uIGZvcm1hdFJlbGF0aXZlVGltZSh1bml0LCBjb3VudCwgbnVtZXJpYyA9IFwiYWx3YXlzXCIsIG5hcnJvdyA9IGZhbHNlKSB7XG4gIGNvbnN0IHVuaXRzID0ge1xuICAgIHllYXJzOiBbXCJ5ZWFyXCIsIFwieXIuXCJdLFxuICAgIHF1YXJ0ZXJzOiBbXCJxdWFydGVyXCIsIFwicXRyLlwiXSxcbiAgICBtb250aHM6IFtcIm1vbnRoXCIsIFwibW8uXCJdLFxuICAgIHdlZWtzOiBbXCJ3ZWVrXCIsIFwid2suXCJdLFxuICAgIGRheXM6IFtcImRheVwiLCBcImRheVwiLCBcImRheXNcIl0sXG4gICAgaG91cnM6IFtcImhvdXJcIiwgXCJoci5cIl0sXG4gICAgbWludXRlczogW1wibWludXRlXCIsIFwibWluLlwiXSxcbiAgICBzZWNvbmRzOiBbXCJzZWNvbmRcIiwgXCJzZWMuXCJdLFxuICB9O1xuXG4gIGNvbnN0IGxhc3RhYmxlID0gW1wiaG91cnNcIiwgXCJtaW51dGVzXCIsIFwic2Vjb25kc1wiXS5pbmRleE9mKHVuaXQpID09PSAtMTtcblxuICBpZiAobnVtZXJpYyA9PT0gXCJhdXRvXCIgJiYgbGFzdGFibGUpIHtcbiAgICBjb25zdCBpc0RheSA9IHVuaXQgPT09IFwiZGF5c1wiO1xuICAgIHN3aXRjaCAoY291bnQpIHtcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgcmV0dXJuIGlzRGF5ID8gXCJ0b21vcnJvd1wiIDogYG5leHQgJHt1bml0c1t1bml0XVswXX1gO1xuICAgICAgY2FzZSAtMTpcbiAgICAgICAgcmV0dXJuIGlzRGF5ID8gXCJ5ZXN0ZXJkYXlcIiA6IGBsYXN0ICR7dW5pdHNbdW5pdF1bMF19YDtcbiAgICAgIGNhc2UgMDpcbiAgICAgICAgcmV0dXJuIGlzRGF5ID8gXCJ0b2RheVwiIDogYHRoaXMgJHt1bml0c1t1bml0XVswXX1gO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGlzSW5QYXN0ID0gT2JqZWN0LmlzKGNvdW50LCAtMCkgfHwgY291bnQgPCAwLFxuICAgIGZtdFZhbHVlID0gTWF0aC5hYnMoY291bnQpLFxuICAgIHNpbmd1bGFyID0gZm10VmFsdWUgPT09IDEsXG4gICAgbGlsVW5pdHMgPSB1bml0c1t1bml0XSxcbiAgICBmbXRVbml0ID0gbmFycm93XG4gICAgICA/IHNpbmd1bGFyXG4gICAgICAgID8gbGlsVW5pdHNbMV1cbiAgICAgICAgOiBsaWxVbml0c1syXSB8fCBsaWxVbml0c1sxXVxuICAgICAgOiBzaW5ndWxhclxuICAgICAgPyB1bml0c1t1bml0XVswXVxuICAgICAgOiB1bml0O1xuICByZXR1cm4gaXNJblBhc3QgPyBgJHtmbXRWYWx1ZX0gJHtmbXRVbml0fSBhZ29gIDogYGluICR7Zm10VmFsdWV9ICR7Zm10VW5pdH1gO1xufVxuXG5mdW5jdGlvbiBzdHJpbmdpZnlUb2tlbnMoc3BsaXRzLCB0b2tlblRvU3RyaW5nKSB7XG4gIGxldCBzID0gXCJcIjtcbiAgZm9yIChjb25zdCB0b2tlbiBvZiBzcGxpdHMpIHtcbiAgICBpZiAodG9rZW4ubGl0ZXJhbCkge1xuICAgICAgcyArPSB0b2tlbi52YWw7XG4gICAgfSBlbHNlIHtcbiAgICAgIHMgKz0gdG9rZW5Ub1N0cmluZyh0b2tlbi52YWwpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcztcbn1cblxuY29uc3QgbWFjcm9Ub2tlblRvRm9ybWF0T3B0cyA9IHtcbiAgRDogREFURV9TSE9SVCxcbiAgREQ6IERBVEVfTUVELFxuICBEREQ6IERBVEVfRlVMTCxcbiAgRERERDogREFURV9IVUdFLFxuICB0OiBUSU1FX1NJTVBMRSxcbiAgdHQ6IFRJTUVfV0lUSF9TRUNPTkRTLFxuICB0dHQ6IFRJTUVfV0lUSF9TSE9SVF9PRkZTRVQsXG4gIHR0dHQ6IFRJTUVfV0lUSF9MT05HX09GRlNFVCxcbiAgVDogVElNRV8yNF9TSU1QTEUsXG4gIFRUOiBUSU1FXzI0X1dJVEhfU0VDT05EUyxcbiAgVFRUOiBUSU1FXzI0X1dJVEhfU0hPUlRfT0ZGU0VULFxuICBUVFRUOiBUSU1FXzI0X1dJVEhfTE9OR19PRkZTRVQsXG4gIGY6IERBVEVUSU1FX1NIT1JULFxuICBmZjogREFURVRJTUVfTUVELFxuICBmZmY6IERBVEVUSU1FX0ZVTEwsXG4gIGZmZmY6IERBVEVUSU1FX0hVR0UsXG4gIEY6IERBVEVUSU1FX1NIT1JUX1dJVEhfU0VDT05EUyxcbiAgRkY6IERBVEVUSU1FX01FRF9XSVRIX1NFQ09ORFMsXG4gIEZGRjogREFURVRJTUVfRlVMTF9XSVRIX1NFQ09ORFMsXG4gIEZGRkY6IERBVEVUSU1FX0hVR0VfV0lUSF9TRUNPTkRTLFxufTtcblxuLyoqXG4gKiBAcHJpdmF0ZVxuICovXG5cbmNsYXNzIEZvcm1hdHRlciB7XG4gIHN0YXRpYyBjcmVhdGUobG9jYWxlLCBvcHRzID0ge30pIHtcbiAgICByZXR1cm4gbmV3IEZvcm1hdHRlcihsb2NhbGUsIG9wdHMpO1xuICB9XG5cbiAgc3RhdGljIHBhcnNlRm9ybWF0KGZtdCkge1xuICAgIGxldCBjdXJyZW50ID0gbnVsbCxcbiAgICAgIGN1cnJlbnRGdWxsID0gXCJcIixcbiAgICAgIGJyYWNrZXRlZCA9IGZhbHNlO1xuICAgIGNvbnN0IHNwbGl0cyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZm10Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBjID0gZm10LmNoYXJBdChpKTtcbiAgICAgIGlmIChjID09PSBcIidcIikge1xuICAgICAgICBpZiAoY3VycmVudEZ1bGwubGVuZ3RoID4gMCkge1xuICAgICAgICAgIHNwbGl0cy5wdXNoKHsgbGl0ZXJhbDogYnJhY2tldGVkLCB2YWw6IGN1cnJlbnRGdWxsIH0pO1xuICAgICAgICB9XG4gICAgICAgIGN1cnJlbnQgPSBudWxsO1xuICAgICAgICBjdXJyZW50RnVsbCA9IFwiXCI7XG4gICAgICAgIGJyYWNrZXRlZCA9ICFicmFja2V0ZWQ7XG4gICAgICB9IGVsc2UgaWYgKGJyYWNrZXRlZCkge1xuICAgICAgICBjdXJyZW50RnVsbCArPSBjO1xuICAgICAgfSBlbHNlIGlmIChjID09PSBjdXJyZW50KSB7XG4gICAgICAgIGN1cnJlbnRGdWxsICs9IGM7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoY3VycmVudEZ1bGwubGVuZ3RoID4gMCkge1xuICAgICAgICAgIHNwbGl0cy5wdXNoKHsgbGl0ZXJhbDogZmFsc2UsIHZhbDogY3VycmVudEZ1bGwgfSk7XG4gICAgICAgIH1cbiAgICAgICAgY3VycmVudEZ1bGwgPSBjO1xuICAgICAgICBjdXJyZW50ID0gYztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoY3VycmVudEZ1bGwubGVuZ3RoID4gMCkge1xuICAgICAgc3BsaXRzLnB1c2goeyBsaXRlcmFsOiBicmFja2V0ZWQsIHZhbDogY3VycmVudEZ1bGwgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNwbGl0cztcbiAgfVxuXG4gIHN0YXRpYyBtYWNyb1Rva2VuVG9Gb3JtYXRPcHRzKHRva2VuKSB7XG4gICAgcmV0dXJuIG1hY3JvVG9rZW5Ub0Zvcm1hdE9wdHNbdG9rZW5dO1xuICB9XG5cbiAgY29uc3RydWN0b3IobG9jYWxlLCBmb3JtYXRPcHRzKSB7XG4gICAgdGhpcy5vcHRzID0gZm9ybWF0T3B0cztcbiAgICB0aGlzLmxvYyA9IGxvY2FsZTtcbiAgICB0aGlzLnN5c3RlbUxvYyA9IG51bGw7XG4gIH1cblxuICBmb3JtYXRXaXRoU3lzdGVtRGVmYXVsdChkdCwgb3B0cykge1xuICAgIGlmICh0aGlzLnN5c3RlbUxvYyA9PT0gbnVsbCkge1xuICAgICAgdGhpcy5zeXN0ZW1Mb2MgPSB0aGlzLmxvYy5yZWRlZmF1bHRUb1N5c3RlbSgpO1xuICAgIH1cbiAgICBjb25zdCBkZiA9IHRoaXMuc3lzdGVtTG9jLmR0Rm9ybWF0dGVyKGR0LCB7IC4uLnRoaXMub3B0cywgLi4ub3B0cyB9KTtcbiAgICByZXR1cm4gZGYuZm9ybWF0KCk7XG4gIH1cblxuICBmb3JtYXREYXRlVGltZShkdCwgb3B0cyA9IHt9KSB7XG4gICAgY29uc3QgZGYgPSB0aGlzLmxvYy5kdEZvcm1hdHRlcihkdCwgeyAuLi50aGlzLm9wdHMsIC4uLm9wdHMgfSk7XG4gICAgcmV0dXJuIGRmLmZvcm1hdCgpO1xuICB9XG5cbiAgZm9ybWF0RGF0ZVRpbWVQYXJ0cyhkdCwgb3B0cyA9IHt9KSB7XG4gICAgY29uc3QgZGYgPSB0aGlzLmxvYy5kdEZvcm1hdHRlcihkdCwgeyAuLi50aGlzLm9wdHMsIC4uLm9wdHMgfSk7XG4gICAgcmV0dXJuIGRmLmZvcm1hdFRvUGFydHMoKTtcbiAgfVxuXG4gIGZvcm1hdEludGVydmFsKGludGVydmFsLCBvcHRzID0ge30pIHtcbiAgICBjb25zdCBkZiA9IHRoaXMubG9jLmR0Rm9ybWF0dGVyKGludGVydmFsLnN0YXJ0LCB7IC4uLnRoaXMub3B0cywgLi4ub3B0cyB9KTtcbiAgICByZXR1cm4gZGYuZHRmLmZvcm1hdFJhbmdlKGludGVydmFsLnN0YXJ0LnRvSlNEYXRlKCksIGludGVydmFsLmVuZC50b0pTRGF0ZSgpKTtcbiAgfVxuXG4gIHJlc29sdmVkT3B0aW9ucyhkdCwgb3B0cyA9IHt9KSB7XG4gICAgY29uc3QgZGYgPSB0aGlzLmxvYy5kdEZvcm1hdHRlcihkdCwgeyAuLi50aGlzLm9wdHMsIC4uLm9wdHMgfSk7XG4gICAgcmV0dXJuIGRmLnJlc29sdmVkT3B0aW9ucygpO1xuICB9XG5cbiAgbnVtKG4sIHAgPSAwKSB7XG4gICAgLy8gd2UgZ2V0IHNvbWUgcGVyZiBvdXQgb2YgZG9pbmcgdGhpcyBoZXJlLCBhbm5veWluZ2x5XG4gICAgaWYgKHRoaXMub3B0cy5mb3JjZVNpbXBsZSkge1xuICAgICAgcmV0dXJuIHBhZFN0YXJ0KG4sIHApO1xuICAgIH1cblxuICAgIGNvbnN0IG9wdHMgPSB7IC4uLnRoaXMub3B0cyB9O1xuXG4gICAgaWYgKHAgPiAwKSB7XG4gICAgICBvcHRzLnBhZFRvID0gcDtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5sb2MubnVtYmVyRm9ybWF0dGVyKG9wdHMpLmZvcm1hdChuKTtcbiAgfVxuXG4gIGZvcm1hdERhdGVUaW1lRnJvbVN0cmluZyhkdCwgZm10KSB7XG4gICAgY29uc3Qga25vd25FbmdsaXNoID0gdGhpcy5sb2MubGlzdGluZ01vZGUoKSA9PT0gXCJlblwiLFxuICAgICAgdXNlRGF0ZVRpbWVGb3JtYXR0ZXIgPSB0aGlzLmxvYy5vdXRwdXRDYWxlbmRhciAmJiB0aGlzLmxvYy5vdXRwdXRDYWxlbmRhciAhPT0gXCJncmVnb3J5XCIsXG4gICAgICBzdHJpbmcgPSAob3B0cywgZXh0cmFjdCkgPT4gdGhpcy5sb2MuZXh0cmFjdChkdCwgb3B0cywgZXh0cmFjdCksXG4gICAgICBmb3JtYXRPZmZzZXQgPSAob3B0cykgPT4ge1xuICAgICAgICBpZiAoZHQuaXNPZmZzZXRGaXhlZCAmJiBkdC5vZmZzZXQgPT09IDAgJiYgb3B0cy5hbGxvd1opIHtcbiAgICAgICAgICByZXR1cm4gXCJaXCI7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZHQuaXNWYWxpZCA/IGR0LnpvbmUuZm9ybWF0T2Zmc2V0KGR0LnRzLCBvcHRzLmZvcm1hdCkgOiBcIlwiO1xuICAgICAgfSxcbiAgICAgIG1lcmlkaWVtID0gKCkgPT5cbiAgICAgICAga25vd25FbmdsaXNoXG4gICAgICAgICAgPyBtZXJpZGllbUZvckRhdGVUaW1lKGR0KVxuICAgICAgICAgIDogc3RyaW5nKHsgaG91cjogXCJudW1lcmljXCIsIGhvdXJDeWNsZTogXCJoMTJcIiB9LCBcImRheXBlcmlvZFwiKSxcbiAgICAgIG1vbnRoID0gKGxlbmd0aCwgc3RhbmRhbG9uZSkgPT5cbiAgICAgICAga25vd25FbmdsaXNoXG4gICAgICAgICAgPyBtb250aEZvckRhdGVUaW1lKGR0LCBsZW5ndGgpXG4gICAgICAgICAgOiBzdHJpbmcoc3RhbmRhbG9uZSA/IHsgbW9udGg6IGxlbmd0aCB9IDogeyBtb250aDogbGVuZ3RoLCBkYXk6IFwibnVtZXJpY1wiIH0sIFwibW9udGhcIiksXG4gICAgICB3ZWVrZGF5ID0gKGxlbmd0aCwgc3RhbmRhbG9uZSkgPT5cbiAgICAgICAga25vd25FbmdsaXNoXG4gICAgICAgICAgPyB3ZWVrZGF5Rm9yRGF0ZVRpbWUoZHQsIGxlbmd0aClcbiAgICAgICAgICA6IHN0cmluZyhcbiAgICAgICAgICAgICAgc3RhbmRhbG9uZSA/IHsgd2Vla2RheTogbGVuZ3RoIH0gOiB7IHdlZWtkYXk6IGxlbmd0aCwgbW9udGg6IFwibG9uZ1wiLCBkYXk6IFwibnVtZXJpY1wiIH0sXG4gICAgICAgICAgICAgIFwid2Vla2RheVwiXG4gICAgICAgICAgICApLFxuICAgICAgbWF5YmVNYWNybyA9ICh0b2tlbikgPT4ge1xuICAgICAgICBjb25zdCBmb3JtYXRPcHRzID0gRm9ybWF0dGVyLm1hY3JvVG9rZW5Ub0Zvcm1hdE9wdHModG9rZW4pO1xuICAgICAgICBpZiAoZm9ybWF0T3B0cykge1xuICAgICAgICAgIHJldHVybiB0aGlzLmZvcm1hdFdpdGhTeXN0ZW1EZWZhdWx0KGR0LCBmb3JtYXRPcHRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdG9rZW47XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBlcmEgPSAobGVuZ3RoKSA9PlxuICAgICAgICBrbm93bkVuZ2xpc2ggPyBlcmFGb3JEYXRlVGltZShkdCwgbGVuZ3RoKSA6IHN0cmluZyh7IGVyYTogbGVuZ3RoIH0sIFwiZXJhXCIpLFxuICAgICAgdG9rZW5Ub1N0cmluZyA9ICh0b2tlbikgPT4ge1xuICAgICAgICAvLyBXaGVyZSBwb3NzaWJsZTogaHR0cDovL2NsZHIudW5pY29kZS5vcmcvdHJhbnNsYXRpb24vZGF0ZS10aW1lLTEvZGF0ZS10aW1lI1RPQy1TdGFuZGFsb25lLXZzLi1Gb3JtYXQtU3R5bGVzXG4gICAgICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgICAgICAvLyBtc1xuICAgICAgICAgIGNhc2UgXCJTXCI6XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5udW0oZHQubWlsbGlzZWNvbmQpO1xuICAgICAgICAgIGNhc2UgXCJ1XCI6XG4gICAgICAgICAgLy8gZmFsbHMgdGhyb3VnaFxuICAgICAgICAgIGNhc2UgXCJTU1NcIjpcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm51bShkdC5taWxsaXNlY29uZCwgMyk7XG4gICAgICAgICAgLy8gc2Vjb25kc1xuICAgICAgICAgIGNhc2UgXCJzXCI6XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5udW0oZHQuc2Vjb25kKTtcbiAgICAgICAgICBjYXNlIFwic3NcIjpcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm51bShkdC5zZWNvbmQsIDIpO1xuICAgICAgICAgIC8vIGZyYWN0aW9uYWwgc2Vjb25kc1xuICAgICAgICAgIGNhc2UgXCJ1dVwiOlxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubnVtKE1hdGguZmxvb3IoZHQubWlsbGlzZWNvbmQgLyAxMCksIDIpO1xuICAgICAgICAgIGNhc2UgXCJ1dXVcIjpcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm51bShNYXRoLmZsb29yKGR0Lm1pbGxpc2Vjb25kIC8gMTAwKSk7XG4gICAgICAgICAgLy8gbWludXRlc1xuICAgICAgICAgIGNhc2UgXCJtXCI6XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5udW0oZHQubWludXRlKTtcbiAgICAgICAgICBjYXNlIFwibW1cIjpcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm51bShkdC5taW51dGUsIDIpO1xuICAgICAgICAgIC8vIGhvdXJzXG4gICAgICAgICAgY2FzZSBcImhcIjpcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm51bShkdC5ob3VyICUgMTIgPT09IDAgPyAxMiA6IGR0LmhvdXIgJSAxMik7XG4gICAgICAgICAgY2FzZSBcImhoXCI6XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5udW0oZHQuaG91ciAlIDEyID09PSAwID8gMTIgOiBkdC5ob3VyICUgMTIsIDIpO1xuICAgICAgICAgIGNhc2UgXCJIXCI6XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5udW0oZHQuaG91cik7XG4gICAgICAgICAgY2FzZSBcIkhIXCI6XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5udW0oZHQuaG91ciwgMik7XG4gICAgICAgICAgLy8gb2Zmc2V0XG4gICAgICAgICAgY2FzZSBcIlpcIjpcbiAgICAgICAgICAgIC8vIGxpa2UgKzZcbiAgICAgICAgICAgIHJldHVybiBmb3JtYXRPZmZzZXQoeyBmb3JtYXQ6IFwibmFycm93XCIsIGFsbG93WjogdGhpcy5vcHRzLmFsbG93WiB9KTtcbiAgICAgICAgICBjYXNlIFwiWlpcIjpcbiAgICAgICAgICAgIC8vIGxpa2UgKzA2OjAwXG4gICAgICAgICAgICByZXR1cm4gZm9ybWF0T2Zmc2V0KHsgZm9ybWF0OiBcInNob3J0XCIsIGFsbG93WjogdGhpcy5vcHRzLmFsbG93WiB9KTtcbiAgICAgICAgICBjYXNlIFwiWlpaXCI6XG4gICAgICAgICAgICAvLyBsaWtlICswNjAwXG4gICAgICAgICAgICByZXR1cm4gZm9ybWF0T2Zmc2V0KHsgZm9ybWF0OiBcInRlY2hpZVwiLCBhbGxvd1o6IHRoaXMub3B0cy5hbGxvd1ogfSk7XG4gICAgICAgICAgY2FzZSBcIlpaWlpcIjpcbiAgICAgICAgICAgIC8vIGxpa2UgRVNUXG4gICAgICAgICAgICByZXR1cm4gZHQuem9uZS5vZmZzZXROYW1lKGR0LnRzLCB7IGZvcm1hdDogXCJzaG9ydFwiLCBsb2NhbGU6IHRoaXMubG9jLmxvY2FsZSB9KTtcbiAgICAgICAgICBjYXNlIFwiWlpaWlpcIjpcbiAgICAgICAgICAgIC8vIGxpa2UgRWFzdGVybiBTdGFuZGFyZCBUaW1lXG4gICAgICAgICAgICByZXR1cm4gZHQuem9uZS5vZmZzZXROYW1lKGR0LnRzLCB7IGZvcm1hdDogXCJsb25nXCIsIGxvY2FsZTogdGhpcy5sb2MubG9jYWxlIH0pO1xuICAgICAgICAgIC8vIHpvbmVcbiAgICAgICAgICBjYXNlIFwielwiOlxuICAgICAgICAgICAgLy8gbGlrZSBBbWVyaWNhL05ld19Zb3JrXG4gICAgICAgICAgICByZXR1cm4gZHQuem9uZU5hbWU7XG4gICAgICAgICAgLy8gbWVyaWRpZW1zXG4gICAgICAgICAgY2FzZSBcImFcIjpcbiAgICAgICAgICAgIHJldHVybiBtZXJpZGllbSgpO1xuICAgICAgICAgIC8vIGRhdGVzXG4gICAgICAgICAgY2FzZSBcImRcIjpcbiAgICAgICAgICAgIHJldHVybiB1c2VEYXRlVGltZUZvcm1hdHRlciA/IHN0cmluZyh7IGRheTogXCJudW1lcmljXCIgfSwgXCJkYXlcIikgOiB0aGlzLm51bShkdC5kYXkpO1xuICAgICAgICAgIGNhc2UgXCJkZFwiOlxuICAgICAgICAgICAgcmV0dXJuIHVzZURhdGVUaW1lRm9ybWF0dGVyID8gc3RyaW5nKHsgZGF5OiBcIjItZGlnaXRcIiB9LCBcImRheVwiKSA6IHRoaXMubnVtKGR0LmRheSwgMik7XG4gICAgICAgICAgLy8gd2Vla2RheXMgLSBzdGFuZGFsb25lXG4gICAgICAgICAgY2FzZSBcImNcIjpcbiAgICAgICAgICAgIC8vIGxpa2UgMVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubnVtKGR0LndlZWtkYXkpO1xuICAgICAgICAgIGNhc2UgXCJjY2NcIjpcbiAgICAgICAgICAgIC8vIGxpa2UgJ1R1ZXMnXG4gICAgICAgICAgICByZXR1cm4gd2Vla2RheShcInNob3J0XCIsIHRydWUpO1xuICAgICAgICAgIGNhc2UgXCJjY2NjXCI6XG4gICAgICAgICAgICAvLyBsaWtlICdUdWVzZGF5J1xuICAgICAgICAgICAgcmV0dXJuIHdlZWtkYXkoXCJsb25nXCIsIHRydWUpO1xuICAgICAgICAgIGNhc2UgXCJjY2NjY1wiOlxuICAgICAgICAgICAgLy8gbGlrZSAnVCdcbiAgICAgICAgICAgIHJldHVybiB3ZWVrZGF5KFwibmFycm93XCIsIHRydWUpO1xuICAgICAgICAgIC8vIHdlZWtkYXlzIC0gZm9ybWF0XG4gICAgICAgICAgY2FzZSBcIkVcIjpcbiAgICAgICAgICAgIC8vIGxpa2UgMVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubnVtKGR0LndlZWtkYXkpO1xuICAgICAgICAgIGNhc2UgXCJFRUVcIjpcbiAgICAgICAgICAgIC8vIGxpa2UgJ1R1ZXMnXG4gICAgICAgICAgICByZXR1cm4gd2Vla2RheShcInNob3J0XCIsIGZhbHNlKTtcbiAgICAgICAgICBjYXNlIFwiRUVFRVwiOlxuICAgICAgICAgICAgLy8gbGlrZSAnVHVlc2RheSdcbiAgICAgICAgICAgIHJldHVybiB3ZWVrZGF5KFwibG9uZ1wiLCBmYWxzZSk7XG4gICAgICAgICAgY2FzZSBcIkVFRUVFXCI6XG4gICAgICAgICAgICAvLyBsaWtlICdUJ1xuICAgICAgICAgICAgcmV0dXJuIHdlZWtkYXkoXCJuYXJyb3dcIiwgZmFsc2UpO1xuICAgICAgICAgIC8vIG1vbnRocyAtIHN0YW5kYWxvbmVcbiAgICAgICAgICBjYXNlIFwiTFwiOlxuICAgICAgICAgICAgLy8gbGlrZSAxXG4gICAgICAgICAgICByZXR1cm4gdXNlRGF0ZVRpbWVGb3JtYXR0ZXJcbiAgICAgICAgICAgICAgPyBzdHJpbmcoeyBtb250aDogXCJudW1lcmljXCIsIGRheTogXCJudW1lcmljXCIgfSwgXCJtb250aFwiKVxuICAgICAgICAgICAgICA6IHRoaXMubnVtKGR0Lm1vbnRoKTtcbiAgICAgICAgICBjYXNlIFwiTExcIjpcbiAgICAgICAgICAgIC8vIGxpa2UgMDEsIGRvZXNuJ3Qgc2VlbSB0byB3b3JrXG4gICAgICAgICAgICByZXR1cm4gdXNlRGF0ZVRpbWVGb3JtYXR0ZXJcbiAgICAgICAgICAgICAgPyBzdHJpbmcoeyBtb250aDogXCIyLWRpZ2l0XCIsIGRheTogXCJudW1lcmljXCIgfSwgXCJtb250aFwiKVxuICAgICAgICAgICAgICA6IHRoaXMubnVtKGR0Lm1vbnRoLCAyKTtcbiAgICAgICAgICBjYXNlIFwiTExMXCI6XG4gICAgICAgICAgICAvLyBsaWtlIEphblxuICAgICAgICAgICAgcmV0dXJuIG1vbnRoKFwic2hvcnRcIiwgdHJ1ZSk7XG4gICAgICAgICAgY2FzZSBcIkxMTExcIjpcbiAgICAgICAgICAgIC8vIGxpa2UgSmFudWFyeVxuICAgICAgICAgICAgcmV0dXJuIG1vbnRoKFwibG9uZ1wiLCB0cnVlKTtcbiAgICAgICAgICBjYXNlIFwiTExMTExcIjpcbiAgICAgICAgICAgIC8vIGxpa2UgSlxuICAgICAgICAgICAgcmV0dXJuIG1vbnRoKFwibmFycm93XCIsIHRydWUpO1xuICAgICAgICAgIC8vIG1vbnRocyAtIGZvcm1hdFxuICAgICAgICAgIGNhc2UgXCJNXCI6XG4gICAgICAgICAgICAvLyBsaWtlIDFcbiAgICAgICAgICAgIHJldHVybiB1c2VEYXRlVGltZUZvcm1hdHRlclxuICAgICAgICAgICAgICA/IHN0cmluZyh7IG1vbnRoOiBcIm51bWVyaWNcIiB9LCBcIm1vbnRoXCIpXG4gICAgICAgICAgICAgIDogdGhpcy5udW0oZHQubW9udGgpO1xuICAgICAgICAgIGNhc2UgXCJNTVwiOlxuICAgICAgICAgICAgLy8gbGlrZSAwMVxuICAgICAgICAgICAgcmV0dXJuIHVzZURhdGVUaW1lRm9ybWF0dGVyXG4gICAgICAgICAgICAgID8gc3RyaW5nKHsgbW9udGg6IFwiMi1kaWdpdFwiIH0sIFwibW9udGhcIilcbiAgICAgICAgICAgICAgOiB0aGlzLm51bShkdC5tb250aCwgMik7XG4gICAgICAgICAgY2FzZSBcIk1NTVwiOlxuICAgICAgICAgICAgLy8gbGlrZSBKYW5cbiAgICAgICAgICAgIHJldHVybiBtb250aChcInNob3J0XCIsIGZhbHNlKTtcbiAgICAgICAgICBjYXNlIFwiTU1NTVwiOlxuICAgICAgICAgICAgLy8gbGlrZSBKYW51YXJ5XG4gICAgICAgICAgICByZXR1cm4gbW9udGgoXCJsb25nXCIsIGZhbHNlKTtcbiAgICAgICAgICBjYXNlIFwiTU1NTU1cIjpcbiAgICAgICAgICAgIC8vIGxpa2UgSlxuICAgICAgICAgICAgcmV0dXJuIG1vbnRoKFwibmFycm93XCIsIGZhbHNlKTtcbiAgICAgICAgICAvLyB5ZWFyc1xuICAgICAgICAgIGNhc2UgXCJ5XCI6XG4gICAgICAgICAgICAvLyBsaWtlIDIwMTRcbiAgICAgICAgICAgIHJldHVybiB1c2VEYXRlVGltZUZvcm1hdHRlciA/IHN0cmluZyh7IHllYXI6IFwibnVtZXJpY1wiIH0sIFwieWVhclwiKSA6IHRoaXMubnVtKGR0LnllYXIpO1xuICAgICAgICAgIGNhc2UgXCJ5eVwiOlxuICAgICAgICAgICAgLy8gbGlrZSAxNFxuICAgICAgICAgICAgcmV0dXJuIHVzZURhdGVUaW1lRm9ybWF0dGVyXG4gICAgICAgICAgICAgID8gc3RyaW5nKHsgeWVhcjogXCIyLWRpZ2l0XCIgfSwgXCJ5ZWFyXCIpXG4gICAgICAgICAgICAgIDogdGhpcy5udW0oZHQueWVhci50b1N0cmluZygpLnNsaWNlKC0yKSwgMik7XG4gICAgICAgICAgY2FzZSBcInl5eXlcIjpcbiAgICAgICAgICAgIC8vIGxpa2UgMDAxMlxuICAgICAgICAgICAgcmV0dXJuIHVzZURhdGVUaW1lRm9ybWF0dGVyXG4gICAgICAgICAgICAgID8gc3RyaW5nKHsgeWVhcjogXCJudW1lcmljXCIgfSwgXCJ5ZWFyXCIpXG4gICAgICAgICAgICAgIDogdGhpcy5udW0oZHQueWVhciwgNCk7XG4gICAgICAgICAgY2FzZSBcInl5eXl5eVwiOlxuICAgICAgICAgICAgLy8gbGlrZSAwMDAwMTJcbiAgICAgICAgICAgIHJldHVybiB1c2VEYXRlVGltZUZvcm1hdHRlclxuICAgICAgICAgICAgICA/IHN0cmluZyh7IHllYXI6IFwibnVtZXJpY1wiIH0sIFwieWVhclwiKVxuICAgICAgICAgICAgICA6IHRoaXMubnVtKGR0LnllYXIsIDYpO1xuICAgICAgICAgIC8vIGVyYXNcbiAgICAgICAgICBjYXNlIFwiR1wiOlxuICAgICAgICAgICAgLy8gbGlrZSBBRFxuICAgICAgICAgICAgcmV0dXJuIGVyYShcInNob3J0XCIpO1xuICAgICAgICAgIGNhc2UgXCJHR1wiOlxuICAgICAgICAgICAgLy8gbGlrZSBBbm5vIERvbWluaVxuICAgICAgICAgICAgcmV0dXJuIGVyYShcImxvbmdcIik7XG4gICAgICAgICAgY2FzZSBcIkdHR0dHXCI6XG4gICAgICAgICAgICByZXR1cm4gZXJhKFwibmFycm93XCIpO1xuICAgICAgICAgIGNhc2UgXCJra1wiOlxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubnVtKGR0LndlZWtZZWFyLnRvU3RyaW5nKCkuc2xpY2UoLTIpLCAyKTtcbiAgICAgICAgICBjYXNlIFwia2tra1wiOlxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubnVtKGR0LndlZWtZZWFyLCA0KTtcbiAgICAgICAgICBjYXNlIFwiV1wiOlxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubnVtKGR0LndlZWtOdW1iZXIpO1xuICAgICAgICAgIGNhc2UgXCJXV1wiOlxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubnVtKGR0LndlZWtOdW1iZXIsIDIpO1xuICAgICAgICAgIGNhc2UgXCJvXCI6XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5udW0oZHQub3JkaW5hbCk7XG4gICAgICAgICAgY2FzZSBcIm9vb1wiOlxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubnVtKGR0Lm9yZGluYWwsIDMpO1xuICAgICAgICAgIGNhc2UgXCJxXCI6XG4gICAgICAgICAgICAvLyBsaWtlIDFcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm51bShkdC5xdWFydGVyKTtcbiAgICAgICAgICBjYXNlIFwicXFcIjpcbiAgICAgICAgICAgIC8vIGxpa2UgMDFcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm51bShkdC5xdWFydGVyLCAyKTtcbiAgICAgICAgICBjYXNlIFwiWFwiOlxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubnVtKE1hdGguZmxvb3IoZHQudHMgLyAxMDAwKSk7XG4gICAgICAgICAgY2FzZSBcInhcIjpcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm51bShkdC50cyk7XG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBtYXliZU1hY3JvKHRva2VuKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgIHJldHVybiBzdHJpbmdpZnlUb2tlbnMoRm9ybWF0dGVyLnBhcnNlRm9ybWF0KGZtdCksIHRva2VuVG9TdHJpbmcpO1xuICB9XG5cbiAgZm9ybWF0RHVyYXRpb25Gcm9tU3RyaW5nKGR1ciwgZm10KSB7XG4gICAgY29uc3QgdG9rZW5Ub0ZpZWxkID0gKHRva2VuKSA9PiB7XG4gICAgICAgIHN3aXRjaCAodG9rZW5bMF0pIHtcbiAgICAgICAgICBjYXNlIFwiU1wiOlxuICAgICAgICAgICAgcmV0dXJuIFwibWlsbGlzZWNvbmRcIjtcbiAgICAgICAgICBjYXNlIFwic1wiOlxuICAgICAgICAgICAgcmV0dXJuIFwic2Vjb25kXCI7XG4gICAgICAgICAgY2FzZSBcIm1cIjpcbiAgICAgICAgICAgIHJldHVybiBcIm1pbnV0ZVwiO1xuICAgICAgICAgIGNhc2UgXCJoXCI6XG4gICAgICAgICAgICByZXR1cm4gXCJob3VyXCI7XG4gICAgICAgICAgY2FzZSBcImRcIjpcbiAgICAgICAgICAgIHJldHVybiBcImRheVwiO1xuICAgICAgICAgIGNhc2UgXCJ3XCI6XG4gICAgICAgICAgICByZXR1cm4gXCJ3ZWVrXCI7XG4gICAgICAgICAgY2FzZSBcIk1cIjpcbiAgICAgICAgICAgIHJldHVybiBcIm1vbnRoXCI7XG4gICAgICAgICAgY2FzZSBcInlcIjpcbiAgICAgICAgICAgIHJldHVybiBcInllYXJcIjtcbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB0b2tlblRvU3RyaW5nID0gKGxpbGR1cikgPT4gKHRva2VuKSA9PiB7XG4gICAgICAgIGNvbnN0IG1hcHBlZCA9IHRva2VuVG9GaWVsZCh0b2tlbik7XG4gICAgICAgIGlmIChtYXBwZWQpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5udW0obGlsZHVyLmdldChtYXBwZWQpLCB0b2tlbi5sZW5ndGgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0b2tlbjtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHRva2VucyA9IEZvcm1hdHRlci5wYXJzZUZvcm1hdChmbXQpLFxuICAgICAgcmVhbFRva2VucyA9IHRva2Vucy5yZWR1Y2UoXG4gICAgICAgIChmb3VuZCwgeyBsaXRlcmFsLCB2YWwgfSkgPT4gKGxpdGVyYWwgPyBmb3VuZCA6IGZvdW5kLmNvbmNhdCh2YWwpKSxcbiAgICAgICAgW11cbiAgICAgICksXG4gICAgICBjb2xsYXBzZWQgPSBkdXIuc2hpZnRUbyguLi5yZWFsVG9rZW5zLm1hcCh0b2tlblRvRmllbGQpLmZpbHRlcigodCkgPT4gdCkpO1xuICAgIHJldHVybiBzdHJpbmdpZnlUb2tlbnModG9rZW5zLCB0b2tlblRvU3RyaW5nKGNvbGxhcHNlZCkpO1xuICB9XG59XG5cbmNsYXNzIEludmFsaWQge1xuICBjb25zdHJ1Y3RvcihyZWFzb24sIGV4cGxhbmF0aW9uKSB7XG4gICAgdGhpcy5yZWFzb24gPSByZWFzb247XG4gICAgdGhpcy5leHBsYW5hdGlvbiA9IGV4cGxhbmF0aW9uO1xuICB9XG5cbiAgdG9NZXNzYWdlKCkge1xuICAgIGlmICh0aGlzLmV4cGxhbmF0aW9uKSB7XG4gICAgICByZXR1cm4gYCR7dGhpcy5yZWFzb259OiAke3RoaXMuZXhwbGFuYXRpb259YDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMucmVhc29uO1xuICAgIH1cbiAgfVxufVxuXG4vKlxuICogVGhpcyBmaWxlIGhhbmRsZXMgcGFyc2luZyBmb3Igd2VsbC1zcGVjaWZpZWQgZm9ybWF0cy4gSGVyZSdzIGhvdyBpdCB3b3JrczpcbiAqIFR3byB0aGluZ3MgZ28gaW50byBwYXJzaW5nOiBhIHJlZ2V4IHRvIG1hdGNoIHdpdGggYW5kIGFuIGV4dHJhY3RvciB0byB0YWtlIGFwYXJ0IHRoZSBncm91cHMgaW4gdGhlIG1hdGNoLlxuICogQW4gZXh0cmFjdG9yIGlzIGp1c3QgYSBmdW5jdGlvbiB0aGF0IHRha2VzIGEgcmVnZXggbWF0Y2ggYXJyYXkgYW5kIHJldHVybnMgYSB7IHllYXI6IC4uLiwgbW9udGg6IC4uLiB9IG9iamVjdFxuICogcGFyc2UoKSBkb2VzIHRoZSB3b3JrIG9mIGV4ZWN1dGluZyB0aGUgcmVnZXggYW5kIGFwcGx5aW5nIHRoZSBleHRyYWN0b3IuIEl0IHRha2VzIG11bHRpcGxlIHJlZ2V4L2V4dHJhY3RvciBwYWlycyB0byB0cnkgaW4gc2VxdWVuY2UuXG4gKiBFeHRyYWN0b3JzIGNhbiB0YWtlIGEgXCJjdXJzb3JcIiByZXByZXNlbnRpbmcgdGhlIG9mZnNldCBpbiB0aGUgbWF0Y2ggdG8gbG9vayBhdC4gVGhpcyBtYWtlcyBpdCBlYXN5IHRvIGNvbWJpbmUgZXh0cmFjdG9ycy5cbiAqIGNvbWJpbmVFeHRyYWN0b3JzKCkgZG9lcyB0aGUgd29yayBvZiBjb21iaW5pbmcgdGhlbSwga2VlcGluZyB0cmFjayBvZiB0aGUgY3Vyc29yIHRocm91Z2ggbXVsdGlwbGUgZXh0cmFjdGlvbnMuXG4gKiBTb21lIGV4dHJhY3Rpb25zIGFyZSBzdXBlciBkdW1iIGFuZCBzaW1wbGVQYXJzZSBhbmQgZnJvbVN0cmluZ3MgaGVscCBEUlkgdGhlbS5cbiAqL1xuXG5jb25zdCBpYW5hUmVnZXggPSAvW0EtWmEtel8rLV17MSwyNTZ9KD86Oj9cXC9bQS1aYS16MC05XystXXsxLDI1Nn0oPzpcXC9bQS1aYS16MC05XystXXsxLDI1Nn0pPyk/LztcblxuZnVuY3Rpb24gY29tYmluZVJlZ2V4ZXMoLi4ucmVnZXhlcykge1xuICBjb25zdCBmdWxsID0gcmVnZXhlcy5yZWR1Y2UoKGYsIHIpID0+IGYgKyByLnNvdXJjZSwgXCJcIik7XG4gIHJldHVybiBSZWdFeHAoYF4ke2Z1bGx9JGApO1xufVxuXG5mdW5jdGlvbiBjb21iaW5lRXh0cmFjdG9ycyguLi5leHRyYWN0b3JzKSB7XG4gIHJldHVybiAobSkgPT5cbiAgICBleHRyYWN0b3JzXG4gICAgICAucmVkdWNlKFxuICAgICAgICAoW21lcmdlZFZhbHMsIG1lcmdlZFpvbmUsIGN1cnNvcl0sIGV4KSA9PiB7XG4gICAgICAgICAgY29uc3QgW3ZhbCwgem9uZSwgbmV4dF0gPSBleChtLCBjdXJzb3IpO1xuICAgICAgICAgIHJldHVybiBbeyAuLi5tZXJnZWRWYWxzLCAuLi52YWwgfSwgem9uZSB8fCBtZXJnZWRab25lLCBuZXh0XTtcbiAgICAgICAgfSxcbiAgICAgICAgW3t9LCBudWxsLCAxXVxuICAgICAgKVxuICAgICAgLnNsaWNlKDAsIDIpO1xufVxuXG5mdW5jdGlvbiBwYXJzZShzLCAuLi5wYXR0ZXJucykge1xuICBpZiAocyA9PSBudWxsKSB7XG4gICAgcmV0dXJuIFtudWxsLCBudWxsXTtcbiAgfVxuXG4gIGZvciAoY29uc3QgW3JlZ2V4LCBleHRyYWN0b3JdIG9mIHBhdHRlcm5zKSB7XG4gICAgY29uc3QgbSA9IHJlZ2V4LmV4ZWMocyk7XG4gICAgaWYgKG0pIHtcbiAgICAgIHJldHVybiBleHRyYWN0b3IobSk7XG4gICAgfVxuICB9XG4gIHJldHVybiBbbnVsbCwgbnVsbF07XG59XG5cbmZ1bmN0aW9uIHNpbXBsZVBhcnNlKC4uLmtleXMpIHtcbiAgcmV0dXJuIChtYXRjaCwgY3Vyc29yKSA9PiB7XG4gICAgY29uc3QgcmV0ID0ge307XG4gICAgbGV0IGk7XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgcmV0W2tleXNbaV1dID0gcGFyc2VJbnRlZ2VyKG1hdGNoW2N1cnNvciArIGldKTtcbiAgICB9XG4gICAgcmV0dXJuIFtyZXQsIG51bGwsIGN1cnNvciArIGldO1xuICB9O1xufVxuXG4vLyBJU08gYW5kIFNRTCBwYXJzaW5nXG5jb25zdCBvZmZzZXRSZWdleCA9IC8oPzooWil8KFsrLV1cXGRcXGQpKD86Oj8oXFxkXFxkKSk/KS87XG5jb25zdCBpc29FeHRlbmRlZFpvbmUgPSBgKD86JHtvZmZzZXRSZWdleC5zb3VyY2V9Pyg/OlxcXFxbKCR7aWFuYVJlZ2V4LnNvdXJjZX0pXFxcXF0pPyk/YDtcbmNvbnN0IGlzb1RpbWVCYXNlUmVnZXggPSAvKFxcZFxcZCkoPzo6PyhcXGRcXGQpKD86Oj8oXFxkXFxkKSg/OlsuLF0oXFxkezEsMzB9KSk/KT8pPy87XG5jb25zdCBpc29UaW1lUmVnZXggPSBSZWdFeHAoYCR7aXNvVGltZUJhc2VSZWdleC5zb3VyY2V9JHtpc29FeHRlbmRlZFpvbmV9YCk7XG5jb25zdCBpc29UaW1lRXh0ZW5zaW9uUmVnZXggPSBSZWdFeHAoYCg/OlQke2lzb1RpbWVSZWdleC5zb3VyY2V9KT9gKTtcbmNvbnN0IGlzb1ltZFJlZ2V4ID0gLyhbKy1dXFxkezZ9fFxcZHs0fSkoPzotPyhcXGRcXGQpKD86LT8oXFxkXFxkKSk/KT8vO1xuY29uc3QgaXNvV2Vla1JlZ2V4ID0gLyhcXGR7NH0pLT9XKFxcZFxcZCkoPzotPyhcXGQpKT8vO1xuY29uc3QgaXNvT3JkaW5hbFJlZ2V4ID0gLyhcXGR7NH0pLT8oXFxkezN9KS87XG5jb25zdCBleHRyYWN0SVNPV2Vla0RhdGEgPSBzaW1wbGVQYXJzZShcIndlZWtZZWFyXCIsIFwid2Vla051bWJlclwiLCBcIndlZWtEYXlcIik7XG5jb25zdCBleHRyYWN0SVNPT3JkaW5hbERhdGEgPSBzaW1wbGVQYXJzZShcInllYXJcIiwgXCJvcmRpbmFsXCIpO1xuY29uc3Qgc3FsWW1kUmVnZXggPSAvKFxcZHs0fSktKFxcZFxcZCktKFxcZFxcZCkvOyAvLyBkdW1iZWQtZG93biB2ZXJzaW9uIG9mIHRoZSBJU08gb25lXG5jb25zdCBzcWxUaW1lUmVnZXggPSBSZWdFeHAoXG4gIGAke2lzb1RpbWVCYXNlUmVnZXguc291cmNlfSA/KD86JHtvZmZzZXRSZWdleC5zb3VyY2V9fCgke2lhbmFSZWdleC5zb3VyY2V9KSk/YFxuKTtcbmNvbnN0IHNxbFRpbWVFeHRlbnNpb25SZWdleCA9IFJlZ0V4cChgKD86ICR7c3FsVGltZVJlZ2V4LnNvdXJjZX0pP2ApO1xuXG5mdW5jdGlvbiBpbnQobWF0Y2gsIHBvcywgZmFsbGJhY2spIHtcbiAgY29uc3QgbSA9IG1hdGNoW3Bvc107XG4gIHJldHVybiBpc1VuZGVmaW5lZChtKSA/IGZhbGxiYWNrIDogcGFyc2VJbnRlZ2VyKG0pO1xufVxuXG5mdW5jdGlvbiBleHRyYWN0SVNPWW1kKG1hdGNoLCBjdXJzb3IpIHtcbiAgY29uc3QgaXRlbSA9IHtcbiAgICB5ZWFyOiBpbnQobWF0Y2gsIGN1cnNvciksXG4gICAgbW9udGg6IGludChtYXRjaCwgY3Vyc29yICsgMSwgMSksXG4gICAgZGF5OiBpbnQobWF0Y2gsIGN1cnNvciArIDIsIDEpLFxuICB9O1xuXG4gIHJldHVybiBbaXRlbSwgbnVsbCwgY3Vyc29yICsgM107XG59XG5cbmZ1bmN0aW9uIGV4dHJhY3RJU09UaW1lKG1hdGNoLCBjdXJzb3IpIHtcbiAgY29uc3QgaXRlbSA9IHtcbiAgICBob3VyczogaW50KG1hdGNoLCBjdXJzb3IsIDApLFxuICAgIG1pbnV0ZXM6IGludChtYXRjaCwgY3Vyc29yICsgMSwgMCksXG4gICAgc2Vjb25kczogaW50KG1hdGNoLCBjdXJzb3IgKyAyLCAwKSxcbiAgICBtaWxsaXNlY29uZHM6IHBhcnNlTWlsbGlzKG1hdGNoW2N1cnNvciArIDNdKSxcbiAgfTtcblxuICByZXR1cm4gW2l0ZW0sIG51bGwsIGN1cnNvciArIDRdO1xufVxuXG5mdW5jdGlvbiBleHRyYWN0SVNPT2Zmc2V0KG1hdGNoLCBjdXJzb3IpIHtcbiAgY29uc3QgbG9jYWwgPSAhbWF0Y2hbY3Vyc29yXSAmJiAhbWF0Y2hbY3Vyc29yICsgMV0sXG4gICAgZnVsbE9mZnNldCA9IHNpZ25lZE9mZnNldChtYXRjaFtjdXJzb3IgKyAxXSwgbWF0Y2hbY3Vyc29yICsgMl0pLFxuICAgIHpvbmUgPSBsb2NhbCA/IG51bGwgOiBGaXhlZE9mZnNldFpvbmUuaW5zdGFuY2UoZnVsbE9mZnNldCk7XG4gIHJldHVybiBbe30sIHpvbmUsIGN1cnNvciArIDNdO1xufVxuXG5mdW5jdGlvbiBleHRyYWN0SUFOQVpvbmUobWF0Y2gsIGN1cnNvcikge1xuICBjb25zdCB6b25lID0gbWF0Y2hbY3Vyc29yXSA/IElBTkFab25lLmNyZWF0ZShtYXRjaFtjdXJzb3JdKSA6IG51bGw7XG4gIHJldHVybiBbe30sIHpvbmUsIGN1cnNvciArIDFdO1xufVxuXG4vLyBJU08gdGltZSBwYXJzaW5nXG5cbmNvbnN0IGlzb1RpbWVPbmx5ID0gUmVnRXhwKGBeVD8ke2lzb1RpbWVCYXNlUmVnZXguc291cmNlfSRgKTtcblxuLy8gSVNPIGR1cmF0aW9uIHBhcnNpbmdcblxuY29uc3QgaXNvRHVyYXRpb24gPVxuICAvXi0/UCg/Oig/OigtP1xcZHsxLDIwfSg/OlxcLlxcZHsxLDIwfSk/KVkpPyg/OigtP1xcZHsxLDIwfSg/OlxcLlxcZHsxLDIwfSk/KU0pPyg/OigtP1xcZHsxLDIwfSg/OlxcLlxcZHsxLDIwfSk/KVcpPyg/OigtP1xcZHsxLDIwfSg/OlxcLlxcZHsxLDIwfSk/KUQpPyg/OlQoPzooLT9cXGR7MSwyMH0oPzpcXC5cXGR7MSwyMH0pPylIKT8oPzooLT9cXGR7MSwyMH0oPzpcXC5cXGR7MSwyMH0pPylNKT8oPzooLT9cXGR7MSwyMH0pKD86Wy4sXSgtP1xcZHsxLDIwfSkpP1MpPyk/KSQvO1xuXG5mdW5jdGlvbiBleHRyYWN0SVNPRHVyYXRpb24obWF0Y2gpIHtcbiAgY29uc3QgW3MsIHllYXJTdHIsIG1vbnRoU3RyLCB3ZWVrU3RyLCBkYXlTdHIsIGhvdXJTdHIsIG1pbnV0ZVN0ciwgc2Vjb25kU3RyLCBtaWxsaXNlY29uZHNTdHJdID1cbiAgICBtYXRjaDtcblxuICBjb25zdCBoYXNOZWdhdGl2ZVByZWZpeCA9IHNbMF0gPT09IFwiLVwiO1xuICBjb25zdCBuZWdhdGl2ZVNlY29uZHMgPSBzZWNvbmRTdHIgJiYgc2Vjb25kU3RyWzBdID09PSBcIi1cIjtcblxuICBjb25zdCBtYXliZU5lZ2F0ZSA9IChudW0sIGZvcmNlID0gZmFsc2UpID0+XG4gICAgbnVtICE9PSB1bmRlZmluZWQgJiYgKGZvcmNlIHx8IChudW0gJiYgaGFzTmVnYXRpdmVQcmVmaXgpKSA/IC1udW0gOiBudW07XG5cbiAgcmV0dXJuIFtcbiAgICB7XG4gICAgICB5ZWFyczogbWF5YmVOZWdhdGUocGFyc2VGbG9hdGluZyh5ZWFyU3RyKSksXG4gICAgICBtb250aHM6IG1heWJlTmVnYXRlKHBhcnNlRmxvYXRpbmcobW9udGhTdHIpKSxcbiAgICAgIHdlZWtzOiBtYXliZU5lZ2F0ZShwYXJzZUZsb2F0aW5nKHdlZWtTdHIpKSxcbiAgICAgIGRheXM6IG1heWJlTmVnYXRlKHBhcnNlRmxvYXRpbmcoZGF5U3RyKSksXG4gICAgICBob3VyczogbWF5YmVOZWdhdGUocGFyc2VGbG9hdGluZyhob3VyU3RyKSksXG4gICAgICBtaW51dGVzOiBtYXliZU5lZ2F0ZShwYXJzZUZsb2F0aW5nKG1pbnV0ZVN0cikpLFxuICAgICAgc2Vjb25kczogbWF5YmVOZWdhdGUocGFyc2VGbG9hdGluZyhzZWNvbmRTdHIpLCBzZWNvbmRTdHIgPT09IFwiLTBcIiksXG4gICAgICBtaWxsaXNlY29uZHM6IG1heWJlTmVnYXRlKHBhcnNlTWlsbGlzKG1pbGxpc2Vjb25kc1N0ciksIG5lZ2F0aXZlU2Vjb25kcyksXG4gICAgfSxcbiAgXTtcbn1cblxuLy8gVGhlc2UgYXJlIGEgbGl0dGxlIGJyYWluZGVhZC4gRURUICpzaG91bGQqIHRlbGwgdXMgdGhhdCB3ZSdyZSBpbiwgc2F5LCBBbWVyaWNhL05ld19Zb3JrXG4vLyBhbmQgbm90IGp1c3QgdGhhdCB3ZSdyZSBpbiAtMjQwICpyaWdodCBub3cqLiBCdXQgc2luY2UgSSBkb24ndCB0aGluayB0aGVzZSBhcmUgdXNlZCB0aGF0IG9mdGVuXG4vLyBJJ20ganVzdCBnb2luZyB0byBpZ25vcmUgdGhhdFxuY29uc3Qgb2JzT2Zmc2V0cyA9IHtcbiAgR01UOiAwLFxuICBFRFQ6IC00ICogNjAsXG4gIEVTVDogLTUgKiA2MCxcbiAgQ0RUOiAtNSAqIDYwLFxuICBDU1Q6IC02ICogNjAsXG4gIE1EVDogLTYgKiA2MCxcbiAgTVNUOiAtNyAqIDYwLFxuICBQRFQ6IC03ICogNjAsXG4gIFBTVDogLTggKiA2MCxcbn07XG5cbmZ1bmN0aW9uIGZyb21TdHJpbmdzKHdlZWtkYXlTdHIsIHllYXJTdHIsIG1vbnRoU3RyLCBkYXlTdHIsIGhvdXJTdHIsIG1pbnV0ZVN0ciwgc2Vjb25kU3RyKSB7XG4gIGNvbnN0IHJlc3VsdCA9IHtcbiAgICB5ZWFyOiB5ZWFyU3RyLmxlbmd0aCA9PT0gMiA/IHVudHJ1bmNhdGVZZWFyKHBhcnNlSW50ZWdlcih5ZWFyU3RyKSkgOiBwYXJzZUludGVnZXIoeWVhclN0ciksXG4gICAgbW9udGg6IG1vbnRoc1Nob3J0LmluZGV4T2YobW9udGhTdHIpICsgMSxcbiAgICBkYXk6IHBhcnNlSW50ZWdlcihkYXlTdHIpLFxuICAgIGhvdXI6IHBhcnNlSW50ZWdlcihob3VyU3RyKSxcbiAgICBtaW51dGU6IHBhcnNlSW50ZWdlcihtaW51dGVTdHIpLFxuICB9O1xuXG4gIGlmIChzZWNvbmRTdHIpIHJlc3VsdC5zZWNvbmQgPSBwYXJzZUludGVnZXIoc2Vjb25kU3RyKTtcbiAgaWYgKHdlZWtkYXlTdHIpIHtcbiAgICByZXN1bHQud2Vla2RheSA9XG4gICAgICB3ZWVrZGF5U3RyLmxlbmd0aCA+IDNcbiAgICAgICAgPyB3ZWVrZGF5c0xvbmcuaW5kZXhPZih3ZWVrZGF5U3RyKSArIDFcbiAgICAgICAgOiB3ZWVrZGF5c1Nob3J0LmluZGV4T2Yod2Vla2RheVN0cikgKyAxO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLy8gUkZDIDI4MjIvNTMyMlxuY29uc3QgcmZjMjgyMiA9XG4gIC9eKD86KE1vbnxUdWV8V2VkfFRodXxGcml8U2F0fFN1biksXFxzKT8oXFxkezEsMn0pXFxzKEphbnxGZWJ8TWFyfEFwcnxNYXl8SnVufEp1bHxBdWd8U2VwfE9jdHxOb3Z8RGVjKVxccyhcXGR7Miw0fSlcXHMoXFxkXFxkKTooXFxkXFxkKSg/OjooXFxkXFxkKSk/XFxzKD86KFVUfEdNVHxbRUNNUF1bU0RdVCl8KFtael0pfCg/OihbKy1dXFxkXFxkKShcXGRcXGQpKSkkLztcblxuZnVuY3Rpb24gZXh0cmFjdFJGQzI4MjIobWF0Y2gpIHtcbiAgY29uc3QgW1xuICAgICAgLFxuICAgICAgd2Vla2RheVN0cixcbiAgICAgIGRheVN0cixcbiAgICAgIG1vbnRoU3RyLFxuICAgICAgeWVhclN0cixcbiAgICAgIGhvdXJTdHIsXG4gICAgICBtaW51dGVTdHIsXG4gICAgICBzZWNvbmRTdHIsXG4gICAgICBvYnNPZmZzZXQsXG4gICAgICBtaWxPZmZzZXQsXG4gICAgICBvZmZIb3VyU3RyLFxuICAgICAgb2ZmTWludXRlU3RyLFxuICAgIF0gPSBtYXRjaCxcbiAgICByZXN1bHQgPSBmcm9tU3RyaW5ncyh3ZWVrZGF5U3RyLCB5ZWFyU3RyLCBtb250aFN0ciwgZGF5U3RyLCBob3VyU3RyLCBtaW51dGVTdHIsIHNlY29uZFN0cik7XG5cbiAgbGV0IG9mZnNldDtcbiAgaWYgKG9ic09mZnNldCkge1xuICAgIG9mZnNldCA9IG9ic09mZnNldHNbb2JzT2Zmc2V0XTtcbiAgfSBlbHNlIGlmIChtaWxPZmZzZXQpIHtcbiAgICBvZmZzZXQgPSAwO1xuICB9IGVsc2Uge1xuICAgIG9mZnNldCA9IHNpZ25lZE9mZnNldChvZmZIb3VyU3RyLCBvZmZNaW51dGVTdHIpO1xuICB9XG5cbiAgcmV0dXJuIFtyZXN1bHQsIG5ldyBGaXhlZE9mZnNldFpvbmUob2Zmc2V0KV07XG59XG5cbmZ1bmN0aW9uIHByZXByb2Nlc3NSRkMyODIyKHMpIHtcbiAgLy8gUmVtb3ZlIGNvbW1lbnRzIGFuZCBmb2xkaW5nIHdoaXRlc3BhY2UgYW5kIHJlcGxhY2UgbXVsdGlwbGUtc3BhY2VzIHdpdGggYSBzaW5nbGUgc3BhY2VcbiAgcmV0dXJuIHNcbiAgICAucmVwbGFjZSgvXFwoW14oKV0qXFwpfFtcXG5cXHRdL2csIFwiIFwiKVxuICAgIC5yZXBsYWNlKC8oXFxzXFxzKykvZywgXCIgXCIpXG4gICAgLnRyaW0oKTtcbn1cblxuLy8gaHR0cCBkYXRlXG5cbmNvbnN0IHJmYzExMjMgPVxuICAgIC9eKE1vbnxUdWV8V2VkfFRodXxGcml8U2F0fFN1biksIChcXGRcXGQpIChKYW58RmVifE1hcnxBcHJ8TWF5fEp1bnxKdWx8QXVnfFNlcHxPY3R8Tm92fERlYykgKFxcZHs0fSkgKFxcZFxcZCk6KFxcZFxcZCk6KFxcZFxcZCkgR01UJC8sXG4gIHJmYzg1MCA9XG4gICAgL14oTW9uZGF5fFR1ZXNkYXl8V2VkbmVzZGF5fFRodXJzZGF5fEZyaWRheXxTYXR1cmRheXxTdW5kYXkpLCAoXFxkXFxkKS0oSmFufEZlYnxNYXJ8QXByfE1heXxKdW58SnVsfEF1Z3xTZXB8T2N0fE5vdnxEZWMpLShcXGRcXGQpIChcXGRcXGQpOihcXGRcXGQpOihcXGRcXGQpIEdNVCQvLFxuICBhc2NpaSA9XG4gICAgL14oTW9ufFR1ZXxXZWR8VGh1fEZyaXxTYXR8U3VuKSAoSmFufEZlYnxNYXJ8QXByfE1heXxKdW58SnVsfEF1Z3xTZXB8T2N0fE5vdnxEZWMpICggXFxkfFxcZFxcZCkgKFxcZFxcZCk6KFxcZFxcZCk6KFxcZFxcZCkgKFxcZHs0fSkkLztcblxuZnVuY3Rpb24gZXh0cmFjdFJGQzExMjNPcjg1MChtYXRjaCkge1xuICBjb25zdCBbLCB3ZWVrZGF5U3RyLCBkYXlTdHIsIG1vbnRoU3RyLCB5ZWFyU3RyLCBob3VyU3RyLCBtaW51dGVTdHIsIHNlY29uZFN0cl0gPSBtYXRjaCxcbiAgICByZXN1bHQgPSBmcm9tU3RyaW5ncyh3ZWVrZGF5U3RyLCB5ZWFyU3RyLCBtb250aFN0ciwgZGF5U3RyLCBob3VyU3RyLCBtaW51dGVTdHIsIHNlY29uZFN0cik7XG4gIHJldHVybiBbcmVzdWx0LCBGaXhlZE9mZnNldFpvbmUudXRjSW5zdGFuY2VdO1xufVxuXG5mdW5jdGlvbiBleHRyYWN0QVNDSUkobWF0Y2gpIHtcbiAgY29uc3QgWywgd2Vla2RheVN0ciwgbW9udGhTdHIsIGRheVN0ciwgaG91clN0ciwgbWludXRlU3RyLCBzZWNvbmRTdHIsIHllYXJTdHJdID0gbWF0Y2gsXG4gICAgcmVzdWx0ID0gZnJvbVN0cmluZ3Mod2Vla2RheVN0ciwgeWVhclN0ciwgbW9udGhTdHIsIGRheVN0ciwgaG91clN0ciwgbWludXRlU3RyLCBzZWNvbmRTdHIpO1xuICByZXR1cm4gW3Jlc3VsdCwgRml4ZWRPZmZzZXRab25lLnV0Y0luc3RhbmNlXTtcbn1cblxuY29uc3QgaXNvWW1kV2l0aFRpbWVFeHRlbnNpb25SZWdleCA9IGNvbWJpbmVSZWdleGVzKGlzb1ltZFJlZ2V4LCBpc29UaW1lRXh0ZW5zaW9uUmVnZXgpO1xuY29uc3QgaXNvV2Vla1dpdGhUaW1lRXh0ZW5zaW9uUmVnZXggPSBjb21iaW5lUmVnZXhlcyhpc29XZWVrUmVnZXgsIGlzb1RpbWVFeHRlbnNpb25SZWdleCk7XG5jb25zdCBpc29PcmRpbmFsV2l0aFRpbWVFeHRlbnNpb25SZWdleCA9IGNvbWJpbmVSZWdleGVzKGlzb09yZGluYWxSZWdleCwgaXNvVGltZUV4dGVuc2lvblJlZ2V4KTtcbmNvbnN0IGlzb1RpbWVDb21iaW5lZFJlZ2V4ID0gY29tYmluZVJlZ2V4ZXMoaXNvVGltZVJlZ2V4KTtcblxuY29uc3QgZXh0cmFjdElTT1ltZFRpbWVBbmRPZmZzZXQgPSBjb21iaW5lRXh0cmFjdG9ycyhcbiAgZXh0cmFjdElTT1ltZCxcbiAgZXh0cmFjdElTT1RpbWUsXG4gIGV4dHJhY3RJU09PZmZzZXQsXG4gIGV4dHJhY3RJQU5BWm9uZVxuKTtcbmNvbnN0IGV4dHJhY3RJU09XZWVrVGltZUFuZE9mZnNldCA9IGNvbWJpbmVFeHRyYWN0b3JzKFxuICBleHRyYWN0SVNPV2Vla0RhdGEsXG4gIGV4dHJhY3RJU09UaW1lLFxuICBleHRyYWN0SVNPT2Zmc2V0LFxuICBleHRyYWN0SUFOQVpvbmVcbik7XG5jb25zdCBleHRyYWN0SVNPT3JkaW5hbERhdGVBbmRUaW1lID0gY29tYmluZUV4dHJhY3RvcnMoXG4gIGV4dHJhY3RJU09PcmRpbmFsRGF0YSxcbiAgZXh0cmFjdElTT1RpbWUsXG4gIGV4dHJhY3RJU09PZmZzZXQsXG4gIGV4dHJhY3RJQU5BWm9uZVxuKTtcbmNvbnN0IGV4dHJhY3RJU09UaW1lQW5kT2Zmc2V0ID0gY29tYmluZUV4dHJhY3RvcnMoXG4gIGV4dHJhY3RJU09UaW1lLFxuICBleHRyYWN0SVNPT2Zmc2V0LFxuICBleHRyYWN0SUFOQVpvbmVcbik7XG5cbi8qXG4gKiBAcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIHBhcnNlSVNPRGF0ZShzKSB7XG4gIHJldHVybiBwYXJzZShcbiAgICBzLFxuICAgIFtpc29ZbWRXaXRoVGltZUV4dGVuc2lvblJlZ2V4LCBleHRyYWN0SVNPWW1kVGltZUFuZE9mZnNldF0sXG4gICAgW2lzb1dlZWtXaXRoVGltZUV4dGVuc2lvblJlZ2V4LCBleHRyYWN0SVNPV2Vla1RpbWVBbmRPZmZzZXRdLFxuICAgIFtpc29PcmRpbmFsV2l0aFRpbWVFeHRlbnNpb25SZWdleCwgZXh0cmFjdElTT09yZGluYWxEYXRlQW5kVGltZV0sXG4gICAgW2lzb1RpbWVDb21iaW5lZFJlZ2V4LCBleHRyYWN0SVNPVGltZUFuZE9mZnNldF1cbiAgKTtcbn1cblxuZnVuY3Rpb24gcGFyc2VSRkMyODIyRGF0ZShzKSB7XG4gIHJldHVybiBwYXJzZShwcmVwcm9jZXNzUkZDMjgyMihzKSwgW3JmYzI4MjIsIGV4dHJhY3RSRkMyODIyXSk7XG59XG5cbmZ1bmN0aW9uIHBhcnNlSFRUUERhdGUocykge1xuICByZXR1cm4gcGFyc2UoXG4gICAgcyxcbiAgICBbcmZjMTEyMywgZXh0cmFjdFJGQzExMjNPcjg1MF0sXG4gICAgW3JmYzg1MCwgZXh0cmFjdFJGQzExMjNPcjg1MF0sXG4gICAgW2FzY2lpLCBleHRyYWN0QVNDSUldXG4gICk7XG59XG5cbmZ1bmN0aW9uIHBhcnNlSVNPRHVyYXRpb24ocykge1xuICByZXR1cm4gcGFyc2UocywgW2lzb0R1cmF0aW9uLCBleHRyYWN0SVNPRHVyYXRpb25dKTtcbn1cblxuY29uc3QgZXh0cmFjdElTT1RpbWVPbmx5ID0gY29tYmluZUV4dHJhY3RvcnMoZXh0cmFjdElTT1RpbWUpO1xuXG5mdW5jdGlvbiBwYXJzZUlTT1RpbWVPbmx5KHMpIHtcbiAgcmV0dXJuIHBhcnNlKHMsIFtpc29UaW1lT25seSwgZXh0cmFjdElTT1RpbWVPbmx5XSk7XG59XG5cbmNvbnN0IHNxbFltZFdpdGhUaW1lRXh0ZW5zaW9uUmVnZXggPSBjb21iaW5lUmVnZXhlcyhzcWxZbWRSZWdleCwgc3FsVGltZUV4dGVuc2lvblJlZ2V4KTtcbmNvbnN0IHNxbFRpbWVDb21iaW5lZFJlZ2V4ID0gY29tYmluZVJlZ2V4ZXMoc3FsVGltZVJlZ2V4KTtcblxuY29uc3QgZXh0cmFjdElTT1RpbWVPZmZzZXRBbmRJQU5BWm9uZSA9IGNvbWJpbmVFeHRyYWN0b3JzKFxuICBleHRyYWN0SVNPVGltZSxcbiAgZXh0cmFjdElTT09mZnNldCxcbiAgZXh0cmFjdElBTkFab25lXG4pO1xuXG5mdW5jdGlvbiBwYXJzZVNRTChzKSB7XG4gIHJldHVybiBwYXJzZShcbiAgICBzLFxuICAgIFtzcWxZbWRXaXRoVGltZUV4dGVuc2lvblJlZ2V4LCBleHRyYWN0SVNPWW1kVGltZUFuZE9mZnNldF0sXG4gICAgW3NxbFRpbWVDb21iaW5lZFJlZ2V4LCBleHRyYWN0SVNPVGltZU9mZnNldEFuZElBTkFab25lXVxuICApO1xufVxuXG5jb25zdCBJTlZBTElEJDIgPSBcIkludmFsaWQgRHVyYXRpb25cIjtcblxuLy8gdW5pdCBjb252ZXJzaW9uIGNvbnN0YW50c1xuY29uc3QgbG93T3JkZXJNYXRyaXggPSB7XG4gICAgd2Vla3M6IHtcbiAgICAgIGRheXM6IDcsXG4gICAgICBob3VyczogNyAqIDI0LFxuICAgICAgbWludXRlczogNyAqIDI0ICogNjAsXG4gICAgICBzZWNvbmRzOiA3ICogMjQgKiA2MCAqIDYwLFxuICAgICAgbWlsbGlzZWNvbmRzOiA3ICogMjQgKiA2MCAqIDYwICogMTAwMCxcbiAgICB9LFxuICAgIGRheXM6IHtcbiAgICAgIGhvdXJzOiAyNCxcbiAgICAgIG1pbnV0ZXM6IDI0ICogNjAsXG4gICAgICBzZWNvbmRzOiAyNCAqIDYwICogNjAsXG4gICAgICBtaWxsaXNlY29uZHM6IDI0ICogNjAgKiA2MCAqIDEwMDAsXG4gICAgfSxcbiAgICBob3VyczogeyBtaW51dGVzOiA2MCwgc2Vjb25kczogNjAgKiA2MCwgbWlsbGlzZWNvbmRzOiA2MCAqIDYwICogMTAwMCB9LFxuICAgIG1pbnV0ZXM6IHsgc2Vjb25kczogNjAsIG1pbGxpc2Vjb25kczogNjAgKiAxMDAwIH0sXG4gICAgc2Vjb25kczogeyBtaWxsaXNlY29uZHM6IDEwMDAgfSxcbiAgfSxcbiAgY2FzdWFsTWF0cml4ID0ge1xuICAgIHllYXJzOiB7XG4gICAgICBxdWFydGVyczogNCxcbiAgICAgIG1vbnRoczogMTIsXG4gICAgICB3ZWVrczogNTIsXG4gICAgICBkYXlzOiAzNjUsXG4gICAgICBob3VyczogMzY1ICogMjQsXG4gICAgICBtaW51dGVzOiAzNjUgKiAyNCAqIDYwLFxuICAgICAgc2Vjb25kczogMzY1ICogMjQgKiA2MCAqIDYwLFxuICAgICAgbWlsbGlzZWNvbmRzOiAzNjUgKiAyNCAqIDYwICogNjAgKiAxMDAwLFxuICAgIH0sXG4gICAgcXVhcnRlcnM6IHtcbiAgICAgIG1vbnRoczogMyxcbiAgICAgIHdlZWtzOiAxMyxcbiAgICAgIGRheXM6IDkxLFxuICAgICAgaG91cnM6IDkxICogMjQsXG4gICAgICBtaW51dGVzOiA5MSAqIDI0ICogNjAsXG4gICAgICBzZWNvbmRzOiA5MSAqIDI0ICogNjAgKiA2MCxcbiAgICAgIG1pbGxpc2Vjb25kczogOTEgKiAyNCAqIDYwICogNjAgKiAxMDAwLFxuICAgIH0sXG4gICAgbW9udGhzOiB7XG4gICAgICB3ZWVrczogNCxcbiAgICAgIGRheXM6IDMwLFxuICAgICAgaG91cnM6IDMwICogMjQsXG4gICAgICBtaW51dGVzOiAzMCAqIDI0ICogNjAsXG4gICAgICBzZWNvbmRzOiAzMCAqIDI0ICogNjAgKiA2MCxcbiAgICAgIG1pbGxpc2Vjb25kczogMzAgKiAyNCAqIDYwICogNjAgKiAxMDAwLFxuICAgIH0sXG5cbiAgICAuLi5sb3dPcmRlck1hdHJpeCxcbiAgfSxcbiAgZGF5c0luWWVhckFjY3VyYXRlID0gMTQ2MDk3LjAgLyA0MDAsXG4gIGRheXNJbk1vbnRoQWNjdXJhdGUgPSAxNDYwOTcuMCAvIDQ4MDAsXG4gIGFjY3VyYXRlTWF0cml4ID0ge1xuICAgIHllYXJzOiB7XG4gICAgICBxdWFydGVyczogNCxcbiAgICAgIG1vbnRoczogMTIsXG4gICAgICB3ZWVrczogZGF5c0luWWVhckFjY3VyYXRlIC8gNyxcbiAgICAgIGRheXM6IGRheXNJblllYXJBY2N1cmF0ZSxcbiAgICAgIGhvdXJzOiBkYXlzSW5ZZWFyQWNjdXJhdGUgKiAyNCxcbiAgICAgIG1pbnV0ZXM6IGRheXNJblllYXJBY2N1cmF0ZSAqIDI0ICogNjAsXG4gICAgICBzZWNvbmRzOiBkYXlzSW5ZZWFyQWNjdXJhdGUgKiAyNCAqIDYwICogNjAsXG4gICAgICBtaWxsaXNlY29uZHM6IGRheXNJblllYXJBY2N1cmF0ZSAqIDI0ICogNjAgKiA2MCAqIDEwMDAsXG4gICAgfSxcbiAgICBxdWFydGVyczoge1xuICAgICAgbW9udGhzOiAzLFxuICAgICAgd2Vla3M6IGRheXNJblllYXJBY2N1cmF0ZSAvIDI4LFxuICAgICAgZGF5czogZGF5c0luWWVhckFjY3VyYXRlIC8gNCxcbiAgICAgIGhvdXJzOiAoZGF5c0luWWVhckFjY3VyYXRlICogMjQpIC8gNCxcbiAgICAgIG1pbnV0ZXM6IChkYXlzSW5ZZWFyQWNjdXJhdGUgKiAyNCAqIDYwKSAvIDQsXG4gICAgICBzZWNvbmRzOiAoZGF5c0luWWVhckFjY3VyYXRlICogMjQgKiA2MCAqIDYwKSAvIDQsXG4gICAgICBtaWxsaXNlY29uZHM6IChkYXlzSW5ZZWFyQWNjdXJhdGUgKiAyNCAqIDYwICogNjAgKiAxMDAwKSAvIDQsXG4gICAgfSxcbiAgICBtb250aHM6IHtcbiAgICAgIHdlZWtzOiBkYXlzSW5Nb250aEFjY3VyYXRlIC8gNyxcbiAgICAgIGRheXM6IGRheXNJbk1vbnRoQWNjdXJhdGUsXG4gICAgICBob3VyczogZGF5c0luTW9udGhBY2N1cmF0ZSAqIDI0LFxuICAgICAgbWludXRlczogZGF5c0luTW9udGhBY2N1cmF0ZSAqIDI0ICogNjAsXG4gICAgICBzZWNvbmRzOiBkYXlzSW5Nb250aEFjY3VyYXRlICogMjQgKiA2MCAqIDYwLFxuICAgICAgbWlsbGlzZWNvbmRzOiBkYXlzSW5Nb250aEFjY3VyYXRlICogMjQgKiA2MCAqIDYwICogMTAwMCxcbiAgICB9LFxuICAgIC4uLmxvd09yZGVyTWF0cml4LFxuICB9O1xuXG4vLyB1bml0cyBvcmRlcmVkIGJ5IHNpemVcbmNvbnN0IG9yZGVyZWRVbml0cyQxID0gW1xuICBcInllYXJzXCIsXG4gIFwicXVhcnRlcnNcIixcbiAgXCJtb250aHNcIixcbiAgXCJ3ZWVrc1wiLFxuICBcImRheXNcIixcbiAgXCJob3Vyc1wiLFxuICBcIm1pbnV0ZXNcIixcbiAgXCJzZWNvbmRzXCIsXG4gIFwibWlsbGlzZWNvbmRzXCIsXG5dO1xuXG5jb25zdCByZXZlcnNlVW5pdHMgPSBvcmRlcmVkVW5pdHMkMS5zbGljZSgwKS5yZXZlcnNlKCk7XG5cbi8vIGNsb25lIHJlYWxseSBtZWFucyBcImNyZWF0ZSBhbm90aGVyIGluc3RhbmNlIGp1c3QgbGlrZSB0aGlzIG9uZSwgYnV0IHdpdGggdGhlc2UgY2hhbmdlc1wiXG5mdW5jdGlvbiBjbG9uZSQxKGR1ciwgYWx0cywgY2xlYXIgPSBmYWxzZSkge1xuICAvLyBkZWVwIG1lcmdlIGZvciB2YWxzXG4gIGNvbnN0IGNvbmYgPSB7XG4gICAgdmFsdWVzOiBjbGVhciA/IGFsdHMudmFsdWVzIDogeyAuLi5kdXIudmFsdWVzLCAuLi4oYWx0cy52YWx1ZXMgfHwge30pIH0sXG4gICAgbG9jOiBkdXIubG9jLmNsb25lKGFsdHMubG9jKSxcbiAgICBjb252ZXJzaW9uQWNjdXJhY3k6IGFsdHMuY29udmVyc2lvbkFjY3VyYWN5IHx8IGR1ci5jb252ZXJzaW9uQWNjdXJhY3ksXG4gICAgbWF0cml4OiBhbHRzLm1hdHJpeCB8fCBkdXIubWF0cml4LFxuICB9O1xuICByZXR1cm4gbmV3IER1cmF0aW9uKGNvbmYpO1xufVxuXG5mdW5jdGlvbiBhbnRpVHJ1bmMobikge1xuICByZXR1cm4gbiA8IDAgPyBNYXRoLmZsb29yKG4pIDogTWF0aC5jZWlsKG4pO1xufVxuXG4vLyBOQjogbXV0YXRlcyBwYXJhbWV0ZXJzXG5mdW5jdGlvbiBjb252ZXJ0KG1hdHJpeCwgZnJvbU1hcCwgZnJvbVVuaXQsIHRvTWFwLCB0b1VuaXQpIHtcbiAgY29uc3QgY29udiA9IG1hdHJpeFt0b1VuaXRdW2Zyb21Vbml0XSxcbiAgICByYXcgPSBmcm9tTWFwW2Zyb21Vbml0XSAvIGNvbnYsXG4gICAgc2FtZVNpZ24gPSBNYXRoLnNpZ24ocmF3KSA9PT0gTWF0aC5zaWduKHRvTWFwW3RvVW5pdF0pLFxuICAgIC8vIG9rLCBzbyB0aGlzIGlzIHdpbGQsIGJ1dCBzZWUgdGhlIG1hdHJpeCBpbiB0aGUgdGVzdHNcbiAgICBhZGRlZCA9XG4gICAgICAhc2FtZVNpZ24gJiYgdG9NYXBbdG9Vbml0XSAhPT0gMCAmJiBNYXRoLmFicyhyYXcpIDw9IDEgPyBhbnRpVHJ1bmMocmF3KSA6IE1hdGgudHJ1bmMocmF3KTtcbiAgdG9NYXBbdG9Vbml0XSArPSBhZGRlZDtcbiAgZnJvbU1hcFtmcm9tVW5pdF0gLT0gYWRkZWQgKiBjb252O1xufVxuXG4vLyBOQjogbXV0YXRlcyBwYXJhbWV0ZXJzXG5mdW5jdGlvbiBub3JtYWxpemVWYWx1ZXMobWF0cml4LCB2YWxzKSB7XG4gIHJldmVyc2VVbml0cy5yZWR1Y2UoKHByZXZpb3VzLCBjdXJyZW50KSA9PiB7XG4gICAgaWYgKCFpc1VuZGVmaW5lZCh2YWxzW2N1cnJlbnRdKSkge1xuICAgICAgaWYgKHByZXZpb3VzKSB7XG4gICAgICAgIGNvbnZlcnQobWF0cml4LCB2YWxzLCBwcmV2aW91cywgdmFscywgY3VycmVudCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gY3VycmVudDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHByZXZpb3VzO1xuICAgIH1cbiAgfSwgbnVsbCk7XG59XG5cbi8vIFJlbW92ZSBhbGwgcHJvcGVydGllcyB3aXRoIGEgdmFsdWUgb2YgMCBmcm9tIGFuIG9iamVjdFxuZnVuY3Rpb24gcmVtb3ZlWmVyb2VzKHZhbHMpIHtcbiAgY29uc3QgbmV3VmFscyA9IHt9O1xuICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyh2YWxzKSkge1xuICAgIGlmICh2YWx1ZSAhPT0gMCkge1xuICAgICAgbmV3VmFsc1trZXldID0gdmFsdWU7XG4gICAgfVxuICB9XG4gIHJldHVybiBuZXdWYWxzO1xufVxuXG4vKipcbiAqIEEgRHVyYXRpb24gb2JqZWN0IHJlcHJlc2VudHMgYSBwZXJpb2Qgb2YgdGltZSwgbGlrZSBcIjIgbW9udGhzXCIgb3IgXCIxIGRheSwgMSBob3VyXCIuIENvbmNlcHR1YWxseSwgaXQncyBqdXN0IGEgbWFwIG9mIHVuaXRzIHRvIHRoZWlyIHF1YW50aXRpZXMsIGFjY29tcGFuaWVkIGJ5IHNvbWUgYWRkaXRpb25hbCBjb25maWd1cmF0aW9uIGFuZCBtZXRob2RzIGZvciBjcmVhdGluZywgcGFyc2luZywgaW50ZXJyb2dhdGluZywgdHJhbnNmb3JtaW5nLCBhbmQgZm9ybWF0dGluZyB0aGVtLiBUaGV5IGNhbiBiZSB1c2VkIG9uIHRoZWlyIG93biBvciBpbiBjb25qdW5jdGlvbiB3aXRoIG90aGVyIEx1eG9uIHR5cGVzOyBmb3IgZXhhbXBsZSwgeW91IGNhbiB1c2Uge0BsaW5rIERhdGVUaW1lI3BsdXN9IHRvIGFkZCBhIER1cmF0aW9uIG9iamVjdCB0byBhIERhdGVUaW1lLCBwcm9kdWNpbmcgYW5vdGhlciBEYXRlVGltZS5cbiAqXG4gKiBIZXJlIGlzIGEgYnJpZWYgb3ZlcnZpZXcgb2YgY29tbW9ubHkgdXNlZCBtZXRob2RzIGFuZCBnZXR0ZXJzIGluIER1cmF0aW9uOlxuICpcbiAqICogKipDcmVhdGlvbioqIFRvIGNyZWF0ZSBhIER1cmF0aW9uLCB1c2Uge0BsaW5rIER1cmF0aW9uLmZyb21NaWxsaXN9LCB7QGxpbmsgRHVyYXRpb24uZnJvbU9iamVjdH0sIG9yIHtAbGluayBEdXJhdGlvbi5mcm9tSVNPfS5cbiAqICogKipVbml0IHZhbHVlcyoqIFNlZSB0aGUge0BsaW5rIER1cmF0aW9uI3llYXJzfSwge0BsaW5rIER1cmF0aW9uI21vbnRoc30sIHtAbGluayBEdXJhdGlvbiN3ZWVrc30sIHtAbGluayBEdXJhdGlvbiNkYXlzfSwge0BsaW5rIER1cmF0aW9uI2hvdXJzfSwge0BsaW5rIER1cmF0aW9uI21pbnV0ZXN9LCB7QGxpbmsgRHVyYXRpb24jc2Vjb25kc30sIHtAbGluayBEdXJhdGlvbiNtaWxsaXNlY29uZHN9IGFjY2Vzc29ycy5cbiAqICogKipDb25maWd1cmF0aW9uKiogU2VlICB7QGxpbmsgRHVyYXRpb24jbG9jYWxlfSBhbmQge0BsaW5rIER1cmF0aW9uI251bWJlcmluZ1N5c3RlbX0gYWNjZXNzb3JzLlxuICogKiAqKlRyYW5zZm9ybWF0aW9uKiogVG8gY3JlYXRlIG5ldyBEdXJhdGlvbnMgb3V0IG9mIG9sZCBvbmVzIHVzZSB7QGxpbmsgRHVyYXRpb24jcGx1c30sIHtAbGluayBEdXJhdGlvbiNtaW51c30sIHtAbGluayBEdXJhdGlvbiNub3JtYWxpemV9LCB7QGxpbmsgRHVyYXRpb24jc2V0fSwge0BsaW5rIER1cmF0aW9uI3JlY29uZmlndXJlfSwge0BsaW5rIER1cmF0aW9uI3NoaWZ0VG99LCBhbmQge0BsaW5rIER1cmF0aW9uI25lZ2F0ZX0uXG4gKiAqICoqT3V0cHV0KiogVG8gY29udmVydCB0aGUgRHVyYXRpb24gaW50byBvdGhlciByZXByZXNlbnRhdGlvbnMsIHNlZSB7QGxpbmsgRHVyYXRpb24jYXN9LCB7QGxpbmsgRHVyYXRpb24jdG9JU099LCB7QGxpbmsgRHVyYXRpb24jdG9Gb3JtYXR9LCBhbmQge0BsaW5rIER1cmF0aW9uI3RvSlNPTn1cbiAqXG4gKiBUaGVyZSdzIGFyZSBtb3JlIG1ldGhvZHMgZG9jdW1lbnRlZCBiZWxvdy4gSW4gYWRkaXRpb24sIGZvciBtb3JlIGluZm9ybWF0aW9uIG9uIHN1YnRsZXIgdG9waWNzIGxpa2UgaW50ZXJuYXRpb25hbGl6YXRpb24gYW5kIHZhbGlkaXR5LCBzZWUgdGhlIGV4dGVybmFsIGRvY3VtZW50YXRpb24uXG4gKi9cbmNsYXNzIER1cmF0aW9uIHtcbiAgLyoqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICBjb25zdCBhY2N1cmF0ZSA9IGNvbmZpZy5jb252ZXJzaW9uQWNjdXJhY3kgPT09IFwibG9uZ3Rlcm1cIiB8fCBmYWxzZTtcbiAgICBsZXQgbWF0cml4ID0gYWNjdXJhdGUgPyBhY2N1cmF0ZU1hdHJpeCA6IGNhc3VhbE1hdHJpeDtcblxuICAgIGlmIChjb25maWcubWF0cml4KSB7XG4gICAgICBtYXRyaXggPSBjb25maWcubWF0cml4O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBhY2Nlc3MgcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMudmFsdWVzID0gY29uZmlnLnZhbHVlcztcbiAgICAvKipcbiAgICAgKiBAYWNjZXNzIHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLmxvYyA9IGNvbmZpZy5sb2MgfHwgTG9jYWxlLmNyZWF0ZSgpO1xuICAgIC8qKlxuICAgICAqIEBhY2Nlc3MgcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuY29udmVyc2lvbkFjY3VyYWN5ID0gYWNjdXJhdGUgPyBcImxvbmd0ZXJtXCIgOiBcImNhc3VhbFwiO1xuICAgIC8qKlxuICAgICAqIEBhY2Nlc3MgcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuaW52YWxpZCA9IGNvbmZpZy5pbnZhbGlkIHx8IG51bGw7XG4gICAgLyoqXG4gICAgICogQGFjY2VzcyBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5tYXRyaXggPSBtYXRyaXg7XG4gICAgLyoqXG4gICAgICogQGFjY2VzcyBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5pc0x1eG9uRHVyYXRpb24gPSB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBEdXJhdGlvbiBmcm9tIGEgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcy5cbiAgICogQHBhcmFtIHtudW1iZXJ9IGNvdW50IG9mIG1pbGxpc2Vjb25kc1xuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyAtIG9wdGlvbnMgZm9yIHBhcnNpbmdcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLmxvY2FsZT0nZW4tVVMnXSAtIHRoZSBsb2NhbGUgdG8gdXNlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRzLm51bWJlcmluZ1N5c3RlbSAtIHRoZSBudW1iZXJpbmcgc3lzdGVtIHRvIHVzZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMuY29udmVyc2lvbkFjY3VyYWN5PSdjYXN1YWwnXSAtIHRoZSBjb252ZXJzaW9uIHN5c3RlbSB0byB1c2VcbiAgICogQHJldHVybiB7RHVyYXRpb259XG4gICAqL1xuICBzdGF0aWMgZnJvbU1pbGxpcyhjb3VudCwgb3B0cykge1xuICAgIHJldHVybiBEdXJhdGlvbi5mcm9tT2JqZWN0KHsgbWlsbGlzZWNvbmRzOiBjb3VudCB9LCBvcHRzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBEdXJhdGlvbiBmcm9tIGEgSmF2YVNjcmlwdCBvYmplY3Qgd2l0aCBrZXlzIGxpa2UgJ3llYXJzJyBhbmQgJ2hvdXJzJy5cbiAgICogSWYgdGhpcyBvYmplY3QgaXMgZW1wdHkgdGhlbiBhIHplcm8gbWlsbGlzZWNvbmRzIGR1cmF0aW9uIGlzIHJldHVybmVkLlxuICAgKiBAcGFyYW0ge09iamVjdH0gb2JqIC0gdGhlIG9iamVjdCB0byBjcmVhdGUgdGhlIERhdGVUaW1lIGZyb21cbiAgICogQHBhcmFtIHtudW1iZXJ9IG9iai55ZWFyc1xuICAgKiBAcGFyYW0ge251bWJlcn0gb2JqLnF1YXJ0ZXJzXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBvYmoubW9udGhzXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBvYmoud2Vla3NcbiAgICogQHBhcmFtIHtudW1iZXJ9IG9iai5kYXlzXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBvYmouaG91cnNcbiAgICogQHBhcmFtIHtudW1iZXJ9IG9iai5taW51dGVzXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBvYmouc2Vjb25kc1xuICAgKiBAcGFyYW0ge251bWJlcn0gb2JqLm1pbGxpc2Vjb25kc1xuICAgKiBAcGFyYW0ge09iamVjdH0gW29wdHM9W11dIC0gb3B0aW9ucyBmb3IgY3JlYXRpbmcgdGhpcyBEdXJhdGlvblxuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMubG9jYWxlPSdlbi1VUyddIC0gdGhlIGxvY2FsZSB0byB1c2VcbiAgICogQHBhcmFtIHtzdHJpbmd9IG9wdHMubnVtYmVyaW5nU3lzdGVtIC0gdGhlIG51bWJlcmluZyBzeXN0ZW0gdG8gdXNlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5jb252ZXJzaW9uQWNjdXJhY3k9J2Nhc3VhbCddIC0gdGhlIHByZXNldCBjb252ZXJzaW9uIHN5c3RlbSB0byB1c2VcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLm1hdHJpeD1PYmplY3RdIC0gdGhlIGN1c3RvbSBjb252ZXJzaW9uIHN5c3RlbSB0byB1c2VcbiAgICogQHJldHVybiB7RHVyYXRpb259XG4gICAqL1xuICBzdGF0aWMgZnJvbU9iamVjdChvYmosIG9wdHMgPSB7fSkge1xuICAgIGlmIChvYmogPT0gbnVsbCB8fCB0eXBlb2Ygb2JqICE9PSBcIm9iamVjdFwiKSB7XG4gICAgICB0aHJvdyBuZXcgSW52YWxpZEFyZ3VtZW50RXJyb3IoXG4gICAgICAgIGBEdXJhdGlvbi5mcm9tT2JqZWN0OiBhcmd1bWVudCBleHBlY3RlZCB0byBiZSBhbiBvYmplY3QsIGdvdCAke1xuICAgICAgICAgIG9iaiA9PT0gbnVsbCA/IFwibnVsbFwiIDogdHlwZW9mIG9ialxuICAgICAgICB9YFxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IER1cmF0aW9uKHtcbiAgICAgIHZhbHVlczogbm9ybWFsaXplT2JqZWN0KG9iaiwgRHVyYXRpb24ubm9ybWFsaXplVW5pdCksXG4gICAgICBsb2M6IExvY2FsZS5mcm9tT2JqZWN0KG9wdHMpLFxuICAgICAgY29udmVyc2lvbkFjY3VyYWN5OiBvcHRzLmNvbnZlcnNpb25BY2N1cmFjeSxcbiAgICAgIG1hdHJpeDogb3B0cy5tYXRyaXgsXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgRHVyYXRpb24gZnJvbSBEdXJhdGlvbkxpa2UuXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0IHwgbnVtYmVyIHwgRHVyYXRpb259IGR1cmF0aW9uTGlrZVxuICAgKiBPbmUgb2Y6XG4gICAqIC0gb2JqZWN0IHdpdGgga2V5cyBsaWtlICd5ZWFycycgYW5kICdob3VycycuXG4gICAqIC0gbnVtYmVyIHJlcHJlc2VudGluZyBtaWxsaXNlY29uZHNcbiAgICogLSBEdXJhdGlvbiBpbnN0YW5jZVxuICAgKiBAcmV0dXJuIHtEdXJhdGlvbn1cbiAgICovXG4gIHN0YXRpYyBmcm9tRHVyYXRpb25MaWtlKGR1cmF0aW9uTGlrZSkge1xuICAgIGlmIChpc051bWJlcihkdXJhdGlvbkxpa2UpKSB7XG4gICAgICByZXR1cm4gRHVyYXRpb24uZnJvbU1pbGxpcyhkdXJhdGlvbkxpa2UpO1xuICAgIH0gZWxzZSBpZiAoRHVyYXRpb24uaXNEdXJhdGlvbihkdXJhdGlvbkxpa2UpKSB7XG4gICAgICByZXR1cm4gZHVyYXRpb25MaWtlO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGR1cmF0aW9uTGlrZSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgcmV0dXJuIER1cmF0aW9uLmZyb21PYmplY3QoZHVyYXRpb25MaWtlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEludmFsaWRBcmd1bWVudEVycm9yKFxuICAgICAgICBgVW5rbm93biBkdXJhdGlvbiBhcmd1bWVudCAke2R1cmF0aW9uTGlrZX0gb2YgdHlwZSAke3R5cGVvZiBkdXJhdGlvbkxpa2V9YFxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgRHVyYXRpb24gZnJvbSBhbiBJU08gODYwMSBkdXJhdGlvbiBzdHJpbmcuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gdGV4dCB0byBwYXJzZVxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyAtIG9wdGlvbnMgZm9yIHBhcnNpbmdcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLmxvY2FsZT0nZW4tVVMnXSAtIHRoZSBsb2NhbGUgdG8gdXNlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRzLm51bWJlcmluZ1N5c3RlbSAtIHRoZSBudW1iZXJpbmcgc3lzdGVtIHRvIHVzZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMuY29udmVyc2lvbkFjY3VyYWN5PSdjYXN1YWwnXSAtIHRoZSBwcmVzZXQgY29udmVyc2lvbiBzeXN0ZW0gdG8gdXNlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5tYXRyaXg9T2JqZWN0XSAtIHRoZSBwcmVzZXQgY29udmVyc2lvbiBzeXN0ZW0gdG8gdXNlXG4gICAqIEBzZWUgaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSVNPXzg2MDEjRHVyYXRpb25zXG4gICAqIEBleGFtcGxlIER1cmF0aW9uLmZyb21JU08oJ1AzWTZNMVc0RFQxMkgzME01UycpLnRvT2JqZWN0KCkgLy89PiB7IHllYXJzOiAzLCBtb250aHM6IDYsIHdlZWtzOiAxLCBkYXlzOiA0LCBob3VyczogMTIsIG1pbnV0ZXM6IDMwLCBzZWNvbmRzOiA1IH1cbiAgICogQGV4YW1wbGUgRHVyYXRpb24uZnJvbUlTTygnUFQyM0gnKS50b09iamVjdCgpIC8vPT4geyBob3VyczogMjMgfVxuICAgKiBAZXhhbXBsZSBEdXJhdGlvbi5mcm9tSVNPKCdQNVkzTScpLnRvT2JqZWN0KCkgLy89PiB7IHllYXJzOiA1LCBtb250aHM6IDMgfVxuICAgKiBAcmV0dXJuIHtEdXJhdGlvbn1cbiAgICovXG4gIHN0YXRpYyBmcm9tSVNPKHRleHQsIG9wdHMpIHtcbiAgICBjb25zdCBbcGFyc2VkXSA9IHBhcnNlSVNPRHVyYXRpb24odGV4dCk7XG4gICAgaWYgKHBhcnNlZCkge1xuICAgICAgcmV0dXJuIER1cmF0aW9uLmZyb21PYmplY3QocGFyc2VkLCBvcHRzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIER1cmF0aW9uLmludmFsaWQoXCJ1bnBhcnNhYmxlXCIsIGB0aGUgaW5wdXQgXCIke3RleHR9XCIgY2FuJ3QgYmUgcGFyc2VkIGFzIElTTyA4NjAxYCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIER1cmF0aW9uIGZyb20gYW4gSVNPIDg2MDEgdGltZSBzdHJpbmcuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gdGV4dCB0byBwYXJzZVxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyAtIG9wdGlvbnMgZm9yIHBhcnNpbmdcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLmxvY2FsZT0nZW4tVVMnXSAtIHRoZSBsb2NhbGUgdG8gdXNlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRzLm51bWJlcmluZ1N5c3RlbSAtIHRoZSBudW1iZXJpbmcgc3lzdGVtIHRvIHVzZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMuY29udmVyc2lvbkFjY3VyYWN5PSdjYXN1YWwnXSAtIHRoZSBwcmVzZXQgY29udmVyc2lvbiBzeXN0ZW0gdG8gdXNlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5tYXRyaXg9T2JqZWN0XSAtIHRoZSBjb252ZXJzaW9uIHN5c3RlbSB0byB1c2VcbiAgICogQHNlZSBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fODYwMSNUaW1lc1xuICAgKiBAZXhhbXBsZSBEdXJhdGlvbi5mcm9tSVNPVGltZSgnMTE6MjI6MzMuNDQ0JykudG9PYmplY3QoKSAvLz0+IHsgaG91cnM6IDExLCBtaW51dGVzOiAyMiwgc2Vjb25kczogMzMsIG1pbGxpc2Vjb25kczogNDQ0IH1cbiAgICogQGV4YW1wbGUgRHVyYXRpb24uZnJvbUlTT1RpbWUoJzExOjAwJykudG9PYmplY3QoKSAvLz0+IHsgaG91cnM6IDExLCBtaW51dGVzOiAwLCBzZWNvbmRzOiAwIH1cbiAgICogQGV4YW1wbGUgRHVyYXRpb24uZnJvbUlTT1RpbWUoJ1QxMTowMCcpLnRvT2JqZWN0KCkgLy89PiB7IGhvdXJzOiAxMSwgbWludXRlczogMCwgc2Vjb25kczogMCB9XG4gICAqIEBleGFtcGxlIER1cmF0aW9uLmZyb21JU09UaW1lKCcxMTAwJykudG9PYmplY3QoKSAvLz0+IHsgaG91cnM6IDExLCBtaW51dGVzOiAwLCBzZWNvbmRzOiAwIH1cbiAgICogQGV4YW1wbGUgRHVyYXRpb24uZnJvbUlTT1RpbWUoJ1QxMTAwJykudG9PYmplY3QoKSAvLz0+IHsgaG91cnM6IDExLCBtaW51dGVzOiAwLCBzZWNvbmRzOiAwIH1cbiAgICogQHJldHVybiB7RHVyYXRpb259XG4gICAqL1xuICBzdGF0aWMgZnJvbUlTT1RpbWUodGV4dCwgb3B0cykge1xuICAgIGNvbnN0IFtwYXJzZWRdID0gcGFyc2VJU09UaW1lT25seSh0ZXh0KTtcbiAgICBpZiAocGFyc2VkKSB7XG4gICAgICByZXR1cm4gRHVyYXRpb24uZnJvbU9iamVjdChwYXJzZWQsIG9wdHMpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gRHVyYXRpb24uaW52YWxpZChcInVucGFyc2FibGVcIiwgYHRoZSBpbnB1dCBcIiR7dGV4dH1cIiBjYW4ndCBiZSBwYXJzZWQgYXMgSVNPIDg2MDFgKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGFuIGludmFsaWQgRHVyYXRpb24uXG4gICAqIEBwYXJhbSB7c3RyaW5nfSByZWFzb24gLSBzaW1wbGUgc3RyaW5nIG9mIHdoeSB0aGlzIGRhdGV0aW1lIGlzIGludmFsaWQuIFNob3VsZCBub3QgY29udGFpbiBwYXJhbWV0ZXJzIG9yIGFueXRoaW5nIGVsc2UgZGF0YS1kZXBlbmRlbnRcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtleHBsYW5hdGlvbj1udWxsXSAtIGxvbmdlciBleHBsYW5hdGlvbiwgbWF5IGluY2x1ZGUgcGFyYW1ldGVycyBhbmQgb3RoZXIgdXNlZnVsIGRlYnVnZ2luZyBpbmZvcm1hdGlvblxuICAgKiBAcmV0dXJuIHtEdXJhdGlvbn1cbiAgICovXG4gIHN0YXRpYyBpbnZhbGlkKHJlYXNvbiwgZXhwbGFuYXRpb24gPSBudWxsKSB7XG4gICAgaWYgKCFyZWFzb24pIHtcbiAgICAgIHRocm93IG5ldyBJbnZhbGlkQXJndW1lbnRFcnJvcihcIm5lZWQgdG8gc3BlY2lmeSBhIHJlYXNvbiB0aGUgRHVyYXRpb24gaXMgaW52YWxpZFwiKTtcbiAgICB9XG5cbiAgICBjb25zdCBpbnZhbGlkID0gcmVhc29uIGluc3RhbmNlb2YgSW52YWxpZCA/IHJlYXNvbiA6IG5ldyBJbnZhbGlkKHJlYXNvbiwgZXhwbGFuYXRpb24pO1xuXG4gICAgaWYgKFNldHRpbmdzLnRocm93T25JbnZhbGlkKSB7XG4gICAgICB0aHJvdyBuZXcgSW52YWxpZER1cmF0aW9uRXJyb3IoaW52YWxpZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBuZXcgRHVyYXRpb24oeyBpbnZhbGlkIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgc3RhdGljIG5vcm1hbGl6ZVVuaXQodW5pdCkge1xuICAgIGNvbnN0IG5vcm1hbGl6ZWQgPSB7XG4gICAgICB5ZWFyOiBcInllYXJzXCIsXG4gICAgICB5ZWFyczogXCJ5ZWFyc1wiLFxuICAgICAgcXVhcnRlcjogXCJxdWFydGVyc1wiLFxuICAgICAgcXVhcnRlcnM6IFwicXVhcnRlcnNcIixcbiAgICAgIG1vbnRoOiBcIm1vbnRoc1wiLFxuICAgICAgbW9udGhzOiBcIm1vbnRoc1wiLFxuICAgICAgd2VlazogXCJ3ZWVrc1wiLFxuICAgICAgd2Vla3M6IFwid2Vla3NcIixcbiAgICAgIGRheTogXCJkYXlzXCIsXG4gICAgICBkYXlzOiBcImRheXNcIixcbiAgICAgIGhvdXI6IFwiaG91cnNcIixcbiAgICAgIGhvdXJzOiBcImhvdXJzXCIsXG4gICAgICBtaW51dGU6IFwibWludXRlc1wiLFxuICAgICAgbWludXRlczogXCJtaW51dGVzXCIsXG4gICAgICBzZWNvbmQ6IFwic2Vjb25kc1wiLFxuICAgICAgc2Vjb25kczogXCJzZWNvbmRzXCIsXG4gICAgICBtaWxsaXNlY29uZDogXCJtaWxsaXNlY29uZHNcIixcbiAgICAgIG1pbGxpc2Vjb25kczogXCJtaWxsaXNlY29uZHNcIixcbiAgICB9W3VuaXQgPyB1bml0LnRvTG93ZXJDYXNlKCkgOiB1bml0XTtcblxuICAgIGlmICghbm9ybWFsaXplZCkgdGhyb3cgbmV3IEludmFsaWRVbml0RXJyb3IodW5pdCk7XG5cbiAgICByZXR1cm4gbm9ybWFsaXplZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBpZiBhbiBvYmplY3QgaXMgYSBEdXJhdGlvbi4gV29ya3MgYWNyb3NzIGNvbnRleHQgYm91bmRhcmllc1xuICAgKiBAcGFyYW0ge29iamVjdH0gb1xuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgc3RhdGljIGlzRHVyYXRpb24obykge1xuICAgIHJldHVybiAobyAmJiBvLmlzTHV4b25EdXJhdGlvbikgfHwgZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogR2V0ICB0aGUgbG9jYWxlIG9mIGEgRHVyYXRpb24sIHN1Y2ggJ2VuLUdCJ1xuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgZ2V0IGxvY2FsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gdGhpcy5sb2MubG9jYWxlIDogbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIG51bWJlcmluZyBzeXN0ZW0gb2YgYSBEdXJhdGlvbiwgc3VjaCAnYmVuZycuIFRoZSBudW1iZXJpbmcgc3lzdGVtIGlzIHVzZWQgd2hlbiBmb3JtYXR0aW5nIHRoZSBEdXJhdGlvblxuICAgKlxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgZ2V0IG51bWJlcmluZ1N5c3RlbSgpIHtcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gdGhpcy5sb2MubnVtYmVyaW5nU3lzdGVtIDogbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoaXMgRHVyYXRpb24gZm9ybWF0dGVkIGFjY29yZGluZyB0byB0aGUgc3BlY2lmaWVkIGZvcm1hdCBzdHJpbmcuIFlvdSBtYXkgdXNlIHRoZXNlIHRva2VuczpcbiAgICogKiBgU2AgZm9yIG1pbGxpc2Vjb25kc1xuICAgKiAqIGBzYCBmb3Igc2Vjb25kc1xuICAgKiAqIGBtYCBmb3IgbWludXRlc1xuICAgKiAqIGBoYCBmb3IgaG91cnNcbiAgICogKiBgZGAgZm9yIGRheXNcbiAgICogKiBgd2AgZm9yIHdlZWtzXG4gICAqICogYE1gIGZvciBtb250aHNcbiAgICogKiBgeWAgZm9yIHllYXJzXG4gICAqIE5vdGVzOlxuICAgKiAqIEFkZCBwYWRkaW5nIGJ5IHJlcGVhdGluZyB0aGUgdG9rZW4sIGUuZy4gXCJ5eVwiIHBhZHMgdGhlIHllYXJzIHRvIHR3byBkaWdpdHMsIFwiaGhoaFwiIHBhZHMgdGhlIGhvdXJzIG91dCB0byBmb3VyIGRpZ2l0c1xuICAgKiAqIFRva2VucyBjYW4gYmUgZXNjYXBlZCBieSB3cmFwcGluZyB3aXRoIHNpbmdsZSBxdW90ZXMuXG4gICAqICogVGhlIGR1cmF0aW9uIHdpbGwgYmUgY29udmVydGVkIHRvIHRoZSBzZXQgb2YgdW5pdHMgaW4gdGhlIGZvcm1hdCBzdHJpbmcgdXNpbmcge0BsaW5rIER1cmF0aW9uI3NoaWZ0VG99IGFuZCB0aGUgRHVyYXRpb25zJ3MgY29udmVyc2lvbiBhY2N1cmFjeSBzZXR0aW5nLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZm10IC0gdGhlIGZvcm1hdCBzdHJpbmdcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgLSBvcHRpb25zXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdHMuZmxvb3I9dHJ1ZV0gLSBmbG9vciBudW1lcmljYWwgdmFsdWVzXG4gICAqIEBleGFtcGxlIER1cmF0aW9uLmZyb21PYmplY3QoeyB5ZWFyczogMSwgZGF5czogNiwgc2Vjb25kczogMiB9KS50b0Zvcm1hdChcInkgZCBzXCIpIC8vPT4gXCIxIDYgMlwiXG4gICAqIEBleGFtcGxlIER1cmF0aW9uLmZyb21PYmplY3QoeyB5ZWFyczogMSwgZGF5czogNiwgc2Vjb25kczogMiB9KS50b0Zvcm1hdChcInl5IGRkIHNzc1wiKSAvLz0+IFwiMDEgMDYgMDAyXCJcbiAgICogQGV4YW1wbGUgRHVyYXRpb24uZnJvbU9iamVjdCh7IHllYXJzOiAxLCBkYXlzOiA2LCBzZWNvbmRzOiAyIH0pLnRvRm9ybWF0KFwiTSBTXCIpIC8vPT4gXCIxMiA1MTg0MDIwMDBcIlxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICB0b0Zvcm1hdChmbXQsIG9wdHMgPSB7fSkge1xuICAgIC8vIHJldmVyc2UtY29tcGF0IHNpbmNlIDEuMjsgd2UgYWx3YXlzIHJvdW5kIGRvd24gbm93LCBuZXZlciB1cCwgYW5kIHdlIGRvIGl0IGJ5IGRlZmF1bHRcbiAgICBjb25zdCBmbXRPcHRzID0ge1xuICAgICAgLi4ub3B0cyxcbiAgICAgIGZsb29yOiBvcHRzLnJvdW5kICE9PSBmYWxzZSAmJiBvcHRzLmZsb29yICE9PSBmYWxzZSxcbiAgICB9O1xuICAgIHJldHVybiB0aGlzLmlzVmFsaWRcbiAgICAgID8gRm9ybWF0dGVyLmNyZWF0ZSh0aGlzLmxvYywgZm10T3B0cykuZm9ybWF0RHVyYXRpb25Gcm9tU3RyaW5nKHRoaXMsIGZtdClcbiAgICAgIDogSU5WQUxJRCQyO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgYSBEdXJhdGlvbiB3aXRoIGFsbCB1bml0cyBpbmNsdWRlZC5cbiAgICogVG8gbW9kaWZ5IGl0cyBiZWhhdmlvciB1c2UgdGhlIGBsaXN0U3R5bGVgIGFuZCBhbnkgSW50bC5OdW1iZXJGb3JtYXQgb3B0aW9uLCB0aG91Z2ggYHVuaXREaXNwbGF5YCBpcyBlc3BlY2lhbGx5IHJlbGV2YW50LlxuICAgKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL0ludGwvTnVtYmVyRm9ybWF0XG4gICAqIEBwYXJhbSBvcHRzIC0gT24gb3B0aW9uIG9iamVjdCB0byBvdmVycmlkZSB0aGUgZm9ybWF0dGluZy4gQWNjZXB0cyB0aGUgc2FtZSBrZXlzIGFzIHRoZSBvcHRpb25zIHBhcmFtZXRlciBvZiB0aGUgbmF0aXZlIGBJbnQuTnVtYmVyRm9ybWF0YCBjb25zdHJ1Y3RvciwgYXMgd2VsbCBhcyBgbGlzdFN0eWxlYC5cbiAgICogQGV4YW1wbGVcbiAgICogYGBganNcbiAgICogdmFyIGR1ciA9IER1cmF0aW9uLmZyb21PYmplY3QoeyBkYXlzOiAxLCBob3VyczogNSwgbWludXRlczogNiB9KVxuICAgKiBkdXIudG9IdW1hbigpIC8vPT4gJzEgZGF5LCA1IGhvdXJzLCA2IG1pbnV0ZXMnXG4gICAqIGR1ci50b0h1bWFuKHsgbGlzdFN0eWxlOiBcImxvbmdcIiB9KSAvLz0+ICcxIGRheSwgNSBob3VycywgYW5kIDYgbWludXRlcydcbiAgICogZHVyLnRvSHVtYW4oeyB1bml0RGlzcGxheTogXCJzaG9ydFwiIH0pIC8vPT4gJzEgZGF5LCA1IGhyLCA2IG1pbidcbiAgICogYGBgXG4gICAqL1xuICB0b0h1bWFuKG9wdHMgPSB7fSkge1xuICAgIGNvbnN0IGwgPSBvcmRlcmVkVW5pdHMkMVxuICAgICAgLm1hcCgodW5pdCkgPT4ge1xuICAgICAgICBjb25zdCB2YWwgPSB0aGlzLnZhbHVlc1t1bml0XTtcbiAgICAgICAgaWYgKGlzVW5kZWZpbmVkKHZhbCkpIHtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5sb2NcbiAgICAgICAgICAubnVtYmVyRm9ybWF0dGVyKHsgc3R5bGU6IFwidW5pdFwiLCB1bml0RGlzcGxheTogXCJsb25nXCIsIC4uLm9wdHMsIHVuaXQ6IHVuaXQuc2xpY2UoMCwgLTEpIH0pXG4gICAgICAgICAgLmZvcm1hdCh2YWwpO1xuICAgICAgfSlcbiAgICAgIC5maWx0ZXIoKG4pID0+IG4pO1xuXG4gICAgcmV0dXJuIHRoaXMubG9jXG4gICAgICAubGlzdEZvcm1hdHRlcih7IHR5cGU6IFwiY29uanVuY3Rpb25cIiwgc3R5bGU6IG9wdHMubGlzdFN0eWxlIHx8IFwibmFycm93XCIsIC4uLm9wdHMgfSlcbiAgICAgIC5mb3JtYXQobCk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIEphdmFTY3JpcHQgb2JqZWN0IHdpdGggdGhpcyBEdXJhdGlvbidzIHZhbHVlcy5cbiAgICogQGV4YW1wbGUgRHVyYXRpb24uZnJvbU9iamVjdCh7IHllYXJzOiAxLCBkYXlzOiA2LCBzZWNvbmRzOiAyIH0pLnRvT2JqZWN0KCkgLy89PiB7IHllYXJzOiAxLCBkYXlzOiA2LCBzZWNvbmRzOiAyIH1cbiAgICogQHJldHVybiB7T2JqZWN0fVxuICAgKi9cbiAgdG9PYmplY3QoKSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHJldHVybiB7fTtcbiAgICByZXR1cm4geyAuLi50aGlzLnZhbHVlcyB9O1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gSVNPIDg2MDEtY29tcGxpYW50IHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGlzIER1cmF0aW9uLlxuICAgKiBAc2VlIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0lTT184NjAxI0R1cmF0aW9uc1xuICAgKiBAZXhhbXBsZSBEdXJhdGlvbi5mcm9tT2JqZWN0KHsgeWVhcnM6IDMsIHNlY29uZHM6IDQ1IH0pLnRvSVNPKCkgLy89PiAnUDNZVDQ1UydcbiAgICogQGV4YW1wbGUgRHVyYXRpb24uZnJvbU9iamVjdCh7IG1vbnRoczogNCwgc2Vjb25kczogNDUgfSkudG9JU08oKSAvLz0+ICdQNE1UNDVTJ1xuICAgKiBAZXhhbXBsZSBEdXJhdGlvbi5mcm9tT2JqZWN0KHsgbW9udGhzOiA1IH0pLnRvSVNPKCkgLy89PiAnUDVNJ1xuICAgKiBAZXhhbXBsZSBEdXJhdGlvbi5mcm9tT2JqZWN0KHsgbWludXRlczogNSB9KS50b0lTTygpIC8vPT4gJ1BUNU0nXG4gICAqIEBleGFtcGxlIER1cmF0aW9uLmZyb21PYmplY3QoeyBtaWxsaXNlY29uZHM6IDYgfSkudG9JU08oKSAvLz0+ICdQVDAuMDA2UydcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgdG9JU08oKSB7XG4gICAgLy8gd2UgY291bGQgdXNlIHRoZSBmb3JtYXR0ZXIsIGJ1dCB0aGlzIGlzIGFuIGVhc2llciB3YXkgdG8gZ2V0IHRoZSBtaW5pbXVtIHN0cmluZ1xuICAgIGlmICghdGhpcy5pc1ZhbGlkKSByZXR1cm4gbnVsbDtcblxuICAgIGxldCBzID0gXCJQXCI7XG4gICAgaWYgKHRoaXMueWVhcnMgIT09IDApIHMgKz0gdGhpcy55ZWFycyArIFwiWVwiO1xuICAgIGlmICh0aGlzLm1vbnRocyAhPT0gMCB8fCB0aGlzLnF1YXJ0ZXJzICE9PSAwKSBzICs9IHRoaXMubW9udGhzICsgdGhpcy5xdWFydGVycyAqIDMgKyBcIk1cIjtcbiAgICBpZiAodGhpcy53ZWVrcyAhPT0gMCkgcyArPSB0aGlzLndlZWtzICsgXCJXXCI7XG4gICAgaWYgKHRoaXMuZGF5cyAhPT0gMCkgcyArPSB0aGlzLmRheXMgKyBcIkRcIjtcbiAgICBpZiAodGhpcy5ob3VycyAhPT0gMCB8fCB0aGlzLm1pbnV0ZXMgIT09IDAgfHwgdGhpcy5zZWNvbmRzICE9PSAwIHx8IHRoaXMubWlsbGlzZWNvbmRzICE9PSAwKVxuICAgICAgcyArPSBcIlRcIjtcbiAgICBpZiAodGhpcy5ob3VycyAhPT0gMCkgcyArPSB0aGlzLmhvdXJzICsgXCJIXCI7XG4gICAgaWYgKHRoaXMubWludXRlcyAhPT0gMCkgcyArPSB0aGlzLm1pbnV0ZXMgKyBcIk1cIjtcbiAgICBpZiAodGhpcy5zZWNvbmRzICE9PSAwIHx8IHRoaXMubWlsbGlzZWNvbmRzICE9PSAwKVxuICAgICAgLy8gdGhpcyB3aWxsIGhhbmRsZSBcImZsb2F0aW5nIHBvaW50IG1hZG5lc3NcIiBieSByZW1vdmluZyBleHRyYSBkZWNpbWFsIHBsYWNlc1xuICAgICAgLy8gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNTg4MDA0L2lzLWZsb2F0aW5nLXBvaW50LW1hdGgtYnJva2VuXG4gICAgICBzICs9IHJvdW5kVG8odGhpcy5zZWNvbmRzICsgdGhpcy5taWxsaXNlY29uZHMgLyAxMDAwLCAzKSArIFwiU1wiO1xuICAgIGlmIChzID09PSBcIlBcIikgcyArPSBcIlQwU1wiO1xuICAgIHJldHVybiBzO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gSVNPIDg2MDEtY29tcGxpYW50IHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGlzIER1cmF0aW9uLCBmb3JtYXR0ZWQgYXMgYSB0aW1lIG9mIGRheS5cbiAgICogTm90ZSB0aGF0IHRoaXMgd2lsbCByZXR1cm4gbnVsbCBpZiB0aGUgZHVyYXRpb24gaXMgaW52YWxpZCwgbmVnYXRpdmUsIG9yIGVxdWFsIHRvIG9yIGdyZWF0ZXIgdGhhbiAyNCBob3Vycy5cbiAgICogQHNlZSBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fODYwMSNUaW1lc1xuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyAtIG9wdGlvbnNcbiAgICogQHBhcmFtIHtib29sZWFufSBbb3B0cy5zdXBwcmVzc01pbGxpc2Vjb25kcz1mYWxzZV0gLSBleGNsdWRlIG1pbGxpc2Vjb25kcyBmcm9tIHRoZSBmb3JtYXQgaWYgdGhleSdyZSAwXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdHMuc3VwcHJlc3NTZWNvbmRzPWZhbHNlXSAtIGV4Y2x1ZGUgc2Vjb25kcyBmcm9tIHRoZSBmb3JtYXQgaWYgdGhleSdyZSAwXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdHMuaW5jbHVkZVByZWZpeD1mYWxzZV0gLSBpbmNsdWRlIHRoZSBgVGAgcHJlZml4XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5mb3JtYXQ9J2V4dGVuZGVkJ10gLSBjaG9vc2UgYmV0d2VlbiB0aGUgYmFzaWMgYW5kIGV4dGVuZGVkIGZvcm1hdFxuICAgKiBAZXhhbXBsZSBEdXJhdGlvbi5mcm9tT2JqZWN0KHsgaG91cnM6IDExIH0pLnRvSVNPVGltZSgpIC8vPT4gJzExOjAwOjAwLjAwMCdcbiAgICogQGV4YW1wbGUgRHVyYXRpb24uZnJvbU9iamVjdCh7IGhvdXJzOiAxMSB9KS50b0lTT1RpbWUoeyBzdXBwcmVzc01pbGxpc2Vjb25kczogdHJ1ZSB9KSAvLz0+ICcxMTowMDowMCdcbiAgICogQGV4YW1wbGUgRHVyYXRpb24uZnJvbU9iamVjdCh7IGhvdXJzOiAxMSB9KS50b0lTT1RpbWUoeyBzdXBwcmVzc1NlY29uZHM6IHRydWUgfSkgLy89PiAnMTE6MDAnXG4gICAqIEBleGFtcGxlIER1cmF0aW9uLmZyb21PYmplY3QoeyBob3VyczogMTEgfSkudG9JU09UaW1lKHsgaW5jbHVkZVByZWZpeDogdHJ1ZSB9KSAvLz0+ICdUMTE6MDA6MDAuMDAwJ1xuICAgKiBAZXhhbXBsZSBEdXJhdGlvbi5mcm9tT2JqZWN0KHsgaG91cnM6IDExIH0pLnRvSVNPVGltZSh7IGZvcm1hdDogJ2Jhc2ljJyB9KSAvLz0+ICcxMTAwMDAuMDAwJ1xuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICB0b0lTT1RpbWUob3B0cyA9IHt9KSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHJldHVybiBudWxsO1xuXG4gICAgY29uc3QgbWlsbGlzID0gdGhpcy50b01pbGxpcygpO1xuICAgIGlmIChtaWxsaXMgPCAwIHx8IG1pbGxpcyA+PSA4NjQwMDAwMCkgcmV0dXJuIG51bGw7XG5cbiAgICBvcHRzID0ge1xuICAgICAgc3VwcHJlc3NNaWxsaXNlY29uZHM6IGZhbHNlLFxuICAgICAgc3VwcHJlc3NTZWNvbmRzOiBmYWxzZSxcbiAgICAgIGluY2x1ZGVQcmVmaXg6IGZhbHNlLFxuICAgICAgZm9ybWF0OiBcImV4dGVuZGVkXCIsXG4gICAgICAuLi5vcHRzLFxuICAgIH07XG5cbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuc2hpZnRUbyhcImhvdXJzXCIsIFwibWludXRlc1wiLCBcInNlY29uZHNcIiwgXCJtaWxsaXNlY29uZHNcIik7XG5cbiAgICBsZXQgZm10ID0gb3B0cy5mb3JtYXQgPT09IFwiYmFzaWNcIiA/IFwiaGhtbVwiIDogXCJoaDptbVwiO1xuXG4gICAgaWYgKCFvcHRzLnN1cHByZXNzU2Vjb25kcyB8fCB2YWx1ZS5zZWNvbmRzICE9PSAwIHx8IHZhbHVlLm1pbGxpc2Vjb25kcyAhPT0gMCkge1xuICAgICAgZm10ICs9IG9wdHMuZm9ybWF0ID09PSBcImJhc2ljXCIgPyBcInNzXCIgOiBcIjpzc1wiO1xuICAgICAgaWYgKCFvcHRzLnN1cHByZXNzTWlsbGlzZWNvbmRzIHx8IHZhbHVlLm1pbGxpc2Vjb25kcyAhPT0gMCkge1xuICAgICAgICBmbXQgKz0gXCIuU1NTXCI7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGV0IHN0ciA9IHZhbHVlLnRvRm9ybWF0KGZtdCk7XG5cbiAgICBpZiAob3B0cy5pbmNsdWRlUHJlZml4KSB7XG4gICAgICBzdHIgPSBcIlRcIiArIHN0cjtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RyO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gSVNPIDg2MDEgcmVwcmVzZW50YXRpb24gb2YgdGhpcyBEdXJhdGlvbiBhcHByb3ByaWF0ZSBmb3IgdXNlIGluIEpTT04uXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b0lTTygpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gSVNPIDg2MDEgcmVwcmVzZW50YXRpb24gb2YgdGhpcyBEdXJhdGlvbiBhcHByb3ByaWF0ZSBmb3IgdXNlIGluIGRlYnVnZ2luZy5cbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMudG9JU08oKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIG1pbGxpc2Vjb25kcyB2YWx1ZSBvZiB0aGlzIER1cmF0aW9uLlxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqL1xuICB0b01pbGxpcygpIHtcbiAgICByZXR1cm4gdGhpcy5hcyhcIm1pbGxpc2Vjb25kc1wiKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIG1pbGxpc2Vjb25kcyB2YWx1ZSBvZiB0aGlzIER1cmF0aW9uLiBBbGlhcyBvZiB7QGxpbmsgdG9NaWxsaXN9XG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIHZhbHVlT2YoKSB7XG4gICAgcmV0dXJuIHRoaXMudG9NaWxsaXMoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNYWtlIHRoaXMgRHVyYXRpb24gbG9uZ2VyIGJ5IHRoZSBzcGVjaWZpZWQgYW1vdW50LiBSZXR1cm4gYSBuZXdseS1jb25zdHJ1Y3RlZCBEdXJhdGlvbi5cbiAgICogQHBhcmFtIHtEdXJhdGlvbnxPYmplY3R8bnVtYmVyfSBkdXJhdGlvbiAtIFRoZSBhbW91bnQgdG8gYWRkLiBFaXRoZXIgYSBMdXhvbiBEdXJhdGlvbiwgYSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzLCB0aGUgb2JqZWN0IGFyZ3VtZW50IHRvIER1cmF0aW9uLmZyb21PYmplY3QoKVxuICAgKiBAcmV0dXJuIHtEdXJhdGlvbn1cbiAgICovXG4gIHBsdXMoZHVyYXRpb24pIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIHRoaXM7XG5cbiAgICBjb25zdCBkdXIgPSBEdXJhdGlvbi5mcm9tRHVyYXRpb25MaWtlKGR1cmF0aW9uKSxcbiAgICAgIHJlc3VsdCA9IHt9O1xuXG4gICAgZm9yIChjb25zdCBrIG9mIG9yZGVyZWRVbml0cyQxKSB7XG4gICAgICBpZiAoaGFzT3duUHJvcGVydHkoZHVyLnZhbHVlcywgaykgfHwgaGFzT3duUHJvcGVydHkodGhpcy52YWx1ZXMsIGspKSB7XG4gICAgICAgIHJlc3VsdFtrXSA9IGR1ci5nZXQoaykgKyB0aGlzLmdldChrKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gY2xvbmUkMSh0aGlzLCB7IHZhbHVlczogcmVzdWx0IH0sIHRydWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIE1ha2UgdGhpcyBEdXJhdGlvbiBzaG9ydGVyIGJ5IHRoZSBzcGVjaWZpZWQgYW1vdW50LiBSZXR1cm4gYSBuZXdseS1jb25zdHJ1Y3RlZCBEdXJhdGlvbi5cbiAgICogQHBhcmFtIHtEdXJhdGlvbnxPYmplY3R8bnVtYmVyfSBkdXJhdGlvbiAtIFRoZSBhbW91bnQgdG8gc3VidHJhY3QuIEVpdGhlciBhIEx1eG9uIER1cmF0aW9uLCBhIG51bWJlciBvZiBtaWxsaXNlY29uZHMsIHRoZSBvYmplY3QgYXJndW1lbnQgdG8gRHVyYXRpb24uZnJvbU9iamVjdCgpXG4gICAqIEByZXR1cm4ge0R1cmF0aW9ufVxuICAgKi9cbiAgbWludXMoZHVyYXRpb24pIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIHRoaXM7XG5cbiAgICBjb25zdCBkdXIgPSBEdXJhdGlvbi5mcm9tRHVyYXRpb25MaWtlKGR1cmF0aW9uKTtcbiAgICByZXR1cm4gdGhpcy5wbHVzKGR1ci5uZWdhdGUoKSk7XG4gIH1cblxuICAvKipcbiAgICogU2NhbGUgdGhpcyBEdXJhdGlvbiBieSB0aGUgc3BlY2lmaWVkIGFtb3VudC4gUmV0dXJuIGEgbmV3bHktY29uc3RydWN0ZWQgRHVyYXRpb24uXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuIC0gVGhlIGZ1bmN0aW9uIHRvIGFwcGx5IHRvIGVhY2ggdW5pdC4gQXJpdHkgaXMgMSBvciAyOiB0aGUgdmFsdWUgb2YgdGhlIHVuaXQgYW5kLCBvcHRpb25hbGx5LCB0aGUgdW5pdCBuYW1lLiBNdXN0IHJldHVybiBhIG51bWJlci5cbiAgICogQGV4YW1wbGUgRHVyYXRpb24uZnJvbU9iamVjdCh7IGhvdXJzOiAxLCBtaW51dGVzOiAzMCB9KS5tYXBVbml0cyh4ID0+IHggKiAyKSAvLz0+IHsgaG91cnM6IDIsIG1pbnV0ZXM6IDYwIH1cbiAgICogQGV4YW1wbGUgRHVyYXRpb24uZnJvbU9iamVjdCh7IGhvdXJzOiAxLCBtaW51dGVzOiAzMCB9KS5tYXBVbml0cygoeCwgdSkgPT4gdSA9PT0gXCJob3Vyc1wiID8geCAqIDIgOiB4KSAvLz0+IHsgaG91cnM6IDIsIG1pbnV0ZXM6IDMwIH1cbiAgICogQHJldHVybiB7RHVyYXRpb259XG4gICAqL1xuICBtYXBVbml0cyhmbikge1xuICAgIGlmICghdGhpcy5pc1ZhbGlkKSByZXR1cm4gdGhpcztcbiAgICBjb25zdCByZXN1bHQgPSB7fTtcbiAgICBmb3IgKGNvbnN0IGsgb2YgT2JqZWN0LmtleXModGhpcy52YWx1ZXMpKSB7XG4gICAgICByZXN1bHRba10gPSBhc051bWJlcihmbih0aGlzLnZhbHVlc1trXSwgaykpO1xuICAgIH1cbiAgICByZXR1cm4gY2xvbmUkMSh0aGlzLCB7IHZhbHVlczogcmVzdWx0IH0sIHRydWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgdmFsdWUgb2YgdW5pdC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHVuaXQgLSBhIHVuaXQgc3VjaCBhcyAnbWludXRlJyBvciAnZGF5J1xuICAgKiBAZXhhbXBsZSBEdXJhdGlvbi5mcm9tT2JqZWN0KHt5ZWFyczogMiwgZGF5czogM30pLmdldCgneWVhcnMnKSAvLz0+IDJcbiAgICogQGV4YW1wbGUgRHVyYXRpb24uZnJvbU9iamVjdCh7eWVhcnM6IDIsIGRheXM6IDN9KS5nZXQoJ21vbnRocycpIC8vPT4gMFxuICAgKiBAZXhhbXBsZSBEdXJhdGlvbi5mcm9tT2JqZWN0KHt5ZWFyczogMiwgZGF5czogM30pLmdldCgnZGF5cycpIC8vPT4gM1xuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqL1xuICBnZXQodW5pdCkge1xuICAgIHJldHVybiB0aGlzW0R1cmF0aW9uLm5vcm1hbGl6ZVVuaXQodW5pdCldO1xuICB9XG5cbiAgLyoqXG4gICAqIFwiU2V0XCIgdGhlIHZhbHVlcyBvZiBzcGVjaWZpZWQgdW5pdHMuIFJldHVybiBhIG5ld2x5LWNvbnN0cnVjdGVkIER1cmF0aW9uLlxuICAgKiBAcGFyYW0ge09iamVjdH0gdmFsdWVzIC0gYSBtYXBwaW5nIG9mIHVuaXRzIHRvIG51bWJlcnNcbiAgICogQGV4YW1wbGUgZHVyLnNldCh7IHllYXJzOiAyMDE3IH0pXG4gICAqIEBleGFtcGxlIGR1ci5zZXQoeyBob3VyczogOCwgbWludXRlczogMzAgfSlcbiAgICogQHJldHVybiB7RHVyYXRpb259XG4gICAqL1xuICBzZXQodmFsdWVzKSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHJldHVybiB0aGlzO1xuXG4gICAgY29uc3QgbWl4ZWQgPSB7IC4uLnRoaXMudmFsdWVzLCAuLi5ub3JtYWxpemVPYmplY3QodmFsdWVzLCBEdXJhdGlvbi5ub3JtYWxpemVVbml0KSB9O1xuICAgIHJldHVybiBjbG9uZSQxKHRoaXMsIHsgdmFsdWVzOiBtaXhlZCB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBcIlNldFwiIHRoZSBsb2NhbGUgYW5kL29yIG51bWJlcmluZ1N5c3RlbS4gIFJldHVybnMgYSBuZXdseS1jb25zdHJ1Y3RlZCBEdXJhdGlvbi5cbiAgICogQGV4YW1wbGUgZHVyLnJlY29uZmlndXJlKHsgbG9jYWxlOiAnZW4tR0InIH0pXG4gICAqIEByZXR1cm4ge0R1cmF0aW9ufVxuICAgKi9cbiAgcmVjb25maWd1cmUoeyBsb2NhbGUsIG51bWJlcmluZ1N5c3RlbSwgY29udmVyc2lvbkFjY3VyYWN5LCBtYXRyaXggfSA9IHt9KSB7XG4gICAgY29uc3QgbG9jID0gdGhpcy5sb2MuY2xvbmUoeyBsb2NhbGUsIG51bWJlcmluZ1N5c3RlbSB9KTtcbiAgICBjb25zdCBvcHRzID0geyBsb2MsIG1hdHJpeCwgY29udmVyc2lvbkFjY3VyYWN5IH07XG4gICAgcmV0dXJuIGNsb25lJDEodGhpcywgb3B0cyk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIHRoZSBsZW5ndGggb2YgdGhlIGR1cmF0aW9uIGluIHRoZSBzcGVjaWZpZWQgdW5pdC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHVuaXQgLSBhIHVuaXQgc3VjaCBhcyAnbWludXRlcycgb3IgJ2RheXMnXG4gICAqIEBleGFtcGxlIER1cmF0aW9uLmZyb21PYmplY3Qoe3llYXJzOiAxfSkuYXMoJ2RheXMnKSAvLz0+IDM2NVxuICAgKiBAZXhhbXBsZSBEdXJhdGlvbi5mcm9tT2JqZWN0KHt5ZWFyczogMX0pLmFzKCdtb250aHMnKSAvLz0+IDEyXG4gICAqIEBleGFtcGxlIER1cmF0aW9uLmZyb21PYmplY3Qoe2hvdXJzOiA2MH0pLmFzKCdkYXlzJykgLy89PiAyLjVcbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgYXModW5pdCkge1xuICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyB0aGlzLnNoaWZ0VG8odW5pdCkuZ2V0KHVuaXQpIDogTmFOO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlZHVjZSB0aGlzIER1cmF0aW9uIHRvIGl0cyBjYW5vbmljYWwgcmVwcmVzZW50YXRpb24gaW4gaXRzIGN1cnJlbnQgdW5pdHMuXG4gICAqIEBleGFtcGxlIER1cmF0aW9uLmZyb21PYmplY3QoeyB5ZWFyczogMiwgZGF5czogNTAwMCB9KS5ub3JtYWxpemUoKS50b09iamVjdCgpIC8vPT4geyB5ZWFyczogMTUsIGRheXM6IDI1NSB9XG4gICAqIEBleGFtcGxlIER1cmF0aW9uLmZyb21PYmplY3QoeyBob3VyczogMTIsIG1pbnV0ZXM6IC00NSB9KS5ub3JtYWxpemUoKS50b09iamVjdCgpIC8vPT4geyBob3VyczogMTEsIG1pbnV0ZXM6IDE1IH1cbiAgICogQHJldHVybiB7RHVyYXRpb259XG4gICAqL1xuICBub3JtYWxpemUoKSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHJldHVybiB0aGlzO1xuICAgIGNvbnN0IHZhbHMgPSB0aGlzLnRvT2JqZWN0KCk7XG4gICAgbm9ybWFsaXplVmFsdWVzKHRoaXMubWF0cml4LCB2YWxzKTtcbiAgICByZXR1cm4gY2xvbmUkMSh0aGlzLCB7IHZhbHVlczogdmFscyB9LCB0cnVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXNjYWxlIHVuaXRzIHRvIGl0cyBsYXJnZXN0IHJlcHJlc2VudGF0aW9uXG4gICAqIEBleGFtcGxlIER1cmF0aW9uLmZyb21PYmplY3QoeyBtaWxsaXNlY29uZHM6IDkwMDAwIH0pLnJlc2NhbGUoKS50b09iamVjdCgpIC8vPT4geyBtaW51dGVzOiAxLCBzZWNvbmRzOiAzMCB9XG4gICAqIEByZXR1cm4ge0R1cmF0aW9ufVxuICAgKi9cbiAgcmVzY2FsZSgpIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIHRoaXM7XG4gICAgY29uc3QgdmFscyA9IHJlbW92ZVplcm9lcyh0aGlzLm5vcm1hbGl6ZSgpLnNoaWZ0VG9BbGwoKS50b09iamVjdCgpKTtcbiAgICByZXR1cm4gY2xvbmUkMSh0aGlzLCB7IHZhbHVlczogdmFscyB9LCB0cnVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZXJ0IHRoaXMgRHVyYXRpb24gaW50byBpdHMgcmVwcmVzZW50YXRpb24gaW4gYSBkaWZmZXJlbnQgc2V0IG9mIHVuaXRzLlxuICAgKiBAZXhhbXBsZSBEdXJhdGlvbi5mcm9tT2JqZWN0KHsgaG91cnM6IDEsIHNlY29uZHM6IDMwIH0pLnNoaWZ0VG8oJ21pbnV0ZXMnLCAnbWlsbGlzZWNvbmRzJykudG9PYmplY3QoKSAvLz0+IHsgbWludXRlczogNjAsIG1pbGxpc2Vjb25kczogMzAwMDAgfVxuICAgKiBAcmV0dXJuIHtEdXJhdGlvbn1cbiAgICovXG4gIHNoaWZ0VG8oLi4udW5pdHMpIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIHRoaXM7XG5cbiAgICBpZiAodW5pdHMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICB1bml0cyA9IHVuaXRzLm1hcCgodSkgPT4gRHVyYXRpb24ubm9ybWFsaXplVW5pdCh1KSk7XG5cbiAgICBjb25zdCBidWlsdCA9IHt9LFxuICAgICAgYWNjdW11bGF0ZWQgPSB7fSxcbiAgICAgIHZhbHMgPSB0aGlzLnRvT2JqZWN0KCk7XG4gICAgbGV0IGxhc3RVbml0O1xuXG4gICAgZm9yIChjb25zdCBrIG9mIG9yZGVyZWRVbml0cyQxKSB7XG4gICAgICBpZiAodW5pdHMuaW5kZXhPZihrKSA+PSAwKSB7XG4gICAgICAgIGxhc3RVbml0ID0gaztcblxuICAgICAgICBsZXQgb3duID0gMDtcblxuICAgICAgICAvLyBhbnl0aGluZyB3ZSBoYXZlbid0IGJvaWxlZCBkb3duIHlldCBzaG91bGQgZ2V0IGJvaWxlZCB0byB0aGlzIHVuaXRcbiAgICAgICAgZm9yIChjb25zdCBhayBpbiBhY2N1bXVsYXRlZCkge1xuICAgICAgICAgIG93biArPSB0aGlzLm1hdHJpeFtha11ba10gKiBhY2N1bXVsYXRlZFtha107XG4gICAgICAgICAgYWNjdW11bGF0ZWRbYWtdID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHBsdXMgYW55dGhpbmcgdGhhdCdzIGFscmVhZHkgaW4gdGhpcyB1bml0XG4gICAgICAgIGlmIChpc051bWJlcih2YWxzW2tdKSkge1xuICAgICAgICAgIG93biArPSB2YWxzW2tdO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgaSA9IE1hdGgudHJ1bmMob3duKTtcbiAgICAgICAgYnVpbHRba10gPSBpO1xuICAgICAgICBhY2N1bXVsYXRlZFtrXSA9IChvd24gKiAxMDAwIC0gaSAqIDEwMDApIC8gMTAwMDtcblxuICAgICAgICAvLyBwbHVzIGFueXRoaW5nIGZ1cnRoZXIgZG93biB0aGUgY2hhaW4gdGhhdCBzaG91bGQgYmUgcm9sbGVkIHVwIGluIHRvIHRoaXNcbiAgICAgICAgZm9yIChjb25zdCBkb3duIGluIHZhbHMpIHtcbiAgICAgICAgICBpZiAob3JkZXJlZFVuaXRzJDEuaW5kZXhPZihkb3duKSA+IG9yZGVyZWRVbml0cyQxLmluZGV4T2YoaykpIHtcbiAgICAgICAgICAgIGNvbnZlcnQodGhpcy5tYXRyaXgsIHZhbHMsIGRvd24sIGJ1aWx0LCBrKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gb3RoZXJ3aXNlLCBrZWVwIGl0IGluIHRoZSB3aW5ncyB0byBib2lsIGl0IGxhdGVyXG4gICAgICB9IGVsc2UgaWYgKGlzTnVtYmVyKHZhbHNba10pKSB7XG4gICAgICAgIGFjY3VtdWxhdGVkW2tdID0gdmFsc1trXTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBhbnl0aGluZyBsZWZ0b3ZlciBiZWNvbWVzIHRoZSBkZWNpbWFsIGZvciB0aGUgbGFzdCB1bml0XG4gICAgLy8gbGFzdFVuaXQgbXVzdCBiZSBkZWZpbmVkIHNpbmNlIHVuaXRzIGlzIG5vdCBlbXB0eVxuICAgIGZvciAoY29uc3Qga2V5IGluIGFjY3VtdWxhdGVkKSB7XG4gICAgICBpZiAoYWNjdW11bGF0ZWRba2V5XSAhPT0gMCkge1xuICAgICAgICBidWlsdFtsYXN0VW5pdF0gKz1cbiAgICAgICAgICBrZXkgPT09IGxhc3RVbml0ID8gYWNjdW11bGF0ZWRba2V5XSA6IGFjY3VtdWxhdGVkW2tleV0gLyB0aGlzLm1hdHJpeFtsYXN0VW5pdF1ba2V5XTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gY2xvbmUkMSh0aGlzLCB7IHZhbHVlczogYnVpbHQgfSwgdHJ1ZSkubm9ybWFsaXplKCk7XG4gIH1cblxuICAvKipcbiAgICogU2hpZnQgdGhpcyBEdXJhdGlvbiB0byBhbGwgYXZhaWxhYmxlIHVuaXRzLlxuICAgKiBTYW1lIGFzIHNoaWZ0VG8oXCJ5ZWFyc1wiLCBcIm1vbnRoc1wiLCBcIndlZWtzXCIsIFwiZGF5c1wiLCBcImhvdXJzXCIsIFwibWludXRlc1wiLCBcInNlY29uZHNcIiwgXCJtaWxsaXNlY29uZHNcIilcbiAgICogQHJldHVybiB7RHVyYXRpb259XG4gICAqL1xuICBzaGlmdFRvQWxsKCkge1xuICAgIGlmICghdGhpcy5pc1ZhbGlkKSByZXR1cm4gdGhpcztcbiAgICByZXR1cm4gdGhpcy5zaGlmdFRvKFxuICAgICAgXCJ5ZWFyc1wiLFxuICAgICAgXCJtb250aHNcIixcbiAgICAgIFwid2Vla3NcIixcbiAgICAgIFwiZGF5c1wiLFxuICAgICAgXCJob3Vyc1wiLFxuICAgICAgXCJtaW51dGVzXCIsXG4gICAgICBcInNlY29uZHNcIixcbiAgICAgIFwibWlsbGlzZWNvbmRzXCJcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiB0aGUgbmVnYXRpdmUgb2YgdGhpcyBEdXJhdGlvbi5cbiAgICogQGV4YW1wbGUgRHVyYXRpb24uZnJvbU9iamVjdCh7IGhvdXJzOiAxLCBzZWNvbmRzOiAzMCB9KS5uZWdhdGUoKS50b09iamVjdCgpIC8vPT4geyBob3VyczogLTEsIHNlY29uZHM6IC0zMCB9XG4gICAqIEByZXR1cm4ge0R1cmF0aW9ufVxuICAgKi9cbiAgbmVnYXRlKCkge1xuICAgIGlmICghdGhpcy5pc1ZhbGlkKSByZXR1cm4gdGhpcztcbiAgICBjb25zdCBuZWdhdGVkID0ge307XG4gICAgZm9yIChjb25zdCBrIG9mIE9iamVjdC5rZXlzKHRoaXMudmFsdWVzKSkge1xuICAgICAgbmVnYXRlZFtrXSA9IHRoaXMudmFsdWVzW2tdID09PSAwID8gMCA6IC10aGlzLnZhbHVlc1trXTtcbiAgICB9XG4gICAgcmV0dXJuIGNsb25lJDEodGhpcywgeyB2YWx1ZXM6IG5lZ2F0ZWQgfSwgdHJ1ZSk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSB5ZWFycy5cbiAgICogQHR5cGUge251bWJlcn1cbiAgICovXG4gIGdldCB5ZWFycygpIHtcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gdGhpcy52YWx1ZXMueWVhcnMgfHwgMCA6IE5hTjtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIHF1YXJ0ZXJzLlxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKi9cbiAgZ2V0IHF1YXJ0ZXJzKCkge1xuICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyB0aGlzLnZhbHVlcy5xdWFydGVycyB8fCAwIDogTmFOO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgbW9udGhzLlxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKi9cbiAgZ2V0IG1vbnRocygpIHtcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gdGhpcy52YWx1ZXMubW9udGhzIHx8IDAgOiBOYU47XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSB3ZWVrc1xuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKi9cbiAgZ2V0IHdlZWtzKCkge1xuICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyB0aGlzLnZhbHVlcy53ZWVrcyB8fCAwIDogTmFOO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgZGF5cy5cbiAgICogQHR5cGUge251bWJlcn1cbiAgICovXG4gIGdldCBkYXlzKCkge1xuICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyB0aGlzLnZhbHVlcy5kYXlzIHx8IDAgOiBOYU47XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBob3Vycy5cbiAgICogQHR5cGUge251bWJlcn1cbiAgICovXG4gIGdldCBob3VycygpIHtcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gdGhpcy52YWx1ZXMuaG91cnMgfHwgMCA6IE5hTjtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIG1pbnV0ZXMuXG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqL1xuICBnZXQgbWludXRlcygpIHtcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gdGhpcy52YWx1ZXMubWludXRlcyB8fCAwIDogTmFOO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgc2Vjb25kcy5cbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgZ2V0IHNlY29uZHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHRoaXMudmFsdWVzLnNlY29uZHMgfHwgMCA6IE5hTjtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIG1pbGxpc2Vjb25kcy5cbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgZ2V0IG1pbGxpc2Vjb25kcygpIHtcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gdGhpcy52YWx1ZXMubWlsbGlzZWNvbmRzIHx8IDAgOiBOYU47XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB3aGV0aGVyIHRoZSBEdXJhdGlvbiBpcyBpbnZhbGlkLiBJbnZhbGlkIGR1cmF0aW9ucyBhcmUgcmV0dXJuZWQgYnkgZGlmZiBvcGVyYXRpb25zXG4gICAqIG9uIGludmFsaWQgRGF0ZVRpbWVzIG9yIEludGVydmFscy5cbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIGdldCBpc1ZhbGlkKCkge1xuICAgIHJldHVybiB0aGlzLmludmFsaWQgPT09IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbiBlcnJvciBjb2RlIGlmIHRoaXMgRHVyYXRpb24gYmVjYW1lIGludmFsaWQsIG9yIG51bGwgaWYgdGhlIER1cmF0aW9uIGlzIHZhbGlkXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIGdldCBpbnZhbGlkUmVhc29uKCkge1xuICAgIHJldHVybiB0aGlzLmludmFsaWQgPyB0aGlzLmludmFsaWQucmVhc29uIDogbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIGV4cGxhbmF0aW9uIG9mIHdoeSB0aGlzIER1cmF0aW9uIGJlY2FtZSBpbnZhbGlkLCBvciBudWxsIGlmIHRoZSBEdXJhdGlvbiBpcyB2YWxpZFxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgZ2V0IGludmFsaWRFeHBsYW5hdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5pbnZhbGlkID8gdGhpcy5pbnZhbGlkLmV4cGxhbmF0aW9uIDogbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBFcXVhbGl0eSBjaGVja1xuICAgKiBUd28gRHVyYXRpb25zIGFyZSBlcXVhbCBpZmYgdGhleSBoYXZlIHRoZSBzYW1lIHVuaXRzIGFuZCB0aGUgc2FtZSB2YWx1ZXMgZm9yIGVhY2ggdW5pdC5cbiAgICogQHBhcmFtIHtEdXJhdGlvbn0gb3RoZXJcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIGVxdWFscyhvdGhlcikge1xuICAgIGlmICghdGhpcy5pc1ZhbGlkIHx8ICFvdGhlci5pc1ZhbGlkKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLmxvYy5lcXVhbHMob3RoZXIubG9jKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGVxKHYxLCB2Mikge1xuICAgICAgLy8gQ29uc2lkZXIgMCBhbmQgdW5kZWZpbmVkIGFzIGVxdWFsXG4gICAgICBpZiAodjEgPT09IHVuZGVmaW5lZCB8fCB2MSA9PT0gMCkgcmV0dXJuIHYyID09PSB1bmRlZmluZWQgfHwgdjIgPT09IDA7XG4gICAgICByZXR1cm4gdjEgPT09IHYyO1xuICAgIH1cblxuICAgIGZvciAoY29uc3QgdSBvZiBvcmRlcmVkVW5pdHMkMSkge1xuICAgICAgaWYgKCFlcSh0aGlzLnZhbHVlc1t1XSwgb3RoZXIudmFsdWVzW3VdKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG59XG5cbmNvbnN0IElOVkFMSUQkMSA9IFwiSW52YWxpZCBJbnRlcnZhbFwiO1xuXG4vLyBjaGVja3MgaWYgdGhlIHN0YXJ0IGlzIGVxdWFsIHRvIG9yIGJlZm9yZSB0aGUgZW5kXG5mdW5jdGlvbiB2YWxpZGF0ZVN0YXJ0RW5kKHN0YXJ0LCBlbmQpIHtcbiAgaWYgKCFzdGFydCB8fCAhc3RhcnQuaXNWYWxpZCkge1xuICAgIHJldHVybiBJbnRlcnZhbC5pbnZhbGlkKFwibWlzc2luZyBvciBpbnZhbGlkIHN0YXJ0XCIpO1xuICB9IGVsc2UgaWYgKCFlbmQgfHwgIWVuZC5pc1ZhbGlkKSB7XG4gICAgcmV0dXJuIEludGVydmFsLmludmFsaWQoXCJtaXNzaW5nIG9yIGludmFsaWQgZW5kXCIpO1xuICB9IGVsc2UgaWYgKGVuZCA8IHN0YXJ0KSB7XG4gICAgcmV0dXJuIEludGVydmFsLmludmFsaWQoXG4gICAgICBcImVuZCBiZWZvcmUgc3RhcnRcIixcbiAgICAgIGBUaGUgZW5kIG9mIGFuIGludGVydmFsIG11c3QgYmUgYWZ0ZXIgaXRzIHN0YXJ0LCBidXQgeW91IGhhZCBzdGFydD0ke3N0YXJ0LnRvSVNPKCl9IGFuZCBlbmQ9JHtlbmQudG9JU08oKX1gXG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG4vKipcbiAqIEFuIEludGVydmFsIG9iamVjdCByZXByZXNlbnRzIGEgaGFsZi1vcGVuIGludGVydmFsIG9mIHRpbWUsIHdoZXJlIGVhY2ggZW5kcG9pbnQgaXMgYSB7QGxpbmsgRGF0ZVRpbWV9LiBDb25jZXB0dWFsbHksIGl0J3MgYSBjb250YWluZXIgZm9yIHRob3NlIHR3byBlbmRwb2ludHMsIGFjY29tcGFuaWVkIGJ5IG1ldGhvZHMgZm9yIGNyZWF0aW5nLCBwYXJzaW5nLCBpbnRlcnJvZ2F0aW5nLCBjb21wYXJpbmcsIHRyYW5zZm9ybWluZywgYW5kIGZvcm1hdHRpbmcgdGhlbS5cbiAqXG4gKiBIZXJlIGlzIGEgYnJpZWYgb3ZlcnZpZXcgb2YgdGhlIG1vc3QgY29tbW9ubHkgdXNlZCBtZXRob2RzIGFuZCBnZXR0ZXJzIGluIEludGVydmFsOlxuICpcbiAqICogKipDcmVhdGlvbioqIFRvIGNyZWF0ZSBhbiBJbnRlcnZhbCwgdXNlIHtAbGluayBJbnRlcnZhbC5mcm9tRGF0ZVRpbWVzfSwge0BsaW5rIEludGVydmFsLmFmdGVyfSwge0BsaW5rIEludGVydmFsLmJlZm9yZX0sIG9yIHtAbGluayBJbnRlcnZhbC5mcm9tSVNPfS5cbiAqICogKipBY2Nlc3NvcnMqKiBVc2Uge0BsaW5rIEludGVydmFsI3N0YXJ0fSBhbmQge0BsaW5rIEludGVydmFsI2VuZH0gdG8gZ2V0IHRoZSBzdGFydCBhbmQgZW5kLlxuICogKiAqKkludGVycm9nYXRpb24qKiBUbyBhbmFseXplIHRoZSBJbnRlcnZhbCwgdXNlIHtAbGluayBJbnRlcnZhbCNjb3VudH0sIHtAbGluayBJbnRlcnZhbCNsZW5ndGh9LCB7QGxpbmsgSW50ZXJ2YWwjaGFzU2FtZX0sIHtAbGluayBJbnRlcnZhbCNjb250YWluc30sIHtAbGluayBJbnRlcnZhbCNpc0FmdGVyfSwgb3Ige0BsaW5rIEludGVydmFsI2lzQmVmb3JlfS5cbiAqICogKipUcmFuc2Zvcm1hdGlvbioqIFRvIGNyZWF0ZSBvdGhlciBJbnRlcnZhbHMgb3V0IG9mIHRoaXMgb25lLCB1c2Uge0BsaW5rIEludGVydmFsI3NldH0sIHtAbGluayBJbnRlcnZhbCNzcGxpdEF0fSwge0BsaW5rIEludGVydmFsI3NwbGl0Qnl9LCB7QGxpbmsgSW50ZXJ2YWwjZGl2aWRlRXF1YWxseX0sIHtAbGluayBJbnRlcnZhbC5tZXJnZX0sIHtAbGluayBJbnRlcnZhbC54b3J9LCB7QGxpbmsgSW50ZXJ2YWwjdW5pb259LCB7QGxpbmsgSW50ZXJ2YWwjaW50ZXJzZWN0aW9ufSwgb3Ige0BsaW5rIEludGVydmFsI2RpZmZlcmVuY2V9LlxuICogKiAqKkNvbXBhcmlzb24qKiBUbyBjb21wYXJlIHRoaXMgSW50ZXJ2YWwgdG8gYW5vdGhlciBvbmUsIHVzZSB7QGxpbmsgSW50ZXJ2YWwjZXF1YWxzfSwge0BsaW5rIEludGVydmFsI292ZXJsYXBzfSwge0BsaW5rIEludGVydmFsI2FidXRzU3RhcnR9LCB7QGxpbmsgSW50ZXJ2YWwjYWJ1dHNFbmR9LCB7QGxpbmsgSW50ZXJ2YWwjZW5ndWxmc31cbiAqICogKipPdXRwdXQqKiBUbyBjb252ZXJ0IHRoZSBJbnRlcnZhbCBpbnRvIG90aGVyIHJlcHJlc2VudGF0aW9ucywgc2VlIHtAbGluayBJbnRlcnZhbCN0b1N0cmluZ30sIHtAbGluayBJbnRlcnZhbCN0b0xvY2FsZVN0cmluZ30sIHtAbGluayBJbnRlcnZhbCN0b0lTT30sIHtAbGluayBJbnRlcnZhbCN0b0lTT0RhdGV9LCB7QGxpbmsgSW50ZXJ2YWwjdG9JU09UaW1lfSwge0BsaW5rIEludGVydmFsI3RvRm9ybWF0fSwgYW5kIHtAbGluayBJbnRlcnZhbCN0b0R1cmF0aW9ufS5cbiAqL1xuY2xhc3MgSW50ZXJ2YWwge1xuICAvKipcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgIC8qKlxuICAgICAqIEBhY2Nlc3MgcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMucyA9IGNvbmZpZy5zdGFydDtcbiAgICAvKipcbiAgICAgKiBAYWNjZXNzIHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLmUgPSBjb25maWcuZW5kO1xuICAgIC8qKlxuICAgICAqIEBhY2Nlc3MgcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuaW52YWxpZCA9IGNvbmZpZy5pbnZhbGlkIHx8IG51bGw7XG4gICAgLyoqXG4gICAgICogQGFjY2VzcyBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5pc0x1eG9uSW50ZXJ2YWwgPSB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhbiBpbnZhbGlkIEludGVydmFsLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gcmVhc29uIC0gc2ltcGxlIHN0cmluZyBvZiB3aHkgdGhpcyBJbnRlcnZhbCBpcyBpbnZhbGlkLiBTaG91bGQgbm90IGNvbnRhaW4gcGFyYW1ldGVycyBvciBhbnl0aGluZyBlbHNlIGRhdGEtZGVwZW5kZW50XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbZXhwbGFuYXRpb249bnVsbF0gLSBsb25nZXIgZXhwbGFuYXRpb24sIG1heSBpbmNsdWRlIHBhcmFtZXRlcnMgYW5kIG90aGVyIHVzZWZ1bCBkZWJ1Z2dpbmcgaW5mb3JtYXRpb25cbiAgICogQHJldHVybiB7SW50ZXJ2YWx9XG4gICAqL1xuICBzdGF0aWMgaW52YWxpZChyZWFzb24sIGV4cGxhbmF0aW9uID0gbnVsbCkge1xuICAgIGlmICghcmVhc29uKSB7XG4gICAgICB0aHJvdyBuZXcgSW52YWxpZEFyZ3VtZW50RXJyb3IoXCJuZWVkIHRvIHNwZWNpZnkgYSByZWFzb24gdGhlIEludGVydmFsIGlzIGludmFsaWRcIik7XG4gICAgfVxuXG4gICAgY29uc3QgaW52YWxpZCA9IHJlYXNvbiBpbnN0YW5jZW9mIEludmFsaWQgPyByZWFzb24gOiBuZXcgSW52YWxpZChyZWFzb24sIGV4cGxhbmF0aW9uKTtcblxuICAgIGlmIChTZXR0aW5ncy50aHJvd09uSW52YWxpZCkge1xuICAgICAgdGhyb3cgbmV3IEludmFsaWRJbnRlcnZhbEVycm9yKGludmFsaWQpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbmV3IEludGVydmFsKHsgaW52YWxpZCB9KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGFuIEludGVydmFsIGZyb20gYSBzdGFydCBEYXRlVGltZSBhbmQgYW4gZW5kIERhdGVUaW1lLiBJbmNsdXNpdmUgb2YgdGhlIHN0YXJ0IGJ1dCBub3QgdGhlIGVuZC5cbiAgICogQHBhcmFtIHtEYXRlVGltZXxEYXRlfE9iamVjdH0gc3RhcnRcbiAgICogQHBhcmFtIHtEYXRlVGltZXxEYXRlfE9iamVjdH0gZW5kXG4gICAqIEByZXR1cm4ge0ludGVydmFsfVxuICAgKi9cbiAgc3RhdGljIGZyb21EYXRlVGltZXMoc3RhcnQsIGVuZCkge1xuICAgIGNvbnN0IGJ1aWx0U3RhcnQgPSBmcmllbmRseURhdGVUaW1lKHN0YXJ0KSxcbiAgICAgIGJ1aWx0RW5kID0gZnJpZW5kbHlEYXRlVGltZShlbmQpO1xuXG4gICAgY29uc3QgdmFsaWRhdGVFcnJvciA9IHZhbGlkYXRlU3RhcnRFbmQoYnVpbHRTdGFydCwgYnVpbHRFbmQpO1xuXG4gICAgaWYgKHZhbGlkYXRlRXJyb3IgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIG5ldyBJbnRlcnZhbCh7XG4gICAgICAgIHN0YXJ0OiBidWlsdFN0YXJ0LFxuICAgICAgICBlbmQ6IGJ1aWx0RW5kLFxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB2YWxpZGF0ZUVycm9yO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYW4gSW50ZXJ2YWwgZnJvbSBhIHN0YXJ0IERhdGVUaW1lIGFuZCBhIER1cmF0aW9uIHRvIGV4dGVuZCB0by5cbiAgICogQHBhcmFtIHtEYXRlVGltZXxEYXRlfE9iamVjdH0gc3RhcnRcbiAgICogQHBhcmFtIHtEdXJhdGlvbnxPYmplY3R8bnVtYmVyfSBkdXJhdGlvbiAtIHRoZSBsZW5ndGggb2YgdGhlIEludGVydmFsLlxuICAgKiBAcmV0dXJuIHtJbnRlcnZhbH1cbiAgICovXG4gIHN0YXRpYyBhZnRlcihzdGFydCwgZHVyYXRpb24pIHtcbiAgICBjb25zdCBkdXIgPSBEdXJhdGlvbi5mcm9tRHVyYXRpb25MaWtlKGR1cmF0aW9uKSxcbiAgICAgIGR0ID0gZnJpZW5kbHlEYXRlVGltZShzdGFydCk7XG4gICAgcmV0dXJuIEludGVydmFsLmZyb21EYXRlVGltZXMoZHQsIGR0LnBsdXMoZHVyKSk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGFuIEludGVydmFsIGZyb20gYW4gZW5kIERhdGVUaW1lIGFuZCBhIER1cmF0aW9uIHRvIGV4dGVuZCBiYWNrd2FyZHMgdG8uXG4gICAqIEBwYXJhbSB7RGF0ZVRpbWV8RGF0ZXxPYmplY3R9IGVuZFxuICAgKiBAcGFyYW0ge0R1cmF0aW9ufE9iamVjdHxudW1iZXJ9IGR1cmF0aW9uIC0gdGhlIGxlbmd0aCBvZiB0aGUgSW50ZXJ2YWwuXG4gICAqIEByZXR1cm4ge0ludGVydmFsfVxuICAgKi9cbiAgc3RhdGljIGJlZm9yZShlbmQsIGR1cmF0aW9uKSB7XG4gICAgY29uc3QgZHVyID0gRHVyYXRpb24uZnJvbUR1cmF0aW9uTGlrZShkdXJhdGlvbiksXG4gICAgICBkdCA9IGZyaWVuZGx5RGF0ZVRpbWUoZW5kKTtcbiAgICByZXR1cm4gSW50ZXJ2YWwuZnJvbURhdGVUaW1lcyhkdC5taW51cyhkdXIpLCBkdCk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGFuIEludGVydmFsIGZyb20gYW4gSVNPIDg2MDEgc3RyaW5nLlxuICAgKiBBY2NlcHRzIGA8c3RhcnQ+LzxlbmQ+YCwgYDxzdGFydD4vPGR1cmF0aW9uPmAsIGFuZCBgPGR1cmF0aW9uPi88ZW5kPmAgZm9ybWF0cy5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHRleHQgLSB0aGUgSVNPIHN0cmluZyB0byBwYXJzZVxuICAgKiBAcGFyYW0ge09iamVjdH0gW29wdHNdIC0gb3B0aW9ucyB0byBwYXNzIHtAbGluayBEYXRlVGltZSNmcm9tSVNPfSBhbmQgb3B0aW9uYWxseSB7QGxpbmsgRHVyYXRpb24jZnJvbUlTT31cbiAgICogQHNlZSBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fODYwMSNUaW1lX2ludGVydmFsc1xuICAgKiBAcmV0dXJuIHtJbnRlcnZhbH1cbiAgICovXG4gIHN0YXRpYyBmcm9tSVNPKHRleHQsIG9wdHMpIHtcbiAgICBjb25zdCBbcywgZV0gPSAodGV4dCB8fCBcIlwiKS5zcGxpdChcIi9cIiwgMik7XG4gICAgaWYgKHMgJiYgZSkge1xuICAgICAgbGV0IHN0YXJ0LCBzdGFydElzVmFsaWQ7XG4gICAgICB0cnkge1xuICAgICAgICBzdGFydCA9IERhdGVUaW1lLmZyb21JU08ocywgb3B0cyk7XG4gICAgICAgIHN0YXJ0SXNWYWxpZCA9IHN0YXJ0LmlzVmFsaWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHN0YXJ0SXNWYWxpZCA9IGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBsZXQgZW5kLCBlbmRJc1ZhbGlkO1xuICAgICAgdHJ5IHtcbiAgICAgICAgZW5kID0gRGF0ZVRpbWUuZnJvbUlTTyhlLCBvcHRzKTtcbiAgICAgICAgZW5kSXNWYWxpZCA9IGVuZC5pc1ZhbGlkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBlbmRJc1ZhbGlkID0gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdGFydElzVmFsaWQgJiYgZW5kSXNWYWxpZCkge1xuICAgICAgICByZXR1cm4gSW50ZXJ2YWwuZnJvbURhdGVUaW1lcyhzdGFydCwgZW5kKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHN0YXJ0SXNWYWxpZCkge1xuICAgICAgICBjb25zdCBkdXIgPSBEdXJhdGlvbi5mcm9tSVNPKGUsIG9wdHMpO1xuICAgICAgICBpZiAoZHVyLmlzVmFsaWQpIHtcbiAgICAgICAgICByZXR1cm4gSW50ZXJ2YWwuYWZ0ZXIoc3RhcnQsIGR1cik7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoZW5kSXNWYWxpZCkge1xuICAgICAgICBjb25zdCBkdXIgPSBEdXJhdGlvbi5mcm9tSVNPKHMsIG9wdHMpO1xuICAgICAgICBpZiAoZHVyLmlzVmFsaWQpIHtcbiAgICAgICAgICByZXR1cm4gSW50ZXJ2YWwuYmVmb3JlKGVuZCwgZHVyKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gSW50ZXJ2YWwuaW52YWxpZChcInVucGFyc2FibGVcIiwgYHRoZSBpbnB1dCBcIiR7dGV4dH1cIiBjYW4ndCBiZSBwYXJzZWQgYXMgSVNPIDg2MDFgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBpZiBhbiBvYmplY3QgaXMgYW4gSW50ZXJ2YWwuIFdvcmtzIGFjcm9zcyBjb250ZXh0IGJvdW5kYXJpZXNcbiAgICogQHBhcmFtIHtvYmplY3R9IG9cbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIHN0YXRpYyBpc0ludGVydmFsKG8pIHtcbiAgICByZXR1cm4gKG8gJiYgby5pc0x1eG9uSW50ZXJ2YWwpIHx8IGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHN0YXJ0IG9mIHRoZSBJbnRlcnZhbFxuICAgKiBAdHlwZSB7RGF0ZVRpbWV9XG4gICAqL1xuICBnZXQgc3RhcnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHRoaXMucyA6IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgZW5kIG9mIHRoZSBJbnRlcnZhbFxuICAgKiBAdHlwZSB7RGF0ZVRpbWV9XG4gICAqL1xuICBnZXQgZW5kKCkge1xuICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyB0aGlzLmUgOiBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgd2hldGhlciB0aGlzIEludGVydmFsJ3MgZW5kIGlzIGF0IGxlYXN0IGl0cyBzdGFydCwgbWVhbmluZyB0aGF0IHRoZSBJbnRlcnZhbCBpc24ndCAnYmFja3dhcmRzJy5cbiAgICogQHR5cGUge2Jvb2xlYW59XG4gICAqL1xuICBnZXQgaXNWYWxpZCgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnZhbGlkUmVhc29uID09PSBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gZXJyb3IgY29kZSBpZiB0aGlzIEludGVydmFsIGlzIGludmFsaWQsIG9yIG51bGwgaWYgdGhlIEludGVydmFsIGlzIHZhbGlkXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICBnZXQgaW52YWxpZFJlYXNvbigpIHtcbiAgICByZXR1cm4gdGhpcy5pbnZhbGlkID8gdGhpcy5pbnZhbGlkLnJlYXNvbiA6IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbiBleHBsYW5hdGlvbiBvZiB3aHkgdGhpcyBJbnRlcnZhbCBiZWNhbWUgaW52YWxpZCwgb3IgbnVsbCBpZiB0aGUgSW50ZXJ2YWwgaXMgdmFsaWRcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIGdldCBpbnZhbGlkRXhwbGFuYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuaW52YWxpZCA/IHRoaXMuaW52YWxpZC5leHBsYW5hdGlvbiA6IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgbGVuZ3RoIG9mIHRoZSBJbnRlcnZhbCBpbiB0aGUgc3BlY2lmaWVkIHVuaXQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1bml0IC0gdGhlIHVuaXQgKHN1Y2ggYXMgJ2hvdXJzJyBvciAnZGF5cycpIHRvIHJldHVybiB0aGUgbGVuZ3RoIGluLlxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqL1xuICBsZW5ndGgodW5pdCA9IFwibWlsbGlzZWNvbmRzXCIpIHtcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gdGhpcy50b0R1cmF0aW9uKC4uLlt1bml0XSkuZ2V0KHVuaXQpIDogTmFOO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGNvdW50IG9mIG1pbnV0ZXMsIGhvdXJzLCBkYXlzLCBtb250aHMsIG9yIHllYXJzIGluY2x1ZGVkIGluIHRoZSBJbnRlcnZhbCwgZXZlbiBpbiBwYXJ0LlxuICAgKiBVbmxpa2Uge0BsaW5rIEludGVydmFsI2xlbmd0aH0gdGhpcyBjb3VudHMgc2VjdGlvbnMgb2YgdGhlIGNhbGVuZGFyLCBub3QgcGVyaW9kcyBvZiB0aW1lLCBlLmcuIHNwZWNpZnlpbmcgJ2RheSdcbiAgICogYXNrcyAnd2hhdCBkYXRlcyBhcmUgaW5jbHVkZWQgaW4gdGhpcyBpbnRlcnZhbD8nLCBub3QgJ2hvdyBtYW55IGRheXMgbG9uZyBpcyB0aGlzIGludGVydmFsPydcbiAgICogQHBhcmFtIHtzdHJpbmd9IFt1bml0PSdtaWxsaXNlY29uZHMnXSAtIHRoZSB1bml0IG9mIHRpbWUgdG8gY291bnQuXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIGNvdW50KHVuaXQgPSBcIm1pbGxpc2Vjb25kc1wiKSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHJldHVybiBOYU47XG4gICAgY29uc3Qgc3RhcnQgPSB0aGlzLnN0YXJ0LnN0YXJ0T2YodW5pdCksXG4gICAgICBlbmQgPSB0aGlzLmVuZC5zdGFydE9mKHVuaXQpO1xuICAgIHJldHVybiBNYXRoLmZsb29yKGVuZC5kaWZmKHN0YXJ0LCB1bml0KS5nZXQodW5pdCkpICsgMTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHdoZXRoZXIgdGhpcyBJbnRlcnZhbCdzIHN0YXJ0IGFuZCBlbmQgYXJlIGJvdGggaW4gdGhlIHNhbWUgdW5pdCBvZiB0aW1lXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1bml0IC0gdGhlIHVuaXQgb2YgdGltZSB0byBjaGVjayBzYW1lbmVzcyBvblxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgaGFzU2FtZSh1bml0KSB7XG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHRoaXMuaXNFbXB0eSgpIHx8IHRoaXMuZS5taW51cygxKS5oYXNTYW1lKHRoaXMucywgdW5pdCkgOiBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gd2hldGhlciB0aGlzIEludGVydmFsIGhhcyB0aGUgc2FtZSBzdGFydCBhbmQgZW5kIERhdGVUaW1lcy5cbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIGlzRW1wdHkoKSB7XG4gICAgcmV0dXJuIHRoaXMucy52YWx1ZU9mKCkgPT09IHRoaXMuZS52YWx1ZU9mKCk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIHdoZXRoZXIgdGhpcyBJbnRlcnZhbCdzIHN0YXJ0IGlzIGFmdGVyIHRoZSBzcGVjaWZpZWQgRGF0ZVRpbWUuXG4gICAqIEBwYXJhbSB7RGF0ZVRpbWV9IGRhdGVUaW1lXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBpc0FmdGVyKGRhdGVUaW1lKSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHJldHVybiBmYWxzZTtcbiAgICByZXR1cm4gdGhpcy5zID4gZGF0ZVRpbWU7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIHdoZXRoZXIgdGhpcyBJbnRlcnZhbCdzIGVuZCBpcyBiZWZvcmUgdGhlIHNwZWNpZmllZCBEYXRlVGltZS5cbiAgICogQHBhcmFtIHtEYXRlVGltZX0gZGF0ZVRpbWVcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIGlzQmVmb3JlKGRhdGVUaW1lKSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHJldHVybiBmYWxzZTtcbiAgICByZXR1cm4gdGhpcy5lIDw9IGRhdGVUaW1lO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiB3aGV0aGVyIHRoaXMgSW50ZXJ2YWwgY29udGFpbnMgdGhlIHNwZWNpZmllZCBEYXRlVGltZS5cbiAgICogQHBhcmFtIHtEYXRlVGltZX0gZGF0ZVRpbWVcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIGNvbnRhaW5zKGRhdGVUaW1lKSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHJldHVybiBmYWxzZTtcbiAgICByZXR1cm4gdGhpcy5zIDw9IGRhdGVUaW1lICYmIHRoaXMuZSA+IGRhdGVUaW1lO1xuICB9XG5cbiAgLyoqXG4gICAqIFwiU2V0c1wiIHRoZSBzdGFydCBhbmQvb3IgZW5kIGRhdGVzLiBSZXR1cm5zIGEgbmV3bHktY29uc3RydWN0ZWQgSW50ZXJ2YWwuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSB2YWx1ZXMgLSB0aGUgdmFsdWVzIHRvIHNldFxuICAgKiBAcGFyYW0ge0RhdGVUaW1lfSB2YWx1ZXMuc3RhcnQgLSB0aGUgc3RhcnRpbmcgRGF0ZVRpbWVcbiAgICogQHBhcmFtIHtEYXRlVGltZX0gdmFsdWVzLmVuZCAtIHRoZSBlbmRpbmcgRGF0ZVRpbWVcbiAgICogQHJldHVybiB7SW50ZXJ2YWx9XG4gICAqL1xuICBzZXQoeyBzdGFydCwgZW5kIH0gPSB7fSkge1xuICAgIGlmICghdGhpcy5pc1ZhbGlkKSByZXR1cm4gdGhpcztcbiAgICByZXR1cm4gSW50ZXJ2YWwuZnJvbURhdGVUaW1lcyhzdGFydCB8fCB0aGlzLnMsIGVuZCB8fCB0aGlzLmUpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNwbGl0IHRoaXMgSW50ZXJ2YWwgYXQgZWFjaCBvZiB0aGUgc3BlY2lmaWVkIERhdGVUaW1lc1xuICAgKiBAcGFyYW0gey4uLkRhdGVUaW1lfSBkYXRlVGltZXMgLSB0aGUgdW5pdCBvZiB0aW1lIHRvIGNvdW50LlxuICAgKiBAcmV0dXJuIHtBcnJheX1cbiAgICovXG4gIHNwbGl0QXQoLi4uZGF0ZVRpbWVzKSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHJldHVybiBbXTtcbiAgICBjb25zdCBzb3J0ZWQgPSBkYXRlVGltZXNcbiAgICAgICAgLm1hcChmcmllbmRseURhdGVUaW1lKVxuICAgICAgICAuZmlsdGVyKChkKSA9PiB0aGlzLmNvbnRhaW5zKGQpKVxuICAgICAgICAuc29ydCgpLFxuICAgICAgcmVzdWx0cyA9IFtdO1xuICAgIGxldCB7IHMgfSA9IHRoaXMsXG4gICAgICBpID0gMDtcblxuICAgIHdoaWxlIChzIDwgdGhpcy5lKSB7XG4gICAgICBjb25zdCBhZGRlZCA9IHNvcnRlZFtpXSB8fCB0aGlzLmUsXG4gICAgICAgIG5leHQgPSArYWRkZWQgPiArdGhpcy5lID8gdGhpcy5lIDogYWRkZWQ7XG4gICAgICByZXN1bHRzLnB1c2goSW50ZXJ2YWwuZnJvbURhdGVUaW1lcyhzLCBuZXh0KSk7XG4gICAgICBzID0gbmV4dDtcbiAgICAgIGkgKz0gMTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0cztcbiAgfVxuXG4gIC8qKlxuICAgKiBTcGxpdCB0aGlzIEludGVydmFsIGludG8gc21hbGxlciBJbnRlcnZhbHMsIGVhY2ggb2YgdGhlIHNwZWNpZmllZCBsZW5ndGguXG4gICAqIExlZnQgb3ZlciB0aW1lIGlzIGdyb3VwZWQgaW50byBhIHNtYWxsZXIgaW50ZXJ2YWxcbiAgICogQHBhcmFtIHtEdXJhdGlvbnxPYmplY3R8bnVtYmVyfSBkdXJhdGlvbiAtIFRoZSBsZW5ndGggb2YgZWFjaCByZXN1bHRpbmcgaW50ZXJ2YWwuXG4gICAqIEByZXR1cm4ge0FycmF5fVxuICAgKi9cbiAgc3BsaXRCeShkdXJhdGlvbikge1xuICAgIGNvbnN0IGR1ciA9IER1cmF0aW9uLmZyb21EdXJhdGlvbkxpa2UoZHVyYXRpb24pO1xuXG4gICAgaWYgKCF0aGlzLmlzVmFsaWQgfHwgIWR1ci5pc1ZhbGlkIHx8IGR1ci5hcyhcIm1pbGxpc2Vjb25kc1wiKSA9PT0gMCkge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cblxuICAgIGxldCB7IHMgfSA9IHRoaXMsXG4gICAgICBpZHggPSAxLFxuICAgICAgbmV4dDtcblxuICAgIGNvbnN0IHJlc3VsdHMgPSBbXTtcbiAgICB3aGlsZSAocyA8IHRoaXMuZSkge1xuICAgICAgY29uc3QgYWRkZWQgPSB0aGlzLnN0YXJ0LnBsdXMoZHVyLm1hcFVuaXRzKCh4KSA9PiB4ICogaWR4KSk7XG4gICAgICBuZXh0ID0gK2FkZGVkID4gK3RoaXMuZSA/IHRoaXMuZSA6IGFkZGVkO1xuICAgICAgcmVzdWx0cy5wdXNoKEludGVydmFsLmZyb21EYXRlVGltZXMocywgbmV4dCkpO1xuICAgICAgcyA9IG5leHQ7XG4gICAgICBpZHggKz0gMTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0cztcbiAgfVxuXG4gIC8qKlxuICAgKiBTcGxpdCB0aGlzIEludGVydmFsIGludG8gdGhlIHNwZWNpZmllZCBudW1iZXIgb2Ygc21hbGxlciBpbnRlcnZhbHMuXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBudW1iZXJPZlBhcnRzIC0gVGhlIG51bWJlciBvZiBJbnRlcnZhbHMgdG8gZGl2aWRlIHRoZSBJbnRlcnZhbCBpbnRvLlxuICAgKiBAcmV0dXJuIHtBcnJheX1cbiAgICovXG4gIGRpdmlkZUVxdWFsbHkobnVtYmVyT2ZQYXJ0cykge1xuICAgIGlmICghdGhpcy5pc1ZhbGlkKSByZXR1cm4gW107XG4gICAgcmV0dXJuIHRoaXMuc3BsaXRCeSh0aGlzLmxlbmd0aCgpIC8gbnVtYmVyT2ZQYXJ0cykuc2xpY2UoMCwgbnVtYmVyT2ZQYXJ0cyk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIHdoZXRoZXIgdGhpcyBJbnRlcnZhbCBvdmVybGFwcyB3aXRoIHRoZSBzcGVjaWZpZWQgSW50ZXJ2YWxcbiAgICogQHBhcmFtIHtJbnRlcnZhbH0gb3RoZXJcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIG92ZXJsYXBzKG90aGVyKSB7XG4gICAgcmV0dXJuIHRoaXMuZSA+IG90aGVyLnMgJiYgdGhpcy5zIDwgb3RoZXIuZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gd2hldGhlciB0aGlzIEludGVydmFsJ3MgZW5kIGlzIGFkamFjZW50IHRvIHRoZSBzcGVjaWZpZWQgSW50ZXJ2YWwncyBzdGFydC5cbiAgICogQHBhcmFtIHtJbnRlcnZhbH0gb3RoZXJcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIGFidXRzU3RhcnQob3RoZXIpIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIGZhbHNlO1xuICAgIHJldHVybiArdGhpcy5lID09PSArb3RoZXIucztcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gd2hldGhlciB0aGlzIEludGVydmFsJ3Mgc3RhcnQgaXMgYWRqYWNlbnQgdG8gdGhlIHNwZWNpZmllZCBJbnRlcnZhbCdzIGVuZC5cbiAgICogQHBhcmFtIHtJbnRlcnZhbH0gb3RoZXJcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIGFidXRzRW5kKG90aGVyKSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHJldHVybiBmYWxzZTtcbiAgICByZXR1cm4gK290aGVyLmUgPT09ICt0aGlzLnM7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIHdoZXRoZXIgdGhpcyBJbnRlcnZhbCBlbmd1bGZzIHRoZSBzdGFydCBhbmQgZW5kIG9mIHRoZSBzcGVjaWZpZWQgSW50ZXJ2YWwuXG4gICAqIEBwYXJhbSB7SW50ZXJ2YWx9IG90aGVyXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBlbmd1bGZzKG90aGVyKSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHJldHVybiBmYWxzZTtcbiAgICByZXR1cm4gdGhpcy5zIDw9IG90aGVyLnMgJiYgdGhpcy5lID49IG90aGVyLmU7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIHdoZXRoZXIgdGhpcyBJbnRlcnZhbCBoYXMgdGhlIHNhbWUgc3RhcnQgYW5kIGVuZCBhcyB0aGUgc3BlY2lmaWVkIEludGVydmFsLlxuICAgKiBAcGFyYW0ge0ludGVydmFsfSBvdGhlclxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgZXF1YWxzKG90aGVyKSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQgfHwgIW90aGVyLmlzVmFsaWQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5zLmVxdWFscyhvdGhlci5zKSAmJiB0aGlzLmUuZXF1YWxzKG90aGVyLmUpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiBhbiBJbnRlcnZhbCByZXByZXNlbnRpbmcgdGhlIGludGVyc2VjdGlvbiBvZiB0aGlzIEludGVydmFsIGFuZCB0aGUgc3BlY2lmaWVkIEludGVydmFsLlxuICAgKiBTcGVjaWZpY2FsbHksIHRoZSByZXN1bHRpbmcgSW50ZXJ2YWwgaGFzIHRoZSBtYXhpbXVtIHN0YXJ0IHRpbWUgYW5kIHRoZSBtaW5pbXVtIGVuZCB0aW1lIG9mIHRoZSB0d28gSW50ZXJ2YWxzLlxuICAgKiBSZXR1cm5zIG51bGwgaWYgdGhlIGludGVyc2VjdGlvbiBpcyBlbXB0eSwgbWVhbmluZywgdGhlIGludGVydmFscyBkb24ndCBpbnRlcnNlY3QuXG4gICAqIEBwYXJhbSB7SW50ZXJ2YWx9IG90aGVyXG4gICAqIEByZXR1cm4ge0ludGVydmFsfVxuICAgKi9cbiAgaW50ZXJzZWN0aW9uKG90aGVyKSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHJldHVybiB0aGlzO1xuICAgIGNvbnN0IHMgPSB0aGlzLnMgPiBvdGhlci5zID8gdGhpcy5zIDogb3RoZXIucyxcbiAgICAgIGUgPSB0aGlzLmUgPCBvdGhlci5lID8gdGhpcy5lIDogb3RoZXIuZTtcblxuICAgIGlmIChzID49IGUpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gSW50ZXJ2YWwuZnJvbURhdGVUaW1lcyhzLCBlKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIGFuIEludGVydmFsIHJlcHJlc2VudGluZyB0aGUgdW5pb24gb2YgdGhpcyBJbnRlcnZhbCBhbmQgdGhlIHNwZWNpZmllZCBJbnRlcnZhbC5cbiAgICogU3BlY2lmaWNhbGx5LCB0aGUgcmVzdWx0aW5nIEludGVydmFsIGhhcyB0aGUgbWluaW11bSBzdGFydCB0aW1lIGFuZCB0aGUgbWF4aW11bSBlbmQgdGltZSBvZiB0aGUgdHdvIEludGVydmFscy5cbiAgICogQHBhcmFtIHtJbnRlcnZhbH0gb3RoZXJcbiAgICogQHJldHVybiB7SW50ZXJ2YWx9XG4gICAqL1xuICB1bmlvbihvdGhlcikge1xuICAgIGlmICghdGhpcy5pc1ZhbGlkKSByZXR1cm4gdGhpcztcbiAgICBjb25zdCBzID0gdGhpcy5zIDwgb3RoZXIucyA/IHRoaXMucyA6IG90aGVyLnMsXG4gICAgICBlID0gdGhpcy5lID4gb3RoZXIuZSA/IHRoaXMuZSA6IG90aGVyLmU7XG4gICAgcmV0dXJuIEludGVydmFsLmZyb21EYXRlVGltZXMocywgZSk7XG4gIH1cblxuICAvKipcbiAgICogTWVyZ2UgYW4gYXJyYXkgb2YgSW50ZXJ2YWxzIGludG8gYSBlcXVpdmFsZW50IG1pbmltYWwgc2V0IG9mIEludGVydmFscy5cbiAgICogQ29tYmluZXMgb3ZlcmxhcHBpbmcgYW5kIGFkamFjZW50IEludGVydmFscy5cbiAgICogQHBhcmFtIHtBcnJheX0gaW50ZXJ2YWxzXG4gICAqIEByZXR1cm4ge0FycmF5fVxuICAgKi9cbiAgc3RhdGljIG1lcmdlKGludGVydmFscykge1xuICAgIGNvbnN0IFtmb3VuZCwgZmluYWxdID0gaW50ZXJ2YWxzXG4gICAgICAuc29ydCgoYSwgYikgPT4gYS5zIC0gYi5zKVxuICAgICAgLnJlZHVjZShcbiAgICAgICAgKFtzb2ZhciwgY3VycmVudF0sIGl0ZW0pID0+IHtcbiAgICAgICAgICBpZiAoIWN1cnJlbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBbc29mYXIsIGl0ZW1dO1xuICAgICAgICAgIH0gZWxzZSBpZiAoY3VycmVudC5vdmVybGFwcyhpdGVtKSB8fCBjdXJyZW50LmFidXRzU3RhcnQoaXRlbSkpIHtcbiAgICAgICAgICAgIHJldHVybiBbc29mYXIsIGN1cnJlbnQudW5pb24oaXRlbSldO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gW3NvZmFyLmNvbmNhdChbY3VycmVudF0pLCBpdGVtXTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFtbXSwgbnVsbF1cbiAgICAgICk7XG4gICAgaWYgKGZpbmFsKSB7XG4gICAgICBmb3VuZC5wdXNoKGZpbmFsKTtcbiAgICB9XG4gICAgcmV0dXJuIGZvdW5kO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiBhbiBhcnJheSBvZiBJbnRlcnZhbHMgcmVwcmVzZW50aW5nIHRoZSBzcGFucyBvZiB0aW1lIHRoYXQgb25seSBhcHBlYXIgaW4gb25lIG9mIHRoZSBzcGVjaWZpZWQgSW50ZXJ2YWxzLlxuICAgKiBAcGFyYW0ge0FycmF5fSBpbnRlcnZhbHNcbiAgICogQHJldHVybiB7QXJyYXl9XG4gICAqL1xuICBzdGF0aWMgeG9yKGludGVydmFscykge1xuICAgIGxldCBzdGFydCA9IG51bGwsXG4gICAgICBjdXJyZW50Q291bnQgPSAwO1xuICAgIGNvbnN0IHJlc3VsdHMgPSBbXSxcbiAgICAgIGVuZHMgPSBpbnRlcnZhbHMubWFwKChpKSA9PiBbXG4gICAgICAgIHsgdGltZTogaS5zLCB0eXBlOiBcInNcIiB9LFxuICAgICAgICB7IHRpbWU6IGkuZSwgdHlwZTogXCJlXCIgfSxcbiAgICAgIF0pLFxuICAgICAgZmxhdHRlbmVkID0gQXJyYXkucHJvdG90eXBlLmNvbmNhdCguLi5lbmRzKSxcbiAgICAgIGFyciA9IGZsYXR0ZW5lZC5zb3J0KChhLCBiKSA9PiBhLnRpbWUgLSBiLnRpbWUpO1xuXG4gICAgZm9yIChjb25zdCBpIG9mIGFycikge1xuICAgICAgY3VycmVudENvdW50ICs9IGkudHlwZSA9PT0gXCJzXCIgPyAxIDogLTE7XG5cbiAgICAgIGlmIChjdXJyZW50Q291bnQgPT09IDEpIHtcbiAgICAgICAgc3RhcnQgPSBpLnRpbWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoc3RhcnQgJiYgK3N0YXJ0ICE9PSAraS50aW1lKSB7XG4gICAgICAgICAgcmVzdWx0cy5wdXNoKEludGVydmFsLmZyb21EYXRlVGltZXMoc3RhcnQsIGkudGltZSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RhcnQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBJbnRlcnZhbC5tZXJnZShyZXN1bHRzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gYW4gSW50ZXJ2YWwgcmVwcmVzZW50aW5nIHRoZSBzcGFuIG9mIHRpbWUgaW4gdGhpcyBJbnRlcnZhbCB0aGF0IGRvZXNuJ3Qgb3ZlcmxhcCB3aXRoIGFueSBvZiB0aGUgc3BlY2lmaWVkIEludGVydmFscy5cbiAgICogQHBhcmFtIHsuLi5JbnRlcnZhbH0gaW50ZXJ2YWxzXG4gICAqIEByZXR1cm4ge0FycmF5fVxuICAgKi9cbiAgZGlmZmVyZW5jZSguLi5pbnRlcnZhbHMpIHtcbiAgICByZXR1cm4gSW50ZXJ2YWwueG9yKFt0aGlzXS5jb25jYXQoaW50ZXJ2YWxzKSlcbiAgICAgIC5tYXAoKGkpID0+IHRoaXMuaW50ZXJzZWN0aW9uKGkpKVxuICAgICAgLmZpbHRlcigoaSkgPT4gaSAmJiAhaS5pc0VtcHR5KCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhpcyBJbnRlcnZhbCBhcHByb3ByaWF0ZSBmb3IgZGVidWdnaW5nLlxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICB0b1N0cmluZygpIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIElOVkFMSUQkMTtcbiAgICByZXR1cm4gYFske3RoaXMucy50b0lTTygpfSDigJMgJHt0aGlzLmUudG9JU08oKX0pYDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgbG9jYWxpemVkIHN0cmluZyByZXByZXNlbnRpbmcgdGhpcyBJbnRlcnZhbC4gQWNjZXB0cyB0aGUgc2FtZSBvcHRpb25zIGFzIHRoZVxuICAgKiBJbnRsLkRhdGVUaW1lRm9ybWF0IGNvbnN0cnVjdG9yIGFuZCBhbnkgcHJlc2V0cyBkZWZpbmVkIGJ5IEx1eG9uLCBzdWNoIGFzXG4gICAqIHtAbGluayBEYXRlVGltZS5EQVRFX0ZVTEx9IG9yIHtAbGluayBEYXRlVGltZS5USU1FX1NJTVBMRX0uIFRoZSBleGFjdCBiZWhhdmlvciBvZiB0aGlzIG1ldGhvZFxuICAgKiBpcyBicm93c2VyLXNwZWNpZmljLCBidXQgaW4gZ2VuZXJhbCBpdCB3aWxsIHJldHVybiBhbiBhcHByb3ByaWF0ZSByZXByZXNlbnRhdGlvbiBvZiB0aGVcbiAgICogSW50ZXJ2YWwgaW4gdGhlIGFzc2lnbmVkIGxvY2FsZS4gRGVmYXVsdHMgdG8gdGhlIHN5c3RlbSdzIGxvY2FsZSBpZiBubyBsb2NhbGUgaGFzIGJlZW5cbiAgICogc3BlY2lmaWVkLlxuICAgKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL0RhdGVUaW1lRm9ybWF0XG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbZm9ybWF0T3B0cz1EYXRlVGltZS5EQVRFX1NIT1JUXSAtIEVpdGhlciBhIERhdGVUaW1lIHByZXNldCBvclxuICAgKiBJbnRsLkRhdGVUaW1lRm9ybWF0IGNvbnN0cnVjdG9yIG9wdGlvbnMuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIC0gT3B0aW9ucyB0byBvdmVycmlkZSB0aGUgY29uZmlndXJhdGlvbiBvZiB0aGUgc3RhcnQgRGF0ZVRpbWUuXG4gICAqIEBleGFtcGxlIEludGVydmFsLmZyb21JU08oJzIwMjItMTEtMDdUMDk6MDBaLzIwMjItMTEtMDhUMDk6MDBaJykudG9Mb2NhbGVTdHJpbmcoKTsgLy89PiAxMS83LzIwMjIg4oCTIDExLzgvMjAyMlxuICAgKiBAZXhhbXBsZSBJbnRlcnZhbC5mcm9tSVNPKCcyMDIyLTExLTA3VDA5OjAwWi8yMDIyLTExLTA4VDA5OjAwWicpLnRvTG9jYWxlU3RyaW5nKERhdGVUaW1lLkRBVEVfRlVMTCk7IC8vPT4gTm92ZW1iZXIgNyDigJMgOCwgMjAyMlxuICAgKiBAZXhhbXBsZSBJbnRlcnZhbC5mcm9tSVNPKCcyMDIyLTExLTA3VDA5OjAwWi8yMDIyLTExLTA4VDA5OjAwWicpLnRvTG9jYWxlU3RyaW5nKERhdGVUaW1lLkRBVEVfRlVMTCwgeyBsb2NhbGU6ICdmci1GUicgfSk7IC8vPT4gN+KAkzggbm92ZW1icmUgMjAyMlxuICAgKiBAZXhhbXBsZSBJbnRlcnZhbC5mcm9tSVNPKCcyMDIyLTExLTA3VDE3OjAwWi8yMDIyLTExLTA3VDE5OjAwWicpLnRvTG9jYWxlU3RyaW5nKERhdGVUaW1lLlRJTUVfU0lNUExFKTsgLy89PiA2OjAwIOKAkyA4OjAwIFBNXG4gICAqIEBleGFtcGxlIEludGVydmFsLmZyb21JU08oJzIwMjItMTEtMDdUMTc6MDBaLzIwMjItMTEtMDdUMTk6MDBaJykudG9Mb2NhbGVTdHJpbmcoeyB3ZWVrZGF5OiAnc2hvcnQnLCBtb250aDogJ3Nob3J0JywgZGF5OiAnMi1kaWdpdCcsIGhvdXI6ICcyLWRpZ2l0JywgbWludXRlOiAnMi1kaWdpdCcgfSk7IC8vPT4gTW9uLCBOb3YgMDcsIDY6MDAg4oCTIDg6MDAgcFxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICB0b0xvY2FsZVN0cmluZyhmb3JtYXRPcHRzID0gREFURV9TSE9SVCwgb3B0cyA9IHt9KSB7XG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZFxuICAgICAgPyBGb3JtYXR0ZXIuY3JlYXRlKHRoaXMucy5sb2MuY2xvbmUob3B0cyksIGZvcm1hdE9wdHMpLmZvcm1hdEludGVydmFsKHRoaXMpXG4gICAgICA6IElOVkFMSUQkMTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIElTTyA4NjAxLWNvbXBsaWFudCBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhpcyBJbnRlcnZhbC5cbiAgICogQHNlZSBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fODYwMSNUaW1lX2ludGVydmFsc1xuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyAtIFRoZSBzYW1lIG9wdGlvbnMgYXMge0BsaW5rIERhdGVUaW1lI3RvSVNPfVxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICB0b0lTTyhvcHRzKSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHJldHVybiBJTlZBTElEJDE7XG4gICAgcmV0dXJuIGAke3RoaXMucy50b0lTTyhvcHRzKX0vJHt0aGlzLmUudG9JU08ob3B0cyl9YDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIElTTyA4NjAxLWNvbXBsaWFudCBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgZGF0ZSBvZiB0aGlzIEludGVydmFsLlxuICAgKiBUaGUgdGltZSBjb21wb25lbnRzIGFyZSBpZ25vcmVkLlxuICAgKiBAc2VlIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0lTT184NjAxI1RpbWVfaW50ZXJ2YWxzXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIHRvSVNPRGF0ZSgpIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIElOVkFMSUQkMTtcbiAgICByZXR1cm4gYCR7dGhpcy5zLnRvSVNPRGF0ZSgpfS8ke3RoaXMuZS50b0lTT0RhdGUoKX1gO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gSVNPIDg2MDEtY29tcGxpYW50IHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aW1lIG9mIHRoaXMgSW50ZXJ2YWwuXG4gICAqIFRoZSBkYXRlIGNvbXBvbmVudHMgYXJlIGlnbm9yZWQuXG4gICAqIEBzZWUgaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSVNPXzg2MDEjVGltZV9pbnRlcnZhbHNcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgLSBUaGUgc2FtZSBvcHRpb25zIGFzIHtAbGluayBEYXRlVGltZSN0b0lTT31cbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgdG9JU09UaW1lKG9wdHMpIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIElOVkFMSUQkMTtcbiAgICByZXR1cm4gYCR7dGhpcy5zLnRvSVNPVGltZShvcHRzKX0vJHt0aGlzLmUudG9JU09UaW1lKG9wdHMpfWA7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGlzIEludGVydmFsIGZvcm1hdHRlZCBhY2NvcmRpbmcgdG8gdGhlIHNwZWNpZmllZCBmb3JtYXRcbiAgICogc3RyaW5nLiAqKllvdSBtYXkgbm90IHdhbnQgdGhpcy4qKiBTZWUge0BsaW5rIEludGVydmFsI3RvTG9jYWxlU3RyaW5nfSBmb3IgYSBtb3JlIGZsZXhpYmxlXG4gICAqIGZvcm1hdHRpbmcgdG9vbC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGRhdGVGb3JtYXQgLSBUaGUgZm9ybWF0IHN0cmluZy4gVGhpcyBzdHJpbmcgZm9ybWF0cyB0aGUgc3RhcnQgYW5kIGVuZCB0aW1lLlxuICAgKiBTZWUge0BsaW5rIERhdGVUaW1lI3RvRm9ybWF0fSBmb3IgZGV0YWlscy5cbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgLSBPcHRpb25zLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMuc2VwYXJhdG9yID0gICcg4oCTICddIC0gQSBzZXBhcmF0b3IgdG8gcGxhY2UgYmV0d2VlbiB0aGUgc3RhcnQgYW5kIGVuZFxuICAgKiByZXByZXNlbnRhdGlvbnMuXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIHRvRm9ybWF0KGRhdGVGb3JtYXQsIHsgc2VwYXJhdG9yID0gXCIg4oCTIFwiIH0gPSB7fSkge1xuICAgIGlmICghdGhpcy5pc1ZhbGlkKSByZXR1cm4gSU5WQUxJRCQxO1xuICAgIHJldHVybiBgJHt0aGlzLnMudG9Gb3JtYXQoZGF0ZUZvcm1hdCl9JHtzZXBhcmF0b3J9JHt0aGlzLmUudG9Gb3JtYXQoZGF0ZUZvcm1hdCl9YDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gYSBEdXJhdGlvbiByZXByZXNlbnRpbmcgdGhlIHRpbWUgc3Bhbm5lZCBieSB0aGlzIGludGVydmFsLlxuICAgKiBAcGFyYW0ge3N0cmluZ3xzdHJpbmdbXX0gW3VuaXQ9WydtaWxsaXNlY29uZHMnXV0gLSB0aGUgdW5pdCBvciB1bml0cyAoc3VjaCBhcyAnaG91cnMnIG9yICdkYXlzJykgdG8gaW5jbHVkZSBpbiB0aGUgZHVyYXRpb24uXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIC0gb3B0aW9ucyB0aGF0IGFmZmVjdCB0aGUgY3JlYXRpb24gb2YgdGhlIER1cmF0aW9uXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5jb252ZXJzaW9uQWNjdXJhY3k9J2Nhc3VhbCddIC0gdGhlIGNvbnZlcnNpb24gc3lzdGVtIHRvIHVzZVxuICAgKiBAZXhhbXBsZSBJbnRlcnZhbC5mcm9tRGF0ZVRpbWVzKGR0MSwgZHQyKS50b0R1cmF0aW9uKCkudG9PYmplY3QoKSAvLz0+IHsgbWlsbGlzZWNvbmRzOiA4ODQ4OTI1NyB9XG4gICAqIEBleGFtcGxlIEludGVydmFsLmZyb21EYXRlVGltZXMoZHQxLCBkdDIpLnRvRHVyYXRpb24oJ2RheXMnKS50b09iamVjdCgpIC8vPT4geyBkYXlzOiAxLjAyNDE4MTIxNTI3Nzc3NzggfVxuICAgKiBAZXhhbXBsZSBJbnRlcnZhbC5mcm9tRGF0ZVRpbWVzKGR0MSwgZHQyKS50b0R1cmF0aW9uKFsnaG91cnMnLCAnbWludXRlcyddKS50b09iamVjdCgpIC8vPT4geyBob3VyczogMjQsIG1pbnV0ZXM6IDM0LjgyMDk1IH1cbiAgICogQGV4YW1wbGUgSW50ZXJ2YWwuZnJvbURhdGVUaW1lcyhkdDEsIGR0MikudG9EdXJhdGlvbihbJ2hvdXJzJywgJ21pbnV0ZXMnLCAnc2Vjb25kcyddKS50b09iamVjdCgpIC8vPT4geyBob3VyczogMjQsIG1pbnV0ZXM6IDM0LCBzZWNvbmRzOiA0OS4yNTcgfVxuICAgKiBAZXhhbXBsZSBJbnRlcnZhbC5mcm9tRGF0ZVRpbWVzKGR0MSwgZHQyKS50b0R1cmF0aW9uKCdzZWNvbmRzJykudG9PYmplY3QoKSAvLz0+IHsgc2Vjb25kczogODg0ODkuMjU3IH1cbiAgICogQHJldHVybiB7RHVyYXRpb259XG4gICAqL1xuICB0b0R1cmF0aW9uKHVuaXQsIG9wdHMpIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkge1xuICAgICAgcmV0dXJuIER1cmF0aW9uLmludmFsaWQodGhpcy5pbnZhbGlkUmVhc29uKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuZS5kaWZmKHRoaXMucywgdW5pdCwgb3B0cyk7XG4gIH1cblxuICAvKipcbiAgICogUnVuIG1hcEZuIG9uIHRoZSBpbnRlcnZhbCBzdGFydCBhbmQgZW5kLCByZXR1cm5pbmcgYSBuZXcgSW50ZXJ2YWwgZnJvbSB0aGUgcmVzdWx0aW5nIERhdGVUaW1lc1xuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBtYXBGblxuICAgKiBAcmV0dXJuIHtJbnRlcnZhbH1cbiAgICogQGV4YW1wbGUgSW50ZXJ2YWwuZnJvbURhdGVUaW1lcyhkdDEsIGR0MikubWFwRW5kcG9pbnRzKGVuZHBvaW50ID0+IGVuZHBvaW50LnRvVVRDKCkpXG4gICAqIEBleGFtcGxlIEludGVydmFsLmZyb21EYXRlVGltZXMoZHQxLCBkdDIpLm1hcEVuZHBvaW50cyhlbmRwb2ludCA9PiBlbmRwb2ludC5wbHVzKHsgaG91cnM6IDIgfSkpXG4gICAqL1xuICBtYXBFbmRwb2ludHMobWFwRm4pIHtcbiAgICByZXR1cm4gSW50ZXJ2YWwuZnJvbURhdGVUaW1lcyhtYXBGbih0aGlzLnMpLCBtYXBGbih0aGlzLmUpKTtcbiAgfVxufVxuXG4vKipcbiAqIFRoZSBJbmZvIGNsYXNzIGNvbnRhaW5zIHN0YXRpYyBtZXRob2RzIGZvciByZXRyaWV2aW5nIGdlbmVyYWwgdGltZSBhbmQgZGF0ZSByZWxhdGVkIGRhdGEuIEZvciBleGFtcGxlLCBpdCBoYXMgbWV0aG9kcyBmb3IgZmluZGluZyBvdXQgaWYgYSB0aW1lIHpvbmUgaGFzIGEgRFNULCBmb3IgbGlzdGluZyB0aGUgbW9udGhzIGluIGFueSBzdXBwb3J0ZWQgbG9jYWxlLCBhbmQgZm9yIGRpc2NvdmVyaW5nIHdoaWNoIG9mIEx1eG9uIGZlYXR1cmVzIGFyZSBhdmFpbGFibGUgaW4gdGhlIGN1cnJlbnQgZW52aXJvbm1lbnQuXG4gKi9cbmNsYXNzIEluZm8ge1xuICAvKipcbiAgICogUmV0dXJuIHdoZXRoZXIgdGhlIHNwZWNpZmllZCB6b25lIGNvbnRhaW5zIGEgRFNULlxuICAgKiBAcGFyYW0ge3N0cmluZ3xab25lfSBbem9uZT0nbG9jYWwnXSAtIFpvbmUgdG8gY2hlY2suIERlZmF1bHRzIHRvIHRoZSBlbnZpcm9ubWVudCdzIGxvY2FsIHpvbmUuXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBzdGF0aWMgaGFzRFNUKHpvbmUgPSBTZXR0aW5ncy5kZWZhdWx0Wm9uZSkge1xuICAgIGNvbnN0IHByb3RvID0gRGF0ZVRpbWUubm93KCkuc2V0Wm9uZSh6b25lKS5zZXQoeyBtb250aDogMTIgfSk7XG5cbiAgICByZXR1cm4gIXpvbmUuaXNVbml2ZXJzYWwgJiYgcHJvdG8ub2Zmc2V0ICE9PSBwcm90by5zZXQoeyBtb250aDogNiB9KS5vZmZzZXQ7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIHdoZXRoZXIgdGhlIHNwZWNpZmllZCB6b25lIGlzIGEgdmFsaWQgSUFOQSBzcGVjaWZpZXIuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB6b25lIC0gWm9uZSB0byBjaGVja1xuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgc3RhdGljIGlzVmFsaWRJQU5BWm9uZSh6b25lKSB7XG4gICAgcmV0dXJuIElBTkFab25lLmlzVmFsaWRab25lKHpvbmUpO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlcnRzIHRoZSBpbnB1dCBpbnRvIGEge0BsaW5rIFpvbmV9IGluc3RhbmNlLlxuICAgKlxuICAgKiAqIElmIGBpbnB1dGAgaXMgYWxyZWFkeSBhIFpvbmUgaW5zdGFuY2UsIGl0IGlzIHJldHVybmVkIHVuY2hhbmdlZC5cbiAgICogKiBJZiBgaW5wdXRgIGlzIGEgc3RyaW5nIGNvbnRhaW5pbmcgYSB2YWxpZCB0aW1lIHpvbmUgbmFtZSwgYSBab25lIGluc3RhbmNlXG4gICAqICAgd2l0aCB0aGF0IG5hbWUgaXMgcmV0dXJuZWQuXG4gICAqICogSWYgYGlucHV0YCBpcyBhIHN0cmluZyB0aGF0IGRvZXNuJ3QgcmVmZXIgdG8gYSBrbm93biB0aW1lIHpvbmUsIGEgWm9uZVxuICAgKiAgIGluc3RhbmNlIHdpdGgge0BsaW5rIFpvbmUjaXNWYWxpZH0gPT0gZmFsc2UgaXMgcmV0dXJuZWQuXG4gICAqICogSWYgYGlucHV0IGlzIGEgbnVtYmVyLCBhIFpvbmUgaW5zdGFuY2Ugd2l0aCB0aGUgc3BlY2lmaWVkIGZpeGVkIG9mZnNldFxuICAgKiAgIGluIG1pbnV0ZXMgaXMgcmV0dXJuZWQuXG4gICAqICogSWYgYGlucHV0YCBpcyBgbnVsbGAgb3IgYHVuZGVmaW5lZGAsIHRoZSBkZWZhdWx0IHpvbmUgaXMgcmV0dXJuZWQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfFpvbmV8bnVtYmVyfSBbaW5wdXRdIC0gdGhlIHZhbHVlIHRvIGJlIGNvbnZlcnRlZFxuICAgKiBAcmV0dXJuIHtab25lfVxuICAgKi9cbiAgc3RhdGljIG5vcm1hbGl6ZVpvbmUoaW5wdXQpIHtcbiAgICByZXR1cm4gbm9ybWFsaXplWm9uZShpbnB1dCwgU2V0dGluZ3MuZGVmYXVsdFpvbmUpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiBhbiBhcnJheSBvZiBzdGFuZGFsb25lIG1vbnRoIG5hbWVzLlxuICAgKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL0RhdGVUaW1lRm9ybWF0XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbbGVuZ3RoPSdsb25nJ10gLSB0aGUgbGVuZ3RoIG9mIHRoZSBtb250aCByZXByZXNlbnRhdGlvbiwgc3VjaCBhcyBcIm51bWVyaWNcIiwgXCIyLWRpZ2l0XCIsIFwibmFycm93XCIsIFwic2hvcnRcIiwgXCJsb25nXCJcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgLSBvcHRpb25zXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5sb2NhbGVdIC0gdGhlIGxvY2FsZSBjb2RlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5udW1iZXJpbmdTeXN0ZW09bnVsbF0gLSB0aGUgbnVtYmVyaW5nIHN5c3RlbVxuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMubG9jT2JqPW51bGxdIC0gYW4gZXhpc3RpbmcgbG9jYWxlIG9iamVjdCB0byB1c2VcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLm91dHB1dENhbGVuZGFyPSdncmVnb3J5J10gLSB0aGUgY2FsZW5kYXJcbiAgICogQGV4YW1wbGUgSW5mby5tb250aHMoKVswXSAvLz0+ICdKYW51YXJ5J1xuICAgKiBAZXhhbXBsZSBJbmZvLm1vbnRocygnc2hvcnQnKVswXSAvLz0+ICdKYW4nXG4gICAqIEBleGFtcGxlIEluZm8ubW9udGhzKCdudW1lcmljJylbMF0gLy89PiAnMSdcbiAgICogQGV4YW1wbGUgSW5mby5tb250aHMoJ3Nob3J0JywgeyBsb2NhbGU6ICdmci1DQScgfSApWzBdIC8vPT4gJ2phbnYuJ1xuICAgKiBAZXhhbXBsZSBJbmZvLm1vbnRocygnbnVtZXJpYycsIHsgbG9jYWxlOiAnYXInIH0pWzBdIC8vPT4gJ9mhJ1xuICAgKiBAZXhhbXBsZSBJbmZvLm1vbnRocygnbG9uZycsIHsgb3V0cHV0Q2FsZW5kYXI6ICdpc2xhbWljJyB9KVswXSAvLz0+ICdSYWJpyrsgSSdcbiAgICogQHJldHVybiB7QXJyYXl9XG4gICAqL1xuICBzdGF0aWMgbW9udGhzKFxuICAgIGxlbmd0aCA9IFwibG9uZ1wiLFxuICAgIHsgbG9jYWxlID0gbnVsbCwgbnVtYmVyaW5nU3lzdGVtID0gbnVsbCwgbG9jT2JqID0gbnVsbCwgb3V0cHV0Q2FsZW5kYXIgPSBcImdyZWdvcnlcIiB9ID0ge31cbiAgKSB7XG4gICAgcmV0dXJuIChsb2NPYmogfHwgTG9jYWxlLmNyZWF0ZShsb2NhbGUsIG51bWJlcmluZ1N5c3RlbSwgb3V0cHV0Q2FsZW5kYXIpKS5tb250aHMobGVuZ3RoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gYW4gYXJyYXkgb2YgZm9ybWF0IG1vbnRoIG5hbWVzLlxuICAgKiBGb3JtYXQgbW9udGhzIGRpZmZlciBmcm9tIHN0YW5kYWxvbmUgbW9udGhzIGluIHRoYXQgdGhleSdyZSBtZWFudCB0byBhcHBlYXIgbmV4dCB0byB0aGUgZGF5IG9mIHRoZSBtb250aC4gSW4gc29tZSBsYW5ndWFnZXMsIHRoYXRcbiAgICogY2hhbmdlcyB0aGUgc3RyaW5nLlxuICAgKiBTZWUge0BsaW5rIEluZm8jbW9udGhzfVxuICAgKiBAcGFyYW0ge3N0cmluZ30gW2xlbmd0aD0nbG9uZyddIC0gdGhlIGxlbmd0aCBvZiB0aGUgbW9udGggcmVwcmVzZW50YXRpb24sIHN1Y2ggYXMgXCJudW1lcmljXCIsIFwiMi1kaWdpdFwiLCBcIm5hcnJvd1wiLCBcInNob3J0XCIsIFwibG9uZ1wiXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIC0gb3B0aW9uc1xuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMubG9jYWxlXSAtIHRoZSBsb2NhbGUgY29kZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMubnVtYmVyaW5nU3lzdGVtPW51bGxdIC0gdGhlIG51bWJlcmluZyBzeXN0ZW1cbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLmxvY09iaj1udWxsXSAtIGFuIGV4aXN0aW5nIGxvY2FsZSBvYmplY3QgdG8gdXNlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5vdXRwdXRDYWxlbmRhcj0nZ3JlZ29yeSddIC0gdGhlIGNhbGVuZGFyXG4gICAqIEByZXR1cm4ge0FycmF5fVxuICAgKi9cbiAgc3RhdGljIG1vbnRoc0Zvcm1hdChcbiAgICBsZW5ndGggPSBcImxvbmdcIixcbiAgICB7IGxvY2FsZSA9IG51bGwsIG51bWJlcmluZ1N5c3RlbSA9IG51bGwsIGxvY09iaiA9IG51bGwsIG91dHB1dENhbGVuZGFyID0gXCJncmVnb3J5XCIgfSA9IHt9XG4gICkge1xuICAgIHJldHVybiAobG9jT2JqIHx8IExvY2FsZS5jcmVhdGUobG9jYWxlLCBudW1iZXJpbmdTeXN0ZW0sIG91dHB1dENhbGVuZGFyKSkubW9udGhzKGxlbmd0aCwgdHJ1ZSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIGFuIGFycmF5IG9mIHN0YW5kYWxvbmUgd2VlayBuYW1lcy5cbiAgICogQHNlZSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9EYXRlVGltZUZvcm1hdFxuICAgKiBAcGFyYW0ge3N0cmluZ30gW2xlbmd0aD0nbG9uZyddIC0gdGhlIGxlbmd0aCBvZiB0aGUgd2Vla2RheSByZXByZXNlbnRhdGlvbiwgc3VjaCBhcyBcIm5hcnJvd1wiLCBcInNob3J0XCIsIFwibG9uZ1wiLlxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyAtIG9wdGlvbnNcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLmxvY2FsZV0gLSB0aGUgbG9jYWxlIGNvZGVcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLm51bWJlcmluZ1N5c3RlbT1udWxsXSAtIHRoZSBudW1iZXJpbmcgc3lzdGVtXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5sb2NPYmo9bnVsbF0gLSBhbiBleGlzdGluZyBsb2NhbGUgb2JqZWN0IHRvIHVzZVxuICAgKiBAZXhhbXBsZSBJbmZvLndlZWtkYXlzKClbMF0gLy89PiAnTW9uZGF5J1xuICAgKiBAZXhhbXBsZSBJbmZvLndlZWtkYXlzKCdzaG9ydCcpWzBdIC8vPT4gJ01vbidcbiAgICogQGV4YW1wbGUgSW5mby53ZWVrZGF5cygnc2hvcnQnLCB7IGxvY2FsZTogJ2ZyLUNBJyB9KVswXSAvLz0+ICdsdW4uJ1xuICAgKiBAZXhhbXBsZSBJbmZvLndlZWtkYXlzKCdzaG9ydCcsIHsgbG9jYWxlOiAnYXInIH0pWzBdIC8vPT4gJ9in2YTYp9ir2YbZitmGJ1xuICAgKiBAcmV0dXJuIHtBcnJheX1cbiAgICovXG4gIHN0YXRpYyB3ZWVrZGF5cyhsZW5ndGggPSBcImxvbmdcIiwgeyBsb2NhbGUgPSBudWxsLCBudW1iZXJpbmdTeXN0ZW0gPSBudWxsLCBsb2NPYmogPSBudWxsIH0gPSB7fSkge1xuICAgIHJldHVybiAobG9jT2JqIHx8IExvY2FsZS5jcmVhdGUobG9jYWxlLCBudW1iZXJpbmdTeXN0ZW0sIG51bGwpKS53ZWVrZGF5cyhsZW5ndGgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiBhbiBhcnJheSBvZiBmb3JtYXQgd2VlayBuYW1lcy5cbiAgICogRm9ybWF0IHdlZWtkYXlzIGRpZmZlciBmcm9tIHN0YW5kYWxvbmUgd2Vla2RheXMgaW4gdGhhdCB0aGV5J3JlIG1lYW50IHRvIGFwcGVhciBuZXh0IHRvIG1vcmUgZGF0ZSBpbmZvcm1hdGlvbi4gSW4gc29tZSBsYW5ndWFnZXMsIHRoYXRcbiAgICogY2hhbmdlcyB0aGUgc3RyaW5nLlxuICAgKiBTZWUge0BsaW5rIEluZm8jd2Vla2RheXN9XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbbGVuZ3RoPSdsb25nJ10gLSB0aGUgbGVuZ3RoIG9mIHRoZSBtb250aCByZXByZXNlbnRhdGlvbiwgc3VjaCBhcyBcIm5hcnJvd1wiLCBcInNob3J0XCIsIFwibG9uZ1wiLlxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyAtIG9wdGlvbnNcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLmxvY2FsZT1udWxsXSAtIHRoZSBsb2NhbGUgY29kZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMubnVtYmVyaW5nU3lzdGVtPW51bGxdIC0gdGhlIG51bWJlcmluZyBzeXN0ZW1cbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLmxvY09iaj1udWxsXSAtIGFuIGV4aXN0aW5nIGxvY2FsZSBvYmplY3QgdG8gdXNlXG4gICAqIEByZXR1cm4ge0FycmF5fVxuICAgKi9cbiAgc3RhdGljIHdlZWtkYXlzRm9ybWF0KFxuICAgIGxlbmd0aCA9IFwibG9uZ1wiLFxuICAgIHsgbG9jYWxlID0gbnVsbCwgbnVtYmVyaW5nU3lzdGVtID0gbnVsbCwgbG9jT2JqID0gbnVsbCB9ID0ge31cbiAgKSB7XG4gICAgcmV0dXJuIChsb2NPYmogfHwgTG9jYWxlLmNyZWF0ZShsb2NhbGUsIG51bWJlcmluZ1N5c3RlbSwgbnVsbCkpLndlZWtkYXlzKGxlbmd0aCwgdHJ1ZSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIGFuIGFycmF5IG9mIG1lcmlkaWVtcy5cbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgLSBvcHRpb25zXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5sb2NhbGVdIC0gdGhlIGxvY2FsZSBjb2RlXG4gICAqIEBleGFtcGxlIEluZm8ubWVyaWRpZW1zKCkgLy89PiBbICdBTScsICdQTScgXVxuICAgKiBAZXhhbXBsZSBJbmZvLm1lcmlkaWVtcyh7IGxvY2FsZTogJ215JyB9KSAvLz0+IFsgJ+GAlOGAtuGAlOGAgOGAuicsICfhgIrhgJThgLEnIF1cbiAgICogQHJldHVybiB7QXJyYXl9XG4gICAqL1xuICBzdGF0aWMgbWVyaWRpZW1zKHsgbG9jYWxlID0gbnVsbCB9ID0ge30pIHtcbiAgICByZXR1cm4gTG9jYWxlLmNyZWF0ZShsb2NhbGUpLm1lcmlkaWVtcygpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiBhbiBhcnJheSBvZiBlcmFzLCBzdWNoIGFzIFsnQkMnLCAnQUQnXS4gVGhlIGxvY2FsZSBjYW4gYmUgc3BlY2lmaWVkLCBidXQgdGhlIGNhbGVuZGFyIHN5c3RlbSBpcyBhbHdheXMgR3JlZ29yaWFuLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gW2xlbmd0aD0nc2hvcnQnXSAtIHRoZSBsZW5ndGggb2YgdGhlIGVyYSByZXByZXNlbnRhdGlvbiwgc3VjaCBhcyBcInNob3J0XCIgb3IgXCJsb25nXCIuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIC0gb3B0aW9uc1xuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMubG9jYWxlXSAtIHRoZSBsb2NhbGUgY29kZVxuICAgKiBAZXhhbXBsZSBJbmZvLmVyYXMoKSAvLz0+IFsgJ0JDJywgJ0FEJyBdXG4gICAqIEBleGFtcGxlIEluZm8uZXJhcygnbG9uZycpIC8vPT4gWyAnQmVmb3JlIENocmlzdCcsICdBbm5vIERvbWluaScgXVxuICAgKiBAZXhhbXBsZSBJbmZvLmVyYXMoJ2xvbmcnLCB7IGxvY2FsZTogJ2ZyJyB9KSAvLz0+IFsgJ2F2YW50IErDqXN1cy1DaHJpc3QnLCAnYXByw6hzIErDqXN1cy1DaHJpc3QnIF1cbiAgICogQHJldHVybiB7QXJyYXl9XG4gICAqL1xuICBzdGF0aWMgZXJhcyhsZW5ndGggPSBcInNob3J0XCIsIHsgbG9jYWxlID0gbnVsbCB9ID0ge30pIHtcbiAgICByZXR1cm4gTG9jYWxlLmNyZWF0ZShsb2NhbGUsIG51bGwsIFwiZ3JlZ29yeVwiKS5lcmFzKGxlbmd0aCk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIHRoZSBzZXQgb2YgYXZhaWxhYmxlIGZlYXR1cmVzIGluIHRoaXMgZW52aXJvbm1lbnQuXG4gICAqIFNvbWUgZmVhdHVyZXMgb2YgTHV4b24gYXJlIG5vdCBhdmFpbGFibGUgaW4gYWxsIGVudmlyb25tZW50cy4gRm9yIGV4YW1wbGUsIG9uIG9sZGVyIGJyb3dzZXJzLCByZWxhdGl2ZSB0aW1lIGZvcm1hdHRpbmcgc3VwcG9ydCBpcyBub3QgYXZhaWxhYmxlLiBVc2UgdGhpcyBmdW5jdGlvbiB0byBmaWd1cmUgb3V0IGlmIHRoYXQncyB0aGUgY2FzZS5cbiAgICogS2V5czpcbiAgICogKiBgcmVsYXRpdmVgOiB3aGV0aGVyIHRoaXMgZW52aXJvbm1lbnQgc3VwcG9ydHMgcmVsYXRpdmUgdGltZSBmb3JtYXR0aW5nXG4gICAqIEBleGFtcGxlIEluZm8uZmVhdHVyZXMoKSAvLz0+IHsgcmVsYXRpdmU6IGZhbHNlIH1cbiAgICogQHJldHVybiB7T2JqZWN0fVxuICAgKi9cbiAgc3RhdGljIGZlYXR1cmVzKCkge1xuICAgIHJldHVybiB7IHJlbGF0aXZlOiBoYXNSZWxhdGl2ZSgpIH07XG4gIH1cbn1cblxuZnVuY3Rpb24gZGF5RGlmZihlYXJsaWVyLCBsYXRlcikge1xuICBjb25zdCB1dGNEYXlTdGFydCA9IChkdCkgPT4gZHQudG9VVEMoMCwgeyBrZWVwTG9jYWxUaW1lOiB0cnVlIH0pLnN0YXJ0T2YoXCJkYXlcIikudmFsdWVPZigpLFxuICAgIG1zID0gdXRjRGF5U3RhcnQobGF0ZXIpIC0gdXRjRGF5U3RhcnQoZWFybGllcik7XG4gIHJldHVybiBNYXRoLmZsb29yKER1cmF0aW9uLmZyb21NaWxsaXMobXMpLmFzKFwiZGF5c1wiKSk7XG59XG5cbmZ1bmN0aW9uIGhpZ2hPcmRlckRpZmZzKGN1cnNvciwgbGF0ZXIsIHVuaXRzKSB7XG4gIGNvbnN0IGRpZmZlcnMgPSBbXG4gICAgW1wieWVhcnNcIiwgKGEsIGIpID0+IGIueWVhciAtIGEueWVhcl0sXG4gICAgW1wicXVhcnRlcnNcIiwgKGEsIGIpID0+IGIucXVhcnRlciAtIGEucXVhcnRlciArIChiLnllYXIgLSBhLnllYXIpICogNF0sXG4gICAgW1wibW9udGhzXCIsIChhLCBiKSA9PiBiLm1vbnRoIC0gYS5tb250aCArIChiLnllYXIgLSBhLnllYXIpICogMTJdLFxuICAgIFtcbiAgICAgIFwid2Vla3NcIixcbiAgICAgIChhLCBiKSA9PiB7XG4gICAgICAgIGNvbnN0IGRheXMgPSBkYXlEaWZmKGEsIGIpO1xuICAgICAgICByZXR1cm4gKGRheXMgLSAoZGF5cyAlIDcpKSAvIDc7XG4gICAgICB9LFxuICAgIF0sXG4gICAgW1wiZGF5c1wiLCBkYXlEaWZmXSxcbiAgXTtcblxuICBjb25zdCByZXN1bHRzID0ge307XG4gIGNvbnN0IGVhcmxpZXIgPSBjdXJzb3I7XG4gIGxldCBsb3dlc3RPcmRlciwgaGlnaFdhdGVyO1xuXG4gIGZvciAoY29uc3QgW3VuaXQsIGRpZmZlcl0gb2YgZGlmZmVycykge1xuICAgIGlmICh1bml0cy5pbmRleE9mKHVuaXQpID49IDApIHtcbiAgICAgIGxvd2VzdE9yZGVyID0gdW5pdDtcblxuICAgICAgcmVzdWx0c1t1bml0XSA9IGRpZmZlcihjdXJzb3IsIGxhdGVyKTtcbiAgICAgIGhpZ2hXYXRlciA9IGVhcmxpZXIucGx1cyhyZXN1bHRzKTtcblxuICAgICAgaWYgKGhpZ2hXYXRlciA+IGxhdGVyKSB7XG4gICAgICAgIHJlc3VsdHNbdW5pdF0tLTtcbiAgICAgICAgY3Vyc29yID0gZWFybGllci5wbHVzKHJlc3VsdHMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY3Vyc29yID0gaGlnaFdhdGVyO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBbY3Vyc29yLCByZXN1bHRzLCBoaWdoV2F0ZXIsIGxvd2VzdE9yZGVyXTtcbn1cblxuZnVuY3Rpb24gZGlmZiAoZWFybGllciwgbGF0ZXIsIHVuaXRzLCBvcHRzKSB7XG4gIGxldCBbY3Vyc29yLCByZXN1bHRzLCBoaWdoV2F0ZXIsIGxvd2VzdE9yZGVyXSA9IGhpZ2hPcmRlckRpZmZzKGVhcmxpZXIsIGxhdGVyLCB1bml0cyk7XG5cbiAgY29uc3QgcmVtYWluaW5nTWlsbGlzID0gbGF0ZXIgLSBjdXJzb3I7XG5cbiAgY29uc3QgbG93ZXJPcmRlclVuaXRzID0gdW5pdHMuZmlsdGVyKFxuICAgICh1KSA9PiBbXCJob3Vyc1wiLCBcIm1pbnV0ZXNcIiwgXCJzZWNvbmRzXCIsIFwibWlsbGlzZWNvbmRzXCJdLmluZGV4T2YodSkgPj0gMFxuICApO1xuXG4gIGlmIChsb3dlck9yZGVyVW5pdHMubGVuZ3RoID09PSAwKSB7XG4gICAgaWYgKGhpZ2hXYXRlciA8IGxhdGVyKSB7XG4gICAgICBoaWdoV2F0ZXIgPSBjdXJzb3IucGx1cyh7IFtsb3dlc3RPcmRlcl06IDEgfSk7XG4gICAgfVxuXG4gICAgaWYgKGhpZ2hXYXRlciAhPT0gY3Vyc29yKSB7XG4gICAgICByZXN1bHRzW2xvd2VzdE9yZGVyXSA9IChyZXN1bHRzW2xvd2VzdE9yZGVyXSB8fCAwKSArIHJlbWFpbmluZ01pbGxpcyAvIChoaWdoV2F0ZXIgLSBjdXJzb3IpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGR1cmF0aW9uID0gRHVyYXRpb24uZnJvbU9iamVjdChyZXN1bHRzLCBvcHRzKTtcblxuICBpZiAobG93ZXJPcmRlclVuaXRzLmxlbmd0aCA+IDApIHtcbiAgICByZXR1cm4gRHVyYXRpb24uZnJvbU1pbGxpcyhyZW1haW5pbmdNaWxsaXMsIG9wdHMpXG4gICAgICAuc2hpZnRUbyguLi5sb3dlck9yZGVyVW5pdHMpXG4gICAgICAucGx1cyhkdXJhdGlvbik7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGR1cmF0aW9uO1xuICB9XG59XG5cbmNvbnN0IG51bWJlcmluZ1N5c3RlbXMgPSB7XG4gIGFyYWI6IFwiW1xcdTA2NjAtXFx1MDY2OV1cIixcbiAgYXJhYmV4dDogXCJbXFx1MDZGMC1cXHUwNkY5XVwiLFxuICBiYWxpOiBcIltcXHUxQjUwLVxcdTFCNTldXCIsXG4gIGJlbmc6IFwiW1xcdTA5RTYtXFx1MDlFRl1cIixcbiAgZGV2YTogXCJbXFx1MDk2Ni1cXHUwOTZGXVwiLFxuICBmdWxsd2lkZTogXCJbXFx1RkYxMC1cXHVGRjE5XVwiLFxuICBndWpyOiBcIltcXHUwQUU2LVxcdTBBRUZdXCIsXG4gIGhhbmlkZWM6IFwiW+OAh3zkuIB85LqMfOS4iXzlm5t85LqUfOWFrXzkuIN85YWrfOS5nV1cIixcbiAga2htcjogXCJbXFx1MTdFMC1cXHUxN0U5XVwiLFxuICBrbmRhOiBcIltcXHUwQ0U2LVxcdTBDRUZdXCIsXG4gIGxhb286IFwiW1xcdTBFRDAtXFx1MEVEOV1cIixcbiAgbGltYjogXCJbXFx1MTk0Ni1cXHUxOTRGXVwiLFxuICBtbHltOiBcIltcXHUwRDY2LVxcdTBENkZdXCIsXG4gIG1vbmc6IFwiW1xcdTE4MTAtXFx1MTgxOV1cIixcbiAgbXltcjogXCJbXFx1MTA0MC1cXHUxMDQ5XVwiLFxuICBvcnlhOiBcIltcXHUwQjY2LVxcdTBCNkZdXCIsXG4gIHRhbWxkZWM6IFwiW1xcdTBCRTYtXFx1MEJFRl1cIixcbiAgdGVsdTogXCJbXFx1MEM2Ni1cXHUwQzZGXVwiLFxuICB0aGFpOiBcIltcXHUwRTUwLVxcdTBFNTldXCIsXG4gIHRpYnQ6IFwiW1xcdTBGMjAtXFx1MEYyOV1cIixcbiAgbGF0bjogXCJcXFxcZFwiLFxufTtcblxuY29uc3QgbnVtYmVyaW5nU3lzdGVtc1VURjE2ID0ge1xuICBhcmFiOiBbMTYzMiwgMTY0MV0sXG4gIGFyYWJleHQ6IFsxNzc2LCAxNzg1XSxcbiAgYmFsaTogWzY5OTIsIDcwMDFdLFxuICBiZW5nOiBbMjUzNCwgMjU0M10sXG4gIGRldmE6IFsyNDA2LCAyNDE1XSxcbiAgZnVsbHdpZGU6IFs2NTI5NiwgNjUzMDNdLFxuICBndWpyOiBbMjc5MCwgMjc5OV0sXG4gIGtobXI6IFs2MTEyLCA2MTIxXSxcbiAga25kYTogWzMzMDIsIDMzMTFdLFxuICBsYW9vOiBbMzc5MiwgMzgwMV0sXG4gIGxpbWI6IFs2NDcwLCA2NDc5XSxcbiAgbWx5bTogWzM0MzAsIDM0MzldLFxuICBtb25nOiBbNjE2MCwgNjE2OV0sXG4gIG15bXI6IFs0MTYwLCA0MTY5XSxcbiAgb3J5YTogWzI5MTgsIDI5MjddLFxuICB0YW1sZGVjOiBbMzA0NiwgMzA1NV0sXG4gIHRlbHU6IFszMTc0LCAzMTgzXSxcbiAgdGhhaTogWzM2NjQsIDM2NzNdLFxuICB0aWJ0OiBbMzg3MiwgMzg4MV0sXG59O1xuXG5jb25zdCBoYW5pZGVjQ2hhcnMgPSBudW1iZXJpbmdTeXN0ZW1zLmhhbmlkZWMucmVwbGFjZSgvW1xcW3xcXF1dL2csIFwiXCIpLnNwbGl0KFwiXCIpO1xuXG5mdW5jdGlvbiBwYXJzZURpZ2l0cyhzdHIpIHtcbiAgbGV0IHZhbHVlID0gcGFyc2VJbnQoc3RyLCAxMCk7XG4gIGlmIChpc05hTih2YWx1ZSkpIHtcbiAgICB2YWx1ZSA9IFwiXCI7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGNvZGUgPSBzdHIuY2hhckNvZGVBdChpKTtcblxuICAgICAgaWYgKHN0cltpXS5zZWFyY2gobnVtYmVyaW5nU3lzdGVtcy5oYW5pZGVjKSAhPT0gLTEpIHtcbiAgICAgICAgdmFsdWUgKz0gaGFuaWRlY0NoYXJzLmluZGV4T2Yoc3RyW2ldKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIG51bWJlcmluZ1N5c3RlbXNVVEYxNikge1xuICAgICAgICAgIGNvbnN0IFttaW4sIG1heF0gPSBudW1iZXJpbmdTeXN0ZW1zVVRGMTZba2V5XTtcbiAgICAgICAgICBpZiAoY29kZSA+PSBtaW4gJiYgY29kZSA8PSBtYXgpIHtcbiAgICAgICAgICAgIHZhbHVlICs9IGNvZGUgLSBtaW47XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBwYXJzZUludCh2YWx1ZSwgMTApO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBkaWdpdFJlZ2V4KHsgbnVtYmVyaW5nU3lzdGVtIH0sIGFwcGVuZCA9IFwiXCIpIHtcbiAgcmV0dXJuIG5ldyBSZWdFeHAoYCR7bnVtYmVyaW5nU3lzdGVtc1tudW1iZXJpbmdTeXN0ZW0gfHwgXCJsYXRuXCJdfSR7YXBwZW5kfWApO1xufVxuXG5jb25zdCBNSVNTSU5HX0ZUUCA9IFwibWlzc2luZyBJbnRsLkRhdGVUaW1lRm9ybWF0LmZvcm1hdFRvUGFydHMgc3VwcG9ydFwiO1xuXG5mdW5jdGlvbiBpbnRVbml0KHJlZ2V4LCBwb3N0ID0gKGkpID0+IGkpIHtcbiAgcmV0dXJuIHsgcmVnZXgsIGRlc2VyOiAoW3NdKSA9PiBwb3N0KHBhcnNlRGlnaXRzKHMpKSB9O1xufVxuXG5jb25zdCBOQlNQID0gU3RyaW5nLmZyb21DaGFyQ29kZSgxNjApO1xuY29uc3Qgc3BhY2VPck5CU1AgPSBgWyAke05CU1B9XWA7XG5jb25zdCBzcGFjZU9yTkJTUFJlZ0V4cCA9IG5ldyBSZWdFeHAoc3BhY2VPck5CU1AsIFwiZ1wiKTtcblxuZnVuY3Rpb24gZml4TGlzdFJlZ2V4KHMpIHtcbiAgLy8gbWFrZSBkb3RzIG9wdGlvbmFsIGFuZCBhbHNvIG1ha2UgdGhlbSBsaXRlcmFsXG4gIC8vIG1ha2Ugc3BhY2UgYW5kIG5vbiBicmVha2FibGUgc3BhY2UgY2hhcmFjdGVycyBpbnRlcmNoYW5nZWFibGVcbiAgcmV0dXJuIHMucmVwbGFjZSgvXFwuL2csIFwiXFxcXC4/XCIpLnJlcGxhY2Uoc3BhY2VPck5CU1BSZWdFeHAsIHNwYWNlT3JOQlNQKTtcbn1cblxuZnVuY3Rpb24gc3RyaXBJbnNlbnNpdGl2aXRpZXMocykge1xuICByZXR1cm4gc1xuICAgIC5yZXBsYWNlKC9cXC4vZywgXCJcIikgLy8gaWdub3JlIGRvdHMgdGhhdCB3ZXJlIG1hZGUgb3B0aW9uYWxcbiAgICAucmVwbGFjZShzcGFjZU9yTkJTUFJlZ0V4cCwgXCIgXCIpIC8vIGludGVyY2hhbmdlIHNwYWNlIGFuZCBuYnNwXG4gICAgLnRvTG93ZXJDYXNlKCk7XG59XG5cbmZ1bmN0aW9uIG9uZU9mKHN0cmluZ3MsIHN0YXJ0SW5kZXgpIHtcbiAgaWYgKHN0cmluZ3MgPT09IG51bGwpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4ge1xuICAgICAgcmVnZXg6IFJlZ0V4cChzdHJpbmdzLm1hcChmaXhMaXN0UmVnZXgpLmpvaW4oXCJ8XCIpKSxcbiAgICAgIGRlc2VyOiAoW3NdKSA9PlxuICAgICAgICBzdHJpbmdzLmZpbmRJbmRleCgoaSkgPT4gc3RyaXBJbnNlbnNpdGl2aXRpZXMocykgPT09IHN0cmlwSW5zZW5zaXRpdml0aWVzKGkpKSArIHN0YXJ0SW5kZXgsXG4gICAgfTtcbiAgfVxufVxuXG5mdW5jdGlvbiBvZmZzZXQocmVnZXgsIGdyb3Vwcykge1xuICByZXR1cm4geyByZWdleCwgZGVzZXI6IChbLCBoLCBtXSkgPT4gc2lnbmVkT2Zmc2V0KGgsIG0pLCBncm91cHMgfTtcbn1cblxuZnVuY3Rpb24gc2ltcGxlKHJlZ2V4KSB7XG4gIHJldHVybiB7IHJlZ2V4LCBkZXNlcjogKFtzXSkgPT4gcyB9O1xufVxuXG5mdW5jdGlvbiBlc2NhcGVUb2tlbih2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUucmVwbGFjZSgvW1xcLVxcW1xcXXt9KCkqKz8uLFxcXFxcXF4kfCNcXHNdL2csIFwiXFxcXCQmXCIpO1xufVxuXG5mdW5jdGlvbiB1bml0Rm9yVG9rZW4odG9rZW4sIGxvYykge1xuICBjb25zdCBvbmUgPSBkaWdpdFJlZ2V4KGxvYyksXG4gICAgdHdvID0gZGlnaXRSZWdleChsb2MsIFwiezJ9XCIpLFxuICAgIHRocmVlID0gZGlnaXRSZWdleChsb2MsIFwiezN9XCIpLFxuICAgIGZvdXIgPSBkaWdpdFJlZ2V4KGxvYywgXCJ7NH1cIiksXG4gICAgc2l4ID0gZGlnaXRSZWdleChsb2MsIFwiezZ9XCIpLFxuICAgIG9uZU9yVHdvID0gZGlnaXRSZWdleChsb2MsIFwiezEsMn1cIiksXG4gICAgb25lVG9UaHJlZSA9IGRpZ2l0UmVnZXgobG9jLCBcInsxLDN9XCIpLFxuICAgIG9uZVRvU2l4ID0gZGlnaXRSZWdleChsb2MsIFwiezEsNn1cIiksXG4gICAgb25lVG9OaW5lID0gZGlnaXRSZWdleChsb2MsIFwiezEsOX1cIiksXG4gICAgdHdvVG9Gb3VyID0gZGlnaXRSZWdleChsb2MsIFwiezIsNH1cIiksXG4gICAgZm91clRvU2l4ID0gZGlnaXRSZWdleChsb2MsIFwiezQsNn1cIiksXG4gICAgbGl0ZXJhbCA9ICh0KSA9PiAoeyByZWdleDogUmVnRXhwKGVzY2FwZVRva2VuKHQudmFsKSksIGRlc2VyOiAoW3NdKSA9PiBzLCBsaXRlcmFsOiB0cnVlIH0pLFxuICAgIHVuaXRhdGUgPSAodCkgPT4ge1xuICAgICAgaWYgKHRva2VuLmxpdGVyYWwpIHtcbiAgICAgICAgcmV0dXJuIGxpdGVyYWwodCk7XG4gICAgICB9XG4gICAgICBzd2l0Y2ggKHQudmFsKSB7XG4gICAgICAgIC8vIGVyYVxuICAgICAgICBjYXNlIFwiR1wiOlxuICAgICAgICAgIHJldHVybiBvbmVPZihsb2MuZXJhcyhcInNob3J0XCIsIGZhbHNlKSwgMCk7XG4gICAgICAgIGNhc2UgXCJHR1wiOlxuICAgICAgICAgIHJldHVybiBvbmVPZihsb2MuZXJhcyhcImxvbmdcIiwgZmFsc2UpLCAwKTtcbiAgICAgICAgLy8geWVhcnNcbiAgICAgICAgY2FzZSBcInlcIjpcbiAgICAgICAgICByZXR1cm4gaW50VW5pdChvbmVUb1NpeCk7XG4gICAgICAgIGNhc2UgXCJ5eVwiOlxuICAgICAgICAgIHJldHVybiBpbnRVbml0KHR3b1RvRm91ciwgdW50cnVuY2F0ZVllYXIpO1xuICAgICAgICBjYXNlIFwieXl5eVwiOlxuICAgICAgICAgIHJldHVybiBpbnRVbml0KGZvdXIpO1xuICAgICAgICBjYXNlIFwieXl5eXlcIjpcbiAgICAgICAgICByZXR1cm4gaW50VW5pdChmb3VyVG9TaXgpO1xuICAgICAgICBjYXNlIFwieXl5eXl5XCI6XG4gICAgICAgICAgcmV0dXJuIGludFVuaXQoc2l4KTtcbiAgICAgICAgLy8gbW9udGhzXG4gICAgICAgIGNhc2UgXCJNXCI6XG4gICAgICAgICAgcmV0dXJuIGludFVuaXQob25lT3JUd28pO1xuICAgICAgICBjYXNlIFwiTU1cIjpcbiAgICAgICAgICByZXR1cm4gaW50VW5pdCh0d28pO1xuICAgICAgICBjYXNlIFwiTU1NXCI6XG4gICAgICAgICAgcmV0dXJuIG9uZU9mKGxvYy5tb250aHMoXCJzaG9ydFwiLCB0cnVlLCBmYWxzZSksIDEpO1xuICAgICAgICBjYXNlIFwiTU1NTVwiOlxuICAgICAgICAgIHJldHVybiBvbmVPZihsb2MubW9udGhzKFwibG9uZ1wiLCB0cnVlLCBmYWxzZSksIDEpO1xuICAgICAgICBjYXNlIFwiTFwiOlxuICAgICAgICAgIHJldHVybiBpbnRVbml0KG9uZU9yVHdvKTtcbiAgICAgICAgY2FzZSBcIkxMXCI6XG4gICAgICAgICAgcmV0dXJuIGludFVuaXQodHdvKTtcbiAgICAgICAgY2FzZSBcIkxMTFwiOlxuICAgICAgICAgIHJldHVybiBvbmVPZihsb2MubW9udGhzKFwic2hvcnRcIiwgZmFsc2UsIGZhbHNlKSwgMSk7XG4gICAgICAgIGNhc2UgXCJMTExMXCI6XG4gICAgICAgICAgcmV0dXJuIG9uZU9mKGxvYy5tb250aHMoXCJsb25nXCIsIGZhbHNlLCBmYWxzZSksIDEpO1xuICAgICAgICAvLyBkYXRlc1xuICAgICAgICBjYXNlIFwiZFwiOlxuICAgICAgICAgIHJldHVybiBpbnRVbml0KG9uZU9yVHdvKTtcbiAgICAgICAgY2FzZSBcImRkXCI6XG4gICAgICAgICAgcmV0dXJuIGludFVuaXQodHdvKTtcbiAgICAgICAgLy8gb3JkaW5hbHNcbiAgICAgICAgY2FzZSBcIm9cIjpcbiAgICAgICAgICByZXR1cm4gaW50VW5pdChvbmVUb1RocmVlKTtcbiAgICAgICAgY2FzZSBcIm9vb1wiOlxuICAgICAgICAgIHJldHVybiBpbnRVbml0KHRocmVlKTtcbiAgICAgICAgLy8gdGltZVxuICAgICAgICBjYXNlIFwiSEhcIjpcbiAgICAgICAgICByZXR1cm4gaW50VW5pdCh0d28pO1xuICAgICAgICBjYXNlIFwiSFwiOlxuICAgICAgICAgIHJldHVybiBpbnRVbml0KG9uZU9yVHdvKTtcbiAgICAgICAgY2FzZSBcImhoXCI6XG4gICAgICAgICAgcmV0dXJuIGludFVuaXQodHdvKTtcbiAgICAgICAgY2FzZSBcImhcIjpcbiAgICAgICAgICByZXR1cm4gaW50VW5pdChvbmVPclR3byk7XG4gICAgICAgIGNhc2UgXCJtbVwiOlxuICAgICAgICAgIHJldHVybiBpbnRVbml0KHR3byk7XG4gICAgICAgIGNhc2UgXCJtXCI6XG4gICAgICAgICAgcmV0dXJuIGludFVuaXQob25lT3JUd28pO1xuICAgICAgICBjYXNlIFwicVwiOlxuICAgICAgICAgIHJldHVybiBpbnRVbml0KG9uZU9yVHdvKTtcbiAgICAgICAgY2FzZSBcInFxXCI6XG4gICAgICAgICAgcmV0dXJuIGludFVuaXQodHdvKTtcbiAgICAgICAgY2FzZSBcInNcIjpcbiAgICAgICAgICByZXR1cm4gaW50VW5pdChvbmVPclR3byk7XG4gICAgICAgIGNhc2UgXCJzc1wiOlxuICAgICAgICAgIHJldHVybiBpbnRVbml0KHR3byk7XG4gICAgICAgIGNhc2UgXCJTXCI6XG4gICAgICAgICAgcmV0dXJuIGludFVuaXQob25lVG9UaHJlZSk7XG4gICAgICAgIGNhc2UgXCJTU1NcIjpcbiAgICAgICAgICByZXR1cm4gaW50VW5pdCh0aHJlZSk7XG4gICAgICAgIGNhc2UgXCJ1XCI6XG4gICAgICAgICAgcmV0dXJuIHNpbXBsZShvbmVUb05pbmUpO1xuICAgICAgICBjYXNlIFwidXVcIjpcbiAgICAgICAgICByZXR1cm4gc2ltcGxlKG9uZU9yVHdvKTtcbiAgICAgICAgY2FzZSBcInV1dVwiOlxuICAgICAgICAgIHJldHVybiBpbnRVbml0KG9uZSk7XG4gICAgICAgIC8vIG1lcmlkaWVtXG4gICAgICAgIGNhc2UgXCJhXCI6XG4gICAgICAgICAgcmV0dXJuIG9uZU9mKGxvYy5tZXJpZGllbXMoKSwgMCk7XG4gICAgICAgIC8vIHdlZWtZZWFyIChrKVxuICAgICAgICBjYXNlIFwia2tra1wiOlxuICAgICAgICAgIHJldHVybiBpbnRVbml0KGZvdXIpO1xuICAgICAgICBjYXNlIFwia2tcIjpcbiAgICAgICAgICByZXR1cm4gaW50VW5pdCh0d29Ub0ZvdXIsIHVudHJ1bmNhdGVZZWFyKTtcbiAgICAgICAgLy8gd2Vla051bWJlciAoVylcbiAgICAgICAgY2FzZSBcIldcIjpcbiAgICAgICAgICByZXR1cm4gaW50VW5pdChvbmVPclR3byk7XG4gICAgICAgIGNhc2UgXCJXV1wiOlxuICAgICAgICAgIHJldHVybiBpbnRVbml0KHR3byk7XG4gICAgICAgIC8vIHdlZWtkYXlzXG4gICAgICAgIGNhc2UgXCJFXCI6XG4gICAgICAgIGNhc2UgXCJjXCI6XG4gICAgICAgICAgcmV0dXJuIGludFVuaXQob25lKTtcbiAgICAgICAgY2FzZSBcIkVFRVwiOlxuICAgICAgICAgIHJldHVybiBvbmVPZihsb2Mud2Vla2RheXMoXCJzaG9ydFwiLCBmYWxzZSwgZmFsc2UpLCAxKTtcbiAgICAgICAgY2FzZSBcIkVFRUVcIjpcbiAgICAgICAgICByZXR1cm4gb25lT2YobG9jLndlZWtkYXlzKFwibG9uZ1wiLCBmYWxzZSwgZmFsc2UpLCAxKTtcbiAgICAgICAgY2FzZSBcImNjY1wiOlxuICAgICAgICAgIHJldHVybiBvbmVPZihsb2Mud2Vla2RheXMoXCJzaG9ydFwiLCB0cnVlLCBmYWxzZSksIDEpO1xuICAgICAgICBjYXNlIFwiY2NjY1wiOlxuICAgICAgICAgIHJldHVybiBvbmVPZihsb2Mud2Vla2RheXMoXCJsb25nXCIsIHRydWUsIGZhbHNlKSwgMSk7XG4gICAgICAgIC8vIG9mZnNldC96b25lXG4gICAgICAgIGNhc2UgXCJaXCI6XG4gICAgICAgIGNhc2UgXCJaWlwiOlxuICAgICAgICAgIHJldHVybiBvZmZzZXQobmV3IFJlZ0V4cChgKFsrLV0ke29uZU9yVHdvLnNvdXJjZX0pKD86Oigke3R3by5zb3VyY2V9KSk/YCksIDIpO1xuICAgICAgICBjYXNlIFwiWlpaXCI6XG4gICAgICAgICAgcmV0dXJuIG9mZnNldChuZXcgUmVnRXhwKGAoWystXSR7b25lT3JUd28uc291cmNlfSkoJHt0d28uc291cmNlfSk/YCksIDIpO1xuICAgICAgICAvLyB3ZSBkb24ndCBzdXBwb3J0IFpaWlogKFBTVCkgb3IgWlpaWlogKFBhY2lmaWMgU3RhbmRhcmQgVGltZSkgaW4gcGFyc2luZ1xuICAgICAgICAvLyBiZWNhdXNlIHdlIGRvbid0IGhhdmUgYW55IHdheSB0byBmaWd1cmUgb3V0IHdoYXQgdGhleSBhcmVcbiAgICAgICAgY2FzZSBcInpcIjpcbiAgICAgICAgICByZXR1cm4gc2ltcGxlKC9bYS16XystL117MSwyNTZ9Py9pKTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZXR1cm4gbGl0ZXJhbCh0KTtcbiAgICAgIH1cbiAgICB9O1xuXG4gIGNvbnN0IHVuaXQgPSB1bml0YXRlKHRva2VuKSB8fCB7XG4gICAgaW52YWxpZFJlYXNvbjogTUlTU0lOR19GVFAsXG4gIH07XG5cbiAgdW5pdC50b2tlbiA9IHRva2VuO1xuXG4gIHJldHVybiB1bml0O1xufVxuXG5jb25zdCBwYXJ0VHlwZVN0eWxlVG9Ub2tlblZhbCA9IHtcbiAgeWVhcjoge1xuICAgIFwiMi1kaWdpdFwiOiBcInl5XCIsXG4gICAgbnVtZXJpYzogXCJ5eXl5eVwiLFxuICB9LFxuICBtb250aDoge1xuICAgIG51bWVyaWM6IFwiTVwiLFxuICAgIFwiMi1kaWdpdFwiOiBcIk1NXCIsXG4gICAgc2hvcnQ6IFwiTU1NXCIsXG4gICAgbG9uZzogXCJNTU1NXCIsXG4gIH0sXG4gIGRheToge1xuICAgIG51bWVyaWM6IFwiZFwiLFxuICAgIFwiMi1kaWdpdFwiOiBcImRkXCIsXG4gIH0sXG4gIHdlZWtkYXk6IHtcbiAgICBzaG9ydDogXCJFRUVcIixcbiAgICBsb25nOiBcIkVFRUVcIixcbiAgfSxcbiAgZGF5cGVyaW9kOiBcImFcIixcbiAgZGF5UGVyaW9kOiBcImFcIixcbiAgaG91cjoge1xuICAgIG51bWVyaWM6IFwiaFwiLFxuICAgIFwiMi1kaWdpdFwiOiBcImhoXCIsXG4gIH0sXG4gIG1pbnV0ZToge1xuICAgIG51bWVyaWM6IFwibVwiLFxuICAgIFwiMi1kaWdpdFwiOiBcIm1tXCIsXG4gIH0sXG4gIHNlY29uZDoge1xuICAgIG51bWVyaWM6IFwic1wiLFxuICAgIFwiMi1kaWdpdFwiOiBcInNzXCIsXG4gIH0sXG4gIHRpbWVab25lTmFtZToge1xuICAgIGxvbmc6IFwiWlpaWlpcIixcbiAgICBzaG9ydDogXCJaWlpcIixcbiAgfSxcbn07XG5cbmZ1bmN0aW9uIHRva2VuRm9yUGFydChwYXJ0LCBmb3JtYXRPcHRzKSB7XG4gIGNvbnN0IHsgdHlwZSwgdmFsdWUgfSA9IHBhcnQ7XG5cbiAgaWYgKHR5cGUgPT09IFwibGl0ZXJhbFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGxpdGVyYWw6IHRydWUsXG4gICAgICB2YWw6IHZhbHVlLFxuICAgIH07XG4gIH1cblxuICBjb25zdCBzdHlsZSA9IGZvcm1hdE9wdHNbdHlwZV07XG5cbiAgbGV0IHZhbCA9IHBhcnRUeXBlU3R5bGVUb1Rva2VuVmFsW3R5cGVdO1xuICBpZiAodHlwZW9mIHZhbCA9PT0gXCJvYmplY3RcIikge1xuICAgIHZhbCA9IHZhbFtzdHlsZV07XG4gIH1cblxuICBpZiAodmFsKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGxpdGVyYWw6IGZhbHNlLFxuICAgICAgdmFsLFxuICAgIH07XG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBidWlsZFJlZ2V4KHVuaXRzKSB7XG4gIGNvbnN0IHJlID0gdW5pdHMubWFwKCh1KSA9PiB1LnJlZ2V4KS5yZWR1Y2UoKGYsIHIpID0+IGAke2Z9KCR7ci5zb3VyY2V9KWAsIFwiXCIpO1xuICByZXR1cm4gW2BeJHtyZX0kYCwgdW5pdHNdO1xufVxuXG5mdW5jdGlvbiBtYXRjaChpbnB1dCwgcmVnZXgsIGhhbmRsZXJzKSB7XG4gIGNvbnN0IG1hdGNoZXMgPSBpbnB1dC5tYXRjaChyZWdleCk7XG5cbiAgaWYgKG1hdGNoZXMpIHtcbiAgICBjb25zdCBhbGwgPSB7fTtcbiAgICBsZXQgbWF0Y2hJbmRleCA9IDE7XG4gICAgZm9yIChjb25zdCBpIGluIGhhbmRsZXJzKSB7XG4gICAgICBpZiAoaGFzT3duUHJvcGVydHkoaGFuZGxlcnMsIGkpKSB7XG4gICAgICAgIGNvbnN0IGggPSBoYW5kbGVyc1tpXSxcbiAgICAgICAgICBncm91cHMgPSBoLmdyb3VwcyA/IGguZ3JvdXBzICsgMSA6IDE7XG4gICAgICAgIGlmICghaC5saXRlcmFsICYmIGgudG9rZW4pIHtcbiAgICAgICAgICBhbGxbaC50b2tlbi52YWxbMF1dID0gaC5kZXNlcihtYXRjaGVzLnNsaWNlKG1hdGNoSW5kZXgsIG1hdGNoSW5kZXggKyBncm91cHMpKTtcbiAgICAgICAgfVxuICAgICAgICBtYXRjaEluZGV4ICs9IGdyb3VwcztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIFttYXRjaGVzLCBhbGxdO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBbbWF0Y2hlcywge31dO1xuICB9XG59XG5cbmZ1bmN0aW9uIGRhdGVUaW1lRnJvbU1hdGNoZXMobWF0Y2hlcykge1xuICBjb25zdCB0b0ZpZWxkID0gKHRva2VuKSA9PiB7XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSBcIlNcIjpcbiAgICAgICAgcmV0dXJuIFwibWlsbGlzZWNvbmRcIjtcbiAgICAgIGNhc2UgXCJzXCI6XG4gICAgICAgIHJldHVybiBcInNlY29uZFwiO1xuICAgICAgY2FzZSBcIm1cIjpcbiAgICAgICAgcmV0dXJuIFwibWludXRlXCI7XG4gICAgICBjYXNlIFwiaFwiOlxuICAgICAgY2FzZSBcIkhcIjpcbiAgICAgICAgcmV0dXJuIFwiaG91clwiO1xuICAgICAgY2FzZSBcImRcIjpcbiAgICAgICAgcmV0dXJuIFwiZGF5XCI7XG4gICAgICBjYXNlIFwib1wiOlxuICAgICAgICByZXR1cm4gXCJvcmRpbmFsXCI7XG4gICAgICBjYXNlIFwiTFwiOlxuICAgICAgY2FzZSBcIk1cIjpcbiAgICAgICAgcmV0dXJuIFwibW9udGhcIjtcbiAgICAgIGNhc2UgXCJ5XCI6XG4gICAgICAgIHJldHVybiBcInllYXJcIjtcbiAgICAgIGNhc2UgXCJFXCI6XG4gICAgICBjYXNlIFwiY1wiOlxuICAgICAgICByZXR1cm4gXCJ3ZWVrZGF5XCI7XG4gICAgICBjYXNlIFwiV1wiOlxuICAgICAgICByZXR1cm4gXCJ3ZWVrTnVtYmVyXCI7XG4gICAgICBjYXNlIFwia1wiOlxuICAgICAgICByZXR1cm4gXCJ3ZWVrWWVhclwiO1xuICAgICAgY2FzZSBcInFcIjpcbiAgICAgICAgcmV0dXJuIFwicXVhcnRlclwiO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9O1xuXG4gIGxldCB6b25lID0gbnVsbDtcbiAgbGV0IHNwZWNpZmljT2Zmc2V0O1xuICBpZiAoIWlzVW5kZWZpbmVkKG1hdGNoZXMueikpIHtcbiAgICB6b25lID0gSUFOQVpvbmUuY3JlYXRlKG1hdGNoZXMueik7XG4gIH1cblxuICBpZiAoIWlzVW5kZWZpbmVkKG1hdGNoZXMuWikpIHtcbiAgICBpZiAoIXpvbmUpIHtcbiAgICAgIHpvbmUgPSBuZXcgRml4ZWRPZmZzZXRab25lKG1hdGNoZXMuWik7XG4gICAgfVxuICAgIHNwZWNpZmljT2Zmc2V0ID0gbWF0Y2hlcy5aO1xuICB9XG5cbiAgaWYgKCFpc1VuZGVmaW5lZChtYXRjaGVzLnEpKSB7XG4gICAgbWF0Y2hlcy5NID0gKG1hdGNoZXMucSAtIDEpICogMyArIDE7XG4gIH1cblxuICBpZiAoIWlzVW5kZWZpbmVkKG1hdGNoZXMuaCkpIHtcbiAgICBpZiAobWF0Y2hlcy5oIDwgMTIgJiYgbWF0Y2hlcy5hID09PSAxKSB7XG4gICAgICBtYXRjaGVzLmggKz0gMTI7XG4gICAgfSBlbHNlIGlmIChtYXRjaGVzLmggPT09IDEyICYmIG1hdGNoZXMuYSA9PT0gMCkge1xuICAgICAgbWF0Y2hlcy5oID0gMDtcbiAgICB9XG4gIH1cblxuICBpZiAobWF0Y2hlcy5HID09PSAwICYmIG1hdGNoZXMueSkge1xuICAgIG1hdGNoZXMueSA9IC1tYXRjaGVzLnk7XG4gIH1cblxuICBpZiAoIWlzVW5kZWZpbmVkKG1hdGNoZXMudSkpIHtcbiAgICBtYXRjaGVzLlMgPSBwYXJzZU1pbGxpcyhtYXRjaGVzLnUpO1xuICB9XG5cbiAgY29uc3QgdmFscyA9IE9iamVjdC5rZXlzKG1hdGNoZXMpLnJlZHVjZSgociwgaykgPT4ge1xuICAgIGNvbnN0IGYgPSB0b0ZpZWxkKGspO1xuICAgIGlmIChmKSB7XG4gICAgICByW2ZdID0gbWF0Y2hlc1trXTtcbiAgICB9XG5cbiAgICByZXR1cm4gcjtcbiAgfSwge30pO1xuXG4gIHJldHVybiBbdmFscywgem9uZSwgc3BlY2lmaWNPZmZzZXRdO1xufVxuXG5sZXQgZHVtbXlEYXRlVGltZUNhY2hlID0gbnVsbDtcblxuZnVuY3Rpb24gZ2V0RHVtbXlEYXRlVGltZSgpIHtcbiAgaWYgKCFkdW1teURhdGVUaW1lQ2FjaGUpIHtcbiAgICBkdW1teURhdGVUaW1lQ2FjaGUgPSBEYXRlVGltZS5mcm9tTWlsbGlzKDE1NTU1NTU1NTU1NTUpO1xuICB9XG5cbiAgcmV0dXJuIGR1bW15RGF0ZVRpbWVDYWNoZTtcbn1cblxuZnVuY3Rpb24gbWF5YmVFeHBhbmRNYWNyb1Rva2VuKHRva2VuLCBsb2NhbGUpIHtcbiAgaWYgKHRva2VuLmxpdGVyYWwpIHtcbiAgICByZXR1cm4gdG9rZW47XG4gIH1cblxuICBjb25zdCBmb3JtYXRPcHRzID0gRm9ybWF0dGVyLm1hY3JvVG9rZW5Ub0Zvcm1hdE9wdHModG9rZW4udmFsKTtcbiAgY29uc3QgdG9rZW5zID0gZm9ybWF0T3B0c1RvVG9rZW5zKGZvcm1hdE9wdHMsIGxvY2FsZSk7XG5cbiAgaWYgKHRva2VucyA9PSBudWxsIHx8IHRva2Vucy5pbmNsdWRlcyh1bmRlZmluZWQpKSB7XG4gICAgcmV0dXJuIHRva2VuO1xuICB9XG5cbiAgcmV0dXJuIHRva2Vucztcbn1cblxuZnVuY3Rpb24gZXhwYW5kTWFjcm9Ub2tlbnModG9rZW5zLCBsb2NhbGUpIHtcbiAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5jb25jYXQoLi4udG9rZW5zLm1hcCgodCkgPT4gbWF5YmVFeHBhbmRNYWNyb1Rva2VuKHQsIGxvY2FsZSkpKTtcbn1cblxuLyoqXG4gKiBAcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIGV4cGxhaW5Gcm9tVG9rZW5zKGxvY2FsZSwgaW5wdXQsIGZvcm1hdCkge1xuICBjb25zdCB0b2tlbnMgPSBleHBhbmRNYWNyb1Rva2VucyhGb3JtYXR0ZXIucGFyc2VGb3JtYXQoZm9ybWF0KSwgbG9jYWxlKSxcbiAgICB1bml0cyA9IHRva2Vucy5tYXAoKHQpID0+IHVuaXRGb3JUb2tlbih0LCBsb2NhbGUpKSxcbiAgICBkaXNxdWFsaWZ5aW5nVW5pdCA9IHVuaXRzLmZpbmQoKHQpID0+IHQuaW52YWxpZFJlYXNvbik7XG5cbiAgaWYgKGRpc3F1YWxpZnlpbmdVbml0KSB7XG4gICAgcmV0dXJuIHsgaW5wdXQsIHRva2VucywgaW52YWxpZFJlYXNvbjogZGlzcXVhbGlmeWluZ1VuaXQuaW52YWxpZFJlYXNvbiB9O1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IFtyZWdleFN0cmluZywgaGFuZGxlcnNdID0gYnVpbGRSZWdleCh1bml0cyksXG4gICAgICByZWdleCA9IFJlZ0V4cChyZWdleFN0cmluZywgXCJpXCIpLFxuICAgICAgW3Jhd01hdGNoZXMsIG1hdGNoZXNdID0gbWF0Y2goaW5wdXQsIHJlZ2V4LCBoYW5kbGVycyksXG4gICAgICBbcmVzdWx0LCB6b25lLCBzcGVjaWZpY09mZnNldF0gPSBtYXRjaGVzXG4gICAgICAgID8gZGF0ZVRpbWVGcm9tTWF0Y2hlcyhtYXRjaGVzKVxuICAgICAgICA6IFtudWxsLCBudWxsLCB1bmRlZmluZWRdO1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eShtYXRjaGVzLCBcImFcIikgJiYgaGFzT3duUHJvcGVydHkobWF0Y2hlcywgXCJIXCIpKSB7XG4gICAgICB0aHJvdyBuZXcgQ29uZmxpY3RpbmdTcGVjaWZpY2F0aW9uRXJyb3IoXG4gICAgICAgIFwiQ2FuJ3QgaW5jbHVkZSBtZXJpZGllbSB3aGVuIHNwZWNpZnlpbmcgMjQtaG91ciBmb3JtYXRcIlxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIHsgaW5wdXQsIHRva2VucywgcmVnZXgsIHJhd01hdGNoZXMsIG1hdGNoZXMsIHJlc3VsdCwgem9uZSwgc3BlY2lmaWNPZmZzZXQgfTtcbiAgfVxufVxuXG5mdW5jdGlvbiBwYXJzZUZyb21Ub2tlbnMobG9jYWxlLCBpbnB1dCwgZm9ybWF0KSB7XG4gIGNvbnN0IHsgcmVzdWx0LCB6b25lLCBzcGVjaWZpY09mZnNldCwgaW52YWxpZFJlYXNvbiB9ID0gZXhwbGFpbkZyb21Ub2tlbnMobG9jYWxlLCBpbnB1dCwgZm9ybWF0KTtcbiAgcmV0dXJuIFtyZXN1bHQsIHpvbmUsIHNwZWNpZmljT2Zmc2V0LCBpbnZhbGlkUmVhc29uXTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0T3B0c1RvVG9rZW5zKGZvcm1hdE9wdHMsIGxvY2FsZSkge1xuICBpZiAoIWZvcm1hdE9wdHMpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGNvbnN0IGZvcm1hdHRlciA9IEZvcm1hdHRlci5jcmVhdGUobG9jYWxlLCBmb3JtYXRPcHRzKTtcbiAgY29uc3QgcGFydHMgPSBmb3JtYXR0ZXIuZm9ybWF0RGF0ZVRpbWVQYXJ0cyhnZXREdW1teURhdGVUaW1lKCkpO1xuICByZXR1cm4gcGFydHMubWFwKChwKSA9PiB0b2tlbkZvclBhcnQocCwgZm9ybWF0T3B0cykpO1xufVxuXG5jb25zdCBub25MZWFwTGFkZGVyID0gWzAsIDMxLCA1OSwgOTAsIDEyMCwgMTUxLCAxODEsIDIxMiwgMjQzLCAyNzMsIDMwNCwgMzM0XSxcbiAgbGVhcExhZGRlciA9IFswLCAzMSwgNjAsIDkxLCAxMjEsIDE1MiwgMTgyLCAyMTMsIDI0NCwgMjc0LCAzMDUsIDMzNV07XG5cbmZ1bmN0aW9uIHVuaXRPdXRPZlJhbmdlKHVuaXQsIHZhbHVlKSB7XG4gIHJldHVybiBuZXcgSW52YWxpZChcbiAgICBcInVuaXQgb3V0IG9mIHJhbmdlXCIsXG4gICAgYHlvdSBzcGVjaWZpZWQgJHt2YWx1ZX0gKG9mIHR5cGUgJHt0eXBlb2YgdmFsdWV9KSBhcyBhICR7dW5pdH0sIHdoaWNoIGlzIGludmFsaWRgXG4gICk7XG59XG5cbmZ1bmN0aW9uIGRheU9mV2Vlayh5ZWFyLCBtb250aCwgZGF5KSB7XG4gIGNvbnN0IGQgPSBuZXcgRGF0ZShEYXRlLlVUQyh5ZWFyLCBtb250aCAtIDEsIGRheSkpO1xuXG4gIGlmICh5ZWFyIDwgMTAwICYmIHllYXIgPj0gMCkge1xuICAgIGQuc2V0VVRDRnVsbFllYXIoZC5nZXRVVENGdWxsWWVhcigpIC0gMTkwMCk7XG4gIH1cblxuICBjb25zdCBqcyA9IGQuZ2V0VVRDRGF5KCk7XG5cbiAgcmV0dXJuIGpzID09PSAwID8gNyA6IGpzO1xufVxuXG5mdW5jdGlvbiBjb21wdXRlT3JkaW5hbCh5ZWFyLCBtb250aCwgZGF5KSB7XG4gIHJldHVybiBkYXkgKyAoaXNMZWFwWWVhcih5ZWFyKSA/IGxlYXBMYWRkZXIgOiBub25MZWFwTGFkZGVyKVttb250aCAtIDFdO1xufVxuXG5mdW5jdGlvbiB1bmNvbXB1dGVPcmRpbmFsKHllYXIsIG9yZGluYWwpIHtcbiAgY29uc3QgdGFibGUgPSBpc0xlYXBZZWFyKHllYXIpID8gbGVhcExhZGRlciA6IG5vbkxlYXBMYWRkZXIsXG4gICAgbW9udGgwID0gdGFibGUuZmluZEluZGV4KChpKSA9PiBpIDwgb3JkaW5hbCksXG4gICAgZGF5ID0gb3JkaW5hbCAtIHRhYmxlW21vbnRoMF07XG4gIHJldHVybiB7IG1vbnRoOiBtb250aDAgKyAxLCBkYXkgfTtcbn1cblxuLyoqXG4gKiBAcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIGdyZWdvcmlhblRvV2VlayhncmVnT2JqKSB7XG4gIGNvbnN0IHsgeWVhciwgbW9udGgsIGRheSB9ID0gZ3JlZ09iaixcbiAgICBvcmRpbmFsID0gY29tcHV0ZU9yZGluYWwoeWVhciwgbW9udGgsIGRheSksXG4gICAgd2Vla2RheSA9IGRheU9mV2Vlayh5ZWFyLCBtb250aCwgZGF5KTtcblxuICBsZXQgd2Vla051bWJlciA9IE1hdGguZmxvb3IoKG9yZGluYWwgLSB3ZWVrZGF5ICsgMTApIC8gNyksXG4gICAgd2Vla1llYXI7XG5cbiAgaWYgKHdlZWtOdW1iZXIgPCAxKSB7XG4gICAgd2Vla1llYXIgPSB5ZWFyIC0gMTtcbiAgICB3ZWVrTnVtYmVyID0gd2Vla3NJbldlZWtZZWFyKHdlZWtZZWFyKTtcbiAgfSBlbHNlIGlmICh3ZWVrTnVtYmVyID4gd2Vla3NJbldlZWtZZWFyKHllYXIpKSB7XG4gICAgd2Vla1llYXIgPSB5ZWFyICsgMTtcbiAgICB3ZWVrTnVtYmVyID0gMTtcbiAgfSBlbHNlIHtcbiAgICB3ZWVrWWVhciA9IHllYXI7XG4gIH1cblxuICByZXR1cm4geyB3ZWVrWWVhciwgd2Vla051bWJlciwgd2Vla2RheSwgLi4udGltZU9iamVjdChncmVnT2JqKSB9O1xufVxuXG5mdW5jdGlvbiB3ZWVrVG9HcmVnb3JpYW4od2Vla0RhdGEpIHtcbiAgY29uc3QgeyB3ZWVrWWVhciwgd2Vla051bWJlciwgd2Vla2RheSB9ID0gd2Vla0RhdGEsXG4gICAgd2Vla2RheU9mSmFuNCA9IGRheU9mV2Vlayh3ZWVrWWVhciwgMSwgNCksXG4gICAgeWVhckluRGF5cyA9IGRheXNJblllYXIod2Vla1llYXIpO1xuXG4gIGxldCBvcmRpbmFsID0gd2Vla051bWJlciAqIDcgKyB3ZWVrZGF5IC0gd2Vla2RheU9mSmFuNCAtIDMsXG4gICAgeWVhcjtcblxuICBpZiAob3JkaW5hbCA8IDEpIHtcbiAgICB5ZWFyID0gd2Vla1llYXIgLSAxO1xuICAgIG9yZGluYWwgKz0gZGF5c0luWWVhcih5ZWFyKTtcbiAgfSBlbHNlIGlmIChvcmRpbmFsID4geWVhckluRGF5cykge1xuICAgIHllYXIgPSB3ZWVrWWVhciArIDE7XG4gICAgb3JkaW5hbCAtPSBkYXlzSW5ZZWFyKHdlZWtZZWFyKTtcbiAgfSBlbHNlIHtcbiAgICB5ZWFyID0gd2Vla1llYXI7XG4gIH1cblxuICBjb25zdCB7IG1vbnRoLCBkYXkgfSA9IHVuY29tcHV0ZU9yZGluYWwoeWVhciwgb3JkaW5hbCk7XG4gIHJldHVybiB7IHllYXIsIG1vbnRoLCBkYXksIC4uLnRpbWVPYmplY3Qod2Vla0RhdGEpIH07XG59XG5cbmZ1bmN0aW9uIGdyZWdvcmlhblRvT3JkaW5hbChncmVnRGF0YSkge1xuICBjb25zdCB7IHllYXIsIG1vbnRoLCBkYXkgfSA9IGdyZWdEYXRhO1xuICBjb25zdCBvcmRpbmFsID0gY29tcHV0ZU9yZGluYWwoeWVhciwgbW9udGgsIGRheSk7XG4gIHJldHVybiB7IHllYXIsIG9yZGluYWwsIC4uLnRpbWVPYmplY3QoZ3JlZ0RhdGEpIH07XG59XG5cbmZ1bmN0aW9uIG9yZGluYWxUb0dyZWdvcmlhbihvcmRpbmFsRGF0YSkge1xuICBjb25zdCB7IHllYXIsIG9yZGluYWwgfSA9IG9yZGluYWxEYXRhO1xuICBjb25zdCB7IG1vbnRoLCBkYXkgfSA9IHVuY29tcHV0ZU9yZGluYWwoeWVhciwgb3JkaW5hbCk7XG4gIHJldHVybiB7IHllYXIsIG1vbnRoLCBkYXksIC4uLnRpbWVPYmplY3Qob3JkaW5hbERhdGEpIH07XG59XG5cbmZ1bmN0aW9uIGhhc0ludmFsaWRXZWVrRGF0YShvYmopIHtcbiAgY29uc3QgdmFsaWRZZWFyID0gaXNJbnRlZ2VyKG9iai53ZWVrWWVhciksXG4gICAgdmFsaWRXZWVrID0gaW50ZWdlckJldHdlZW4ob2JqLndlZWtOdW1iZXIsIDEsIHdlZWtzSW5XZWVrWWVhcihvYmoud2Vla1llYXIpKSxcbiAgICB2YWxpZFdlZWtkYXkgPSBpbnRlZ2VyQmV0d2VlbihvYmoud2Vla2RheSwgMSwgNyk7XG5cbiAgaWYgKCF2YWxpZFllYXIpIHtcbiAgICByZXR1cm4gdW5pdE91dE9mUmFuZ2UoXCJ3ZWVrWWVhclwiLCBvYmoud2Vla1llYXIpO1xuICB9IGVsc2UgaWYgKCF2YWxpZFdlZWspIHtcbiAgICByZXR1cm4gdW5pdE91dE9mUmFuZ2UoXCJ3ZWVrXCIsIG9iai53ZWVrKTtcbiAgfSBlbHNlIGlmICghdmFsaWRXZWVrZGF5KSB7XG4gICAgcmV0dXJuIHVuaXRPdXRPZlJhbmdlKFwid2Vla2RheVwiLCBvYmoud2Vla2RheSk7XG4gIH0gZWxzZSByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGhhc0ludmFsaWRPcmRpbmFsRGF0YShvYmopIHtcbiAgY29uc3QgdmFsaWRZZWFyID0gaXNJbnRlZ2VyKG9iai55ZWFyKSxcbiAgICB2YWxpZE9yZGluYWwgPSBpbnRlZ2VyQmV0d2VlbihvYmoub3JkaW5hbCwgMSwgZGF5c0luWWVhcihvYmoueWVhcikpO1xuXG4gIGlmICghdmFsaWRZZWFyKSB7XG4gICAgcmV0dXJuIHVuaXRPdXRPZlJhbmdlKFwieWVhclwiLCBvYmoueWVhcik7XG4gIH0gZWxzZSBpZiAoIXZhbGlkT3JkaW5hbCkge1xuICAgIHJldHVybiB1bml0T3V0T2ZSYW5nZShcIm9yZGluYWxcIiwgb2JqLm9yZGluYWwpO1xuICB9IGVsc2UgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBoYXNJbnZhbGlkR3JlZ29yaWFuRGF0YShvYmopIHtcbiAgY29uc3QgdmFsaWRZZWFyID0gaXNJbnRlZ2VyKG9iai55ZWFyKSxcbiAgICB2YWxpZE1vbnRoID0gaW50ZWdlckJldHdlZW4ob2JqLm1vbnRoLCAxLCAxMiksXG4gICAgdmFsaWREYXkgPSBpbnRlZ2VyQmV0d2VlbihvYmouZGF5LCAxLCBkYXlzSW5Nb250aChvYmoueWVhciwgb2JqLm1vbnRoKSk7XG5cbiAgaWYgKCF2YWxpZFllYXIpIHtcbiAgICByZXR1cm4gdW5pdE91dE9mUmFuZ2UoXCJ5ZWFyXCIsIG9iai55ZWFyKTtcbiAgfSBlbHNlIGlmICghdmFsaWRNb250aCkge1xuICAgIHJldHVybiB1bml0T3V0T2ZSYW5nZShcIm1vbnRoXCIsIG9iai5tb250aCk7XG4gIH0gZWxzZSBpZiAoIXZhbGlkRGF5KSB7XG4gICAgcmV0dXJuIHVuaXRPdXRPZlJhbmdlKFwiZGF5XCIsIG9iai5kYXkpO1xuICB9IGVsc2UgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBoYXNJbnZhbGlkVGltZURhdGEob2JqKSB7XG4gIGNvbnN0IHsgaG91ciwgbWludXRlLCBzZWNvbmQsIG1pbGxpc2Vjb25kIH0gPSBvYmo7XG4gIGNvbnN0IHZhbGlkSG91ciA9XG4gICAgICBpbnRlZ2VyQmV0d2Vlbihob3VyLCAwLCAyMykgfHxcbiAgICAgIChob3VyID09PSAyNCAmJiBtaW51dGUgPT09IDAgJiYgc2Vjb25kID09PSAwICYmIG1pbGxpc2Vjb25kID09PSAwKSxcbiAgICB2YWxpZE1pbnV0ZSA9IGludGVnZXJCZXR3ZWVuKG1pbnV0ZSwgMCwgNTkpLFxuICAgIHZhbGlkU2Vjb25kID0gaW50ZWdlckJldHdlZW4oc2Vjb25kLCAwLCA1OSksXG4gICAgdmFsaWRNaWxsaXNlY29uZCA9IGludGVnZXJCZXR3ZWVuKG1pbGxpc2Vjb25kLCAwLCA5OTkpO1xuXG4gIGlmICghdmFsaWRIb3VyKSB7XG4gICAgcmV0dXJuIHVuaXRPdXRPZlJhbmdlKFwiaG91clwiLCBob3VyKTtcbiAgfSBlbHNlIGlmICghdmFsaWRNaW51dGUpIHtcbiAgICByZXR1cm4gdW5pdE91dE9mUmFuZ2UoXCJtaW51dGVcIiwgbWludXRlKTtcbiAgfSBlbHNlIGlmICghdmFsaWRTZWNvbmQpIHtcbiAgICByZXR1cm4gdW5pdE91dE9mUmFuZ2UoXCJzZWNvbmRcIiwgc2Vjb25kKTtcbiAgfSBlbHNlIGlmICghdmFsaWRNaWxsaXNlY29uZCkge1xuICAgIHJldHVybiB1bml0T3V0T2ZSYW5nZShcIm1pbGxpc2Vjb25kXCIsIG1pbGxpc2Vjb25kKTtcbiAgfSBlbHNlIHJldHVybiBmYWxzZTtcbn1cblxuY29uc3QgSU5WQUxJRCA9IFwiSW52YWxpZCBEYXRlVGltZVwiO1xuY29uc3QgTUFYX0RBVEUgPSA4LjY0ZTE1O1xuXG5mdW5jdGlvbiB1bnN1cHBvcnRlZFpvbmUoem9uZSkge1xuICByZXR1cm4gbmV3IEludmFsaWQoXCJ1bnN1cHBvcnRlZCB6b25lXCIsIGB0aGUgem9uZSBcIiR7em9uZS5uYW1lfVwiIGlzIG5vdCBzdXBwb3J0ZWRgKTtcbn1cblxuLy8gd2UgY2FjaGUgd2VlayBkYXRhIG9uIHRoZSBEVCBvYmplY3QgYW5kIHRoaXMgaW50ZXJtZWRpYXRlcyB0aGUgY2FjaGVcbmZ1bmN0aW9uIHBvc3NpYmx5Q2FjaGVkV2Vla0RhdGEoZHQpIHtcbiAgaWYgKGR0LndlZWtEYXRhID09PSBudWxsKSB7XG4gICAgZHQud2Vla0RhdGEgPSBncmVnb3JpYW5Ub1dlZWsoZHQuYyk7XG4gIH1cbiAgcmV0dXJuIGR0LndlZWtEYXRhO1xufVxuXG4vLyBjbG9uZSByZWFsbHkgbWVhbnMsIFwibWFrZSBhIG5ldyBvYmplY3Qgd2l0aCB0aGVzZSBtb2RpZmljYXRpb25zXCIuIGFsbCBcInNldHRlcnNcIiByZWFsbHkgdXNlIHRoaXNcbi8vIHRvIGNyZWF0ZSBhIG5ldyBvYmplY3Qgd2hpbGUgb25seSBjaGFuZ2luZyBzb21lIG9mIHRoZSBwcm9wZXJ0aWVzXG5mdW5jdGlvbiBjbG9uZShpbnN0LCBhbHRzKSB7XG4gIGNvbnN0IGN1cnJlbnQgPSB7XG4gICAgdHM6IGluc3QudHMsXG4gICAgem9uZTogaW5zdC56b25lLFxuICAgIGM6IGluc3QuYyxcbiAgICBvOiBpbnN0Lm8sXG4gICAgbG9jOiBpbnN0LmxvYyxcbiAgICBpbnZhbGlkOiBpbnN0LmludmFsaWQsXG4gIH07XG4gIHJldHVybiBuZXcgRGF0ZVRpbWUoeyAuLi5jdXJyZW50LCAuLi5hbHRzLCBvbGQ6IGN1cnJlbnQgfSk7XG59XG5cbi8vIGZpbmQgdGhlIHJpZ2h0IG9mZnNldCBhIGdpdmVuIGxvY2FsIHRpbWUuIFRoZSBvIGlucHV0IGlzIG91ciBndWVzcywgd2hpY2ggZGV0ZXJtaW5lcyB3aGljaFxuLy8gb2Zmc2V0IHdlJ2xsIHBpY2sgaW4gYW1iaWd1b3VzIGNhc2VzIChlLmcuIHRoZXJlIGFyZSB0d28gMyBBTXMgYi9jIEZhbGxiYWNrIERTVClcbmZ1bmN0aW9uIGZpeE9mZnNldChsb2NhbFRTLCBvLCB0eikge1xuICAvLyBPdXIgVVRDIHRpbWUgaXMganVzdCBhIGd1ZXNzIGJlY2F1c2Ugb3VyIG9mZnNldCBpcyBqdXN0IGEgZ3Vlc3NcbiAgbGV0IHV0Y0d1ZXNzID0gbG9jYWxUUyAtIG8gKiA2MCAqIDEwMDA7XG5cbiAgLy8gVGVzdCB3aGV0aGVyIHRoZSB6b25lIG1hdGNoZXMgdGhlIG9mZnNldCBmb3IgdGhpcyB0c1xuICBjb25zdCBvMiA9IHR6Lm9mZnNldCh1dGNHdWVzcyk7XG5cbiAgLy8gSWYgc28sIG9mZnNldCBkaWRuJ3QgY2hhbmdlIGFuZCB3ZSdyZSBkb25lXG4gIGlmIChvID09PSBvMikge1xuICAgIHJldHVybiBbdXRjR3Vlc3MsIG9dO1xuICB9XG5cbiAgLy8gSWYgbm90LCBjaGFuZ2UgdGhlIHRzIGJ5IHRoZSBkaWZmZXJlbmNlIGluIHRoZSBvZmZzZXRcbiAgdXRjR3Vlc3MgLT0gKG8yIC0gbykgKiA2MCAqIDEwMDA7XG5cbiAgLy8gSWYgdGhhdCBnaXZlcyB1cyB0aGUgbG9jYWwgdGltZSB3ZSB3YW50LCB3ZSdyZSBkb25lXG4gIGNvbnN0IG8zID0gdHoub2Zmc2V0KHV0Y0d1ZXNzKTtcbiAgaWYgKG8yID09PSBvMykge1xuICAgIHJldHVybiBbdXRjR3Vlc3MsIG8yXTtcbiAgfVxuXG4gIC8vIElmIGl0J3MgZGlmZmVyZW50LCB3ZSdyZSBpbiBhIGhvbGUgdGltZS4gVGhlIG9mZnNldCBoYXMgY2hhbmdlZCwgYnV0IHRoZSB3ZSBkb24ndCBhZGp1c3QgdGhlIHRpbWVcbiAgcmV0dXJuIFtsb2NhbFRTIC0gTWF0aC5taW4obzIsIG8zKSAqIDYwICogMTAwMCwgTWF0aC5tYXgobzIsIG8zKV07XG59XG5cbi8vIGNvbnZlcnQgYW4gZXBvY2ggdGltZXN0YW1wIGludG8gYSBjYWxlbmRhciBvYmplY3Qgd2l0aCB0aGUgZ2l2ZW4gb2Zmc2V0XG5mdW5jdGlvbiB0c1RvT2JqKHRzLCBvZmZzZXQpIHtcbiAgdHMgKz0gb2Zmc2V0ICogNjAgKiAxMDAwO1xuXG4gIGNvbnN0IGQgPSBuZXcgRGF0ZSh0cyk7XG5cbiAgcmV0dXJuIHtcbiAgICB5ZWFyOiBkLmdldFVUQ0Z1bGxZZWFyKCksXG4gICAgbW9udGg6IGQuZ2V0VVRDTW9udGgoKSArIDEsXG4gICAgZGF5OiBkLmdldFVUQ0RhdGUoKSxcbiAgICBob3VyOiBkLmdldFVUQ0hvdXJzKCksXG4gICAgbWludXRlOiBkLmdldFVUQ01pbnV0ZXMoKSxcbiAgICBzZWNvbmQ6IGQuZ2V0VVRDU2Vjb25kcygpLFxuICAgIG1pbGxpc2Vjb25kOiBkLmdldFVUQ01pbGxpc2Vjb25kcygpLFxuICB9O1xufVxuXG4vLyBjb252ZXJ0IGEgY2FsZW5kYXIgb2JqZWN0IHRvIGEgZXBvY2ggdGltZXN0YW1wXG5mdW5jdGlvbiBvYmpUb1RTKG9iaiwgb2Zmc2V0LCB6b25lKSB7XG4gIHJldHVybiBmaXhPZmZzZXQob2JqVG9Mb2NhbFRTKG9iaiksIG9mZnNldCwgem9uZSk7XG59XG5cbi8vIGNyZWF0ZSBhIG5ldyBEVCBpbnN0YW5jZSBieSBhZGRpbmcgYSBkdXJhdGlvbiwgYWRqdXN0aW5nIGZvciBEU1RzXG5mdW5jdGlvbiBhZGp1c3RUaW1lKGluc3QsIGR1cikge1xuICBjb25zdCBvUHJlID0gaW5zdC5vLFxuICAgIHllYXIgPSBpbnN0LmMueWVhciArIE1hdGgudHJ1bmMoZHVyLnllYXJzKSxcbiAgICBtb250aCA9IGluc3QuYy5tb250aCArIE1hdGgudHJ1bmMoZHVyLm1vbnRocykgKyBNYXRoLnRydW5jKGR1ci5xdWFydGVycykgKiAzLFxuICAgIGMgPSB7XG4gICAgICAuLi5pbnN0LmMsXG4gICAgICB5ZWFyLFxuICAgICAgbW9udGgsXG4gICAgICBkYXk6XG4gICAgICAgIE1hdGgubWluKGluc3QuYy5kYXksIGRheXNJbk1vbnRoKHllYXIsIG1vbnRoKSkgK1xuICAgICAgICBNYXRoLnRydW5jKGR1ci5kYXlzKSArXG4gICAgICAgIE1hdGgudHJ1bmMoZHVyLndlZWtzKSAqIDcsXG4gICAgfSxcbiAgICBtaWxsaXNUb0FkZCA9IER1cmF0aW9uLmZyb21PYmplY3Qoe1xuICAgICAgeWVhcnM6IGR1ci55ZWFycyAtIE1hdGgudHJ1bmMoZHVyLnllYXJzKSxcbiAgICAgIHF1YXJ0ZXJzOiBkdXIucXVhcnRlcnMgLSBNYXRoLnRydW5jKGR1ci5xdWFydGVycyksXG4gICAgICBtb250aHM6IGR1ci5tb250aHMgLSBNYXRoLnRydW5jKGR1ci5tb250aHMpLFxuICAgICAgd2Vla3M6IGR1ci53ZWVrcyAtIE1hdGgudHJ1bmMoZHVyLndlZWtzKSxcbiAgICAgIGRheXM6IGR1ci5kYXlzIC0gTWF0aC50cnVuYyhkdXIuZGF5cyksXG4gICAgICBob3VyczogZHVyLmhvdXJzLFxuICAgICAgbWludXRlczogZHVyLm1pbnV0ZXMsXG4gICAgICBzZWNvbmRzOiBkdXIuc2Vjb25kcyxcbiAgICAgIG1pbGxpc2Vjb25kczogZHVyLm1pbGxpc2Vjb25kcyxcbiAgICB9KS5hcyhcIm1pbGxpc2Vjb25kc1wiKSxcbiAgICBsb2NhbFRTID0gb2JqVG9Mb2NhbFRTKGMpO1xuXG4gIGxldCBbdHMsIG9dID0gZml4T2Zmc2V0KGxvY2FsVFMsIG9QcmUsIGluc3Quem9uZSk7XG5cbiAgaWYgKG1pbGxpc1RvQWRkICE9PSAwKSB7XG4gICAgdHMgKz0gbWlsbGlzVG9BZGQ7XG4gICAgLy8gdGhhdCBjb3VsZCBoYXZlIGNoYW5nZWQgdGhlIG9mZnNldCBieSBnb2luZyBvdmVyIGEgRFNULCBidXQgd2Ugd2FudCB0byBrZWVwIHRoZSB0cyB0aGUgc2FtZVxuICAgIG8gPSBpbnN0LnpvbmUub2Zmc2V0KHRzKTtcbiAgfVxuXG4gIHJldHVybiB7IHRzLCBvIH07XG59XG5cbi8vIGhlbHBlciB1c2VmdWwgaW4gdHVybmluZyB0aGUgcmVzdWx0cyBvZiBwYXJzaW5nIGludG8gcmVhbCBkYXRlc1xuLy8gYnkgaGFuZGxpbmcgdGhlIHpvbmUgb3B0aW9uc1xuZnVuY3Rpb24gcGFyc2VEYXRhVG9EYXRlVGltZShwYXJzZWQsIHBhcnNlZFpvbmUsIG9wdHMsIGZvcm1hdCwgdGV4dCwgc3BlY2lmaWNPZmZzZXQpIHtcbiAgY29uc3QgeyBzZXRab25lLCB6b25lIH0gPSBvcHRzO1xuICBpZiAocGFyc2VkICYmIE9iamVjdC5rZXlzKHBhcnNlZCkubGVuZ3RoICE9PSAwKSB7XG4gICAgY29uc3QgaW50ZXJwcmV0YXRpb25ab25lID0gcGFyc2VkWm9uZSB8fCB6b25lLFxuICAgICAgaW5zdCA9IERhdGVUaW1lLmZyb21PYmplY3QocGFyc2VkLCB7XG4gICAgICAgIC4uLm9wdHMsXG4gICAgICAgIHpvbmU6IGludGVycHJldGF0aW9uWm9uZSxcbiAgICAgICAgc3BlY2lmaWNPZmZzZXQsXG4gICAgICB9KTtcbiAgICByZXR1cm4gc2V0Wm9uZSA/IGluc3QgOiBpbnN0LnNldFpvbmUoem9uZSk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIERhdGVUaW1lLmludmFsaWQoXG4gICAgICBuZXcgSW52YWxpZChcInVucGFyc2FibGVcIiwgYHRoZSBpbnB1dCBcIiR7dGV4dH1cIiBjYW4ndCBiZSBwYXJzZWQgYXMgJHtmb3JtYXR9YClcbiAgICApO1xuICB9XG59XG5cbi8vIGlmIHlvdSB3YW50IHRvIG91dHB1dCBhIHRlY2huaWNhbCBmb3JtYXQgKGUuZy4gUkZDIDI4MjIpLCB0aGlzIGhlbHBlclxuLy8gaGVscHMgaGFuZGxlIHRoZSBkZXRhaWxzXG5mdW5jdGlvbiB0b1RlY2hGb3JtYXQoZHQsIGZvcm1hdCwgYWxsb3daID0gdHJ1ZSkge1xuICByZXR1cm4gZHQuaXNWYWxpZFxuICAgID8gRm9ybWF0dGVyLmNyZWF0ZShMb2NhbGUuY3JlYXRlKFwiZW4tVVNcIiksIHtcbiAgICAgICAgYWxsb3daLFxuICAgICAgICBmb3JjZVNpbXBsZTogdHJ1ZSxcbiAgICAgIH0pLmZvcm1hdERhdGVUaW1lRnJvbVN0cmluZyhkdCwgZm9ybWF0KVxuICAgIDogbnVsbDtcbn1cblxuZnVuY3Rpb24gdG9JU09EYXRlKG8sIGV4dGVuZGVkKSB7XG4gIGNvbnN0IGxvbmdGb3JtYXQgPSBvLmMueWVhciA+IDk5OTkgfHwgby5jLnllYXIgPCAwO1xuICBsZXQgYyA9IFwiXCI7XG4gIGlmIChsb25nRm9ybWF0ICYmIG8uYy55ZWFyID49IDApIGMgKz0gXCIrXCI7XG4gIGMgKz0gcGFkU3RhcnQoby5jLnllYXIsIGxvbmdGb3JtYXQgPyA2IDogNCk7XG5cbiAgaWYgKGV4dGVuZGVkKSB7XG4gICAgYyArPSBcIi1cIjtcbiAgICBjICs9IHBhZFN0YXJ0KG8uYy5tb250aCk7XG4gICAgYyArPSBcIi1cIjtcbiAgICBjICs9IHBhZFN0YXJ0KG8uYy5kYXkpO1xuICB9IGVsc2Uge1xuICAgIGMgKz0gcGFkU3RhcnQoby5jLm1vbnRoKTtcbiAgICBjICs9IHBhZFN0YXJ0KG8uYy5kYXkpO1xuICB9XG4gIHJldHVybiBjO1xufVxuXG5mdW5jdGlvbiB0b0lTT1RpbWUoXG4gIG8sXG4gIGV4dGVuZGVkLFxuICBzdXBwcmVzc1NlY29uZHMsXG4gIHN1cHByZXNzTWlsbGlzZWNvbmRzLFxuICBpbmNsdWRlT2Zmc2V0LFxuICBleHRlbmRlZFpvbmVcbikge1xuICBsZXQgYyA9IHBhZFN0YXJ0KG8uYy5ob3VyKTtcbiAgaWYgKGV4dGVuZGVkKSB7XG4gICAgYyArPSBcIjpcIjtcbiAgICBjICs9IHBhZFN0YXJ0KG8uYy5taW51dGUpO1xuICAgIGlmIChvLmMuc2Vjb25kICE9PSAwIHx8ICFzdXBwcmVzc1NlY29uZHMpIHtcbiAgICAgIGMgKz0gXCI6XCI7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGMgKz0gcGFkU3RhcnQoby5jLm1pbnV0ZSk7XG4gIH1cblxuICBpZiAoby5jLnNlY29uZCAhPT0gMCB8fCAhc3VwcHJlc3NTZWNvbmRzKSB7XG4gICAgYyArPSBwYWRTdGFydChvLmMuc2Vjb25kKTtcblxuICAgIGlmIChvLmMubWlsbGlzZWNvbmQgIT09IDAgfHwgIXN1cHByZXNzTWlsbGlzZWNvbmRzKSB7XG4gICAgICBjICs9IFwiLlwiO1xuICAgICAgYyArPSBwYWRTdGFydChvLmMubWlsbGlzZWNvbmQsIDMpO1xuICAgIH1cbiAgfVxuXG4gIGlmIChpbmNsdWRlT2Zmc2V0KSB7XG4gICAgaWYgKG8uaXNPZmZzZXRGaXhlZCAmJiBvLm9mZnNldCA9PT0gMCAmJiAhZXh0ZW5kZWRab25lKSB7XG4gICAgICBjICs9IFwiWlwiO1xuICAgIH0gZWxzZSBpZiAoby5vIDwgMCkge1xuICAgICAgYyArPSBcIi1cIjtcbiAgICAgIGMgKz0gcGFkU3RhcnQoTWF0aC50cnVuYygtby5vIC8gNjApKTtcbiAgICAgIGMgKz0gXCI6XCI7XG4gICAgICBjICs9IHBhZFN0YXJ0KE1hdGgudHJ1bmMoLW8ubyAlIDYwKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGMgKz0gXCIrXCI7XG4gICAgICBjICs9IHBhZFN0YXJ0KE1hdGgudHJ1bmMoby5vIC8gNjApKTtcbiAgICAgIGMgKz0gXCI6XCI7XG4gICAgICBjICs9IHBhZFN0YXJ0KE1hdGgudHJ1bmMoby5vICUgNjApKTtcbiAgICB9XG4gIH1cblxuICBpZiAoZXh0ZW5kZWRab25lKSB7XG4gICAgYyArPSBcIltcIiArIG8uem9uZS5pYW5hTmFtZSArIFwiXVwiO1xuICB9XG4gIHJldHVybiBjO1xufVxuXG4vLyBkZWZhdWx0cyBmb3IgdW5zcGVjaWZpZWQgdW5pdHMgaW4gdGhlIHN1cHBvcnRlZCBjYWxlbmRhcnNcbmNvbnN0IGRlZmF1bHRVbml0VmFsdWVzID0ge1xuICAgIG1vbnRoOiAxLFxuICAgIGRheTogMSxcbiAgICBob3VyOiAwLFxuICAgIG1pbnV0ZTogMCxcbiAgICBzZWNvbmQ6IDAsXG4gICAgbWlsbGlzZWNvbmQ6IDAsXG4gIH0sXG4gIGRlZmF1bHRXZWVrVW5pdFZhbHVlcyA9IHtcbiAgICB3ZWVrTnVtYmVyOiAxLFxuICAgIHdlZWtkYXk6IDEsXG4gICAgaG91cjogMCxcbiAgICBtaW51dGU6IDAsXG4gICAgc2Vjb25kOiAwLFxuICAgIG1pbGxpc2Vjb25kOiAwLFxuICB9LFxuICBkZWZhdWx0T3JkaW5hbFVuaXRWYWx1ZXMgPSB7XG4gICAgb3JkaW5hbDogMSxcbiAgICBob3VyOiAwLFxuICAgIG1pbnV0ZTogMCxcbiAgICBzZWNvbmQ6IDAsXG4gICAgbWlsbGlzZWNvbmQ6IDAsXG4gIH07XG5cbi8vIFVuaXRzIGluIHRoZSBzdXBwb3J0ZWQgY2FsZW5kYXJzLCBzb3J0ZWQgYnkgYmlnbmVzc1xuY29uc3Qgb3JkZXJlZFVuaXRzID0gW1wieWVhclwiLCBcIm1vbnRoXCIsIFwiZGF5XCIsIFwiaG91clwiLCBcIm1pbnV0ZVwiLCBcInNlY29uZFwiLCBcIm1pbGxpc2Vjb25kXCJdLFxuICBvcmRlcmVkV2Vla1VuaXRzID0gW1xuICAgIFwid2Vla1llYXJcIixcbiAgICBcIndlZWtOdW1iZXJcIixcbiAgICBcIndlZWtkYXlcIixcbiAgICBcImhvdXJcIixcbiAgICBcIm1pbnV0ZVwiLFxuICAgIFwic2Vjb25kXCIsXG4gICAgXCJtaWxsaXNlY29uZFwiLFxuICBdLFxuICBvcmRlcmVkT3JkaW5hbFVuaXRzID0gW1wieWVhclwiLCBcIm9yZGluYWxcIiwgXCJob3VyXCIsIFwibWludXRlXCIsIFwic2Vjb25kXCIsIFwibWlsbGlzZWNvbmRcIl07XG5cbi8vIHN0YW5kYXJkaXplIGNhc2UgYW5kIHBsdXJhbGl0eSBpbiB1bml0c1xuZnVuY3Rpb24gbm9ybWFsaXplVW5pdCh1bml0KSB7XG4gIGNvbnN0IG5vcm1hbGl6ZWQgPSB7XG4gICAgeWVhcjogXCJ5ZWFyXCIsXG4gICAgeWVhcnM6IFwieWVhclwiLFxuICAgIG1vbnRoOiBcIm1vbnRoXCIsXG4gICAgbW9udGhzOiBcIm1vbnRoXCIsXG4gICAgZGF5OiBcImRheVwiLFxuICAgIGRheXM6IFwiZGF5XCIsXG4gICAgaG91cjogXCJob3VyXCIsXG4gICAgaG91cnM6IFwiaG91clwiLFxuICAgIG1pbnV0ZTogXCJtaW51dGVcIixcbiAgICBtaW51dGVzOiBcIm1pbnV0ZVwiLFxuICAgIHF1YXJ0ZXI6IFwicXVhcnRlclwiLFxuICAgIHF1YXJ0ZXJzOiBcInF1YXJ0ZXJcIixcbiAgICBzZWNvbmQ6IFwic2Vjb25kXCIsXG4gICAgc2Vjb25kczogXCJzZWNvbmRcIixcbiAgICBtaWxsaXNlY29uZDogXCJtaWxsaXNlY29uZFwiLFxuICAgIG1pbGxpc2Vjb25kczogXCJtaWxsaXNlY29uZFwiLFxuICAgIHdlZWtkYXk6IFwid2Vla2RheVwiLFxuICAgIHdlZWtkYXlzOiBcIndlZWtkYXlcIixcbiAgICB3ZWVrbnVtYmVyOiBcIndlZWtOdW1iZXJcIixcbiAgICB3ZWVrc251bWJlcjogXCJ3ZWVrTnVtYmVyXCIsXG4gICAgd2Vla251bWJlcnM6IFwid2Vla051bWJlclwiLFxuICAgIHdlZWt5ZWFyOiBcIndlZWtZZWFyXCIsXG4gICAgd2Vla3llYXJzOiBcIndlZWtZZWFyXCIsXG4gICAgb3JkaW5hbDogXCJvcmRpbmFsXCIsXG4gIH1bdW5pdC50b0xvd2VyQ2FzZSgpXTtcblxuICBpZiAoIW5vcm1hbGl6ZWQpIHRocm93IG5ldyBJbnZhbGlkVW5pdEVycm9yKHVuaXQpO1xuXG4gIHJldHVybiBub3JtYWxpemVkO1xufVxuXG4vLyB0aGlzIGlzIGEgZHVtYmVkIGRvd24gdmVyc2lvbiBvZiBmcm9tT2JqZWN0KCkgdGhhdCBydW5zIGFib3V0IDYwJSBmYXN0ZXJcbi8vIGJ1dCBkb2Vzbid0IGRvIGFueSB2YWxpZGF0aW9uLCBtYWtlcyBhIGJ1bmNoIG9mIGFzc3VtcHRpb25zIGFib3V0IHdoYXQgdW5pdHNcbi8vIGFyZSBwcmVzZW50LCBhbmQgc28gb24uXG5mdW5jdGlvbiBxdWlja0RUKG9iaiwgb3B0cykge1xuICBjb25zdCB6b25lID0gbm9ybWFsaXplWm9uZShvcHRzLnpvbmUsIFNldHRpbmdzLmRlZmF1bHRab25lKSxcbiAgICBsb2MgPSBMb2NhbGUuZnJvbU9iamVjdChvcHRzKSxcbiAgICB0c05vdyA9IFNldHRpbmdzLm5vdygpO1xuXG4gIGxldCB0cywgbztcblxuICAvLyBhc3N1bWUgd2UgaGF2ZSB0aGUgaGlnaGVyLW9yZGVyIHVuaXRzXG4gIGlmICghaXNVbmRlZmluZWQob2JqLnllYXIpKSB7XG4gICAgZm9yIChjb25zdCB1IG9mIG9yZGVyZWRVbml0cykge1xuICAgICAgaWYgKGlzVW5kZWZpbmVkKG9ialt1XSkpIHtcbiAgICAgICAgb2JqW3VdID0gZGVmYXVsdFVuaXRWYWx1ZXNbdV07XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgaW52YWxpZCA9IGhhc0ludmFsaWRHcmVnb3JpYW5EYXRhKG9iaikgfHwgaGFzSW52YWxpZFRpbWVEYXRhKG9iaik7XG4gICAgaWYgKGludmFsaWQpIHtcbiAgICAgIHJldHVybiBEYXRlVGltZS5pbnZhbGlkKGludmFsaWQpO1xuICAgIH1cblxuICAgIGNvbnN0IG9mZnNldFByb3ZpcyA9IHpvbmUub2Zmc2V0KHRzTm93KTtcbiAgICBbdHMsIG9dID0gb2JqVG9UUyhvYmosIG9mZnNldFByb3Zpcywgem9uZSk7XG4gIH0gZWxzZSB7XG4gICAgdHMgPSB0c05vdztcbiAgfVxuXG4gIHJldHVybiBuZXcgRGF0ZVRpbWUoeyB0cywgem9uZSwgbG9jLCBvIH0pO1xufVxuXG5mdW5jdGlvbiBkaWZmUmVsYXRpdmUoc3RhcnQsIGVuZCwgb3B0cykge1xuICBjb25zdCByb3VuZCA9IGlzVW5kZWZpbmVkKG9wdHMucm91bmQpID8gdHJ1ZSA6IG9wdHMucm91bmQsXG4gICAgZm9ybWF0ID0gKGMsIHVuaXQpID0+IHtcbiAgICAgIGMgPSByb3VuZFRvKGMsIHJvdW5kIHx8IG9wdHMuY2FsZW5kYXJ5ID8gMCA6IDIsIHRydWUpO1xuICAgICAgY29uc3QgZm9ybWF0dGVyID0gZW5kLmxvYy5jbG9uZShvcHRzKS5yZWxGb3JtYXR0ZXIob3B0cyk7XG4gICAgICByZXR1cm4gZm9ybWF0dGVyLmZvcm1hdChjLCB1bml0KTtcbiAgICB9LFxuICAgIGRpZmZlciA9ICh1bml0KSA9PiB7XG4gICAgICBpZiAob3B0cy5jYWxlbmRhcnkpIHtcbiAgICAgICAgaWYgKCFlbmQuaGFzU2FtZShzdGFydCwgdW5pdCkpIHtcbiAgICAgICAgICByZXR1cm4gZW5kLnN0YXJ0T2YodW5pdCkuZGlmZihzdGFydC5zdGFydE9mKHVuaXQpLCB1bml0KS5nZXQodW5pdCk7XG4gICAgICAgIH0gZWxzZSByZXR1cm4gMDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBlbmQuZGlmZihzdGFydCwgdW5pdCkuZ2V0KHVuaXQpO1xuICAgICAgfVxuICAgIH07XG5cbiAgaWYgKG9wdHMudW5pdCkge1xuICAgIHJldHVybiBmb3JtYXQoZGlmZmVyKG9wdHMudW5pdCksIG9wdHMudW5pdCk7XG4gIH1cblxuICBmb3IgKGNvbnN0IHVuaXQgb2Ygb3B0cy51bml0cykge1xuICAgIGNvbnN0IGNvdW50ID0gZGlmZmVyKHVuaXQpO1xuICAgIGlmIChNYXRoLmFicyhjb3VudCkgPj0gMSkge1xuICAgICAgcmV0dXJuIGZvcm1hdChjb3VudCwgdW5pdCk7XG4gICAgfVxuICB9XG4gIHJldHVybiBmb3JtYXQoc3RhcnQgPiBlbmQgPyAtMCA6IDAsIG9wdHMudW5pdHNbb3B0cy51bml0cy5sZW5ndGggLSAxXSk7XG59XG5cbmZ1bmN0aW9uIGxhc3RPcHRzKGFyZ0xpc3QpIHtcbiAgbGV0IG9wdHMgPSB7fSxcbiAgICBhcmdzO1xuICBpZiAoYXJnTGlzdC5sZW5ndGggPiAwICYmIHR5cGVvZiBhcmdMaXN0W2FyZ0xpc3QubGVuZ3RoIC0gMV0gPT09IFwib2JqZWN0XCIpIHtcbiAgICBvcHRzID0gYXJnTGlzdFthcmdMaXN0Lmxlbmd0aCAtIDFdO1xuICAgIGFyZ3MgPSBBcnJheS5mcm9tKGFyZ0xpc3QpLnNsaWNlKDAsIGFyZ0xpc3QubGVuZ3RoIC0gMSk7XG4gIH0gZWxzZSB7XG4gICAgYXJncyA9IEFycmF5LmZyb20oYXJnTGlzdCk7XG4gIH1cbiAgcmV0dXJuIFtvcHRzLCBhcmdzXTtcbn1cblxuLyoqXG4gKiBBIERhdGVUaW1lIGlzIGFuIGltbXV0YWJsZSBkYXRhIHN0cnVjdHVyZSByZXByZXNlbnRpbmcgYSBzcGVjaWZpYyBkYXRlIGFuZCB0aW1lIGFuZCBhY2NvbXBhbnlpbmcgbWV0aG9kcy4gSXQgY29udGFpbnMgY2xhc3MgYW5kIGluc3RhbmNlIG1ldGhvZHMgZm9yIGNyZWF0aW5nLCBwYXJzaW5nLCBpbnRlcnJvZ2F0aW5nLCB0cmFuc2Zvcm1pbmcsIGFuZCBmb3JtYXR0aW5nIHRoZW0uXG4gKlxuICogQSBEYXRlVGltZSBjb21wcmlzZXMgb2Y6XG4gKiAqIEEgdGltZXN0YW1wLiBFYWNoIERhdGVUaW1lIGluc3RhbmNlIHJlZmVycyB0byBhIHNwZWNpZmljIG1pbGxpc2Vjb25kIG9mIHRoZSBVbml4IGVwb2NoLlxuICogKiBBIHRpbWUgem9uZS4gRWFjaCBpbnN0YW5jZSBpcyBjb25zaWRlcmVkIGluIHRoZSBjb250ZXh0IG9mIGEgc3BlY2lmaWMgem9uZSAoYnkgZGVmYXVsdCB0aGUgbG9jYWwgc3lzdGVtJ3Mgem9uZSkuXG4gKiAqIENvbmZpZ3VyYXRpb24gcHJvcGVydGllcyB0aGF0IGVmZmVjdCBob3cgb3V0cHV0IHN0cmluZ3MgYXJlIGZvcm1hdHRlZCwgc3VjaCBhcyBgbG9jYWxlYCwgYG51bWJlcmluZ1N5c3RlbWAsIGFuZCBgb3V0cHV0Q2FsZW5kYXJgLlxuICpcbiAqIEhlcmUgaXMgYSBicmllZiBvdmVydmlldyBvZiB0aGUgbW9zdCBjb21tb25seSB1c2VkIGZ1bmN0aW9uYWxpdHkgaXQgcHJvdmlkZXM6XG4gKlxuICogKiAqKkNyZWF0aW9uKio6IFRvIGNyZWF0ZSBhIERhdGVUaW1lIGZyb20gaXRzIGNvbXBvbmVudHMsIHVzZSBvbmUgb2YgaXRzIGZhY3RvcnkgY2xhc3MgbWV0aG9kczoge0BsaW5rIERhdGVUaW1lLmxvY2FsfSwge0BsaW5rIERhdGVUaW1lLnV0Y30sIGFuZCAobW9zdCBmbGV4aWJseSkge0BsaW5rIERhdGVUaW1lLmZyb21PYmplY3R9LiBUbyBjcmVhdGUgb25lIGZyb20gYSBzdGFuZGFyZCBzdHJpbmcgZm9ybWF0LCB1c2Uge0BsaW5rIERhdGVUaW1lLmZyb21JU099LCB7QGxpbmsgRGF0ZVRpbWUuZnJvbUhUVFB9LCBhbmQge0BsaW5rIERhdGVUaW1lLmZyb21SRkMyODIyfS4gVG8gY3JlYXRlIG9uZSBmcm9tIGEgY3VzdG9tIHN0cmluZyBmb3JtYXQsIHVzZSB7QGxpbmsgRGF0ZVRpbWUuZnJvbUZvcm1hdH0uIFRvIGNyZWF0ZSBvbmUgZnJvbSBhIG5hdGl2ZSBKUyBkYXRlLCB1c2Uge0BsaW5rIERhdGVUaW1lLmZyb21KU0RhdGV9LlxuICogKiAqKkdyZWdvcmlhbiBjYWxlbmRhciBhbmQgdGltZSoqOiBUbyBleGFtaW5lIHRoZSBHcmVnb3JpYW4gcHJvcGVydGllcyBvZiBhIERhdGVUaW1lIGluZGl2aWR1YWxseSAoaS5lIGFzIG9wcG9zZWQgdG8gY29sbGVjdGl2ZWx5IHRocm91Z2gge0BsaW5rIERhdGVUaW1lI3RvT2JqZWN0fSksIHVzZSB0aGUge0BsaW5rIERhdGVUaW1lI3llYXJ9LCB7QGxpbmsgRGF0ZVRpbWUjbW9udGh9LFxuICoge0BsaW5rIERhdGVUaW1lI2RheX0sIHtAbGluayBEYXRlVGltZSNob3VyfSwge0BsaW5rIERhdGVUaW1lI21pbnV0ZX0sIHtAbGluayBEYXRlVGltZSNzZWNvbmR9LCB7QGxpbmsgRGF0ZVRpbWUjbWlsbGlzZWNvbmR9IGFjY2Vzc29ycy5cbiAqICogKipXZWVrIGNhbGVuZGFyKio6IEZvciBJU08gd2VlayBjYWxlbmRhciBhdHRyaWJ1dGVzLCBzZWUgdGhlIHtAbGluayBEYXRlVGltZSN3ZWVrWWVhcn0sIHtAbGluayBEYXRlVGltZSN3ZWVrTnVtYmVyfSwgYW5kIHtAbGluayBEYXRlVGltZSN3ZWVrZGF5fSBhY2Nlc3NvcnMuXG4gKiAqICoqQ29uZmlndXJhdGlvbioqIFNlZSB0aGUge0BsaW5rIERhdGVUaW1lI2xvY2FsZX0gYW5kIHtAbGluayBEYXRlVGltZSNudW1iZXJpbmdTeXN0ZW19IGFjY2Vzc29ycy5cbiAqICogKipUcmFuc2Zvcm1hdGlvbioqOiBUbyB0cmFuc2Zvcm0gdGhlIERhdGVUaW1lIGludG8gb3RoZXIgRGF0ZVRpbWVzLCB1c2Uge0BsaW5rIERhdGVUaW1lI3NldH0sIHtAbGluayBEYXRlVGltZSNyZWNvbmZpZ3VyZX0sIHtAbGluayBEYXRlVGltZSNzZXRab25lfSwge0BsaW5rIERhdGVUaW1lI3NldExvY2FsZX0sIHtAbGluayBEYXRlVGltZS5wbHVzfSwge0BsaW5rIERhdGVUaW1lI21pbnVzfSwge0BsaW5rIERhdGVUaW1lI2VuZE9mfSwge0BsaW5rIERhdGVUaW1lI3N0YXJ0T2Z9LCB7QGxpbmsgRGF0ZVRpbWUjdG9VVEN9LCBhbmQge0BsaW5rIERhdGVUaW1lI3RvTG9jYWx9LlxuICogKiAqKk91dHB1dCoqOiBUbyBjb252ZXJ0IHRoZSBEYXRlVGltZSB0byBvdGhlciByZXByZXNlbnRhdGlvbnMsIHVzZSB0aGUge0BsaW5rIERhdGVUaW1lI3RvUmVsYXRpdmV9LCB7QGxpbmsgRGF0ZVRpbWUjdG9SZWxhdGl2ZUNhbGVuZGFyfSwge0BsaW5rIERhdGVUaW1lI3RvSlNPTn0sIHtAbGluayBEYXRlVGltZSN0b0lTT30sIHtAbGluayBEYXRlVGltZSN0b0hUVFB9LCB7QGxpbmsgRGF0ZVRpbWUjdG9PYmplY3R9LCB7QGxpbmsgRGF0ZVRpbWUjdG9SRkMyODIyfSwge0BsaW5rIERhdGVUaW1lI3RvU3RyaW5nfSwge0BsaW5rIERhdGVUaW1lI3RvTG9jYWxlU3RyaW5nfSwge0BsaW5rIERhdGVUaW1lI3RvRm9ybWF0fSwge0BsaW5rIERhdGVUaW1lI3RvTWlsbGlzfSBhbmQge0BsaW5rIERhdGVUaW1lI3RvSlNEYXRlfS5cbiAqXG4gKiBUaGVyZSdzIHBsZW50eSBvdGhlcnMgZG9jdW1lbnRlZCBiZWxvdy4gSW4gYWRkaXRpb24sIGZvciBtb3JlIGluZm9ybWF0aW9uIG9uIHN1YnRsZXIgdG9waWNzIGxpa2UgaW50ZXJuYXRpb25hbGl6YXRpb24sIHRpbWUgem9uZXMsIGFsdGVybmF0aXZlIGNhbGVuZGFycywgdmFsaWRpdHksIGFuZCBzbyBvbiwgc2VlIHRoZSBleHRlcm5hbCBkb2N1bWVudGF0aW9uLlxuICovXG5jbGFzcyBEYXRlVGltZSB7XG4gIC8qKlxuICAgKiBAYWNjZXNzIHByaXZhdGVcbiAgICovXG4gIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgIGNvbnN0IHpvbmUgPSBjb25maWcuem9uZSB8fCBTZXR0aW5ncy5kZWZhdWx0Wm9uZTtcblxuICAgIGxldCBpbnZhbGlkID1cbiAgICAgIGNvbmZpZy5pbnZhbGlkIHx8XG4gICAgICAoTnVtYmVyLmlzTmFOKGNvbmZpZy50cykgPyBuZXcgSW52YWxpZChcImludmFsaWQgaW5wdXRcIikgOiBudWxsKSB8fFxuICAgICAgKCF6b25lLmlzVmFsaWQgPyB1bnN1cHBvcnRlZFpvbmUoem9uZSkgOiBudWxsKTtcbiAgICAvKipcbiAgICAgKiBAYWNjZXNzIHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLnRzID0gaXNVbmRlZmluZWQoY29uZmlnLnRzKSA/IFNldHRpbmdzLm5vdygpIDogY29uZmlnLnRzO1xuXG4gICAgbGV0IGMgPSBudWxsLFxuICAgICAgbyA9IG51bGw7XG4gICAgaWYgKCFpbnZhbGlkKSB7XG4gICAgICBjb25zdCB1bmNoYW5nZWQgPSBjb25maWcub2xkICYmIGNvbmZpZy5vbGQudHMgPT09IHRoaXMudHMgJiYgY29uZmlnLm9sZC56b25lLmVxdWFscyh6b25lKTtcblxuICAgICAgaWYgKHVuY2hhbmdlZCkge1xuICAgICAgICBbYywgb10gPSBbY29uZmlnLm9sZC5jLCBjb25maWcub2xkLm9dO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3Qgb3QgPSB6b25lLm9mZnNldCh0aGlzLnRzKTtcbiAgICAgICAgYyA9IHRzVG9PYmoodGhpcy50cywgb3QpO1xuICAgICAgICBpbnZhbGlkID0gTnVtYmVyLmlzTmFOKGMueWVhcikgPyBuZXcgSW52YWxpZChcImludmFsaWQgaW5wdXRcIikgOiBudWxsO1xuICAgICAgICBjID0gaW52YWxpZCA/IG51bGwgOiBjO1xuICAgICAgICBvID0gaW52YWxpZCA/IG51bGwgOiBvdDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAYWNjZXNzIHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl96b25lID0gem9uZTtcbiAgICAvKipcbiAgICAgKiBAYWNjZXNzIHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLmxvYyA9IGNvbmZpZy5sb2MgfHwgTG9jYWxlLmNyZWF0ZSgpO1xuICAgIC8qKlxuICAgICAqIEBhY2Nlc3MgcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuaW52YWxpZCA9IGludmFsaWQ7XG4gICAgLyoqXG4gICAgICogQGFjY2VzcyBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy53ZWVrRGF0YSA9IG51bGw7XG4gICAgLyoqXG4gICAgICogQGFjY2VzcyBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5jID0gYztcbiAgICAvKipcbiAgICAgKiBAYWNjZXNzIHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLm8gPSBvO1xuICAgIC8qKlxuICAgICAqIEBhY2Nlc3MgcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuaXNMdXhvbkRhdGVUaW1lID0gdHJ1ZTtcbiAgfVxuXG4gIC8vIENPTlNUUlVDVFxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBEYXRlVGltZSBmb3IgdGhlIGN1cnJlbnQgaW5zdGFudCwgaW4gdGhlIHN5c3RlbSdzIHRpbWUgem9uZS5cbiAgICpcbiAgICogVXNlIFNldHRpbmdzIHRvIG92ZXJyaWRlIHRoZXNlIGRlZmF1bHQgdmFsdWVzIGlmIG5lZWRlZC5cbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubm93KCkudG9JU08oKSAvL34+IG5vdyBpbiB0aGUgSVNPIGZvcm1hdFxuICAgKiBAcmV0dXJuIHtEYXRlVGltZX1cbiAgICovXG4gIHN0YXRpYyBub3coKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlVGltZSh7fSk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgbG9jYWwgRGF0ZVRpbWVcbiAgICogQHBhcmFtIHtudW1iZXJ9IFt5ZWFyXSAtIFRoZSBjYWxlbmRhciB5ZWFyLiBJZiBvbWl0dGVkIChhcyBpbiwgY2FsbCBgbG9jYWwoKWAgd2l0aCBubyBhcmd1bWVudHMpLCB0aGUgY3VycmVudCB0aW1lIHdpbGwgYmUgdXNlZFxuICAgKiBAcGFyYW0ge251bWJlcn0gW21vbnRoPTFdIC0gVGhlIG1vbnRoLCAxLWluZGV4ZWRcbiAgICogQHBhcmFtIHtudW1iZXJ9IFtkYXk9MV0gLSBUaGUgZGF5IG9mIHRoZSBtb250aCwgMS1pbmRleGVkXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBbaG91cj0wXSAtIFRoZSBob3VyIG9mIHRoZSBkYXksIGluIDI0LWhvdXIgdGltZVxuICAgKiBAcGFyYW0ge251bWJlcn0gW21pbnV0ZT0wXSAtIFRoZSBtaW51dGUgb2YgdGhlIGhvdXIsIG1lYW5pbmcgYSBudW1iZXIgYmV0d2VlbiAwIGFuZCA1OVxuICAgKiBAcGFyYW0ge251bWJlcn0gW3NlY29uZD0wXSAtIFRoZSBzZWNvbmQgb2YgdGhlIG1pbnV0ZSwgbWVhbmluZyBhIG51bWJlciBiZXR3ZWVuIDAgYW5kIDU5XG4gICAqIEBwYXJhbSB7bnVtYmVyfSBbbWlsbGlzZWNvbmQ9MF0gLSBUaGUgbWlsbGlzZWNvbmQgb2YgdGhlIHNlY29uZCwgbWVhbmluZyBhIG51bWJlciBiZXR3ZWVuIDAgYW5kIDk5OVxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgpICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vfj4gbm93XG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKHsgem9uZTogXCJBbWVyaWNhL05ld19Zb3JrXCIgfSkgICAgICAvL34+IG5vdywgaW4gVVMgZWFzdCBjb2FzdCB0aW1lXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTcpICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9+PiAyMDE3LTAxLTAxVDAwOjAwOjAwXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTcsIDMpICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9+PiAyMDE3LTAzLTAxVDAwOjAwOjAwXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTcsIDMsIDEyLCB7IGxvY2FsZTogXCJmclwiIH0pICAgICAvL34+IDIwMTctMDMtMTJUMDA6MDA6MDAsIHdpdGggYSBGcmVuY2ggbG9jYWxlXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTcsIDMsIDEyLCA1KSAgICAgICAgICAgICAgICAgICAgLy9+PiAyMDE3LTAzLTEyVDA1OjAwOjAwXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTcsIDMsIDEyLCA1LCB7IHpvbmU6IFwidXRjXCIgfSkgICAvL34+IDIwMTctMDMtMTJUMDU6MDA6MDAsIGluIFVUQ1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE3LCAzLCAxMiwgNSwgNDUpICAgICAgICAgICAgICAgIC8vfj4gMjAxNy0wMy0xMlQwNTo0NTowMFxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE3LCAzLCAxMiwgNSwgNDUsIDEwKSAgICAgICAgICAgIC8vfj4gMjAxNy0wMy0xMlQwNTo0NToxMFxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE3LCAzLCAxMiwgNSwgNDUsIDEwLCA3NjUpICAgICAgIC8vfj4gMjAxNy0wMy0xMlQwNTo0NToxMC43NjVcbiAgICogQHJldHVybiB7RGF0ZVRpbWV9XG4gICAqL1xuICBzdGF0aWMgbG9jYWwoKSB7XG4gICAgY29uc3QgW29wdHMsIGFyZ3NdID0gbGFzdE9wdHMoYXJndW1lbnRzKSxcbiAgICAgIFt5ZWFyLCBtb250aCwgZGF5LCBob3VyLCBtaW51dGUsIHNlY29uZCwgbWlsbGlzZWNvbmRdID0gYXJncztcbiAgICByZXR1cm4gcXVpY2tEVCh7IHllYXIsIG1vbnRoLCBkYXksIGhvdXIsIG1pbnV0ZSwgc2Vjb25kLCBtaWxsaXNlY29uZCB9LCBvcHRzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBEYXRlVGltZSBpbiBVVENcbiAgICogQHBhcmFtIHtudW1iZXJ9IFt5ZWFyXSAtIFRoZSBjYWxlbmRhciB5ZWFyLiBJZiBvbWl0dGVkIChhcyBpbiwgY2FsbCBgdXRjKClgIHdpdGggbm8gYXJndW1lbnRzKSwgdGhlIGN1cnJlbnQgdGltZSB3aWxsIGJlIHVzZWRcbiAgICogQHBhcmFtIHtudW1iZXJ9IFttb250aD0xXSAtIFRoZSBtb250aCwgMS1pbmRleGVkXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBbZGF5PTFdIC0gVGhlIGRheSBvZiB0aGUgbW9udGhcbiAgICogQHBhcmFtIHtudW1iZXJ9IFtob3VyPTBdIC0gVGhlIGhvdXIgb2YgdGhlIGRheSwgaW4gMjQtaG91ciB0aW1lXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBbbWludXRlPTBdIC0gVGhlIG1pbnV0ZSBvZiB0aGUgaG91ciwgbWVhbmluZyBhIG51bWJlciBiZXR3ZWVuIDAgYW5kIDU5XG4gICAqIEBwYXJhbSB7bnVtYmVyfSBbc2Vjb25kPTBdIC0gVGhlIHNlY29uZCBvZiB0aGUgbWludXRlLCBtZWFuaW5nIGEgbnVtYmVyIGJldHdlZW4gMCBhbmQgNTlcbiAgICogQHBhcmFtIHtudW1iZXJ9IFttaWxsaXNlY29uZD0wXSAtIFRoZSBtaWxsaXNlY29uZCBvZiB0aGUgc2Vjb25kLCBtZWFuaW5nIGEgbnVtYmVyIGJldHdlZW4gMCBhbmQgOTk5XG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIC0gY29uZmlndXJhdGlvbiBvcHRpb25zIGZvciB0aGUgRGF0ZVRpbWVcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRpb25zLmxvY2FsZV0gLSBhIGxvY2FsZSB0byBzZXQgb24gdGhlIHJlc3VsdGluZyBEYXRlVGltZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdGlvbnMub3V0cHV0Q2FsZW5kYXJdIC0gdGhlIG91dHB1dCBjYWxlbmRhciB0byBzZXQgb24gdGhlIHJlc3VsdGluZyBEYXRlVGltZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdGlvbnMubnVtYmVyaW5nU3lzdGVtXSAtIHRoZSBudW1iZXJpbmcgc3lzdGVtIHRvIHNldCBvbiB0aGUgcmVzdWx0aW5nIERhdGVUaW1lIGluc3RhbmNlXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLnV0YygpICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vfj4gbm93XG4gICAqIEBleGFtcGxlIERhdGVUaW1lLnV0YygyMDE3KSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vfj4gMjAxNy0wMS0wMVQwMDowMDowMFpcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUudXRjKDIwMTcsIDMpICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9+PiAyMDE3LTAzLTAxVDAwOjAwOjAwWlxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS51dGMoMjAxNywgMywgMTIpICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL34+IDIwMTctMDMtMTJUMDA6MDA6MDBaXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLnV0YygyMDE3LCAzLCAxMiwgNSkgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vfj4gMjAxNy0wMy0xMlQwNTowMDowMFpcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUudXRjKDIwMTcsIDMsIDEyLCA1LCA0NSkgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9+PiAyMDE3LTAzLTEyVDA1OjQ1OjAwWlxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS51dGMoMjAxNywgMywgMTIsIDUsIDQ1LCB7IGxvY2FsZTogXCJmclwiIH0pICAgICAgICAgIC8vfj4gMjAxNy0wMy0xMlQwNTo0NTowMFogd2l0aCBhIEZyZW5jaCBsb2NhbGVcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUudXRjKDIwMTcsIDMsIDEyLCA1LCA0NSwgMTApICAgICAgICAgICAgICAgICAgICAgICAgLy9+PiAyMDE3LTAzLTEyVDA1OjQ1OjEwWlxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS51dGMoMjAxNywgMywgMTIsIDUsIDQ1LCAxMCwgNzY1LCB7IGxvY2FsZTogXCJmclwiIH0pIC8vfj4gMjAxNy0wMy0xMlQwNTo0NToxMC43NjVaIHdpdGggYSBGcmVuY2ggbG9jYWxlXG4gICAqIEByZXR1cm4ge0RhdGVUaW1lfVxuICAgKi9cbiAgc3RhdGljIHV0YygpIHtcbiAgICBjb25zdCBbb3B0cywgYXJnc10gPSBsYXN0T3B0cyhhcmd1bWVudHMpLFxuICAgICAgW3llYXIsIG1vbnRoLCBkYXksIGhvdXIsIG1pbnV0ZSwgc2Vjb25kLCBtaWxsaXNlY29uZF0gPSBhcmdzO1xuXG4gICAgb3B0cy56b25lID0gRml4ZWRPZmZzZXRab25lLnV0Y0luc3RhbmNlO1xuICAgIHJldHVybiBxdWlja0RUKHsgeWVhciwgbW9udGgsIGRheSwgaG91ciwgbWludXRlLCBzZWNvbmQsIG1pbGxpc2Vjb25kIH0sIG9wdHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIERhdGVUaW1lIGZyb20gYSBKYXZhU2NyaXB0IERhdGUgb2JqZWN0LiBVc2VzIHRoZSBkZWZhdWx0IHpvbmUuXG4gICAqIEBwYXJhbSB7RGF0ZX0gZGF0ZSAtIGEgSmF2YVNjcmlwdCBEYXRlIG9iamVjdFxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAtIGNvbmZpZ3VyYXRpb24gb3B0aW9ucyBmb3IgdGhlIERhdGVUaW1lXG4gICAqIEBwYXJhbSB7c3RyaW5nfFpvbmV9IFtvcHRpb25zLnpvbmU9J2xvY2FsJ10gLSB0aGUgem9uZSB0byBwbGFjZSB0aGUgRGF0ZVRpbWUgaW50b1xuICAgKiBAcmV0dXJuIHtEYXRlVGltZX1cbiAgICovXG4gIHN0YXRpYyBmcm9tSlNEYXRlKGRhdGUsIG9wdGlvbnMgPSB7fSkge1xuICAgIGNvbnN0IHRzID0gaXNEYXRlKGRhdGUpID8gZGF0ZS52YWx1ZU9mKCkgOiBOYU47XG4gICAgaWYgKE51bWJlci5pc05hTih0cykpIHtcbiAgICAgIHJldHVybiBEYXRlVGltZS5pbnZhbGlkKFwiaW52YWxpZCBpbnB1dFwiKTtcbiAgICB9XG5cbiAgICBjb25zdCB6b25lVG9Vc2UgPSBub3JtYWxpemVab25lKG9wdGlvbnMuem9uZSwgU2V0dGluZ3MuZGVmYXVsdFpvbmUpO1xuICAgIGlmICghem9uZVRvVXNlLmlzVmFsaWQpIHtcbiAgICAgIHJldHVybiBEYXRlVGltZS5pbnZhbGlkKHVuc3VwcG9ydGVkWm9uZSh6b25lVG9Vc2UpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IERhdGVUaW1lKHtcbiAgICAgIHRzOiB0cyxcbiAgICAgIHpvbmU6IHpvbmVUb1VzZSxcbiAgICAgIGxvYzogTG9jYWxlLmZyb21PYmplY3Qob3B0aW9ucyksXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgRGF0ZVRpbWUgZnJvbSBhIG51bWJlciBvZiBtaWxsaXNlY29uZHMgc2luY2UgdGhlIGVwb2NoIChtZWFuaW5nIHNpbmNlIDEgSmFudWFyeSAxOTcwIDAwOjAwOjAwIFVUQykuIFVzZXMgdGhlIGRlZmF1bHQgem9uZS5cbiAgICogQHBhcmFtIHtudW1iZXJ9IG1pbGxpc2Vjb25kcyAtIGEgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBzaW5jZSAxOTcwIFVUQ1xuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAtIGNvbmZpZ3VyYXRpb24gb3B0aW9ucyBmb3IgdGhlIERhdGVUaW1lXG4gICAqIEBwYXJhbSB7c3RyaW5nfFpvbmV9IFtvcHRpb25zLnpvbmU9J2xvY2FsJ10gLSB0aGUgem9uZSB0byBwbGFjZSB0aGUgRGF0ZVRpbWUgaW50b1xuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdGlvbnMubG9jYWxlXSAtIGEgbG9jYWxlIHRvIHNldCBvbiB0aGUgcmVzdWx0aW5nIERhdGVUaW1lIGluc3RhbmNlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLm91dHB1dENhbGVuZGFyIC0gdGhlIG91dHB1dCBjYWxlbmRhciB0byBzZXQgb24gdGhlIHJlc3VsdGluZyBEYXRlVGltZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5udW1iZXJpbmdTeXN0ZW0gLSB0aGUgbnVtYmVyaW5nIHN5c3RlbSB0byBzZXQgb24gdGhlIHJlc3VsdGluZyBEYXRlVGltZSBpbnN0YW5jZVxuICAgKiBAcmV0dXJuIHtEYXRlVGltZX1cbiAgICovXG4gIHN0YXRpYyBmcm9tTWlsbGlzKG1pbGxpc2Vjb25kcywgb3B0aW9ucyA9IHt9KSB7XG4gICAgaWYgKCFpc051bWJlcihtaWxsaXNlY29uZHMpKSB7XG4gICAgICB0aHJvdyBuZXcgSW52YWxpZEFyZ3VtZW50RXJyb3IoXG4gICAgICAgIGBmcm9tTWlsbGlzIHJlcXVpcmVzIGEgbnVtZXJpY2FsIGlucHV0LCBidXQgcmVjZWl2ZWQgYSAke3R5cGVvZiBtaWxsaXNlY29uZHN9IHdpdGggdmFsdWUgJHttaWxsaXNlY29uZHN9YFxuICAgICAgKTtcbiAgICB9IGVsc2UgaWYgKG1pbGxpc2Vjb25kcyA8IC1NQVhfREFURSB8fCBtaWxsaXNlY29uZHMgPiBNQVhfREFURSkge1xuICAgICAgLy8gdGhpcyBpc24ndCBwZXJmZWN0IGJlY2F1c2UgYmVjYXVzZSB3ZSBjYW4gc3RpbGwgZW5kIHVwIG91dCBvZiByYW5nZSBiZWNhdXNlIG9mIGFkZGl0aW9uYWwgc2hpZnRpbmcsIGJ1dCBpdCdzIGEgc3RhcnRcbiAgICAgIHJldHVybiBEYXRlVGltZS5pbnZhbGlkKFwiVGltZXN0YW1wIG91dCBvZiByYW5nZVwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG5ldyBEYXRlVGltZSh7XG4gICAgICAgIHRzOiBtaWxsaXNlY29uZHMsXG4gICAgICAgIHpvbmU6IG5vcm1hbGl6ZVpvbmUob3B0aW9ucy56b25lLCBTZXR0aW5ncy5kZWZhdWx0Wm9uZSksXG4gICAgICAgIGxvYzogTG9jYWxlLmZyb21PYmplY3Qob3B0aW9ucyksXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgRGF0ZVRpbWUgZnJvbSBhIG51bWJlciBvZiBzZWNvbmRzIHNpbmNlIHRoZSBlcG9jaCAobWVhbmluZyBzaW5jZSAxIEphbnVhcnkgMTk3MCAwMDowMDowMCBVVEMpLiBVc2VzIHRoZSBkZWZhdWx0IHpvbmUuXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzZWNvbmRzIC0gYSBudW1iZXIgb2Ygc2Vjb25kcyBzaW5jZSAxOTcwIFVUQ1xuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAtIGNvbmZpZ3VyYXRpb24gb3B0aW9ucyBmb3IgdGhlIERhdGVUaW1lXG4gICAqIEBwYXJhbSB7c3RyaW5nfFpvbmV9IFtvcHRpb25zLnpvbmU9J2xvY2FsJ10gLSB0aGUgem9uZSB0byBwbGFjZSB0aGUgRGF0ZVRpbWUgaW50b1xuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdGlvbnMubG9jYWxlXSAtIGEgbG9jYWxlIHRvIHNldCBvbiB0aGUgcmVzdWx0aW5nIERhdGVUaW1lIGluc3RhbmNlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLm91dHB1dENhbGVuZGFyIC0gdGhlIG91dHB1dCBjYWxlbmRhciB0byBzZXQgb24gdGhlIHJlc3VsdGluZyBEYXRlVGltZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5udW1iZXJpbmdTeXN0ZW0gLSB0aGUgbnVtYmVyaW5nIHN5c3RlbSB0byBzZXQgb24gdGhlIHJlc3VsdGluZyBEYXRlVGltZSBpbnN0YW5jZVxuICAgKiBAcmV0dXJuIHtEYXRlVGltZX1cbiAgICovXG4gIHN0YXRpYyBmcm9tU2Vjb25kcyhzZWNvbmRzLCBvcHRpb25zID0ge30pIHtcbiAgICBpZiAoIWlzTnVtYmVyKHNlY29uZHMpKSB7XG4gICAgICB0aHJvdyBuZXcgSW52YWxpZEFyZ3VtZW50RXJyb3IoXCJmcm9tU2Vjb25kcyByZXF1aXJlcyBhIG51bWVyaWNhbCBpbnB1dFwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG5ldyBEYXRlVGltZSh7XG4gICAgICAgIHRzOiBzZWNvbmRzICogMTAwMCxcbiAgICAgICAgem9uZTogbm9ybWFsaXplWm9uZShvcHRpb25zLnpvbmUsIFNldHRpbmdzLmRlZmF1bHRab25lKSxcbiAgICAgICAgbG9jOiBMb2NhbGUuZnJvbU9iamVjdChvcHRpb25zKSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBEYXRlVGltZSBmcm9tIGEgSmF2YVNjcmlwdCBvYmplY3Qgd2l0aCBrZXlzIGxpa2UgJ3llYXInIGFuZCAnaG91cicgd2l0aCByZWFzb25hYmxlIGRlZmF1bHRzLlxuICAgKiBAcGFyYW0ge09iamVjdH0gb2JqIC0gdGhlIG9iamVjdCB0byBjcmVhdGUgdGhlIERhdGVUaW1lIGZyb21cbiAgICogQHBhcmFtIHtudW1iZXJ9IG9iai55ZWFyIC0gYSB5ZWFyLCBzdWNoIGFzIDE5ODdcbiAgICogQHBhcmFtIHtudW1iZXJ9IG9iai5tb250aCAtIGEgbW9udGgsIDEtMTJcbiAgICogQHBhcmFtIHtudW1iZXJ9IG9iai5kYXkgLSBhIGRheSBvZiB0aGUgbW9udGgsIDEtMzEsIGRlcGVuZGluZyBvbiB0aGUgbW9udGhcbiAgICogQHBhcmFtIHtudW1iZXJ9IG9iai5vcmRpbmFsIC0gZGF5IG9mIHRoZSB5ZWFyLCAxLTM2NSBvciAzNjZcbiAgICogQHBhcmFtIHtudW1iZXJ9IG9iai53ZWVrWWVhciAtIGFuIElTTyB3ZWVrIHllYXJcbiAgICogQHBhcmFtIHtudW1iZXJ9IG9iai53ZWVrTnVtYmVyIC0gYW4gSVNPIHdlZWsgbnVtYmVyLCBiZXR3ZWVuIDEgYW5kIDUyIG9yIDUzLCBkZXBlbmRpbmcgb24gdGhlIHllYXJcbiAgICogQHBhcmFtIHtudW1iZXJ9IG9iai53ZWVrZGF5IC0gYW4gSVNPIHdlZWtkYXksIDEtNywgd2hlcmUgMSBpcyBNb25kYXkgYW5kIDcgaXMgU3VuZGF5XG4gICAqIEBwYXJhbSB7bnVtYmVyfSBvYmouaG91ciAtIGhvdXIgb2YgdGhlIGRheSwgMC0yM1xuICAgKiBAcGFyYW0ge251bWJlcn0gb2JqLm1pbnV0ZSAtIG1pbnV0ZSBvZiB0aGUgaG91ciwgMC01OVxuICAgKiBAcGFyYW0ge251bWJlcn0gb2JqLnNlY29uZCAtIHNlY29uZCBvZiB0aGUgbWludXRlLCAwLTU5XG4gICAqIEBwYXJhbSB7bnVtYmVyfSBvYmoubWlsbGlzZWNvbmQgLSBtaWxsaXNlY29uZCBvZiB0aGUgc2Vjb25kLCAwLTk5OVxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyAtIG9wdGlvbnMgZm9yIGNyZWF0aW5nIHRoaXMgRGF0ZVRpbWVcbiAgICogQHBhcmFtIHtzdHJpbmd8Wm9uZX0gW29wdHMuem9uZT0nbG9jYWwnXSAtIGludGVycHJldCB0aGUgbnVtYmVycyBpbiB0aGUgY29udGV4dCBvZiBhIHBhcnRpY3VsYXIgem9uZS4gQ2FuIHRha2UgYW55IHZhbHVlIHRha2VuIGFzIHRoZSBmaXJzdCBhcmd1bWVudCB0byBzZXRab25lKClcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLmxvY2FsZT0nc3lzdGVtJ3MgbG9jYWxlJ10gLSBhIGxvY2FsZSB0byBzZXQgb24gdGhlIHJlc3VsdGluZyBEYXRlVGltZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0cy5vdXRwdXRDYWxlbmRhciAtIHRoZSBvdXRwdXQgY2FsZW5kYXIgdG8gc2V0IG9uIHRoZSByZXN1bHRpbmcgRGF0ZVRpbWUgaW5zdGFuY2VcbiAgICogQHBhcmFtIHtzdHJpbmd9IG9wdHMubnVtYmVyaW5nU3lzdGVtIC0gdGhlIG51bWJlcmluZyBzeXN0ZW0gdG8gc2V0IG9uIHRoZSByZXN1bHRpbmcgRGF0ZVRpbWUgaW5zdGFuY2VcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUuZnJvbU9iamVjdCh7IHllYXI6IDE5ODIsIG1vbnRoOiA1LCBkYXk6IDI1fSkudG9JU09EYXRlKCkgLy89PiAnMTk4Mi0wNS0yNSdcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUuZnJvbU9iamVjdCh7IHllYXI6IDE5ODIgfSkudG9JU09EYXRlKCkgLy89PiAnMTk4Mi0wMS0wMSdcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUuZnJvbU9iamVjdCh7IGhvdXI6IDEwLCBtaW51dGU6IDI2LCBzZWNvbmQ6IDYgfSkgLy9+PiB0b2RheSBhdCAxMDoyNjowNlxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5mcm9tT2JqZWN0KHsgaG91cjogMTAsIG1pbnV0ZTogMjYsIHNlY29uZDogNiB9LCB7IHpvbmU6ICd1dGMnIH0pLFxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5mcm9tT2JqZWN0KHsgaG91cjogMTAsIG1pbnV0ZTogMjYsIHNlY29uZDogNiB9LCB7IHpvbmU6ICdsb2NhbCcgfSlcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUuZnJvbU9iamVjdCh7IGhvdXI6IDEwLCBtaW51dGU6IDI2LCBzZWNvbmQ6IDYgfSwgeyB6b25lOiAnQW1lcmljYS9OZXdfWW9yaycgfSlcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUuZnJvbU9iamVjdCh7IHdlZWtZZWFyOiAyMDE2LCB3ZWVrTnVtYmVyOiAyLCB3ZWVrZGF5OiAzIH0pLnRvSVNPRGF0ZSgpIC8vPT4gJzIwMTYtMDEtMTMnXG4gICAqIEByZXR1cm4ge0RhdGVUaW1lfVxuICAgKi9cbiAgc3RhdGljIGZyb21PYmplY3Qob2JqLCBvcHRzID0ge30pIHtcbiAgICBvYmogPSBvYmogfHwge307XG4gICAgY29uc3Qgem9uZVRvVXNlID0gbm9ybWFsaXplWm9uZShvcHRzLnpvbmUsIFNldHRpbmdzLmRlZmF1bHRab25lKTtcbiAgICBpZiAoIXpvbmVUb1VzZS5pc1ZhbGlkKSB7XG4gICAgICByZXR1cm4gRGF0ZVRpbWUuaW52YWxpZCh1bnN1cHBvcnRlZFpvbmUoem9uZVRvVXNlKSk7XG4gICAgfVxuXG4gICAgY29uc3QgdHNOb3cgPSBTZXR0aW5ncy5ub3coKSxcbiAgICAgIG9mZnNldFByb3ZpcyA9ICFpc1VuZGVmaW5lZChvcHRzLnNwZWNpZmljT2Zmc2V0KVxuICAgICAgICA/IG9wdHMuc3BlY2lmaWNPZmZzZXRcbiAgICAgICAgOiB6b25lVG9Vc2Uub2Zmc2V0KHRzTm93KSxcbiAgICAgIG5vcm1hbGl6ZWQgPSBub3JtYWxpemVPYmplY3Qob2JqLCBub3JtYWxpemVVbml0KSxcbiAgICAgIGNvbnRhaW5zT3JkaW5hbCA9ICFpc1VuZGVmaW5lZChub3JtYWxpemVkLm9yZGluYWwpLFxuICAgICAgY29udGFpbnNHcmVnb3JZZWFyID0gIWlzVW5kZWZpbmVkKG5vcm1hbGl6ZWQueWVhciksXG4gICAgICBjb250YWluc0dyZWdvck1EID0gIWlzVW5kZWZpbmVkKG5vcm1hbGl6ZWQubW9udGgpIHx8ICFpc1VuZGVmaW5lZChub3JtYWxpemVkLmRheSksXG4gICAgICBjb250YWluc0dyZWdvciA9IGNvbnRhaW5zR3JlZ29yWWVhciB8fCBjb250YWluc0dyZWdvck1ELFxuICAgICAgZGVmaW5pdGVXZWVrRGVmID0gbm9ybWFsaXplZC53ZWVrWWVhciB8fCBub3JtYWxpemVkLndlZWtOdW1iZXIsXG4gICAgICBsb2MgPSBMb2NhbGUuZnJvbU9iamVjdChvcHRzKTtcblxuICAgIC8vIGNhc2VzOlxuICAgIC8vIGp1c3QgYSB3ZWVrZGF5IC0+IHRoaXMgd2VlaydzIGluc3RhbmNlIG9mIHRoYXQgd2Vla2RheSwgbm8gd29ycmllc1xuICAgIC8vIChncmVnb3JpYW4gZGF0YSBvciBvcmRpbmFsKSArICh3ZWVrWWVhciBvciB3ZWVrTnVtYmVyKSAtPiBlcnJvclxuICAgIC8vIChncmVnb3JpYW4gbW9udGggb3IgZGF5KSArIG9yZGluYWwgLT4gZXJyb3JcbiAgICAvLyBvdGhlcndpc2UganVzdCB1c2Ugd2Vla3Mgb3Igb3JkaW5hbHMgb3IgZ3JlZ29yaWFuLCBkZXBlbmRpbmcgb24gd2hhdCdzIHNwZWNpZmllZFxuXG4gICAgaWYgKChjb250YWluc0dyZWdvciB8fCBjb250YWluc09yZGluYWwpICYmIGRlZmluaXRlV2Vla0RlZikge1xuICAgICAgdGhyb3cgbmV3IENvbmZsaWN0aW5nU3BlY2lmaWNhdGlvbkVycm9yKFxuICAgICAgICBcIkNhbid0IG1peCB3ZWVrWWVhci93ZWVrTnVtYmVyIHVuaXRzIHdpdGggeWVhci9tb250aC9kYXkgb3Igb3JkaW5hbHNcIlxuICAgICAgKTtcbiAgICB9XG5cbiAgICBpZiAoY29udGFpbnNHcmVnb3JNRCAmJiBjb250YWluc09yZGluYWwpIHtcbiAgICAgIHRocm93IG5ldyBDb25mbGljdGluZ1NwZWNpZmljYXRpb25FcnJvcihcIkNhbid0IG1peCBvcmRpbmFsIGRhdGVzIHdpdGggbW9udGgvZGF5XCIpO1xuICAgIH1cblxuICAgIGNvbnN0IHVzZVdlZWtEYXRhID0gZGVmaW5pdGVXZWVrRGVmIHx8IChub3JtYWxpemVkLndlZWtkYXkgJiYgIWNvbnRhaW5zR3JlZ29yKTtcblxuICAgIC8vIGNvbmZpZ3VyZSBvdXJzZWx2ZXMgdG8gZGVhbCB3aXRoIGdyZWdvcmlhbiBkYXRlcyBvciB3ZWVrIHN0dWZmXG4gICAgbGV0IHVuaXRzLFxuICAgICAgZGVmYXVsdFZhbHVlcyxcbiAgICAgIG9iak5vdyA9IHRzVG9PYmoodHNOb3csIG9mZnNldFByb3Zpcyk7XG4gICAgaWYgKHVzZVdlZWtEYXRhKSB7XG4gICAgICB1bml0cyA9IG9yZGVyZWRXZWVrVW5pdHM7XG4gICAgICBkZWZhdWx0VmFsdWVzID0gZGVmYXVsdFdlZWtVbml0VmFsdWVzO1xuICAgICAgb2JqTm93ID0gZ3JlZ29yaWFuVG9XZWVrKG9iak5vdyk7XG4gICAgfSBlbHNlIGlmIChjb250YWluc09yZGluYWwpIHtcbiAgICAgIHVuaXRzID0gb3JkZXJlZE9yZGluYWxVbml0cztcbiAgICAgIGRlZmF1bHRWYWx1ZXMgPSBkZWZhdWx0T3JkaW5hbFVuaXRWYWx1ZXM7XG4gICAgICBvYmpOb3cgPSBncmVnb3JpYW5Ub09yZGluYWwob2JqTm93KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdW5pdHMgPSBvcmRlcmVkVW5pdHM7XG4gICAgICBkZWZhdWx0VmFsdWVzID0gZGVmYXVsdFVuaXRWYWx1ZXM7XG4gICAgfVxuXG4gICAgLy8gc2V0IGRlZmF1bHQgdmFsdWVzIGZvciBtaXNzaW5nIHN0dWZmXG4gICAgbGV0IGZvdW5kRmlyc3QgPSBmYWxzZTtcbiAgICBmb3IgKGNvbnN0IHUgb2YgdW5pdHMpIHtcbiAgICAgIGNvbnN0IHYgPSBub3JtYWxpemVkW3VdO1xuICAgICAgaWYgKCFpc1VuZGVmaW5lZCh2KSkge1xuICAgICAgICBmb3VuZEZpcnN0ID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSBpZiAoZm91bmRGaXJzdCkge1xuICAgICAgICBub3JtYWxpemVkW3VdID0gZGVmYXVsdFZhbHVlc1t1XTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5vcm1hbGl6ZWRbdV0gPSBvYmpOb3dbdV07XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gbWFrZSBzdXJlIHRoZSB2YWx1ZXMgd2UgaGF2ZSBhcmUgaW4gcmFuZ2VcbiAgICBjb25zdCBoaWdoZXJPcmRlckludmFsaWQgPSB1c2VXZWVrRGF0YVxuICAgICAgICA/IGhhc0ludmFsaWRXZWVrRGF0YShub3JtYWxpemVkKVxuICAgICAgICA6IGNvbnRhaW5zT3JkaW5hbFxuICAgICAgICA/IGhhc0ludmFsaWRPcmRpbmFsRGF0YShub3JtYWxpemVkKVxuICAgICAgICA6IGhhc0ludmFsaWRHcmVnb3JpYW5EYXRhKG5vcm1hbGl6ZWQpLFxuICAgICAgaW52YWxpZCA9IGhpZ2hlck9yZGVySW52YWxpZCB8fCBoYXNJbnZhbGlkVGltZURhdGEobm9ybWFsaXplZCk7XG5cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgcmV0dXJuIERhdGVUaW1lLmludmFsaWQoaW52YWxpZCk7XG4gICAgfVxuXG4gICAgLy8gY29tcHV0ZSB0aGUgYWN0dWFsIHRpbWVcbiAgICBjb25zdCBncmVnb3JpYW4gPSB1c2VXZWVrRGF0YVxuICAgICAgICA/IHdlZWtUb0dyZWdvcmlhbihub3JtYWxpemVkKVxuICAgICAgICA6IGNvbnRhaW5zT3JkaW5hbFxuICAgICAgICA/IG9yZGluYWxUb0dyZWdvcmlhbihub3JtYWxpemVkKVxuICAgICAgICA6IG5vcm1hbGl6ZWQsXG4gICAgICBbdHNGaW5hbCwgb2Zmc2V0RmluYWxdID0gb2JqVG9UUyhncmVnb3JpYW4sIG9mZnNldFByb3Zpcywgem9uZVRvVXNlKSxcbiAgICAgIGluc3QgPSBuZXcgRGF0ZVRpbWUoe1xuICAgICAgICB0czogdHNGaW5hbCxcbiAgICAgICAgem9uZTogem9uZVRvVXNlLFxuICAgICAgICBvOiBvZmZzZXRGaW5hbCxcbiAgICAgICAgbG9jLFxuICAgICAgfSk7XG5cbiAgICAvLyBncmVnb3JpYW4gZGF0YSArIHdlZWtkYXkgc2VydmVzIG9ubHkgdG8gdmFsaWRhdGVcbiAgICBpZiAobm9ybWFsaXplZC53ZWVrZGF5ICYmIGNvbnRhaW5zR3JlZ29yICYmIG9iai53ZWVrZGF5ICE9PSBpbnN0LndlZWtkYXkpIHtcbiAgICAgIHJldHVybiBEYXRlVGltZS5pbnZhbGlkKFxuICAgICAgICBcIm1pc21hdGNoZWQgd2Vla2RheVwiLFxuICAgICAgICBgeW91IGNhbid0IHNwZWNpZnkgYm90aCBhIHdlZWtkYXkgb2YgJHtub3JtYWxpemVkLndlZWtkYXl9IGFuZCBhIGRhdGUgb2YgJHtpbnN0LnRvSVNPKCl9YFxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gaW5zdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBEYXRlVGltZSBmcm9tIGFuIElTTyA4NjAxIHN0cmluZ1xuICAgKiBAcGFyYW0ge3N0cmluZ30gdGV4dCAtIHRoZSBJU08gc3RyaW5nXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIC0gb3B0aW9ucyB0byBhZmZlY3QgdGhlIGNyZWF0aW9uXG4gICAqIEBwYXJhbSB7c3RyaW5nfFpvbmV9IFtvcHRzLnpvbmU9J2xvY2FsJ10gLSB1c2UgdGhpcyB6b25lIGlmIG5vIG9mZnNldCBpcyBzcGVjaWZpZWQgaW4gdGhlIGlucHV0IHN0cmluZyBpdHNlbGYuIFdpbGwgYWxzbyBjb252ZXJ0IHRoZSB0aW1lIHRvIHRoaXMgem9uZVxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRzLnNldFpvbmU9ZmFsc2VdIC0gb3ZlcnJpZGUgdGhlIHpvbmUgd2l0aCBhIGZpeGVkLW9mZnNldCB6b25lIHNwZWNpZmllZCBpbiB0aGUgc3RyaW5nIGl0c2VsZiwgaWYgaXQgc3BlY2lmaWVzIG9uZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMubG9jYWxlPSdzeXN0ZW0ncyBsb2NhbGUnXSAtIGEgbG9jYWxlIHRvIHNldCBvbiB0aGUgcmVzdWx0aW5nIERhdGVUaW1lIGluc3RhbmNlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5vdXRwdXRDYWxlbmRhcl0gLSB0aGUgb3V0cHV0IGNhbGVuZGFyIHRvIHNldCBvbiB0aGUgcmVzdWx0aW5nIERhdGVUaW1lIGluc3RhbmNlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5udW1iZXJpbmdTeXN0ZW1dIC0gdGhlIG51bWJlcmluZyBzeXN0ZW0gdG8gc2V0IG9uIHRoZSByZXN1bHRpbmcgRGF0ZVRpbWUgaW5zdGFuY2VcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUuZnJvbUlTTygnMjAxNi0wNS0yNVQwOTowODozNC4xMjMnKVxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5mcm9tSVNPKCcyMDE2LTA1LTI1VDA5OjA4OjM0LjEyMyswNjowMCcpXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmZyb21JU08oJzIwMTYtMDUtMjVUMDk6MDg6MzQuMTIzKzA2OjAwJywge3NldFpvbmU6IHRydWV9KVxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5mcm9tSVNPKCcyMDE2LTA1LTI1VDA5OjA4OjM0LjEyMycsIHt6b25lOiAndXRjJ30pXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmZyb21JU08oJzIwMTYtVzA1LTQnKVxuICAgKiBAcmV0dXJuIHtEYXRlVGltZX1cbiAgICovXG4gIHN0YXRpYyBmcm9tSVNPKHRleHQsIG9wdHMgPSB7fSkge1xuICAgIGNvbnN0IFt2YWxzLCBwYXJzZWRab25lXSA9IHBhcnNlSVNPRGF0ZSh0ZXh0KTtcbiAgICByZXR1cm4gcGFyc2VEYXRhVG9EYXRlVGltZSh2YWxzLCBwYXJzZWRab25lLCBvcHRzLCBcIklTTyA4NjAxXCIsIHRleHQpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIERhdGVUaW1lIGZyb20gYW4gUkZDIDI4MjIgc3RyaW5nXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gdGhlIFJGQyAyODIyIHN0cmluZ1xuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyAtIG9wdGlvbnMgdG8gYWZmZWN0IHRoZSBjcmVhdGlvblxuICAgKiBAcGFyYW0ge3N0cmluZ3xab25lfSBbb3B0cy56b25lPSdsb2NhbCddIC0gY29udmVydCB0aGUgdGltZSB0byB0aGlzIHpvbmUuIFNpbmNlIHRoZSBvZmZzZXQgaXMgYWx3YXlzIHNwZWNpZmllZCBpbiB0aGUgc3RyaW5nIGl0c2VsZiwgdGhpcyBoYXMgbm8gZWZmZWN0IG9uIHRoZSBpbnRlcnByZXRhdGlvbiBvZiBzdHJpbmcsIG1lcmVseSB0aGUgem9uZSB0aGUgcmVzdWx0aW5nIERhdGVUaW1lIGlzIGV4cHJlc3NlZCBpbi5cbiAgICogQHBhcmFtIHtib29sZWFufSBbb3B0cy5zZXRab25lPWZhbHNlXSAtIG92ZXJyaWRlIHRoZSB6b25lIHdpdGggYSBmaXhlZC1vZmZzZXQgem9uZSBzcGVjaWZpZWQgaW4gdGhlIHN0cmluZyBpdHNlbGYsIGlmIGl0IHNwZWNpZmllcyBvbmVcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLmxvY2FsZT0nc3lzdGVtJ3MgbG9jYWxlJ10gLSBhIGxvY2FsZSB0byBzZXQgb24gdGhlIHJlc3VsdGluZyBEYXRlVGltZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0cy5vdXRwdXRDYWxlbmRhciAtIHRoZSBvdXRwdXQgY2FsZW5kYXIgdG8gc2V0IG9uIHRoZSByZXN1bHRpbmcgRGF0ZVRpbWUgaW5zdGFuY2VcbiAgICogQHBhcmFtIHtzdHJpbmd9IG9wdHMubnVtYmVyaW5nU3lzdGVtIC0gdGhlIG51bWJlcmluZyBzeXN0ZW0gdG8gc2V0IG9uIHRoZSByZXN1bHRpbmcgRGF0ZVRpbWUgaW5zdGFuY2VcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUuZnJvbVJGQzI4MjIoJzI1IE5vdiAyMDE2IDEzOjIzOjEyIEdNVCcpXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmZyb21SRkMyODIyKCdGcmksIDI1IE5vdiAyMDE2IDEzOjIzOjEyICswNjAwJylcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUuZnJvbVJGQzI4MjIoJzI1IE5vdiAyMDE2IDEzOjIzIFonKVxuICAgKiBAcmV0dXJuIHtEYXRlVGltZX1cbiAgICovXG4gIHN0YXRpYyBmcm9tUkZDMjgyMih0ZXh0LCBvcHRzID0ge30pIHtcbiAgICBjb25zdCBbdmFscywgcGFyc2VkWm9uZV0gPSBwYXJzZVJGQzI4MjJEYXRlKHRleHQpO1xuICAgIHJldHVybiBwYXJzZURhdGFUb0RhdGVUaW1lKHZhbHMsIHBhcnNlZFpvbmUsIG9wdHMsIFwiUkZDIDI4MjJcIiwgdGV4dCk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgRGF0ZVRpbWUgZnJvbSBhbiBIVFRQIGhlYWRlciBkYXRlXG4gICAqIEBzZWUgaHR0cHM6Ly93d3cudzMub3JnL1Byb3RvY29scy9yZmMyNjE2L3JmYzI2MTYtc2VjMy5odG1sI3NlYzMuMy4xXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gdGhlIEhUVFAgaGVhZGVyIGRhdGVcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgLSBvcHRpb25zIHRvIGFmZmVjdCB0aGUgY3JlYXRpb25cbiAgICogQHBhcmFtIHtzdHJpbmd8Wm9uZX0gW29wdHMuem9uZT0nbG9jYWwnXSAtIGNvbnZlcnQgdGhlIHRpbWUgdG8gdGhpcyB6b25lLiBTaW5jZSBIVFRQIGRhdGVzIGFyZSBhbHdheXMgaW4gVVRDLCB0aGlzIGhhcyBubyBlZmZlY3Qgb24gdGhlIGludGVycHJldGF0aW9uIG9mIHN0cmluZywgbWVyZWx5IHRoZSB6b25lIHRoZSByZXN1bHRpbmcgRGF0ZVRpbWUgaXMgZXhwcmVzc2VkIGluLlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRzLnNldFpvbmU9ZmFsc2VdIC0gb3ZlcnJpZGUgdGhlIHpvbmUgd2l0aCB0aGUgZml4ZWQtb2Zmc2V0IHpvbmUgc3BlY2lmaWVkIGluIHRoZSBzdHJpbmcuIEZvciBIVFRQIGRhdGVzLCB0aGlzIGlzIGFsd2F5cyBVVEMsIHNvIHRoaXMgb3B0aW9uIGlzIGVxdWl2YWxlbnQgdG8gc2V0dGluZyB0aGUgYHpvbmVgIG9wdGlvbiB0byAndXRjJywgYnV0IHRoaXMgb3B0aW9uIGlzIGluY2x1ZGVkIGZvciBjb25zaXN0ZW5jeSB3aXRoIHNpbWlsYXIgbWV0aG9kcy5cbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLmxvY2FsZT0nc3lzdGVtJ3MgbG9jYWxlJ10gLSBhIGxvY2FsZSB0byBzZXQgb24gdGhlIHJlc3VsdGluZyBEYXRlVGltZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0cy5vdXRwdXRDYWxlbmRhciAtIHRoZSBvdXRwdXQgY2FsZW5kYXIgdG8gc2V0IG9uIHRoZSByZXN1bHRpbmcgRGF0ZVRpbWUgaW5zdGFuY2VcbiAgICogQHBhcmFtIHtzdHJpbmd9IG9wdHMubnVtYmVyaW5nU3lzdGVtIC0gdGhlIG51bWJlcmluZyBzeXN0ZW0gdG8gc2V0IG9uIHRoZSByZXN1bHRpbmcgRGF0ZVRpbWUgaW5zdGFuY2VcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUuZnJvbUhUVFAoJ1N1biwgMDYgTm92IDE5OTQgMDg6NDk6MzcgR01UJylcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUuZnJvbUhUVFAoJ1N1bmRheSwgMDYtTm92LTk0IDA4OjQ5OjM3IEdNVCcpXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmZyb21IVFRQKCdTdW4gTm92ICA2IDA4OjQ5OjM3IDE5OTQnKVxuICAgKiBAcmV0dXJuIHtEYXRlVGltZX1cbiAgICovXG4gIHN0YXRpYyBmcm9tSFRUUCh0ZXh0LCBvcHRzID0ge30pIHtcbiAgICBjb25zdCBbdmFscywgcGFyc2VkWm9uZV0gPSBwYXJzZUhUVFBEYXRlKHRleHQpO1xuICAgIHJldHVybiBwYXJzZURhdGFUb0RhdGVUaW1lKHZhbHMsIHBhcnNlZFpvbmUsIG9wdHMsIFwiSFRUUFwiLCBvcHRzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBEYXRlVGltZSBmcm9tIGFuIGlucHV0IHN0cmluZyBhbmQgZm9ybWF0IHN0cmluZy5cbiAgICogRGVmYXVsdHMgdG8gZW4tVVMgaWYgbm8gbG9jYWxlIGhhcyBiZWVuIHNwZWNpZmllZCwgcmVnYXJkbGVzcyBvZiB0aGUgc3lzdGVtJ3MgbG9jYWxlLiBGb3IgYSB0YWJsZSBvZiB0b2tlbnMgYW5kIHRoZWlyIGludGVycHJldGF0aW9ucywgc2VlIFtoZXJlXShodHRwczovL21vbWVudC5naXRodWIuaW8vbHV4b24vIy9wYXJzaW5nP2lkPXRhYmxlLW9mLXRva2VucykuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gdGhlIHN0cmluZyB0byBwYXJzZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gZm10IC0gdGhlIGZvcm1hdCB0aGUgc3RyaW5nIGlzIGV4cGVjdGVkIHRvIGJlIGluIChzZWUgdGhlIGxpbmsgYmVsb3cgZm9yIHRoZSBmb3JtYXRzKVxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyAtIG9wdGlvbnMgdG8gYWZmZWN0IHRoZSBjcmVhdGlvblxuICAgKiBAcGFyYW0ge3N0cmluZ3xab25lfSBbb3B0cy56b25lPSdsb2NhbCddIC0gdXNlIHRoaXMgem9uZSBpZiBubyBvZmZzZXQgaXMgc3BlY2lmaWVkIGluIHRoZSBpbnB1dCBzdHJpbmcgaXRzZWxmLiBXaWxsIGFsc28gY29udmVydCB0aGUgRGF0ZVRpbWUgdG8gdGhpcyB6b25lXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdHMuc2V0Wm9uZT1mYWxzZV0gLSBvdmVycmlkZSB0aGUgem9uZSB3aXRoIGEgem9uZSBzcGVjaWZpZWQgaW4gdGhlIHN0cmluZyBpdHNlbGYsIGlmIGl0IHNwZWNpZmllcyBvbmVcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLmxvY2FsZT0nZW4tVVMnXSAtIGEgbG9jYWxlIHN0cmluZyB0byB1c2Ugd2hlbiBwYXJzaW5nLiBXaWxsIGFsc28gc2V0IHRoZSBEYXRlVGltZSB0byB0aGlzIGxvY2FsZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0cy5udW1iZXJpbmdTeXN0ZW0gLSB0aGUgbnVtYmVyaW5nIHN5c3RlbSB0byB1c2Ugd2hlbiBwYXJzaW5nLiBXaWxsIGFsc28gc2V0IHRoZSByZXN1bHRpbmcgRGF0ZVRpbWUgdG8gdGhpcyBudW1iZXJpbmcgc3lzdGVtXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRzLm91dHB1dENhbGVuZGFyIC0gdGhlIG91dHB1dCBjYWxlbmRhciB0byBzZXQgb24gdGhlIHJlc3VsdGluZyBEYXRlVGltZSBpbnN0YW5jZVxuICAgKiBAcmV0dXJuIHtEYXRlVGltZX1cbiAgICovXG4gIHN0YXRpYyBmcm9tRm9ybWF0KHRleHQsIGZtdCwgb3B0cyA9IHt9KSB7XG4gICAgaWYgKGlzVW5kZWZpbmVkKHRleHQpIHx8IGlzVW5kZWZpbmVkKGZtdCkpIHtcbiAgICAgIHRocm93IG5ldyBJbnZhbGlkQXJndW1lbnRFcnJvcihcImZyb21Gb3JtYXQgcmVxdWlyZXMgYW4gaW5wdXQgc3RyaW5nIGFuZCBhIGZvcm1hdFwiKTtcbiAgICB9XG5cbiAgICBjb25zdCB7IGxvY2FsZSA9IG51bGwsIG51bWJlcmluZ1N5c3RlbSA9IG51bGwgfSA9IG9wdHMsXG4gICAgICBsb2NhbGVUb1VzZSA9IExvY2FsZS5mcm9tT3B0cyh7XG4gICAgICAgIGxvY2FsZSxcbiAgICAgICAgbnVtYmVyaW5nU3lzdGVtLFxuICAgICAgICBkZWZhdWx0VG9FTjogdHJ1ZSxcbiAgICAgIH0pLFxuICAgICAgW3ZhbHMsIHBhcnNlZFpvbmUsIHNwZWNpZmljT2Zmc2V0LCBpbnZhbGlkXSA9IHBhcnNlRnJvbVRva2Vucyhsb2NhbGVUb1VzZSwgdGV4dCwgZm10KTtcbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgcmV0dXJuIERhdGVUaW1lLmludmFsaWQoaW52YWxpZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBwYXJzZURhdGFUb0RhdGVUaW1lKHZhbHMsIHBhcnNlZFpvbmUsIG9wdHMsIGBmb3JtYXQgJHtmbXR9YCwgdGV4dCwgc3BlY2lmaWNPZmZzZXQpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCB1c2UgZnJvbUZvcm1hdCBpbnN0ZWFkXG4gICAqL1xuICBzdGF0aWMgZnJvbVN0cmluZyh0ZXh0LCBmbXQsIG9wdHMgPSB7fSkge1xuICAgIHJldHVybiBEYXRlVGltZS5mcm9tRm9ybWF0KHRleHQsIGZtdCwgb3B0cyk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgRGF0ZVRpbWUgZnJvbSBhIFNRTCBkYXRlLCB0aW1lLCBvciBkYXRldGltZVxuICAgKiBEZWZhdWx0cyB0byBlbi1VUyBpZiBubyBsb2NhbGUgaGFzIGJlZW4gc3BlY2lmaWVkLCByZWdhcmRsZXNzIG9mIHRoZSBzeXN0ZW0ncyBsb2NhbGVcbiAgICogQHBhcmFtIHtzdHJpbmd9IHRleHQgLSB0aGUgc3RyaW5nIHRvIHBhcnNlXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIC0gb3B0aW9ucyB0byBhZmZlY3QgdGhlIGNyZWF0aW9uXG4gICAqIEBwYXJhbSB7c3RyaW5nfFpvbmV9IFtvcHRzLnpvbmU9J2xvY2FsJ10gLSB1c2UgdGhpcyB6b25lIGlmIG5vIG9mZnNldCBpcyBzcGVjaWZpZWQgaW4gdGhlIGlucHV0IHN0cmluZyBpdHNlbGYuIFdpbGwgYWxzbyBjb252ZXJ0IHRoZSBEYXRlVGltZSB0byB0aGlzIHpvbmVcbiAgICogQHBhcmFtIHtib29sZWFufSBbb3B0cy5zZXRab25lPWZhbHNlXSAtIG92ZXJyaWRlIHRoZSB6b25lIHdpdGggYSB6b25lIHNwZWNpZmllZCBpbiB0aGUgc3RyaW5nIGl0c2VsZiwgaWYgaXQgc3BlY2lmaWVzIG9uZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMubG9jYWxlPSdlbi1VUyddIC0gYSBsb2NhbGUgc3RyaW5nIHRvIHVzZSB3aGVuIHBhcnNpbmcuIFdpbGwgYWxzbyBzZXQgdGhlIERhdGVUaW1lIHRvIHRoaXMgbG9jYWxlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRzLm51bWJlcmluZ1N5c3RlbSAtIHRoZSBudW1iZXJpbmcgc3lzdGVtIHRvIHVzZSB3aGVuIHBhcnNpbmcuIFdpbGwgYWxzbyBzZXQgdGhlIHJlc3VsdGluZyBEYXRlVGltZSB0byB0aGlzIG51bWJlcmluZyBzeXN0ZW1cbiAgICogQHBhcmFtIHtzdHJpbmd9IG9wdHMub3V0cHV0Q2FsZW5kYXIgLSB0aGUgb3V0cHV0IGNhbGVuZGFyIHRvIHNldCBvbiB0aGUgcmVzdWx0aW5nIERhdGVUaW1lIGluc3RhbmNlXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmZyb21TUUwoJzIwMTctMDUtMTUnKVxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5mcm9tU1FMKCcyMDE3LTA1LTE1IDA5OjEyOjM0JylcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUuZnJvbVNRTCgnMjAxNy0wNS0xNSAwOToxMjozNC4zNDInKVxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5mcm9tU1FMKCcyMDE3LTA1LTE1IDA5OjEyOjM0LjM0MiswNjowMCcpXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmZyb21TUUwoJzIwMTctMDUtMTUgMDk6MTI6MzQuMzQyIEFtZXJpY2EvTG9zX0FuZ2VsZXMnKVxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5mcm9tU1FMKCcyMDE3LTA1LTE1IDA5OjEyOjM0LjM0MiBBbWVyaWNhL0xvc19BbmdlbGVzJywgeyBzZXRab25lOiB0cnVlIH0pXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmZyb21TUUwoJzIwMTctMDUtMTUgMDk6MTI6MzQuMzQyJywgeyB6b25lOiAnQW1lcmljYS9Mb3NfQW5nZWxlcycgfSlcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUuZnJvbVNRTCgnMDk6MTI6MzQuMzQyJylcbiAgICogQHJldHVybiB7RGF0ZVRpbWV9XG4gICAqL1xuICBzdGF0aWMgZnJvbVNRTCh0ZXh0LCBvcHRzID0ge30pIHtcbiAgICBjb25zdCBbdmFscywgcGFyc2VkWm9uZV0gPSBwYXJzZVNRTCh0ZXh0KTtcbiAgICByZXR1cm4gcGFyc2VEYXRhVG9EYXRlVGltZSh2YWxzLCBwYXJzZWRab25lLCBvcHRzLCBcIlNRTFwiLCB0ZXh0KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYW4gaW52YWxpZCBEYXRlVGltZS5cbiAgICogQHBhcmFtIHtEYXRlVGltZX0gcmVhc29uIC0gc2ltcGxlIHN0cmluZyBvZiB3aHkgdGhpcyBEYXRlVGltZSBpcyBpbnZhbGlkLiBTaG91bGQgbm90IGNvbnRhaW4gcGFyYW1ldGVycyBvciBhbnl0aGluZyBlbHNlIGRhdGEtZGVwZW5kZW50XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbZXhwbGFuYXRpb249bnVsbF0gLSBsb25nZXIgZXhwbGFuYXRpb24sIG1heSBpbmNsdWRlIHBhcmFtZXRlcnMgYW5kIG90aGVyIHVzZWZ1bCBkZWJ1Z2dpbmcgaW5mb3JtYXRpb25cbiAgICogQHJldHVybiB7RGF0ZVRpbWV9XG4gICAqL1xuICBzdGF0aWMgaW52YWxpZChyZWFzb24sIGV4cGxhbmF0aW9uID0gbnVsbCkge1xuICAgIGlmICghcmVhc29uKSB7XG4gICAgICB0aHJvdyBuZXcgSW52YWxpZEFyZ3VtZW50RXJyb3IoXCJuZWVkIHRvIHNwZWNpZnkgYSByZWFzb24gdGhlIERhdGVUaW1lIGlzIGludmFsaWRcIik7XG4gICAgfVxuXG4gICAgY29uc3QgaW52YWxpZCA9IHJlYXNvbiBpbnN0YW5jZW9mIEludmFsaWQgPyByZWFzb24gOiBuZXcgSW52YWxpZChyZWFzb24sIGV4cGxhbmF0aW9uKTtcblxuICAgIGlmIChTZXR0aW5ncy50aHJvd09uSW52YWxpZCkge1xuICAgICAgdGhyb3cgbmV3IEludmFsaWREYXRlVGltZUVycm9yKGludmFsaWQpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbmV3IERhdGVUaW1lKHsgaW52YWxpZCB9KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgaWYgYW4gb2JqZWN0IGlzIGFuIGluc3RhbmNlIG9mIERhdGVUaW1lLiBXb3JrcyBhY3Jvc3MgY29udGV4dCBib3VuZGFyaWVzXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBzdGF0aWMgaXNEYXRlVGltZShvKSB7XG4gICAgcmV0dXJuIChvICYmIG8uaXNMdXhvbkRhdGVUaW1lKSB8fCBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm9kdWNlIHRoZSBmb3JtYXQgc3RyaW5nIGZvciBhIHNldCBvZiBvcHRpb25zXG4gICAqIEBwYXJhbSBmb3JtYXRPcHRzXG4gICAqIEBwYXJhbSBsb2NhbGVPcHRzXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqL1xuICBzdGF0aWMgcGFyc2VGb3JtYXRGb3JPcHRzKGZvcm1hdE9wdHMsIGxvY2FsZU9wdHMgPSB7fSkge1xuICAgIGNvbnN0IHRva2VuTGlzdCA9IGZvcm1hdE9wdHNUb1Rva2Vucyhmb3JtYXRPcHRzLCBMb2NhbGUuZnJvbU9iamVjdChsb2NhbGVPcHRzKSk7XG4gICAgcmV0dXJuICF0b2tlbkxpc3QgPyBudWxsIDogdG9rZW5MaXN0Lm1hcCgodCkgPT4gKHQgPyB0LnZhbCA6IG51bGwpKS5qb2luKFwiXCIpO1xuICB9XG5cbiAgLyoqXG4gICAqIFByb2R1Y2UgdGhlIHRoZSBmdWxseSBleHBhbmRlZCBmb3JtYXQgdG9rZW4gZm9yIHRoZSBsb2NhbGVcbiAgICogRG9lcyBOT1QgcXVvdGUgY2hhcmFjdGVycywgc28gcXVvdGVkIHRva2VucyB3aWxsIG5vdCByb3VuZCB0cmlwIGNvcnJlY3RseVxuICAgKiBAcGFyYW0gZm10XG4gICAqIEBwYXJhbSBsb2NhbGVPcHRzXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqL1xuICBzdGF0aWMgZXhwYW5kRm9ybWF0KGZtdCwgbG9jYWxlT3B0cyA9IHt9KSB7XG4gICAgY29uc3QgZXhwYW5kZWQgPSBleHBhbmRNYWNyb1Rva2VucyhGb3JtYXR0ZXIucGFyc2VGb3JtYXQoZm10KSwgTG9jYWxlLmZyb21PYmplY3QobG9jYWxlT3B0cykpO1xuICAgIHJldHVybiBleHBhbmRlZC5tYXAoKHQpID0+IHQudmFsKS5qb2luKFwiXCIpO1xuICB9XG5cbiAgLy8gSU5GT1xuXG4gIC8qKlxuICAgKiBHZXQgdGhlIHZhbHVlIG9mIHVuaXQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1bml0IC0gYSB1bml0IHN1Y2ggYXMgJ21pbnV0ZScgb3IgJ2RheSdcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNywgNywgNCkuZ2V0KCdtb250aCcpOyAvLz0+IDdcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNywgNywgNCkuZ2V0KCdkYXknKTsgLy89PiA0XG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIGdldCh1bml0KSB7XG4gICAgcmV0dXJuIHRoaXNbdW5pdF07XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB3aGV0aGVyIHRoZSBEYXRlVGltZSBpcyB2YWxpZC4gSW52YWxpZCBEYXRlVGltZXMgb2NjdXIgd2hlbjpcbiAgICogKiBUaGUgRGF0ZVRpbWUgd2FzIGNyZWF0ZWQgZnJvbSBpbnZhbGlkIGNhbGVuZGFyIGluZm9ybWF0aW9uLCBzdWNoIGFzIHRoZSAxM3RoIG1vbnRoIG9yIEZlYnJ1YXJ5IDMwXG4gICAqICogVGhlIERhdGVUaW1lIHdhcyBjcmVhdGVkIGJ5IGFuIG9wZXJhdGlvbiBvbiBhbm90aGVyIGludmFsaWQgZGF0ZVxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICovXG4gIGdldCBpc1ZhbGlkKCkge1xuICAgIHJldHVybiB0aGlzLmludmFsaWQgPT09IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbiBlcnJvciBjb2RlIGlmIHRoaXMgRGF0ZVRpbWUgaXMgaW52YWxpZCwgb3IgbnVsbCBpZiB0aGUgRGF0ZVRpbWUgaXMgdmFsaWRcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIGdldCBpbnZhbGlkUmVhc29uKCkge1xuICAgIHJldHVybiB0aGlzLmludmFsaWQgPyB0aGlzLmludmFsaWQucmVhc29uIDogbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIGV4cGxhbmF0aW9uIG9mIHdoeSB0aGlzIERhdGVUaW1lIGJlY2FtZSBpbnZhbGlkLCBvciBudWxsIGlmIHRoZSBEYXRlVGltZSBpcyB2YWxpZFxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgZ2V0IGludmFsaWRFeHBsYW5hdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5pbnZhbGlkID8gdGhpcy5pbnZhbGlkLmV4cGxhbmF0aW9uIDogbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGxvY2FsZSBvZiBhIERhdGVUaW1lLCBzdWNoICdlbi1HQicuIFRoZSBsb2NhbGUgaXMgdXNlZCB3aGVuIGZvcm1hdHRpbmcgdGhlIERhdGVUaW1lXG4gICAqXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICBnZXQgbG9jYWxlKCkge1xuICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyB0aGlzLmxvYy5sb2NhbGUgOiBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgbnVtYmVyaW5nIHN5c3RlbSBvZiBhIERhdGVUaW1lLCBzdWNoICdiZW5nJy4gVGhlIG51bWJlcmluZyBzeXN0ZW0gaXMgdXNlZCB3aGVuIGZvcm1hdHRpbmcgdGhlIERhdGVUaW1lXG4gICAqXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICBnZXQgbnVtYmVyaW5nU3lzdGVtKCkge1xuICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyB0aGlzLmxvYy5udW1iZXJpbmdTeXN0ZW0gOiBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgb3V0cHV0IGNhbGVuZGFyIG9mIGEgRGF0ZVRpbWUsIHN1Y2ggJ2lzbGFtaWMnLiBUaGUgb3V0cHV0IGNhbGVuZGFyIGlzIHVzZWQgd2hlbiBmb3JtYXR0aW5nIHRoZSBEYXRlVGltZVxuICAgKlxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgZ2V0IG91dHB1dENhbGVuZGFyKCkge1xuICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyB0aGlzLmxvYy5vdXRwdXRDYWxlbmRhciA6IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSB0aW1lIHpvbmUgYXNzb2NpYXRlZCB3aXRoIHRoaXMgRGF0ZVRpbWUuXG4gICAqIEB0eXBlIHtab25lfVxuICAgKi9cbiAgZ2V0IHpvbmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3pvbmU7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBuYW1lIG9mIHRoZSB0aW1lIHpvbmUuXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICBnZXQgem9uZU5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHRoaXMuem9uZS5uYW1lIDogbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIHllYXJcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNywgNSwgMjUpLnllYXIgLy89PiAyMDE3XG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqL1xuICBnZXQgeWVhcigpIHtcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gdGhpcy5jLnllYXIgOiBOYU47XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBxdWFydGVyXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTcsIDUsIDI1KS5xdWFydGVyIC8vPT4gMlxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKi9cbiAgZ2V0IHF1YXJ0ZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IE1hdGguY2VpbCh0aGlzLmMubW9udGggLyAzKSA6IE5hTjtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIG1vbnRoICgxLTEyKS5cbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNywgNSwgMjUpLm1vbnRoIC8vPT4gNVxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKi9cbiAgZ2V0IG1vbnRoKCkge1xuICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyB0aGlzLmMubW9udGggOiBOYU47XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBkYXkgb2YgdGhlIG1vbnRoICgxLTMwaXNoKS5cbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNywgNSwgMjUpLmRheSAvLz0+IDI1XG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqL1xuICBnZXQgZGF5KCkge1xuICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyB0aGlzLmMuZGF5IDogTmFOO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgaG91ciBvZiB0aGUgZGF5ICgwLTIzKS5cbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNywgNSwgMjUsIDkpLmhvdXIgLy89PiA5XG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqL1xuICBnZXQgaG91cigpIHtcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gdGhpcy5jLmhvdXIgOiBOYU47XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBtaW51dGUgb2YgdGhlIGhvdXIgKDAtNTkpLlxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE3LCA1LCAyNSwgOSwgMzApLm1pbnV0ZSAvLz0+IDMwXG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqL1xuICBnZXQgbWludXRlKCkge1xuICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyB0aGlzLmMubWludXRlIDogTmFOO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgc2Vjb25kIG9mIHRoZSBtaW51dGUgKDAtNTkpLlxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE3LCA1LCAyNSwgOSwgMzAsIDUyKS5zZWNvbmQgLy89PiA1MlxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKi9cbiAgZ2V0IHNlY29uZCgpIHtcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gdGhpcy5jLnNlY29uZCA6IE5hTjtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIG1pbGxpc2Vjb25kIG9mIHRoZSBzZWNvbmQgKDAtOTk5KS5cbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNywgNSwgMjUsIDksIDMwLCA1MiwgNjU0KS5taWxsaXNlY29uZCAvLz0+IDY1NFxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKi9cbiAgZ2V0IG1pbGxpc2Vjb25kKCkge1xuICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyB0aGlzLmMubWlsbGlzZWNvbmQgOiBOYU47XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSB3ZWVrIHllYXJcbiAgICogQHNlZSBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fd2Vla19kYXRlXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTQsIDEyLCAzMSkud2Vla1llYXIgLy89PiAyMDE1XG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqL1xuICBnZXQgd2Vla1llYXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHBvc3NpYmx5Q2FjaGVkV2Vla0RhdGEodGhpcykud2Vla1llYXIgOiBOYU47XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSB3ZWVrIG51bWJlciBvZiB0aGUgd2VlayB5ZWFyICgxLTUyaXNoKS5cbiAgICogQHNlZSBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fd2Vla19kYXRlXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTcsIDUsIDI1KS53ZWVrTnVtYmVyIC8vPT4gMjFcbiAgICogQHR5cGUge251bWJlcn1cbiAgICovXG4gIGdldCB3ZWVrTnVtYmVyKCkge1xuICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyBwb3NzaWJseUNhY2hlZFdlZWtEYXRhKHRoaXMpLndlZWtOdW1iZXIgOiBOYU47XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBkYXkgb2YgdGhlIHdlZWsuXG4gICAqIDEgaXMgTW9uZGF5IGFuZCA3IGlzIFN1bmRheVxuICAgKiBAc2VlIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0lTT193ZWVrX2RhdGVcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNCwgMTEsIDMxKS53ZWVrZGF5IC8vPT4gNFxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKi9cbiAgZ2V0IHdlZWtkYXkoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHBvc3NpYmx5Q2FjaGVkV2Vla0RhdGEodGhpcykud2Vla2RheSA6IE5hTjtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIG9yZGluYWwgKG1lYW5pbmcgdGhlIGRheSBvZiB0aGUgeWVhcilcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNywgNSwgMjUpLm9yZGluYWwgLy89PiAxNDVcbiAgICogQHR5cGUge251bWJlcnxEYXRlVGltZX1cbiAgICovXG4gIGdldCBvcmRpbmFsKCkge1xuICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyBncmVnb3JpYW5Ub09yZGluYWwodGhpcy5jKS5vcmRpbmFsIDogTmFOO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgaHVtYW4gcmVhZGFibGUgc2hvcnQgbW9udGggbmFtZSwgc3VjaCBhcyAnT2N0Jy5cbiAgICogRGVmYXVsdHMgdG8gdGhlIHN5c3RlbSdzIGxvY2FsZSBpZiBubyBsb2NhbGUgaGFzIGJlZW4gc3BlY2lmaWVkXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTcsIDEwLCAzMCkubW9udGhTaG9ydCAvLz0+IE9jdFxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgZ2V0IG1vbnRoU2hvcnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IEluZm8ubW9udGhzKFwic2hvcnRcIiwgeyBsb2NPYmo6IHRoaXMubG9jIH0pW3RoaXMubW9udGggLSAxXSA6IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBodW1hbiByZWFkYWJsZSBsb25nIG1vbnRoIG5hbWUsIHN1Y2ggYXMgJ09jdG9iZXInLlxuICAgKiBEZWZhdWx0cyB0byB0aGUgc3lzdGVtJ3MgbG9jYWxlIGlmIG5vIGxvY2FsZSBoYXMgYmVlbiBzcGVjaWZpZWRcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNywgMTAsIDMwKS5tb250aExvbmcgLy89PiBPY3RvYmVyXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuICBnZXQgbW9udGhMb25nKCkge1xuICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyBJbmZvLm1vbnRocyhcImxvbmdcIiwgeyBsb2NPYmo6IHRoaXMubG9jIH0pW3RoaXMubW9udGggLSAxXSA6IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBodW1hbiByZWFkYWJsZSBzaG9ydCB3ZWVrZGF5LCBzdWNoIGFzICdNb24nLlxuICAgKiBEZWZhdWx0cyB0byB0aGUgc3lzdGVtJ3MgbG9jYWxlIGlmIG5vIGxvY2FsZSBoYXMgYmVlbiBzcGVjaWZpZWRcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNywgMTAsIDMwKS53ZWVrZGF5U2hvcnQgLy89PiBNb25cbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIGdldCB3ZWVrZGF5U2hvcnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IEluZm8ud2Vla2RheXMoXCJzaG9ydFwiLCB7IGxvY09iajogdGhpcy5sb2MgfSlbdGhpcy53ZWVrZGF5IC0gMV0gOiBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgaHVtYW4gcmVhZGFibGUgbG9uZyB3ZWVrZGF5LCBzdWNoIGFzICdNb25kYXknLlxuICAgKiBEZWZhdWx0cyB0byB0aGUgc3lzdGVtJ3MgbG9jYWxlIGlmIG5vIGxvY2FsZSBoYXMgYmVlbiBzcGVjaWZpZWRcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNywgMTAsIDMwKS53ZWVrZGF5TG9uZyAvLz0+IE1vbmRheVxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgZ2V0IHdlZWtkYXlMb25nKCkge1xuICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyBJbmZvLndlZWtkYXlzKFwibG9uZ1wiLCB7IGxvY09iajogdGhpcy5sb2MgfSlbdGhpcy53ZWVrZGF5IC0gMV0gOiBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgVVRDIG9mZnNldCBvZiB0aGlzIERhdGVUaW1lIGluIG1pbnV0ZXNcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubm93KCkub2Zmc2V0IC8vPT4gLTI0MFxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS51dGMoKS5vZmZzZXQgLy89PiAwXG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqL1xuICBnZXQgb2Zmc2V0KCkge1xuICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyArdGhpcy5vIDogTmFOO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgc2hvcnQgaHVtYW4gbmFtZSBmb3IgdGhlIHpvbmUncyBjdXJyZW50IG9mZnNldCwgZm9yIGV4YW1wbGUgXCJFU1RcIiBvciBcIkVEVFwiLlxuICAgKiBEZWZhdWx0cyB0byB0aGUgc3lzdGVtJ3MgbG9jYWxlIGlmIG5vIGxvY2FsZSBoYXMgYmVlbiBzcGVjaWZpZWRcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIGdldCBvZmZzZXROYW1lU2hvcnQoKSB7XG4gICAgaWYgKHRoaXMuaXNWYWxpZCkge1xuICAgICAgcmV0dXJuIHRoaXMuem9uZS5vZmZzZXROYW1lKHRoaXMudHMsIHtcbiAgICAgICAgZm9ybWF0OiBcInNob3J0XCIsXG4gICAgICAgIGxvY2FsZTogdGhpcy5sb2NhbGUsXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgbG9uZyBodW1hbiBuYW1lIGZvciB0aGUgem9uZSdzIGN1cnJlbnQgb2Zmc2V0LCBmb3IgZXhhbXBsZSBcIkVhc3Rlcm4gU3RhbmRhcmQgVGltZVwiIG9yIFwiRWFzdGVybiBEYXlsaWdodCBUaW1lXCIuXG4gICAqIERlZmF1bHRzIHRvIHRoZSBzeXN0ZW0ncyBsb2NhbGUgaWYgbm8gbG9jYWxlIGhhcyBiZWVuIHNwZWNpZmllZFxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgZ2V0IG9mZnNldE5hbWVMb25nKCkge1xuICAgIGlmICh0aGlzLmlzVmFsaWQpIHtcbiAgICAgIHJldHVybiB0aGlzLnpvbmUub2Zmc2V0TmFtZSh0aGlzLnRzLCB7XG4gICAgICAgIGZvcm1hdDogXCJsb25nXCIsXG4gICAgICAgIGxvY2FsZTogdGhpcy5sb2NhbGUsXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEdldCB3aGV0aGVyIHRoaXMgem9uZSdzIG9mZnNldCBldmVyIGNoYW5nZXMsIGFzIGluIGEgRFNULlxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICovXG4gIGdldCBpc09mZnNldEZpeGVkKCkge1xuICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyB0aGlzLnpvbmUuaXNVbml2ZXJzYWwgOiBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB3aGV0aGVyIHRoZSBEYXRlVGltZSBpcyBpbiBhIERTVC5cbiAgICogQHR5cGUge2Jvb2xlYW59XG4gICAqL1xuICBnZXQgaXNJbkRTVCgpIHtcbiAgICBpZiAodGhpcy5pc09mZnNldEZpeGVkKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIHRoaXMub2Zmc2V0ID4gdGhpcy5zZXQoeyBtb250aDogMSwgZGF5OiAxIH0pLm9mZnNldCB8fFxuICAgICAgICB0aGlzLm9mZnNldCA+IHRoaXMuc2V0KHsgbW9udGg6IDUgfSkub2Zmc2V0XG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgdGhpcyBEYXRlVGltZSBpcyBpbiBhIGxlYXAgeWVhciwgZmFsc2Ugb3RoZXJ3aXNlXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTYpLmlzSW5MZWFwWWVhciAvLz0+IHRydWVcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxMykuaXNJbkxlYXBZZWFyIC8vPT4gZmFsc2VcbiAgICogQHR5cGUge2Jvb2xlYW59XG4gICAqL1xuICBnZXQgaXNJbkxlYXBZZWFyKCkge1xuICAgIHJldHVybiBpc0xlYXBZZWFyKHRoaXMueWVhcik7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgbnVtYmVyIG9mIGRheXMgaW4gdGhpcyBEYXRlVGltZSdzIG1vbnRoXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTYsIDIpLmRheXNJbk1vbnRoIC8vPT4gMjlcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNiwgMykuZGF5c0luTW9udGggLy89PiAzMVxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKi9cbiAgZ2V0IGRheXNJbk1vbnRoKCkge1xuICAgIHJldHVybiBkYXlzSW5Nb250aCh0aGlzLnllYXIsIHRoaXMubW9udGgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIG51bWJlciBvZiBkYXlzIGluIHRoaXMgRGF0ZVRpbWUncyB5ZWFyXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTYpLmRheXNJblllYXIgLy89PiAzNjZcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxMykuZGF5c0luWWVhciAvLz0+IDM2NVxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKi9cbiAgZ2V0IGRheXNJblllYXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IGRheXNJblllYXIodGhpcy55ZWFyKSA6IE5hTjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBudW1iZXIgb2Ygd2Vla3MgaW4gdGhpcyBEYXRlVGltZSdzIHllYXJcbiAgICogQHNlZSBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fd2Vla19kYXRlXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMDQpLndlZWtzSW5XZWVrWWVhciAvLz0+IDUzXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTMpLndlZWtzSW5XZWVrWWVhciAvLz0+IDUyXG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqL1xuICBnZXQgd2Vla3NJbldlZWtZZWFyKCkge1xuICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyB3ZWVrc0luV2Vla1llYXIodGhpcy53ZWVrWWVhcikgOiBOYU47XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgcmVzb2x2ZWQgSW50bCBvcHRpb25zIGZvciB0aGlzIERhdGVUaW1lLlxuICAgKiBUaGlzIGlzIHVzZWZ1bCBpbiB1bmRlcnN0YW5kaW5nIHRoZSBiZWhhdmlvciBvZiBmb3JtYXR0aW5nIG1ldGhvZHNcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgLSB0aGUgc2FtZSBvcHRpb25zIGFzIHRvTG9jYWxlU3RyaW5nXG4gICAqIEByZXR1cm4ge09iamVjdH1cbiAgICovXG4gIHJlc29sdmVkTG9jYWxlT3B0aW9ucyhvcHRzID0ge30pIHtcbiAgICBjb25zdCB7IGxvY2FsZSwgbnVtYmVyaW5nU3lzdGVtLCBjYWxlbmRhciB9ID0gRm9ybWF0dGVyLmNyZWF0ZShcbiAgICAgIHRoaXMubG9jLmNsb25lKG9wdHMpLFxuICAgICAgb3B0c1xuICAgICkucmVzb2x2ZWRPcHRpb25zKHRoaXMpO1xuICAgIHJldHVybiB7IGxvY2FsZSwgbnVtYmVyaW5nU3lzdGVtLCBvdXRwdXRDYWxlbmRhcjogY2FsZW5kYXIgfTtcbiAgfVxuXG4gIC8vIFRSQU5TRk9STVxuXG4gIC8qKlxuICAgKiBcIlNldFwiIHRoZSBEYXRlVGltZSdzIHpvbmUgdG8gVVRDLiBSZXR1cm5zIGEgbmV3bHktY29uc3RydWN0ZWQgRGF0ZVRpbWUuXG4gICAqXG4gICAqIEVxdWl2YWxlbnQgdG8ge0BsaW5rIERhdGVUaW1lI3NldFpvbmV9KCd1dGMnKVxuICAgKiBAcGFyYW0ge251bWJlcn0gW29mZnNldD0wXSAtIG9wdGlvbmFsbHksIGFuIG9mZnNldCBmcm9tIFVUQyBpbiBtaW51dGVzXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0cz17fV0gLSBvcHRpb25zIHRvIHBhc3MgdG8gYHNldFpvbmUoKWBcbiAgICogQHJldHVybiB7RGF0ZVRpbWV9XG4gICAqL1xuICB0b1VUQyhvZmZzZXQgPSAwLCBvcHRzID0ge30pIHtcbiAgICByZXR1cm4gdGhpcy5zZXRab25lKEZpeGVkT2Zmc2V0Wm9uZS5pbnN0YW5jZShvZmZzZXQpLCBvcHRzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBcIlNldFwiIHRoZSBEYXRlVGltZSdzIHpvbmUgdG8gdGhlIGhvc3QncyBsb2NhbCB6b25lLiBSZXR1cm5zIGEgbmV3bHktY29uc3RydWN0ZWQgRGF0ZVRpbWUuXG4gICAqXG4gICAqIEVxdWl2YWxlbnQgdG8gYHNldFpvbmUoJ2xvY2FsJylgXG4gICAqIEByZXR1cm4ge0RhdGVUaW1lfVxuICAgKi9cbiAgdG9Mb2NhbCgpIHtcbiAgICByZXR1cm4gdGhpcy5zZXRab25lKFNldHRpbmdzLmRlZmF1bHRab25lKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBcIlNldFwiIHRoZSBEYXRlVGltZSdzIHpvbmUgdG8gc3BlY2lmaWVkIHpvbmUuIFJldHVybnMgYSBuZXdseS1jb25zdHJ1Y3RlZCBEYXRlVGltZS5cbiAgICpcbiAgICogQnkgZGVmYXVsdCwgdGhlIHNldHRlciBrZWVwcyB0aGUgdW5kZXJseWluZyB0aW1lIHRoZSBzYW1lIChhcyBpbiwgdGhlIHNhbWUgdGltZXN0YW1wKSwgYnV0IHRoZSBuZXcgaW5zdGFuY2Ugd2lsbCByZXBvcnQgZGlmZmVyZW50IGxvY2FsIHRpbWVzIGFuZCBjb25zaWRlciBEU1RzIHdoZW4gbWFraW5nIGNvbXB1dGF0aW9ucywgYXMgd2l0aCB7QGxpbmsgRGF0ZVRpbWUjcGx1c30uIFlvdSBtYXkgd2lzaCB0byB1c2Uge0BsaW5rIERhdGVUaW1lI3RvTG9jYWx9IGFuZCB7QGxpbmsgRGF0ZVRpbWUjdG9VVEN9IHdoaWNoIHByb3ZpZGUgc2ltcGxlIGNvbnZlbmllbmNlIHdyYXBwZXJzIGZvciBjb21tb25seSB1c2VkIHpvbmVzLlxuICAgKiBAcGFyYW0ge3N0cmluZ3xab25lfSBbem9uZT0nbG9jYWwnXSAtIGEgem9uZSBpZGVudGlmaWVyLiBBcyBhIHN0cmluZywgdGhhdCBjYW4gYmUgYW55IElBTkEgem9uZSBzdXBwb3J0ZWQgYnkgdGhlIGhvc3QgZW52aXJvbm1lbnQsIG9yIGEgZml4ZWQtb2Zmc2V0IG5hbWUgb2YgdGhlIGZvcm0gJ1VUQyszJywgb3IgdGhlIHN0cmluZ3MgJ2xvY2FsJyBvciAndXRjJy4gWW91IG1heSBhbHNvIHN1cHBseSBhbiBpbnN0YW5jZSBvZiBhIHtAbGluayBEYXRlVGltZSNab25lfSBjbGFzcy5cbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgLSBvcHRpb25zXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdHMua2VlcExvY2FsVGltZT1mYWxzZV0gLSBJZiB0cnVlLCBhZGp1c3QgdGhlIHVuZGVybHlpbmcgdGltZSBzbyB0aGF0IHRoZSBsb2NhbCB0aW1lIHN0YXlzIHRoZSBzYW1lLCBidXQgaW4gdGhlIHRhcmdldCB6b25lLiBZb3Ugc2hvdWxkIHJhcmVseSBuZWVkIHRoaXMuXG4gICAqIEByZXR1cm4ge0RhdGVUaW1lfVxuICAgKi9cbiAgc2V0Wm9uZSh6b25lLCB7IGtlZXBMb2NhbFRpbWUgPSBmYWxzZSwga2VlcENhbGVuZGFyVGltZSA9IGZhbHNlIH0gPSB7fSkge1xuICAgIHpvbmUgPSBub3JtYWxpemVab25lKHpvbmUsIFNldHRpbmdzLmRlZmF1bHRab25lKTtcbiAgICBpZiAoem9uZS5lcXVhbHModGhpcy56b25lKSkge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSBlbHNlIGlmICghem9uZS5pc1ZhbGlkKSB7XG4gICAgICByZXR1cm4gRGF0ZVRpbWUuaW52YWxpZCh1bnN1cHBvcnRlZFpvbmUoem9uZSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgbmV3VFMgPSB0aGlzLnRzO1xuICAgICAgaWYgKGtlZXBMb2NhbFRpbWUgfHwga2VlcENhbGVuZGFyVGltZSkge1xuICAgICAgICBjb25zdCBvZmZzZXRHdWVzcyA9IHpvbmUub2Zmc2V0KHRoaXMudHMpO1xuICAgICAgICBjb25zdCBhc09iaiA9IHRoaXMudG9PYmplY3QoKTtcbiAgICAgICAgW25ld1RTXSA9IG9ialRvVFMoYXNPYmosIG9mZnNldEd1ZXNzLCB6b25lKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjbG9uZSh0aGlzLCB7IHRzOiBuZXdUUywgem9uZSB9KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogXCJTZXRcIiB0aGUgbG9jYWxlLCBudW1iZXJpbmdTeXN0ZW0sIG9yIG91dHB1dENhbGVuZGFyLiBSZXR1cm5zIGEgbmV3bHktY29uc3RydWN0ZWQgRGF0ZVRpbWUuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wZXJ0aWVzIC0gdGhlIHByb3BlcnRpZXMgdG8gc2V0XG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTcsIDUsIDI1KS5yZWNvbmZpZ3VyZSh7IGxvY2FsZTogJ2VuLUdCJyB9KVxuICAgKiBAcmV0dXJuIHtEYXRlVGltZX1cbiAgICovXG4gIHJlY29uZmlndXJlKHsgbG9jYWxlLCBudW1iZXJpbmdTeXN0ZW0sIG91dHB1dENhbGVuZGFyIH0gPSB7fSkge1xuICAgIGNvbnN0IGxvYyA9IHRoaXMubG9jLmNsb25lKHsgbG9jYWxlLCBudW1iZXJpbmdTeXN0ZW0sIG91dHB1dENhbGVuZGFyIH0pO1xuICAgIHJldHVybiBjbG9uZSh0aGlzLCB7IGxvYyB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBcIlNldFwiIHRoZSBsb2NhbGUuIFJldHVybnMgYSBuZXdseS1jb25zdHJ1Y3RlZCBEYXRlVGltZS5cbiAgICogSnVzdCBhIGNvbnZlbmllbnQgYWxpYXMgZm9yIHJlY29uZmlndXJlKHsgbG9jYWxlIH0pXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTcsIDUsIDI1KS5zZXRMb2NhbGUoJ2VuLUdCJylcbiAgICogQHJldHVybiB7RGF0ZVRpbWV9XG4gICAqL1xuICBzZXRMb2NhbGUobG9jYWxlKSB7XG4gICAgcmV0dXJuIHRoaXMucmVjb25maWd1cmUoeyBsb2NhbGUgfSk7XG4gIH1cblxuICAvKipcbiAgICogXCJTZXRcIiB0aGUgdmFsdWVzIG9mIHNwZWNpZmllZCB1bml0cy4gUmV0dXJucyBhIG5ld2x5LWNvbnN0cnVjdGVkIERhdGVUaW1lLlxuICAgKiBZb3UgY2FuIG9ubHkgc2V0IHVuaXRzIHdpdGggdGhpcyBtZXRob2Q7IGZvciBcInNldHRpbmdcIiBtZXRhZGF0YSwgc2VlIHtAbGluayBEYXRlVGltZSNyZWNvbmZpZ3VyZX0gYW5kIHtAbGluayBEYXRlVGltZSNzZXRab25lfS5cbiAgICogQHBhcmFtIHtPYmplY3R9IHZhbHVlcyAtIGEgbWFwcGluZyBvZiB1bml0cyB0byBudW1iZXJzXG4gICAqIEBleGFtcGxlIGR0LnNldCh7IHllYXI6IDIwMTcgfSlcbiAgICogQGV4YW1wbGUgZHQuc2V0KHsgaG91cjogOCwgbWludXRlOiAzMCB9KVxuICAgKiBAZXhhbXBsZSBkdC5zZXQoeyB3ZWVrZGF5OiA1IH0pXG4gICAqIEBleGFtcGxlIGR0LnNldCh7IHllYXI6IDIwMDUsIG9yZGluYWw6IDIzNCB9KVxuICAgKiBAcmV0dXJuIHtEYXRlVGltZX1cbiAgICovXG4gIHNldCh2YWx1ZXMpIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIHRoaXM7XG5cbiAgICBjb25zdCBub3JtYWxpemVkID0gbm9ybWFsaXplT2JqZWN0KHZhbHVlcywgbm9ybWFsaXplVW5pdCksXG4gICAgICBzZXR0aW5nV2Vla1N0dWZmID1cbiAgICAgICAgIWlzVW5kZWZpbmVkKG5vcm1hbGl6ZWQud2Vla1llYXIpIHx8XG4gICAgICAgICFpc1VuZGVmaW5lZChub3JtYWxpemVkLndlZWtOdW1iZXIpIHx8XG4gICAgICAgICFpc1VuZGVmaW5lZChub3JtYWxpemVkLndlZWtkYXkpLFxuICAgICAgY29udGFpbnNPcmRpbmFsID0gIWlzVW5kZWZpbmVkKG5vcm1hbGl6ZWQub3JkaW5hbCksXG4gICAgICBjb250YWluc0dyZWdvclllYXIgPSAhaXNVbmRlZmluZWQobm9ybWFsaXplZC55ZWFyKSxcbiAgICAgIGNvbnRhaW5zR3JlZ29yTUQgPSAhaXNVbmRlZmluZWQobm9ybWFsaXplZC5tb250aCkgfHwgIWlzVW5kZWZpbmVkKG5vcm1hbGl6ZWQuZGF5KSxcbiAgICAgIGNvbnRhaW5zR3JlZ29yID0gY29udGFpbnNHcmVnb3JZZWFyIHx8IGNvbnRhaW5zR3JlZ29yTUQsXG4gICAgICBkZWZpbml0ZVdlZWtEZWYgPSBub3JtYWxpemVkLndlZWtZZWFyIHx8IG5vcm1hbGl6ZWQud2Vla051bWJlcjtcblxuICAgIGlmICgoY29udGFpbnNHcmVnb3IgfHwgY29udGFpbnNPcmRpbmFsKSAmJiBkZWZpbml0ZVdlZWtEZWYpIHtcbiAgICAgIHRocm93IG5ldyBDb25mbGljdGluZ1NwZWNpZmljYXRpb25FcnJvcihcbiAgICAgICAgXCJDYW4ndCBtaXggd2Vla1llYXIvd2Vla051bWJlciB1bml0cyB3aXRoIHllYXIvbW9udGgvZGF5IG9yIG9yZGluYWxzXCJcbiAgICAgICk7XG4gICAgfVxuXG4gICAgaWYgKGNvbnRhaW5zR3JlZ29yTUQgJiYgY29udGFpbnNPcmRpbmFsKSB7XG4gICAgICB0aHJvdyBuZXcgQ29uZmxpY3RpbmdTcGVjaWZpY2F0aW9uRXJyb3IoXCJDYW4ndCBtaXggb3JkaW5hbCBkYXRlcyB3aXRoIG1vbnRoL2RheVwiKTtcbiAgICB9XG5cbiAgICBsZXQgbWl4ZWQ7XG4gICAgaWYgKHNldHRpbmdXZWVrU3R1ZmYpIHtcbiAgICAgIG1peGVkID0gd2Vla1RvR3JlZ29yaWFuKHsgLi4uZ3JlZ29yaWFuVG9XZWVrKHRoaXMuYyksIC4uLm5vcm1hbGl6ZWQgfSk7XG4gICAgfSBlbHNlIGlmICghaXNVbmRlZmluZWQobm9ybWFsaXplZC5vcmRpbmFsKSkge1xuICAgICAgbWl4ZWQgPSBvcmRpbmFsVG9HcmVnb3JpYW4oeyAuLi5ncmVnb3JpYW5Ub09yZGluYWwodGhpcy5jKSwgLi4ubm9ybWFsaXplZCB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgbWl4ZWQgPSB7IC4uLnRoaXMudG9PYmplY3QoKSwgLi4ubm9ybWFsaXplZCB9O1xuXG4gICAgICAvLyBpZiB3ZSBkaWRuJ3Qgc2V0IHRoZSBkYXkgYnV0IHdlIGVuZGVkIHVwIG9uIGFuIG92ZXJmbG93IGRhdGUsXG4gICAgICAvLyB1c2UgdGhlIGxhc3QgZGF5IG9mIHRoZSByaWdodCBtb250aFxuICAgICAgaWYgKGlzVW5kZWZpbmVkKG5vcm1hbGl6ZWQuZGF5KSkge1xuICAgICAgICBtaXhlZC5kYXkgPSBNYXRoLm1pbihkYXlzSW5Nb250aChtaXhlZC55ZWFyLCBtaXhlZC5tb250aCksIG1peGVkLmRheSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgW3RzLCBvXSA9IG9ialRvVFMobWl4ZWQsIHRoaXMubywgdGhpcy56b25lKTtcbiAgICByZXR1cm4gY2xvbmUodGhpcywgeyB0cywgbyB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgYSBwZXJpb2Qgb2YgdGltZSB0byB0aGlzIERhdGVUaW1lIGFuZCByZXR1cm4gdGhlIHJlc3VsdGluZyBEYXRlVGltZVxuICAgKlxuICAgKiBBZGRpbmcgaG91cnMsIG1pbnV0ZXMsIHNlY29uZHMsIG9yIG1pbGxpc2Vjb25kcyBpbmNyZWFzZXMgdGhlIHRpbWVzdGFtcCBieSB0aGUgcmlnaHQgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcy4gQWRkaW5nIGRheXMsIG1vbnRocywgb3IgeWVhcnMgc2hpZnRzIHRoZSBjYWxlbmRhciwgYWNjb3VudGluZyBmb3IgRFNUcyBhbmQgbGVhcCB5ZWFycyBhbG9uZyB0aGUgd2F5LiBUaHVzLCBgZHQucGx1cyh7IGhvdXJzOiAyNCB9KWAgbWF5IHJlc3VsdCBpbiBhIGRpZmZlcmVudCB0aW1lIHRoYW4gYGR0LnBsdXMoeyBkYXlzOiAxIH0pYCBpZiB0aGVyZSdzIGEgRFNUIHNoaWZ0IGluIGJldHdlZW4uXG4gICAqIEBwYXJhbSB7RHVyYXRpb258T2JqZWN0fG51bWJlcn0gZHVyYXRpb24gLSBUaGUgYW1vdW50IHRvIGFkZC4gRWl0aGVyIGEgTHV4b24gRHVyYXRpb24sIGEgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcywgdGhlIG9iamVjdCBhcmd1bWVudCB0byBEdXJhdGlvbi5mcm9tT2JqZWN0KClcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubm93KCkucGx1cygxMjMpIC8vfj4gaW4gMTIzIG1pbGxpc2Vjb25kc1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5ub3coKS5wbHVzKHsgbWludXRlczogMTUgfSkgLy9+PiBpbiAxNSBtaW51dGVzXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLm5vdygpLnBsdXMoeyBkYXlzOiAxIH0pIC8vfj4gdGhpcyB0aW1lIHRvbW9ycm93XG4gICAqIEBleGFtcGxlIERhdGVUaW1lLm5vdygpLnBsdXMoeyBkYXlzOiAtMSB9KSAvL34+IHRoaXMgdGltZSB5ZXN0ZXJkYXlcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubm93KCkucGx1cyh7IGhvdXJzOiAzLCBtaW51dGVzOiAxMyB9KSAvL34+IGluIDMgaHIsIDEzIG1pblxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5ub3coKS5wbHVzKER1cmF0aW9uLmZyb21PYmplY3QoeyBob3VyczogMywgbWludXRlczogMTMgfSkpIC8vfj4gaW4gMyBociwgMTMgbWluXG4gICAqIEByZXR1cm4ge0RhdGVUaW1lfVxuICAgKi9cbiAgcGx1cyhkdXJhdGlvbikge1xuICAgIGlmICghdGhpcy5pc1ZhbGlkKSByZXR1cm4gdGhpcztcbiAgICBjb25zdCBkdXIgPSBEdXJhdGlvbi5mcm9tRHVyYXRpb25MaWtlKGR1cmF0aW9uKTtcbiAgICByZXR1cm4gY2xvbmUodGhpcywgYWRqdXN0VGltZSh0aGlzLCBkdXIpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdWJ0cmFjdCBhIHBlcmlvZCBvZiB0aW1lIHRvIHRoaXMgRGF0ZVRpbWUgYW5kIHJldHVybiB0aGUgcmVzdWx0aW5nIERhdGVUaW1lXG4gICAqIFNlZSB7QGxpbmsgRGF0ZVRpbWUjcGx1c31cbiAgICogQHBhcmFtIHtEdXJhdGlvbnxPYmplY3R8bnVtYmVyfSBkdXJhdGlvbiAtIFRoZSBhbW91bnQgdG8gc3VidHJhY3QuIEVpdGhlciBhIEx1eG9uIER1cmF0aW9uLCBhIG51bWJlciBvZiBtaWxsaXNlY29uZHMsIHRoZSBvYmplY3QgYXJndW1lbnQgdG8gRHVyYXRpb24uZnJvbU9iamVjdCgpXG4gICBAcmV0dXJuIHtEYXRlVGltZX1cbiAgICovXG4gIG1pbnVzKGR1cmF0aW9uKSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHJldHVybiB0aGlzO1xuICAgIGNvbnN0IGR1ciA9IER1cmF0aW9uLmZyb21EdXJhdGlvbkxpa2UoZHVyYXRpb24pLm5lZ2F0ZSgpO1xuICAgIHJldHVybiBjbG9uZSh0aGlzLCBhZGp1c3RUaW1lKHRoaXMsIGR1cikpO1xuICB9XG5cbiAgLyoqXG4gICAqIFwiU2V0XCIgdGhpcyBEYXRlVGltZSB0byB0aGUgYmVnaW5uaW5nIG9mIGEgdW5pdCBvZiB0aW1lLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdW5pdCAtIFRoZSB1bml0IHRvIGdvIHRvIHRoZSBiZWdpbm5pbmcgb2YuIENhbiBiZSAneWVhcicsICdxdWFydGVyJywgJ21vbnRoJywgJ3dlZWsnLCAnZGF5JywgJ2hvdXInLCAnbWludXRlJywgJ3NlY29uZCcsIG9yICdtaWxsaXNlY29uZCcuXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTQsIDMsIDMpLnN0YXJ0T2YoJ21vbnRoJykudG9JU09EYXRlKCk7IC8vPT4gJzIwMTQtMDMtMDEnXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTQsIDMsIDMpLnN0YXJ0T2YoJ3llYXInKS50b0lTT0RhdGUoKTsgLy89PiAnMjAxNC0wMS0wMSdcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNCwgMywgMykuc3RhcnRPZignd2VlaycpLnRvSVNPRGF0ZSgpOyAvLz0+ICcyMDE0LTAzLTAzJywgd2Vla3MgYWx3YXlzIHN0YXJ0IG9uIE1vbmRheXNcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNCwgMywgMywgNSwgMzApLnN0YXJ0T2YoJ2RheScpLnRvSVNPVGltZSgpOyAvLz0+ICcwMDowMC4wMDAtMDU6MDAnXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTQsIDMsIDMsIDUsIDMwKS5zdGFydE9mKCdob3VyJykudG9JU09UaW1lKCk7IC8vPT4gJzA1OjAwOjAwLjAwMC0wNTowMCdcbiAgICogQHJldHVybiB7RGF0ZVRpbWV9XG4gICAqL1xuICBzdGFydE9mKHVuaXQpIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIHRoaXM7XG4gICAgY29uc3QgbyA9IHt9LFxuICAgICAgbm9ybWFsaXplZFVuaXQgPSBEdXJhdGlvbi5ub3JtYWxpemVVbml0KHVuaXQpO1xuICAgIHN3aXRjaCAobm9ybWFsaXplZFVuaXQpIHtcbiAgICAgIGNhc2UgXCJ5ZWFyc1wiOlxuICAgICAgICBvLm1vbnRoID0gMTtcbiAgICAgIC8vIGZhbGxzIHRocm91Z2hcbiAgICAgIGNhc2UgXCJxdWFydGVyc1wiOlxuICAgICAgY2FzZSBcIm1vbnRoc1wiOlxuICAgICAgICBvLmRheSA9IDE7XG4gICAgICAvLyBmYWxscyB0aHJvdWdoXG4gICAgICBjYXNlIFwid2Vla3NcIjpcbiAgICAgIGNhc2UgXCJkYXlzXCI6XG4gICAgICAgIG8uaG91ciA9IDA7XG4gICAgICAvLyBmYWxscyB0aHJvdWdoXG4gICAgICBjYXNlIFwiaG91cnNcIjpcbiAgICAgICAgby5taW51dGUgPSAwO1xuICAgICAgLy8gZmFsbHMgdGhyb3VnaFxuICAgICAgY2FzZSBcIm1pbnV0ZXNcIjpcbiAgICAgICAgby5zZWNvbmQgPSAwO1xuICAgICAgLy8gZmFsbHMgdGhyb3VnaFxuICAgICAgY2FzZSBcInNlY29uZHNcIjpcbiAgICAgICAgby5taWxsaXNlY29uZCA9IDA7XG4gICAgICAgIGJyZWFrO1xuICAgICAgLy8gbm8gZGVmYXVsdCwgaW52YWxpZCB1bml0cyB0aHJvdyBpbiBub3JtYWxpemVVbml0KClcbiAgICB9XG5cbiAgICBpZiAobm9ybWFsaXplZFVuaXQgPT09IFwid2Vla3NcIikge1xuICAgICAgby53ZWVrZGF5ID0gMTtcbiAgICB9XG5cbiAgICBpZiAobm9ybWFsaXplZFVuaXQgPT09IFwicXVhcnRlcnNcIikge1xuICAgICAgY29uc3QgcSA9IE1hdGguY2VpbCh0aGlzLm1vbnRoIC8gMyk7XG4gICAgICBvLm1vbnRoID0gKHEgLSAxKSAqIDMgKyAxO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLnNldChvKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBcIlNldFwiIHRoaXMgRGF0ZVRpbWUgdG8gdGhlIGVuZCAobWVhbmluZyB0aGUgbGFzdCBtaWxsaXNlY29uZCkgb2YgYSB1bml0IG9mIHRpbWVcbiAgICogQHBhcmFtIHtzdHJpbmd9IHVuaXQgLSBUaGUgdW5pdCB0byBnbyB0byB0aGUgZW5kIG9mLiBDYW4gYmUgJ3llYXInLCAncXVhcnRlcicsICdtb250aCcsICd3ZWVrJywgJ2RheScsICdob3VyJywgJ21pbnV0ZScsICdzZWNvbmQnLCBvciAnbWlsbGlzZWNvbmQnLlxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE0LCAzLCAzKS5lbmRPZignbW9udGgnKS50b0lTTygpOyAvLz0+ICcyMDE0LTAzLTMxVDIzOjU5OjU5Ljk5OS0wNTowMCdcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNCwgMywgMykuZW5kT2YoJ3llYXInKS50b0lTTygpOyAvLz0+ICcyMDE0LTEyLTMxVDIzOjU5OjU5Ljk5OS0wNTowMCdcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNCwgMywgMykuZW5kT2YoJ3dlZWsnKS50b0lTTygpOyAvLyA9PiAnMjAxNC0wMy0wOVQyMzo1OTo1OS45OTktMDU6MDAnLCB3ZWVrcyBzdGFydCBvbiBNb25kYXlzXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTQsIDMsIDMsIDUsIDMwKS5lbmRPZignZGF5JykudG9JU08oKTsgLy89PiAnMjAxNC0wMy0wM1QyMzo1OTo1OS45OTktMDU6MDAnXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTQsIDMsIDMsIDUsIDMwKS5lbmRPZignaG91cicpLnRvSVNPKCk7IC8vPT4gJzIwMTQtMDMtMDNUMDU6NTk6NTkuOTk5LTA1OjAwJ1xuICAgKiBAcmV0dXJuIHtEYXRlVGltZX1cbiAgICovXG4gIGVuZE9mKHVuaXQpIHtcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkXG4gICAgICA/IHRoaXMucGx1cyh7IFt1bml0XTogMSB9KVxuICAgICAgICAgIC5zdGFydE9mKHVuaXQpXG4gICAgICAgICAgLm1pbnVzKDEpXG4gICAgICA6IHRoaXM7XG4gIH1cblxuICAvLyBPVVRQVVRcblxuICAvKipcbiAgICogUmV0dXJucyBhIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGlzIERhdGVUaW1lIGZvcm1hdHRlZCBhY2NvcmRpbmcgdG8gdGhlIHNwZWNpZmllZCBmb3JtYXQgc3RyaW5nLlxuICAgKiAqKllvdSBtYXkgbm90IHdhbnQgdGhpcy4qKiBTZWUge0BsaW5rIERhdGVUaW1lI3RvTG9jYWxlU3RyaW5nfSBmb3IgYSBtb3JlIGZsZXhpYmxlIGZvcm1hdHRpbmcgdG9vbC4gRm9yIGEgdGFibGUgb2YgdG9rZW5zIGFuZCB0aGVpciBpbnRlcnByZXRhdGlvbnMsIHNlZSBbaGVyZV0oaHR0cHM6Ly9tb21lbnQuZ2l0aHViLmlvL2x1eG9uLyMvZm9ybWF0dGluZz9pZD10YWJsZS1vZi10b2tlbnMpLlxuICAgKiBEZWZhdWx0cyB0byBlbi1VUyBpZiBubyBsb2NhbGUgaGFzIGJlZW4gc3BlY2lmaWVkLCByZWdhcmRsZXNzIG9mIHRoZSBzeXN0ZW0ncyBsb2NhbGUuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBmbXQgLSB0aGUgZm9ybWF0IHN0cmluZ1xuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyAtIG9wdHMgdG8gb3ZlcnJpZGUgdGhlIGNvbmZpZ3VyYXRpb24gb3B0aW9ucyBvbiB0aGlzIERhdGVUaW1lXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLm5vdygpLnRvRm9ybWF0KCd5eXl5IExMTCBkZCcpIC8vPT4gJzIwMTcgQXByIDIyJ1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5ub3coKS5zZXRMb2NhbGUoJ2ZyJykudG9Gb3JtYXQoJ3l5eXkgTExMIGRkJykgLy89PiAnMjAxNyBhdnIuIDIyJ1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5ub3coKS50b0Zvcm1hdCgneXl5eSBMTEwgZGQnLCB7IGxvY2FsZTogXCJmclwiIH0pIC8vPT4gJzIwMTcgYXZyLiAyMidcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubm93KCkudG9Gb3JtYXQoXCJISCAnaG91cnMgYW5kJyBtbSAnbWludXRlcydcIikgLy89PiAnMjAgaG91cnMgYW5kIDU1IG1pbnV0ZXMnXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIHRvRm9ybWF0KGZtdCwgb3B0cyA9IHt9KSB7XG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZFxuICAgICAgPyBGb3JtYXR0ZXIuY3JlYXRlKHRoaXMubG9jLnJlZGVmYXVsdFRvRU4ob3B0cykpLmZvcm1hdERhdGVUaW1lRnJvbVN0cmluZyh0aGlzLCBmbXQpXG4gICAgICA6IElOVkFMSUQ7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIGxvY2FsaXplZCBzdHJpbmcgcmVwcmVzZW50aW5nIHRoaXMgZGF0ZS4gQWNjZXB0cyB0aGUgc2FtZSBvcHRpb25zIGFzIHRoZSBJbnRsLkRhdGVUaW1lRm9ybWF0IGNvbnN0cnVjdG9yIGFuZCBhbnkgcHJlc2V0cyBkZWZpbmVkIGJ5IEx1eG9uLCBzdWNoIGFzIGBEYXRlVGltZS5EQVRFX0ZVTExgIG9yIGBEYXRlVGltZS5USU1FX1NJTVBMRWAuXG4gICAqIFRoZSBleGFjdCBiZWhhdmlvciBvZiB0aGlzIG1ldGhvZCBpcyBicm93c2VyLXNwZWNpZmljLCBidXQgaW4gZ2VuZXJhbCBpdCB3aWxsIHJldHVybiBhbiBhcHByb3ByaWF0ZSByZXByZXNlbnRhdGlvblxuICAgKiBvZiB0aGUgRGF0ZVRpbWUgaW4gdGhlIGFzc2lnbmVkIGxvY2FsZS5cbiAgICogRGVmYXVsdHMgdG8gdGhlIHN5c3RlbSdzIGxvY2FsZSBpZiBubyBsb2NhbGUgaGFzIGJlZW4gc3BlY2lmaWVkXG4gICAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvRGF0ZVRpbWVGb3JtYXRcbiAgICogQHBhcmFtIGZvcm1hdE9wdHMge09iamVjdH0gLSBJbnRsLkRhdGVUaW1lRm9ybWF0IGNvbnN0cnVjdG9yIG9wdGlvbnMgYW5kIGNvbmZpZ3VyYXRpb24gb3B0aW9uc1xuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyAtIG9wdHMgdG8gb3ZlcnJpZGUgdGhlIGNvbmZpZ3VyYXRpb24gb3B0aW9ucyBvbiB0aGlzIERhdGVUaW1lXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLm5vdygpLnRvTG9jYWxlU3RyaW5nKCk7IC8vPT4gNC8yMC8yMDE3XG4gICAqIEBleGFtcGxlIERhdGVUaW1lLm5vdygpLnNldExvY2FsZSgnZW4tZ2InKS50b0xvY2FsZVN0cmluZygpOyAvLz0+ICcyMC8wNC8yMDE3J1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5ub3coKS50b0xvY2FsZVN0cmluZyhEYXRlVGltZS5EQVRFX0ZVTEwpOyAvLz0+ICdBcHJpbCAyMCwgMjAxNydcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubm93KCkudG9Mb2NhbGVTdHJpbmcoRGF0ZVRpbWUuREFURV9GVUxMLCB7IGxvY2FsZTogJ2ZyJyB9KTsgLy89PiAnMjggYW/Du3QgMjAyMidcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubm93KCkudG9Mb2NhbGVTdHJpbmcoRGF0ZVRpbWUuVElNRV9TSU1QTEUpOyAvLz0+ICcxMTozMiBBTSdcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubm93KCkudG9Mb2NhbGVTdHJpbmcoRGF0ZVRpbWUuREFURVRJTUVfU0hPUlQpOyAvLz0+ICc0LzIwLzIwMTcsIDExOjMyIEFNJ1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5ub3coKS50b0xvY2FsZVN0cmluZyh7IHdlZWtkYXk6ICdsb25nJywgbW9udGg6ICdsb25nJywgZGF5OiAnMi1kaWdpdCcgfSk7IC8vPT4gJ1RodXJzZGF5LCBBcHJpbCAyMCdcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubm93KCkudG9Mb2NhbGVTdHJpbmcoeyB3ZWVrZGF5OiAnc2hvcnQnLCBtb250aDogJ3Nob3J0JywgZGF5OiAnMi1kaWdpdCcsIGhvdXI6ICcyLWRpZ2l0JywgbWludXRlOiAnMi1kaWdpdCcgfSk7IC8vPT4gJ1RodSwgQXByIDIwLCAxMToyNyBBTSdcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubm93KCkudG9Mb2NhbGVTdHJpbmcoeyBob3VyOiAnMi1kaWdpdCcsIG1pbnV0ZTogJzItZGlnaXQnLCBob3VyQ3ljbGU6ICdoMjMnIH0pOyAvLz0+ICcxMTozMidcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgdG9Mb2NhbGVTdHJpbmcoZm9ybWF0T3B0cyA9IERBVEVfU0hPUlQsIG9wdHMgPSB7fSkge1xuICAgIHJldHVybiB0aGlzLmlzVmFsaWRcbiAgICAgID8gRm9ybWF0dGVyLmNyZWF0ZSh0aGlzLmxvYy5jbG9uZShvcHRzKSwgZm9ybWF0T3B0cykuZm9ybWF0RGF0ZVRpbWUodGhpcylcbiAgICAgIDogSU5WQUxJRDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIGFycmF5IG9mIGZvcm1hdCBcInBhcnRzXCIsIG1lYW5pbmcgaW5kaXZpZHVhbCB0b2tlbnMgYWxvbmcgd2l0aCBtZXRhZGF0YS4gVGhpcyBpcyBhbGxvd3MgY2FsbGVycyB0byBwb3N0LXByb2Nlc3MgaW5kaXZpZHVhbCBzZWN0aW9ucyBvZiB0aGUgZm9ybWF0dGVkIG91dHB1dC5cbiAgICogRGVmYXVsdHMgdG8gdGhlIHN5c3RlbSdzIGxvY2FsZSBpZiBubyBsb2NhbGUgaGFzIGJlZW4gc3BlY2lmaWVkXG4gICAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvRGF0ZVRpbWVGb3JtYXQvZm9ybWF0VG9QYXJ0c1xuICAgKiBAcGFyYW0gb3B0cyB7T2JqZWN0fSAtIEludGwuRGF0ZVRpbWVGb3JtYXQgY29uc3RydWN0b3Igb3B0aW9ucywgc2FtZSBhcyBgdG9Mb2NhbGVTdHJpbmdgLlxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5ub3coKS50b0xvY2FsZVBhcnRzKCk7IC8vPT4gW1xuICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy89PiAgIHsgdHlwZTogJ2RheScsIHZhbHVlOiAnMjUnIH0sXG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLz0+ICAgeyB0eXBlOiAnbGl0ZXJhbCcsIHZhbHVlOiAnLycgfSxcbiAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vPT4gICB7IHR5cGU6ICdtb250aCcsIHZhbHVlOiAnMDUnIH0sXG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLz0+ICAgeyB0eXBlOiAnbGl0ZXJhbCcsIHZhbHVlOiAnLycgfSxcbiAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vPT4gICB7IHR5cGU6ICd5ZWFyJywgdmFsdWU6ICcxOTgyJyB9XG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLz0+IF1cbiAgICovXG4gIHRvTG9jYWxlUGFydHMob3B0cyA9IHt9KSB7XG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZFxuICAgICAgPyBGb3JtYXR0ZXIuY3JlYXRlKHRoaXMubG9jLmNsb25lKG9wdHMpLCBvcHRzKS5mb3JtYXREYXRlVGltZVBhcnRzKHRoaXMpXG4gICAgICA6IFtdO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gSVNPIDg2MDEtY29tcGxpYW50IHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGlzIERhdGVUaW1lXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIC0gb3B0aW9uc1xuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRzLnN1cHByZXNzTWlsbGlzZWNvbmRzPWZhbHNlXSAtIGV4Y2x1ZGUgbWlsbGlzZWNvbmRzIGZyb20gdGhlIGZvcm1hdCBpZiB0aGV5J3JlIDBcbiAgICogQHBhcmFtIHtib29sZWFufSBbb3B0cy5zdXBwcmVzc1NlY29uZHM9ZmFsc2VdIC0gZXhjbHVkZSBzZWNvbmRzIGZyb20gdGhlIGZvcm1hdCBpZiB0aGV5J3JlIDBcbiAgICogQHBhcmFtIHtib29sZWFufSBbb3B0cy5pbmNsdWRlT2Zmc2V0PXRydWVdIC0gaW5jbHVkZSB0aGUgb2Zmc2V0LCBzdWNoIGFzICdaJyBvciAnLTA0OjAwJ1xuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRzLmV4dGVuZGVkWm9uZT1mYWxzZV0gLSBhZGQgdGhlIHRpbWUgem9uZSBmb3JtYXQgZXh0ZW5zaW9uXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5mb3JtYXQ9J2V4dGVuZGVkJ10gLSBjaG9vc2UgYmV0d2VlbiB0aGUgYmFzaWMgYW5kIGV4dGVuZGVkIGZvcm1hdFxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS51dGMoMTk4MywgNSwgMjUpLnRvSVNPKCkgLy89PiAnMTk4Mi0wNS0yNVQwMDowMDowMC4wMDBaJ1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5ub3coKS50b0lTTygpIC8vPT4gJzIwMTctMDQtMjJUMjA6NDc6MDUuMzM1LTA0OjAwJ1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5ub3coKS50b0lTTyh7IGluY2x1ZGVPZmZzZXQ6IGZhbHNlIH0pIC8vPT4gJzIwMTctMDQtMjJUMjA6NDc6MDUuMzM1J1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5ub3coKS50b0lTTyh7IGZvcm1hdDogJ2Jhc2ljJyB9KSAvLz0+ICcyMDE3MDQyMlQyMDQ3MDUuMzM1LTA0MDAnXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIHRvSVNPKHtcbiAgICBmb3JtYXQgPSBcImV4dGVuZGVkXCIsXG4gICAgc3VwcHJlc3NTZWNvbmRzID0gZmFsc2UsXG4gICAgc3VwcHJlc3NNaWxsaXNlY29uZHMgPSBmYWxzZSxcbiAgICBpbmNsdWRlT2Zmc2V0ID0gdHJ1ZSxcbiAgICBleHRlbmRlZFpvbmUgPSBmYWxzZSxcbiAgfSA9IHt9KSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IGV4dCA9IGZvcm1hdCA9PT0gXCJleHRlbmRlZFwiO1xuXG4gICAgbGV0IGMgPSB0b0lTT0RhdGUodGhpcywgZXh0KTtcbiAgICBjICs9IFwiVFwiO1xuICAgIGMgKz0gdG9JU09UaW1lKHRoaXMsIGV4dCwgc3VwcHJlc3NTZWNvbmRzLCBzdXBwcmVzc01pbGxpc2Vjb25kcywgaW5jbHVkZU9mZnNldCwgZXh0ZW5kZWRab25lKTtcbiAgICByZXR1cm4gYztcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIElTTyA4NjAxLWNvbXBsaWFudCBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhpcyBEYXRlVGltZSdzIGRhdGUgY29tcG9uZW50XG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIC0gb3B0aW9uc1xuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMuZm9ybWF0PSdleHRlbmRlZCddIC0gY2hvb3NlIGJldHdlZW4gdGhlIGJhc2ljIGFuZCBleHRlbmRlZCBmb3JtYXRcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUudXRjKDE5ODIsIDUsIDI1KS50b0lTT0RhdGUoKSAvLz0+ICcxOTgyLTA1LTI1J1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS51dGMoMTk4MiwgNSwgMjUpLnRvSVNPRGF0ZSh7IGZvcm1hdDogJ2Jhc2ljJyB9KSAvLz0+ICcxOTgyMDUyNSdcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgdG9JU09EYXRlKHsgZm9ybWF0ID0gXCJleHRlbmRlZFwiIH0gPSB7fSkge1xuICAgIGlmICghdGhpcy5pc1ZhbGlkKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gdG9JU09EYXRlKHRoaXMsIGZvcm1hdCA9PT0gXCJleHRlbmRlZFwiKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIElTTyA4NjAxLWNvbXBsaWFudCBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhpcyBEYXRlVGltZSdzIHdlZWsgZGF0ZVxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS51dGMoMTk4MiwgNSwgMjUpLnRvSVNPV2Vla0RhdGUoKSAvLz0+ICcxOTgyLVcyMS0yJ1xuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICB0b0lTT1dlZWtEYXRlKCkge1xuICAgIHJldHVybiB0b1RlY2hGb3JtYXQodGhpcywgXCJra2trLSdXJ1dXLWNcIik7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbiBJU08gODYwMS1jb21wbGlhbnQgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoaXMgRGF0ZVRpbWUncyB0aW1lIGNvbXBvbmVudFxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyAtIG9wdGlvbnNcbiAgICogQHBhcmFtIHtib29sZWFufSBbb3B0cy5zdXBwcmVzc01pbGxpc2Vjb25kcz1mYWxzZV0gLSBleGNsdWRlIG1pbGxpc2Vjb25kcyBmcm9tIHRoZSBmb3JtYXQgaWYgdGhleSdyZSAwXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdHMuc3VwcHJlc3NTZWNvbmRzPWZhbHNlXSAtIGV4Y2x1ZGUgc2Vjb25kcyBmcm9tIHRoZSBmb3JtYXQgaWYgdGhleSdyZSAwXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdHMuaW5jbHVkZU9mZnNldD10cnVlXSAtIGluY2x1ZGUgdGhlIG9mZnNldCwgc3VjaCBhcyAnWicgb3IgJy0wNDowMCdcbiAgICogQHBhcmFtIHtib29sZWFufSBbb3B0cy5leHRlbmRlZFpvbmU9dHJ1ZV0gLSBhZGQgdGhlIHRpbWUgem9uZSBmb3JtYXQgZXh0ZW5zaW9uXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdHMuaW5jbHVkZVByZWZpeD1mYWxzZV0gLSBpbmNsdWRlIHRoZSBgVGAgcHJlZml4XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5mb3JtYXQ9J2V4dGVuZGVkJ10gLSBjaG9vc2UgYmV0d2VlbiB0aGUgYmFzaWMgYW5kIGV4dGVuZGVkIGZvcm1hdFxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS51dGMoKS5zZXQoeyBob3VyOiA3LCBtaW51dGU6IDM0IH0pLnRvSVNPVGltZSgpIC8vPT4gJzA3OjM0OjE5LjM2MVonXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLnV0YygpLnNldCh7IGhvdXI6IDcsIG1pbnV0ZTogMzQsIHNlY29uZHM6IDAsIG1pbGxpc2Vjb25kczogMCB9KS50b0lTT1RpbWUoeyBzdXBwcmVzc1NlY29uZHM6IHRydWUgfSkgLy89PiAnMDc6MzRaJ1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS51dGMoKS5zZXQoeyBob3VyOiA3LCBtaW51dGU6IDM0IH0pLnRvSVNPVGltZSh7IGZvcm1hdDogJ2Jhc2ljJyB9KSAvLz0+ICcwNzM0MTkuMzYxWidcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUudXRjKCkuc2V0KHsgaG91cjogNywgbWludXRlOiAzNCB9KS50b0lTT1RpbWUoeyBpbmNsdWRlUHJlZml4OiB0cnVlIH0pIC8vPT4gJ1QwNzozNDoxOS4zNjFaJ1xuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICB0b0lTT1RpbWUoe1xuICAgIHN1cHByZXNzTWlsbGlzZWNvbmRzID0gZmFsc2UsXG4gICAgc3VwcHJlc3NTZWNvbmRzID0gZmFsc2UsXG4gICAgaW5jbHVkZU9mZnNldCA9IHRydWUsXG4gICAgaW5jbHVkZVByZWZpeCA9IGZhbHNlLFxuICAgIGV4dGVuZGVkWm9uZSA9IGZhbHNlLFxuICAgIGZvcm1hdCA9IFwiZXh0ZW5kZWRcIixcbiAgfSA9IHt9KSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGxldCBjID0gaW5jbHVkZVByZWZpeCA/IFwiVFwiIDogXCJcIjtcbiAgICByZXR1cm4gKFxuICAgICAgYyArXG4gICAgICB0b0lTT1RpbWUoXG4gICAgICAgIHRoaXMsXG4gICAgICAgIGZvcm1hdCA9PT0gXCJleHRlbmRlZFwiLFxuICAgICAgICBzdXBwcmVzc1NlY29uZHMsXG4gICAgICAgIHN1cHByZXNzTWlsbGlzZWNvbmRzLFxuICAgICAgICBpbmNsdWRlT2Zmc2V0LFxuICAgICAgICBleHRlbmRlZFpvbmVcbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gUkZDIDI4MjItY29tcGF0aWJsZSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhpcyBEYXRlVGltZVxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS51dGMoMjAxNCwgNywgMTMpLnRvUkZDMjgyMigpIC8vPT4gJ1N1biwgMTMgSnVsIDIwMTQgMDA6MDA6MDAgKzAwMDAnXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTQsIDcsIDEzKS50b1JGQzI4MjIoKSAvLz0+ICdTdW4sIDEzIEp1bCAyMDE0IDAwOjAwOjAwIC0wNDAwJ1xuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICB0b1JGQzI4MjIoKSB7XG4gICAgcmV0dXJuIHRvVGVjaEZvcm1hdCh0aGlzLCBcIkVFRSwgZGQgTExMIHl5eXkgSEg6bW06c3MgWlpaXCIsIGZhbHNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoaXMgRGF0ZVRpbWUgYXBwcm9wcmlhdGUgZm9yIHVzZSBpbiBIVFRQIGhlYWRlcnMuIFRoZSBvdXRwdXQgaXMgYWx3YXlzIGV4cHJlc3NlZCBpbiBHTVQuXG4gICAqIFNwZWNpZmljYWxseSwgdGhlIHN0cmluZyBjb25mb3JtcyB0byBSRkMgMTEyMy5cbiAgICogQHNlZSBodHRwczovL3d3dy53My5vcmcvUHJvdG9jb2xzL3JmYzI2MTYvcmZjMjYxNi1zZWMzLmh0bWwjc2VjMy4zLjFcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUudXRjKDIwMTQsIDcsIDEzKS50b0hUVFAoKSAvLz0+ICdTdW4sIDEzIEp1bCAyMDE0IDAwOjAwOjAwIEdNVCdcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUudXRjKDIwMTQsIDcsIDEzLCAxOSkudG9IVFRQKCkgLy89PiAnU3VuLCAxMyBKdWwgMjAxNCAxOTowMDowMCBHTVQnXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIHRvSFRUUCgpIHtcbiAgICByZXR1cm4gdG9UZWNoRm9ybWF0KHRoaXMudG9VVEMoKSwgXCJFRUUsIGRkIExMTCB5eXl5IEhIOm1tOnNzICdHTVQnXCIpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhpcyBEYXRlVGltZSBhcHByb3ByaWF0ZSBmb3IgdXNlIGluIFNRTCBEYXRlXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLnV0YygyMDE0LCA3LCAxMykudG9TUUxEYXRlKCkgLy89PiAnMjAxNC0wNy0xMydcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgdG9TUUxEYXRlKCkge1xuICAgIGlmICghdGhpcy5pc1ZhbGlkKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIHRvSVNPRGF0ZSh0aGlzLCB0cnVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoaXMgRGF0ZVRpbWUgYXBwcm9wcmlhdGUgZm9yIHVzZSBpbiBTUUwgVGltZVxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyAtIG9wdGlvbnNcbiAgICogQHBhcmFtIHtib29sZWFufSBbb3B0cy5pbmNsdWRlWm9uZT1mYWxzZV0gLSBpbmNsdWRlIHRoZSB6b25lLCBzdWNoIGFzICdBbWVyaWNhL05ld19Zb3JrJy4gT3ZlcnJpZGVzIGluY2x1ZGVPZmZzZXQuXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdHMuaW5jbHVkZU9mZnNldD10cnVlXSAtIGluY2x1ZGUgdGhlIG9mZnNldCwgc3VjaCBhcyAnWicgb3IgJy0wNDowMCdcbiAgICogQHBhcmFtIHtib29sZWFufSBbb3B0cy5pbmNsdWRlT2Zmc2V0U3BhY2U9dHJ1ZV0gLSBpbmNsdWRlIHRoZSBzcGFjZSBiZXR3ZWVuIHRoZSB0aW1lIGFuZCB0aGUgb2Zmc2V0LCBzdWNoIGFzICcwNToxNToxNi4zNDUgLTA0OjAwJ1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS51dGMoKS50b1NRTCgpIC8vPT4gJzA1OjE1OjE2LjM0NSdcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubm93KCkudG9TUUwoKSAvLz0+ICcwNToxNToxNi4zNDUgLTA0OjAwJ1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5ub3coKS50b1NRTCh7IGluY2x1ZGVPZmZzZXQ6IGZhbHNlIH0pIC8vPT4gJzA1OjE1OjE2LjM0NSdcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubm93KCkudG9TUUwoeyBpbmNsdWRlWm9uZTogZmFsc2UgfSkgLy89PiAnMDU6MTU6MTYuMzQ1IEFtZXJpY2EvTmV3X1lvcmsnXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIHRvU1FMVGltZSh7IGluY2x1ZGVPZmZzZXQgPSB0cnVlLCBpbmNsdWRlWm9uZSA9IGZhbHNlLCBpbmNsdWRlT2Zmc2V0U3BhY2UgPSB0cnVlIH0gPSB7fSkge1xuICAgIGxldCBmbXQgPSBcIkhIOm1tOnNzLlNTU1wiO1xuXG4gICAgaWYgKGluY2x1ZGVab25lIHx8IGluY2x1ZGVPZmZzZXQpIHtcbiAgICAgIGlmIChpbmNsdWRlT2Zmc2V0U3BhY2UpIHtcbiAgICAgICAgZm10ICs9IFwiIFwiO1xuICAgICAgfVxuICAgICAgaWYgKGluY2x1ZGVab25lKSB7XG4gICAgICAgIGZtdCArPSBcInpcIjtcbiAgICAgIH0gZWxzZSBpZiAoaW5jbHVkZU9mZnNldCkge1xuICAgICAgICBmbXQgKz0gXCJaWlwiO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0b1RlY2hGb3JtYXQodGhpcywgZm10LCB0cnVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoaXMgRGF0ZVRpbWUgYXBwcm9wcmlhdGUgZm9yIHVzZSBpbiBTUUwgRGF0ZVRpbWVcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgLSBvcHRpb25zXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdHMuaW5jbHVkZVpvbmU9ZmFsc2VdIC0gaW5jbHVkZSB0aGUgem9uZSwgc3VjaCBhcyAnQW1lcmljYS9OZXdfWW9yaycuIE92ZXJyaWRlcyBpbmNsdWRlT2Zmc2V0LlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRzLmluY2x1ZGVPZmZzZXQ9dHJ1ZV0gLSBpbmNsdWRlIHRoZSBvZmZzZXQsIHN1Y2ggYXMgJ1onIG9yICctMDQ6MDAnXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdHMuaW5jbHVkZU9mZnNldFNwYWNlPXRydWVdIC0gaW5jbHVkZSB0aGUgc3BhY2UgYmV0d2VlbiB0aGUgdGltZSBhbmQgdGhlIG9mZnNldCwgc3VjaCBhcyAnMDU6MTU6MTYuMzQ1IC0wNDowMCdcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUudXRjKDIwMTQsIDcsIDEzKS50b1NRTCgpIC8vPT4gJzIwMTQtMDctMTMgMDA6MDA6MDAuMDAwIFonXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTQsIDcsIDEzKS50b1NRTCgpIC8vPT4gJzIwMTQtMDctMTMgMDA6MDA6MDAuMDAwIC0wNDowMCdcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNCwgNywgMTMpLnRvU1FMKHsgaW5jbHVkZU9mZnNldDogZmFsc2UgfSkgLy89PiAnMjAxNC0wNy0xMyAwMDowMDowMC4wMDAnXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTQsIDcsIDEzKS50b1NRTCh7IGluY2x1ZGVab25lOiB0cnVlIH0pIC8vPT4gJzIwMTQtMDctMTMgMDA6MDA6MDAuMDAwIEFtZXJpY2EvTmV3X1lvcmsnXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIHRvU1FMKG9wdHMgPSB7fSkge1xuICAgIGlmICghdGhpcy5pc1ZhbGlkKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gYCR7dGhpcy50b1NRTERhdGUoKX0gJHt0aGlzLnRvU1FMVGltZShvcHRzKX1gO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhpcyBEYXRlVGltZSBhcHByb3ByaWF0ZSBmb3IgZGVidWdnaW5nXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyB0aGlzLnRvSVNPKCkgOiBJTlZBTElEO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGVwb2NoIG1pbGxpc2Vjb25kcyBvZiB0aGlzIERhdGVUaW1lLiBBbGlhcyBvZiB7QGxpbmsgRGF0ZVRpbWUjdG9NaWxsaXN9XG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIHZhbHVlT2YoKSB7XG4gICAgcmV0dXJuIHRoaXMudG9NaWxsaXMoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBlcG9jaCBtaWxsaXNlY29uZHMgb2YgdGhpcyBEYXRlVGltZS5cbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgdG9NaWxsaXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHRoaXMudHMgOiBOYU47XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgZXBvY2ggc2Vjb25kcyBvZiB0aGlzIERhdGVUaW1lLlxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqL1xuICB0b1NlY29uZHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHRoaXMudHMgLyAxMDAwIDogTmFOO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGVwb2NoIHNlY29uZHMgKGFzIGEgd2hvbGUgbnVtYmVyKSBvZiB0aGlzIERhdGVUaW1lLlxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqL1xuICB0b1VuaXhJbnRlZ2VyKCkge1xuICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyBNYXRoLmZsb29yKHRoaXMudHMgLyAxMDAwKSA6IE5hTjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIElTTyA4NjAxIHJlcHJlc2VudGF0aW9uIG9mIHRoaXMgRGF0ZVRpbWUgYXBwcm9wcmlhdGUgZm9yIHVzZSBpbiBKU09OLlxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9JU08oKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgQlNPTiBzZXJpYWxpemFibGUgZXF1aXZhbGVudCB0byB0aGlzIERhdGVUaW1lLlxuICAgKiBAcmV0dXJuIHtEYXRlfVxuICAgKi9cbiAgdG9CU09OKCkge1xuICAgIHJldHVybiB0aGlzLnRvSlNEYXRlKCk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIEphdmFTY3JpcHQgb2JqZWN0IHdpdGggdGhpcyBEYXRlVGltZSdzIHllYXIsIG1vbnRoLCBkYXksIGFuZCBzbyBvbi5cbiAgICogQHBhcmFtIG9wdHMgLSBvcHRpb25zIGZvciBnZW5lcmF0aW5nIHRoZSBvYmplY3RcbiAgICogQHBhcmFtIHtib29sZWFufSBbb3B0cy5pbmNsdWRlQ29uZmlnPWZhbHNlXSAtIGluY2x1ZGUgY29uZmlndXJhdGlvbiBhdHRyaWJ1dGVzIGluIHRoZSBvdXRwdXRcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubm93KCkudG9PYmplY3QoKSAvLz0+IHsgeWVhcjogMjAxNywgbW9udGg6IDQsIGRheTogMjIsIGhvdXI6IDIwLCBtaW51dGU6IDQ5LCBzZWNvbmQ6IDQyLCBtaWxsaXNlY29uZDogMjY4IH1cbiAgICogQHJldHVybiB7T2JqZWN0fVxuICAgKi9cbiAgdG9PYmplY3Qob3B0cyA9IHt9KSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHJldHVybiB7fTtcblxuICAgIGNvbnN0IGJhc2UgPSB7IC4uLnRoaXMuYyB9O1xuXG4gICAgaWYgKG9wdHMuaW5jbHVkZUNvbmZpZykge1xuICAgICAgYmFzZS5vdXRwdXRDYWxlbmRhciA9IHRoaXMub3V0cHV0Q2FsZW5kYXI7XG4gICAgICBiYXNlLm51bWJlcmluZ1N5c3RlbSA9IHRoaXMubG9jLm51bWJlcmluZ1N5c3RlbTtcbiAgICAgIGJhc2UubG9jYWxlID0gdGhpcy5sb2MubG9jYWxlO1xuICAgIH1cbiAgICByZXR1cm4gYmFzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgSmF2YVNjcmlwdCBEYXRlIGVxdWl2YWxlbnQgdG8gdGhpcyBEYXRlVGltZS5cbiAgICogQHJldHVybiB7RGF0ZX1cbiAgICovXG4gIHRvSlNEYXRlKCkge1xuICAgIHJldHVybiBuZXcgRGF0ZSh0aGlzLmlzVmFsaWQgPyB0aGlzLnRzIDogTmFOKTtcbiAgfVxuXG4gIC8vIENPTVBBUkVcblxuICAvKipcbiAgICogUmV0dXJuIHRoZSBkaWZmZXJlbmNlIGJldHdlZW4gdHdvIERhdGVUaW1lcyBhcyBhIER1cmF0aW9uLlxuICAgKiBAcGFyYW0ge0RhdGVUaW1lfSBvdGhlckRhdGVUaW1lIC0gdGhlIERhdGVUaW1lIHRvIGNvbXBhcmUgdGhpcyBvbmUgdG9cbiAgICogQHBhcmFtIHtzdHJpbmd8c3RyaW5nW119IFt1bml0PVsnbWlsbGlzZWNvbmRzJ11dIC0gdGhlIHVuaXQgb3IgYXJyYXkgb2YgdW5pdHMgKHN1Y2ggYXMgJ2hvdXJzJyBvciAnZGF5cycpIHRvIGluY2x1ZGUgaW4gdGhlIGR1cmF0aW9uLlxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyAtIG9wdGlvbnMgdGhhdCBhZmZlY3QgdGhlIGNyZWF0aW9uIG9mIHRoZSBEdXJhdGlvblxuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMuY29udmVyc2lvbkFjY3VyYWN5PSdjYXN1YWwnXSAtIHRoZSBjb252ZXJzaW9uIHN5c3RlbSB0byB1c2VcbiAgICogQGV4YW1wbGVcbiAgICogdmFyIGkxID0gRGF0ZVRpbWUuZnJvbUlTTygnMTk4Mi0wNS0yNVQwOTo0NScpLFxuICAgKiAgICAgaTIgPSBEYXRlVGltZS5mcm9tSVNPKCcxOTgzLTEwLTE0VDEwOjMwJyk7XG4gICAqIGkyLmRpZmYoaTEpLnRvT2JqZWN0KCkgLy89PiB7IG1pbGxpc2Vjb25kczogNDM4MDc1MDAwMDAgfVxuICAgKiBpMi5kaWZmKGkxLCAnaG91cnMnKS50b09iamVjdCgpIC8vPT4geyBob3VyczogMTIxNjguNzUgfVxuICAgKiBpMi5kaWZmKGkxLCBbJ21vbnRocycsICdkYXlzJ10pLnRvT2JqZWN0KCkgLy89PiB7IG1vbnRoczogMTYsIGRheXM6IDE5LjAzMTI1IH1cbiAgICogaTIuZGlmZihpMSwgWydtb250aHMnLCAnZGF5cycsICdob3VycyddKS50b09iamVjdCgpIC8vPT4geyBtb250aHM6IDE2LCBkYXlzOiAxOSwgaG91cnM6IDAuNzUgfVxuICAgKiBAcmV0dXJuIHtEdXJhdGlvbn1cbiAgICovXG4gIGRpZmYob3RoZXJEYXRlVGltZSwgdW5pdCA9IFwibWlsbGlzZWNvbmRzXCIsIG9wdHMgPSB7fSkge1xuICAgIGlmICghdGhpcy5pc1ZhbGlkIHx8ICFvdGhlckRhdGVUaW1lLmlzVmFsaWQpIHtcbiAgICAgIHJldHVybiBEdXJhdGlvbi5pbnZhbGlkKFwiY3JlYXRlZCBieSBkaWZmaW5nIGFuIGludmFsaWQgRGF0ZVRpbWVcIik7XG4gICAgfVxuXG4gICAgY29uc3QgZHVyT3B0cyA9IHsgbG9jYWxlOiB0aGlzLmxvY2FsZSwgbnVtYmVyaW5nU3lzdGVtOiB0aGlzLm51bWJlcmluZ1N5c3RlbSwgLi4ub3B0cyB9O1xuXG4gICAgY29uc3QgdW5pdHMgPSBtYXliZUFycmF5KHVuaXQpLm1hcChEdXJhdGlvbi5ub3JtYWxpemVVbml0KSxcbiAgICAgIG90aGVySXNMYXRlciA9IG90aGVyRGF0ZVRpbWUudmFsdWVPZigpID4gdGhpcy52YWx1ZU9mKCksXG4gICAgICBlYXJsaWVyID0gb3RoZXJJc0xhdGVyID8gdGhpcyA6IG90aGVyRGF0ZVRpbWUsXG4gICAgICBsYXRlciA9IG90aGVySXNMYXRlciA/IG90aGVyRGF0ZVRpbWUgOiB0aGlzLFxuICAgICAgZGlmZmVkID0gZGlmZihlYXJsaWVyLCBsYXRlciwgdW5pdHMsIGR1ck9wdHMpO1xuXG4gICAgcmV0dXJuIG90aGVySXNMYXRlciA/IGRpZmZlZC5uZWdhdGUoKSA6IGRpZmZlZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gdGhlIGRpZmZlcmVuY2UgYmV0d2VlbiB0aGlzIERhdGVUaW1lIGFuZCByaWdodCBub3cuXG4gICAqIFNlZSB7QGxpbmsgRGF0ZVRpbWUjZGlmZn1cbiAgICogQHBhcmFtIHtzdHJpbmd8c3RyaW5nW119IFt1bml0PVsnbWlsbGlzZWNvbmRzJ11dIC0gdGhlIHVuaXQgb3IgdW5pdHMgdW5pdHMgKHN1Y2ggYXMgJ2hvdXJzJyBvciAnZGF5cycpIHRvIGluY2x1ZGUgaW4gdGhlIGR1cmF0aW9uXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIC0gb3B0aW9ucyB0aGF0IGFmZmVjdCB0aGUgY3JlYXRpb24gb2YgdGhlIER1cmF0aW9uXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5jb252ZXJzaW9uQWNjdXJhY3k9J2Nhc3VhbCddIC0gdGhlIGNvbnZlcnNpb24gc3lzdGVtIHRvIHVzZVxuICAgKiBAcmV0dXJuIHtEdXJhdGlvbn1cbiAgICovXG4gIGRpZmZOb3codW5pdCA9IFwibWlsbGlzZWNvbmRzXCIsIG9wdHMgPSB7fSkge1xuICAgIHJldHVybiB0aGlzLmRpZmYoRGF0ZVRpbWUubm93KCksIHVuaXQsIG9wdHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiBhbiBJbnRlcnZhbCBzcGFubmluZyBiZXR3ZWVuIHRoaXMgRGF0ZVRpbWUgYW5kIGFub3RoZXIgRGF0ZVRpbWVcbiAgICogQHBhcmFtIHtEYXRlVGltZX0gb3RoZXJEYXRlVGltZSAtIHRoZSBvdGhlciBlbmQgcG9pbnQgb2YgdGhlIEludGVydmFsXG4gICAqIEByZXR1cm4ge0ludGVydmFsfVxuICAgKi9cbiAgdW50aWwob3RoZXJEYXRlVGltZSkge1xuICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyBJbnRlcnZhbC5mcm9tRGF0ZVRpbWVzKHRoaXMsIG90aGVyRGF0ZVRpbWUpIDogdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gd2hldGhlciB0aGlzIERhdGVUaW1lIGlzIGluIHRoZSBzYW1lIHVuaXQgb2YgdGltZSBhcyBhbm90aGVyIERhdGVUaW1lLlxuICAgKiBIaWdoZXItb3JkZXIgdW5pdHMgbXVzdCBhbHNvIGJlIGlkZW50aWNhbCBmb3IgdGhpcyBmdW5jdGlvbiB0byByZXR1cm4gYHRydWVgLlxuICAgKiBOb3RlIHRoYXQgdGltZSB6b25lcyBhcmUgKippZ25vcmVkKiogaW4gdGhpcyBjb21wYXJpc29uLCB3aGljaCBjb21wYXJlcyB0aGUgKipsb2NhbCoqIGNhbGVuZGFyIHRpbWUuIFVzZSB7QGxpbmsgRGF0ZVRpbWUjc2V0Wm9uZX0gdG8gY29udmVydCBvbmUgb2YgdGhlIGRhdGVzIGlmIG5lZWRlZC5cbiAgICogQHBhcmFtIHtEYXRlVGltZX0gb3RoZXJEYXRlVGltZSAtIHRoZSBvdGhlciBEYXRlVGltZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gdW5pdCAtIHRoZSB1bml0IG9mIHRpbWUgdG8gY2hlY2sgc2FtZW5lc3Mgb25cbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubm93KCkuaGFzU2FtZShvdGhlckRULCAnZGF5Jyk7IC8vfj4gdHJ1ZSBpZiBvdGhlckRUIGlzIGluIHRoZSBzYW1lIGN1cnJlbnQgY2FsZW5kYXIgZGF5XG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBoYXNTYW1lKG90aGVyRGF0ZVRpbWUsIHVuaXQpIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIGZhbHNlO1xuXG4gICAgY29uc3QgaW5wdXRNcyA9IG90aGVyRGF0ZVRpbWUudmFsdWVPZigpO1xuICAgIGNvbnN0IGFkanVzdGVkVG9ab25lID0gdGhpcy5zZXRab25lKG90aGVyRGF0ZVRpbWUuem9uZSwgeyBrZWVwTG9jYWxUaW1lOiB0cnVlIH0pO1xuICAgIHJldHVybiBhZGp1c3RlZFRvWm9uZS5zdGFydE9mKHVuaXQpIDw9IGlucHV0TXMgJiYgaW5wdXRNcyA8PSBhZGp1c3RlZFRvWm9uZS5lbmRPZih1bml0KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFcXVhbGl0eSBjaGVja1xuICAgKiBUd28gRGF0ZVRpbWVzIGFyZSBlcXVhbCBpZiBhbmQgb25seSBpZiB0aGV5IHJlcHJlc2VudCB0aGUgc2FtZSBtaWxsaXNlY29uZCwgaGF2ZSB0aGUgc2FtZSB6b25lIGFuZCBsb2NhdGlvbiwgYW5kIGFyZSBib3RoIHZhbGlkLlxuICAgKiBUbyBjb21wYXJlIGp1c3QgdGhlIG1pbGxpc2Vjb25kIHZhbHVlcywgdXNlIGArZHQxID09PSArZHQyYC5cbiAgICogQHBhcmFtIHtEYXRlVGltZX0gb3RoZXIgLSB0aGUgb3RoZXIgRGF0ZVRpbWVcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIGVxdWFscyhvdGhlcikge1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLmlzVmFsaWQgJiZcbiAgICAgIG90aGVyLmlzVmFsaWQgJiZcbiAgICAgIHRoaXMudmFsdWVPZigpID09PSBvdGhlci52YWx1ZU9mKCkgJiZcbiAgICAgIHRoaXMuem9uZS5lcXVhbHMob3RoZXIuem9uZSkgJiZcbiAgICAgIHRoaXMubG9jLmVxdWFscyhvdGhlci5sb2MpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIGEgdGhpcyB0aW1lIHJlbGF0aXZlIHRvIG5vdywgc3VjaCBhcyBcImluIHR3byBkYXlzXCIuIENhbiBvbmx5IGludGVybmF0aW9uYWxpemUgaWYgeW91clxuICAgKiBwbGF0Zm9ybSBzdXBwb3J0cyBJbnRsLlJlbGF0aXZlVGltZUZvcm1hdC4gUm91bmRzIGRvd24gYnkgZGVmYXVsdC5cbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgLSBvcHRpb25zIHRoYXQgYWZmZWN0IHRoZSBvdXRwdXRcbiAgICogQHBhcmFtIHtEYXRlVGltZX0gW29wdGlvbnMuYmFzZT1EYXRlVGltZS5ub3coKV0gLSB0aGUgRGF0ZVRpbWUgdG8gdXNlIGFzIHRoZSBiYXNpcyB0byB3aGljaCB0aGlzIHRpbWUgaXMgY29tcGFyZWQuIERlZmF1bHRzIHRvIG5vdy5cbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRpb25zLnN0eWxlPVwibG9uZ1wiXSAtIHRoZSBzdHlsZSBvZiB1bml0cywgbXVzdCBiZSBcImxvbmdcIiwgXCJzaG9ydFwiLCBvciBcIm5hcnJvd1wiXG4gICAqIEBwYXJhbSB7c3RyaW5nfHN0cmluZ1tdfSBvcHRpb25zLnVuaXQgLSB1c2UgYSBzcGVjaWZpYyB1bml0IG9yIGFycmF5IG9mIHVuaXRzOyBpZiBvbWl0dGVkLCBvciBhbiBhcnJheSwgdGhlIG1ldGhvZCB3aWxsIHBpY2sgdGhlIGJlc3QgdW5pdC4gVXNlIGFuIGFycmF5IG9yIG9uZSBvZiBcInllYXJzXCIsIFwicXVhcnRlcnNcIiwgXCJtb250aHNcIiwgXCJ3ZWVrc1wiLCBcImRheXNcIiwgXCJob3Vyc1wiLCBcIm1pbnV0ZXNcIiwgb3IgXCJzZWNvbmRzXCJcbiAgICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5yb3VuZD10cnVlXSAtIHdoZXRoZXIgdG8gcm91bmQgdGhlIG51bWJlcnMgaW4gdGhlIG91dHB1dC5cbiAgICogQHBhcmFtIHtudW1iZXJ9IFtvcHRpb25zLnBhZGRpbmc9MF0gLSBwYWRkaW5nIGluIG1pbGxpc2Vjb25kcy4gVGhpcyBhbGxvd3MgeW91IHRvIHJvdW5kIHVwIHRoZSByZXN1bHQgaWYgaXQgZml0cyBpbnNpZGUgdGhlIHRocmVzaG9sZC4gRG9uJ3QgdXNlIGluIGNvbWJpbmF0aW9uIHdpdGgge3JvdW5kOiBmYWxzZX0gYmVjYXVzZSB0aGUgZGVjaW1hbCBvdXRwdXQgd2lsbCBpbmNsdWRlIHRoZSBwYWRkaW5nLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5sb2NhbGUgLSBvdmVycmlkZSB0aGUgbG9jYWxlIG9mIHRoaXMgRGF0ZVRpbWVcbiAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMubnVtYmVyaW5nU3lzdGVtIC0gb3ZlcnJpZGUgdGhlIG51bWJlcmluZ1N5c3RlbSBvZiB0aGlzIERhdGVUaW1lLiBUaGUgSW50bCBzeXN0ZW0gbWF5IGNob29zZSBub3QgdG8gaG9ub3IgdGhpc1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5ub3coKS5wbHVzKHsgZGF5czogMSB9KS50b1JlbGF0aXZlKCkgLy89PiBcImluIDEgZGF5XCJcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubm93KCkuc2V0TG9jYWxlKFwiZXNcIikudG9SZWxhdGl2ZSh7IGRheXM6IDEgfSkgLy89PiBcImRlbnRybyBkZSAxIGTDrWFcIlxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5ub3coKS5wbHVzKHsgZGF5czogMSB9KS50b1JlbGF0aXZlKHsgbG9jYWxlOiBcImZyXCIgfSkgLy89PiBcImRhbnMgMjMgaGV1cmVzXCJcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubm93KCkubWludXMoeyBkYXlzOiAyIH0pLnRvUmVsYXRpdmUoKSAvLz0+IFwiMiBkYXlzIGFnb1wiXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLm5vdygpLm1pbnVzKHsgZGF5czogMiB9KS50b1JlbGF0aXZlKHsgdW5pdDogXCJob3Vyc1wiIH0pIC8vPT4gXCI0OCBob3VycyBhZ29cIlxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5ub3coKS5taW51cyh7IGhvdXJzOiAzNiB9KS50b1JlbGF0aXZlKHsgcm91bmQ6IGZhbHNlIH0pIC8vPT4gXCIxLjUgZGF5cyBhZ29cIlxuICAgKi9cbiAgdG9SZWxhdGl2ZShvcHRpb25zID0ge30pIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIG51bGw7XG4gICAgY29uc3QgYmFzZSA9IG9wdGlvbnMuYmFzZSB8fCBEYXRlVGltZS5mcm9tT2JqZWN0KHt9LCB7IHpvbmU6IHRoaXMuem9uZSB9KSxcbiAgICAgIHBhZGRpbmcgPSBvcHRpb25zLnBhZGRpbmcgPyAodGhpcyA8IGJhc2UgPyAtb3B0aW9ucy5wYWRkaW5nIDogb3B0aW9ucy5wYWRkaW5nKSA6IDA7XG4gICAgbGV0IHVuaXRzID0gW1wieWVhcnNcIiwgXCJtb250aHNcIiwgXCJkYXlzXCIsIFwiaG91cnNcIiwgXCJtaW51dGVzXCIsIFwic2Vjb25kc1wiXTtcbiAgICBsZXQgdW5pdCA9IG9wdGlvbnMudW5pdDtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShvcHRpb25zLnVuaXQpKSB7XG4gICAgICB1bml0cyA9IG9wdGlvbnMudW5pdDtcbiAgICAgIHVuaXQgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIHJldHVybiBkaWZmUmVsYXRpdmUoYmFzZSwgdGhpcy5wbHVzKHBhZGRpbmcpLCB7XG4gICAgICAuLi5vcHRpb25zLFxuICAgICAgbnVtZXJpYzogXCJhbHdheXNcIixcbiAgICAgIHVuaXRzLFxuICAgICAgdW5pdCxcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoaXMgZGF0ZSByZWxhdGl2ZSB0byB0b2RheSwgc3VjaCBhcyBcInllc3RlcmRheVwiIG9yIFwibmV4dCBtb250aFwiLlxuICAgKiBPbmx5IGludGVybmF0aW9uYWxpemVzIG9uIHBsYXRmb3JtcyB0aGF0IHN1cHBvcnRzIEludGwuUmVsYXRpdmVUaW1lRm9ybWF0LlxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAtIG9wdGlvbnMgdGhhdCBhZmZlY3QgdGhlIG91dHB1dFxuICAgKiBAcGFyYW0ge0RhdGVUaW1lfSBbb3B0aW9ucy5iYXNlPURhdGVUaW1lLm5vdygpXSAtIHRoZSBEYXRlVGltZSB0byB1c2UgYXMgdGhlIGJhc2lzIHRvIHdoaWNoIHRoaXMgdGltZSBpcyBjb21wYXJlZC4gRGVmYXVsdHMgdG8gbm93LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5sb2NhbGUgLSBvdmVycmlkZSB0aGUgbG9jYWxlIG9mIHRoaXMgRGF0ZVRpbWVcbiAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMudW5pdCAtIHVzZSBhIHNwZWNpZmljIHVuaXQ7IGlmIG9taXR0ZWQsIHRoZSBtZXRob2Qgd2lsbCBwaWNrIHRoZSB1bml0LiBVc2Ugb25lIG9mIFwieWVhcnNcIiwgXCJxdWFydGVyc1wiLCBcIm1vbnRoc1wiLCBcIndlZWtzXCIsIG9yIFwiZGF5c1wiXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLm51bWJlcmluZ1N5c3RlbSAtIG92ZXJyaWRlIHRoZSBudW1iZXJpbmdTeXN0ZW0gb2YgdGhpcyBEYXRlVGltZS4gVGhlIEludGwgc3lzdGVtIG1heSBjaG9vc2Ugbm90IHRvIGhvbm9yIHRoaXNcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubm93KCkucGx1cyh7IGRheXM6IDEgfSkudG9SZWxhdGl2ZUNhbGVuZGFyKCkgLy89PiBcInRvbW9ycm93XCJcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubm93KCkuc2V0TG9jYWxlKFwiZXNcIikucGx1cyh7IGRheXM6IDEgfSkudG9SZWxhdGl2ZSgpIC8vPT4gXCJcIm1hw7FhbmFcIlxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5ub3coKS5wbHVzKHsgZGF5czogMSB9KS50b1JlbGF0aXZlQ2FsZW5kYXIoeyBsb2NhbGU6IFwiZnJcIiB9KSAvLz0+IFwiZGVtYWluXCJcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubm93KCkubWludXMoeyBkYXlzOiAyIH0pLnRvUmVsYXRpdmVDYWxlbmRhcigpIC8vPT4gXCIyIGRheXMgYWdvXCJcbiAgICovXG4gIHRvUmVsYXRpdmVDYWxlbmRhcihvcHRpb25zID0ge30pIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIG51bGw7XG5cbiAgICByZXR1cm4gZGlmZlJlbGF0aXZlKG9wdGlvbnMuYmFzZSB8fCBEYXRlVGltZS5mcm9tT2JqZWN0KHt9LCB7IHpvbmU6IHRoaXMuem9uZSB9KSwgdGhpcywge1xuICAgICAgLi4ub3B0aW9ucyxcbiAgICAgIG51bWVyaWM6IFwiYXV0b1wiLFxuICAgICAgdW5pdHM6IFtcInllYXJzXCIsIFwibW9udGhzXCIsIFwiZGF5c1wiXSxcbiAgICAgIGNhbGVuZGFyeTogdHJ1ZSxcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gdGhlIG1pbiBvZiBzZXZlcmFsIGRhdGUgdGltZXNcbiAgICogQHBhcmFtIHsuLi5EYXRlVGltZX0gZGF0ZVRpbWVzIC0gdGhlIERhdGVUaW1lcyBmcm9tIHdoaWNoIHRvIGNob29zZSB0aGUgbWluaW11bVxuICAgKiBAcmV0dXJuIHtEYXRlVGltZX0gdGhlIG1pbiBEYXRlVGltZSwgb3IgdW5kZWZpbmVkIGlmIGNhbGxlZCB3aXRoIG5vIGFyZ3VtZW50XG4gICAqL1xuICBzdGF0aWMgbWluKC4uLmRhdGVUaW1lcykge1xuICAgIGlmICghZGF0ZVRpbWVzLmV2ZXJ5KERhdGVUaW1lLmlzRGF0ZVRpbWUpKSB7XG4gICAgICB0aHJvdyBuZXcgSW52YWxpZEFyZ3VtZW50RXJyb3IoXCJtaW4gcmVxdWlyZXMgYWxsIGFyZ3VtZW50cyBiZSBEYXRlVGltZXNcIik7XG4gICAgfVxuICAgIHJldHVybiBiZXN0QnkoZGF0ZVRpbWVzLCAoaSkgPT4gaS52YWx1ZU9mKCksIE1hdGgubWluKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gdGhlIG1heCBvZiBzZXZlcmFsIGRhdGUgdGltZXNcbiAgICogQHBhcmFtIHsuLi5EYXRlVGltZX0gZGF0ZVRpbWVzIC0gdGhlIERhdGVUaW1lcyBmcm9tIHdoaWNoIHRvIGNob29zZSB0aGUgbWF4aW11bVxuICAgKiBAcmV0dXJuIHtEYXRlVGltZX0gdGhlIG1heCBEYXRlVGltZSwgb3IgdW5kZWZpbmVkIGlmIGNhbGxlZCB3aXRoIG5vIGFyZ3VtZW50XG4gICAqL1xuICBzdGF0aWMgbWF4KC4uLmRhdGVUaW1lcykge1xuICAgIGlmICghZGF0ZVRpbWVzLmV2ZXJ5KERhdGVUaW1lLmlzRGF0ZVRpbWUpKSB7XG4gICAgICB0aHJvdyBuZXcgSW52YWxpZEFyZ3VtZW50RXJyb3IoXCJtYXggcmVxdWlyZXMgYWxsIGFyZ3VtZW50cyBiZSBEYXRlVGltZXNcIik7XG4gICAgfVxuICAgIHJldHVybiBiZXN0QnkoZGF0ZVRpbWVzLCAoaSkgPT4gaS52YWx1ZU9mKCksIE1hdGgubWF4KTtcbiAgfVxuXG4gIC8vIE1JU0NcblxuICAvKipcbiAgICogRXhwbGFpbiBob3cgYSBzdHJpbmcgd291bGQgYmUgcGFyc2VkIGJ5IGZyb21Gb3JtYXQoKVxuICAgKiBAcGFyYW0ge3N0cmluZ30gdGV4dCAtIHRoZSBzdHJpbmcgdG8gcGFyc2VcbiAgICogQHBhcmFtIHtzdHJpbmd9IGZtdCAtIHRoZSBmb3JtYXQgdGhlIHN0cmluZyBpcyBleHBlY3RlZCB0byBiZSBpbiAoc2VlIGRlc2NyaXB0aW9uKVxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAtIG9wdGlvbnMgdGFrZW4gYnkgZnJvbUZvcm1hdCgpXG4gICAqIEByZXR1cm4ge09iamVjdH1cbiAgICovXG4gIHN0YXRpYyBmcm9tRm9ybWF0RXhwbGFpbih0ZXh0LCBmbXQsIG9wdGlvbnMgPSB7fSkge1xuICAgIGNvbnN0IHsgbG9jYWxlID0gbnVsbCwgbnVtYmVyaW5nU3lzdGVtID0gbnVsbCB9ID0gb3B0aW9ucyxcbiAgICAgIGxvY2FsZVRvVXNlID0gTG9jYWxlLmZyb21PcHRzKHtcbiAgICAgICAgbG9jYWxlLFxuICAgICAgICBudW1iZXJpbmdTeXN0ZW0sXG4gICAgICAgIGRlZmF1bHRUb0VOOiB0cnVlLFxuICAgICAgfSk7XG4gICAgcmV0dXJuIGV4cGxhaW5Gcm9tVG9rZW5zKGxvY2FsZVRvVXNlLCB0ZXh0LCBmbXQpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIHVzZSBmcm9tRm9ybWF0RXhwbGFpbiBpbnN0ZWFkXG4gICAqL1xuICBzdGF0aWMgZnJvbVN0cmluZ0V4cGxhaW4odGV4dCwgZm10LCBvcHRpb25zID0ge30pIHtcbiAgICByZXR1cm4gRGF0ZVRpbWUuZnJvbUZvcm1hdEV4cGxhaW4odGV4dCwgZm10LCBvcHRpb25zKTtcbiAgfVxuXG4gIC8vIEZPUk1BVCBQUkVTRVRTXG5cbiAgLyoqXG4gICAqIHtAbGluayBEYXRlVGltZSN0b0xvY2FsZVN0cmluZ30gZm9ybWF0IGxpa2UgMTAvMTQvMTk4M1xuICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgKi9cbiAgc3RhdGljIGdldCBEQVRFX1NIT1JUKCkge1xuICAgIHJldHVybiBEQVRFX1NIT1JUO1xuICB9XG5cbiAgLyoqXG4gICAqIHtAbGluayBEYXRlVGltZSN0b0xvY2FsZVN0cmluZ30gZm9ybWF0IGxpa2UgJ09jdCAxNCwgMTk4MydcbiAgICogQHR5cGUge09iamVjdH1cbiAgICovXG4gIHN0YXRpYyBnZXQgREFURV9NRUQoKSB7XG4gICAgcmV0dXJuIERBVEVfTUVEO1xuICB9XG5cbiAgLyoqXG4gICAqIHtAbGluayBEYXRlVGltZSN0b0xvY2FsZVN0cmluZ30gZm9ybWF0IGxpa2UgJ0ZyaSwgT2N0IDE0LCAxOTgzJ1xuICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgKi9cbiAgc3RhdGljIGdldCBEQVRFX01FRF9XSVRIX1dFRUtEQVkoKSB7XG4gICAgcmV0dXJuIERBVEVfTUVEX1dJVEhfV0VFS0RBWTtcbiAgfVxuXG4gIC8qKlxuICAgKiB7QGxpbmsgRGF0ZVRpbWUjdG9Mb2NhbGVTdHJpbmd9IGZvcm1hdCBsaWtlICdPY3RvYmVyIDE0LCAxOTgzJ1xuICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgKi9cbiAgc3RhdGljIGdldCBEQVRFX0ZVTEwoKSB7XG4gICAgcmV0dXJuIERBVEVfRlVMTDtcbiAgfVxuXG4gIC8qKlxuICAgKiB7QGxpbmsgRGF0ZVRpbWUjdG9Mb2NhbGVTdHJpbmd9IGZvcm1hdCBsaWtlICdUdWVzZGF5LCBPY3RvYmVyIDE0LCAxOTgzJ1xuICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgKi9cbiAgc3RhdGljIGdldCBEQVRFX0hVR0UoKSB7XG4gICAgcmV0dXJuIERBVEVfSFVHRTtcbiAgfVxuXG4gIC8qKlxuICAgKiB7QGxpbmsgRGF0ZVRpbWUjdG9Mb2NhbGVTdHJpbmd9IGZvcm1hdCBsaWtlICcwOTozMCBBTScuIE9ubHkgMTItaG91ciBpZiB0aGUgbG9jYWxlIGlzLlxuICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgKi9cbiAgc3RhdGljIGdldCBUSU1FX1NJTVBMRSgpIHtcbiAgICByZXR1cm4gVElNRV9TSU1QTEU7XG4gIH1cblxuICAvKipcbiAgICoge0BsaW5rIERhdGVUaW1lI3RvTG9jYWxlU3RyaW5nfSBmb3JtYXQgbGlrZSAnMDk6MzA6MjMgQU0nLiBPbmx5IDEyLWhvdXIgaWYgdGhlIGxvY2FsZSBpcy5cbiAgICogQHR5cGUge09iamVjdH1cbiAgICovXG4gIHN0YXRpYyBnZXQgVElNRV9XSVRIX1NFQ09ORFMoKSB7XG4gICAgcmV0dXJuIFRJTUVfV0lUSF9TRUNPTkRTO1xuICB9XG5cbiAgLyoqXG4gICAqIHtAbGluayBEYXRlVGltZSN0b0xvY2FsZVN0cmluZ30gZm9ybWF0IGxpa2UgJzA5OjMwOjIzIEFNIEVEVCcuIE9ubHkgMTItaG91ciBpZiB0aGUgbG9jYWxlIGlzLlxuICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgKi9cbiAgc3RhdGljIGdldCBUSU1FX1dJVEhfU0hPUlRfT0ZGU0VUKCkge1xuICAgIHJldHVybiBUSU1FX1dJVEhfU0hPUlRfT0ZGU0VUO1xuICB9XG5cbiAgLyoqXG4gICAqIHtAbGluayBEYXRlVGltZSN0b0xvY2FsZVN0cmluZ30gZm9ybWF0IGxpa2UgJzA5OjMwOjIzIEFNIEVhc3Rlcm4gRGF5bGlnaHQgVGltZScuIE9ubHkgMTItaG91ciBpZiB0aGUgbG9jYWxlIGlzLlxuICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgKi9cbiAgc3RhdGljIGdldCBUSU1FX1dJVEhfTE9OR19PRkZTRVQoKSB7XG4gICAgcmV0dXJuIFRJTUVfV0lUSF9MT05HX09GRlNFVDtcbiAgfVxuXG4gIC8qKlxuICAgKiB7QGxpbmsgRGF0ZVRpbWUjdG9Mb2NhbGVTdHJpbmd9IGZvcm1hdCBsaWtlICcwOTozMCcsIGFsd2F5cyAyNC1ob3VyLlxuICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgKi9cbiAgc3RhdGljIGdldCBUSU1FXzI0X1NJTVBMRSgpIHtcbiAgICByZXR1cm4gVElNRV8yNF9TSU1QTEU7XG4gIH1cblxuICAvKipcbiAgICoge0BsaW5rIERhdGVUaW1lI3RvTG9jYWxlU3RyaW5nfSBmb3JtYXQgbGlrZSAnMDk6MzA6MjMnLCBhbHdheXMgMjQtaG91ci5cbiAgICogQHR5cGUge09iamVjdH1cbiAgICovXG4gIHN0YXRpYyBnZXQgVElNRV8yNF9XSVRIX1NFQ09ORFMoKSB7XG4gICAgcmV0dXJuIFRJTUVfMjRfV0lUSF9TRUNPTkRTO1xuICB9XG5cbiAgLyoqXG4gICAqIHtAbGluayBEYXRlVGltZSN0b0xvY2FsZVN0cmluZ30gZm9ybWF0IGxpa2UgJzA5OjMwOjIzIEVEVCcsIGFsd2F5cyAyNC1ob3VyLlxuICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgKi9cbiAgc3RhdGljIGdldCBUSU1FXzI0X1dJVEhfU0hPUlRfT0ZGU0VUKCkge1xuICAgIHJldHVybiBUSU1FXzI0X1dJVEhfU0hPUlRfT0ZGU0VUO1xuICB9XG5cbiAgLyoqXG4gICAqIHtAbGluayBEYXRlVGltZSN0b0xvY2FsZVN0cmluZ30gZm9ybWF0IGxpa2UgJzA5OjMwOjIzIEVhc3Rlcm4gRGF5bGlnaHQgVGltZScsIGFsd2F5cyAyNC1ob3VyLlxuICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgKi9cbiAgc3RhdGljIGdldCBUSU1FXzI0X1dJVEhfTE9OR19PRkZTRVQoKSB7XG4gICAgcmV0dXJuIFRJTUVfMjRfV0lUSF9MT05HX09GRlNFVDtcbiAgfVxuXG4gIC8qKlxuICAgKiB7QGxpbmsgRGF0ZVRpbWUjdG9Mb2NhbGVTdHJpbmd9IGZvcm1hdCBsaWtlICcxMC8xNC8xOTgzLCA5OjMwIEFNJy4gT25seSAxMi1ob3VyIGlmIHRoZSBsb2NhbGUgaXMuXG4gICAqIEB0eXBlIHtPYmplY3R9XG4gICAqL1xuICBzdGF0aWMgZ2V0IERBVEVUSU1FX1NIT1JUKCkge1xuICAgIHJldHVybiBEQVRFVElNRV9TSE9SVDtcbiAgfVxuXG4gIC8qKlxuICAgKiB7QGxpbmsgRGF0ZVRpbWUjdG9Mb2NhbGVTdHJpbmd9IGZvcm1hdCBsaWtlICcxMC8xNC8xOTgzLCA5OjMwOjMzIEFNJy4gT25seSAxMi1ob3VyIGlmIHRoZSBsb2NhbGUgaXMuXG4gICAqIEB0eXBlIHtPYmplY3R9XG4gICAqL1xuICBzdGF0aWMgZ2V0IERBVEVUSU1FX1NIT1JUX1dJVEhfU0VDT05EUygpIHtcbiAgICByZXR1cm4gREFURVRJTUVfU0hPUlRfV0lUSF9TRUNPTkRTO1xuICB9XG5cbiAgLyoqXG4gICAqIHtAbGluayBEYXRlVGltZSN0b0xvY2FsZVN0cmluZ30gZm9ybWF0IGxpa2UgJ09jdCAxNCwgMTk4MywgOTozMCBBTScuIE9ubHkgMTItaG91ciBpZiB0aGUgbG9jYWxlIGlzLlxuICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgKi9cbiAgc3RhdGljIGdldCBEQVRFVElNRV9NRUQoKSB7XG4gICAgcmV0dXJuIERBVEVUSU1FX01FRDtcbiAgfVxuXG4gIC8qKlxuICAgKiB7QGxpbmsgRGF0ZVRpbWUjdG9Mb2NhbGVTdHJpbmd9IGZvcm1hdCBsaWtlICdPY3QgMTQsIDE5ODMsIDk6MzA6MzMgQU0nLiBPbmx5IDEyLWhvdXIgaWYgdGhlIGxvY2FsZSBpcy5cbiAgICogQHR5cGUge09iamVjdH1cbiAgICovXG4gIHN0YXRpYyBnZXQgREFURVRJTUVfTUVEX1dJVEhfU0VDT05EUygpIHtcbiAgICByZXR1cm4gREFURVRJTUVfTUVEX1dJVEhfU0VDT05EUztcbiAgfVxuXG4gIC8qKlxuICAgKiB7QGxpbmsgRGF0ZVRpbWUjdG9Mb2NhbGVTdHJpbmd9IGZvcm1hdCBsaWtlICdGcmksIDE0IE9jdCAxOTgzLCA5OjMwIEFNJy4gT25seSAxMi1ob3VyIGlmIHRoZSBsb2NhbGUgaXMuXG4gICAqIEB0eXBlIHtPYmplY3R9XG4gICAqL1xuICBzdGF0aWMgZ2V0IERBVEVUSU1FX01FRF9XSVRIX1dFRUtEQVkoKSB7XG4gICAgcmV0dXJuIERBVEVUSU1FX01FRF9XSVRIX1dFRUtEQVk7XG4gIH1cblxuICAvKipcbiAgICoge0BsaW5rIERhdGVUaW1lI3RvTG9jYWxlU3RyaW5nfSBmb3JtYXQgbGlrZSAnT2N0b2JlciAxNCwgMTk4MywgOTozMCBBTSBFRFQnLiBPbmx5IDEyLWhvdXIgaWYgdGhlIGxvY2FsZSBpcy5cbiAgICogQHR5cGUge09iamVjdH1cbiAgICovXG4gIHN0YXRpYyBnZXQgREFURVRJTUVfRlVMTCgpIHtcbiAgICByZXR1cm4gREFURVRJTUVfRlVMTDtcbiAgfVxuXG4gIC8qKlxuICAgKiB7QGxpbmsgRGF0ZVRpbWUjdG9Mb2NhbGVTdHJpbmd9IGZvcm1hdCBsaWtlICdPY3RvYmVyIDE0LCAxOTgzLCA5OjMwOjMzIEFNIEVEVCcuIE9ubHkgMTItaG91ciBpZiB0aGUgbG9jYWxlIGlzLlxuICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgKi9cbiAgc3RhdGljIGdldCBEQVRFVElNRV9GVUxMX1dJVEhfU0VDT05EUygpIHtcbiAgICByZXR1cm4gREFURVRJTUVfRlVMTF9XSVRIX1NFQ09ORFM7XG4gIH1cblxuICAvKipcbiAgICoge0BsaW5rIERhdGVUaW1lI3RvTG9jYWxlU3RyaW5nfSBmb3JtYXQgbGlrZSAnRnJpZGF5LCBPY3RvYmVyIDE0LCAxOTgzLCA5OjMwIEFNIEVhc3Rlcm4gRGF5bGlnaHQgVGltZScuIE9ubHkgMTItaG91ciBpZiB0aGUgbG9jYWxlIGlzLlxuICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgKi9cbiAgc3RhdGljIGdldCBEQVRFVElNRV9IVUdFKCkge1xuICAgIHJldHVybiBEQVRFVElNRV9IVUdFO1xuICB9XG5cbiAgLyoqXG4gICAqIHtAbGluayBEYXRlVGltZSN0b0xvY2FsZVN0cmluZ30gZm9ybWF0IGxpa2UgJ0ZyaWRheSwgT2N0b2JlciAxNCwgMTk4MywgOTozMDozMyBBTSBFYXN0ZXJuIERheWxpZ2h0IFRpbWUnLiBPbmx5IDEyLWhvdXIgaWYgdGhlIGxvY2FsZSBpcy5cbiAgICogQHR5cGUge09iamVjdH1cbiAgICovXG4gIHN0YXRpYyBnZXQgREFURVRJTUVfSFVHRV9XSVRIX1NFQ09ORFMoKSB7XG4gICAgcmV0dXJuIERBVEVUSU1FX0hVR0VfV0lUSF9TRUNPTkRTO1xuICB9XG59XG5cbi8qKlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gZnJpZW5kbHlEYXRlVGltZShkYXRlVGltZWlzaCkge1xuICBpZiAoRGF0ZVRpbWUuaXNEYXRlVGltZShkYXRlVGltZWlzaCkpIHtcbiAgICByZXR1cm4gZGF0ZVRpbWVpc2g7XG4gIH0gZWxzZSBpZiAoZGF0ZVRpbWVpc2ggJiYgZGF0ZVRpbWVpc2gudmFsdWVPZiAmJiBpc051bWJlcihkYXRlVGltZWlzaC52YWx1ZU9mKCkpKSB7XG4gICAgcmV0dXJuIERhdGVUaW1lLmZyb21KU0RhdGUoZGF0ZVRpbWVpc2gpO1xuICB9IGVsc2UgaWYgKGRhdGVUaW1laXNoICYmIHR5cGVvZiBkYXRlVGltZWlzaCA9PT0gXCJvYmplY3RcIikge1xuICAgIHJldHVybiBEYXRlVGltZS5mcm9tT2JqZWN0KGRhdGVUaW1laXNoKTtcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgSW52YWxpZEFyZ3VtZW50RXJyb3IoXG4gICAgICBgVW5rbm93biBkYXRldGltZSBhcmd1bWVudDogJHtkYXRlVGltZWlzaH0sIG9mIHR5cGUgJHt0eXBlb2YgZGF0ZVRpbWVpc2h9YFxuICAgICk7XG4gIH1cbn1cblxuLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8gUXVlcnkgU2V0dGluZ3MgLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuY29uc3QgREVGQVVMVF9RVUVSWV9TRVRUSU5HUyA9IHtcclxuICAgIHJlbmRlck51bGxBczogXCJcXFxcLVwiLFxyXG4gICAgdGFza0NvbXBsZXRpb25UcmFja2luZzogZmFsc2UsXHJcbiAgICB0YXNrQ29tcGxldGlvblVzZUVtb2ppU2hvcnRoYW5kOiBmYWxzZSxcclxuICAgIHRhc2tDb21wbGV0aW9uVGV4dDogXCJjb21wbGV0aW9uXCIsXHJcbiAgICB0YXNrQ29tcGxldGlvbkRhdGVGb3JtYXQ6IFwieXl5eS1NTS1kZFwiLFxyXG4gICAgcmVjdXJzaXZlU3ViVGFza0NvbXBsZXRpb246IGZhbHNlLFxyXG4gICAgd2Fybk9uRW1wdHlSZXN1bHQ6IHRydWUsXHJcbiAgICByZWZyZXNoRW5hYmxlZDogdHJ1ZSxcclxuICAgIHJlZnJlc2hJbnRlcnZhbDogMjUwMCxcclxuICAgIGRlZmF1bHREYXRlRm9ybWF0OiBcIk1NTU0gZGQsIHl5eXlcIixcclxuICAgIGRlZmF1bHREYXRlVGltZUZvcm1hdDogXCJoOm1tIGEgLSBNTU1NIGRkLCB5eXl5XCIsXHJcbiAgICBtYXhSZWN1cnNpdmVSZW5kZXJEZXB0aDogNCxcclxuICAgIHRhYmxlSWRDb2x1bW5OYW1lOiBcIkZpbGVcIixcclxuICAgIHRhYmxlR3JvdXBDb2x1bW5OYW1lOiBcIkdyb3VwXCIsXHJcbiAgICBzaG93UmVzdWx0Q291bnQ6IHRydWUsXHJcbn07XHJcbmNvbnN0IERFRkFVTFRfRVhQT1JUX1NFVFRJTkdTID0ge1xyXG4gICAgYWxsb3dIdG1sOiB0cnVlLFxyXG59O1xyXG4vKiogRGVmYXVsdCBzZXR0aW5ncyBmb3IgZGF0YXZpZXcgb24gaW5zdGFsbC4gKi9cclxuKHtcclxuICAgIC4uLkRFRkFVTFRfUVVFUllfU0VUVElOR1MsXHJcbiAgICAuLi5ERUZBVUxUX0VYUE9SVF9TRVRUSU5HUyxcclxuICAgIC4uLntcclxuICAgICAgICBpbmxpbmVRdWVyeVByZWZpeDogXCI9XCIsXHJcbiAgICAgICAgaW5saW5lSnNRdWVyeVByZWZpeDogXCIkPVwiLFxyXG4gICAgICAgIGlubGluZVF1ZXJpZXNJbkNvZGVibG9ja3M6IHRydWUsXHJcbiAgICAgICAgZW5hYmxlSW5saW5lRGF0YXZpZXc6IHRydWUsXHJcbiAgICAgICAgZW5hYmxlRGF0YXZpZXdKczogZmFsc2UsXHJcbiAgICAgICAgZW5hYmxlSW5saW5lRGF0YXZpZXdKczogZmFsc2UsXHJcbiAgICAgICAgcHJldHR5UmVuZGVySW5saW5lRmllbGRzOiB0cnVlLFxyXG4gICAgICAgIGRhdGF2aWV3SnNLZXl3b3JkOiBcImRhdGF2aWV3anNcIixcclxuICAgIH0sXHJcbn0pO1xuXG4vKiogRnVuY3Rpb25hbCByZXR1cm4gdHlwZSBmb3IgZXJyb3IgaGFuZGxpbmcuICovXHJcbmNsYXNzIFN1Y2Nlc3Mge1xyXG4gICAgY29uc3RydWN0b3IodmFsdWUpIHtcclxuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy5zdWNjZXNzZnVsID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIG1hcChmKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBTdWNjZXNzKGYodGhpcy52YWx1ZSkpO1xyXG4gICAgfVxyXG4gICAgZmxhdE1hcChmKSB7XHJcbiAgICAgICAgcmV0dXJuIGYodGhpcy52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBtYXBFcnIoZikge1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgYmltYXAoc3VjYywgX2ZhaWwpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tYXAoc3VjYyk7XHJcbiAgICB9XHJcbiAgICBvckVsc2UoX3ZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWU7XHJcbiAgICB9XHJcbiAgICBjYXN0KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgb3JFbHNlVGhyb3coX21lc3NhZ2UpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZTtcclxuICAgIH1cclxufVxyXG4vKiogRnVuY3Rpb25hbCByZXR1cm4gdHlwZSBmb3IgZXJyb3IgaGFuZGxpbmcuICovXHJcbmNsYXNzIEZhaWx1cmUge1xyXG4gICAgY29uc3RydWN0b3IoZXJyb3IpIHtcclxuICAgICAgICB0aGlzLmVycm9yID0gZXJyb3I7XHJcbiAgICAgICAgdGhpcy5zdWNjZXNzZnVsID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBtYXAoX2YpIHtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIGZsYXRNYXAoX2YpIHtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIG1hcEVycihmKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBGYWlsdXJlKGYodGhpcy5lcnJvcikpO1xyXG4gICAgfVxyXG4gICAgYmltYXAoX3N1Y2MsIGZhaWwpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tYXBFcnIoZmFpbCk7XHJcbiAgICB9XHJcbiAgICBvckVsc2UodmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICB9XHJcbiAgICBjYXN0KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgb3JFbHNlVGhyb3cobWVzc2FnZSkge1xyXG4gICAgICAgIGlmIChtZXNzYWdlKVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSh0aGlzLmVycm9yKSk7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJcIiArIHRoaXMuZXJyb3IpO1xyXG4gICAgfVxyXG59XHJcbi8qKiBNb25hZGljICdSZXN1bHQnIHR5cGUgd2hpY2ggZW5jYXBzdWxhdGVzIHdoZXRoZXIgYSBwcm9jZWR1cmUgc3VjY2VlZGVkIG9yIGZhaWxlZCwgYXMgd2VsbCBhcyBpdCdzIHJldHVybiB2YWx1ZS4gKi9cclxudmFyIFJlc3VsdDtcclxuKGZ1bmN0aW9uIChSZXN1bHQpIHtcclxuICAgIC8qKiBDb25zdHJ1Y3QgYSBuZXcgc3VjY2VzcyByZXN1bHQgd3JhcHBpbmcgdGhlIGdpdmVuIHZhbHVlLiAqL1xyXG4gICAgZnVuY3Rpb24gc3VjY2Vzcyh2YWx1ZSkge1xyXG4gICAgICAgIHJldHVybiBuZXcgU3VjY2Vzcyh2YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBSZXN1bHQuc3VjY2VzcyA9IHN1Y2Nlc3M7XHJcbiAgICAvKiogQ29uc3RydWN0IGEgbmV3IGZhaWx1cmUgdmFsdWUgd3JhcHBpbmcgdGhlIGdpdmVuIGVycm9yLiAqL1xyXG4gICAgZnVuY3Rpb24gZmFpbHVyZShlcnJvcikge1xyXG4gICAgICAgIHJldHVybiBuZXcgRmFpbHVyZShlcnJvcik7XHJcbiAgICB9XHJcbiAgICBSZXN1bHQuZmFpbHVyZSA9IGZhaWx1cmU7XHJcbiAgICAvKiogSm9pbiB0d28gcmVzdWx0cyB3aXRoIGEgYmktZnVuY3Rpb24gYW5kIHJldHVybiBhIG5ldyByZXN1bHQuICovXHJcbiAgICBmdW5jdGlvbiBmbGF0TWFwMihmaXJzdCwgc2Vjb25kLCBmKSB7XHJcbiAgICAgICAgaWYgKGZpcnN0LnN1Y2Nlc3NmdWwpIHtcclxuICAgICAgICAgICAgaWYgKHNlY29uZC5zdWNjZXNzZnVsKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGYoZmlyc3QudmFsdWUsIHNlY29uZC52YWx1ZSk7XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWlsdXJlKHNlY29uZC5lcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFpbHVyZShmaXJzdC5lcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgUmVzdWx0LmZsYXRNYXAyID0gZmxhdE1hcDI7XHJcbiAgICAvKiogSm9pbiB0d28gcmVzdWx0cyB3aXRoIGEgYmktZnVuY3Rpb24gYW5kIHJldHVybiBhIG5ldyByZXN1bHQuICovXHJcbiAgICBmdW5jdGlvbiBtYXAyKGZpcnN0LCBzZWNvbmQsIGYpIHtcclxuICAgICAgICByZXR1cm4gZmxhdE1hcDIoZmlyc3QsIHNlY29uZCwgKGEsIGIpID0+IHN1Y2Nlc3MoZihhLCBiKSkpO1xyXG4gICAgfVxyXG4gICAgUmVzdWx0Lm1hcDIgPSBtYXAyO1xyXG59KShSZXN1bHQgfHwgKFJlc3VsdCA9IHt9KSk7XG5cbnZhciBjb21tb25qc0dsb2JhbCA9IHR5cGVvZiBnbG9iYWxUaGlzICE9PSAndW5kZWZpbmVkJyA/IGdsb2JhbFRoaXMgOiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdyA6IHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnID8gZ2xvYmFsIDogdHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHt9O1xuXG52YXIgcGFyc2ltbW9uX3VtZF9taW4gPSB7ZXhwb3J0czoge319O1xuXG4oZnVuY3Rpb24gKG1vZHVsZSwgZXhwb3J0cykge1xuIWZ1bmN0aW9uKG4sdCl7bW9kdWxlLmV4cG9ydHM9dCgpO30oXCJ1bmRlZmluZWRcIiE9dHlwZW9mIHNlbGY/c2VsZjpjb21tb25qc0dsb2JhbCxmdW5jdGlvbigpe3JldHVybiBmdW5jdGlvbihuKXt2YXIgdD17fTtmdW5jdGlvbiByKGUpe2lmKHRbZV0pcmV0dXJuIHRbZV0uZXhwb3J0czt2YXIgdT10W2VdPXtpOmUsbDohMSxleHBvcnRzOnt9fTtyZXR1cm4gbltlXS5jYWxsKHUuZXhwb3J0cyx1LHUuZXhwb3J0cyxyKSx1Lmw9ITAsdS5leHBvcnRzfXJldHVybiByLm09bixyLmM9dCxyLmQ9ZnVuY3Rpb24obix0LGUpe3IubyhuLHQpfHxPYmplY3QuZGVmaW5lUHJvcGVydHkobix0LHtjb25maWd1cmFibGU6ITEsZW51bWVyYWJsZTohMCxnZXQ6ZX0pO30sci5yPWZ1bmN0aW9uKG4pe09iamVjdC5kZWZpbmVQcm9wZXJ0eShuLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO30sci5uPWZ1bmN0aW9uKG4pe3ZhciB0PW4mJm4uX19lc01vZHVsZT9mdW5jdGlvbigpe3JldHVybiBuLmRlZmF1bHR9OmZ1bmN0aW9uKCl7cmV0dXJuIG59O3JldHVybiByLmQodCxcImFcIix0KSx0fSxyLm89ZnVuY3Rpb24obix0KXtyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG4sdCl9LHIucD1cIlwiLHIoci5zPTApfShbZnVuY3Rpb24obix0LHIpe2Z1bmN0aW9uIGUobil7aWYoISh0aGlzIGluc3RhbmNlb2YgZSkpcmV0dXJuIG5ldyBlKG4pO3RoaXMuXz1uO312YXIgdT1lLnByb3RvdHlwZTtmdW5jdGlvbiBvKG4sdCl7Zm9yKHZhciByPTA7cjxuO3IrKyl0KHIpO31mdW5jdGlvbiBpKG4sdCxyKXtyZXR1cm4gZnVuY3Rpb24obix0KXtvKHQubGVuZ3RoLGZ1bmN0aW9uKHIpe24odFtyXSxyLHQpO30pO30oZnVuY3Rpb24ocixlLHUpe3Q9bih0LHIsZSx1KTt9LHIpLHR9ZnVuY3Rpb24gYShuLHQpe3JldHVybiBpKGZ1bmN0aW9uKHQscixlLHUpe3JldHVybiB0LmNvbmNhdChbbihyLGUsdSldKX0sW10sdCl9ZnVuY3Rpb24gZihuLHQpe3ZhciByPXt2OjAsYnVmOnR9O3JldHVybiBvKG4sZnVuY3Rpb24oKXt2YXIgbjtyPXt2OnIudjw8MXwobj1yLmJ1ZixuWzBdPj43KSxidWY6ZnVuY3Rpb24obil7dmFyIHQ9aShmdW5jdGlvbihuLHQscixlKXtyZXR1cm4gbi5jb25jYXQocj09PWUubGVuZ3RoLTE/QnVmZmVyLmZyb20oW3QsMF0pLnJlYWRVSW50MTZCRSgwKTplLnJlYWRVSW50MTZCRShyKSl9LFtdLG4pO3JldHVybiBCdWZmZXIuZnJvbShhKGZ1bmN0aW9uKG4pe3JldHVybiAobjw8MSY2NTUzNSk+Pjh9LHQpKX0oci5idWYpfTt9KSxyfWZ1bmN0aW9uIGMoKXtyZXR1cm4gXCJ1bmRlZmluZWRcIiE9dHlwZW9mIEJ1ZmZlcn1mdW5jdGlvbiBzKCl7aWYoIWMoKSl0aHJvdyBuZXcgRXJyb3IoXCJCdWZmZXIgZ2xvYmFsIGRvZXMgbm90IGV4aXN0OyBwbGVhc2UgdXNlIHdlYnBhY2sgaWYgeW91IG5lZWQgdG8gcGFyc2UgQnVmZmVycyBpbiB0aGUgYnJvd3Nlci5cIil9ZnVuY3Rpb24gbChuKXtzKCk7dmFyIHQ9aShmdW5jdGlvbihuLHQpe3JldHVybiBuK3R9LDAsbik7aWYodCU4IT0wKXRocm93IG5ldyBFcnJvcihcIlRoZSBiaXRzIFtcIituLmpvaW4oXCIsIFwiKStcIl0gYWRkIHVwIHRvIFwiK3QrXCIgd2hpY2ggaXMgbm90IGFuIGV2ZW4gbnVtYmVyIG9mIGJ5dGVzOyB0aGUgdG90YWwgc2hvdWxkIGJlIGRpdmlzaWJsZSBieSA4XCIpO3ZhciByLHU9dC84LG89KHI9ZnVuY3Rpb24obil7cmV0dXJuIG4+NDh9LGkoZnVuY3Rpb24obix0KXtyZXR1cm4gbnx8KHIodCk/dDpuKX0sbnVsbCxuKSk7aWYobyl0aHJvdyBuZXcgRXJyb3IobytcIiBiaXQgcmFuZ2UgcmVxdWVzdGVkIGV4Y2VlZHMgNDggYml0ICg2IGJ5dGUpIE51bWJlciBtYXguXCIpO3JldHVybiBuZXcgZShmdW5jdGlvbih0LHIpe3ZhciBlPXUrcjtyZXR1cm4gZT50Lmxlbmd0aD94KHIsdS50b1N0cmluZygpK1wiIGJ5dGVzXCIpOmIoZSxpKGZ1bmN0aW9uKG4sdCl7dmFyIHI9Zih0LG4uYnVmKTtyZXR1cm4ge2NvbGw6bi5jb2xsLmNvbmNhdChyLnYpLGJ1ZjpyLmJ1Zn19LHtjb2xsOltdLGJ1Zjp0LnNsaWNlKHIsZSl9LG4pLmNvbGwpfSl9ZnVuY3Rpb24gaChuLHQpe3JldHVybiBuZXcgZShmdW5jdGlvbihyLGUpe3JldHVybiBzKCksZSt0PnIubGVuZ3RoP3goZSx0K1wiIGJ5dGVzIGZvciBcIituKTpiKGUrdCxyLnNsaWNlKGUsZSt0KSl9KX1mdW5jdGlvbiBwKG4sdCl7aWYoXCJudW1iZXJcIiE9dHlwZW9mKHI9dCl8fE1hdGguZmxvb3IocikhPT1yfHx0PDB8fHQ+Nil0aHJvdyBuZXcgRXJyb3IobitcIiByZXF1aXJlcyBpbnRlZ2VyIGxlbmd0aCBpbiByYW5nZSBbMCwgNl0uXCIpO3ZhciByO31mdW5jdGlvbiBkKG4pe3JldHVybiBwKFwidWludEJFXCIsbiksaChcInVpbnRCRShcIituK1wiKVwiLG4pLm1hcChmdW5jdGlvbih0KXtyZXR1cm4gdC5yZWFkVUludEJFKDAsbil9KX1mdW5jdGlvbiB2KG4pe3JldHVybiBwKFwidWludExFXCIsbiksaChcInVpbnRMRShcIituK1wiKVwiLG4pLm1hcChmdW5jdGlvbih0KXtyZXR1cm4gdC5yZWFkVUludExFKDAsbil9KX1mdW5jdGlvbiBnKG4pe3JldHVybiBwKFwiaW50QkVcIixuKSxoKFwiaW50QkUoXCIrbitcIilcIixuKS5tYXAoZnVuY3Rpb24odCl7cmV0dXJuIHQucmVhZEludEJFKDAsbil9KX1mdW5jdGlvbiBtKG4pe3JldHVybiBwKFwiaW50TEVcIixuKSxoKFwiaW50TEUoXCIrbitcIilcIixuKS5tYXAoZnVuY3Rpb24odCl7cmV0dXJuIHQucmVhZEludExFKDAsbil9KX1mdW5jdGlvbiB5KG4pe3JldHVybiBuIGluc3RhbmNlb2YgZX1mdW5jdGlvbiBFKG4pe3JldHVybiBcIltvYmplY3QgQXJyYXldXCI9PT17fS50b1N0cmluZy5jYWxsKG4pfWZ1bmN0aW9uIHcobil7cmV0dXJuIGMoKSYmQnVmZmVyLmlzQnVmZmVyKG4pfWZ1bmN0aW9uIGIobix0KXtyZXR1cm4ge3N0YXR1czohMCxpbmRleDpuLHZhbHVlOnQsZnVydGhlc3Q6LTEsZXhwZWN0ZWQ6W119fWZ1bmN0aW9uIHgobix0KXtyZXR1cm4gRSh0KXx8KHQ9W3RdKSx7c3RhdHVzOiExLGluZGV4Oi0xLHZhbHVlOm51bGwsZnVydGhlc3Q6bixleHBlY3RlZDp0fX1mdW5jdGlvbiBCKG4sdCl7aWYoIXQpcmV0dXJuIG47aWYobi5mdXJ0aGVzdD50LmZ1cnRoZXN0KXJldHVybiBuO3ZhciByPW4uZnVydGhlc3Q9PT10LmZ1cnRoZXN0P2Z1bmN0aW9uKG4sdCl7aWYoZnVuY3Rpb24oKXtpZih2b2lkIDAhPT1lLl9zdXBwb3J0c1NldClyZXR1cm4gZS5fc3VwcG9ydHNTZXQ7dmFyIG49XCJ1bmRlZmluZWRcIiE9dHlwZW9mIFNldDtyZXR1cm4gZS5fc3VwcG9ydHNTZXQ9bixufSgpJiZBcnJheS5mcm9tKXtmb3IodmFyIHI9bmV3IFNldChuKSx1PTA7dTx0Lmxlbmd0aDt1Kyspci5hZGQodFt1XSk7dmFyIG89QXJyYXkuZnJvbShyKTtyZXR1cm4gby5zb3J0KCksb31mb3IodmFyIGk9e30sYT0wO2E8bi5sZW5ndGg7YSsrKWlbblthXV09ITA7Zm9yKHZhciBmPTA7Zjx0Lmxlbmd0aDtmKyspaVt0W2ZdXT0hMDt2YXIgYz1bXTtmb3IodmFyIHMgaW4gaSkoe30pLmhhc093blByb3BlcnR5LmNhbGwoaSxzKSYmYy5wdXNoKHMpO3JldHVybiBjLnNvcnQoKSxjfShuLmV4cGVjdGVkLHQuZXhwZWN0ZWQpOnQuZXhwZWN0ZWQ7cmV0dXJuIHtzdGF0dXM6bi5zdGF0dXMsaW5kZXg6bi5pbmRleCx2YWx1ZTpuLnZhbHVlLGZ1cnRoZXN0OnQuZnVydGhlc3QsZXhwZWN0ZWQ6cn19dmFyIGo9e307ZnVuY3Rpb24gUyhuLHQpe2lmKHcobikpcmV0dXJuIHtvZmZzZXQ6dCxsaW5lOi0xLGNvbHVtbjotMX07biBpbiBqfHwoaltuXT17fSk7Zm9yKHZhciByPWpbbl0sZT0wLHU9MCxvPTAsaT10O2k+PTA7KXtpZihpIGluIHIpe2U9cltpXS5saW5lLDA9PT1vJiYobz1yW2ldLmxpbmVTdGFydCk7YnJlYWt9KFwiXFxuXCI9PT1uLmNoYXJBdChpKXx8XCJcXHJcIj09PW4uY2hhckF0KGkpJiZcIlxcblwiIT09bi5jaGFyQXQoaSsxKSkmJih1KyssMD09PW8mJihvPWkrMSkpLGktLTt9dmFyIGE9ZSt1LGY9dC1vO3JldHVybiByW3RdPXtsaW5lOmEsbGluZVN0YXJ0Om99LHtvZmZzZXQ6dCxsaW5lOmErMSxjb2x1bW46ZisxfX1mdW5jdGlvbiBfKG4pe2lmKCF5KG4pKXRocm93IG5ldyBFcnJvcihcIm5vdCBhIHBhcnNlcjogXCIrbil9ZnVuY3Rpb24gTChuLHQpe3JldHVybiBcInN0cmluZ1wiPT10eXBlb2Ygbj9uLmNoYXJBdCh0KTpuW3RdfWZ1bmN0aW9uIE8obil7aWYoXCJudW1iZXJcIiE9dHlwZW9mIG4pdGhyb3cgbmV3IEVycm9yKFwibm90IGEgbnVtYmVyOiBcIituKX1mdW5jdGlvbiBrKG4pe2lmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIG4pdGhyb3cgbmV3IEVycm9yKFwibm90IGEgZnVuY3Rpb246IFwiK24pfWZ1bmN0aW9uIFAobil7aWYoXCJzdHJpbmdcIiE9dHlwZW9mIG4pdGhyb3cgbmV3IEVycm9yKFwibm90IGEgc3RyaW5nOiBcIituKX12YXIgcT0yLEE9MyxJPTgsRj01KkksTT00Kkksej1cIiAgXCI7ZnVuY3Rpb24gUihuLHQpe3JldHVybiBuZXcgQXJyYXkodCsxKS5qb2luKG4pfWZ1bmN0aW9uIFUobix0LHIpe3ZhciBlPXQtbi5sZW5ndGg7cmV0dXJuIGU8PTA/bjpSKHIsZSkrbn1mdW5jdGlvbiBXKG4sdCxyLGUpe3JldHVybiB7ZnJvbTpuLXQ+MD9uLXQ6MCx0bzpuK3I+ZT9lOm4rcn19ZnVuY3Rpb24gRChuLHQpe3ZhciByLGUsdSxvLGYsYz10LmluZGV4LHM9Yy5vZmZzZXQsbD0xO2lmKHM9PT1uLmxlbmd0aClyZXR1cm4gXCJHb3QgdGhlIGVuZCBvZiB0aGUgaW5wdXRcIjtpZih3KG4pKXt2YXIgaD1zLXMlSSxwPXMtaCxkPVcoaCxGLE0rSSxuLmxlbmd0aCksdj1hKGZ1bmN0aW9uKG4pe3JldHVybiBhKGZ1bmN0aW9uKG4pe3JldHVybiBVKG4udG9TdHJpbmcoMTYpLDIsXCIwXCIpfSxuKX0sZnVuY3Rpb24obix0KXt2YXIgcj1uLmxlbmd0aCxlPVtdLHU9MDtpZihyPD10KXJldHVybiBbbi5zbGljZSgpXTtmb3IodmFyIG89MDtvPHI7bysrKWVbdV18fGUucHVzaChbXSksZVt1XS5wdXNoKG5bb10pLChvKzEpJXQ9PTAmJnUrKztyZXR1cm4gZX0obi5zbGljZShkLmZyb20sZC50bykudG9KU09OKCkuZGF0YSxJKSk7bz1mdW5jdGlvbihuKXtyZXR1cm4gMD09PW4uZnJvbSYmMT09PW4udG8/e2Zyb206bi5mcm9tLHRvOm4udG99Ontmcm9tOm4uZnJvbS9JLHRvOk1hdGguZmxvb3Iobi50by9JKX19KGQpLGU9aC9JLHI9MypwLHA+PTQmJihyKz0xKSxsPTIsdT1hKGZ1bmN0aW9uKG4pe3JldHVybiBuLmxlbmd0aDw9ND9uLmpvaW4oXCIgXCIpOm4uc2xpY2UoMCw0KS5qb2luKFwiIFwiKStcIiAgXCIrbi5zbGljZSg0KS5qb2luKFwiIFwiKX0sdiksKGY9KDgqKG8udG8+MD9vLnRvLTE6by50bykpLnRvU3RyaW5nKDE2KS5sZW5ndGgpPDImJihmPTIpO31lbHNlIHt2YXIgZz1uLnNwbGl0KC9cXHJcXG58W1xcblxcclxcdTIwMjhcXHUyMDI5XS8pO3I9Yy5jb2x1bW4tMSxlPWMubGluZS0xLG89VyhlLHEsQSxnLmxlbmd0aCksdT1nLnNsaWNlKG8uZnJvbSxvLnRvKSxmPW8udG8udG9TdHJpbmcoKS5sZW5ndGg7fXZhciBtPWUtby5mcm9tO3JldHVybiB3KG4pJiYoZj0oOCooby50bz4wP28udG8tMTpvLnRvKSkudG9TdHJpbmcoMTYpLmxlbmd0aCk8MiYmKGY9MiksaShmdW5jdGlvbih0LGUsdSl7dmFyIGksYT11PT09bSxjPWE/XCI+IFwiOno7cmV0dXJuIGk9dyhuKT9VKCg4KihvLmZyb20rdSkpLnRvU3RyaW5nKDE2KSxmLFwiMFwiKTpVKChvLmZyb20rdSsxKS50b1N0cmluZygpLGYsXCIgXCIpLFtdLmNvbmNhdCh0LFtjK2krXCIgfCBcIitlXSxhP1t6K1IoXCIgXCIsZikrXCIgfCBcIitVKFwiXCIscixcIiBcIikrUihcIl5cIixsKV06W10pfSxbXSx1KS5qb2luKFwiXFxuXCIpfWZ1bmN0aW9uIE4obix0KXtyZXR1cm4gW1wiXFxuXCIsXCItLSBQQVJTSU5HIEZBSUxFRCBcIitSKFwiLVwiLDUwKSxcIlxcblxcblwiLEQobix0KSxcIlxcblxcblwiLChyPXQuZXhwZWN0ZWQsMT09PXIubGVuZ3RoP1wiRXhwZWN0ZWQ6XFxuXFxuXCIrclswXTpcIkV4cGVjdGVkIG9uZSBvZiB0aGUgZm9sbG93aW5nOiBcXG5cXG5cIityLmpvaW4oXCIsIFwiKSksXCJcXG5cIl0uam9pbihcIlwiKTt2YXIgcjt9ZnVuY3Rpb24gRyhuKXtyZXR1cm4gdm9pZCAwIT09bi5mbGFncz9uLmZsYWdzOltuLmdsb2JhbD9cImdcIjpcIlwiLG4uaWdub3JlQ2FzZT9cImlcIjpcIlwiLG4ubXVsdGlsaW5lP1wibVwiOlwiXCIsbi51bmljb2RlP1widVwiOlwiXCIsbi5zdGlja3k/XCJ5XCI6XCJcIl0uam9pbihcIlwiKX1mdW5jdGlvbiBDKCl7Zm9yKHZhciBuPVtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKSx0PW4ubGVuZ3RoLHI9MDtyPHQ7cis9MSlfKG5bcl0pO3JldHVybiBlKGZ1bmN0aW9uKHIsZSl7Zm9yKHZhciB1LG89bmV3IEFycmF5KHQpLGk9MDtpPHQ7aSs9MSl7aWYoISh1PUIobltpXS5fKHIsZSksdSkpLnN0YXR1cylyZXR1cm4gdTtvW2ldPXUudmFsdWUsZT11LmluZGV4O31yZXR1cm4gQihiKGUsbyksdSl9KX1mdW5jdGlvbiBKKCl7dmFyIG49W10uc2xpY2UuY2FsbChhcmd1bWVudHMpO2lmKDA9PT1uLmxlbmd0aCl0aHJvdyBuZXcgRXJyb3IoXCJzZXFNYXAgbmVlZHMgYXQgbGVhc3Qgb25lIGFyZ3VtZW50XCIpO3ZhciB0PW4ucG9wKCk7cmV0dXJuIGsodCksQy5hcHBseShudWxsLG4pLm1hcChmdW5jdGlvbihuKXtyZXR1cm4gdC5hcHBseShudWxsLG4pfSl9ZnVuY3Rpb24gVCgpe3ZhciBuPVtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKSx0PW4ubGVuZ3RoO2lmKDA9PT10KXJldHVybiBZKFwiemVybyBhbHRlcm5hdGVzXCIpO2Zvcih2YXIgcj0wO3I8dDtyKz0xKV8obltyXSk7cmV0dXJuIGUoZnVuY3Rpb24odCxyKXtmb3IodmFyIGUsdT0wO3U8bi5sZW5ndGg7dSs9MSlpZigoZT1CKG5bdV0uXyh0LHIpLGUpKS5zdGF0dXMpcmV0dXJuIGU7cmV0dXJuIGV9KX1mdW5jdGlvbiBWKG4sdCl7cmV0dXJuIEgobix0KS5vcihYKFtdKSl9ZnVuY3Rpb24gSChuLHQpe3JldHVybiBfKG4pLF8odCksSihuLHQudGhlbihuKS5tYW55KCksZnVuY3Rpb24obix0KXtyZXR1cm4gW25dLmNvbmNhdCh0KX0pfWZ1bmN0aW9uIEsobil7UChuKTt2YXIgdD1cIidcIituK1wiJ1wiO3JldHVybiBlKGZ1bmN0aW9uKHIsZSl7dmFyIHU9ZStuLmxlbmd0aCxvPXIuc2xpY2UoZSx1KTtyZXR1cm4gbz09PW4/Yih1LG8pOngoZSx0KX0pfWZ1bmN0aW9uIFEobix0KXshZnVuY3Rpb24obil7aWYoIShuIGluc3RhbmNlb2YgUmVnRXhwKSl0aHJvdyBuZXcgRXJyb3IoXCJub3QgYSByZWdleHA6IFwiK24pO2Zvcih2YXIgdD1HKG4pLHI9MDtyPHQubGVuZ3RoO3IrKyl7dmFyIGU9dC5jaGFyQXQocik7aWYoXCJpXCIhPT1lJiZcIm1cIiE9PWUmJlwidVwiIT09ZSYmXCJzXCIhPT1lKXRocm93IG5ldyBFcnJvcigndW5zdXBwb3J0ZWQgcmVnZXhwIGZsYWcgXCInK2UrJ1wiOiAnK24pfX0obiksYXJndW1lbnRzLmxlbmd0aD49Mj9PKHQpOnQ9MDt2YXIgcj1mdW5jdGlvbihuKXtyZXR1cm4gUmVnRXhwKFwiXig/OlwiK24uc291cmNlK1wiKVwiLEcobikpfShuKSx1PVwiXCIrbjtyZXR1cm4gZShmdW5jdGlvbihuLGUpe3ZhciBvPXIuZXhlYyhuLnNsaWNlKGUpKTtpZihvKXtpZigwPD10JiZ0PD1vLmxlbmd0aCl7dmFyIGk9b1swXSxhPW9bdF07cmV0dXJuIGIoZStpLmxlbmd0aCxhKX1yZXR1cm4geChlLFwidmFsaWQgbWF0Y2ggZ3JvdXAgKDAgdG8gXCIrby5sZW5ndGgrXCIpIGluIFwiK3UpfXJldHVybiB4KGUsdSl9KX1mdW5jdGlvbiBYKG4pe3JldHVybiBlKGZ1bmN0aW9uKHQscil7cmV0dXJuIGIocixuKX0pfWZ1bmN0aW9uIFkobil7cmV0dXJuIGUoZnVuY3Rpb24odCxyKXtyZXR1cm4geChyLG4pfSl9ZnVuY3Rpb24gWihuKXtpZih5KG4pKXJldHVybiBlKGZ1bmN0aW9uKHQscil7dmFyIGU9bi5fKHQscik7cmV0dXJuIGUuaW5kZXg9cixlLnZhbHVlPVwiXCIsZX0pO2lmKFwic3RyaW5nXCI9PXR5cGVvZiBuKXJldHVybiBaKEsobikpO2lmKG4gaW5zdGFuY2VvZiBSZWdFeHApcmV0dXJuIFooUShuKSk7dGhyb3cgbmV3IEVycm9yKFwibm90IGEgc3RyaW5nLCByZWdleHAsIG9yIHBhcnNlcjogXCIrbil9ZnVuY3Rpb24gJChuKXtyZXR1cm4gXyhuKSxlKGZ1bmN0aW9uKHQscil7dmFyIGU9bi5fKHQsciksdT10LnNsaWNlKHIsZS5pbmRleCk7cmV0dXJuIGUuc3RhdHVzP3gociwnbm90IFwiJyt1KydcIicpOmIocixudWxsKX0pfWZ1bmN0aW9uIG5uKG4pe3JldHVybiBrKG4pLGUoZnVuY3Rpb24odCxyKXt2YXIgZT1MKHQscik7cmV0dXJuIHI8dC5sZW5ndGgmJm4oZSk/YihyKzEsZSk6eChyLFwiYSBjaGFyYWN0ZXIvYnl0ZSBtYXRjaGluZyBcIituKX0pfWZ1bmN0aW9uIHRuKG4sdCl7YXJndW1lbnRzLmxlbmd0aDwyJiYodD1uLG49dm9pZCAwKTt2YXIgcj1lKGZ1bmN0aW9uKG4sZSl7cmV0dXJuIHIuXz10KCkuXyxyLl8obixlKX0pO3JldHVybiBuP3IuZGVzYyhuKTpyfWZ1bmN0aW9uIHJuKCl7cmV0dXJuIFkoXCJmYW50YXN5LWxhbmQvZW1wdHlcIil9dS5wYXJzZT1mdW5jdGlvbihuKXtpZihcInN0cmluZ1wiIT10eXBlb2YgbiYmIXcobikpdGhyb3cgbmV3IEVycm9yKFwiLnBhcnNlIG11c3QgYmUgY2FsbGVkIHdpdGggYSBzdHJpbmcgb3IgQnVmZmVyIGFzIGl0cyBhcmd1bWVudFwiKTt2YXIgdCxyPXRoaXMuc2tpcChhbikuXyhuLDApO3JldHVybiB0PXIuc3RhdHVzP3tzdGF0dXM6ITAsdmFsdWU6ci52YWx1ZX06e3N0YXR1czohMSxpbmRleDpTKG4sci5mdXJ0aGVzdCksZXhwZWN0ZWQ6ci5leHBlY3RlZH0sZGVsZXRlIGpbbl0sdH0sdS50cnlQYXJzZT1mdW5jdGlvbihuKXt2YXIgdD10aGlzLnBhcnNlKG4pO2lmKHQuc3RhdHVzKXJldHVybiB0LnZhbHVlO3ZhciByPU4obix0KSxlPW5ldyBFcnJvcihyKTt0aHJvdyBlLnR5cGU9XCJQYXJzaW1tb25FcnJvclwiLGUucmVzdWx0PXQsZX0sdS5hc3NlcnQ9ZnVuY3Rpb24obix0KXtyZXR1cm4gdGhpcy5jaGFpbihmdW5jdGlvbihyKXtyZXR1cm4gbihyKT9YKHIpOlkodCl9KX0sdS5vcj1mdW5jdGlvbihuKXtyZXR1cm4gVCh0aGlzLG4pfSx1LnRyaW09ZnVuY3Rpb24obil7cmV0dXJuIHRoaXMud3JhcChuLG4pfSx1LndyYXA9ZnVuY3Rpb24obix0KXtyZXR1cm4gSihuLHRoaXMsdCxmdW5jdGlvbihuLHQpe3JldHVybiB0fSl9LHUudGhydT1mdW5jdGlvbihuKXtyZXR1cm4gbih0aGlzKX0sdS50aGVuPWZ1bmN0aW9uKG4pe3JldHVybiBfKG4pLEModGhpcyxuKS5tYXAoZnVuY3Rpb24obil7cmV0dXJuIG5bMV19KX0sdS5tYW55PWZ1bmN0aW9uKCl7dmFyIG49dGhpcztyZXR1cm4gZShmdW5jdGlvbih0LHIpe2Zvcih2YXIgZT1bXSx1PXZvaWQgMDs7KXtpZighKHU9QihuLl8odCxyKSx1KSkuc3RhdHVzKXJldHVybiBCKGIocixlKSx1KTtpZihyPT09dS5pbmRleCl0aHJvdyBuZXcgRXJyb3IoXCJpbmZpbml0ZSBsb29wIGRldGVjdGVkIGluIC5tYW55KCkgcGFyc2VyIC0tLSBjYWxsaW5nIC5tYW55KCkgb24gYSBwYXJzZXIgd2hpY2ggY2FuIGFjY2VwdCB6ZXJvIGNoYXJhY3RlcnMgaXMgdXN1YWxseSB0aGUgY2F1c2VcIik7cj11LmluZGV4LGUucHVzaCh1LnZhbHVlKTt9fSl9LHUudGllV2l0aD1mdW5jdGlvbihuKXtyZXR1cm4gUChuKSx0aGlzLm1hcChmdW5jdGlvbih0KXtpZihmdW5jdGlvbihuKXtpZighRShuKSl0aHJvdyBuZXcgRXJyb3IoXCJub3QgYW4gYXJyYXk6IFwiK24pfSh0KSx0Lmxlbmd0aCl7UCh0WzBdKTtmb3IodmFyIHI9dFswXSxlPTE7ZTx0Lmxlbmd0aDtlKyspUCh0W2VdKSxyKz1uK3RbZV07cmV0dXJuIHJ9cmV0dXJuIFwiXCJ9KX0sdS50aWU9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy50aWVXaXRoKFwiXCIpfSx1LnRpbWVzPWZ1bmN0aW9uKG4sdCl7dmFyIHI9dGhpcztyZXR1cm4gYXJndW1lbnRzLmxlbmd0aDwyJiYodD1uKSxPKG4pLE8odCksZShmdW5jdGlvbihlLHUpe2Zvcih2YXIgbz1bXSxpPXZvaWQgMCxhPXZvaWQgMCxmPTA7ZjxuO2YrPTEpe2lmKGE9QihpPXIuXyhlLHUpLGEpLCFpLnN0YXR1cylyZXR1cm4gYTt1PWkuaW5kZXgsby5wdXNoKGkudmFsdWUpO31mb3IoO2Y8dCYmKGE9QihpPXIuXyhlLHUpLGEpLGkuc3RhdHVzKTtmKz0xKXU9aS5pbmRleCxvLnB1c2goaS52YWx1ZSk7cmV0dXJuIEIoYih1LG8pLGEpfSl9LHUucmVzdWx0PWZ1bmN0aW9uKG4pe3JldHVybiB0aGlzLm1hcChmdW5jdGlvbigpe3JldHVybiBufSl9LHUuYXRNb3N0PWZ1bmN0aW9uKG4pe3JldHVybiB0aGlzLnRpbWVzKDAsbil9LHUuYXRMZWFzdD1mdW5jdGlvbihuKXtyZXR1cm4gSih0aGlzLnRpbWVzKG4pLHRoaXMubWFueSgpLGZ1bmN0aW9uKG4sdCl7cmV0dXJuIG4uY29uY2F0KHQpfSl9LHUubWFwPWZ1bmN0aW9uKG4pe2sobik7dmFyIHQ9dGhpcztyZXR1cm4gZShmdW5jdGlvbihyLGUpe3ZhciB1PXQuXyhyLGUpO3JldHVybiB1LnN0YXR1cz9CKGIodS5pbmRleCxuKHUudmFsdWUpKSx1KTp1fSl9LHUuY29udHJhbWFwPWZ1bmN0aW9uKG4pe2sobik7dmFyIHQ9dGhpcztyZXR1cm4gZShmdW5jdGlvbihyLGUpe3ZhciB1PXQucGFyc2UobihyLnNsaWNlKGUpKSk7cmV0dXJuIHUuc3RhdHVzP2IoZStyLmxlbmd0aCx1LnZhbHVlKTp1fSl9LHUucHJvbWFwPWZ1bmN0aW9uKG4sdCl7cmV0dXJuIGsobiksayh0KSx0aGlzLmNvbnRyYW1hcChuKS5tYXAodCl9LHUuc2tpcD1mdW5jdGlvbihuKXtyZXR1cm4gQyh0aGlzLG4pLm1hcChmdW5jdGlvbihuKXtyZXR1cm4gblswXX0pfSx1Lm1hcms9ZnVuY3Rpb24oKXtyZXR1cm4gSihlbix0aGlzLGVuLGZ1bmN0aW9uKG4sdCxyKXtyZXR1cm4ge3N0YXJ0Om4sdmFsdWU6dCxlbmQ6cn19KX0sdS5ub2RlPWZ1bmN0aW9uKG4pe3JldHVybiBKKGVuLHRoaXMsZW4sZnVuY3Rpb24odCxyLGUpe3JldHVybiB7bmFtZTpuLHZhbHVlOnIsc3RhcnQ6dCxlbmQ6ZX19KX0sdS5zZXBCeT1mdW5jdGlvbihuKXtyZXR1cm4gVih0aGlzLG4pfSx1LnNlcEJ5MT1mdW5jdGlvbihuKXtyZXR1cm4gSCh0aGlzLG4pfSx1Lmxvb2thaGVhZD1mdW5jdGlvbihuKXtyZXR1cm4gdGhpcy5za2lwKFoobikpfSx1Lm5vdEZvbGxvd2VkQnk9ZnVuY3Rpb24obil7cmV0dXJuIHRoaXMuc2tpcCgkKG4pKX0sdS5kZXNjPWZ1bmN0aW9uKG4pe0Uobil8fChuPVtuXSk7dmFyIHQ9dGhpcztyZXR1cm4gZShmdW5jdGlvbihyLGUpe3ZhciB1PXQuXyhyLGUpO3JldHVybiB1LnN0YXR1c3x8KHUuZXhwZWN0ZWQ9biksdX0pfSx1LmZhbGxiYWNrPWZ1bmN0aW9uKG4pe3JldHVybiB0aGlzLm9yKFgobikpfSx1LmFwPWZ1bmN0aW9uKG4pe3JldHVybiBKKG4sdGhpcyxmdW5jdGlvbihuLHQpe3JldHVybiBuKHQpfSl9LHUuY2hhaW49ZnVuY3Rpb24obil7dmFyIHQ9dGhpcztyZXR1cm4gZShmdW5jdGlvbihyLGUpe3ZhciB1PXQuXyhyLGUpO3JldHVybiB1LnN0YXR1cz9CKG4odS52YWx1ZSkuXyhyLHUuaW5kZXgpLHUpOnV9KX0sdS5jb25jYXQ9dS5vcix1LmVtcHR5PXJuLHUub2Y9WCx1W1wiZmFudGFzeS1sYW5kL2FwXCJdPXUuYXAsdVtcImZhbnRhc3ktbGFuZC9jaGFpblwiXT11LmNoYWluLHVbXCJmYW50YXN5LWxhbmQvY29uY2F0XCJdPXUuY29uY2F0LHVbXCJmYW50YXN5LWxhbmQvZW1wdHlcIl09dS5lbXB0eSx1W1wiZmFudGFzeS1sYW5kL29mXCJdPXUub2YsdVtcImZhbnRhc3ktbGFuZC9tYXBcIl09dS5tYXA7dmFyIGVuPWUoZnVuY3Rpb24obix0KXtyZXR1cm4gYih0LFMobix0KSl9KSx1bj1lKGZ1bmN0aW9uKG4sdCl7cmV0dXJuIHQ+PW4ubGVuZ3RoP3godCxcImFueSBjaGFyYWN0ZXIvYnl0ZVwiKTpiKHQrMSxMKG4sdCkpfSksb249ZShmdW5jdGlvbihuLHQpe3JldHVybiBiKG4ubGVuZ3RoLG4uc2xpY2UodCkpfSksYW49ZShmdW5jdGlvbihuLHQpe3JldHVybiB0PG4ubGVuZ3RoP3godCxcIkVPRlwiKTpiKHQsbnVsbCl9KSxmbj1RKC9bMC05XS8pLmRlc2MoXCJhIGRpZ2l0XCIpLGNuPVEoL1swLTldKi8pLmRlc2MoXCJvcHRpb25hbCBkaWdpdHNcIiksc249USgvW2Etel0vaSkuZGVzYyhcImEgbGV0dGVyXCIpLGxuPVEoL1thLXpdKi9pKS5kZXNjKFwib3B0aW9uYWwgbGV0dGVyc1wiKSxobj1RKC9cXHMqLykuZGVzYyhcIm9wdGlvbmFsIHdoaXRlc3BhY2VcIikscG49USgvXFxzKy8pLmRlc2MoXCJ3aGl0ZXNwYWNlXCIpLGRuPUsoXCJcXHJcIiksdm49SyhcIlxcblwiKSxnbj1LKFwiXFxyXFxuXCIpLG1uPVQoZ24sdm4sZG4pLmRlc2MoXCJuZXdsaW5lXCIpLHluPVQobW4sYW4pO2UuYWxsPW9uLGUuYWx0PVQsZS5hbnk9dW4sZS5jcj1kbixlLmNyZWF0ZUxhbmd1YWdlPWZ1bmN0aW9uKG4pe3ZhciB0PXt9O2Zvcih2YXIgciBpbiBuKSh7fSkuaGFzT3duUHJvcGVydHkuY2FsbChuLHIpJiZmdW5jdGlvbihyKXt0W3JdPXRuKGZ1bmN0aW9uKCl7cmV0dXJuIG5bcl0odCl9KTt9KHIpO3JldHVybiB0fSxlLmNybGY9Z24sZS5jdXN0b209ZnVuY3Rpb24obil7cmV0dXJuIGUobihiLHgpKX0sZS5kaWdpdD1mbixlLmRpZ2l0cz1jbixlLmVtcHR5PXJuLGUuZW5kPXluLGUuZW9mPWFuLGUuZmFpbD1ZLGUuZm9ybWF0RXJyb3I9TixlLmluZGV4PWVuLGUuaXNQYXJzZXI9eSxlLmxhenk9dG4sZS5sZXR0ZXI9c24sZS5sZXR0ZXJzPWxuLGUubGY9dm4sZS5sb29rYWhlYWQ9WixlLm1ha2VGYWlsdXJlPXgsZS5tYWtlU3VjY2Vzcz1iLGUubmV3bGluZT1tbixlLm5vbmVPZj1mdW5jdGlvbihuKXtyZXR1cm4gbm4oZnVuY3Rpb24odCl7cmV0dXJuIG4uaW5kZXhPZih0KTwwfSkuZGVzYyhcIm5vbmUgb2YgJ1wiK24rXCInXCIpfSxlLm5vdEZvbGxvd2VkQnk9JCxlLm9mPVgsZS5vbmVPZj1mdW5jdGlvbihuKXtmb3IodmFyIHQ9bi5zcGxpdChcIlwiKSxyPTA7cjx0Lmxlbmd0aDtyKyspdFtyXT1cIidcIit0W3JdK1wiJ1wiO3JldHVybiBubihmdW5jdGlvbih0KXtyZXR1cm4gbi5pbmRleE9mKHQpPj0wfSkuZGVzYyh0KX0sZS5vcHRXaGl0ZXNwYWNlPWhuLGUuUGFyc2VyPWUsZS5yYW5nZT1mdW5jdGlvbihuLHQpe3JldHVybiBubihmdW5jdGlvbihyKXtyZXR1cm4gbjw9ciYmcjw9dH0pLmRlc2MobitcIi1cIit0KX0sZS5yZWdleD1RLGUucmVnZXhwPVEsZS5zZXBCeT1WLGUuc2VwQnkxPUgsZS5zZXE9QyxlLnNlcU1hcD1KLGUuc2VxT2JqPWZ1bmN0aW9uKCl7Zm9yKHZhciBuLHQ9e30scj0wLHU9KG49YXJndW1lbnRzLEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKG4pKSxvPXUubGVuZ3RoLGk9MDtpPG87aSs9MSl7dmFyIGE9dVtpXTtpZigheShhKSl7aWYoRShhKSYmMj09PWEubGVuZ3RoJiZcInN0cmluZ1wiPT10eXBlb2YgYVswXSYmeShhWzFdKSl7dmFyIGY9YVswXTtpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodCxmKSl0aHJvdyBuZXcgRXJyb3IoXCJzZXFPYmo6IGR1cGxpY2F0ZSBrZXkgXCIrZik7dFtmXT0hMCxyKys7Y29udGludWV9dGhyb3cgbmV3IEVycm9yKFwic2VxT2JqIGFyZ3VtZW50cyBtdXN0IGJlIHBhcnNlcnMgb3IgW3N0cmluZywgcGFyc2VyXSBhcnJheSBwYWlycy5cIil9fWlmKDA9PT1yKXRocm93IG5ldyBFcnJvcihcInNlcU9iaiBleHBlY3RzIGF0IGxlYXN0IG9uZSBuYW1lZCBwYXJzZXIsIGZvdW5kIHplcm9cIik7cmV0dXJuIGUoZnVuY3Rpb24obix0KXtmb3IodmFyIHIsZT17fSxpPTA7aTxvO2krPTEpe3ZhciBhLGY7aWYoRSh1W2ldKT8oYT11W2ldWzBdLGY9dVtpXVsxXSk6KGE9bnVsbCxmPXVbaV0pLCEocj1CKGYuXyhuLHQpLHIpKS5zdGF0dXMpcmV0dXJuIHI7YSYmKGVbYV09ci52YWx1ZSksdD1yLmluZGV4O31yZXR1cm4gQihiKHQsZSkscil9KX0sZS5zdHJpbmc9SyxlLnN1Y2NlZWQ9WCxlLnRha2VXaGlsZT1mdW5jdGlvbihuKXtyZXR1cm4gayhuKSxlKGZ1bmN0aW9uKHQscil7Zm9yKHZhciBlPXI7ZTx0Lmxlbmd0aCYmbihMKHQsZSkpOyllKys7cmV0dXJuIGIoZSx0LnNsaWNlKHIsZSkpfSl9LGUudGVzdD1ubixlLndoaXRlc3BhY2U9cG4sZVtcImZhbnRhc3ktbGFuZC9lbXB0eVwiXT1ybixlW1wiZmFudGFzeS1sYW5kL29mXCJdPVgsZS5CaW5hcnk9e2JpdFNlcTpsLGJpdFNlcU9iajpmdW5jdGlvbihuKXtzKCk7dmFyIHQ9e30scj0wLGU9YShmdW5jdGlvbihuKXtpZihFKG4pKXt2YXIgZT1uO2lmKDIhPT1lLmxlbmd0aCl0aHJvdyBuZXcgRXJyb3IoXCJbXCIrZS5qb2luKFwiLCBcIikrXCJdIHNob3VsZCBiZSBsZW5ndGggMiwgZ290IGxlbmd0aCBcIitlLmxlbmd0aCk7aWYoUChlWzBdKSxPKGVbMV0pLE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0LGVbMF0pKXRocm93IG5ldyBFcnJvcihcImR1cGxpY2F0ZSBrZXkgaW4gYml0U2VxT2JqOiBcIitlWzBdKTtyZXR1cm4gdFtlWzBdXT0hMCxyKyssZX1yZXR1cm4gTyhuKSxbbnVsbCxuXX0sbik7aWYocjwxKXRocm93IG5ldyBFcnJvcihcImJpdFNlcU9iaiBleHBlY3RzIGF0IGxlYXN0IG9uZSBuYW1lZCBwYWlyLCBnb3QgW1wiK24uam9pbihcIiwgXCIpK1wiXVwiKTt2YXIgdT1hKGZ1bmN0aW9uKG4pe3JldHVybiBuWzBdfSxlKTtyZXR1cm4gbChhKGZ1bmN0aW9uKG4pe3JldHVybiBuWzFdfSxlKSkubWFwKGZ1bmN0aW9uKG4pe3JldHVybiBpKGZ1bmN0aW9uKG4sdCl7cmV0dXJuIG51bGwhPT10WzBdJiYoblt0WzBdXT10WzFdKSxufSx7fSxhKGZ1bmN0aW9uKHQscil7cmV0dXJuIFt0LG5bcl1dfSx1KSl9KX0sYnl0ZTpmdW5jdGlvbihuKXtpZihzKCksTyhuKSxuPjI1NSl0aHJvdyBuZXcgRXJyb3IoXCJWYWx1ZSBzcGVjaWZpZWQgdG8gYnl0ZSBjb25zdHJ1Y3RvciAoXCIrbitcIj0weFwiK24udG9TdHJpbmcoMTYpK1wiKSBpcyBsYXJnZXIgaW4gdmFsdWUgdGhhbiBhIHNpbmdsZSBieXRlLlwiKTt2YXIgdD0obj4xNT9cIjB4XCI6XCIweDBcIikrbi50b1N0cmluZygxNik7cmV0dXJuIGUoZnVuY3Rpb24ocixlKXt2YXIgdT1MKHIsZSk7cmV0dXJuIHU9PT1uP2IoZSsxLHUpOngoZSx0KX0pfSxidWZmZXI6ZnVuY3Rpb24obil7cmV0dXJuIGgoXCJidWZmZXJcIixuKS5tYXAoZnVuY3Rpb24obil7cmV0dXJuIEJ1ZmZlci5mcm9tKG4pfSl9LGVuY29kZWRTdHJpbmc6ZnVuY3Rpb24obix0KXtyZXR1cm4gaChcInN0cmluZ1wiLHQpLm1hcChmdW5jdGlvbih0KXtyZXR1cm4gdC50b1N0cmluZyhuKX0pfSx1aW50QkU6ZCx1aW50OEJFOmQoMSksdWludDE2QkU6ZCgyKSx1aW50MzJCRTpkKDQpLHVpbnRMRTp2LHVpbnQ4TEU6digxKSx1aW50MTZMRTp2KDIpLHVpbnQzMkxFOnYoNCksaW50QkU6ZyxpbnQ4QkU6ZygxKSxpbnQxNkJFOmcoMiksaW50MzJCRTpnKDQpLGludExFOm0saW50OExFOm0oMSksaW50MTZMRTptKDIpLGludDMyTEU6bSg0KSxmbG9hdEJFOmgoXCJmbG9hdEJFXCIsNCkubWFwKGZ1bmN0aW9uKG4pe3JldHVybiBuLnJlYWRGbG9hdEJFKDApfSksZmxvYXRMRTpoKFwiZmxvYXRMRVwiLDQpLm1hcChmdW5jdGlvbihuKXtyZXR1cm4gbi5yZWFkRmxvYXRMRSgwKX0pLGRvdWJsZUJFOmgoXCJkb3VibGVCRVwiLDgpLm1hcChmdW5jdGlvbihuKXtyZXR1cm4gbi5yZWFkRG91YmxlQkUoMCl9KSxkb3VibGVMRTpoKFwiZG91YmxlTEVcIiw4KS5tYXAoZnVuY3Rpb24obil7cmV0dXJuIG4ucmVhZERvdWJsZUxFKDApfSl9LG4uZXhwb3J0cz1lO31dKX0pO1xufShwYXJzaW1tb25fdW1kX21pbikpO1xuXG52YXIgZW1vamlSZWdleCA9ICgpID0+IHtcblx0Ly8gaHR0cHM6Ly9tdGhzLmJlL2Vtb2ppXG5cdHJldHVybiAvKD86WyMqMC05XVxcdUZFMEY/XFx1MjBFM3xbXFx4QTlcXHhBRVxcdTIwM0NcXHUyMDQ5XFx1MjEyMlxcdTIxMzlcXHUyMTk0LVxcdTIxOTlcXHUyMUE5XFx1MjFBQVxcdTIzMUFcXHUyMzFCXFx1MjMyOFxcdTIzQ0ZcXHUyM0VELVxcdTIzRUZcXHUyM0YxXFx1MjNGMlxcdTIzRjgtXFx1MjNGQVxcdTI0QzJcXHUyNUFBXFx1MjVBQlxcdTI1QjZcXHUyNUMwXFx1MjVGQlxcdTI1RkNcXHUyNUZFXFx1MjYwMC1cXHUyNjA0XFx1MjYwRVxcdTI2MTFcXHUyNjE0XFx1MjYxNVxcdTI2MThcXHUyNjIwXFx1MjYyMlxcdTI2MjNcXHUyNjI2XFx1MjYyQVxcdTI2MkVcXHUyNjJGXFx1MjYzOC1cXHUyNjNBXFx1MjY0MFxcdTI2NDJcXHUyNjQ4LVxcdTI2NTNcXHUyNjVGXFx1MjY2MFxcdTI2NjNcXHUyNjY1XFx1MjY2NlxcdTI2NjhcXHUyNjdCXFx1MjY3RVxcdTI2N0ZcXHUyNjkyXFx1MjY5NC1cXHUyNjk3XFx1MjY5OVxcdTI2OUJcXHUyNjlDXFx1MjZBMFxcdTI2QTdcXHUyNkFBXFx1MjZCMFxcdTI2QjFcXHUyNkJEXFx1MjZCRVxcdTI2QzRcXHUyNkM4XFx1MjZDRlxcdTI2RDFcXHUyNkQzXFx1MjZFOVxcdTI2RjAtXFx1MjZGNVxcdTI2RjdcXHUyNkY4XFx1MjZGQVxcdTI3MDJcXHUyNzA4XFx1MjcwOVxcdTI3MEZcXHUyNzEyXFx1MjcxNFxcdTI3MTZcXHUyNzFEXFx1MjcyMVxcdTI3MzNcXHUyNzM0XFx1Mjc0NFxcdTI3NDdcXHUyNzU3XFx1Mjc2M1xcdTI3QTFcXHUyOTM0XFx1MjkzNVxcdTJCMDUtXFx1MkIwN1xcdTJCMUJcXHUyQjFDXFx1MkI1NVxcdTMwMzBcXHUzMDNEXFx1MzI5N1xcdTMyOTldXFx1RkUwRj98W1xcdTI2MURcXHUyNzBDXFx1MjcwRF0oPzpcXHVGRTBGfFxcdUQ4M0NbXFx1REZGQi1cXHVERkZGXSk/fFtcXHUyNzBBXFx1MjcwQl0oPzpcXHVEODNDW1xcdURGRkItXFx1REZGRl0pP3xbXFx1MjNFOS1cXHUyM0VDXFx1MjNGMFxcdTIzRjNcXHUyNUZEXFx1MjY5M1xcdTI2QTFcXHUyNkFCXFx1MjZDNVxcdTI2Q0VcXHUyNkQ0XFx1MjZFQVxcdTI2RkRcXHUyNzA1XFx1MjcyOFxcdTI3NENcXHUyNzRFXFx1Mjc1My1cXHUyNzU1XFx1Mjc5NS1cXHUyNzk3XFx1MjdCMFxcdTI3QkZcXHUyQjUwXXxcXHUyNkY5KD86XFx1RkUwRnxcXHVEODNDW1xcdURGRkItXFx1REZGRl0pPyg/OlxcdTIwMERbXFx1MjY0MFxcdTI2NDJdXFx1RkUwRj8pP3xcXHUyNzY0XFx1RkUwRj8oPzpcXHUyMDBEKD86XFx1RDgzRFxcdUREMjV8XFx1RDgzRVxcdURFNzkpKT98XFx1RDgzQyg/OltcXHVEQzA0XFx1REQ3MFxcdURENzFcXHVERDdFXFx1REQ3RlxcdURFMDJcXHVERTM3XFx1REYyMVxcdURGMjQtXFx1REYyQ1xcdURGMzZcXHVERjdEXFx1REY5NlxcdURGOTdcXHVERjk5LVxcdURGOUJcXHVERjlFXFx1REY5RlxcdURGQ0RcXHVERkNFXFx1REZENC1cXHVERkRGXFx1REZGNVxcdURGRjddXFx1RkUwRj98W1xcdURGODVcXHVERkMyXFx1REZDN10oPzpcXHVEODNDW1xcdURGRkItXFx1REZGRl0pP3xbXFx1REZDM1xcdURGQzRcXHVERkNBXSg/OlxcdUQ4M0NbXFx1REZGQi1cXHVERkZGXSk/KD86XFx1MjAwRFtcXHUyNjQwXFx1MjY0Ml1cXHVGRTBGPyk/fFtcXHVERkNCXFx1REZDQ10oPzpcXHVGRTBGfFxcdUQ4M0NbXFx1REZGQi1cXHVERkZGXSk/KD86XFx1MjAwRFtcXHUyNjQwXFx1MjY0Ml1cXHVGRTBGPyk/fFtcXHVEQ0NGXFx1REQ4RVxcdUREOTEtXFx1REQ5QVxcdURFMDFcXHVERTFBXFx1REUyRlxcdURFMzItXFx1REUzNlxcdURFMzgtXFx1REUzQVxcdURFNTBcXHVERTUxXFx1REYwMC1cXHVERjIwXFx1REYyRC1cXHVERjM1XFx1REYzNy1cXHVERjdDXFx1REY3RS1cXHVERjg0XFx1REY4Ni1cXHVERjkzXFx1REZBMC1cXHVERkMxXFx1REZDNVxcdURGQzZcXHVERkM4XFx1REZDOVxcdURGQ0YtXFx1REZEM1xcdURGRTAtXFx1REZGMFxcdURGRjgtXFx1REZGRl18XFx1RERFNlxcdUQ4M0NbXFx1RERFOC1cXHVEREVDXFx1RERFRVxcdURERjFcXHVEREYyXFx1RERGNFxcdURERjYtXFx1RERGQVxcdURERkNcXHVEREZEXFx1RERGRl18XFx1RERFN1xcdUQ4M0NbXFx1RERFNlxcdURERTdcXHVEREU5LVxcdURERUZcXHVEREYxLVxcdURERjRcXHVEREY2LVxcdURERjlcXHVEREZCXFx1RERGQ1xcdURERkVcXHVEREZGXXxcXHVEREU4XFx1RDgzQ1tcXHVEREU2XFx1RERFOFxcdURERTlcXHVEREVCLVxcdURERUVcXHVEREYwLVxcdURERjVcXHVEREY3XFx1RERGQS1cXHVEREZGXXxcXHVEREU5XFx1RDgzQ1tcXHVEREVBXFx1RERFQ1xcdURERUZcXHVEREYwXFx1RERGMlxcdURERjRcXHVEREZGXXxcXHVEREVBXFx1RDgzQ1tcXHVEREU2XFx1RERFOFxcdURERUFcXHVEREVDXFx1RERFRFxcdURERjctXFx1RERGQV18XFx1RERFQlxcdUQ4M0NbXFx1RERFRS1cXHVEREYwXFx1RERGMlxcdURERjRcXHVEREY3XXxcXHVEREVDXFx1RDgzQ1tcXHVEREU2XFx1RERFN1xcdURERTktXFx1RERFRVxcdURERjEtXFx1RERGM1xcdURERjUtXFx1RERGQVxcdURERkNcXHVEREZFXXxcXHVEREVEXFx1RDgzQ1tcXHVEREYwXFx1RERGMlxcdURERjNcXHVEREY3XFx1RERGOVxcdURERkFdfFxcdURERUVcXHVEODNDW1xcdURERTgtXFx1RERFQVxcdURERjEtXFx1RERGNFxcdURERjYtXFx1RERGOV18XFx1RERFRlxcdUQ4M0NbXFx1RERFQVxcdURERjJcXHVEREY0XFx1RERGNV18XFx1RERGMFxcdUQ4M0NbXFx1RERFQVxcdURERUMtXFx1RERFRVxcdURERjJcXHVEREYzXFx1RERGNVxcdURERjdcXHVEREZDXFx1RERGRVxcdURERkZdfFxcdURERjFcXHVEODNDW1xcdURERTYtXFx1RERFOFxcdURERUVcXHVEREYwXFx1RERGNy1cXHVEREZCXFx1RERGRV18XFx1RERGMlxcdUQ4M0NbXFx1RERFNlxcdURERTgtXFx1RERFRFxcdURERjAtXFx1RERGRl18XFx1RERGM1xcdUQ4M0NbXFx1RERFNlxcdURERThcXHVEREVBLVxcdURERUNcXHVEREVFXFx1RERGMVxcdURERjRcXHVEREY1XFx1RERGN1xcdURERkFcXHVEREZGXXxcXHVEREY0XFx1RDgzQ1xcdURERjJ8XFx1RERGNVxcdUQ4M0NbXFx1RERFNlxcdURERUEtXFx1RERFRFxcdURERjAtXFx1RERGM1xcdURERjctXFx1RERGOVxcdURERkNcXHVEREZFXXxcXHVEREY2XFx1RDgzQ1xcdURERTZ8XFx1RERGN1xcdUQ4M0NbXFx1RERFQVxcdURERjRcXHVEREY4XFx1RERGQVxcdURERkNdfFxcdURERjhcXHVEODNDW1xcdURERTYtXFx1RERFQVxcdURERUMtXFx1RERGNFxcdURERjctXFx1RERGOVxcdURERkJcXHVEREZELVxcdURERkZdfFxcdURERjlcXHVEODNDW1xcdURERTZcXHVEREU4XFx1RERFOVxcdURERUItXFx1RERFRFxcdURERUYtXFx1RERGNFxcdURERjdcXHVEREY5XFx1RERGQlxcdURERkNcXHVEREZGXXxcXHVEREZBXFx1RDgzQ1tcXHVEREU2XFx1RERFQ1xcdURERjJcXHVEREYzXFx1RERGOFxcdURERkVcXHVEREZGXXxcXHVEREZCXFx1RDgzQ1tcXHVEREU2XFx1RERFOFxcdURERUFcXHVEREVDXFx1RERFRVxcdURERjNcXHVEREZBXXxcXHVEREZDXFx1RDgzQ1tcXHVEREVCXFx1RERGOF18XFx1RERGRFxcdUQ4M0NcXHVEREYwfFxcdURERkVcXHVEODNDW1xcdURERUFcXHVEREY5XXxcXHVEREZGXFx1RDgzQ1tcXHVEREU2XFx1RERGMlxcdURERkNdfFxcdURGRjNcXHVGRTBGPyg/OlxcdTIwMEQoPzpcXHUyNkE3XFx1RkUwRj98XFx1RDgzQ1xcdURGMDgpKT98XFx1REZGNCg/OlxcdTIwMERcXHUyNjIwXFx1RkUwRj98XFx1REI0MFxcdURDNjdcXHVEQjQwXFx1REM2MlxcdURCNDAoPzpcXHVEQzY1XFx1REI0MFxcdURDNkVcXHVEQjQwXFx1REM2N3xcXHVEQzczXFx1REI0MFxcdURDNjNcXHVEQjQwXFx1REM3NHxcXHVEQzc3XFx1REI0MFxcdURDNkNcXHVEQjQwXFx1REM3MylcXHVEQjQwXFx1REM3Rik/KXxcXHVEODNEKD86W1xcdURDM0ZcXHVEQ0ZEXFx1REQ0OVxcdURENEFcXHVERDZGXFx1REQ3MFxcdURENzNcXHVERDc2LVxcdURENzlcXHVERDg3XFx1REQ4QS1cXHVERDhEXFx1RERBNVxcdUREQThcXHVEREIxXFx1RERCMlxcdUREQkNcXHVEREMyLVxcdUREQzRcXHVEREQxLVxcdURERDNcXHVERERDLVxcdUREREVcXHVEREUxXFx1RERFM1xcdURERThcXHVEREVGXFx1RERGM1xcdURERkFcXHVERUNCXFx1REVDRC1cXHVERUNGXFx1REVFMC1cXHVERUU1XFx1REVFOVxcdURFRjBcXHVERUYzXVxcdUZFMEY/fFtcXHVEQzQyXFx1REM0M1xcdURDNDYtXFx1REM1MFxcdURDNjZcXHVEQzY3XFx1REM2Qi1cXHVEQzZEXFx1REM3MlxcdURDNzQtXFx1REM3NlxcdURDNzhcXHVEQzdDXFx1REM4M1xcdURDODVcXHVEQzhGXFx1REM5MVxcdURDQUFcXHVERDdBXFx1REQ5NVxcdUREOTZcXHVERTRDXFx1REU0RlxcdURFQzBcXHVERUNDXSg/OlxcdUQ4M0NbXFx1REZGQi1cXHVERkZGXSk/fFtcXHVEQzZFXFx1REM3MFxcdURDNzFcXHVEQzczXFx1REM3N1xcdURDODFcXHVEQzgyXFx1REM4NlxcdURDODdcXHVERTQ1LVxcdURFNDdcXHVERTRCXFx1REU0RFxcdURFNEVcXHVERUEzXFx1REVCNC1cXHVERUI2XSg/OlxcdUQ4M0NbXFx1REZGQi1cXHVERkZGXSk/KD86XFx1MjAwRFtcXHUyNjQwXFx1MjY0Ml1cXHVGRTBGPyk/fFtcXHVERDc0XFx1REQ5MF0oPzpcXHVGRTBGfFxcdUQ4M0NbXFx1REZGQi1cXHVERkZGXSk/fFtcXHVEQzAwLVxcdURDMDdcXHVEQzA5LVxcdURDMTRcXHVEQzE2LVxcdURDM0FcXHVEQzNDLVxcdURDM0VcXHVEQzQwXFx1REM0NFxcdURDNDVcXHVEQzUxLVxcdURDNjVcXHVEQzZBXFx1REM3OS1cXHVEQzdCXFx1REM3RC1cXHVEQzgwXFx1REM4NFxcdURDODgtXFx1REM4RVxcdURDOTBcXHVEQzkyLVxcdURDQTlcXHVEQ0FCLVxcdURDRkNcXHVEQ0ZGLVxcdUREM0RcXHVERDRCLVxcdURENEVcXHVERDUwLVxcdURENjdcXHVEREE0XFx1RERGQi1cXHVERTJEXFx1REUyRi1cXHVERTM0XFx1REUzNy1cXHVERTQ0XFx1REU0OC1cXHVERTRBXFx1REU4MC1cXHVERUEyXFx1REVBNC1cXHVERUIzXFx1REVCNy1cXHVERUJGXFx1REVDMS1cXHVERUM1XFx1REVEMC1cXHVERUQyXFx1REVENS1cXHVERUQ3XFx1REVERC1cXHVERURGXFx1REVFQlxcdURFRUNcXHVERUY0LVxcdURFRkNcXHVERkUwLVxcdURGRUJcXHVERkYwXXxcXHVEQzA4KD86XFx1MjAwRFxcdTJCMUIpP3xcXHVEQzE1KD86XFx1MjAwRFxcdUQ4M0VcXHVEREJBKT98XFx1REMzQig/OlxcdTIwMERcXHUyNzQ0XFx1RkUwRj8pP3xcXHVEQzQxXFx1RkUwRj8oPzpcXHUyMDBEXFx1RDgzRFxcdURERThcXHVGRTBGPyk/fFxcdURDNjgoPzpcXHUyMDBEKD86W1xcdTI2OTVcXHUyNjk2XFx1MjcwOF1cXHVGRTBGP3xcXHUyNzY0XFx1RkUwRj9cXHUyMDBEXFx1RDgzRCg/OlxcdURDOEJcXHUyMDBEXFx1RDgzRCk/XFx1REM2OHxcXHVEODNDW1xcdURGM0VcXHVERjczXFx1REY3Q1xcdURGOTNcXHVERkE0XFx1REZBOFxcdURGRUJcXHVERkVEXXxcXHVEODNEKD86W1xcdURDNjhcXHVEQzY5XVxcdTIwMERcXHVEODNEKD86XFx1REM2Nig/OlxcdTIwMERcXHVEODNEXFx1REM2Nik/fFxcdURDNjcoPzpcXHUyMDBEXFx1RDgzRFtcXHVEQzY2XFx1REM2N10pPyl8W1xcdURDQkJcXHVEQ0JDXFx1REQyN1xcdUREMkNcXHVERTgwXFx1REU5Ml18XFx1REM2Nig/OlxcdTIwMERcXHVEODNEXFx1REM2Nik/fFxcdURDNjcoPzpcXHUyMDBEXFx1RDgzRFtcXHVEQzY2XFx1REM2N10pPyl8XFx1RDgzRVtcXHVEREFGLVxcdUREQjNcXHVEREJDXFx1RERCRF0pfFxcdUQ4M0MoPzpcXHVERkZCKD86XFx1MjAwRCg/OltcXHUyNjk1XFx1MjY5NlxcdTI3MDhdXFx1RkUwRj98XFx1Mjc2NFxcdUZFMEY/XFx1MjAwRFxcdUQ4M0QoPzpcXHVEQzhCXFx1MjAwRFxcdUQ4M0QpP1xcdURDNjhcXHVEODNDW1xcdURGRkItXFx1REZGRl18XFx1RDgzQ1tcXHVERjNFXFx1REY3M1xcdURGN0NcXHVERjkzXFx1REZBNFxcdURGQThcXHVERkVCXFx1REZFRF18XFx1RDgzRFtcXHVEQ0JCXFx1RENCQ1xcdUREMjdcXHVERDJDXFx1REU4MFxcdURFOTJdfFxcdUQ4M0UoPzpbXFx1RERBRi1cXHVEREIzXFx1RERCQ1xcdUREQkRdfFxcdUREMURcXHUyMDBEXFx1RDgzRFxcdURDNjhcXHVEODNDW1xcdURGRkMtXFx1REZGRl0pKSk/fFxcdURGRkMoPzpcXHUyMDBEKD86W1xcdTI2OTVcXHUyNjk2XFx1MjcwOF1cXHVGRTBGP3xcXHUyNzY0XFx1RkUwRj9cXHUyMDBEXFx1RDgzRCg/OlxcdURDOEJcXHUyMDBEXFx1RDgzRCk/XFx1REM2OFxcdUQ4M0NbXFx1REZGQi1cXHVERkZGXXxcXHVEODNDW1xcdURGM0VcXHVERjczXFx1REY3Q1xcdURGOTNcXHVERkE0XFx1REZBOFxcdURGRUJcXHVERkVEXXxcXHVEODNEW1xcdURDQkJcXHVEQ0JDXFx1REQyN1xcdUREMkNcXHVERTgwXFx1REU5Ml18XFx1RDgzRSg/OltcXHVEREFGLVxcdUREQjNcXHVEREJDXFx1RERCRF18XFx1REQxRFxcdTIwMERcXHVEODNEXFx1REM2OFxcdUQ4M0NbXFx1REZGQlxcdURGRkQtXFx1REZGRl0pKSk/fFxcdURGRkQoPzpcXHUyMDBEKD86W1xcdTI2OTVcXHUyNjk2XFx1MjcwOF1cXHVGRTBGP3xcXHUyNzY0XFx1RkUwRj9cXHUyMDBEXFx1RDgzRCg/OlxcdURDOEJcXHUyMDBEXFx1RDgzRCk/XFx1REM2OFxcdUQ4M0NbXFx1REZGQi1cXHVERkZGXXxcXHVEODNDW1xcdURGM0VcXHVERjczXFx1REY3Q1xcdURGOTNcXHVERkE0XFx1REZBOFxcdURGRUJcXHVERkVEXXxcXHVEODNEW1xcdURDQkJcXHVEQ0JDXFx1REQyN1xcdUREMkNcXHVERTgwXFx1REU5Ml18XFx1RDgzRSg/OltcXHVEREFGLVxcdUREQjNcXHVEREJDXFx1RERCRF18XFx1REQxRFxcdTIwMERcXHVEODNEXFx1REM2OFxcdUQ4M0NbXFx1REZGQlxcdURGRkNcXHVERkZFXFx1REZGRl0pKSk/fFxcdURGRkUoPzpcXHUyMDBEKD86W1xcdTI2OTVcXHUyNjk2XFx1MjcwOF1cXHVGRTBGP3xcXHUyNzY0XFx1RkUwRj9cXHUyMDBEXFx1RDgzRCg/OlxcdURDOEJcXHUyMDBEXFx1RDgzRCk/XFx1REM2OFxcdUQ4M0NbXFx1REZGQi1cXHVERkZGXXxcXHVEODNDW1xcdURGM0VcXHVERjczXFx1REY3Q1xcdURGOTNcXHVERkE0XFx1REZBOFxcdURGRUJcXHVERkVEXXxcXHVEODNEW1xcdURDQkJcXHVEQ0JDXFx1REQyN1xcdUREMkNcXHVERTgwXFx1REU5Ml18XFx1RDgzRSg/OltcXHVEREFGLVxcdUREQjNcXHVEREJDXFx1RERCRF18XFx1REQxRFxcdTIwMERcXHVEODNEXFx1REM2OFxcdUQ4M0NbXFx1REZGQi1cXHVERkZEXFx1REZGRl0pKSk/fFxcdURGRkYoPzpcXHUyMDBEKD86W1xcdTI2OTVcXHUyNjk2XFx1MjcwOF1cXHVGRTBGP3xcXHUyNzY0XFx1RkUwRj9cXHUyMDBEXFx1RDgzRCg/OlxcdURDOEJcXHUyMDBEXFx1RDgzRCk/XFx1REM2OFxcdUQ4M0NbXFx1REZGQi1cXHVERkZGXXxcXHVEODNDW1xcdURGM0VcXHVERjczXFx1REY3Q1xcdURGOTNcXHVERkE0XFx1REZBOFxcdURGRUJcXHVERkVEXXxcXHVEODNEW1xcdURDQkJcXHVEQ0JDXFx1REQyN1xcdUREMkNcXHVERTgwXFx1REU5Ml18XFx1RDgzRSg/OltcXHVEREFGLVxcdUREQjNcXHVEREJDXFx1RERCRF18XFx1REQxRFxcdTIwMERcXHVEODNEXFx1REM2OFxcdUQ4M0NbXFx1REZGQi1cXHVERkZFXSkpKT8pKT98XFx1REM2OSg/OlxcdTIwMEQoPzpbXFx1MjY5NVxcdTI2OTZcXHUyNzA4XVxcdUZFMEY/fFxcdTI3NjRcXHVGRTBGP1xcdTIwMERcXHVEODNEKD86XFx1REM4QlxcdTIwMERcXHVEODNEKT9bXFx1REM2OFxcdURDNjldfFxcdUQ4M0NbXFx1REYzRVxcdURGNzNcXHVERjdDXFx1REY5M1xcdURGQTRcXHVERkE4XFx1REZFQlxcdURGRURdfFxcdUQ4M0QoPzpbXFx1RENCQlxcdURDQkNcXHVERDI3XFx1REQyQ1xcdURFODBcXHVERTkyXXxcXHVEQzY2KD86XFx1MjAwRFxcdUQ4M0RcXHVEQzY2KT98XFx1REM2Nyg/OlxcdTIwMERcXHVEODNEW1xcdURDNjZcXHVEQzY3XSk/fFxcdURDNjlcXHUyMDBEXFx1RDgzRCg/OlxcdURDNjYoPzpcXHUyMDBEXFx1RDgzRFxcdURDNjYpP3xcXHVEQzY3KD86XFx1MjAwRFxcdUQ4M0RbXFx1REM2NlxcdURDNjddKT8pKXxcXHVEODNFW1xcdUREQUYtXFx1RERCM1xcdUREQkNcXHVEREJEXSl8XFx1RDgzQyg/OlxcdURGRkIoPzpcXHUyMDBEKD86W1xcdTI2OTVcXHUyNjk2XFx1MjcwOF1cXHVGRTBGP3xcXHUyNzY0XFx1RkUwRj9cXHUyMDBEXFx1RDgzRCg/OltcXHVEQzY4XFx1REM2OV18XFx1REM4QlxcdTIwMERcXHVEODNEW1xcdURDNjhcXHVEQzY5XSlcXHVEODNDW1xcdURGRkItXFx1REZGRl18XFx1RDgzQ1tcXHVERjNFXFx1REY3M1xcdURGN0NcXHVERjkzXFx1REZBNFxcdURGQThcXHVERkVCXFx1REZFRF18XFx1RDgzRFtcXHVEQ0JCXFx1RENCQ1xcdUREMjdcXHVERDJDXFx1REU4MFxcdURFOTJdfFxcdUQ4M0UoPzpbXFx1RERBRi1cXHVEREIzXFx1RERCQ1xcdUREQkRdfFxcdUREMURcXHUyMDBEXFx1RDgzRFtcXHVEQzY4XFx1REM2OV1cXHVEODNDW1xcdURGRkMtXFx1REZGRl0pKSk/fFxcdURGRkMoPzpcXHUyMDBEKD86W1xcdTI2OTVcXHUyNjk2XFx1MjcwOF1cXHVGRTBGP3xcXHUyNzY0XFx1RkUwRj9cXHUyMDBEXFx1RDgzRCg/OltcXHVEQzY4XFx1REM2OV18XFx1REM4QlxcdTIwMERcXHVEODNEW1xcdURDNjhcXHVEQzY5XSlcXHVEODNDW1xcdURGRkItXFx1REZGRl18XFx1RDgzQ1tcXHVERjNFXFx1REY3M1xcdURGN0NcXHVERjkzXFx1REZBNFxcdURGQThcXHVERkVCXFx1REZFRF18XFx1RDgzRFtcXHVEQ0JCXFx1RENCQ1xcdUREMjdcXHVERDJDXFx1REU4MFxcdURFOTJdfFxcdUQ4M0UoPzpbXFx1RERBRi1cXHVEREIzXFx1RERCQ1xcdUREQkRdfFxcdUREMURcXHUyMDBEXFx1RDgzRFtcXHVEQzY4XFx1REM2OV1cXHVEODNDW1xcdURGRkJcXHVERkZELVxcdURGRkZdKSkpP3xcXHVERkZEKD86XFx1MjAwRCg/OltcXHUyNjk1XFx1MjY5NlxcdTI3MDhdXFx1RkUwRj98XFx1Mjc2NFxcdUZFMEY/XFx1MjAwRFxcdUQ4M0QoPzpbXFx1REM2OFxcdURDNjldfFxcdURDOEJcXHUyMDBEXFx1RDgzRFtcXHVEQzY4XFx1REM2OV0pXFx1RDgzQ1tcXHVERkZCLVxcdURGRkZdfFxcdUQ4M0NbXFx1REYzRVxcdURGNzNcXHVERjdDXFx1REY5M1xcdURGQTRcXHVERkE4XFx1REZFQlxcdURGRURdfFxcdUQ4M0RbXFx1RENCQlxcdURDQkNcXHVERDI3XFx1REQyQ1xcdURFODBcXHVERTkyXXxcXHVEODNFKD86W1xcdUREQUYtXFx1RERCM1xcdUREQkNcXHVEREJEXXxcXHVERDFEXFx1MjAwRFxcdUQ4M0RbXFx1REM2OFxcdURDNjldXFx1RDgzQ1tcXHVERkZCXFx1REZGQ1xcdURGRkVcXHVERkZGXSkpKT98XFx1REZGRSg/OlxcdTIwMEQoPzpbXFx1MjY5NVxcdTI2OTZcXHUyNzA4XVxcdUZFMEY/fFxcdTI3NjRcXHVGRTBGP1xcdTIwMERcXHVEODNEKD86W1xcdURDNjhcXHVEQzY5XXxcXHVEQzhCXFx1MjAwRFxcdUQ4M0RbXFx1REM2OFxcdURDNjldKVxcdUQ4M0NbXFx1REZGQi1cXHVERkZGXXxcXHVEODNDW1xcdURGM0VcXHVERjczXFx1REY3Q1xcdURGOTNcXHVERkE0XFx1REZBOFxcdURGRUJcXHVERkVEXXxcXHVEODNEW1xcdURDQkJcXHVEQ0JDXFx1REQyN1xcdUREMkNcXHVERTgwXFx1REU5Ml18XFx1RDgzRSg/OltcXHVEREFGLVxcdUREQjNcXHVEREJDXFx1RERCRF18XFx1REQxRFxcdTIwMERcXHVEODNEW1xcdURDNjhcXHVEQzY5XVxcdUQ4M0NbXFx1REZGQi1cXHVERkZEXFx1REZGRl0pKSk/fFxcdURGRkYoPzpcXHUyMDBEKD86W1xcdTI2OTVcXHUyNjk2XFx1MjcwOF1cXHVGRTBGP3xcXHUyNzY0XFx1RkUwRj9cXHUyMDBEXFx1RDgzRCg/OltcXHVEQzY4XFx1REM2OV18XFx1REM4QlxcdTIwMERcXHVEODNEW1xcdURDNjhcXHVEQzY5XSlcXHVEODNDW1xcdURGRkItXFx1REZGRl18XFx1RDgzQ1tcXHVERjNFXFx1REY3M1xcdURGN0NcXHVERjkzXFx1REZBNFxcdURGQThcXHVERkVCXFx1REZFRF18XFx1RDgzRFtcXHVEQ0JCXFx1RENCQ1xcdUREMjdcXHVERDJDXFx1REU4MFxcdURFOTJdfFxcdUQ4M0UoPzpbXFx1RERBRi1cXHVEREIzXFx1RERCQ1xcdUREQkRdfFxcdUREMURcXHUyMDBEXFx1RDgzRFtcXHVEQzY4XFx1REM2OV1cXHVEODNDW1xcdURGRkItXFx1REZGRV0pKSk/KSk/fFxcdURDNkYoPzpcXHUyMDBEW1xcdTI2NDBcXHUyNjQyXVxcdUZFMEY/KT98XFx1REQ3NSg/OlxcdUZFMEZ8XFx1RDgzQ1tcXHVERkZCLVxcdURGRkZdKT8oPzpcXHUyMDBEW1xcdTI2NDBcXHUyNjQyXVxcdUZFMEY/KT98XFx1REUyRSg/OlxcdTIwMERcXHVEODNEXFx1RENBOCk/fFxcdURFMzUoPzpcXHUyMDBEXFx1RDgzRFxcdURDQUIpP3xcXHVERTM2KD86XFx1MjAwRFxcdUQ4M0NcXHVERjJCXFx1RkUwRj8pPyl8XFx1RDgzRSg/OltcXHVERDBDXFx1REQwRlxcdUREMTgtXFx1REQxRlxcdUREMzAtXFx1REQzNFxcdUREMzZcXHVERDc3XFx1RERCNVxcdUREQjZcXHVEREJCXFx1REREMlxcdURERDNcXHVEREQ1XFx1REVDMy1cXHVERUM1XFx1REVGMFxcdURFRjItXFx1REVGNl0oPzpcXHVEODNDW1xcdURGRkItXFx1REZGRl0pP3xbXFx1REQyNlxcdUREMzVcXHVERDM3LVxcdUREMzlcXHVERDNEXFx1REQzRVxcdUREQjhcXHVEREI5XFx1RERDRC1cXHVERENGXFx1RERENFxcdURERDYtXFx1RERERF0oPzpcXHVEODNDW1xcdURGRkItXFx1REZGRl0pPyg/OlxcdTIwMERbXFx1MjY0MFxcdTI2NDJdXFx1RkUwRj8pP3xbXFx1RERERVxcdUREREZdKD86XFx1MjAwRFtcXHUyNjQwXFx1MjY0Ml1cXHVGRTBGPyk/fFtcXHVERDBEXFx1REQwRVxcdUREMTAtXFx1REQxN1xcdUREMjAtXFx1REQyNVxcdUREMjctXFx1REQyRlxcdUREM0FcXHVERDNGLVxcdURENDVcXHVERDQ3LVxcdURENzZcXHVERDc4LVxcdUREQjRcXHVEREI3XFx1RERCQVxcdUREQkMtXFx1RERDQ1xcdURERDBcXHVEREUwLVxcdURERkZcXHVERTcwLVxcdURFNzRcXHVERTc4LVxcdURFN0NcXHVERTgwLVxcdURFODZcXHVERTkwLVxcdURFQUNcXHVERUIwLVxcdURFQkFcXHVERUMwLVxcdURFQzJcXHVERUQwLVxcdURFRDlcXHVERUUwLVxcdURFRTddfFxcdUREM0MoPzpcXHUyMDBEW1xcdTI2NDBcXHUyNjQyXVxcdUZFMEY/fFxcdUQ4M0NbXFx1REZGQi1cXHVERkZGXSk/fFxcdURERDEoPzpcXHUyMDBEKD86W1xcdTI2OTVcXHUyNjk2XFx1MjcwOF1cXHVGRTBGP3xcXHVEODNDW1xcdURGM0VcXHVERjczXFx1REY3Q1xcdURGODRcXHVERjkzXFx1REZBNFxcdURGQThcXHVERkVCXFx1REZFRF18XFx1RDgzRFtcXHVEQ0JCXFx1RENCQ1xcdUREMjdcXHVERDJDXFx1REU4MFxcdURFOTJdfFxcdUQ4M0UoPzpbXFx1RERBRi1cXHVEREIzXFx1RERCQ1xcdUREQkRdfFxcdUREMURcXHUyMDBEXFx1RDgzRVxcdURERDEpKXxcXHVEODNDKD86XFx1REZGQig/OlxcdTIwMEQoPzpbXFx1MjY5NVxcdTI2OTZcXHUyNzA4XVxcdUZFMEY/fFxcdTI3NjRcXHVGRTBGP1xcdTIwMEQoPzpcXHVEODNEXFx1REM4QlxcdTIwMEQpP1xcdUQ4M0VcXHVEREQxXFx1RDgzQ1tcXHVERkZDLVxcdURGRkZdfFxcdUQ4M0NbXFx1REYzRVxcdURGNzNcXHVERjdDXFx1REY4NFxcdURGOTNcXHVERkE0XFx1REZBOFxcdURGRUJcXHVERkVEXXxcXHVEODNEW1xcdURDQkJcXHVEQ0JDXFx1REQyN1xcdUREMkNcXHVERTgwXFx1REU5Ml18XFx1RDgzRSg/OltcXHVEREFGLVxcdUREQjNcXHVEREJDXFx1RERCRF18XFx1REQxRFxcdTIwMERcXHVEODNFXFx1REREMVxcdUQ4M0NbXFx1REZGQi1cXHVERkZGXSkpKT98XFx1REZGQyg/OlxcdTIwMEQoPzpbXFx1MjY5NVxcdTI2OTZcXHUyNzA4XVxcdUZFMEY/fFxcdTI3NjRcXHVGRTBGP1xcdTIwMEQoPzpcXHVEODNEXFx1REM4QlxcdTIwMEQpP1xcdUQ4M0VcXHVEREQxXFx1RDgzQ1tcXHVERkZCXFx1REZGRC1cXHVERkZGXXxcXHVEODNDW1xcdURGM0VcXHVERjczXFx1REY3Q1xcdURGODRcXHVERjkzXFx1REZBNFxcdURGQThcXHVERkVCXFx1REZFRF18XFx1RDgzRFtcXHVEQ0JCXFx1RENCQ1xcdUREMjdcXHVERDJDXFx1REU4MFxcdURFOTJdfFxcdUQ4M0UoPzpbXFx1RERBRi1cXHVEREIzXFx1RERCQ1xcdUREQkRdfFxcdUREMURcXHUyMDBEXFx1RDgzRVxcdURERDFcXHVEODNDW1xcdURGRkItXFx1REZGRl0pKSk/fFxcdURGRkQoPzpcXHUyMDBEKD86W1xcdTI2OTVcXHUyNjk2XFx1MjcwOF1cXHVGRTBGP3xcXHUyNzY0XFx1RkUwRj9cXHUyMDBEKD86XFx1RDgzRFxcdURDOEJcXHUyMDBEKT9cXHVEODNFXFx1REREMVxcdUQ4M0NbXFx1REZGQlxcdURGRkNcXHVERkZFXFx1REZGRl18XFx1RDgzQ1tcXHVERjNFXFx1REY3M1xcdURGN0NcXHVERjg0XFx1REY5M1xcdURGQTRcXHVERkE4XFx1REZFQlxcdURGRURdfFxcdUQ4M0RbXFx1RENCQlxcdURDQkNcXHVERDI3XFx1REQyQ1xcdURFODBcXHVERTkyXXxcXHVEODNFKD86W1xcdUREQUYtXFx1RERCM1xcdUREQkNcXHVEREJEXXxcXHVERDFEXFx1MjAwRFxcdUQ4M0VcXHVEREQxXFx1RDgzQ1tcXHVERkZCLVxcdURGRkZdKSkpP3xcXHVERkZFKD86XFx1MjAwRCg/OltcXHUyNjk1XFx1MjY5NlxcdTI3MDhdXFx1RkUwRj98XFx1Mjc2NFxcdUZFMEY/XFx1MjAwRCg/OlxcdUQ4M0RcXHVEQzhCXFx1MjAwRCk/XFx1RDgzRVxcdURERDFcXHVEODNDW1xcdURGRkItXFx1REZGRFxcdURGRkZdfFxcdUQ4M0NbXFx1REYzRVxcdURGNzNcXHVERjdDXFx1REY4NFxcdURGOTNcXHVERkE0XFx1REZBOFxcdURGRUJcXHVERkVEXXxcXHVEODNEW1xcdURDQkJcXHVEQ0JDXFx1REQyN1xcdUREMkNcXHVERTgwXFx1REU5Ml18XFx1RDgzRSg/OltcXHVEREFGLVxcdUREQjNcXHVEREJDXFx1RERCRF18XFx1REQxRFxcdTIwMERcXHVEODNFXFx1REREMVxcdUQ4M0NbXFx1REZGQi1cXHVERkZGXSkpKT98XFx1REZGRig/OlxcdTIwMEQoPzpbXFx1MjY5NVxcdTI2OTZcXHUyNzA4XVxcdUZFMEY/fFxcdTI3NjRcXHVGRTBGP1xcdTIwMEQoPzpcXHVEODNEXFx1REM4QlxcdTIwMEQpP1xcdUQ4M0VcXHVEREQxXFx1RDgzQ1tcXHVERkZCLVxcdURGRkVdfFxcdUQ4M0NbXFx1REYzRVxcdURGNzNcXHVERjdDXFx1REY4NFxcdURGOTNcXHVERkE0XFx1REZBOFxcdURGRUJcXHVERkVEXXxcXHVEODNEW1xcdURDQkJcXHVEQ0JDXFx1REQyN1xcdUREMkNcXHVERTgwXFx1REU5Ml18XFx1RDgzRSg/OltcXHVEREFGLVxcdUREQjNcXHVEREJDXFx1RERCRF18XFx1REQxRFxcdTIwMERcXHVEODNFXFx1REREMVxcdUQ4M0NbXFx1REZGQi1cXHVERkZGXSkpKT8pKT98XFx1REVGMSg/OlxcdUQ4M0MoPzpcXHVERkZCKD86XFx1MjAwRFxcdUQ4M0VcXHVERUYyXFx1RDgzQ1tcXHVERkZDLVxcdURGRkZdKT98XFx1REZGQyg/OlxcdTIwMERcXHVEODNFXFx1REVGMlxcdUQ4M0NbXFx1REZGQlxcdURGRkQtXFx1REZGRl0pP3xcXHVERkZEKD86XFx1MjAwRFxcdUQ4M0VcXHVERUYyXFx1RDgzQ1tcXHVERkZCXFx1REZGQ1xcdURGRkVcXHVERkZGXSk/fFxcdURGRkUoPzpcXHUyMDBEXFx1RDgzRVxcdURFRjJcXHVEODNDW1xcdURGRkItXFx1REZGRFxcdURGRkZdKT98XFx1REZGRig/OlxcdTIwMERcXHVEODNFXFx1REVGMlxcdUQ4M0NbXFx1REZGQi1cXHVERkZFXSk/KSk/KSkvZztcbn07XG5cbi8qKiBOb3JtYWxpemUgYSBkdXJhdGlvbiB0byBhbGwgb2YgdGhlIHByb3BlciB1bml0cy4gKi9cclxuZnVuY3Rpb24gbm9ybWFsaXplRHVyYXRpb24oZHVyKSB7XHJcbiAgICBpZiAoZHVyID09PSB1bmRlZmluZWQgfHwgZHVyID09PSBudWxsKVxyXG4gICAgICAgIHJldHVybiBkdXI7XHJcbiAgICByZXR1cm4gZHVyLnNoaWZ0VG9BbGwoKS5ub3JtYWxpemUoKTtcclxufVxyXG4vKiogR2V0IHRoZSBcInRpdGxlXCIgZm9yIGEgZmlsZSwgYnkgc3RyaXBwaW5nIG90aGVyIHBhcnRzIG9mIHRoZSBwYXRoIGFzIHdlbGwgYXMgdGhlIGV4dGVuc2lvbi4gKi9cclxuZnVuY3Rpb24gZ2V0RmlsZVRpdGxlKHBhdGgpIHtcclxuICAgIGlmIChwYXRoLmluY2x1ZGVzKFwiL1wiKSlcclxuICAgICAgICBwYXRoID0gcGF0aC5zdWJzdHJpbmcocGF0aC5sYXN0SW5kZXhPZihcIi9cIikgKyAxKTtcclxuICAgIGlmIChwYXRoLmVuZHNXaXRoKFwiLm1kXCIpKVxyXG4gICAgICAgIHBhdGggPSBwYXRoLnN1YnN0cmluZygwLCBwYXRoLmxlbmd0aCAtIDMpO1xyXG4gICAgcmV0dXJuIHBhdGg7XHJcbn1cclxuLyoqIEEgcGFyc2ltbW9uIHBhcnNlciB3aGljaCBjYW5vbmljYWxpemVzIHZhcmlhYmxlIG5hbWVzIHdoaWxlIHByb3Blcmx5IHJlc3BlY3RpbmcgZW1vamkuICovXHJcbnBhcnNpbW1vbl91bWRfbWluLmV4cG9ydHMuYWx0KHBhcnNpbW1vbl91bWRfbWluLmV4cG9ydHMucmVnZXgobmV3IFJlZ0V4cChlbW9qaVJlZ2V4KCksIFwiXCIpKSwgcGFyc2ltbW9uX3VtZF9taW4uZXhwb3J0cy5yZWdleCgvWzAtOVxccHtMZXR0ZXJ9Xy1dKy91KS5tYXAoc3RyID0+IHN0ci50b0xvY2FsZUxvd2VyQ2FzZSgpKSwgcGFyc2ltbW9uX3VtZF9taW4uZXhwb3J0cy53aGl0ZXNwYWNlLm1hcChfID0+IFwiLVwiKSwgcGFyc2ltbW9uX3VtZF9taW4uZXhwb3J0cy5hbnkubWFwKF8gPT4gXCJcIikpXHJcbiAgICAubWFueSgpXHJcbiAgICAubWFwKHJlc3VsdCA9PiByZXN1bHQuam9pbihcIlwiKSk7XHJcbmNvbnN0IEhFQURFUl9DQU5PTklDQUxJWkVSID0gcGFyc2ltbW9uX3VtZF9taW4uZXhwb3J0cy5hbHQocGFyc2ltbW9uX3VtZF9taW4uZXhwb3J0cy5yZWdleChuZXcgUmVnRXhwKGVtb2ppUmVnZXgoKSwgXCJcIikpLCBwYXJzaW1tb25fdW1kX21pbi5leHBvcnRzLnJlZ2V4KC9bMC05XFxwe0xldHRlcn1fLV0rL3UpLCBwYXJzaW1tb25fdW1kX21pbi5leHBvcnRzLndoaXRlc3BhY2UubWFwKF8gPT4gXCIgXCIpLCBwYXJzaW1tb25fdW1kX21pbi5leHBvcnRzLmFueS5tYXAoXyA9PiBcIiBcIikpXHJcbiAgICAubWFueSgpXHJcbiAgICAubWFwKHJlc3VsdCA9PiB7XHJcbiAgICByZXR1cm4gcmVzdWx0LmpvaW4oXCJcIikuc3BsaXQoL1xccysvKS5qb2luKFwiIFwiKS50cmltKCk7XHJcbn0pO1xyXG4vKipcclxuICogTm9ybWFsaXplcyB0aGUgdGV4dCBpbiBhIGhlYWRlciB0byBiZSBzb21ldGhpbmcgdGhhdCBpcyBhY3R1YWxseSBsaW5rYWJsZSB0by4gVGhpcyBtaW1pY3NcclxuICogaG93IE9ic2lkaWFuIGRvZXMgaXQncyBub3JtYWxpemF0aW9uLCBjb2xsYXBzaW5nIHJlcGVhdGVkIHNwYWNlcyBhbmQgc3RyaXBwaW5nIG91dCBjb250cm9sIGNoYXJhY3RlcnMuXHJcbiAqL1xyXG5mdW5jdGlvbiBub3JtYWxpemVIZWFkZXJGb3JMaW5rKGhlYWRlcikge1xyXG4gICAgcmV0dXJuIEhFQURFUl9DQU5PTklDQUxJWkVSLnRyeVBhcnNlKGhlYWRlcik7XHJcbn1cclxuLyoqIFJlbmRlciBhIGR1cmF0aW9uIGluIGEgbWluaW1hbCBmb3JtYXQgdG8gc2F2ZSBzcGFjZS4gKi9cclxuZnVuY3Rpb24gcmVuZGVyTWluaW1hbER1cmF0aW9uKGR1cikge1xyXG4gICAgZHVyID0gbm9ybWFsaXplRHVyYXRpb24oZHVyKTtcclxuICAgIC8vIHRvSHVtYW4gb3V0cHV0cyB6ZXJvIHF1YW50aXRpZXMgZS5nLiBcIjAgc2Vjb25kc1wiXHJcbiAgICBkdXIgPSBEdXJhdGlvbi5mcm9tT2JqZWN0KE9iamVjdC5mcm9tRW50cmllcyhPYmplY3QuZW50cmllcyhkdXIudG9PYmplY3QoKSkuZmlsdGVyKChbLCBxdWFudGl0eV0pID0+IHF1YW50aXR5ID4gMCkpKTtcclxuICAgIHJldHVybiBkdXIudG9IdW1hbigpO1xyXG59XG5cbnZhciBWYWx1ZXM7XHJcbihmdW5jdGlvbiAoVmFsdWVzKSB7XHJcbiAgICAvKiogQ29udmVydCBhbiBhcmJpdHJhcnkgdmFsdWUgaW50byBhIHJlYXNvbmFibGUsIE1hcmtkb3duLWZyaWVuZGx5IHN0cmluZyBpZiBwb3NzaWJsZS4gKi9cclxuICAgIGZ1bmN0aW9uIHRvU3RyaW5nKGZpZWxkLCBzZXR0aW5nID0gREVGQVVMVF9RVUVSWV9TRVRUSU5HUywgcmVjdXJzaXZlID0gZmFsc2UpIHtcclxuICAgICAgICBsZXQgd3JhcHBlZCA9IHdyYXBWYWx1ZShmaWVsZCk7XHJcbiAgICAgICAgaWYgKCF3cmFwcGVkKVxyXG4gICAgICAgICAgICByZXR1cm4gc2V0dGluZy5yZW5kZXJOdWxsQXM7XHJcbiAgICAgICAgc3dpdGNoICh3cmFwcGVkLnR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSBcIm51bGxcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiBzZXR0aW5nLnJlbmRlck51bGxBcztcclxuICAgICAgICAgICAgY2FzZSBcInN0cmluZ1wiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHdyYXBwZWQudmFsdWU7XHJcbiAgICAgICAgICAgIGNhc2UgXCJudW1iZXJcIjpcclxuICAgICAgICAgICAgY2FzZSBcImJvb2xlYW5cIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiBcIlwiICsgd3JhcHBlZC52YWx1ZTtcclxuICAgICAgICAgICAgY2FzZSBcImh0bWxcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiB3cmFwcGVkLnZhbHVlLm91dGVySFRNTDtcclxuICAgICAgICAgICAgY2FzZSBcIndpZGdldFwiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHdyYXBwZWQudmFsdWUubWFya2Rvd24oKTtcclxuICAgICAgICAgICAgY2FzZSBcImxpbmtcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiB3cmFwcGVkLnZhbHVlLm1hcmtkb3duKCk7XHJcbiAgICAgICAgICAgIGNhc2UgXCJmdW5jdGlvblwiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiPGZ1bmN0aW9uPlwiO1xyXG4gICAgICAgICAgICBjYXNlIFwiYXJyYXlcIjpcclxuICAgICAgICAgICAgICAgIGxldCByZXN1bHQgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlY3Vyc2l2ZSlcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQgKz0gXCJbXCI7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgKz0gd3JhcHBlZC52YWx1ZS5tYXAoZiA9PiB0b1N0cmluZyhmLCBzZXR0aW5nLCB0cnVlKSkuam9pbihcIiwgXCIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlY3Vyc2l2ZSlcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQgKz0gXCJdXCI7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgICAgICBjYXNlIFwib2JqZWN0XCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFwieyBcIiArXHJcbiAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmVudHJpZXMod3JhcHBlZC52YWx1ZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLm1hcChlID0+IGVbMF0gKyBcIjogXCIgKyB0b1N0cmluZyhlWzFdLCBzZXR0aW5nLCB0cnVlKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmpvaW4oXCIsIFwiKSArXHJcbiAgICAgICAgICAgICAgICAgICAgXCIgfVwiKTtcclxuICAgICAgICAgICAgY2FzZSBcImRhdGVcIjpcclxuICAgICAgICAgICAgICAgIGlmICh3cmFwcGVkLnZhbHVlLnNlY29uZCA9PSAwICYmIHdyYXBwZWQudmFsdWUuaG91ciA9PSAwICYmIHdyYXBwZWQudmFsdWUubWludXRlID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gd3JhcHBlZC52YWx1ZS50b0Zvcm1hdChzZXR0aW5nLmRlZmF1bHREYXRlRm9ybWF0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiB3cmFwcGVkLnZhbHVlLnRvRm9ybWF0KHNldHRpbmcuZGVmYXVsdERhdGVUaW1lRm9ybWF0KTtcclxuICAgICAgICAgICAgY2FzZSBcImR1cmF0aW9uXCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVuZGVyTWluaW1hbER1cmF0aW9uKHdyYXBwZWQudmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFZhbHVlcy50b1N0cmluZyA9IHRvU3RyaW5nO1xyXG4gICAgLyoqIFdyYXAgYSBsaXRlcmFsIHZhbHVlIHNvIHlvdSBjYW4gc3dpdGNoIG9uIGl0IGVhc2lseS4gKi9cclxuICAgIGZ1bmN0aW9uIHdyYXBWYWx1ZSh2YWwpIHtcclxuICAgICAgICBpZiAoaXNOdWxsKHZhbCkpXHJcbiAgICAgICAgICAgIHJldHVybiB7IHR5cGU6IFwibnVsbFwiLCB2YWx1ZTogdmFsIH07XHJcbiAgICAgICAgZWxzZSBpZiAoaXNOdW1iZXIodmFsKSlcclxuICAgICAgICAgICAgcmV0dXJuIHsgdHlwZTogXCJudW1iZXJcIiwgdmFsdWU6IHZhbCB9O1xyXG4gICAgICAgIGVsc2UgaWYgKGlzU3RyaW5nKHZhbCkpXHJcbiAgICAgICAgICAgIHJldHVybiB7IHR5cGU6IFwic3RyaW5nXCIsIHZhbHVlOiB2YWwgfTtcclxuICAgICAgICBlbHNlIGlmIChpc0Jvb2xlYW4odmFsKSlcclxuICAgICAgICAgICAgcmV0dXJuIHsgdHlwZTogXCJib29sZWFuXCIsIHZhbHVlOiB2YWwgfTtcclxuICAgICAgICBlbHNlIGlmIChpc0R1cmF0aW9uKHZhbCkpXHJcbiAgICAgICAgICAgIHJldHVybiB7IHR5cGU6IFwiZHVyYXRpb25cIiwgdmFsdWU6IHZhbCB9O1xyXG4gICAgICAgIGVsc2UgaWYgKGlzRGF0ZSh2YWwpKVxyXG4gICAgICAgICAgICByZXR1cm4geyB0eXBlOiBcImRhdGVcIiwgdmFsdWU6IHZhbCB9O1xyXG4gICAgICAgIGVsc2UgaWYgKGlzV2lkZ2V0KHZhbCkpXHJcbiAgICAgICAgICAgIHJldHVybiB7IHR5cGU6IFwid2lkZ2V0XCIsIHZhbHVlOiB2YWwgfTtcclxuICAgICAgICBlbHNlIGlmIChpc0FycmF5KHZhbCkpXHJcbiAgICAgICAgICAgIHJldHVybiB7IHR5cGU6IFwiYXJyYXlcIiwgdmFsdWU6IHZhbCB9O1xyXG4gICAgICAgIGVsc2UgaWYgKGlzTGluayh2YWwpKVxyXG4gICAgICAgICAgICByZXR1cm4geyB0eXBlOiBcImxpbmtcIiwgdmFsdWU6IHZhbCB9O1xyXG4gICAgICAgIGVsc2UgaWYgKGlzRnVuY3Rpb24odmFsKSlcclxuICAgICAgICAgICAgcmV0dXJuIHsgdHlwZTogXCJmdW5jdGlvblwiLCB2YWx1ZTogdmFsIH07XHJcbiAgICAgICAgZWxzZSBpZiAoaXNIdG1sKHZhbCkpXHJcbiAgICAgICAgICAgIHJldHVybiB7IHR5cGU6IFwiaHRtbFwiLCB2YWx1ZTogdmFsIH07XHJcbiAgICAgICAgZWxzZSBpZiAoaXNPYmplY3QodmFsKSlcclxuICAgICAgICAgICAgcmV0dXJuIHsgdHlwZTogXCJvYmplY3RcIiwgdmFsdWU6IHZhbCB9O1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIH1cclxuICAgIFZhbHVlcy53cmFwVmFsdWUgPSB3cmFwVmFsdWU7XHJcbiAgICAvKiogUmVjdXJzaXZlbHkgbWFwIGNvbXBsZXggb2JqZWN0cyBhdCB0aGUgbGVhdmVzLiAqL1xyXG4gICAgZnVuY3Rpb24gbWFwTGVhdmVzKHZhbCwgZnVuYykge1xyXG4gICAgICAgIGlmIChpc09iamVjdCh2YWwpKSB7XHJcbiAgICAgICAgICAgIGxldCByZXN1bHQgPSB7fTtcclxuICAgICAgICAgICAgZm9yIChsZXQgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKHZhbCkpXHJcbiAgICAgICAgICAgICAgICByZXN1bHRba2V5XSA9IG1hcExlYXZlcyh2YWx1ZSwgZnVuYyk7XHJcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGlzQXJyYXkodmFsKSkge1xyXG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gW107XHJcbiAgICAgICAgICAgIGZvciAobGV0IHZhbHVlIG9mIHZhbClcclxuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKG1hcExlYXZlcyh2YWx1ZSwgZnVuYykpO1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZ1bmModmFsKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBWYWx1ZXMubWFwTGVhdmVzID0gbWFwTGVhdmVzO1xyXG4gICAgLyoqIENvbXBhcmUgdHdvIGFyYml0cmFyeSBKYXZhU2NyaXB0IHZhbHVlcy4gUHJvZHVjZXMgYSB0b3RhbCBvcmRlcmluZyBvdmVyIEFOWSBwb3NzaWJsZSBkYXRhdmlldyB2YWx1ZS4gKi9cclxuICAgIGZ1bmN0aW9uIGNvbXBhcmVWYWx1ZSh2YWwxLCB2YWwyLCBsaW5rTm9ybWFsaXplcikge1xyXG4gICAgICAgIHZhciBfYSwgX2I7XHJcbiAgICAgICAgLy8gSGFuZGxlIHVuZGVmaW5lZC9udWxscyBmaXJzdC5cclxuICAgICAgICBpZiAodmFsMSA9PT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICB2YWwxID0gbnVsbDtcclxuICAgICAgICBpZiAodmFsMiA9PT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICB2YWwyID0gbnVsbDtcclxuICAgICAgICBpZiAodmFsMSA9PT0gbnVsbCAmJiB2YWwyID09PSBudWxsKVxyXG4gICAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICBlbHNlIGlmICh2YWwxID09PSBudWxsKVxyXG4gICAgICAgICAgICByZXR1cm4gLTE7XHJcbiAgICAgICAgZWxzZSBpZiAodmFsMiA9PT0gbnVsbClcclxuICAgICAgICAgICAgcmV0dXJuIDE7XHJcbiAgICAgICAgLy8gQSBub24tbnVsbCB2YWx1ZSBub3cgd2hpY2ggd2UgY2FuIHdyYXAgJiBjb21wYXJlIG9uLlxyXG4gICAgICAgIGxldCB3cmFwMSA9IHdyYXBWYWx1ZSh2YWwxKTtcclxuICAgICAgICBsZXQgd3JhcDIgPSB3cmFwVmFsdWUodmFsMik7XHJcbiAgICAgICAgaWYgKHdyYXAxID09PSB1bmRlZmluZWQgJiYgd3JhcDIgPT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgZWxzZSBpZiAod3JhcDEgPT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgICAgIGVsc2UgaWYgKHdyYXAyID09PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgIHJldHVybiAxO1xyXG4gICAgICAgIC8vIFNob3J0LWNpcmN1aXQgb24gZGlmZmVyZW50IHR5cGVzIG9yIG9uIHJlZmVyZW5jZSBlcXVhbGl0eS5cclxuICAgICAgICBpZiAod3JhcDEudHlwZSAhPSB3cmFwMi50eXBlKVxyXG4gICAgICAgICAgICByZXR1cm4gd3JhcDEudHlwZS5sb2NhbGVDb21wYXJlKHdyYXAyLnR5cGUpO1xyXG4gICAgICAgIGlmICh3cmFwMS52YWx1ZSA9PT0gd3JhcDIudmFsdWUpXHJcbiAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgIHN3aXRjaCAod3JhcDEudHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwic3RyaW5nXCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gd3JhcDEudmFsdWUubG9jYWxlQ29tcGFyZSh3cmFwMi52YWx1ZSk7XHJcbiAgICAgICAgICAgIGNhc2UgXCJudW1iZXJcIjpcclxuICAgICAgICAgICAgICAgIGlmICh3cmFwMS52YWx1ZSA8IHdyYXAyLnZhbHVlKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAtMTtcclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHdyYXAxLnZhbHVlID09IHdyYXAyLnZhbHVlKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDE7XHJcbiAgICAgICAgICAgIGNhc2UgXCJudWxsXCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICAgICAgY2FzZSBcImJvb2xlYW5cIjpcclxuICAgICAgICAgICAgICAgIGlmICh3cmFwMS52YWx1ZSA9PSB3cmFwMi52YWx1ZSlcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gd3JhcDEudmFsdWUgPyAxIDogLTE7XHJcbiAgICAgICAgICAgIGNhc2UgXCJsaW5rXCI6XHJcbiAgICAgICAgICAgICAgICBsZXQgbGluazEgPSB3cmFwMS52YWx1ZTtcclxuICAgICAgICAgICAgICAgIGxldCBsaW5rMiA9IHdyYXAyLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgbGV0IG5vcm1hbGl6ZSA9IGxpbmtOb3JtYWxpemVyICE9PSBudWxsICYmIGxpbmtOb3JtYWxpemVyICE9PSB2b2lkIDAgPyBsaW5rTm9ybWFsaXplciA6ICgoeCkgPT4geCk7XHJcbiAgICAgICAgICAgICAgICAvLyBXZSBjYW4ndCBjb21wYXJlIGJ5IGZpbGUgbmFtZSBvciBkaXNwbGF5LCBzaW5jZSB0aGF0IHdvdWxkIGJyZWFrIGxpbmsgZXF1YWxpdHkuIENvbXBhcmUgYnkgcGF0aC5cclxuICAgICAgICAgICAgICAgIGxldCBwYXRoQ29tcGFyZSA9IG5vcm1hbGl6ZShsaW5rMS5wYXRoKS5sb2NhbGVDb21wYXJlKG5vcm1hbGl6ZShsaW5rMi5wYXRoKSk7XHJcbiAgICAgICAgICAgICAgICBpZiAocGF0aENvbXBhcmUgIT0gMClcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcGF0aENvbXBhcmU7XHJcbiAgICAgICAgICAgICAgICAvLyBUaGVuIGNvbXBhcmUgYnkgdHlwZS5cclxuICAgICAgICAgICAgICAgIGxldCB0eXBlQ29tcGFyZSA9IGxpbmsxLnR5cGUubG9jYWxlQ29tcGFyZShsaW5rMi50eXBlKTtcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlQ29tcGFyZSAhPSAwKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0eXBlQ29tcGFyZTtcclxuICAgICAgICAgICAgICAgIC8vIFRoZW4gY29tcGFyZSBieSBzdWJwYXRoIGV4aXN0ZW5jZS5cclxuICAgICAgICAgICAgICAgIGlmIChsaW5rMS5zdWJwYXRoICYmICFsaW5rMi5zdWJwYXRoKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAxO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFsaW5rMS5zdWJwYXRoICYmIGxpbmsyLnN1YnBhdGgpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFsaW5rMS5zdWJwYXRoICYmICFsaW5rMi5zdWJwYXRoKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgICAgICAgICAgLy8gU2luY2UgYm90aCBoYXZlIGEgc3VicGF0aCwgY29tcGFyZSBieSBzdWJwYXRoLlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuICgoX2EgPSBsaW5rMS5zdWJwYXRoKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiBcIlwiKS5sb2NhbGVDb21wYXJlKChfYiA9IGxpbmsyLnN1YnBhdGgpICE9PSBudWxsICYmIF9iICE9PSB2b2lkIDAgPyBfYiA6IFwiXCIpO1xyXG4gICAgICAgICAgICBjYXNlIFwiZGF0ZVwiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHdyYXAxLnZhbHVlIDwgd3JhcDIudmFsdWVcclxuICAgICAgICAgICAgICAgICAgICA/IC0xXHJcbiAgICAgICAgICAgICAgICAgICAgOiB3cmFwMS52YWx1ZS5lcXVhbHMod3JhcDIudmFsdWUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IDE7XHJcbiAgICAgICAgICAgIGNhc2UgXCJkdXJhdGlvblwiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHdyYXAxLnZhbHVlIDwgd3JhcDIudmFsdWVcclxuICAgICAgICAgICAgICAgICAgICA/IC0xXHJcbiAgICAgICAgICAgICAgICAgICAgOiB3cmFwMS52YWx1ZS5lcXVhbHMod3JhcDIudmFsdWUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IDE7XHJcbiAgICAgICAgICAgIGNhc2UgXCJhcnJheVwiOlxyXG4gICAgICAgICAgICAgICAgbGV0IGYxID0gd3JhcDEudmFsdWU7XHJcbiAgICAgICAgICAgICAgICBsZXQgZjIgPSB3cmFwMi52YWx1ZTtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBNYXRoLm1pbihmMS5sZW5ndGgsIGYyLmxlbmd0aCk7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgY29tcCA9IGNvbXBhcmVWYWx1ZShmMVtpbmRleF0sIGYyW2luZGV4XSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbXAgIT0gMClcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNvbXA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZjEubGVuZ3RoIC0gZjIubGVuZ3RoO1xyXG4gICAgICAgICAgICBjYXNlIFwib2JqZWN0XCI6XHJcbiAgICAgICAgICAgICAgICBsZXQgbzEgPSB3cmFwMS52YWx1ZTtcclxuICAgICAgICAgICAgICAgIGxldCBvMiA9IHdyYXAyLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgbGV0IGsxID0gQXJyYXkuZnJvbShPYmplY3Qua2V5cyhvMSkpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGsyID0gQXJyYXkuZnJvbShPYmplY3Qua2V5cyhvMikpO1xyXG4gICAgICAgICAgICAgICAgazEuc29ydCgpO1xyXG4gICAgICAgICAgICAgICAgazIuc29ydCgpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGtleUNvbXBhcmUgPSBjb21wYXJlVmFsdWUoazEsIGsyKTtcclxuICAgICAgICAgICAgICAgIGlmIChrZXlDb21wYXJlICE9IDApXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGtleUNvbXBhcmU7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBrZXkgb2YgazEpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgY29tcCA9IGNvbXBhcmVWYWx1ZShvMVtrZXldLCBvMltrZXldKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY29tcCAhPSAwKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY29tcDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgICAgICBjYXNlIFwid2lkZ2V0XCI6XHJcbiAgICAgICAgICAgIGNhc2UgXCJodG1sXCI6XHJcbiAgICAgICAgICAgIGNhc2UgXCJmdW5jdGlvblwiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgVmFsdWVzLmNvbXBhcmVWYWx1ZSA9IGNvbXBhcmVWYWx1ZTtcclxuICAgIC8qKiBGaW5kIHRoZSBjb3JyZXNwb25kaW5nIERhdGF2ZWl3IHR5cGUgZm9yIGFuIGFyYml0cmFyeSB2YWx1ZS4gKi9cclxuICAgIGZ1bmN0aW9uIHR5cGVPZih2YWwpIHtcclxuICAgICAgICB2YXIgX2E7XHJcbiAgICAgICAgcmV0dXJuIChfYSA9IHdyYXBWYWx1ZSh2YWwpKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EudHlwZTtcclxuICAgIH1cclxuICAgIFZhbHVlcy50eXBlT2YgPSB0eXBlT2Y7XHJcbiAgICAvKiogRGV0ZXJtaW5lIGlmIHRoZSBnaXZlbiB2YWx1ZSBpcyBcInRydXRoeVwiIChpLmUuLCBpcyBub24tbnVsbCBhbmQgaGFzIGRhdGEgaW4gaXQpLiAqL1xyXG4gICAgZnVuY3Rpb24gaXNUcnV0aHkoZmllbGQpIHtcclxuICAgICAgICBsZXQgd3JhcHBlZCA9IHdyYXBWYWx1ZShmaWVsZCk7XHJcbiAgICAgICAgaWYgKCF3cmFwcGVkKVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgc3dpdGNoICh3cmFwcGVkLnR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSBcIm51bWJlclwiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHdyYXBwZWQudmFsdWUgIT0gMDtcclxuICAgICAgICAgICAgY2FzZSBcInN0cmluZ1wiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHdyYXBwZWQudmFsdWUubGVuZ3RoID4gMDtcclxuICAgICAgICAgICAgY2FzZSBcImJvb2xlYW5cIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiB3cmFwcGVkLnZhbHVlO1xyXG4gICAgICAgICAgICBjYXNlIFwibGlua1wiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuICEhd3JhcHBlZC52YWx1ZS5wYXRoO1xyXG4gICAgICAgICAgICBjYXNlIFwiZGF0ZVwiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHdyYXBwZWQudmFsdWUudG9NaWxsaXMoKSAhPSAwO1xyXG4gICAgICAgICAgICBjYXNlIFwiZHVyYXRpb25cIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiB3cmFwcGVkLnZhbHVlLmFzKFwic2Vjb25kc1wiKSAhPSAwO1xyXG4gICAgICAgICAgICBjYXNlIFwib2JqZWN0XCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gT2JqZWN0LmtleXMod3JhcHBlZC52YWx1ZSkubGVuZ3RoID4gMDtcclxuICAgICAgICAgICAgY2FzZSBcImFycmF5XCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gd3JhcHBlZC52YWx1ZS5sZW5ndGggPiAwO1xyXG4gICAgICAgICAgICBjYXNlIFwibnVsbFwiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICBjYXNlIFwiaHRtbFwiOlxyXG4gICAgICAgICAgICBjYXNlIFwid2lkZ2V0XCI6XHJcbiAgICAgICAgICAgIGNhc2UgXCJmdW5jdGlvblwiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgVmFsdWVzLmlzVHJ1dGh5ID0gaXNUcnV0aHk7XHJcbiAgICAvKiogRGVlcCBjb3B5IGEgZmllbGQuICovXHJcbiAgICBmdW5jdGlvbiBkZWVwQ29weShmaWVsZCkge1xyXG4gICAgICAgIGlmIChmaWVsZCA9PT0gbnVsbCB8fCBmaWVsZCA9PT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICByZXR1cm4gZmllbGQ7XHJcbiAgICAgICAgaWYgKFZhbHVlcy5pc0FycmF5KGZpZWxkKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gW10uY29uY2F0KGZpZWxkLm1hcCh2ID0+IGRlZXBDb3B5KHYpKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKFZhbHVlcy5pc09iamVjdChmaWVsZCkpIHtcclxuICAgICAgICAgICAgbGV0IHJlc3VsdCA9IHt9O1xyXG4gICAgICAgICAgICBmb3IgKGxldCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMoZmllbGQpKVxyXG4gICAgICAgICAgICAgICAgcmVzdWx0W2tleV0gPSBkZWVwQ29weSh2YWx1ZSk7XHJcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gZmllbGQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgVmFsdWVzLmRlZXBDb3B5ID0gZGVlcENvcHk7XHJcbiAgICBmdW5jdGlvbiBpc1N0cmluZyh2YWwpIHtcclxuICAgICAgICByZXR1cm4gdHlwZW9mIHZhbCA9PSBcInN0cmluZ1wiO1xyXG4gICAgfVxyXG4gICAgVmFsdWVzLmlzU3RyaW5nID0gaXNTdHJpbmc7XHJcbiAgICBmdW5jdGlvbiBpc051bWJlcih2YWwpIHtcclxuICAgICAgICByZXR1cm4gdHlwZW9mIHZhbCA9PSBcIm51bWJlclwiO1xyXG4gICAgfVxyXG4gICAgVmFsdWVzLmlzTnVtYmVyID0gaXNOdW1iZXI7XHJcbiAgICBmdW5jdGlvbiBpc0RhdGUodmFsKSB7XHJcbiAgICAgICAgcmV0dXJuIHZhbCBpbnN0YW5jZW9mIERhdGVUaW1lO1xyXG4gICAgfVxyXG4gICAgVmFsdWVzLmlzRGF0ZSA9IGlzRGF0ZTtcclxuICAgIGZ1bmN0aW9uIGlzRHVyYXRpb24odmFsKSB7XHJcbiAgICAgICAgcmV0dXJuIHZhbCBpbnN0YW5jZW9mIER1cmF0aW9uO1xyXG4gICAgfVxyXG4gICAgVmFsdWVzLmlzRHVyYXRpb24gPSBpc0R1cmF0aW9uO1xyXG4gICAgZnVuY3Rpb24gaXNOdWxsKHZhbCkge1xyXG4gICAgICAgIHJldHVybiB2YWwgPT09IG51bGwgfHwgdmFsID09PSB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbiAgICBWYWx1ZXMuaXNOdWxsID0gaXNOdWxsO1xyXG4gICAgZnVuY3Rpb24gaXNBcnJheSh2YWwpIHtcclxuICAgICAgICByZXR1cm4gQXJyYXkuaXNBcnJheSh2YWwpO1xyXG4gICAgfVxyXG4gICAgVmFsdWVzLmlzQXJyYXkgPSBpc0FycmF5O1xyXG4gICAgZnVuY3Rpb24gaXNCb29sZWFuKHZhbCkge1xyXG4gICAgICAgIHJldHVybiB0eXBlb2YgdmFsID09PSBcImJvb2xlYW5cIjtcclxuICAgIH1cclxuICAgIFZhbHVlcy5pc0Jvb2xlYW4gPSBpc0Jvb2xlYW47XHJcbiAgICBmdW5jdGlvbiBpc0xpbmsodmFsKSB7XHJcbiAgICAgICAgcmV0dXJuIHZhbCBpbnN0YW5jZW9mIExpbms7XHJcbiAgICB9XHJcbiAgICBWYWx1ZXMuaXNMaW5rID0gaXNMaW5rO1xyXG4gICAgZnVuY3Rpb24gaXNXaWRnZXQodmFsKSB7XHJcbiAgICAgICAgcmV0dXJuIHZhbCBpbnN0YW5jZW9mIFdpZGdldDtcclxuICAgIH1cclxuICAgIFZhbHVlcy5pc1dpZGdldCA9IGlzV2lkZ2V0O1xyXG4gICAgZnVuY3Rpb24gaXNIdG1sKHZhbCkge1xyXG4gICAgICAgIGlmICh0eXBlb2YgSFRNTEVsZW1lbnQgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHZhbCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFZhbHVlcy5pc0h0bWwgPSBpc0h0bWw7XHJcbiAgICAvKiogQ2hlY2tzIGlmIHRoZSBnaXZlbiB2YWx1ZSBpcyBhbiBvYmplY3QgKGFuZCBub3QgYW55IG90aGVyIGRhdGF2aWV3LXJlY29nbml6ZWQgb2JqZWN0LWxpa2UgdHlwZSkuICovXHJcbiAgICBmdW5jdGlvbiBpc09iamVjdCh2YWwpIHtcclxuICAgICAgICByZXR1cm4gKHR5cGVvZiB2YWwgPT0gXCJvYmplY3RcIiAmJlxyXG4gICAgICAgICAgICAhaXNIdG1sKHZhbCkgJiZcclxuICAgICAgICAgICAgIWlzV2lkZ2V0KHZhbCkgJiZcclxuICAgICAgICAgICAgIWlzQXJyYXkodmFsKSAmJlxyXG4gICAgICAgICAgICAhaXNEdXJhdGlvbih2YWwpICYmXHJcbiAgICAgICAgICAgICFpc0RhdGUodmFsKSAmJlxyXG4gICAgICAgICAgICAhaXNMaW5rKHZhbCkgJiZcclxuICAgICAgICAgICAgdmFsICE9PSB1bmRlZmluZWQgJiZcclxuICAgICAgICAgICAgIWlzTnVsbCh2YWwpKTtcclxuICAgIH1cclxuICAgIFZhbHVlcy5pc09iamVjdCA9IGlzT2JqZWN0O1xyXG4gICAgZnVuY3Rpb24gaXNGdW5jdGlvbih2YWwpIHtcclxuICAgICAgICByZXR1cm4gdHlwZW9mIHZhbCA9PSBcImZ1bmN0aW9uXCI7XHJcbiAgICB9XHJcbiAgICBWYWx1ZXMuaXNGdW5jdGlvbiA9IGlzRnVuY3Rpb247XHJcbn0pKFZhbHVlcyB8fCAoVmFsdWVzID0ge30pKTtcclxuLy8vLy8vLy8vLy8vLy8vXHJcbi8vIEdyb3VwaW5ncyAvL1xyXG4vLy8vLy8vLy8vLy8vLy9cclxudmFyIEdyb3VwaW5ncztcclxuKGZ1bmN0aW9uIChHcm91cGluZ3MpIHtcclxuICAgIC8qKiBEZXRlcm1pbmVzIGlmIHRoZSBnaXZlbiBncm91cCBlbnRyeSBpcyBhIHN0YW5kYWxvbmUgdmFsdWUsIG9yIGEgZ3JvdXBpbmcgb2Ygc3ViLWVudHJpZXMuICovXHJcbiAgICBmdW5jdGlvbiBpc0VsZW1lbnRHcm91cChlbnRyeSkge1xyXG4gICAgICAgIHJldHVybiBWYWx1ZXMuaXNPYmplY3QoZW50cnkpICYmIE9iamVjdC5rZXlzKGVudHJ5KS5sZW5ndGggPT0gMiAmJiBcImtleVwiIGluIGVudHJ5ICYmIFwicm93c1wiIGluIGVudHJ5O1xyXG4gICAgfVxyXG4gICAgR3JvdXBpbmdzLmlzRWxlbWVudEdyb3VwID0gaXNFbGVtZW50R3JvdXA7XHJcbiAgICAvKiogRGV0ZXJtaW5lcyBpZiB0aGUgZ2l2ZW4gYXJyYXkgaXMgYSBncm91cGluZyBhcnJheS4gKi9cclxuICAgIGZ1bmN0aW9uIGlzR3JvdXBpbmcoZW50cnkpIHtcclxuICAgICAgICBmb3IgKGxldCBlbGVtZW50IG9mIGVudHJ5KVxyXG4gICAgICAgICAgICBpZiAoIWlzRWxlbWVudEdyb3VwKGVsZW1lbnQpKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgR3JvdXBpbmdzLmlzR3JvdXBpbmcgPSBpc0dyb3VwaW5nO1xyXG4gICAgLyoqIENvdW50IHRoZSB0b3RhbCBudW1iZXIgb2YgZWxlbWVudHMgaW4gYSByZWN1cnNpdmUgZ3JvdXBpbmcuICovXHJcbiAgICBmdW5jdGlvbiBjb3VudChlbGVtZW50cykge1xyXG4gICAgICAgIGlmIChpc0dyb3VwaW5nKGVsZW1lbnRzKSkge1xyXG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gMDtcclxuICAgICAgICAgICAgZm9yIChsZXQgc3ViZ3JvdXAgb2YgZWxlbWVudHMpXHJcbiAgICAgICAgICAgICAgICByZXN1bHQgKz0gY291bnQoc3ViZ3JvdXAucm93cyk7XHJcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gZWxlbWVudHMubGVuZ3RoO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIEdyb3VwaW5ncy5jb3VudCA9IGNvdW50O1xyXG59KShHcm91cGluZ3MgfHwgKEdyb3VwaW5ncyA9IHt9KSk7XHJcbi8vLy8vLy8vLy9cclxuLy8gTElOSyAvL1xyXG4vLy8vLy8vLy8vXHJcbi8qKiBUaGUgT2JzaWRpYW4gJ2xpbmsnLCB1c2VkIGZvciB1bmlxdWVseSBkZXNjcmliaW5nIGEgZmlsZSwgaGVhZGVyLCBvciBibG9jay4gKi9cclxuY2xhc3MgTGluayB7XHJcbiAgICBjb25zdHJ1Y3RvcihmaWVsZHMpIHtcclxuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIGZpZWxkcyk7XHJcbiAgICB9XHJcbiAgICAvKiogQ3JlYXRlIGEgbGluayB0byBhIHNwZWNpZmljIGZpbGUuICovXHJcbiAgICBzdGF0aWMgZmlsZShwYXRoLCBlbWJlZCA9IGZhbHNlLCBkaXNwbGF5KSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBMaW5rKHtcclxuICAgICAgICAgICAgcGF0aCxcclxuICAgICAgICAgICAgZW1iZWQsXHJcbiAgICAgICAgICAgIGRpc3BsYXksXHJcbiAgICAgICAgICAgIHN1YnBhdGg6IHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgdHlwZTogXCJmaWxlXCIsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgaW5mZXIobGlua3BhdGgsIGVtYmVkID0gZmFsc2UsIGRpc3BsYXkpIHtcclxuICAgICAgICBpZiAobGlua3BhdGguaW5jbHVkZXMoXCIjXlwiKSkge1xyXG4gICAgICAgICAgICBsZXQgc3BsaXQgPSBsaW5rcGF0aC5zcGxpdChcIiNeXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gTGluay5ibG9jayhzcGxpdFswXSwgc3BsaXRbMV0sIGVtYmVkLCBkaXNwbGF5KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAobGlua3BhdGguaW5jbHVkZXMoXCIjXCIpKSB7XHJcbiAgICAgICAgICAgIGxldCBzcGxpdCA9IGxpbmtwYXRoLnNwbGl0KFwiI1wiKTtcclxuICAgICAgICAgICAgcmV0dXJuIExpbmsuaGVhZGVyKHNwbGl0WzBdLCBzcGxpdFsxXSwgZW1iZWQsIGRpc3BsYXkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHJldHVybiBMaW5rLmZpbGUobGlua3BhdGgsIGVtYmVkLCBkaXNwbGF5KTtcclxuICAgIH1cclxuICAgIC8qKiBDcmVhdGUgYSBsaW5rIHRvIGEgc3BlY2lmaWMgZmlsZSBhbmQgaGVhZGVyIGluIHRoYXQgZmlsZS4gKi9cclxuICAgIHN0YXRpYyBoZWFkZXIocGF0aCwgaGVhZGVyLCBlbWJlZCwgZGlzcGxheSkge1xyXG4gICAgICAgIC8vIEhlYWRlcnMgbmVlZCB0byBiZSBub3JtYWxpemVkIHRvIGFscGhhLW51bWVyaWMgJiB3aXRoIGV4dHJhIHNwYWNpbmcgcmVtb3ZlZC5cclxuICAgICAgICByZXR1cm4gbmV3IExpbmsoe1xyXG4gICAgICAgICAgICBwYXRoLFxyXG4gICAgICAgICAgICBlbWJlZCxcclxuICAgICAgICAgICAgZGlzcGxheSxcclxuICAgICAgICAgICAgc3VicGF0aDogbm9ybWFsaXplSGVhZGVyRm9yTGluayhoZWFkZXIpLFxyXG4gICAgICAgICAgICB0eXBlOiBcImhlYWRlclwiLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgLyoqIENyZWF0ZSBhIGxpbmsgdG8gYSBzcGVjaWZpYyBmaWxlIGFuZCBibG9jayBpbiB0aGF0IGZpbGUuICovXHJcbiAgICBzdGF0aWMgYmxvY2socGF0aCwgYmxvY2tJZCwgZW1iZWQsIGRpc3BsYXkpIHtcclxuICAgICAgICByZXR1cm4gbmV3IExpbmsoe1xyXG4gICAgICAgICAgICBwYXRoLFxyXG4gICAgICAgICAgICBlbWJlZCxcclxuICAgICAgICAgICAgZGlzcGxheSxcclxuICAgICAgICAgICAgc3VicGF0aDogYmxvY2tJZCxcclxuICAgICAgICAgICAgdHlwZTogXCJibG9ja1wiLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIGZyb21PYmplY3Qob2JqZWN0KSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBMaW5rKG9iamVjdCk7XHJcbiAgICB9XHJcbiAgICAvKiogQ2hlY2tzIGZvciBsaW5rIGVxdWFsaXR5IChpLmUuLCB0aGF0IHRoZSBsaW5rcyBhcmUgcG9pbnRpbmcgdG8gdGhlIHNhbWUgZXhhY3QgbG9jYXRpb24pLiAqL1xyXG4gICAgZXF1YWxzKG90aGVyKSB7XHJcbiAgICAgICAgaWYgKG90aGVyID09IHVuZGVmaW5lZCB8fCBvdGhlciA9PSBudWxsKVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucGF0aCA9PSBvdGhlci5wYXRoICYmIHRoaXMudHlwZSA9PSBvdGhlci50eXBlICYmIHRoaXMuc3VicGF0aCA9PSBvdGhlci5zdWJwYXRoO1xyXG4gICAgfVxyXG4gICAgLyoqIENvbnZlcnQgdGhpcyBsaW5rIHRvIGl0J3MgbWFya2Rvd24gcmVwcmVzZW50YXRpb24uICovXHJcbiAgICB0b1N0cmluZygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tYXJrZG93bigpO1xyXG4gICAgfVxyXG4gICAgLyoqIENvbnZlcnQgdGhpcyBsaW5rIHRvIGEgcmF3IG9iamVjdCB3aGljaCBpcyBzZXJpYWxpemF0aW9uLWZyaWVuZGx5LiAqL1xyXG4gICAgdG9PYmplY3QoKSB7XHJcbiAgICAgICAgcmV0dXJuIHsgcGF0aDogdGhpcy5wYXRoLCB0eXBlOiB0aGlzLnR5cGUsIHN1YnBhdGg6IHRoaXMuc3VicGF0aCwgZGlzcGxheTogdGhpcy5kaXNwbGF5LCBlbWJlZDogdGhpcy5lbWJlZCB9O1xyXG4gICAgfVxyXG4gICAgLyoqIFVwZGF0ZSB0aGlzIGxpbmsgd2l0aCBhIG5ldyBwYXRoLiAqL1xyXG4gICAgLy9AdHMtaWdub3JlOyBlcnJvciBhcHBlYXJlZCBhZnRlciB1cGRhdGluZyBPYnNpZGlhbiB0byAwLjE1LjQ7IGl0IGFsc28gdXBkYXRlZCBvdGhlciBwYWNrYWdlcyBidXQgZGlkbid0IHNheSB3aGljaFxyXG4gICAgd2l0aFBhdGgocGF0aCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgTGluayhPYmplY3QuYXNzaWduKHt9LCB0aGlzLCB7IHBhdGggfSkpO1xyXG4gICAgfVxyXG4gICAgLyoqIFJldHVybiBhIG5ldyBsaW5rIHdoaWNoIHBvaW50cyB0byB0aGUgc2FtZSBsb2NhdGlvbiBidXQgd2l0aCBhIG5ldyBkaXNwbGF5IHZhbHVlLiAqL1xyXG4gICAgd2l0aERpc3BsYXkoZGlzcGxheSkge1xyXG4gICAgICAgIHJldHVybiBuZXcgTGluayhPYmplY3QuYXNzaWduKHt9LCB0aGlzLCB7IGRpc3BsYXkgfSkpO1xyXG4gICAgfVxyXG4gICAgLyoqIENvbnZlcnQgYSBmaWxlIGxpbmsgaW50byBhIGxpbmsgdG8gYSBzcGVjaWZpYyBoZWFkZXIuICovXHJcbiAgICB3aXRoSGVhZGVyKGhlYWRlcikge1xyXG4gICAgICAgIHJldHVybiBMaW5rLmhlYWRlcih0aGlzLnBhdGgsIGhlYWRlciwgdGhpcy5lbWJlZCwgdGhpcy5kaXNwbGF5KTtcclxuICAgIH1cclxuICAgIC8qKiBDb252ZXJ0IGFueSBsaW5rIGludG8gYSBsaW5rIHRvIGl0cyBmaWxlLiAqL1xyXG4gICAgdG9GaWxlKCkge1xyXG4gICAgICAgIHJldHVybiBMaW5rLmZpbGUodGhpcy5wYXRoLCB0aGlzLmVtYmVkLCB0aGlzLmRpc3BsYXkpO1xyXG4gICAgfVxyXG4gICAgLyoqIENvbnZlcnQgdGhpcyBsaW5rIGludG8gYW4gZW1iZWRkZWQgbGluay4gKi9cclxuICAgIHRvRW1iZWQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZW1iZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBsZXQgbGluayA9IG5ldyBMaW5rKHRoaXMpO1xyXG4gICAgICAgICAgICBsaW5rLmVtYmVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgcmV0dXJuIGxpbms7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqIENvbnZlcnQgdGhpcyBsaW5rIGludG8gYSBub24tZW1iZWRkZWQgbGluay4gKi9cclxuICAgIGZyb21FbWJlZCgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuZW1iZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBsZXQgbGluayA9IG5ldyBMaW5rKHRoaXMpO1xyXG4gICAgICAgICAgICBsaW5rLmVtYmVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHJldHVybiBsaW5rO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKiBDb252ZXJ0IHRoaXMgbGluayB0byBtYXJrZG93biBzbyBpdCBjYW4gYmUgcmVuZGVyZWQuICovXHJcbiAgICBtYXJrZG93bigpIHtcclxuICAgICAgICBsZXQgcmVzdWx0ID0gKHRoaXMuZW1iZWQgPyBcIiFcIiA6IFwiXCIpICsgXCJbW1wiICsgdGhpcy5vYnNpZGlhbkxpbmsoKTtcclxuICAgICAgICBpZiAodGhpcy5kaXNwbGF5KSB7XHJcbiAgICAgICAgICAgIHJlc3VsdCArPSBcInxcIiArIHRoaXMuZGlzcGxheTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJlc3VsdCArPSBcInxcIiArIGdldEZpbGVUaXRsZSh0aGlzLnBhdGgpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy50eXBlID09IFwiaGVhZGVyXCIgfHwgdGhpcy50eXBlID09IFwiYmxvY2tcIilcclxuICAgICAgICAgICAgICAgIHJlc3VsdCArPSBcIiA+IFwiICsgdGhpcy5zdWJwYXRoO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXN1bHQgKz0gXCJdXVwiO1xyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcbiAgICAvKiogQ29udmVydCB0aGUgaW5uZXIgcGFydCBvZiB0aGUgbGluayB0byBzb21ldGhpbmcgdGhhdCBPYnNpZGlhbiBjYW4gb3BlbiAvIHVuZGVyc3RhbmQuICovXHJcbiAgICBvYnNpZGlhbkxpbmsoKSB7XHJcbiAgICAgICAgdmFyIF9hLCBfYjtcclxuICAgICAgICBjb25zdCBlc2NhcGVkID0gdGhpcy5wYXRoLnJlcGxhY2UoXCJ8XCIsIFwiXFxcXHxcIik7XHJcbiAgICAgICAgaWYgKHRoaXMudHlwZSA9PSBcImhlYWRlclwiKVxyXG4gICAgICAgICAgICByZXR1cm4gZXNjYXBlZCArIFwiI1wiICsgKChfYSA9IHRoaXMuc3VicGF0aCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnJlcGxhY2UoXCJ8XCIsIFwiXFxcXHxcIikpO1xyXG4gICAgICAgIGlmICh0aGlzLnR5cGUgPT0gXCJibG9ja1wiKVxyXG4gICAgICAgICAgICByZXR1cm4gZXNjYXBlZCArIFwiI15cIiArICgoX2IgPSB0aGlzLnN1YnBhdGgpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5yZXBsYWNlKFwifFwiLCBcIlxcXFx8XCIpKTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHJldHVybiBlc2NhcGVkO1xyXG4gICAgfVxyXG4gICAgLyoqIFRoZSBzdHJpcHBlZCBuYW1lIG9mIHRoZSBmaWxlIHRoaXMgbGluayBwb2ludHMgdG8uICovXHJcbiAgICBmaWxlTmFtZSgpIHtcclxuICAgICAgICByZXR1cm4gZ2V0RmlsZVRpdGxlKHRoaXMucGF0aCkucmVwbGFjZShcIi5tZFwiLCBcIlwiKTtcclxuICAgIH1cclxufVxyXG4vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLyBXSURHRVQgQkFTRSAvL1xyXG4vLy8vLy8vLy8vLy8vLy8vL1xyXG4vKipcclxuICogQSB0cml2aWFsIGJhc2UgY2xhc3Mgd2hpY2gganVzdCBkZWZpbmVzIHRoZSAnJHdpZGdldCcgaWRlbnRpZmllciB0eXBlLiBTdWJ0eXBlcyBvZlxyXG4gKiB3aWRnZXQgYXJlIHJlc3BvbnNpYmxlIGZvciBhZGRpbmcgd2hhdGV2ZXIgbWV0YWRhdGEgaXMgcmVsZXZhbnQuIElmIHlvdSB3YW50IHlvdXIgd2lkZ2V0XHJcbiAqIHRvIGhhdmUgcmVuZGVyaW5nIGZ1bmN0aW9uYWxpdHkgKHdoaWNoIHlvdSBwcm9iYWJseSBkbyksIHlvdSBzaG91bGQgZXh0ZW5kIGBSZW5kZXJXaWRnZXRgLlxyXG4gKi9cclxuY2xhc3MgV2lkZ2V0IHtcclxuICAgIGNvbnN0cnVjdG9yKCR3aWRnZXQpIHtcclxuICAgICAgICB0aGlzLiR3aWRnZXQgPSAkd2lkZ2V0O1xyXG4gICAgfVxyXG59XHJcbi8qKiBBIHRyaXZpYWwgd2lkZ2V0IHdoaWNoIHJlbmRlcnMgYSAoa2V5LCB2YWx1ZSkgcGFpciwgYW5kIGFsbG93cyBhY2Nlc3NpbmcgdGhlIGtleSBhbmQgdmFsdWUuICovXHJcbmNsYXNzIExpc3RQYWlyV2lkZ2V0IGV4dGVuZHMgV2lkZ2V0IHtcclxuICAgIGNvbnN0cnVjdG9yKGtleSwgdmFsdWUpIHtcclxuICAgICAgICBzdXBlcihcImRhdGF2aWV3Omxpc3QtcGFpclwiKTtcclxuICAgICAgICB0aGlzLmtleSA9IGtleTtcclxuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XHJcbiAgICB9XHJcbiAgICBtYXJrZG93bigpIHtcclxuICAgICAgICByZXR1cm4gYCR7VmFsdWVzLnRvU3RyaW5nKHRoaXMua2V5KX06ICR7VmFsdWVzLnRvU3RyaW5nKHRoaXMudmFsdWUpfWA7XHJcbiAgICB9XHJcbn1cclxuLyoqIEEgc2ltcGxlIHdpZGdldCB3aGljaCByZW5kZXJzIGFuIGV4dGVybmFsIGxpbmsuICovXHJcbmNsYXNzIEV4dGVybmFsTGlua1dpZGdldCBleHRlbmRzIFdpZGdldCB7XHJcbiAgICBjb25zdHJ1Y3Rvcih1cmwsIGRpc3BsYXkpIHtcclxuICAgICAgICBzdXBlcihcImRhdGF2aWV3OmV4dGVybmFsLWxpbmtcIik7XHJcbiAgICAgICAgdGhpcy51cmwgPSB1cmw7XHJcbiAgICAgICAgdGhpcy5kaXNwbGF5ID0gZGlzcGxheTtcclxuICAgIH1cclxuICAgIG1hcmtkb3duKCkge1xyXG4gICAgICAgIHZhciBfYTtcclxuICAgICAgICByZXR1cm4gYFskeyhfYSA9IHRoaXMuZGlzcGxheSkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogdGhpcy51cmx9XSgke3RoaXMudXJsfSlgO1xyXG4gICAgfVxyXG59XHJcbnZhciBXaWRnZXRzO1xyXG4oZnVuY3Rpb24gKFdpZGdldHMpIHtcclxuICAgIC8qKiBDcmVhdGUgYSBsaXN0IHBhaXIgd2lkZ2V0IG1hdGNoaW5nIHRoZSBnaXZlbiBrZXkgYW5kIHZhbHVlLiAqL1xyXG4gICAgZnVuY3Rpb24gbGlzdFBhaXIoa2V5LCB2YWx1ZSkge1xyXG4gICAgICAgIHJldHVybiBuZXcgTGlzdFBhaXJXaWRnZXQoa2V5LCB2YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBXaWRnZXRzLmxpc3RQYWlyID0gbGlzdFBhaXI7XHJcbiAgICAvKiogQ3JlYXRlIGFuIGV4dGVybmFsIGxpbmsgd2lkZ2V0IHdoaWNoIHJlbmRlcnMgYW4gZXh0ZXJuYWwgT2JzaWRpYW4gbGluay4gKi9cclxuICAgIGZ1bmN0aW9uIGV4dGVybmFsTGluayh1cmwsIGRpc3BsYXkpIHtcclxuICAgICAgICByZXR1cm4gbmV3IEV4dGVybmFsTGlua1dpZGdldCh1cmwsIGRpc3BsYXkpO1xyXG4gICAgfVxyXG4gICAgV2lkZ2V0cy5leHRlcm5hbExpbmsgPSBleHRlcm5hbExpbms7XHJcbiAgICAvKiogQ2hlY2tzIGlmIHRoZSBnaXZlbiB3aWRnZXQgaXMgYSBsaXN0IHBhaXIgd2lkZ2V0LiAqL1xyXG4gICAgZnVuY3Rpb24gaXNMaXN0UGFpcih3aWRnZXQpIHtcclxuICAgICAgICByZXR1cm4gd2lkZ2V0LiR3aWRnZXQgPT09IFwiZGF0YXZpZXc6bGlzdC1wYWlyXCI7XHJcbiAgICB9XHJcbiAgICBXaWRnZXRzLmlzTGlzdFBhaXIgPSBpc0xpc3RQYWlyO1xyXG4gICAgZnVuY3Rpb24gaXNFeHRlcm5hbExpbmsod2lkZ2V0KSB7XHJcbiAgICAgICAgcmV0dXJuIHdpZGdldC4kd2lkZ2V0ID09PSBcImRhdGF2aWV3OmV4dGVybmFsLWxpbmtcIjtcclxuICAgIH1cclxuICAgIFdpZGdldHMuaXNFeHRlcm5hbExpbmsgPSBpc0V4dGVybmFsTGluaztcclxuICAgIC8qKiBEZXRlcm1pbmVzIGlmIHRoZSBnaXZlbiB3aWRnZXQgaXMgYW55IGtpbmQgb2YgYnVpbHQtaW4gd2lkZ2V0IHdpdGggc3BlY2lhbCByZW5kZXJpbmcgaGFuZGxpbmcuICovXHJcbiAgICBmdW5jdGlvbiBpc0J1aWx0aW4od2lkZ2V0KSB7XHJcbiAgICAgICAgcmV0dXJuIGlzTGlzdFBhaXIod2lkZ2V0KSB8fCBpc0V4dGVybmFsTGluayh3aWRnZXQpO1xyXG4gICAgfVxyXG4gICAgV2lkZ2V0cy5pc0J1aWx0aW4gPSBpc0J1aWx0aW47XHJcbn0pKFdpZGdldHMgfHwgKFdpZGdldHMgPSB7fSkpO1xuXG4vKiogVXRpbGl0eSBtZXRob2RzIGZvciBjcmVhdGluZyAmIGNvbXBhcmluZyBmaWVsZHMuICovXHJcbnZhciBGaWVsZHM7XHJcbihmdW5jdGlvbiAoRmllbGRzKSB7XHJcbiAgICBmdW5jdGlvbiB2YXJpYWJsZShuYW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIHsgdHlwZTogXCJ2YXJpYWJsZVwiLCBuYW1lIH07XHJcbiAgICB9XHJcbiAgICBGaWVsZHMudmFyaWFibGUgPSB2YXJpYWJsZTtcclxuICAgIGZ1bmN0aW9uIGxpdGVyYWwodmFsdWUpIHtcclxuICAgICAgICByZXR1cm4geyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWUgfTtcclxuICAgIH1cclxuICAgIEZpZWxkcy5saXRlcmFsID0gbGl0ZXJhbDtcclxuICAgIGZ1bmN0aW9uIGJpbmFyeU9wKGxlZnQsIG9wLCByaWdodCkge1xyXG4gICAgICAgIHJldHVybiB7IHR5cGU6IFwiYmluYXJ5b3BcIiwgbGVmdCwgb3AsIHJpZ2h0IH07XHJcbiAgICB9XHJcbiAgICBGaWVsZHMuYmluYXJ5T3AgPSBiaW5hcnlPcDtcclxuICAgIGZ1bmN0aW9uIGluZGV4KG9iaiwgaW5kZXgpIHtcclxuICAgICAgICByZXR1cm4geyB0eXBlOiBcImluZGV4XCIsIG9iamVjdDogb2JqLCBpbmRleCB9O1xyXG4gICAgfVxyXG4gICAgRmllbGRzLmluZGV4ID0gaW5kZXg7XHJcbiAgICAvKiogQ29udmVydHMgYSBzdHJpbmcgaW4gZG90LW5vdGF0aW9uLWZvcm1hdCBpbnRvIGEgdmFyaWFibGUgd2hpY2ggaW5kZXhlcy4gKi9cclxuICAgIGZ1bmN0aW9uIGluZGV4VmFyaWFibGUobmFtZSkge1xyXG4gICAgICAgIGxldCBwYXJ0cyA9IG5hbWUuc3BsaXQoXCIuXCIpO1xyXG4gICAgICAgIGxldCByZXN1bHQgPSBGaWVsZHMudmFyaWFibGUocGFydHNbMF0pO1xyXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMTsgaW5kZXggPCBwYXJ0cy5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgcmVzdWx0ID0gRmllbGRzLmluZGV4KHJlc3VsdCwgRmllbGRzLmxpdGVyYWwocGFydHNbaW5kZXhdKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcbiAgICBGaWVsZHMuaW5kZXhWYXJpYWJsZSA9IGluZGV4VmFyaWFibGU7XHJcbiAgICBmdW5jdGlvbiBsYW1iZGEoYXJncywgdmFsdWUpIHtcclxuICAgICAgICByZXR1cm4geyB0eXBlOiBcImxhbWJkYVwiLCBhcmd1bWVudHM6IGFyZ3MsIHZhbHVlIH07XHJcbiAgICB9XHJcbiAgICBGaWVsZHMubGFtYmRhID0gbGFtYmRhO1xyXG4gICAgZnVuY3Rpb24gZnVuYyhmdW5jLCBhcmdzKSB7XHJcbiAgICAgICAgcmV0dXJuIHsgdHlwZTogXCJmdW5jdGlvblwiLCBmdW5jLCBhcmd1bWVudHM6IGFyZ3MgfTtcclxuICAgIH1cclxuICAgIEZpZWxkcy5mdW5jID0gZnVuYztcclxuICAgIGZ1bmN0aW9uIGxpc3QodmFsdWVzKSB7XHJcbiAgICAgICAgcmV0dXJuIHsgdHlwZTogXCJsaXN0XCIsIHZhbHVlcyB9O1xyXG4gICAgfVxyXG4gICAgRmllbGRzLmxpc3QgPSBsaXN0O1xyXG4gICAgZnVuY3Rpb24gb2JqZWN0KHZhbHVlcykge1xyXG4gICAgICAgIHJldHVybiB7IHR5cGU6IFwib2JqZWN0XCIsIHZhbHVlcyB9O1xyXG4gICAgfVxyXG4gICAgRmllbGRzLm9iamVjdCA9IG9iamVjdDtcclxuICAgIGZ1bmN0aW9uIG5lZ2F0ZShjaGlsZCkge1xyXG4gICAgICAgIHJldHVybiB7IHR5cGU6IFwibmVnYXRlZFwiLCBjaGlsZCB9O1xyXG4gICAgfVxyXG4gICAgRmllbGRzLm5lZ2F0ZSA9IG5lZ2F0ZTtcclxuICAgIGZ1bmN0aW9uIGlzQ29tcGFyZU9wKG9wKSB7XHJcbiAgICAgICAgcmV0dXJuIG9wID09IFwiPD1cIiB8fCBvcCA9PSBcIjxcIiB8fCBvcCA9PSBcIj5cIiB8fCBvcCA9PSBcIj49XCIgfHwgb3AgPT0gXCIhPVwiIHx8IG9wID09IFwiPVwiO1xyXG4gICAgfVxyXG4gICAgRmllbGRzLmlzQ29tcGFyZU9wID0gaXNDb21wYXJlT3A7XHJcbiAgICBGaWVsZHMuTlVMTCA9IEZpZWxkcy5saXRlcmFsKG51bGwpO1xyXG59KShGaWVsZHMgfHwgKEZpZWxkcyA9IHt9KSk7XG5cbi8qKiBBU1QgaW1wbGVtZW50YXRpb24gZm9yIHF1ZXJpZXMgb3ZlciBkYXRhIHNvdXJjZXMuICovXHJcbi8qKiBVdGlsaXR5IGZ1bmN0aW9ucyBmb3IgY3JlYXRpbmcgYW5kIG1hbmlwdWxhdGluZyBzb3VyY2VzLiAqL1xyXG52YXIgU291cmNlcztcclxuKGZ1bmN0aW9uIChTb3VyY2VzKSB7XHJcbiAgICAvKiogQ3JlYXRlIGEgc291cmNlIHdoaWNoIHNlYXJjaGVzIGZyb20gYSB0YWcuICovXHJcbiAgICBmdW5jdGlvbiB0YWcodGFnKSB7XHJcbiAgICAgICAgcmV0dXJuIHsgdHlwZTogXCJ0YWdcIiwgdGFnIH07XHJcbiAgICB9XHJcbiAgICBTb3VyY2VzLnRhZyA9IHRhZztcclxuICAgIC8qKiBDcmVhdGUgYSBzb3VyY2Ugd2hpY2ggZmV0Y2hlcyBmcm9tIGEgQ1NWIGZpbGUuICovXHJcbiAgICBmdW5jdGlvbiBjc3YocGF0aCkge1xyXG4gICAgICAgIHJldHVybiB7IHR5cGU6IFwiY3N2XCIsIHBhdGggfTtcclxuICAgIH1cclxuICAgIFNvdXJjZXMuY3N2ID0gY3N2O1xyXG4gICAgLyoqIENyZWF0ZSBhIHNvdXJjZSB3aGljaCBzZWFyY2hlcyBmb3IgZmlsZXMgdW5kZXIgYSBmb2xkZXIgcHJlZml4LiAqL1xyXG4gICAgZnVuY3Rpb24gZm9sZGVyKHByZWZpeCkge1xyXG4gICAgICAgIHJldHVybiB7IHR5cGU6IFwiZm9sZGVyXCIsIGZvbGRlcjogcHJlZml4IH07XHJcbiAgICB9XHJcbiAgICBTb3VyY2VzLmZvbGRlciA9IGZvbGRlcjtcclxuICAgIC8qKiBDcmVhdGUgYSBzb3VyY2Ugd2hpY2ggc2VhcmNoZXMgZm9yIGZpbGVzIHdoaWNoIGxpbmsgdG8vZnJvbSBhIGdpdmVuIGZpbGUuICovXHJcbiAgICBmdW5jdGlvbiBsaW5rKGZpbGUsIGluY29taW5nKSB7XHJcbiAgICAgICAgcmV0dXJuIHsgdHlwZTogXCJsaW5rXCIsIGZpbGUsIGRpcmVjdGlvbjogaW5jb21pbmcgPyBcImluY29taW5nXCIgOiBcIm91dGdvaW5nXCIgfTtcclxuICAgIH1cclxuICAgIFNvdXJjZXMubGluayA9IGxpbms7XHJcbiAgICAvKiogQ3JlYXRlIGEgc291cmNlIHdoaWNoIGpvaW5zIHR3byBzb3VyY2VzIGJ5IGEgbG9naWNhbCBvcGVyYXRvciAoYW5kL29yKS4gKi9cclxuICAgIGZ1bmN0aW9uIGJpbmFyeU9wKGxlZnQsIG9wLCByaWdodCkge1xyXG4gICAgICAgIHJldHVybiB7IHR5cGU6IFwiYmluYXJ5b3BcIiwgbGVmdCwgb3AsIHJpZ2h0IH07XHJcbiAgICB9XHJcbiAgICBTb3VyY2VzLmJpbmFyeU9wID0gYmluYXJ5T3A7XHJcbiAgICAvKiogQ3JlYXRlIGEgc291cmNlIHdoaWNoIHRha2VzIHRoZSBpbnRlcnNlY3Rpb24gb2YgdHdvIHNvdXJjZXMuICovXHJcbiAgICBmdW5jdGlvbiBhbmQobGVmdCwgcmlnaHQpIHtcclxuICAgICAgICByZXR1cm4geyB0eXBlOiBcImJpbmFyeW9wXCIsIGxlZnQsIG9wOiBcIiZcIiwgcmlnaHQgfTtcclxuICAgIH1cclxuICAgIFNvdXJjZXMuYW5kID0gYW5kO1xyXG4gICAgLyoqIENyZWF0ZSBhIHNvdXJjZSB3aGljaCB0YWtlcyB0aGUgdW5pb24gb2YgdHdvIHNvdXJjZXMuICovXHJcbiAgICBmdW5jdGlvbiBvcihsZWZ0LCByaWdodCkge1xyXG4gICAgICAgIHJldHVybiB7IHR5cGU6IFwiYmluYXJ5b3BcIiwgbGVmdCwgb3A6IFwifFwiLCByaWdodCB9O1xyXG4gICAgfVxyXG4gICAgU291cmNlcy5vciA9IG9yO1xyXG4gICAgLyoqIENyZWF0ZSBhIHNvdXJjZSB3aGljaCBuZWdhdGVzIHRoZSB1bmRlcmx5aW5nIHNvdXJjZS4gKi9cclxuICAgIGZ1bmN0aW9uIG5lZ2F0ZShjaGlsZCkge1xyXG4gICAgICAgIHJldHVybiB7IHR5cGU6IFwibmVnYXRlXCIsIGNoaWxkIH07XHJcbiAgICB9XHJcbiAgICBTb3VyY2VzLm5lZ2F0ZSA9IG5lZ2F0ZTtcclxuICAgIGZ1bmN0aW9uIGVtcHR5KCkge1xyXG4gICAgICAgIHJldHVybiB7IHR5cGU6IFwiZW1wdHlcIiB9O1xyXG4gICAgfVxyXG4gICAgU291cmNlcy5lbXB0eSA9IGVtcHR5O1xyXG59KShTb3VyY2VzIHx8IChTb3VyY2VzID0ge30pKTtcblxuLyoqIEVtb2ppIHJlZ2V4IHdpdGhvdXQgYW55IGFkZGl0aW9uYWwgZmxhZ3MuICovXHJcbmNvbnN0IEVNT0pJX1JFR0VYID0gbmV3IFJlZ0V4cChlbW9qaVJlZ2V4KCksIFwiXCIpO1xyXG4vKiogUHJvdmlkZXMgYSBsb29rdXAgdGFibGUgZm9yIHVuaXQgZHVyYXRpb25zIG9mIHRoZSBnaXZlbiB0eXBlLiAqL1xyXG5jb25zdCBEVVJBVElPTl9UWVBFUyA9IHtcclxuICAgIHllYXI6IER1cmF0aW9uLmZyb21PYmplY3QoeyB5ZWFyczogMSB9KSxcclxuICAgIHllYXJzOiBEdXJhdGlvbi5mcm9tT2JqZWN0KHsgeWVhcnM6IDEgfSksXHJcbiAgICB5cjogRHVyYXRpb24uZnJvbU9iamVjdCh7IHllYXJzOiAxIH0pLFxyXG4gICAgeXJzOiBEdXJhdGlvbi5mcm9tT2JqZWN0KHsgeWVhcnM6IDEgfSksXHJcbiAgICBtb250aDogRHVyYXRpb24uZnJvbU9iamVjdCh7IG1vbnRoczogMSB9KSxcclxuICAgIG1vbnRoczogRHVyYXRpb24uZnJvbU9iamVjdCh7IG1vbnRoczogMSB9KSxcclxuICAgIG1vOiBEdXJhdGlvbi5mcm9tT2JqZWN0KHsgbW9udGhzOiAxIH0pLFxyXG4gICAgbW9zOiBEdXJhdGlvbi5mcm9tT2JqZWN0KHsgbW9udGhzOiAxIH0pLFxyXG4gICAgd2VlazogRHVyYXRpb24uZnJvbU9iamVjdCh7IHdlZWtzOiAxIH0pLFxyXG4gICAgd2Vla3M6IER1cmF0aW9uLmZyb21PYmplY3QoeyB3ZWVrczogMSB9KSxcclxuICAgIHdrOiBEdXJhdGlvbi5mcm9tT2JqZWN0KHsgd2Vla3M6IDEgfSksXHJcbiAgICB3a3M6IER1cmF0aW9uLmZyb21PYmplY3QoeyB3ZWVrczogMSB9KSxcclxuICAgIHc6IER1cmF0aW9uLmZyb21PYmplY3QoeyB3ZWVrczogMSB9KSxcclxuICAgIGRheTogRHVyYXRpb24uZnJvbU9iamVjdCh7IGRheXM6IDEgfSksXHJcbiAgICBkYXlzOiBEdXJhdGlvbi5mcm9tT2JqZWN0KHsgZGF5czogMSB9KSxcclxuICAgIGQ6IER1cmF0aW9uLmZyb21PYmplY3QoeyBkYXlzOiAxIH0pLFxyXG4gICAgaG91cjogRHVyYXRpb24uZnJvbU9iamVjdCh7IGhvdXJzOiAxIH0pLFxyXG4gICAgaG91cnM6IER1cmF0aW9uLmZyb21PYmplY3QoeyBob3VyczogMSB9KSxcclxuICAgIGhyOiBEdXJhdGlvbi5mcm9tT2JqZWN0KHsgaG91cnM6IDEgfSksXHJcbiAgICBocnM6IER1cmF0aW9uLmZyb21PYmplY3QoeyBob3VyczogMSB9KSxcclxuICAgIGg6IER1cmF0aW9uLmZyb21PYmplY3QoeyBob3VyczogMSB9KSxcclxuICAgIG1pbnV0ZTogRHVyYXRpb24uZnJvbU9iamVjdCh7IG1pbnV0ZXM6IDEgfSksXHJcbiAgICBtaW51dGVzOiBEdXJhdGlvbi5mcm9tT2JqZWN0KHsgbWludXRlczogMSB9KSxcclxuICAgIG1pbjogRHVyYXRpb24uZnJvbU9iamVjdCh7IG1pbnV0ZXM6IDEgfSksXHJcbiAgICBtaW5zOiBEdXJhdGlvbi5mcm9tT2JqZWN0KHsgbWludXRlczogMSB9KSxcclxuICAgIG06IER1cmF0aW9uLmZyb21PYmplY3QoeyBtaW51dGVzOiAxIH0pLFxyXG4gICAgc2Vjb25kOiBEdXJhdGlvbi5mcm9tT2JqZWN0KHsgc2Vjb25kczogMSB9KSxcclxuICAgIHNlY29uZHM6IER1cmF0aW9uLmZyb21PYmplY3QoeyBzZWNvbmRzOiAxIH0pLFxyXG4gICAgc2VjOiBEdXJhdGlvbi5mcm9tT2JqZWN0KHsgc2Vjb25kczogMSB9KSxcclxuICAgIHNlY3M6IER1cmF0aW9uLmZyb21PYmplY3QoeyBzZWNvbmRzOiAxIH0pLFxyXG4gICAgczogRHVyYXRpb24uZnJvbU9iamVjdCh7IHNlY29uZHM6IDEgfSksXHJcbn07XHJcbi8qKiBTaG9ydGhhbmQgZm9yIGNvbW1vbiBkYXRlcyAocmVsYXRpdmUgdG8gcmlnaHQgbm93KS4gKi9cclxuY29uc3QgREFURV9TSE9SVEhBTkRTID0ge1xyXG4gICAgbm93OiAoKSA9PiBEYXRlVGltZS5sb2NhbCgpLFxyXG4gICAgdG9kYXk6ICgpID0+IERhdGVUaW1lLmxvY2FsKCkuc3RhcnRPZihcImRheVwiKSxcclxuICAgIHllc3RlcmRheTogKCkgPT4gRGF0ZVRpbWUubG9jYWwoKVxyXG4gICAgICAgIC5zdGFydE9mKFwiZGF5XCIpXHJcbiAgICAgICAgLm1pbnVzKER1cmF0aW9uLmZyb21PYmplY3QoeyBkYXlzOiAxIH0pKSxcclxuICAgIHRvbW9ycm93OiAoKSA9PiBEYXRlVGltZS5sb2NhbCgpXHJcbiAgICAgICAgLnN0YXJ0T2YoXCJkYXlcIilcclxuICAgICAgICAucGx1cyhEdXJhdGlvbi5mcm9tT2JqZWN0KHsgZGF5czogMSB9KSksXHJcbiAgICBzb3c6ICgpID0+IERhdGVUaW1lLmxvY2FsKCkuc3RhcnRPZihcIndlZWtcIiksXHJcbiAgICBcInN0YXJ0LW9mLXdlZWtcIjogKCkgPT4gRGF0ZVRpbWUubG9jYWwoKS5zdGFydE9mKFwid2Vla1wiKSxcclxuICAgIGVvdzogKCkgPT4gRGF0ZVRpbWUubG9jYWwoKS5lbmRPZihcIndlZWtcIiksXHJcbiAgICBcImVuZC1vZi13ZWVrXCI6ICgpID0+IERhdGVUaW1lLmxvY2FsKCkuZW5kT2YoXCJ3ZWVrXCIpLFxyXG4gICAgc295OiAoKSA9PiBEYXRlVGltZS5sb2NhbCgpLnN0YXJ0T2YoXCJ5ZWFyXCIpLFxyXG4gICAgXCJzdGFydC1vZi15ZWFyXCI6ICgpID0+IERhdGVUaW1lLmxvY2FsKCkuc3RhcnRPZihcInllYXJcIiksXHJcbiAgICBlb3k6ICgpID0+IERhdGVUaW1lLmxvY2FsKCkuZW5kT2YoXCJ5ZWFyXCIpLFxyXG4gICAgXCJlbmQtb2YteWVhclwiOiAoKSA9PiBEYXRlVGltZS5sb2NhbCgpLmVuZE9mKFwieWVhclwiKSxcclxuICAgIHNvbTogKCkgPT4gRGF0ZVRpbWUubG9jYWwoKS5zdGFydE9mKFwibW9udGhcIiksXHJcbiAgICBcInN0YXJ0LW9mLW1vbnRoXCI6ICgpID0+IERhdGVUaW1lLmxvY2FsKCkuc3RhcnRPZihcIm1vbnRoXCIpLFxyXG4gICAgZW9tOiAoKSA9PiBEYXRlVGltZS5sb2NhbCgpLmVuZE9mKFwibW9udGhcIiksXHJcbiAgICBcImVuZC1vZi1tb250aFwiOiAoKSA9PiBEYXRlVGltZS5sb2NhbCgpLmVuZE9mKFwibW9udGhcIiksXHJcbn07XHJcbi8qKlxyXG4gKiBLZXl3b3JkcyB3aGljaCBjYW5ub3QgYmUgdXNlZCBhcyB2YXJpYWJsZXMgZGlyZWN0bHkuIFVzZSBgcm93Ljx0aGluZz5gIGlmIGl0IGlzIGEgdmFyaWFibGUgeW91IGhhdmUgZGVmaW5lZCBhbmQgd2FudFxyXG4gKiB0byBhY2Nlc3MuXHJcbiAqL1xyXG5jb25zdCBLRVlXT1JEUyA9IFtcIkZST01cIiwgXCJXSEVSRVwiLCBcIkxJTUlUXCIsIFwiR1JPVVBcIiwgXCJGTEFUVEVOXCJdO1xyXG4vLy8vLy8vLy8vLy8vLy9cclxuLy8gVXRpbGl0aWVzIC8vXHJcbi8vLy8vLy8vLy8vLy8vL1xyXG4vKiogU3BsaXQgb24gdW5lc2NhcGVkIHBpcGVzIGluIGFuIGlubmVyIGxpbmsuICovXHJcbmZ1bmN0aW9uIHNwbGl0T25VbmVzY2FwZWRQaXBlKGxpbmspIHtcclxuICAgIGxldCBwaXBlID0gLTE7XHJcbiAgICB3aGlsZSAoKHBpcGUgPSBsaW5rLmluZGV4T2YoXCJ8XCIsIHBpcGUgKyAxKSkgPj0gMCkge1xyXG4gICAgICAgIGlmIChwaXBlID4gMCAmJiBsaW5rW3BpcGUgLSAxXSA9PSBcIlxcXFxcIilcclxuICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgcmV0dXJuIFtsaW5rLnN1YnN0cmluZygwLCBwaXBlKS5yZXBsYWNlKC9cXFxcXFx8L2csIFwifFwiKSwgbGluay5zdWJzdHJpbmcocGlwZSArIDEpXTtcclxuICAgIH1cclxuICAgIHJldHVybiBbbGluay5yZXBsYWNlKC9cXFxcXFx8L2csIFwifFwiKSwgdW5kZWZpbmVkXTtcclxufVxyXG4vKiogQXR0ZW1wdCB0byBwYXJzZSB0aGUgaW5zaWRlIG9mIGEgbGluayB0byBwdWxsIG91dCBkaXNwbGF5IG5hbWUsIHN1YnBhdGgsIGV0Yy4gKi9cclxuZnVuY3Rpb24gcGFyc2VJbm5lckxpbmsocmF3bGluaykge1xyXG4gICAgbGV0IFtsaW5rLCBkaXNwbGF5XSA9IHNwbGl0T25VbmVzY2FwZWRQaXBlKHJhd2xpbmspO1xyXG4gICAgcmV0dXJuIExpbmsuaW5mZXIobGluaywgZmFsc2UsIGRpc3BsYXkpO1xyXG59XHJcbi8qKiBDcmVhdGUgYSBsZWZ0LWFzc29jaWF0aXZlIGJpbmFyeSBwYXJzZXIgd2hpY2ggcGFyc2VzIHRoZSBnaXZlbiBzdWItZWxlbWVudCBhbmQgc2VwYXJhdG9yLiBIYW5kbGVzIHdoaXRlc3BhY2UuICovXHJcbmZ1bmN0aW9uIGNyZWF0ZUJpbmFyeVBhcnNlcihjaGlsZCwgc2VwLCBjb21iaW5lKSB7XHJcbiAgICByZXR1cm4gcGFyc2ltbW9uX3VtZF9taW4uZXhwb3J0cy5zZXFNYXAoY2hpbGQsIHBhcnNpbW1vbl91bWRfbWluLmV4cG9ydHMuc2VxKHBhcnNpbW1vbl91bWRfbWluLmV4cG9ydHMub3B0V2hpdGVzcGFjZSwgc2VwLCBwYXJzaW1tb25fdW1kX21pbi5leHBvcnRzLm9wdFdoaXRlc3BhY2UsIGNoaWxkKS5tYW55KCksIChmaXJzdCwgcmVzdCkgPT4ge1xyXG4gICAgICAgIGlmIChyZXN0Lmxlbmd0aCA9PSAwKVxyXG4gICAgICAgICAgICByZXR1cm4gZmlyc3Q7XHJcbiAgICAgICAgbGV0IG5vZGUgPSBjb21iaW5lKGZpcnN0LCByZXN0WzBdWzFdLCByZXN0WzBdWzNdKTtcclxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDE7IGluZGV4IDwgcmVzdC5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgbm9kZSA9IGNvbWJpbmUobm9kZSwgcmVzdFtpbmRleF1bMV0sIHJlc3RbaW5kZXhdWzNdKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5vZGU7XHJcbiAgICB9KTtcclxufVxyXG5mdW5jdGlvbiBjaGFpbk9wdChiYXNlLCAuLi5mdW5jcykge1xyXG4gICAgcmV0dXJuIHBhcnNpbW1vbl91bWRfbWluLmV4cG9ydHMuY3VzdG9tKChzdWNjZXNzLCBmYWlsdXJlKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIChpbnB1dCwgaSkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gYmFzZS5fKGlucHV0LCBpKTtcclxuICAgICAgICAgICAgaWYgKCFyZXN1bHQuc3RhdHVzKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICAgICAgZm9yIChsZXQgZnVuYyBvZiBmdW5jcykge1xyXG4gICAgICAgICAgICAgICAgbGV0IG5leHQgPSBmdW5jKHJlc3VsdC52YWx1ZSkuXyhpbnB1dCwgcmVzdWx0LmluZGV4KTtcclxuICAgICAgICAgICAgICAgIGlmICghbmV4dC5zdGF0dXMpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IG5leHQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICB9O1xyXG4gICAgfSk7XHJcbn1cclxuY29uc3QgRVhQUkVTU0lPTiA9IHBhcnNpbW1vbl91bWRfbWluLmV4cG9ydHMuY3JlYXRlTGFuZ3VhZ2Uoe1xyXG4gICAgLy8gQSBmbG9hdGluZyBwb2ludCBudW1iZXI7IHRoZSBkZWNpbWFsIHBvaW50IGlzIG9wdGlvbmFsLlxyXG4gICAgbnVtYmVyOiBxID0+IHBhcnNpbW1vbl91bWRfbWluLmV4cG9ydHMucmVnZXhwKC8tP1swLTldKyhcXC5bMC05XSspPy8pXHJcbiAgICAgICAgLm1hcChzdHIgPT4gTnVtYmVyLnBhcnNlRmxvYXQoc3RyKSlcclxuICAgICAgICAuZGVzYyhcIm51bWJlclwiKSxcclxuICAgIC8vIEEgcXVvdGUtc3Vycm91bmRlZCBzdHJpbmcgd2hpY2ggc3VwcG9ydHMgZXNjYXBlIGNoYXJhY3RlcnMgKCdcXCcpLlxyXG4gICAgc3RyaW5nOiBxID0+IHBhcnNpbW1vbl91bWRfbWluLmV4cG9ydHMuc3RyaW5nKCdcIicpXHJcbiAgICAgICAgLnRoZW4ocGFyc2ltbW9uX3VtZF9taW4uZXhwb3J0cy5hbHQocS5lc2NhcGVDaGFyYWN0ZXIsIHBhcnNpbW1vbl91bWRfbWluLmV4cG9ydHMubm9uZU9mKCdcIlxcXFwnKSlcclxuICAgICAgICAuYXRMZWFzdCgwKVxyXG4gICAgICAgIC5tYXAoY2hhcnMgPT4gY2hhcnMuam9pbihcIlwiKSkpXHJcbiAgICAgICAgLnNraXAocGFyc2ltbW9uX3VtZF9taW4uZXhwb3J0cy5zdHJpbmcoJ1wiJykpXHJcbiAgICAgICAgLmRlc2MoXCJzdHJpbmdcIiksXHJcbiAgICBlc2NhcGVDaGFyYWN0ZXI6IF8gPT4gcGFyc2ltbW9uX3VtZF9taW4uZXhwb3J0cy5zdHJpbmcoXCJcXFxcXCIpXHJcbiAgICAgICAgLnRoZW4ocGFyc2ltbW9uX3VtZF9taW4uZXhwb3J0cy5hbnkpXHJcbiAgICAgICAgLm1hcChlc2NhcGVkID0+IHtcclxuICAgICAgICAvLyBJZiB3ZSBhcmUgZXNjYXBpbmcgYSBiYWNrc2xhc2ggb3IgYSBxdW90ZSwgcGFzcyBpbiBvbiBpbiBlc2NhcGVkIGZvcm1cclxuICAgICAgICBpZiAoZXNjYXBlZCA9PT0gJ1wiJylcclxuICAgICAgICAgICAgcmV0dXJuICdcIic7XHJcbiAgICAgICAgaWYgKGVzY2FwZWQgPT09IFwiXFxcXFwiKVxyXG4gICAgICAgICAgICByZXR1cm4gXCJcXFxcXCI7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICByZXR1cm4gXCJcXFxcXCIgKyBlc2NhcGVkO1xyXG4gICAgfSksXHJcbiAgICAvLyBBIGJvb2xlYW4gdHJ1ZS9mYWxzZSB2YWx1ZS5cclxuICAgIGJvb2w6IF8gPT4gcGFyc2ltbW9uX3VtZF9taW4uZXhwb3J0cy5yZWdleHAoL3RydWV8ZmFsc2V8VHJ1ZXxGYWxzZS8pXHJcbiAgICAgICAgLm1hcChzdHIgPT4gc3RyLnRvTG93ZXJDYXNlKCkgPT0gXCJ0cnVlXCIpXHJcbiAgICAgICAgLmRlc2MoXCJib29sZWFuICgndHJ1ZScgb3IgJ2ZhbHNlJylcIiksXHJcbiAgICAvLyBBIHRhZyBvZiB0aGUgZm9ybSAnI3N0dWZmL2hlbGxvLXRoZXJlJy5cclxuICAgIHRhZzogXyA9PiBwYXJzaW1tb25fdW1kX21pbi5leHBvcnRzLnNlcU1hcChwYXJzaW1tb25fdW1kX21pbi5leHBvcnRzLnN0cmluZyhcIiNcIiksIHBhcnNpbW1vbl91bWRfbWluLmV4cG9ydHMuYWx0KHBhcnNpbW1vbl91bWRfbWluLmV4cG9ydHMucmVnZXhwKC9bXlxcdTIwMDAtXFx1MjA2RlxcdTJFMDAtXFx1MkU3RichXCIjJCUmKCkqKywuOjs8PT4/QF5ge3x9flxcW1xcXVxcXFxcXHNdLykuZGVzYyhcInRleHRcIikpLm1hbnkoKSwgKHN0YXJ0LCByZXN0KSA9PiBzdGFydCArIHJlc3Quam9pbihcIlwiKSkuZGVzYyhcInRhZyAoJyNoZWxsby9zdHVmZicpXCIpLFxyXG4gICAgLy8gQSB2YXJpYWJsZSBpZGVudGlmaWVyLCB3aGljaCBpcyBhbHBoYW51bWVyaWMgYW5kIG11c3Qgc3RhcnQgd2l0aCBhIGxldHRlciBvci4uLiBlbW9qaS5cclxuICAgIGlkZW50aWZpZXI6IF8gPT4gcGFyc2ltbW9uX3VtZF9taW4uZXhwb3J0cy5zZXFNYXAocGFyc2ltbW9uX3VtZF9taW4uZXhwb3J0cy5hbHQocGFyc2ltbW9uX3VtZF9taW4uZXhwb3J0cy5yZWdleHAoL1xccHtMZXR0ZXJ9L3UpLCBwYXJzaW1tb25fdW1kX21pbi5leHBvcnRzLnJlZ2V4cChFTU9KSV9SRUdFWCkuZGVzYyhcInRleHRcIikpLCBwYXJzaW1tb25fdW1kX21pbi5leHBvcnRzLmFsdChwYXJzaW1tb25fdW1kX21pbi5leHBvcnRzLnJlZ2V4cCgvWzAtOVxccHtMZXR0ZXJ9Xy1dL3UpLCBwYXJzaW1tb25fdW1kX21pbi5leHBvcnRzLnJlZ2V4cChFTU9KSV9SRUdFWCkuZGVzYyhcInRleHRcIikpLm1hbnkoKSwgKGZpcnN0LCByZXN0KSA9PiBmaXJzdCArIHJlc3Quam9pbihcIlwiKSkuZGVzYyhcInZhcmlhYmxlIGlkZW50aWZpZXJcIiksXHJcbiAgICAvLyBBbiBPYnNpZGlhbiBsaW5rIG9mIHRoZSBmb3JtIFtbPGxpbms+XV0uXHJcbiAgICBsaW5rOiBfID0+IHBhcnNpbW1vbl91bWRfbWluLmV4cG9ydHMucmVnZXhwKC9cXFtcXFsoW15cXFtcXF1dKj8pXFxdXFxdL3UsIDEpXHJcbiAgICAgICAgLm1hcChsaW5rSW5uZXIgPT4gcGFyc2VJbm5lckxpbmsobGlua0lubmVyKSlcclxuICAgICAgICAuZGVzYyhcImZpbGUgbGlua1wiKSxcclxuICAgIC8vIEFuIGVtYmVkZGFibGUgbGluayB3aGljaCBjYW4gc3RhcnQgd2l0aCAnIScuIFRoaXMgb3ZlcmxhcHMgd2l0aCB0aGUgbm9ybWFsIG5lZ2F0aW9uIG9wZXJhdG9yLCBzbyBpdCBpcyBvbmx5XHJcbiAgICAvLyBwcm92aWRlZCBmb3IgbWV0YWRhdGEgcGFyc2luZy5cclxuICAgIGVtYmVkTGluazogcSA9PiBwYXJzaW1tb25fdW1kX21pbi5leHBvcnRzLnNlcU1hcChwYXJzaW1tb25fdW1kX21pbi5leHBvcnRzLnN0cmluZyhcIiFcIikuYXRNb3N0KDEpLCBxLmxpbmssIChwLCBsKSA9PiB7XHJcbiAgICAgICAgaWYgKHAubGVuZ3RoID4gMClcclxuICAgICAgICAgICAgbC5lbWJlZCA9IHRydWU7XHJcbiAgICAgICAgcmV0dXJuIGw7XHJcbiAgICB9KS5kZXNjKFwiZmlsZSBsaW5rXCIpLFxyXG4gICAgLy8gQmluYXJ5IHBsdXMgb3IgbWludXMgb3BlcmF0b3IuXHJcbiAgICBiaW5hcnlQbHVzTWludXM6IF8gPT4gcGFyc2ltbW9uX3VtZF9taW4uZXhwb3J0cy5yZWdleHAoL1xcK3wtLylcclxuICAgICAgICAubWFwKHN0ciA9PiBzdHIpXHJcbiAgICAgICAgLmRlc2MoXCInKycgb3IgJy0nXCIpLFxyXG4gICAgLy8gQmluYXJ5IHRpbWVzIG9yIGRpdmlkZSBvcGVyYXRvci5cclxuICAgIGJpbmFyeU11bERpdjogXyA9PiBwYXJzaW1tb25fdW1kX21pbi5leHBvcnRzLnJlZ2V4cCgvXFwqfFxcL3wlLylcclxuICAgICAgICAubWFwKHN0ciA9PiBzdHIpXHJcbiAgICAgICAgLmRlc2MoXCInKicgb3IgJy8nIG9yICclJ1wiKSxcclxuICAgIC8vIEJpbmFyeSBjb21wYXJpc29uIG9wZXJhdG9yLlxyXG4gICAgYmluYXJ5Q29tcGFyZU9wOiBfID0+IHBhcnNpbW1vbl91bWRfbWluLmV4cG9ydHMucmVnZXhwKC8+PXw8PXwhPXw+fDx8PS8pXHJcbiAgICAgICAgLm1hcChzdHIgPT4gc3RyKVxyXG4gICAgICAgIC5kZXNjKFwiJz49JyBvciAnPD0nIG9yICchPScgb3IgJz0nIG9yICc+JyBvciAnPCdcIiksXHJcbiAgICAvLyBCaW5hcnkgYm9vbGVhbiBjb21iaW5hdGlvbiBvcGVyYXRvci5cclxuICAgIGJpbmFyeUJvb2xlYW5PcDogXyA9PiBwYXJzaW1tb25fdW1kX21pbi5leHBvcnRzLnJlZ2V4cCgvYW5kfG9yfCZ8XFx8L2kpXHJcbiAgICAgICAgLm1hcChzdHIgPT4ge1xyXG4gICAgICAgIGlmIChzdHIudG9Mb3dlckNhc2UoKSA9PSBcImFuZFwiKVxyXG4gICAgICAgICAgICByZXR1cm4gXCImXCI7XHJcbiAgICAgICAgZWxzZSBpZiAoc3RyLnRvTG93ZXJDYXNlKCkgPT0gXCJvclwiKVxyXG4gICAgICAgICAgICByZXR1cm4gXCJ8XCI7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICByZXR1cm4gc3RyO1xyXG4gICAgfSlcclxuICAgICAgICAuZGVzYyhcIidhbmQnIG9yICdvcidcIiksXHJcbiAgICAvLyBBIGRhdGUgd2hpY2ggY2FuIGJlIFlZWVktTU1bLUREVEhIOm1tOnNzXS5cclxuICAgIHJvb3REYXRlOiBfID0+IHBhcnNpbW1vbl91bWRfbWluLmV4cG9ydHMuc2VxTWFwKHBhcnNpbW1vbl91bWRfbWluLmV4cG9ydHMucmVnZXhwKC9cXGR7NH0vKSwgcGFyc2ltbW9uX3VtZF9taW4uZXhwb3J0cy5zdHJpbmcoXCItXCIpLCBwYXJzaW1tb25fdW1kX21pbi5leHBvcnRzLnJlZ2V4cCgvXFxkezJ9LyksICh5ZWFyLCBfLCBtb250aCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBEYXRlVGltZS5mcm9tT2JqZWN0KHsgeWVhcjogTnVtYmVyLnBhcnNlSW50KHllYXIpLCBtb250aDogTnVtYmVyLnBhcnNlSW50KG1vbnRoKSB9KTtcclxuICAgIH0pLmRlc2MoXCJkYXRlIGluIGZvcm1hdCBZWVlZLU1NWy1ERFRISC1NTS1TUy5NU11cIiksXHJcbiAgICBkYXRlU2hvcnRoYW5kOiBfID0+IHBhcnNpbW1vbl91bWRfbWluLmV4cG9ydHMuYWx0KC4uLk9iamVjdC5rZXlzKERBVEVfU0hPUlRIQU5EUylcclxuICAgICAgICAuc29ydCgoYSwgYikgPT4gYi5sZW5ndGggLSBhLmxlbmd0aClcclxuICAgICAgICAubWFwKHBhcnNpbW1vbl91bWRfbWluLmV4cG9ydHMuc3RyaW5nKSksXHJcbiAgICBkYXRlOiBxID0+IGNoYWluT3B0KHEucm9vdERhdGUsICh5bSkgPT4gcGFyc2ltbW9uX3VtZF9taW4uZXhwb3J0cy5zZXFNYXAocGFyc2ltbW9uX3VtZF9taW4uZXhwb3J0cy5zdHJpbmcoXCItXCIpLCBwYXJzaW1tb25fdW1kX21pbi5leHBvcnRzLnJlZ2V4cCgvXFxkezJ9LyksIChfLCBkYXkpID0+IHltLnNldCh7IGRheTogTnVtYmVyLnBhcnNlSW50KGRheSkgfSkpLCAoeW1kKSA9PiBwYXJzaW1tb25fdW1kX21pbi5leHBvcnRzLnNlcU1hcChwYXJzaW1tb25fdW1kX21pbi5leHBvcnRzLnN0cmluZyhcIlRcIiksIHBhcnNpbW1vbl91bWRfbWluLmV4cG9ydHMucmVnZXhwKC9cXGR7Mn0vKSwgKF8sIGhvdXIpID0+IHltZC5zZXQoeyBob3VyOiBOdW1iZXIucGFyc2VJbnQoaG91cikgfSkpLCAoeW1kaCkgPT4gcGFyc2ltbW9uX3VtZF9taW4uZXhwb3J0cy5zZXFNYXAocGFyc2ltbW9uX3VtZF9taW4uZXhwb3J0cy5zdHJpbmcoXCI6XCIpLCBwYXJzaW1tb25fdW1kX21pbi5leHBvcnRzLnJlZ2V4cCgvXFxkezJ9LyksIChfLCBtaW51dGUpID0+IHltZGguc2V0KHsgbWludXRlOiBOdW1iZXIucGFyc2VJbnQobWludXRlKSB9KSksICh5bWRobSkgPT4gcGFyc2ltbW9uX3VtZF9taW4uZXhwb3J0cy5zZXFNYXAocGFyc2ltbW9uX3VtZF9taW4uZXhwb3J0cy5zdHJpbmcoXCI6XCIpLCBwYXJzaW1tb25fdW1kX21pbi5leHBvcnRzLnJlZ2V4cCgvXFxkezJ9LyksIChfLCBzZWNvbmQpID0+IHltZGhtLnNldCh7IHNlY29uZDogTnVtYmVyLnBhcnNlSW50KHNlY29uZCkgfSkpLCAoeW1kaG1zKSA9PiBwYXJzaW1tb25fdW1kX21pbi5leHBvcnRzLmFsdChwYXJzaW1tb25fdW1kX21pbi5leHBvcnRzLnNlcU1hcChwYXJzaW1tb25fdW1kX21pbi5leHBvcnRzLnN0cmluZyhcIi5cIiksIHBhcnNpbW1vbl91bWRfbWluLmV4cG9ydHMucmVnZXhwKC9cXGR7M30vKSwgKF8sIG1pbGxpc2Vjb25kKSA9PiB5bWRobXMuc2V0KHsgbWlsbGlzZWNvbmQ6IE51bWJlci5wYXJzZUludChtaWxsaXNlY29uZCkgfSkpLCBwYXJzaW1tb25fdW1kX21pbi5leHBvcnRzLnN1Y2NlZWQoeW1kaG1zKSAvLyBwYXNzXHJcbiAgICApLCAoZHQpID0+IHBhcnNpbW1vbl91bWRfbWluLmV4cG9ydHMuYWx0KHBhcnNpbW1vbl91bWRfbWluLmV4cG9ydHMuc2VxTWFwKHBhcnNpbW1vbl91bWRfbWluLmV4cG9ydHMuc3RyaW5nKFwiK1wiKS5vcihwYXJzaW1tb25fdW1kX21pbi5leHBvcnRzLnN0cmluZyhcIi1cIikpLCBwYXJzaW1tb25fdW1kX21pbi5leHBvcnRzLnJlZ2V4cCgvXFxkezEsMn0oOlxcZHsyfSk/LyksIChwbSwgaHIpID0+IGR0LnNldFpvbmUoXCJVVENcIiArIHBtICsgaHIsIHsga2VlcExvY2FsVGltZTogdHJ1ZSB9KSksIHBhcnNpbW1vbl91bWRfbWluLmV4cG9ydHMuc2VxTWFwKHBhcnNpbW1vbl91bWRfbWluLmV4cG9ydHMuc3RyaW5nKFwiWlwiKSwgKCkgPT4gZHQuc2V0Wm9uZShcInV0Y1wiLCB7IGtlZXBMb2NhbFRpbWU6IHRydWUgfSkpLCBwYXJzaW1tb25fdW1kX21pbi5leHBvcnRzLnNlcU1hcChwYXJzaW1tb25fdW1kX21pbi5leHBvcnRzLnN0cmluZyhcIltcIiksIHBhcnNpbW1vbl91bWRfbWluLmV4cG9ydHMucmVnZXhwKC9bMC05QS1aYS16Ky1cXC9dKy91KSwgcGFyc2ltbW9uX3VtZF9taW4uZXhwb3J0cy5zdHJpbmcoXCJdXCIpLCAoX2EsIHpvbmUsIF9iKSA9PiBkdC5zZXRab25lKHpvbmUsIHsga2VlcExvY2FsVGltZTogdHJ1ZSB9KSkpKVxyXG4gICAgICAgIC5hc3NlcnQoKGR0KSA9PiBkdC5pc1ZhbGlkLCBcInZhbGlkIGRhdGVcIilcclxuICAgICAgICAuZGVzYyhcImRhdGUgaW4gZm9ybWF0IFlZWVktTU1bLUREVEhILU1NLVNTLk1TXVwiKSxcclxuICAgIC8vIEEgZGF0ZSwgcGx1cyB2YXJpb3VzIHNob3J0aGFuZCB0aW1lcyBvZiBkYXkgaXQgY291bGQgYmUuXHJcbiAgICBkYXRlUGx1czogcSA9PiBwYXJzaW1tb25fdW1kX21pbi5leHBvcnRzLmFsdChxLmRhdGVTaG9ydGhhbmQubWFwKGQgPT4gREFURV9TSE9SVEhBTkRTW2RdKCkpLCBxLmRhdGUpLmRlc2MoXCJkYXRlIGluIGZvcm1hdCBZWVlZLU1NWy1ERFRISC1NTS1TUy5NU10gb3IgaW4gc2hvcnRoYW5kXCIpLFxyXG4gICAgLy8gQSBkdXJhdGlvbiBvZiB0aW1lLlxyXG4gICAgZHVyYXRpb25UeXBlOiBfID0+IHBhcnNpbW1vbl91bWRfbWluLmV4cG9ydHMuYWx0KC4uLk9iamVjdC5rZXlzKERVUkFUSU9OX1RZUEVTKVxyXG4gICAgICAgIC5zb3J0KChhLCBiKSA9PiBiLmxlbmd0aCAtIGEubGVuZ3RoKVxyXG4gICAgICAgIC5tYXAocGFyc2ltbW9uX3VtZF9taW4uZXhwb3J0cy5zdHJpbmcpKSxcclxuICAgIGR1cmF0aW9uOiBxID0+IHBhcnNpbW1vbl91bWRfbWluLmV4cG9ydHMuc2VxTWFwKHEubnVtYmVyLCBwYXJzaW1tb25fdW1kX21pbi5leHBvcnRzLm9wdFdoaXRlc3BhY2UsIHEuZHVyYXRpb25UeXBlLCAoY291bnQsIF8sIHQpID0+IERVUkFUSU9OX1RZUEVTW3RdLm1hcFVuaXRzKHggPT4geCAqIGNvdW50KSlcclxuICAgICAgICAuc2VwQnkxKHBhcnNpbW1vbl91bWRfbWluLmV4cG9ydHMuc3RyaW5nKFwiLFwiKS50cmltKHBhcnNpbW1vbl91bWRfbWluLmV4cG9ydHMub3B0V2hpdGVzcGFjZSkub3IocGFyc2ltbW9uX3VtZF9taW4uZXhwb3J0cy5vcHRXaGl0ZXNwYWNlKSlcclxuICAgICAgICAubWFwKGR1cmF0aW9ucyA9PiBkdXJhdGlvbnMucmVkdWNlKChwLCBjKSA9PiBwLnBsdXMoYykpKVxyXG4gICAgICAgIC5kZXNjKFwiZHVyYXRpb24gbGlrZSA0aHIybWluXCIpLFxyXG4gICAgLy8gQSByYXcgbnVsbCB2YWx1ZS5cclxuICAgIHJhd051bGw6IF8gPT4gcGFyc2ltbW9uX3VtZF9taW4uZXhwb3J0cy5zdHJpbmcoXCJudWxsXCIpLFxyXG4gICAgLy8gU291cmNlIHBhcnNpbmcuXHJcbiAgICB0YWdTb3VyY2U6IHEgPT4gcS50YWcubWFwKHRhZyA9PiBTb3VyY2VzLnRhZyh0YWcpKSxcclxuICAgIGNzdlNvdXJjZTogcSA9PiBwYXJzaW1tb25fdW1kX21pbi5leHBvcnRzLnNlcU1hcChwYXJzaW1tb25fdW1kX21pbi5leHBvcnRzLnN0cmluZyhcImNzdihcIikuc2tpcChwYXJzaW1tb25fdW1kX21pbi5leHBvcnRzLm9wdFdoaXRlc3BhY2UpLCBxLnN0cmluZywgcGFyc2ltbW9uX3VtZF9taW4uZXhwb3J0cy5zdHJpbmcoXCIpXCIpLCAoXzEsIHBhdGgsIF8yKSA9PiBTb3VyY2VzLmNzdihwYXRoKSksXHJcbiAgICBsaW5rSW5jb21pbmdTb3VyY2U6IHEgPT4gcS5saW5rLm1hcChsaW5rID0+IFNvdXJjZXMubGluayhsaW5rLnBhdGgsIHRydWUpKSxcclxuICAgIGxpbmtPdXRnb2luZ1NvdXJjZTogcSA9PiBwYXJzaW1tb25fdW1kX21pbi5leHBvcnRzLnNlcU1hcChwYXJzaW1tb25fdW1kX21pbi5leHBvcnRzLnN0cmluZyhcIm91dGdvaW5nKFwiKS5za2lwKHBhcnNpbW1vbl91bWRfbWluLmV4cG9ydHMub3B0V2hpdGVzcGFjZSksIHEubGluaywgcGFyc2ltbW9uX3VtZF9taW4uZXhwb3J0cy5zdHJpbmcoXCIpXCIpLCAoXzEsIGxpbmssIF8yKSA9PiBTb3VyY2VzLmxpbmsobGluay5wYXRoLCBmYWxzZSkpLFxyXG4gICAgZm9sZGVyU291cmNlOiBxID0+IHEuc3RyaW5nLm1hcChzdHIgPT4gU291cmNlcy5mb2xkZXIoc3RyKSksXHJcbiAgICBwYXJlbnNTb3VyY2U6IHEgPT4gcGFyc2ltbW9uX3VtZF9taW4uZXhwb3J0cy5zZXFNYXAocGFyc2ltbW9uX3VtZF9taW4uZXhwb3J0cy5zdHJpbmcoXCIoXCIpLCBwYXJzaW1tb25fdW1kX21pbi5leHBvcnRzLm9wdFdoaXRlc3BhY2UsIHEuc291cmNlLCBwYXJzaW1tb25fdW1kX21pbi5leHBvcnRzLm9wdFdoaXRlc3BhY2UsIHBhcnNpbW1vbl91bWRfbWluLmV4cG9ydHMuc3RyaW5nKFwiKVwiKSwgKF8xLCBfMiwgZmllbGQsIF8zLCBfNCkgPT4gZmllbGQpLFxyXG4gICAgbmVnYXRlU291cmNlOiBxID0+IHBhcnNpbW1vbl91bWRfbWluLmV4cG9ydHMuc2VxTWFwKHBhcnNpbW1vbl91bWRfbWluLmV4cG9ydHMuYWx0KHBhcnNpbW1vbl91bWRfbWluLmV4cG9ydHMuc3RyaW5nKFwiLVwiKSwgcGFyc2ltbW9uX3VtZF9taW4uZXhwb3J0cy5zdHJpbmcoXCIhXCIpKSwgcS5hdG9tU291cmNlLCAoXywgc291cmNlKSA9PiBTb3VyY2VzLm5lZ2F0ZShzb3VyY2UpKSxcclxuICAgIGF0b21Tb3VyY2U6IHEgPT4gcGFyc2ltbW9uX3VtZF9taW4uZXhwb3J0cy5hbHQocS5wYXJlbnNTb3VyY2UsIHEubmVnYXRlU291cmNlLCBxLmxpbmtPdXRnb2luZ1NvdXJjZSwgcS5saW5rSW5jb21pbmdTb3VyY2UsIHEuZm9sZGVyU291cmNlLCBxLnRhZ1NvdXJjZSwgcS5jc3ZTb3VyY2UpLFxyXG4gICAgYmluYXJ5T3BTb3VyY2U6IHEgPT4gY3JlYXRlQmluYXJ5UGFyc2VyKHEuYXRvbVNvdXJjZSwgcS5iaW5hcnlCb29sZWFuT3AubWFwKHMgPT4gcyksIFNvdXJjZXMuYmluYXJ5T3ApLFxyXG4gICAgc291cmNlOiBxID0+IHEuYmluYXJ5T3BTb3VyY2UsXHJcbiAgICAvLyBGaWVsZCBwYXJzaW5nLlxyXG4gICAgdmFyaWFibGVGaWVsZDogcSA9PiBxLmlkZW50aWZpZXJcclxuICAgICAgICAuY2hhaW4ociA9PiB7XHJcbiAgICAgICAgaWYgKEtFWVdPUkRTLmluY2x1ZGVzKHIudG9VcHBlckNhc2UoKSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHBhcnNpbW1vbl91bWRfbWluLmV4cG9ydHMuZmFpbChcIlZhcmlhYmxlIGZpZWxkcyBjYW5ub3QgYmUgYSBrZXl3b3JkIChcIiArIEtFWVdPUkRTLmpvaW4oXCIgb3IgXCIpICsgXCIpXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHBhcnNpbW1vbl91bWRfbWluLmV4cG9ydHMuc3VjY2VlZChGaWVsZHMudmFyaWFibGUocikpO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICAgICAgLmRlc2MoXCJ2YXJpYWJsZVwiKSxcclxuICAgIG51bWJlckZpZWxkOiBxID0+IHEubnVtYmVyLm1hcCh2YWwgPT4gRmllbGRzLmxpdGVyYWwodmFsKSkuZGVzYyhcIm51bWJlclwiKSxcclxuICAgIHN0cmluZ0ZpZWxkOiBxID0+IHEuc3RyaW5nLm1hcCh2YWwgPT4gRmllbGRzLmxpdGVyYWwodmFsKSkuZGVzYyhcInN0cmluZ1wiKSxcclxuICAgIGJvb2xGaWVsZDogcSA9PiBxLmJvb2wubWFwKHZhbCA9PiBGaWVsZHMubGl0ZXJhbCh2YWwpKS5kZXNjKFwiYm9vbGVhblwiKSxcclxuICAgIGRhdGVGaWVsZDogcSA9PiBwYXJzaW1tb25fdW1kX21pbi5leHBvcnRzLnNlcU1hcChwYXJzaW1tb25fdW1kX21pbi5leHBvcnRzLnN0cmluZyhcImRhdGUoXCIpLCBwYXJzaW1tb25fdW1kX21pbi5leHBvcnRzLm9wdFdoaXRlc3BhY2UsIHEuZGF0ZVBsdXMsIHBhcnNpbW1vbl91bWRfbWluLmV4cG9ydHMub3B0V2hpdGVzcGFjZSwgcGFyc2ltbW9uX3VtZF9taW4uZXhwb3J0cy5zdHJpbmcoXCIpXCIpLCAocHJlZml4LCBfMSwgZGF0ZSwgXzIsIHBvc3RmaXgpID0+IEZpZWxkcy5saXRlcmFsKGRhdGUpKS5kZXNjKFwiZGF0ZVwiKSxcclxuICAgIGR1cmF0aW9uRmllbGQ6IHEgPT4gcGFyc2ltbW9uX3VtZF9taW4uZXhwb3J0cy5zZXFNYXAocGFyc2ltbW9uX3VtZF9taW4uZXhwb3J0cy5zdHJpbmcoXCJkdXIoXCIpLCBwYXJzaW1tb25fdW1kX21pbi5leHBvcnRzLm9wdFdoaXRlc3BhY2UsIHEuZHVyYXRpb24sIHBhcnNpbW1vbl91bWRfbWluLmV4cG9ydHMub3B0V2hpdGVzcGFjZSwgcGFyc2ltbW9uX3VtZF9taW4uZXhwb3J0cy5zdHJpbmcoXCIpXCIpLCAocHJlZml4LCBfMSwgZHVyLCBfMiwgcG9zdGZpeCkgPT4gRmllbGRzLmxpdGVyYWwoZHVyKSkuZGVzYyhcImR1cmF0aW9uXCIpLFxyXG4gICAgbnVsbEZpZWxkOiBxID0+IHEucmF3TnVsbC5tYXAoXyA9PiBGaWVsZHMuTlVMTCksXHJcbiAgICBsaW5rRmllbGQ6IHEgPT4gcS5saW5rLm1hcChmID0+IEZpZWxkcy5saXRlcmFsKGYpKSxcclxuICAgIGxpc3RGaWVsZDogcSA9PiBxLmZpZWxkXHJcbiAgICAgICAgLnNlcEJ5KHBhcnNpbW1vbl91bWRfbWluLmV4cG9ydHMuc3RyaW5nKFwiLFwiKS50cmltKHBhcnNpbW1vbl91bWRfbWluLmV4cG9ydHMub3B0V2hpdGVzcGFjZSkpXHJcbiAgICAgICAgLndyYXAocGFyc2ltbW9uX3VtZF9taW4uZXhwb3J0cy5zdHJpbmcoXCJbXCIpLnNraXAocGFyc2ltbW9uX3VtZF9taW4uZXhwb3J0cy5vcHRXaGl0ZXNwYWNlKSwgcGFyc2ltbW9uX3VtZF9taW4uZXhwb3J0cy5vcHRXaGl0ZXNwYWNlLnRoZW4ocGFyc2ltbW9uX3VtZF9taW4uZXhwb3J0cy5zdHJpbmcoXCJdXCIpKSlcclxuICAgICAgICAubWFwKGwgPT4gRmllbGRzLmxpc3QobCkpXHJcbiAgICAgICAgLmRlc2MoXCJsaXN0ICgnWzEsIDIsIDNdJylcIiksXHJcbiAgICBvYmplY3RGaWVsZDogcSA9PiBwYXJzaW1tb25fdW1kX21pbi5leHBvcnRzLnNlcU1hcChxLmlkZW50aWZpZXIub3IocS5zdHJpbmcpLCBwYXJzaW1tb25fdW1kX21pbi5leHBvcnRzLnN0cmluZyhcIjpcIikudHJpbShwYXJzaW1tb25fdW1kX21pbi5leHBvcnRzLm9wdFdoaXRlc3BhY2UpLCBxLmZpZWxkLCAobmFtZSwgX3NlcCwgdmFsdWUpID0+IHtcclxuICAgICAgICByZXR1cm4geyBuYW1lLCB2YWx1ZSB9O1xyXG4gICAgfSlcclxuICAgICAgICAuc2VwQnkocGFyc2ltbW9uX3VtZF9taW4uZXhwb3J0cy5zdHJpbmcoXCIsXCIpLnRyaW0ocGFyc2ltbW9uX3VtZF9taW4uZXhwb3J0cy5vcHRXaGl0ZXNwYWNlKSlcclxuICAgICAgICAud3JhcChwYXJzaW1tb25fdW1kX21pbi5leHBvcnRzLnN0cmluZyhcIntcIikuc2tpcChwYXJzaW1tb25fdW1kX21pbi5leHBvcnRzLm9wdFdoaXRlc3BhY2UpLCBwYXJzaW1tb25fdW1kX21pbi5leHBvcnRzLm9wdFdoaXRlc3BhY2UudGhlbihwYXJzaW1tb25fdW1kX21pbi5leHBvcnRzLnN0cmluZyhcIn1cIikpKVxyXG4gICAgICAgIC5tYXAodmFscyA9PiB7XHJcbiAgICAgICAgbGV0IHJlcyA9IHt9O1xyXG4gICAgICAgIGZvciAobGV0IGVudHJ5IG9mIHZhbHMpXHJcbiAgICAgICAgICAgIHJlc1tlbnRyeS5uYW1lXSA9IGVudHJ5LnZhbHVlO1xyXG4gICAgICAgIHJldHVybiBGaWVsZHMub2JqZWN0KHJlcyk7XHJcbiAgICB9KVxyXG4gICAgICAgIC5kZXNjKFwib2JqZWN0ICgneyBhOiAxLCBiOiAyIH0nKVwiKSxcclxuICAgIGF0b21JbmxpbmVGaWVsZDogcSA9PiBwYXJzaW1tb25fdW1kX21pbi5leHBvcnRzLmFsdChxLmRhdGUsIHEuZHVyYXRpb24ubWFwKGQgPT4gbm9ybWFsaXplRHVyYXRpb24oZCkpLCBxLnN0cmluZywgcS50YWcsIHEuZW1iZWRMaW5rLCBxLmJvb2wsIHEubnVtYmVyLCBxLnJhd051bGwpLFxyXG4gICAgaW5saW5lRmllbGRMaXN0OiBxID0+IHEuYXRvbUlubGluZUZpZWxkLnNlcEJ5KHBhcnNpbW1vbl91bWRfbWluLmV4cG9ydHMuc3RyaW5nKFwiLFwiKS50cmltKHBhcnNpbW1vbl91bWRfbWluLmV4cG9ydHMub3B0V2hpdGVzcGFjZSkubG9va2FoZWFkKHEuYXRvbUlubGluZUZpZWxkKSksXHJcbiAgICBpbmxpbmVGaWVsZDogcSA9PiBwYXJzaW1tb25fdW1kX21pbi5leHBvcnRzLmFsdChwYXJzaW1tb25fdW1kX21pbi5leHBvcnRzLnNlcU1hcChxLmF0b21JbmxpbmVGaWVsZCwgcGFyc2ltbW9uX3VtZF9taW4uZXhwb3J0cy5zdHJpbmcoXCIsXCIpLnRyaW0ocGFyc2ltbW9uX3VtZF9taW4uZXhwb3J0cy5vcHRXaGl0ZXNwYWNlKSwgcS5pbmxpbmVGaWVsZExpc3QsIChmLCBfcywgbCkgPT4gW2ZdLmNvbmNhdChsKSksIHEuYXRvbUlubGluZUZpZWxkKSxcclxuICAgIGF0b21GaWVsZDogcSA9PiBwYXJzaW1tb25fdW1kX21pbi5leHBvcnRzLmFsdChcclxuICAgIC8vIFBsYWNlIGVtYmVkIGxpbmtzIGFib3ZlIG5lZ2F0ZWQgZmllbGRzIGFzIHRoZXkgYXJlIHRoZSBzcGVjaWFsIHBhcnNlciBjYXNlICchW1t0aGluZ11dJyBhbmQgYXJlIGdlbmVyYWxseSB1bmFtYmlnaW91cy5cclxuICAgIHEuZW1iZWRMaW5rLm1hcChsID0+IEZpZWxkcy5saXRlcmFsKGwpKSwgcS5uZWdhdGVkRmllbGQsIHEubGlua0ZpZWxkLCBxLmxpc3RGaWVsZCwgcS5vYmplY3RGaWVsZCwgcS5sYW1iZGFGaWVsZCwgcS5wYXJlbnNGaWVsZCwgcS5ib29sRmllbGQsIHEubnVtYmVyRmllbGQsIHEuc3RyaW5nRmllbGQsIHEuZGF0ZUZpZWxkLCBxLmR1cmF0aW9uRmllbGQsIHEubnVsbEZpZWxkLCBxLnZhcmlhYmxlRmllbGQpLFxyXG4gICAgaW5kZXhGaWVsZDogcSA9PiBwYXJzaW1tb25fdW1kX21pbi5leHBvcnRzLnNlcU1hcChxLmF0b21GaWVsZCwgcGFyc2ltbW9uX3VtZF9taW4uZXhwb3J0cy5hbHQocS5kb3RQb3N0Zml4LCBxLmluZGV4UG9zdGZpeCwgcS5mdW5jdGlvblBvc3RmaXgpLm1hbnkoKSwgKG9iaiwgcG9zdGZpeGVzKSA9PiB7XHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IG9iajtcclxuICAgICAgICBmb3IgKGxldCBwb3N0IG9mIHBvc3RmaXhlcykge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKHBvc3QudHlwZSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcImRvdFwiOlxyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IEZpZWxkcy5pbmRleChyZXN1bHQsIEZpZWxkcy5saXRlcmFsKHBvc3QuZmllbGQpKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJpbmRleFwiOlxyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IEZpZWxkcy5pbmRleChyZXN1bHQsIHBvc3QuZmllbGQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcImZ1bmN0aW9uXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gRmllbGRzLmZ1bmMocmVzdWx0LCBwb3N0LmZpZWxkcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH0pLFxyXG4gICAgbmVnYXRlZEZpZWxkOiBxID0+IHBhcnNpbW1vbl91bWRfbWluLmV4cG9ydHMuc2VxTWFwKHBhcnNpbW1vbl91bWRfbWluLmV4cG9ydHMuc3RyaW5nKFwiIVwiKSwgcS5pbmRleEZpZWxkLCAoXywgZmllbGQpID0+IEZpZWxkcy5uZWdhdGUoZmllbGQpKS5kZXNjKFwibmVnYXRlZCBmaWVsZFwiKSxcclxuICAgIHBhcmVuc0ZpZWxkOiBxID0+IHBhcnNpbW1vbl91bWRfbWluLmV4cG9ydHMuc2VxTWFwKHBhcnNpbW1vbl91bWRfbWluLmV4cG9ydHMuc3RyaW5nKFwiKFwiKSwgcGFyc2ltbW9uX3VtZF9taW4uZXhwb3J0cy5vcHRXaGl0ZXNwYWNlLCBxLmZpZWxkLCBwYXJzaW1tb25fdW1kX21pbi5leHBvcnRzLm9wdFdoaXRlc3BhY2UsIHBhcnNpbW1vbl91bWRfbWluLmV4cG9ydHMuc3RyaW5nKFwiKVwiKSwgKF8xLCBfMiwgZmllbGQsIF8zLCBfNCkgPT4gZmllbGQpLFxyXG4gICAgbGFtYmRhRmllbGQ6IHEgPT4gcGFyc2ltbW9uX3VtZF9taW4uZXhwb3J0cy5zZXFNYXAocS5pZGVudGlmaWVyXHJcbiAgICAgICAgLnNlcEJ5KHBhcnNpbW1vbl91bWRfbWluLmV4cG9ydHMuc3RyaW5nKFwiLFwiKS50cmltKHBhcnNpbW1vbl91bWRfbWluLmV4cG9ydHMub3B0V2hpdGVzcGFjZSkpXHJcbiAgICAgICAgLndyYXAocGFyc2ltbW9uX3VtZF9taW4uZXhwb3J0cy5zdHJpbmcoXCIoXCIpLnRyaW0ocGFyc2ltbW9uX3VtZF9taW4uZXhwb3J0cy5vcHRXaGl0ZXNwYWNlKSwgcGFyc2ltbW9uX3VtZF9taW4uZXhwb3J0cy5zdHJpbmcoXCIpXCIpLnRyaW0ocGFyc2ltbW9uX3VtZF9taW4uZXhwb3J0cy5vcHRXaGl0ZXNwYWNlKSksIHBhcnNpbW1vbl91bWRfbWluLmV4cG9ydHMuc3RyaW5nKFwiPT5cIikudHJpbShwYXJzaW1tb25fdW1kX21pbi5leHBvcnRzLm9wdFdoaXRlc3BhY2UpLCBxLmZpZWxkLCAoaWRlbnQsIF9pZ25vcmUsIHZhbHVlKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHsgdHlwZTogXCJsYW1iZGFcIiwgYXJndW1lbnRzOiBpZGVudCwgdmFsdWUgfTtcclxuICAgIH0pLFxyXG4gICAgZG90UG9zdGZpeDogcSA9PiBwYXJzaW1tb25fdW1kX21pbi5leHBvcnRzLnNlcU1hcChwYXJzaW1tb25fdW1kX21pbi5leHBvcnRzLnN0cmluZyhcIi5cIiksIHEuaWRlbnRpZmllciwgKF8sIGZpZWxkKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHsgdHlwZTogXCJkb3RcIiwgZmllbGQ6IGZpZWxkIH07XHJcbiAgICB9KSxcclxuICAgIGluZGV4UG9zdGZpeDogcSA9PiBwYXJzaW1tb25fdW1kX21pbi5leHBvcnRzLnNlcU1hcChwYXJzaW1tb25fdW1kX21pbi5leHBvcnRzLnN0cmluZyhcIltcIiksIHBhcnNpbW1vbl91bWRfbWluLmV4cG9ydHMub3B0V2hpdGVzcGFjZSwgcS5maWVsZCwgcGFyc2ltbW9uX3VtZF9taW4uZXhwb3J0cy5vcHRXaGl0ZXNwYWNlLCBwYXJzaW1tb25fdW1kX21pbi5leHBvcnRzLnN0cmluZyhcIl1cIiksIChfLCBfMiwgZmllbGQsIF8zLCBfNCkgPT4ge1xyXG4gICAgICAgIHJldHVybiB7IHR5cGU6IFwiaW5kZXhcIiwgZmllbGQgfTtcclxuICAgIH0pLFxyXG4gICAgZnVuY3Rpb25Qb3N0Zml4OiBxID0+IHBhcnNpbW1vbl91bWRfbWluLmV4cG9ydHMuc2VxTWFwKHBhcnNpbW1vbl91bWRfbWluLmV4cG9ydHMuc3RyaW5nKFwiKFwiKSwgcGFyc2ltbW9uX3VtZF9taW4uZXhwb3J0cy5vcHRXaGl0ZXNwYWNlLCBxLmZpZWxkLnNlcEJ5KHBhcnNpbW1vbl91bWRfbWluLmV4cG9ydHMuc3RyaW5nKFwiLFwiKS50cmltKHBhcnNpbW1vbl91bWRfbWluLmV4cG9ydHMub3B0V2hpdGVzcGFjZSkpLCBwYXJzaW1tb25fdW1kX21pbi5leHBvcnRzLm9wdFdoaXRlc3BhY2UsIHBhcnNpbW1vbl91bWRfbWluLmV4cG9ydHMuc3RyaW5nKFwiKVwiKSwgKF8sIF8xLCBmaWVsZHMsIF8yLCBfMykgPT4ge1xyXG4gICAgICAgIHJldHVybiB7IHR5cGU6IFwiZnVuY3Rpb25cIiwgZmllbGRzIH07XHJcbiAgICB9KSxcclxuICAgIC8vIFRoZSBwcmVjZWRlbmNlIGhpZXJhcmNoeSBvZiBvcGVyYXRvcnMgLSBtdWx0aXBseS9kaXZpZGUsIGFkZC9zdWJ0cmFjdCwgY29tcGFyZSwgYW5kIHRoZW4gYm9vbGVhbiBvcGVyYXRpb25zLlxyXG4gICAgYmluYXJ5TXVsRGl2RmllbGQ6IHEgPT4gY3JlYXRlQmluYXJ5UGFyc2VyKHEuaW5kZXhGaWVsZCwgcS5iaW5hcnlNdWxEaXYsIEZpZWxkcy5iaW5hcnlPcCksXHJcbiAgICBiaW5hcnlQbHVzTWludXNGaWVsZDogcSA9PiBjcmVhdGVCaW5hcnlQYXJzZXIocS5iaW5hcnlNdWxEaXZGaWVsZCwgcS5iaW5hcnlQbHVzTWludXMsIEZpZWxkcy5iaW5hcnlPcCksXHJcbiAgICBiaW5hcnlDb21wYXJlRmllbGQ6IHEgPT4gY3JlYXRlQmluYXJ5UGFyc2VyKHEuYmluYXJ5UGx1c01pbnVzRmllbGQsIHEuYmluYXJ5Q29tcGFyZU9wLCBGaWVsZHMuYmluYXJ5T3ApLFxyXG4gICAgYmluYXJ5Qm9vbGVhbkZpZWxkOiBxID0+IGNyZWF0ZUJpbmFyeVBhcnNlcihxLmJpbmFyeUNvbXBhcmVGaWVsZCwgcS5iaW5hcnlCb29sZWFuT3AsIEZpZWxkcy5iaW5hcnlPcCksXHJcbiAgICBiaW5hcnlPcEZpZWxkOiBxID0+IHEuYmluYXJ5Qm9vbGVhbkZpZWxkLFxyXG4gICAgZmllbGQ6IHEgPT4gcS5iaW5hcnlPcEZpZWxkLFxyXG59KTtcclxuLyoqXHJcbiAqIEF0dGVtcHQgdG8gcGFyc2UgYSBmaWVsZCBmcm9tIHRoZSBnaXZlbiB0ZXh0LCByZXR1cm5pbmcgYSBzdHJpbmcgZXJyb3IgaWYgdGhlXHJcbiAqIHBhcnNlIGZhaWxlZC5cclxuICovXHJcbmZ1bmN0aW9uIHBhcnNlRmllbGQodGV4dCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICByZXR1cm4gUmVzdWx0LnN1Y2Nlc3MoRVhQUkVTU0lPTi5maWVsZC50cnlQYXJzZSh0ZXh0KSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICByZXR1cm4gUmVzdWx0LmZhaWx1cmUoXCJcIiArIGVycm9yKTtcclxuICAgIH1cclxufVxuXG4vKiogVXRpbGl0eSBmdW5jdGlvbnMgZm9yIHF1aWNrbHkgY3JlYXRpbmcgZmllbGRzLiAqL1xyXG52YXIgUXVlcnlGaWVsZHM7XHJcbihmdW5jdGlvbiAoUXVlcnlGaWVsZHMpIHtcclxuICAgIGZ1bmN0aW9uIG5hbWVkKG5hbWUsIGZpZWxkKSB7XHJcbiAgICAgICAgcmV0dXJuIHsgbmFtZSwgZmllbGQgfTtcclxuICAgIH1cclxuICAgIFF1ZXJ5RmllbGRzLm5hbWVkID0gbmFtZWQ7XHJcbiAgICBmdW5jdGlvbiBzb3J0QnkoZmllbGQsIGRpcikge1xyXG4gICAgICAgIHJldHVybiB7IGZpZWxkLCBkaXJlY3Rpb246IGRpciB9O1xyXG4gICAgfVxyXG4gICAgUXVlcnlGaWVsZHMuc29ydEJ5ID0gc29ydEJ5O1xyXG59KShRdWVyeUZpZWxkcyB8fCAoUXVlcnlGaWVsZHMgPSB7fSkpO1xuXG4vKiogUmV0dXJuIGEgbmV3IHBhcnNlciB3aGljaCBleGVjdXRlcyB0aGUgdW5kZXJseWluZyBwYXJzZXIgYW5kIHJldHVybnMgaXQncyByYXcgc3RyaW5nIHJlcHJlc2VudGF0aW9uLiAqL1xyXG5mdW5jdGlvbiBjYXB0dXJlUmF3KGJhc2UpIHtcclxuICAgIHJldHVybiBwYXJzaW1tb25fdW1kX21pbi5leHBvcnRzLmN1c3RvbSgoc3VjY2VzcywgZmFpbHVyZSkgPT4ge1xyXG4gICAgICAgIHJldHVybiAoaW5wdXQsIGkpID0+IHtcclxuICAgICAgICAgICAgbGV0IHJlc3VsdCA9IGJhc2UuXyhpbnB1dCwgaSk7XHJcbiAgICAgICAgICAgIGlmICghcmVzdWx0LnN0YXR1cylcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCByZXN1bHQsIHsgdmFsdWU6IFtyZXN1bHQudmFsdWUsIGlucHV0LnN1YnN0cmluZyhpLCByZXN1bHQuaW5kZXgpXSB9KTtcclxuICAgICAgICB9O1xyXG4gICAgfSk7XHJcbn1cclxuLyoqIFN0cmlwIG5ld2xpbmVzIGFuZCBleGNlc3Mgd2hpdGVzcGFjZSBvdXQgb2YgdGV4dC4gKi9cclxuZnVuY3Rpb24gc3RyaXBOZXdsaW5lcyh0ZXh0KSB7XHJcbiAgICByZXR1cm4gdGV4dFxyXG4gICAgICAgIC5zcGxpdCgvW1xcclxcbl0rLylcclxuICAgICAgICAubWFwKHQgPT4gdC50cmltKCkpXHJcbiAgICAgICAgLmpvaW4oXCJcIik7XHJcbn1cclxuLyoqIEEgcGFyc2ltbW9uLXBvd2VyZWQgcGFyc2VyLWNvbWJpbmF0b3IgaW1wbGVtZW50YXRpb24gb2YgdGhlIHF1ZXJ5IGxhbmd1YWdlLiAqL1xyXG5jb25zdCBRVUVSWV9MQU5HVUFHRSA9IHBhcnNpbW1vbl91bWRfbWluLmV4cG9ydHMuY3JlYXRlTGFuZ3VhZ2Uoe1xyXG4gICAgLy8gU2ltcGxlIGF0b20gcGFyc2luZywgbGlrZSB3b3JkcywgaWRlbnRpZmllcnMsIG51bWJlcnMuXHJcbiAgICBxdWVyeVR5cGU6IHEgPT4gcGFyc2ltbW9uX3VtZF9taW4uZXhwb3J0cy5hbHQocGFyc2ltbW9uX3VtZF9taW4uZXhwb3J0cy5yZWdleHAoL1RBQkxFfExJU1R8VEFTS3xDQUxFTkRBUi9pKSlcclxuICAgICAgICAubWFwKHN0ciA9PiBzdHIudG9Mb3dlckNhc2UoKSlcclxuICAgICAgICAuZGVzYyhcInF1ZXJ5IHR5cGUgKCdUQUJMRScsICdMSVNUJywgJ1RBU0snLCBvciAnQ0FMRU5EQVInKVwiKSxcclxuICAgIGV4cGxpY2l0TmFtZWRGaWVsZDogcSA9PiBwYXJzaW1tb25fdW1kX21pbi5leHBvcnRzLnNlcU1hcChFWFBSRVNTSU9OLmZpZWxkLnNraXAocGFyc2ltbW9uX3VtZF9taW4uZXhwb3J0cy53aGl0ZXNwYWNlKSwgcGFyc2ltbW9uX3VtZF9taW4uZXhwb3J0cy5yZWdleHAoL0FTL2kpLnNraXAocGFyc2ltbW9uX3VtZF9taW4uZXhwb3J0cy53aGl0ZXNwYWNlKSwgRVhQUkVTU0lPTi5pZGVudGlmaWVyLm9yKEVYUFJFU1NJT04uc3RyaW5nKSwgKGZpZWxkLCBfYXMsIGlkZW50KSA9PiBRdWVyeUZpZWxkcy5uYW1lZChpZGVudCwgZmllbGQpKSxcclxuICAgIG5hbWVkRmllbGQ6IHEgPT4gcGFyc2ltbW9uX3VtZF9taW4uZXhwb3J0cy5hbHQocS5leHBsaWNpdE5hbWVkRmllbGQsIGNhcHR1cmVSYXcoRVhQUkVTU0lPTi5maWVsZCkubWFwKChbdmFsdWUsIHRleHRdKSA9PiBRdWVyeUZpZWxkcy5uYW1lZChzdHJpcE5ld2xpbmVzKHRleHQpLCB2YWx1ZSkpKSxcclxuICAgIHNvcnRGaWVsZDogcSA9PiBwYXJzaW1tb25fdW1kX21pbi5leHBvcnRzLnNlcU1hcChFWFBSRVNTSU9OLmZpZWxkLnNraXAocGFyc2ltbW9uX3VtZF9taW4uZXhwb3J0cy5vcHRXaGl0ZXNwYWNlKSwgcGFyc2ltbW9uX3VtZF9taW4uZXhwb3J0cy5yZWdleHAoL0FTQ0VORElOR3xERVNDRU5ESU5HfEFTQ3xERVNDL2kpLmF0TW9zdCgxKSwgKGZpZWxkLCBkaXIpID0+IHtcclxuICAgICAgICBsZXQgZGlyZWN0aW9uID0gZGlyLmxlbmd0aCA9PSAwID8gXCJhc2NlbmRpbmdcIiA6IGRpclswXS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgIGlmIChkaXJlY3Rpb24gPT0gXCJkZXNjXCIpXHJcbiAgICAgICAgICAgIGRpcmVjdGlvbiA9IFwiZGVzY2VuZGluZ1wiO1xyXG4gICAgICAgIGlmIChkaXJlY3Rpb24gPT0gXCJhc2NcIilcclxuICAgICAgICAgICAgZGlyZWN0aW9uID0gXCJhc2NlbmRpbmdcIjtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBmaWVsZDogZmllbGQsXHJcbiAgICAgICAgICAgIGRpcmVjdGlvbjogZGlyZWN0aW9uLFxyXG4gICAgICAgIH07XHJcbiAgICB9KSxcclxuICAgIGhlYWRlckNsYXVzZTogcSA9PiBxLnF1ZXJ5VHlwZVxyXG4gICAgICAgIC5za2lwKHBhcnNpbW1vbl91bWRfbWluLmV4cG9ydHMud2hpdGVzcGFjZSlcclxuICAgICAgICAuY2hhaW4ocXR5cGUgPT4ge1xyXG4gICAgICAgIHN3aXRjaCAocXR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSBcInRhYmxlXCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcGFyc2ltbW9uX3VtZF9taW4uZXhwb3J0cy5zZXFNYXAocGFyc2ltbW9uX3VtZF9taW4uZXhwb3J0cy5yZWdleHAoL1dJVEhPVVRcXHMrSUQvaSlcclxuICAgICAgICAgICAgICAgICAgICAuc2tpcChwYXJzaW1tb25fdW1kX21pbi5leHBvcnRzLm9wdFdoaXRlc3BhY2UpXHJcbiAgICAgICAgICAgICAgICAgICAgLmF0TW9zdCgxKSwgcGFyc2ltbW9uX3VtZF9taW4uZXhwb3J0cy5zZXBCeShxLm5hbWVkRmllbGQsIHBhcnNpbW1vbl91bWRfbWluLmV4cG9ydHMuc3RyaW5nKFwiLFwiKS50cmltKHBhcnNpbW1vbl91bWRfbWluLmV4cG9ydHMub3B0V2hpdGVzcGFjZSkpLCAod2l0aG91dElkLCBmaWVsZHMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4geyB0eXBlOiBcInRhYmxlXCIsIGZpZWxkcywgc2hvd0lkOiB3aXRob3V0SWQubGVuZ3RoID09IDAgfTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBjYXNlIFwibGlzdFwiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHBhcnNpbW1vbl91bWRfbWluLmV4cG9ydHMuc2VxTWFwKHBhcnNpbW1vbl91bWRfbWluLmV4cG9ydHMucmVnZXhwKC9XSVRIT1VUXFxzK0lEL2kpXHJcbiAgICAgICAgICAgICAgICAgICAgLnNraXAocGFyc2ltbW9uX3VtZF9taW4uZXhwb3J0cy5vcHRXaGl0ZXNwYWNlKVxyXG4gICAgICAgICAgICAgICAgICAgIC5hdE1vc3QoMSksIEVYUFJFU1NJT04uZmllbGQuYXRNb3N0KDEpLCAod2l0aG91dElkLCBmb3JtYXQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImxpc3RcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0OiBmb3JtYXQubGVuZ3RoID09IDEgPyBmb3JtYXRbMF0gOiB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3dJZDogd2l0aG91dElkLmxlbmd0aCA9PSAwLFxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgY2FzZSBcInRhc2tcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiBwYXJzaW1tb25fdW1kX21pbi5leHBvcnRzLnN1Y2NlZWQoeyB0eXBlOiBcInRhc2tcIiB9KTtcclxuICAgICAgICAgICAgY2FzZSBcImNhbGVuZGFyXCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcGFyc2ltbW9uX3VtZF9taW4uZXhwb3J0cy5zZXFNYXAocS5uYW1lZEZpZWxkLCBmaWVsZCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJjYWxlbmRhclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaG93SWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkLFxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHJldHVybiBwYXJzaW1tb25fdW1kX21pbi5leHBvcnRzLmZhaWwoYFVucmVjb2duaXplZCBxdWVyeSB0eXBlICcke3F0eXBlfSdgKTtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgICAgIC5kZXNjKFwiVEFCTEUgb3IgTElTVCBvciBUQVNLIG9yIENBTEVOREFSXCIpLFxyXG4gICAgZnJvbUNsYXVzZTogcSA9PiBwYXJzaW1tb25fdW1kX21pbi5leHBvcnRzLnNlcU1hcChwYXJzaW1tb25fdW1kX21pbi5leHBvcnRzLnJlZ2V4cCgvRlJPTS9pKSwgcGFyc2ltbW9uX3VtZF9taW4uZXhwb3J0cy53aGl0ZXNwYWNlLCBFWFBSRVNTSU9OLnNvdXJjZSwgKF8xLCBfMiwgc291cmNlKSA9PiBzb3VyY2UpLFxyXG4gICAgd2hlcmVDbGF1c2U6IHEgPT4gcGFyc2ltbW9uX3VtZF9taW4uZXhwb3J0cy5zZXFNYXAocGFyc2ltbW9uX3VtZF9taW4uZXhwb3J0cy5yZWdleHAoL1dIRVJFL2kpLCBwYXJzaW1tb25fdW1kX21pbi5leHBvcnRzLndoaXRlc3BhY2UsIEVYUFJFU1NJT04uZmllbGQsICh3aGVyZSwgXywgZmllbGQpID0+IHtcclxuICAgICAgICByZXR1cm4geyB0eXBlOiBcIndoZXJlXCIsIGNsYXVzZTogZmllbGQgfTtcclxuICAgIH0pLmRlc2MoXCJXSEVSRSA8ZXhwcmVzc2lvbj5cIiksXHJcbiAgICBzb3J0QnlDbGF1c2U6IHEgPT4gcGFyc2ltbW9uX3VtZF9taW4uZXhwb3J0cy5zZXFNYXAocGFyc2ltbW9uX3VtZF9taW4uZXhwb3J0cy5yZWdleHAoL1NPUlQvaSksIHBhcnNpbW1vbl91bWRfbWluLmV4cG9ydHMud2hpdGVzcGFjZSwgcS5zb3J0RmllbGQuc2VwQnkxKHBhcnNpbW1vbl91bWRfbWluLmV4cG9ydHMuc3RyaW5nKFwiLFwiKS50cmltKHBhcnNpbW1vbl91bWRfbWluLmV4cG9ydHMub3B0V2hpdGVzcGFjZSkpLCAoc29ydCwgXzEsIGZpZWxkcykgPT4ge1xyXG4gICAgICAgIHJldHVybiB7IHR5cGU6IFwic29ydFwiLCBmaWVsZHMgfTtcclxuICAgIH0pLmRlc2MoXCJTT1JUIGZpZWxkIFtBU0MvREVTQ11cIiksXHJcbiAgICBsaW1pdENsYXVzZTogcSA9PiBwYXJzaW1tb25fdW1kX21pbi5leHBvcnRzLnNlcU1hcChwYXJzaW1tb25fdW1kX21pbi5leHBvcnRzLnJlZ2V4cCgvTElNSVQvaSksIHBhcnNpbW1vbl91bWRfbWluLmV4cG9ydHMud2hpdGVzcGFjZSwgRVhQUkVTU0lPTi5maWVsZCwgKGxpbWl0LCBfMSwgZmllbGQpID0+IHtcclxuICAgICAgICByZXR1cm4geyB0eXBlOiBcImxpbWl0XCIsIGFtb3VudDogZmllbGQgfTtcclxuICAgIH0pLmRlc2MoXCJMSU1JVCA8dmFsdWU+XCIpLFxyXG4gICAgZmxhdHRlbkNsYXVzZTogcSA9PiBwYXJzaW1tb25fdW1kX21pbi5leHBvcnRzLnNlcU1hcChwYXJzaW1tb25fdW1kX21pbi5leHBvcnRzLnJlZ2V4cCgvRkxBVFRFTi9pKS5za2lwKHBhcnNpbW1vbl91bWRfbWluLmV4cG9ydHMud2hpdGVzcGFjZSksIHEubmFtZWRGaWVsZCwgKF8sIGZpZWxkKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHsgdHlwZTogXCJmbGF0dGVuXCIsIGZpZWxkIH07XHJcbiAgICB9KS5kZXNjKFwiRkxBVFRFTiA8dmFsdWU+IFtBUyA8bmFtZT5dXCIpLFxyXG4gICAgZ3JvdXBCeUNsYXVzZTogcSA9PiBwYXJzaW1tb25fdW1kX21pbi5leHBvcnRzLnNlcU1hcChwYXJzaW1tb25fdW1kX21pbi5leHBvcnRzLnJlZ2V4cCgvR1JPVVAgQlkvaSkuc2tpcChwYXJzaW1tb25fdW1kX21pbi5leHBvcnRzLndoaXRlc3BhY2UpLCBxLm5hbWVkRmllbGQsIChfLCBmaWVsZCkgPT4ge1xyXG4gICAgICAgIHJldHVybiB7IHR5cGU6IFwiZ3JvdXBcIiwgZmllbGQgfTtcclxuICAgIH0pLmRlc2MoXCJHUk9VUCBCWSA8dmFsdWU+IFtBUyA8bmFtZT5dXCIpLFxyXG4gICAgLy8gRnVsbCBxdWVyeSBwYXJzaW5nLlxyXG4gICAgY2xhdXNlOiBxID0+IHBhcnNpbW1vbl91bWRfbWluLmV4cG9ydHMuYWx0KHEuZnJvbUNsYXVzZSwgcS53aGVyZUNsYXVzZSwgcS5zb3J0QnlDbGF1c2UsIHEubGltaXRDbGF1c2UsIHEuZ3JvdXBCeUNsYXVzZSwgcS5mbGF0dGVuQ2xhdXNlKSxcclxuICAgIHF1ZXJ5OiBxID0+IHBhcnNpbW1vbl91bWRfbWluLmV4cG9ydHMuc2VxTWFwKHEuaGVhZGVyQ2xhdXNlLnRyaW0ocGFyc2ltbW9uX3VtZF9taW4uZXhwb3J0cy5vcHRXaGl0ZXNwYWNlKSwgcS5mcm9tQ2xhdXNlLnRyaW0ocGFyc2ltbW9uX3VtZF9taW4uZXhwb3J0cy5vcHRXaGl0ZXNwYWNlKS5hdE1vc3QoMSksIHEuY2xhdXNlLnRyaW0ocGFyc2ltbW9uX3VtZF9taW4uZXhwb3J0cy5vcHRXaGl0ZXNwYWNlKS5tYW55KCksIChoZWFkZXIsIGZyb20sIGNsYXVzZXMpID0+IHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBoZWFkZXIsXHJcbiAgICAgICAgICAgIHNvdXJjZTogZnJvbS5sZW5ndGggPT0gMCA/IFNvdXJjZXMuZm9sZGVyKFwiXCIpIDogZnJvbVswXSxcclxuICAgICAgICAgICAgb3BlcmF0aW9uczogY2xhdXNlcyxcclxuICAgICAgICAgICAgc2V0dGluZ3M6IERFRkFVTFRfUVVFUllfU0VUVElOR1MsXHJcbiAgICAgICAgfTtcclxuICAgIH0pLFxyXG59KTtcblxuLy8gVXNlZnVsIHV0aWxpdGllcyBmb3IgZGlyZWN0bHkgdXNpbmcgZGF0YXZpZXcgcGFyc2Vycy5cclxuLy8gVXRpbGl0eSBmdW5jdGlvbnMuXHJcbi8qKlxyXG4gKiBHZXQgdGhlIGN1cnJlbnQgRGF0YXZpZXcgQVBJIGZyb20gdGhlIGFwcCBpZiBwcm92aWRlZDsgaWYgbm90LCBpdCBpcyBpbmZlcnJlZCBmcm9tIHRoZSBnbG9iYWwgQVBJIG9iamVjdCBpbnN0YWxsZWRcclxuICogb24gdGhlIHdpbmRvdy5cclxuICovXHJcbmNvbnN0IGdldEFQSSA9IChhcHApID0+IHtcclxuICAgIHZhciBfYTtcclxuICAgIGlmIChhcHApXHJcbiAgICAgICAgcmV0dXJuIChfYSA9IGFwcC5wbHVnaW5zLnBsdWdpbnMuZGF0YXZpZXcpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5hcGk7XHJcbiAgICBlbHNlXHJcbiAgICAgICAgcmV0dXJuIHdpbmRvdy5EYXRhdmlld0FQSTtcclxufTtcclxuLyoqIERldGVybWluZSBpZiBEYXRhdmlldyBpcyBlbmFibGVkIGluIHRoZSBnaXZlbiBhcHBsaWNhdGlvbi4gKi9cclxuY29uc3QgaXNQbHVnaW5FbmFibGVkID0gKGFwcCkgPT4gYXBwLnBsdWdpbnMuZW5hYmxlZFBsdWdpbnMuaGFzKFwiZGF0YXZpZXdcIik7XG5cbmV4cG9ydHMuREFURV9TSE9SVEhBTkRTID0gREFURV9TSE9SVEhBTkRTO1xuZXhwb3J0cy5EVVJBVElPTl9UWVBFUyA9IERVUkFUSU9OX1RZUEVTO1xuZXhwb3J0cy5FWFBSRVNTSU9OID0gRVhQUkVTU0lPTjtcbmV4cG9ydHMuS0VZV09SRFMgPSBLRVlXT1JEUztcbmV4cG9ydHMuUVVFUllfTEFOR1VBR0UgPSBRVUVSWV9MQU5HVUFHRTtcbmV4cG9ydHMuZ2V0QVBJID0gZ2V0QVBJO1xuZXhwb3J0cy5pc1BsdWdpbkVuYWJsZWQgPSBpc1BsdWdpbkVuYWJsZWQ7XG5leHBvcnRzLnBhcnNlRmllbGQgPSBwYXJzZUZpZWxkO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwXG4iXSwibmFtZXMiOlsicyIsIm9mZnNldCIsImRlZmF1bHRab25lIiwibiIsImZvcm1hdE9mZnNldCIsIm1hdGNoIiwibCIsImUiLCJSZXN1bHQiLCJnbG9iYWwiLCJtb2R1bGUiLCJleHBvcnRzIiwidCIsInIiLCJ1IiwibyIsImkiLCJhIiwiZiIsImMiLCJoIiwicCIsImQiLCJ2IiwiZyIsIm0iLCJWYWx1ZXMiLCJpc051bWJlciIsImlzU3RyaW5nIiwiaXNEYXRlIiwiR3JvdXBpbmdzIiwiV2lkZ2V0cyIsIkZpZWxkcyIsImluZGV4IiwiZnVuYyIsIlNvdXJjZXMiLCJ0YWciLCJfIiwiUXVlcnlGaWVsZHMiXSwibWFwcGluZ3MiOiI7OztBQVNPLE1BQU0saUJBQWlCO0FDUDlCLElBQUksT0FBTyxXQUFXO0FBRXJCLEdBQUMsT0FBTyxhQUFhLE9BQU8sV0FBVyxFQUFFLEdBQUcsb0JBQUksSUFBSyxFQUFBLElBQUssRUFBRSxJQUFJLGNBQWM7QUNKL0QsU0FBQSxrQkFBa0IsVUFBb0IsT0FBcUI7QUFDdkUsUUFBTSxrQkFBa0IsU0FBUztBQUFBLElBQzdCO0FBQUEsRUFBQTtBQUdBLE1BQUEsbUJBQW1CLGVBQWUsaUJBQWlCO0FBQ25ELG9CQUFnQixZQUFZO0FBQUEsRUFDaEM7QUFDSjs7O0FDTkEsT0FBTyxlQUFlLEtBQVMsY0FBYyxFQUFFLE9BQU8sS0FBSSxDQUFFO0FBUzVELE1BQU0sbUJBQW1CLE1BQU07QUFBRTtBQUtqQyxNQUFNLDZCQUE2QixXQUFXO0FBQUEsRUFDNUMsWUFBWSxRQUFRO0FBQ2xCLFVBQU0scUJBQXFCLE9BQU8sVUFBVyxDQUFBLEVBQUU7QUFBQSxFQUNo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SyxHQUFHLENBQUM7QUFBQSxNQUVsRCxLQUFLO0FBQ0gsZUFBTyxRQUFRLFFBQVE7QUFBQSxNQUN6QixLQUFLO0FBQ0gsZUFBTyxRQUFRLEdBQUc7QUFBQSxNQUVwQixLQUFLO0FBQ0gsZUFBTyxRQUFRLFVBQVU7QUFBQSxNQUMzQixLQUFLO0FBQ0gsZUFBTyxRQUFRLEtBQUs7QUFBQSxNQUV0QixLQUFLO0FBQ0gsZUFBTyxRQUFRLEdBQUc7QUFBQSxNQUNwQixLQUFLO0FBQ0gsZUFBTyxRQUFRLFFBQVE7QUFBQSxNQUN6QixLQUFLO0FBQ0gsZUFBTyxRQUFRLEdBQUc7QUFBQSxNQUNwQixLQUFLO0FBQ0gsZUFBTyxRQUFRLFFBQVE7QUFBQSxNQUN6QixLQUFLO0FBQ0gsZUFBTyxRQUFRLEdBQUc7QUFBQSxNQUNwQixLQUFLO0FBQ0gsZUFBTyxRQUFRLFFBQVE7QUFBQSxNQUN6QixLQUFLO0FBQ0gsZUFBTyxRQUFRLFFBQVE7QUFBQSxNQUN6QixLQUFLO0FBQ0gsZUFBTyxRQUFRLEdBQUc7QUFBQSxNQUNwQixLQUFLO0FBQ0gsZUFBTyxRQUFRLFFBQVE7QUFBQSxNQUN6QixLQUFLO0FBQ0gsZUFBTyxRQUFRLEdBQUc7QUFBQSxNQUNwQixLQUFLO0FBQ0gsZUFBTyxRQUFRLFVBQVU7QUFBQSxNQUMzQixLQUFLO0FBQ0gsZUFBTyxRQUFRLEtBQUs7QUFBQSxNQUN0QixLQUFLO0FBQ0gsZUFBTyxPQUFPLFNBQVM7QUFBQSxNQUN6QixLQUFLO0FBQ0gsZUFBTyxPQUFPLFFBQVE7QUFBQSxNQUN4QixLQUFLO0FBQ0gsZUFBTyxRQUFRLEdBQUc7QUFBQSxNQUVwQixLQUFLO0FBQ0gsZUFBTyxNQUFNLElBQUksVUFBVyxHQUFFLENBQUM7QUFBQSxNQUVqQyxLQUFLO0FBQ0gsZUFBTyxRQUFRLElBQUk7QUFBQSxNQUNyQixLQUFLO0FBQ0gsZUFBTyxRQUFRLFdBQVcsY0FBYztBQUFBLE1BRTFDLEtBQUs7QUFDSCxlQUFPLFFBQVEsUUFBUTtBQUFBLE1BQ3pCLEtBQUs7QUFDSCxlQUFPLFFBQVEsR0FBRztBQUFB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RSxLQUFHLEVBQUUsU0FBU1QsSUFBRVMsSUFBRTtBQUFDLGVBQU9BLEtBQUVULEdBQUUsU0FBTyxFQUFFUyxJQUFFLEtBQUssSUFBRSxFQUFFQSxJQUFFLElBQUk7QUFBQSxNQUFDLENBQUMsR0FBRSxLQUFHLEVBQUUsT0FBTyxFQUFFLEtBQUssU0FBUyxHQUFFLEtBQUcsRUFBRSxRQUFRLEVBQUUsS0FBSyxpQkFBaUIsR0FBRSxLQUFHLEVBQUUsUUFBUSxFQUFFLEtBQUssVUFBVSxHQUFFLEtBQUcsRUFBRSxTQUFTLEVBQUUsS0FBSyxrQkFBa0IsR0FBRSxLQUFHLEVBQUUsS0FBSyxFQUFFLEtBQUsscUJBQXFCLEdBQUUsS0FBRyxFQUFFLEtBQUssRUFBRSxLQUFLLFlBQVksR0FBRSxLQUFHLEVBQUUsSUFBSSxHQUFFLEtBQUcsRUFBRSxJQUFJLEdBQUUsS0FBRyxFQUFFLE1BQU0sR0FBRSxLQUFHLEVBQUUsSUFBRyxJQUFHLEVBQUUsRUFBRSxLQUFLLFNBQVMsR0FBRSxLQUFHLEVBQUUsSUFBRyxFQUFFO0FBQUUsUUFBRSxNQUFJLElBQUcsRUFBRSxNQUFJLEdBQUUsRUFBRSxNQUFJLElBQUcsRUFBRSxLQUFHLElBQUcsRUFBRSxpQkFBZSxTQUFTVCxJQUFFO0FBQUMsWUFBSVMsS0FBRSxDQUFFO0FBQUMsaUJBQVFDLE1BQUtWO0FBQUUsV0FBQyxJQUFJLGVBQWUsS0FBS0EsSUFBRVUsRUFBQyxLQUFHLFNBQVNBLElBQUU7QUFBQyxZQUFBRCxHQUFFQyxFQUFDLElBQUUsR0FBRyxXQUFVO0FBQUMscUJBQU9WLEdBQUVVLEVBQUMsRUFBRUQsRUFBQztBQUFBLFlBQUMsQ0FBQztBQUFBLFVBQUUsRUFBRUMsRUFBQztBQUFFLGVBQU9EO0FBQUEsTUFBQyxHQUFFLEVBQUUsT0FBSyxJQUFHLEVBQUUsU0FBTyxTQUFTVCxJQUFFO0FBQUMsZUFBTyxFQUFFQSxHQUFFLEdBQUUsQ0FBQyxDQUFDO0FBQUEsTUFBQyxHQUFFLEVBQUUsUUFBTSxJQUFHLEVBQUUsU0FBTyxJQUFHLEVBQUUsUUFBTSxJQUFHLEVBQUUsTUFBSSxJQUFHLEVBQUUsTUFBSSxJQUFHLEVBQUUsT0FBSyxHQUFFLEVBQUUsY0FBWSxHQUFFLEVBQUUsUUFBTSxJQUFHLEVBQUUsV0FBUyxHQUFFLEVBQUUsT0FBSyxJQUFHLEVBQUUsU0FBTyxJQUFHLEVBQUUsVUFBUSxJQUFHLEVBQUUsS0FBRyxJQUFHLEVBQUUsWUFBVSxHQUFFLEVBQUUsY0FBWSxHQUFFLEVBQUUsY0FBWSxHQUFFLEVBQUUsVUFBUSxJQUFHLEVBQUUsU0FBTyxTQUFTQSxJQUFFO0FBQUMsZUFBTyxHQUFHLFNBQVNTLElBQUU7QUFBQyxpQkFBT1QsR0FBRSxRQUFRUyxFQUFDLElBQUU7QUFBQSxRQUFDLENBQUMsRUFBRSxLQUFLLGNBQVlULEtBQUUsR0FBRztBQUFBLE1BQUMsR0FBRSxFQUFFLGdCQUFjLEdBQUUsRUFBRSxLQUFHLEdBQUUsRUFBRSxRQUFNLFNBQVNBLElBQUU7QUFBQyxpQkFBUVMsS0FBRVQsR0FBRSxNQUFNLEVBQUUsR0FBRVUsS0FBRSxHQUFFQSxLQUFFRCxHQUFFLFFBQU9DO0FBQUksVUFBQUQsR0FBRUMsRUFBQyxJQUFFLE1BQUlELEdBQUVDLEVBQUMsSUFBRTtBQUFJLGVBQU8sR0FBRyxTQUFTRCxJQUFFO0FBQUMsaUJBQU9ULEdBQUUsUUFBUVMsRUFBQyxLQUFHO0FBQUEsUUFBQyxDQUFDLEVBQUUsS0FBS0EsRUFBQztBQUFBLE1BQUMsR0FBRSxFQUFFLGdCQUFjLElBQUcsRUFBRSxTQUFPLEdBQUUsRUFBRSxRQUFNLFNBQVNULElBQUVTLElBQUU7QUFBQyxlQUFPLEdBQUcsU0FBU0MsSUFBRTtBQUFDLGlCQUFPVixNQUFHVSxNQUFHQSxNQUFHRDtBQUFBLFFBQUMsQ0FBQyxFQUFFLEtBQUtULEtBQUUsTUFBSVMsRUFBQztBQUFBLE1BQUMsR0FBRSxFQUFFLFFBQU0sR0FBRSxFQUFFLFNBQU8sR0FBRSxFQUFFLFFBQU0sR0FBRSxFQUFFLFNBQU8sR0FBRSxFQUFFLE1BQUksR0FBRSxFQUFFLFNBQU8sR0FBRSxFQUFFLFNBQU8sV0FBVTtBQUFDLGlCQUFRVCxJQUFFUyxLQUFFLElBQUdDLEtBQUUsR0FBRUMsTUFBR1gsS0FBRSxXQUFVLE1BQU0sVUFBVSxNQUFNLEtBQUtBLEVBQUMsSUFBR1ksS0FBRUQsR0FBRSxRQUFPRSxLQUFFLEdBQUVBLEtBQUVELElBQUVDLE1BQUcsR0FBRTtBQUFDLGNBQUlDLEtBQUVILEdBQUVFLEVBQUM7QUFBRSxjQUFHLENBQUMsRUFBRUMsRUFBQyxHQUFFO0FBQUMsZ0JBQUcsRUFBRUEsRUFBQyxLQUFHLE1BQUlBLEdBQUUsVUFBUSxZQUFVLE9BQU9BLEdBQUUsQ0FBQyxLQUFHLEVBQUVBLEdBQUUsQ0FBQyxDQUFDLEdBQUU7QUFBQyxrQkFBSUMsS0FBRUQsR0FBRSxDQUFDO0FBQUUsa0JBQUcsT0FBTyxVQUFVLGVBQWUsS0FBS0wsSUFBRU0sRUFBQztBQUFFLHNCQUFNLElBQUksTUFBTSwyQkFBeUJBLEVBQUM7QUFBRSxjQUFBTixHQUFFTSxFQUFDLElBQUUsTUFBR0w7QUFBSTtBQUFBLFlBQVE7QUFBQyxrQkFBTSxJQUFJLE1BQU0sbUVBQW1FO0FBQUEsVUFBQztBQUFBLFFBQUM7QUFBQyxZQUFHLE1BQUlBO0FBQUUsZ0JBQU0sSUFBSSxNQUFNLHNEQUFzRDtBQUFFLGVBQU8sRUFBRSxTQUFTVixJQUFFUyxJQUFFO0FBQUMsbUJBQVFDLElBQUVOLEtBQUUsQ0FBQSxHQUFHUyxLQUFFLEdBQUVBLEtBQUVELElBQUVDLE1BQUcsR0FBRTtBQUFDLGdCQUFJQyxJQUFFQztBQUFFLGdCQUFHLEVBQUVKLEdBQUVFLEVBQUMsQ0FBQyxLQUFHQyxLQUFFSCxHQUFFRSxFQUFDLEVBQUUsQ0FBQyxHQUFFRSxLQUFFSixHQUFFRSxFQUFDLEVBQUUsQ0FBQyxNQUFJQyxLQUFFLE1BQUtDLEtBQUVKLEdBQUVFLEVBQUMsSUFBRyxFQUFFSCxLQUFFLEVBQUVLLEdBQUUsRUFBRWYsSUFBRVMsRUFBQyxHQUFFQyxFQUFDLEdBQUc7QUFBTyxxQkFBT0E7QUFBRSxZQUFBSSxPQUFJVixHQUFFVSxFQUFDLElBQUVKLEdBQUUsUUFBT0QsS0FBRUMsR0FBRTtBQUFBLFVBQU07QUFBQyxpQkFBTyxFQUFFLEVBQUVELElBQUVMLEVBQUMsR0FBRU0sRUFBQztBQUFBLFFBQUMsQ0FBQztBQUFBLE1BQUMsR0FBRSxFQUFFLFNBQU8sR0FBRSxFQUFFLFVBQVEsR0FBRSxFQUFFLFlBQVUsU0FBU1YsSUFBRTtBQUFDLGVBQU8sRUFBRUEsRUFBQyxHQUFFLEVBQUUsU0FBU1MsSUFBRUMsSUFBRTtBQUFDLG1CQUFRTixLQUFFTSxJQUFFTixLQUFFSyxHQUFFLFVBQVFULEdBQUUsRUFBRVMsSUFBRUwsRUFBQyxDQUFDO0FBQUcsWUFBQUE7QUFBSSxpQkFBTyxFQUFFQSxJQUFFSyxHQUFFLE1BQU1DLElBQUVOLEVBQUMsQ0FBQztBQUFBLFFBQUMsQ0FBQztBQUFBLE1BQUMsR0FBRSxFQUFFLE9BQUssSUFBRyxFQUFFLGFBQVcsSUFBRyxFQUFFLG9CQUFvQixJQUFFLElBQUcsRUFBRSxpQkFBaUIsSUFBRSxHQUFFLEVBQUUsU0FBTyxFQUFDLFFBQU9ELElBQUUsV0FBVSxTQUFTSCxJQUFFO0FBQUMsUUFBQUgsR0FBRztBQUFDLFlBQUlZLEtBQUUsQ0FBQSxHQUFHQyxLQUFFLEdBQUVOLEtBQUUsRUFBRSxTQUFTSixJQUFFO0FBQUMsY0FBRyxFQUFFQSxFQUFDLEdBQUU7QUFBQyxnQkFBSUksS0FBRUo7QUFBRSxnQkFBRyxNQUFJSSxHQUFFO0FBQU8sb0JBQU0sSUFBSSxNQUFNLE1BQUlBLEdBQUUsS0FBSyxJQUFJLElBQUUsc0NBQW9DQSxHQUFFLE1BQU07QUFBRSxnQkFBRyxFQUFFQSxHQUFFLENBQUMsQ0FBQyxHQUFFLEVBQUVBLEdBQUUsQ0FBQyxDQUFDLEdBQUUsT0FBTyxVQUFVLGVBQWUsS0FBS0ssSUFBRUwsR0FBRSxDQUFDLENBQUM7QUFBRSxvQkFBTSxJQUFJLE1BQU0saUNBQStCQSxHQUFFLENBQUMsQ0FBQztBQUFFLG1CQUFPSyxHQUFFTCxHQUFFLENBQUMsQ0FBQyxJQUFFLE1BQUdNLE1BQUlOO0FBQUEsVUFBQztBQUFDLGlCQUFPLEVBQUVKLEVBQUMsR0FBRSxDQUFDLE1BQUtBLEVBQUM7QUFBQSxRQUFDLEdBQUVBLEVBQUM7QUFBRSxZQUFHVSxLQUFFO0FBQUUsZ0JBQU0sSUFBSSxNQUFNLHFEQUFtRFYsR0FBRSxLQUFLLElBQUksSUFBRSxHQUFHO0FBQUUsWUFBSVcsS0FBRSxFQUFFLFNBQVNYLElBQUU7QUFBQyxpQkFBT0EsR0FBRSxDQUFDO0FBQUEsUUFBQyxHQUFFSSxFQUFDO0FBQUUsZUFBT0QsR0FBRSxFQUFFLFNBQVNILElBQUU7QUFBQyxpQkFBT0EsR0FBRSxDQUFDO0FBQUEsUUFBQyxHQUFFSSxFQUFDLENBQUMsRUFBRSxJQUFJLFNBQVNKLElBQUU7QUFBQyxpQkFBTyxFQUFFLFNBQVNBLElBQUVTLElBQUU7QUFBQyxtQkFBTyxTQUFPQSxHQUFFLENBQUMsTUFBSVQsR0FBRVMsR0FBRSxDQUFDLENBQUMsSUFBRUEsR0FBRSxDQUFDLElBQUdUO0FBQUEsVUFBQyxHQUFFLENBQUUsR0FBQyxFQUFFLFNBQVNTLElBQUVDLElBQUU7QUFBQyxtQkFBTyxDQUFDRCxJQUFFVCxHQUFFVSxFQUFDLENBQUM7QUFBQSxVQUFDLEdBQUVDLEVBQUMsQ0FBQztBQUFBLFFBQUMsQ0FBQztBQUFBLE1BQUMsR0FBRSxNQUFLLFNBQVNYLElBQUU7QUFBQyxZQUFHSCxNQUFJLEVBQUVHLEVBQUMsR0FBRUEsS0FBRTtBQUFJLGdCQUFNLElBQUksTUFBTSwwQ0FBd0NBLEtBQUUsUUFBTUEsR0FBRSxTQUFTLEVBQUUsSUFBRSwwQ0FBMEM7QUFBRSxZQUFJUyxNQUFHVCxLQUFFLEtBQUcsT0FBSyxTQUFPQSxHQUFFLFNBQVMsRUFBRTtBQUFFLGVBQU8sRUFBRSxTQUFTVSxJQUFFTixJQUFFO0FBQUMsY0FBSU8sS0FBRSxFQUFFRCxJQUFFTixFQUFDO0FBQUUsaUJBQU9PLE9BQUlYLEtBQUUsRUFBRUksS0FBRSxHQUFFTyxFQUFDLElBQUUsRUFBRVAsSUFBRUssRUFBQztBQUFBLFFBQUMsQ0FBQztBQUFBLE1BQUMsR0FBRSxRQUFPLFNBQVNULElBQUU7QUFBQyxlQUFPLEVBQUUsVUFBU0EsRUFBQyxFQUFFLElBQUksU0FBU0EsSUFBRTtBQUFDLGlCQUFPLE9BQU8sS0FBS0EsRUFBQztBQUFBLFFBQUMsQ0FBQztBQUFBLE1BQUMsR0FBRSxlQUFjLFNBQVNBLElBQUVTLElBQUU7QUFBQyxlQUFPLEVBQUUsVUFBU0EsRUFBQyxFQUFFLElBQUksU0FBU0EsSUFBRTtBQUFDLGlCQUFPQSxHQUFFLFNBQVNULEVBQUM7QUFBQSxRQUFDLENBQUM7QUFBQSxNQUFDLEdBQUUsUUFBTyxHQUFFLFNBQVEsRUFBRSxDQUFDLEdBQUUsVUFBUyxFQUFFLENBQUMsR0FBRSxVQUFTLEVBQUUsQ0FBQyxHQUFFLFFBQU8sR0FBRSxTQUFRLEVBQUUsQ0FBQyxHQUFFLFVBQVMsRUFBRSxDQUFDLEdBQUUsVUFBUyxFQUFFLENBQUMsR0FBRSxPQUFNLEdBQUUsUUFBTyxFQUFFLENBQUMsR0FBRSxTQUFRLEVBQUUsQ0FBQyxHQUFFLFNBQVEsRUFBRSxDQUFDLEdBQUUsT0FBTSxHQUFFLFFBQU8sRUFBRSxDQUFDLEdBQUUsU0FBUSxFQUFFLENBQUMsR0FBRSxTQUFRLEVBQUUsQ0FBQyxHQUFFLFNBQVEsRUFBRSxXQUFVLENBQUMsRUFBRSxJQUFJLFNBQVNBLElBQUU7QUFBQyxlQUFPQSxHQUFFLFlBQVksQ0FBQztBQUFBLE1BQUMsQ0FBQyxHQUFFLFNBQVEsRUFBRSxXQUFVLENBQUMsRUFBRSxJQUFJLFNBQVNBLElBQUU7QUFBQyxlQUFPQSxHQUFFLFlBQVksQ0FBQztBQUFBLE1BQUMsQ0FBQyxHQUFFLFVBQVMsRUFBRSxZQUFXLENBQUMsRUFBRSxJQUFJLFNBQVNBLElBQUU7QUFBQyxlQUFPQSxHQUFFLGFBQWEsQ0FBQztBQUFBLE1BQUMsQ0FBQyxHQUFFLFVBQVMsRUFBRSxZQUFXLENBQUMsRUFBRSxJQUFJLFNBQVNBLElBQUU7QUFBQyxlQUFPQSxHQUFFLGFBQWEsQ0FBQztBQUFBLE1BQUMsQ0FBQyxFQUFDLEdBQUVBLEdBQUUsVUFBUTtBQUFBLElBQUUsQ0FBQyxDQUFDO0FBQUEsRUFBQyxD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
