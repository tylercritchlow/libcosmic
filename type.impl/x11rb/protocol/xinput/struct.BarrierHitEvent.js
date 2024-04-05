(function() {var type_impls = {
"x11rb":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Serialize-for-BarrierHitEvent\" class=\"impl\"><a class=\"src rightside\" href=\"src/x11rb_protocol/protocol/xinput.rs.html#18944\">source</a><a href=\"#impl-Serialize-for-BarrierHitEvent\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"x11rb/x11_utils/trait.Serialize.html\" title=\"trait x11rb::x11_utils::Serialize\">Serialize</a> for <a class=\"struct\" href=\"x11rb/protocol/xinput/struct.BarrierHitEvent.html\" title=\"struct x11rb::protocol::xinput::BarrierHitEvent\">BarrierHitEvent</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Bytes\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Bytes\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"x11rb/x11_utils/trait.Serialize.html#associatedtype.Bytes\" class=\"associatedtype\">Bytes</a> = [<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.1/std/primitive.u8.html\">u8</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.1/std/primitive.array.html\">68</a>]</h4></section></summary><div class='docblock'>The value returned by <code>serialize</code>. <a href=\"x11rb/x11_utils/trait.Serialize.html#associatedtype.Bytes\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.serialize\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/x11rb_protocol/protocol/xinput.rs.html#18946\">source</a><a href=\"#method.serialize\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"x11rb/x11_utils/trait.Serialize.html#tymethod.serialize\" class=\"fn\">serialize</a>(&amp;self) -&gt; [<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.1/std/primitive.u8.html\">u8</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.1/std/primitive.array.html\">68</a>]</h4></section></summary><div class='docblock'>Serialize this value into X11 raw bytes.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.serialize_into\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/x11rb_protocol/protocol/xinput.rs.html#19036\">source</a><a href=\"#method.serialize_into\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"x11rb/x11_utils/trait.Serialize.html#tymethod.serialize_into\" class=\"fn\">serialize_into</a>(&amp;self, bytes: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.1/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.1/std/primitive.u8.html\">u8</a>&gt;)</h4></section></summary><div class='docblock'>Serialize this value into X11 raw bytes, appending the result into <code>bytes</code>. <a href=\"x11rb/x11_utils/trait.Serialize.html#tymethod.serialize_into\">Read more</a></div></details></div></details>","Serialize","x11rb::protocol::xinput::BarrierLeaveEvent"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-BarrierHitEvent\" class=\"impl\"><a class=\"src rightside\" href=\"src/x11rb_protocol/protocol/xinput.rs.html#18890\">source</a><a href=\"#impl-Clone-for-BarrierHitEvent\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"x11rb/protocol/xinput/struct.BarrierHitEvent.html\" title=\"struct x11rb::protocol::xinput::BarrierHitEvent\">BarrierHitEvent</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/x11rb_protocol/protocol/xinput.rs.html#18890\">source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.1/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; <a class=\"struct\" href=\"x11rb/protocol/xinput/struct.BarrierHitEvent.html\" title=\"struct x11rb::protocol::xinput::BarrierHitEvent\">BarrierHitEvent</a></h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/1.77.1/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.77.1/src/core/clone.rs.html#169\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.1/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.1/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/1.77.1/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","x11rb::protocol::xinput::BarrierLeaveEvent"],["<section id=\"impl-Copy-for-BarrierHitEvent\" class=\"impl\"><a class=\"src rightside\" href=\"src/x11rb_protocol/protocol/xinput.rs.html#18890\">source</a><a href=\"#impl-Copy-for-BarrierHitEvent\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"x11rb/protocol/xinput/struct.BarrierHitEvent.html\" title=\"struct x11rb::protocol::xinput::BarrierHitEvent\">BarrierHitEvent</a></h3></section>","Copy","x11rb::protocol::xinput::BarrierLeaveEvent"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Default-for-BarrierHitEvent\" class=\"impl\"><a class=\"src rightside\" href=\"src/x11rb_protocol/protocol/xinput.rs.html#18890\">source</a><a href=\"#impl-Default-for-BarrierHitEvent\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"x11rb/protocol/xinput/struct.BarrierHitEvent.html\" title=\"struct x11rb::protocol::xinput::BarrierHitEvent\">BarrierHitEvent</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.default\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/x11rb_protocol/protocol/xinput.rs.html#18890\">source</a><a href=\"#method.default\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.1/core/default/trait.Default.html#tymethod.default\" class=\"fn\">default</a>() -&gt; <a class=\"struct\" href=\"x11rb/protocol/xinput/struct.BarrierHitEvent.html\" title=\"struct x11rb::protocol::xinput::BarrierHitEvent\">BarrierHitEvent</a></h4></section></summary><div class='docblock'>Returns the “default value” for a type. <a href=\"https://doc.rust-lang.org/1.77.1/core/default/trait.Default.html#tymethod.default\">Read more</a></div></details></div></details>","Default","x11rb::protocol::xinput::BarrierLeaveEvent"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-BarrierHitEvent\" class=\"impl\"><a class=\"src rightside\" href=\"src/x11rb_protocol/protocol/xinput.rs.html#18913\">source</a><a href=\"#impl-Debug-for-BarrierHitEvent\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"x11rb/protocol/xinput/struct.BarrierHitEvent.html\" title=\"struct x11rb::protocol::xinput::BarrierHitEvent\">BarrierHitEvent</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/x11rb_protocol/protocol/xinput.rs.html#18913\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.1/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.1/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.1/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.1/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.1/core/fmt/struct.Error.html\" title=\"struct core::fmt::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/1.77.1/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","x11rb::protocol::xinput::BarrierLeaveEvent"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-TryParse-for-BarrierHitEvent\" class=\"impl\"><a class=\"src rightside\" href=\"src/x11rb_protocol/protocol/xinput.rs.html#18914\">source</a><a href=\"#impl-TryParse-for-BarrierHitEvent\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"x11rb/x11_utils/trait.TryParse.html\" title=\"trait x11rb::x11_utils::TryParse\">TryParse</a> for <a class=\"struct\" href=\"x11rb/protocol/xinput/struct.BarrierHitEvent.html\" title=\"struct x11rb::protocol::xinput::BarrierHitEvent\">BarrierHitEvent</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.try_parse\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/x11rb_protocol/protocol/xinput.rs.html#18915\">source</a><a href=\"#method.try_parse\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"x11rb/x11_utils/trait.TryParse.html#tymethod.try_parse\" class=\"fn\">try_parse</a>(\n    initial_value: &amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.1/std/primitive.u8.html\">u8</a>]\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.1/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;(<a class=\"struct\" href=\"x11rb/protocol/xinput/struct.BarrierHitEvent.html\" title=\"struct x11rb::protocol::xinput::BarrierHitEvent\">BarrierHitEvent</a>, &amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.1/std/primitive.u8.html\">u8</a>]), <a class=\"enum\" href=\"x11rb/rust_connection/enum.ParseError.html\" title=\"enum x11rb::rust_connection::ParseError\">ParseError</a>&gt;</h4></section></summary><div class='docblock'>Try to parse the given values into an instance of this type. <a href=\"x11rb/x11_utils/trait.TryParse.html#tymethod.try_parse\">Read more</a></div></details></div></details>","TryParse","x11rb::protocol::xinput::BarrierLeaveEvent"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()