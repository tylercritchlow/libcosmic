(function() {var implementors = {
"fraction":[["impl&lt;T&gt; <a class=\"trait\" href=\"fraction/trait.CheckedAdd.html\" title=\"trait fraction::CheckedAdd\">CheckedAdd</a> for <a class=\"enum\" href=\"fraction/prelude/enum.GenericFraction.html\" title=\"enum fraction::prelude::GenericFraction\">GenericFraction</a>&lt;T&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"fraction/trait.Integer.html\" title=\"trait fraction::Integer\">Integer</a> + <a class=\"trait\" href=\"fraction/trait.CheckedAdd.html\" title=\"trait fraction::CheckedAdd\">CheckedAdd</a> + <a class=\"trait\" href=\"fraction/trait.CheckedSub.html\" title=\"trait fraction::CheckedSub\">CheckedSub</a> + <a class=\"trait\" href=\"fraction/trait.CheckedMul.html\" title=\"trait fraction::CheckedMul\">CheckedMul</a>,</div>"],["impl&lt;T, G&gt; <a class=\"trait\" href=\"fraction/trait.CheckedAdd.html\" title=\"trait fraction::CheckedAdd\">CheckedAdd</a> for <a class=\"enum\" href=\"fraction/dynaint/enum.DynaInt.html\" title=\"enum fraction::dynaint::DynaInt\">DynaInt</a>&lt;T, G&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> + <a class=\"trait\" href=\"fraction/generic/trait.GenericInteger.html\" title=\"trait fraction::generic::GenericInteger\">GenericInteger</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;G&gt; + <a class=\"trait\" href=\"fraction/convert/trait.TryToConvertFrom.html\" title=\"trait fraction::convert::TryToConvertFrom\">TryToConvertFrom</a>&lt;G&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.1/std/primitive.u8.html\">u8</a>&gt; + <a class=\"trait\" href=\"fraction/trait.CheckedAdd.html\" title=\"trait fraction::CheckedAdd\">CheckedAdd</a>,\n    G: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"fraction/generic/trait.GenericInteger.html\" title=\"trait fraction::generic::GenericInteger\">GenericInteger</a> + <a class=\"trait\" href=\"fraction/trait.CheckedAdd.html\" title=\"trait fraction::CheckedAdd\">CheckedAdd</a>,</div>"],["impl&lt;T, P&gt; <a class=\"trait\" href=\"fraction/trait.CheckedAdd.html\" title=\"trait fraction::CheckedAdd\">CheckedAdd</a> for <a class=\"struct\" href=\"fraction/prelude/struct.GenericDecimal.html\" title=\"struct fraction::prelude::GenericDecimal\">GenericDecimal</a>&lt;T, P&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"fraction/generic/trait.GenericInteger.html\" title=\"trait fraction::generic::GenericInteger\">GenericInteger</a> + <a class=\"trait\" href=\"fraction/trait.CheckedAdd.html\" title=\"trait fraction::CheckedAdd\">CheckedAdd</a> + <a class=\"trait\" href=\"fraction/trait.CheckedDiv.html\" title=\"trait fraction::CheckedDiv\">CheckedDiv</a> + <a class=\"trait\" href=\"fraction/trait.CheckedMul.html\" title=\"trait fraction::CheckedMul\">CheckedMul</a> + <a class=\"trait\" href=\"fraction/trait.CheckedSub.html\" title=\"trait fraction::CheckedSub\">CheckedSub</a>,\n    P: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> + <a class=\"trait\" href=\"fraction/generic/trait.GenericInteger.html\" title=\"trait fraction::generic::GenericInteger\">GenericInteger</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.1/std/primitive.usize.html\">usize</a>&gt;,</div>"]],
"num":[],
"num_bigint":[["impl <a class=\"trait\" href=\"num_traits/ops/checked/trait.CheckedAdd.html\" title=\"trait num_traits::ops::checked::CheckedAdd\">CheckedAdd</a> for <a class=\"struct\" href=\"num_bigint/struct.BigInt.html\" title=\"struct num_bigint::BigInt\">BigInt</a>"],["impl <a class=\"trait\" href=\"num_traits/ops/checked/trait.CheckedAdd.html\" title=\"trait num_traits::ops::checked::CheckedAdd\">CheckedAdd</a> for <a class=\"struct\" href=\"num_bigint/struct.BigUint.html\" title=\"struct num_bigint::BigUint\">BigUint</a>"]],
"num_rational":[["impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"num_integer/trait.Integer.html\" title=\"trait num_integer::Integer\">Integer</a> + <a class=\"trait\" href=\"num_traits/ops/checked/trait.CheckedMul.html\" title=\"trait num_traits::ops::checked::CheckedMul\">CheckedMul</a> + <a class=\"trait\" href=\"num_traits/ops/checked/trait.CheckedAdd.html\" title=\"trait num_traits::ops::checked::CheckedAdd\">CheckedAdd</a>&gt; <a class=\"trait\" href=\"num_traits/ops/checked/trait.CheckedAdd.html\" title=\"trait num_traits::ops::checked::CheckedAdd\">CheckedAdd</a> for <a class=\"struct\" href=\"num_rational/struct.Ratio.html\" title=\"struct num_rational::Ratio\">Ratio</a>&lt;T&gt;"]],
"num_traits":[]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()