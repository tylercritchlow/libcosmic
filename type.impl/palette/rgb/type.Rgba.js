(function() {var type_impls = {
"palette":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Alpha%3CRgb%3CS,+u8%3E,+u8%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/palette/rgb/rgb.rs.html#406-462\">source</a><a href=\"#impl-Alpha%3CRgb%3CS,+u8%3E,+u8%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;S&gt; <a class=\"type\" href=\"palette/rgb/type.Rgba.html\" title=\"type palette::rgb::Rgba\">Rgba</a>&lt;S, <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u8.html\">u8</a>&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.into_u32\" class=\"method\"><a class=\"src rightside\" href=\"src/palette/rgb/rgb.rs.html#428-433\">source</a><h4 class=\"code-header\">pub fn <a href=\"palette/rgb/type.Rgba.html#tymethod.into_u32\" class=\"fn\">into_u32</a>&lt;O&gt;(self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u32.html\">u32</a><span class=\"where fmt-newline\">where\n    O: <a class=\"trait\" href=\"palette/cast/trait.ComponentOrder.html\" title=\"trait palette::cast::ComponentOrder\">ComponentOrder</a>&lt;<a class=\"type\" href=\"palette/rgb/type.Rgba.html\" title=\"type palette::rgb::Rgba\">Rgba</a>&lt;S, <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u8.html\">u8</a>&gt;, <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u32.html\">u32</a>&gt;,</span></h4></section></summary><div class=\"docblock\"><p>Convert to a packed <code>u32</code> with with specifiable component order.</p>\n\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">use </span>palette::{rgb, Srgba};\n\n<span class=\"kw\">let </span>integer = Srgba::new(<span class=\"number\">96u8</span>, <span class=\"number\">127</span>, <span class=\"number\">0</span>, <span class=\"number\">255</span>).into_u32::&lt;rgb::channels::Argb&gt;();\n<span class=\"macro\">assert_eq!</span>(<span class=\"number\">0xFF607F00</span>, integer);</code></pre></div>\n<p>It’s also possible to use <code>From</code> and <code>Into</code>, which defaults to the\n<code>0xRRGGBBAA</code> component order:</p>\n\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">use </span>palette::Srgba;\n\n<span class=\"kw\">let </span>integer = u32::from(Srgba::new(<span class=\"number\">96u8</span>, <span class=\"number\">127</span>, <span class=\"number\">0</span>, <span class=\"number\">255</span>));\n<span class=\"macro\">assert_eq!</span>(<span class=\"number\">0x607F00FF</span>, integer);</code></pre></div>\n<p>See <a href=\"palette/cast/struct.Packed.html\" title=\"struct palette::cast::Packed\">Packed</a> for more details.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.from_u32\" class=\"method\"><a class=\"src rightside\" href=\"src/palette/rgb/rgb.rs.html#456-461\">source</a><h4 class=\"code-header\">pub fn <a href=\"palette/rgb/type.Rgba.html#tymethod.from_u32\" class=\"fn\">from_u32</a>&lt;O&gt;(color: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u32.html\">u32</a>) -&gt; Self<span class=\"where fmt-newline\">where\n    O: <a class=\"trait\" href=\"palette/cast/trait.ComponentOrder.html\" title=\"trait palette::cast::ComponentOrder\">ComponentOrder</a>&lt;<a class=\"type\" href=\"palette/rgb/type.Rgba.html\" title=\"type palette::rgb::Rgba\">Rgba</a>&lt;S, <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u8.html\">u8</a>&gt;, <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u32.html\">u32</a>&gt;,</span></h4></section></summary><div class=\"docblock\"><p>Convert from a packed <code>u32</code> with specifiable component order.</p>\n\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">use </span>palette::{rgb, Srgba};\n\n<span class=\"kw\">let </span>rgba = Srgba::from_u32::&lt;rgb::channels::Argb&gt;(<span class=\"number\">0xFF607F00</span>);\n<span class=\"macro\">assert_eq!</span>(Srgba::new(<span class=\"number\">96u8</span>, <span class=\"number\">127</span>, <span class=\"number\">0</span>, <span class=\"number\">255</span>), rgba);</code></pre></div>\n<p>It’s also possible to use <code>From</code> and <code>Into</code>, which defaults to the\n<code>0xRRGGBBAA</code> component order:</p>\n\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">use </span>palette::Srgba;\n\n<span class=\"kw\">let </span>rgba = Srgba::from(<span class=\"number\">0x607F00FF</span>);\n<span class=\"macro\">assert_eq!</span>(Srgba::new(<span class=\"number\">96u8</span>, <span class=\"number\">127</span>, <span class=\"number\">0</span>, <span class=\"number\">255</span>), rgba);</code></pre></div>\n<p>See <a href=\"palette/cast/struct.Packed.html\" title=\"struct palette::cast::Packed\">Packed</a> for more details.</p>\n</div></details></div></details>",0,"palette::rgb::Srgba","palette::rgb::LinSrgba","palette::rgb::GammaSrgba"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-From%3Cu32%3E-for-Alpha%3CRgb%3CS,+u8%3E,+u8%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/palette/rgb/rgb.rs.html#1050-1055\">source</a><a href=\"#impl-From%3Cu32%3E-for-Alpha%3CRgb%3CS,+u8%3E,+u8%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u32.html\">u32</a>&gt; for <a class=\"type\" href=\"palette/rgb/type.Rgba.html\" title=\"type palette::rgb::Rgba\">Rgba</a>&lt;S, <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u8.html\">u8</a>&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.from\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/palette/rgb/rgb.rs.html#1052-1054\">source</a><a href=\"#method.from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.From.html#tymethod.from\" class=\"fn\">from</a>(color: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u32.html\">u32</a>) -&gt; Self</h4></section></summary><div class='docblock'>Converts to this type from the input type.</div></details></div></details>","From<u32>","palette::rgb::Srgba","palette::rgb::LinSrgba","palette::rgb::GammaSrgba"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-From%3CPacked%3CO,+P%3E%3E-for-Alpha%3CRgb%3CS,+T%3E,+T%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/palette/rgb/rgb.rs.html#1033-1041\">source</a><a href=\"#impl-From%3CPacked%3CO,+P%3E%3E-for-Alpha%3CRgb%3CS,+T%3E,+T%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;S, T, O, P&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"palette/cast/struct.Packed.html\" title=\"struct palette::cast::Packed\">Packed</a>&lt;O, P&gt;&gt; for <a class=\"type\" href=\"palette/rgb/type.Rgba.html\" title=\"type palette::rgb::Rgba\">Rgba</a>&lt;S, T&gt;<span class=\"where fmt-newline\">where\n    O: <a class=\"trait\" href=\"palette/cast/trait.ComponentOrder.html\" title=\"trait palette::cast::ComponentOrder\">ComponentOrder</a>&lt;<a class=\"type\" href=\"palette/rgb/type.Rgba.html\" title=\"type palette::rgb::Rgba\">Rgba</a>&lt;S, T&gt;, P&gt;,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.from\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/palette/rgb/rgb.rs.html#1038-1040\">source</a><a href=\"#method.from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.From.html#tymethod.from\" class=\"fn\">from</a>(packed: <a class=\"struct\" href=\"palette/cast/struct.Packed.html\" title=\"struct palette::cast::Packed\">Packed</a>&lt;O, P&gt;) -&gt; Self</h4></section></summary><div class='docblock'>Converts to this type from the input type.</div></details></div></details>","From<Packed<O, P>>","palette::rgb::Srgba","palette::rgb::LinSrgba","palette::rgb::GammaSrgba"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()