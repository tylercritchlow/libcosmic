(function() {var type_impls = {
"exr":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-IntoRecursive-for-(A,+B)\" class=\"impl\"><a class=\"src rightside\" href=\"src/exr/image/recursive.rs.html#148\">source</a><a href=\"#impl-IntoRecursive-for-(A,+B)\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;A, B&gt; <a class=\"trait\" href=\"exr/image/recursive/trait.IntoRecursive.html\" title=\"trait exr::image::recursive::IntoRecursive\">IntoRecursive</a> for <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.tuple.html\">(A, B)</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Recursive\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Recursive\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"exr/image/recursive/trait.IntoRecursive.html#associatedtype.Recursive\" class=\"associatedtype\">Recursive</a> = <a class=\"struct\" href=\"exr/image/recursive/struct.Recursive.html\" title=\"struct exr::image::recursive::Recursive\">Recursive</a>&lt;<a class=\"struct\" href=\"exr/image/recursive/struct.Recursive.html\" title=\"struct exr::image::recursive::Recursive\">Recursive</a>&lt;<a class=\"struct\" href=\"exr/image/recursive/struct.NoneMore.html\" title=\"struct exr::image::recursive::NoneMore\">NoneMore</a>, A&gt;, B&gt;</h4></section></summary><div class='docblock'>The recursive type resulting from this tuple.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.into_recursive\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/exr/image/recursive.rs.html#148\">source</a><a href=\"#method.into_recursive\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"exr/image/recursive/trait.IntoRecursive.html#tymethod.into_recursive\" class=\"fn\">into_recursive</a>(self) -&gt; Self::<a class=\"associatedtype\" href=\"exr/image/recursive/trait.IntoRecursive.html#associatedtype.Recursive\" title=\"type exr::image::recursive::IntoRecursive::Recursive\">Recursive</a></h4></section></summary><div class='docblock'>Create a recursive type from this tuple.</div></details></div></details>","IntoRecursive","exr::meta::attribute::Rational"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-ValidateResult-for-(A,+B,+C,+D)\" class=\"impl\"><a class=\"src rightside\" href=\"src/exr/image/mod.rs.html#1061-1065\">source</a><a href=\"#impl-ValidateResult-for-(A,+B,+C,+D)\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;A, B, C, D&gt; <a class=\"trait\" href=\"exr/image/validate_results/trait.ValidateResult.html\" title=\"trait exr::image::validate_results::ValidateResult\">ValidateResult</a> for <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.tuple.html\">(A, B, C, D)</a><span class=\"where fmt-newline\">where\n    A: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"exr/image/validate_results/trait.ValidateResult.html\" title=\"trait exr::image::validate_results::ValidateResult\">ValidateResult</a>,\n    B: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"exr/image/validate_results/trait.ValidateResult.html\" title=\"trait exr::image::validate_results::ValidateResult\">ValidateResult</a>,\n    C: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"exr/image/validate_results/trait.ValidateResult.html\" title=\"trait exr::image::validate_results::ValidateResult\">ValidateResult</a>,\n    D: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"exr/image/validate_results/trait.ValidateResult.html\" title=\"trait exr::image::validate_results::ValidateResult\">ValidateResult</a>,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.validate_result\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/exr/image/mod.rs.html#1062-1064\">source</a><a href=\"#method.validate_result\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"exr/image/validate_results/trait.ValidateResult.html#tymethod.validate_result\" class=\"fn\">validate_result</a>(\n    &amp;self,\n    other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;Self</a>,\n    options: <a class=\"struct\" href=\"exr/image/validate_results/struct.ValidationOptions.html\" title=\"struct exr::image::validate_results::ValidationOptions\">ValidationOptions</a>,\n    location: <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>\n) -&gt; <a class=\"type\" href=\"exr/image/validate_results/type.ValidationResult.html\" title=\"type exr::image::validate_results::ValidationResult\">ValidationResult</a></h4></section></summary><div class='docblock'>Compare self with the other.\nExceptional behaviour: <a href=\"exr/image/validate_results/trait.ValidateResult.html#tymethod.validate_result\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.assert_equals_result\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/exr/image/mod.rs.html#899-901\">source</a><a href=\"#method.assert_equals_result\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"exr/image/validate_results/trait.ValidateResult.html#method.assert_equals_result\" class=\"fn\">assert_equals_result</a>(&amp;self, result: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Compare self with the other. Panics if not equal. <a href=\"exr/image/validate_results/trait.ValidateResult.html#method.assert_equals_result\">Read more</a></div></details></div></details>","ValidateResult","exr::image::RgbaChannels"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-IntoRecursive-for-(A,+B,+C)\" class=\"impl\"><a class=\"src rightside\" href=\"src/exr/image/recursive.rs.html#149\">source</a><a href=\"#impl-IntoRecursive-for-(A,+B,+C)\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;A, B, C&gt; <a class=\"trait\" href=\"exr/image/recursive/trait.IntoRecursive.html\" title=\"trait exr::image::recursive::IntoRecursive\">IntoRecursive</a> for <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.tuple.html\">(A, B, C)</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Recursive\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Recursive\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"exr/image/recursive/trait.IntoRecursive.html#associatedtype.Recursive\" class=\"associatedtype\">Recursive</a> = <a class=\"struct\" href=\"exr/image/recursive/struct.Recursive.html\" title=\"struct exr::image::recursive::Recursive\">Recursive</a>&lt;<a class=\"struct\" href=\"exr/image/recursive/struct.Recursive.html\" title=\"struct exr::image::recursive::Recursive\">Recursive</a>&lt;<a class=\"struct\" href=\"exr/image/recursive/struct.Recursive.html\" title=\"struct exr::image::recursive::Recursive\">Recursive</a>&lt;<a class=\"struct\" href=\"exr/image/recursive/struct.NoneMore.html\" title=\"struct exr::image::recursive::NoneMore\">NoneMore</a>, A&gt;, B&gt;, C&gt;</h4></section></summary><div class='docblock'>The recursive type resulting from this tuple.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.into_recursive\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/exr/image/recursive.rs.html#149\">source</a><a href=\"#method.into_recursive\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"exr/image/recursive/trait.IntoRecursive.html#tymethod.into_recursive\" class=\"fn\">into_recursive</a>(self) -&gt; Self::<a class=\"associatedtype\" href=\"exr/image/recursive/trait.IntoRecursive.html#associatedtype.Recursive\" title=\"type exr::image::recursive::IntoRecursive::Recursive\">Recursive</a></h4></section></summary><div class='docblock'>Create a recursive type from this tuple.</div></details></div></details>","IntoRecursive","exr::image::RgbChannels"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-ValidateResult-for-(A,+B,+C)\" class=\"impl\"><a class=\"src rightside\" href=\"src/exr/image/mod.rs.html#1067-1071\">source</a><a href=\"#impl-ValidateResult-for-(A,+B,+C)\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;A, B, C&gt; <a class=\"trait\" href=\"exr/image/validate_results/trait.ValidateResult.html\" title=\"trait exr::image::validate_results::ValidateResult\">ValidateResult</a> for <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.tuple.html\">(A, B, C)</a><span class=\"where fmt-newline\">where\n    A: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"exr/image/validate_results/trait.ValidateResult.html\" title=\"trait exr::image::validate_results::ValidateResult\">ValidateResult</a>,\n    B: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"exr/image/validate_results/trait.ValidateResult.html\" title=\"trait exr::image::validate_results::ValidateResult\">ValidateResult</a>,\n    C: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"exr/image/validate_results/trait.ValidateResult.html\" title=\"trait exr::image::validate_results::ValidateResult\">ValidateResult</a>,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.validate_result\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/exr/image/mod.rs.html#1068-1070\">source</a><a href=\"#method.validate_result\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"exr/image/validate_results/trait.ValidateResult.html#tymethod.validate_result\" class=\"fn\">validate_result</a>(\n    &amp;self,\n    other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;Self</a>,\n    options: <a class=\"struct\" href=\"exr/image/validate_results/struct.ValidationOptions.html\" title=\"struct exr::image::validate_results::ValidationOptions\">ValidationOptions</a>,\n    location: <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>\n) -&gt; <a class=\"type\" href=\"exr/image/validate_results/type.ValidationResult.html\" title=\"type exr::image::validate_results::ValidationResult\">ValidationResult</a></h4></section></summary><div class='docblock'>Compare self with the other.\nExceptional behaviour: <a href=\"exr/image/validate_results/trait.ValidateResult.html#tymethod.validate_result\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.assert_equals_result\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/exr/image/mod.rs.html#899-901\">source</a><a href=\"#method.assert_equals_result\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"exr/image/validate_results/trait.ValidateResult.html#method.assert_equals_result\" class=\"fn\">assert_equals_result</a>(&amp;self, result: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Compare self with the other. Panics if not equal. <a href=\"exr/image/validate_results/trait.ValidateResult.html#method.assert_equals_result\">Read more</a></div></details></div></details>","ValidateResult","exr::image::RgbChannels"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-IntoRecursive-for-(A,+B,+C,+D)\" class=\"impl\"><a class=\"src rightside\" href=\"src/exr/image/recursive.rs.html#150\">source</a><a href=\"#impl-IntoRecursive-for-(A,+B,+C,+D)\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;A, B, C, D&gt; <a class=\"trait\" href=\"exr/image/recursive/trait.IntoRecursive.html\" title=\"trait exr::image::recursive::IntoRecursive\">IntoRecursive</a> for <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.tuple.html\">(A, B, C, D)</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Recursive\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Recursive\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"exr/image/recursive/trait.IntoRecursive.html#associatedtype.Recursive\" class=\"associatedtype\">Recursive</a> = <a class=\"struct\" href=\"exr/image/recursive/struct.Recursive.html\" title=\"struct exr::image::recursive::Recursive\">Recursive</a>&lt;<a class=\"struct\" href=\"exr/image/recursive/struct.Recursive.html\" title=\"struct exr::image::recursive::Recursive\">Recursive</a>&lt;<a class=\"struct\" href=\"exr/image/recursive/struct.Recursive.html\" title=\"struct exr::image::recursive::Recursive\">Recursive</a>&lt;<a class=\"struct\" href=\"exr/image/recursive/struct.Recursive.html\" title=\"struct exr::image::recursive::Recursive\">Recursive</a>&lt;<a class=\"struct\" href=\"exr/image/recursive/struct.NoneMore.html\" title=\"struct exr::image::recursive::NoneMore\">NoneMore</a>, A&gt;, B&gt;, C&gt;, D&gt;</h4></section></summary><div class='docblock'>The recursive type resulting from this tuple.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.into_recursive\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/exr/image/recursive.rs.html#150\">source</a><a href=\"#method.into_recursive\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"exr/image/recursive/trait.IntoRecursive.html#tymethod.into_recursive\" class=\"fn\">into_recursive</a>(self) -&gt; Self::<a class=\"associatedtype\" href=\"exr/image/recursive/trait.IntoRecursive.html#associatedtype.Recursive\" title=\"type exr::image::recursive::IntoRecursive::Recursive\">Recursive</a></h4></section></summary><div class='docblock'>Create a recursive type from this tuple.</div></details></div></details>","IntoRecursive","exr::image::RgbaChannels"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-From%3CVec2%3CT%3E%3E-for-(T,+T)\" class=\"impl\"><a class=\"src rightside\" href=\"src/exr/math.rs.html#138-140\">source</a><a href=\"#impl-From%3CVec2%3CT%3E%3E-for-(T,+T)\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"exr/math/struct.Vec2.html\" title=\"struct exr::math::Vec2\">Vec2</a>&lt;T&gt;&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.tuple.html\">(T, T)</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.from\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/exr/math.rs.html#139\">source</a><a href=\"#method.from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.From.html#tymethod.from\" class=\"fn\">from</a>(vec2: <a class=\"struct\" href=\"exr/math/struct.Vec2.html\" title=\"struct exr::math::Vec2\">Vec2</a>&lt;T&gt;) -&gt; Self</h4></section></summary><div class='docblock'>Converts to this type from the input type.</div></details></div></details>","From<Vec2<T>>","exr::meta::attribute::Rational"]],
"iced":[],
"naga":[],
"wgpu_core":[],
"x11rb":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-TryParse-for-(A,+B)\" class=\"impl\"><a class=\"src rightside\" href=\"src/x11rb_protocol/x11_utils.rs.html#520\">source</a><a href=\"#impl-TryParse-for-(A,+B)\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;A, B&gt; <a class=\"trait\" href=\"x11rb/x11_utils/trait.TryParse.html\" title=\"trait x11rb::x11_utils::TryParse\">TryParse</a> for <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.tuple.html\">(A, B)</a><span class=\"where fmt-newline\">where\n    A: <a class=\"trait\" href=\"x11rb/x11_utils/trait.TryParse.html\" title=\"trait x11rb::x11_utils::TryParse\">TryParse</a>,\n    B: <a class=\"trait\" href=\"x11rb/x11_utils/trait.TryParse.html\" title=\"trait x11rb::x11_utils::TryParse\">TryParse</a>,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.try_parse\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/x11rb_protocol/x11_utils.rs.html#520\">source</a><a href=\"#method.try_parse\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"x11rb/x11_utils/trait.TryParse.html#tymethod.try_parse\" class=\"fn\">try_parse</a>(remaining: &amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u8.html\">u8</a>]) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;(<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.tuple.html\">(A, B)</a>, &amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u8.html\">u8</a>]), <a class=\"enum\" href=\"x11rb/rust_connection/enum.ParseError.html\" title=\"enum x11rb::rust_connection::ParseError\">ParseError</a>&gt;</h4></section></summary><div class='docblock'>Try to parse the given values into an instance of this type. <a href=\"x11rb/x11_utils/trait.TryParse.html#tymethod.try_parse\">Read more</a></div></details></div></details>","TryParse","x11rb::connection::BufWithFds","x11rb::connection::EventAndSeqNumber","x11rb::connection::RawEventAndSeqNumber"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Serialize-for-(A,+B)\" class=\"impl\"><a class=\"src rightside\" href=\"src/x11rb_protocol/x11_utils.rs.html#520\">source</a><a href=\"#impl-Serialize-for-(A,+B)\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;A, B&gt; <a class=\"trait\" href=\"x11rb/x11_utils/trait.Serialize.html\" title=\"trait x11rb::x11_utils::Serialize\">Serialize</a> for <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.tuple.html\">(A, B)</a><span class=\"where fmt-newline\">where\n    A: <a class=\"trait\" href=\"x11rb/x11_utils/trait.Serialize.html\" title=\"trait x11rb::x11_utils::Serialize\">Serialize</a>,\n    B: <a class=\"trait\" href=\"x11rb/x11_utils/trait.Serialize.html\" title=\"trait x11rb::x11_utils::Serialize\">Serialize</a>,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Bytes\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Bytes\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"x11rb/x11_utils/trait.Serialize.html#associatedtype.Bytes\" class=\"associatedtype\">Bytes</a> = <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u8.html\">u8</a>&gt;</h4></section></summary><div class='docblock'>The value returned by <code>serialize</code>. <a href=\"x11rb/x11_utils/trait.Serialize.html#associatedtype.Bytes\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.serialize\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/x11rb_protocol/x11_utils.rs.html#520\">source</a><a href=\"#method.serialize\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"x11rb/x11_utils/trait.Serialize.html#tymethod.serialize\" class=\"fn\">serialize</a>(&amp;self) -&gt; &lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.tuple.html\">(A, B)</a> as <a class=\"trait\" href=\"x11rb/x11_utils/trait.Serialize.html\" title=\"trait x11rb::x11_utils::Serialize\">Serialize</a>&gt;::<a class=\"associatedtype\" href=\"x11rb/x11_utils/trait.Serialize.html#associatedtype.Bytes\" title=\"type x11rb::x11_utils::Serialize::Bytes\">Bytes</a></h4></section></summary><div class='docblock'>Serialize this value into X11 raw bytes.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.serialize_into\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/x11rb_protocol/x11_utils.rs.html#520\">source</a><a href=\"#method.serialize_into\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"x11rb/x11_utils/trait.Serialize.html#tymethod.serialize_into\" class=\"fn\">serialize_into</a>(&amp;self, bytes: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u8.html\">u8</a>&gt;)</h4></section></summary><div class='docblock'>Serialize this value into X11 raw bytes, appending the result into <code>bytes</code>. <a href=\"x11rb/x11_utils/trait.Serialize.html#tymethod.serialize_into\">Read more</a></div></details></div></details>","Serialize","x11rb::connection::BufWithFds","x11rb::connection::EventAndSeqNumber","x11rb::connection::RawEventAndSeqNumber"]],
"x11rb_protocol":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Serialize-for-(A,+B)\" class=\"impl\"><a class=\"src rightside\" href=\"src/x11rb_protocol/x11_utils.rs.html#520\">source</a><a href=\"#impl-Serialize-for-(A,+B)\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;A, B&gt; <a class=\"trait\" href=\"x11rb_protocol/x11_utils/trait.Serialize.html\" title=\"trait x11rb_protocol::x11_utils::Serialize\">Serialize</a> for <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.tuple.html\">(A, B)</a><span class=\"where fmt-newline\">where\n    A: <a class=\"trait\" href=\"x11rb_protocol/x11_utils/trait.Serialize.html\" title=\"trait x11rb_protocol::x11_utils::Serialize\">Serialize</a>,\n    B: <a class=\"trait\" href=\"x11rb_protocol/x11_utils/trait.Serialize.html\" title=\"trait x11rb_protocol::x11_utils::Serialize\">Serialize</a>,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Bytes\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Bytes\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"x11rb_protocol/x11_utils/trait.Serialize.html#associatedtype.Bytes\" class=\"associatedtype\">Bytes</a> = <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u8.html\">u8</a>&gt;</h4></section></summary><div class='docblock'>The value returned by <code>serialize</code>. <a href=\"x11rb_protocol/x11_utils/trait.Serialize.html#associatedtype.Bytes\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.serialize\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/x11rb_protocol/x11_utils.rs.html#520\">source</a><a href=\"#method.serialize\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"x11rb_protocol/x11_utils/trait.Serialize.html#tymethod.serialize\" class=\"fn\">serialize</a>(&amp;self) -&gt; Self::<a class=\"associatedtype\" href=\"x11rb_protocol/x11_utils/trait.Serialize.html#associatedtype.Bytes\" title=\"type x11rb_protocol::x11_utils::Serialize::Bytes\">Bytes</a></h4></section></summary><div class='docblock'>Serialize this value into X11 raw bytes.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.serialize_into\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/x11rb_protocol/x11_utils.rs.html#520\">source</a><a href=\"#method.serialize_into\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"x11rb_protocol/x11_utils/trait.Serialize.html#tymethod.serialize_into\" class=\"fn\">serialize_into</a>(&amp;self, bytes: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u8.html\">u8</a>&gt;)</h4></section></summary><div class='docblock'>Serialize this value into X11 raw bytes, appending the result into <code>bytes</code>. <a href=\"x11rb_protocol/x11_utils/trait.Serialize.html#tymethod.serialize_into\">Read more</a></div></details></div></details>","Serialize","x11rb_protocol::BufWithFds","x11rb_protocol::RawEventAndSeqNumber"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-TryParse-for-(A,+B)\" class=\"impl\"><a class=\"src rightside\" href=\"src/x11rb_protocol/x11_utils.rs.html#520\">source</a><a href=\"#impl-TryParse-for-(A,+B)\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;A, B&gt; <a class=\"trait\" href=\"x11rb_protocol/x11_utils/trait.TryParse.html\" title=\"trait x11rb_protocol::x11_utils::TryParse\">TryParse</a> for <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.tuple.html\">(A, B)</a><span class=\"where fmt-newline\">where\n    A: <a class=\"trait\" href=\"x11rb_protocol/x11_utils/trait.TryParse.html\" title=\"trait x11rb_protocol::x11_utils::TryParse\">TryParse</a>,\n    B: <a class=\"trait\" href=\"x11rb_protocol/x11_utils/trait.TryParse.html\" title=\"trait x11rb_protocol::x11_utils::TryParse\">TryParse</a>,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.try_parse\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/x11rb_protocol/x11_utils.rs.html#520\">source</a><a href=\"#method.try_parse\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"x11rb_protocol/x11_utils/trait.TryParse.html#tymethod.try_parse\" class=\"fn\">try_parse</a>(remaining: &amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u8.html\">u8</a>]) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;(<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.tuple.html\">(A, B)</a>, &amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u8.html\">u8</a>]), <a class=\"enum\" href=\"x11rb_protocol/errors/enum.ParseError.html\" title=\"enum x11rb_protocol::errors::ParseError\">ParseError</a>&gt;</h4></section></summary><div class='docblock'>Try to parse the given values into an instance of this type. <a href=\"x11rb_protocol/x11_utils/trait.TryParse.html#tymethod.try_parse\">Read more</a></div></details></div></details>","TryParse","x11rb_protocol::BufWithFds","x11rb_protocol::RawEventAndSeqNumber"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()