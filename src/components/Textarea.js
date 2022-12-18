import * as React from "react"

const Textarea = props => {
  const { class: additional, label, ...otherProps } = props
  return (
    <label class="block">
      {label && (
        <span class="block text-sm font-medium text-slate-700">{label}</span>
      )}
      <textarea
        class={[
          "block w-full resize-none px-2 py-3 rounded-md border border-slate-200 placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500",
          additional || "",
        ].join(" ")}
        {...otherProps}
      />
    </label>
  )
}

export default Textarea
