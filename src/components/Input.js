import * as React from "react"

const Input = props => {
  const { label, class: additional, ...otherProps } = props
  return (
    <label class="block">
      {label && (
        <span class="block text-sm font-medium text-slate-700">{label}</span>
      )}
      <input
        class={[
          "block w-full box-border px-2 py-3 rounded-md border border-slate-200 placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500",
          additional || "",
        ].join(" ")}
        {...otherProps}
      />
    </label>
  )
}

export default Input
