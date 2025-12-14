// AuthBtns.tsx
export default function AuthBtns() {
  return (
    <div className="flex gap-3 py-3">
      {/* Login Button */}
      <button
        className="group px-5 py-1 rounded-[5px] border border-light-border text-white 
        hover:border-blue-500 hover:text-blue-400 hover:bg-blue-500/10
        active:bg-blue-500/20 active:scale-[0.98]
        transition-all duration-300 ease-out"
      >
        <span>Login</span>
      </button>

      {/* Sign Up Button */}
      <button
        className="group px-5 py-1 rounded-[5px] bg-gradient-to-r from-blue-600 to-blue-700 text-white
        hover:from-blue-500 hover:to-blue-600 
        hover:shadow-lg hover:shadow-blue-500/25
        active:from-blue-700 active:to-blue-800 active:scale-[0.98]
        transition-all duration-300 ease-out
        relative overflow-hidden"
      >
        <span
          className="absolute inset-0 -translate-x-full group-hover:translate-x-full 
          bg-gradient-to-r from-transparent via-white/20 to-transparent 
          transition-transform duration-700 ease-out"
        />

        <span>Sign Up</span>
      </button>
    </div>
  );
}
