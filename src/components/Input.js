import * as React from "react"

const Input = props => {
  const { label, before, after, class: additional, ...otherProps } = props
  return (
    <label class="block">
      {label && (
        <span class="block text-sm font-medium text-slate-700">{label}</span>
      )}
      <div class="relative">
        {before && (
          <div class="absolute flex left-0 h-full w-12 justify-center items-center">
            <span class="block">{before}</span>
          </div>
        )}
        {after && (
          <div class="absolute flex right-0 h-full w-12 justify-center items-center">
            <span class="block">{after}</span>
          </div>
        )}
        <input
          class={[
            "w-full px-2 py-3 rounded-md border border-slate-200 placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500",
            before ? "pl-12" : "",
            after ? "pr-12" : "",
            additional || "",
          ].join(" ")}
          {...otherProps}
        />
      </div>
    </label>
  )
}

export default Input
