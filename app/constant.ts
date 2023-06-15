export const OWNER = "Yidadaa";
export const REPO = "ChatGPT-Next-Web";
export const REPO_URL = `https://mp.weixin.qq.com/s/o28jRUV6HCPzBrI8L06gfA`;
export const ISSUE_URL = `https://mp.weixin.qq.com/s/o28jRUV6HCPzBrI8L06gfA`;
export const UPDATE_URL = `https://mp.weixin.qq.com/s/o28jRUV6HCPzBrI8L06gfA`;
export const FETCH_COMMIT_URL = `https://mp.weixin.qq.com/s/o28jRUV6HCPzBrI8L06gfA`;
export const FETCH_TAG_URL = `https://mp.weixin.qq.com/s/o28jRUV6HCPzBrI8L06gfA`;
export const RUNTIME_CONFIG_DOM = "danger-runtime-config";

export enum Path {
  Home = "/",
  Chat = "/chat",
  Settings = "/settings",
  NewChat = "/new-chat",
  Masks = "/masks",
  Auth = "/auth",
}

export enum SlotID {
  AppBody = "app-body",
}

export enum FileName {
  Masks = "masks.json",
  Prompts = "prompts.json",
}

export enum StoreKey {
  Chat = "chat-next-web-store",
  Access = "access-control",
  Config = "app-config",
  Mask = "mask-store",
  Prompt = "prompt-store",
  Update = "chat-update",
}

export const MAX_SIDEBAR_WIDTH = 500;
export const MIN_SIDEBAR_WIDTH = 230;
export const NARROW_SIDEBAR_WIDTH = 100;

export const ACCESS_CODE_PREFIX = "ak-";

export const LAST_INPUT_KEY = "last-input";

export const REQUEST_TIMEOUT_MS = 60000;

export const EXPORT_MESSAGE_CLASS_NAME = "export-markdown";

export const OpenaiPath = {
  ChatPath: "v1/chat/completions",
  UsagePath: "dashboard/billing/usage",
  SubsPath: "dashboard/billing/subscription",
};
