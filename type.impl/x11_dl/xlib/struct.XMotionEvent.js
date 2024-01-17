(function() {var type_impls = {
"winit":[],
"x11_dl":[["<section id=\"impl-Copy-for-XMotionEvent\" class=\"impl\"><a class=\"src rightside\" href=\"src/x11_dl/xlib.rs.html#1528\">source</a><a href=\"#impl-Copy-for-XMotionEvent\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"x11_dl/xlib/struct.XMotionEvent.html\" title=\"struct x11_dl::xlib::XMotionEvent\">XMotionEvent</a></h3></section>","Copy","x11_dl::xlib::XPointerMovedEvent"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-From%3C%26XEvent%3E-for-XMotionEvent\" class=\"impl\"><a class=\"src rightside\" href=\"src/x11_dl/xlib.rs.html#1182-1215\">source</a><a href=\"#impl-From%3C%26XEvent%3E-for-XMotionEvent\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&amp;'a <a class=\"union\" href=\"x11_dl/xlib/union.XEvent.html\" title=\"union x11_dl::xlib::XEvent\">XEvent</a>&gt; for <a class=\"struct\" href=\"x11_dl/xlib/struct.XMotionEvent.html\" title=\"struct x11_dl::xlib::XMotionEvent\">XMotionEvent</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.from\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/x11_dl/xlib.rs.html#1182-1215\">source</a><a href=\"#method.from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.From.html#tymethod.from\" class=\"fn\">from</a>(xevent: &amp;'a <a class=\"union\" href=\"x11_dl/xlib/union.XEvent.html\" title=\"union x11_dl::xlib::XEvent\">XEvent</a>) -&gt; <a class=\"struct\" href=\"x11_dl/xlib/struct.XMotionEvent.html\" title=\"struct x11_dl::xlib::XMotionEvent\">XMotionEvent</a></h4></section></summary><div class='docblock'>Converts to this type from the input type.</div></details></div></details>","From<&'a XEvent>","x11_dl::xlib::XPointerMovedEvent"],["<section id=\"impl-StructuralPartialEq-for-XMotionEvent\" class=\"impl\"><a class=\"src rightside\" href=\"src/x11_dl/xlib.rs.html#1528\">source</a><a href=\"#impl-StructuralPartialEq-for-XMotionEvent\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.StructuralPartialEq.html\" title=\"trait core::marker::StructuralPartialEq\">StructuralPartialEq</a> for <a class=\"struct\" href=\"x11_dl/xlib/struct.XMotionEvent.html\" title=\"struct x11_dl::xlib::XMotionEvent\">XMotionEvent</a></h3></section>","StructuralPartialEq","x11_dl::xlib::XPointerMovedEvent"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-PartialEq-for-XMotionEvent\" class=\"impl\"><a class=\"src rightside\" href=\"src/x11_dl/xlib.rs.html#1528\">source</a><a href=\"#impl-PartialEq-for-XMotionEvent\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> for <a class=\"struct\" href=\"x11_dl/xlib/struct.XMotionEvent.html\" title=\"struct x11_dl::xlib::XMotionEvent\">XMotionEvent</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.eq\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/x11_dl/xlib.rs.html#1528\">source</a><a href=\"#method.eq\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/cmp/trait.PartialEq.html#tymethod.eq\" class=\"fn\">eq</a>(&amp;self, other: &amp;<a class=\"struct\" href=\"x11_dl/xlib/struct.XMotionEvent.html\" title=\"struct x11_dl::xlib::XMotionEvent\">XMotionEvent</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>self</code> and <code>other</code> values to be equal, and is used\nby <code>==</code>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.ne\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.75.0/src/core/cmp.rs.html#239\">source</a></span><a href=\"#method.ne\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/cmp/trait.PartialEq.html#method.ne\" class=\"fn\">ne</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;Rhs</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>!=</code>. The default implementation is almost always\nsufficient, and should not be overridden without very good reason.</div></details></div></details>","PartialEq","x11_dl::xlib::XPointerMovedEvent"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-From%3CXEvent%3E-for-XMotionEvent\" class=\"impl\"><a class=\"src rightside\" href=\"src/x11_dl/xlib.rs.html#1182-1215\">source</a><a href=\"#impl-From%3CXEvent%3E-for-XMotionEvent\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"union\" href=\"x11_dl/xlib/union.XEvent.html\" title=\"union x11_dl::xlib::XEvent\">XEvent</a>&gt; for <a class=\"struct\" href=\"x11_dl/xlib/struct.XMotionEvent.html\" title=\"struct x11_dl::xlib::XMotionEvent\">XMotionEvent</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.from\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/x11_dl/xlib.rs.html#1182-1215\">source</a><a href=\"#method.from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.From.html#tymethod.from\" class=\"fn\">from</a>(xevent: <a class=\"union\" href=\"x11_dl/xlib/union.XEvent.html\" title=\"union x11_dl::xlib::XEvent\">XEvent</a>) -&gt; <a class=\"struct\" href=\"x11_dl/xlib/struct.XMotionEvent.html\" title=\"struct x11_dl::xlib::XMotionEvent\">XMotionEvent</a></h4></section></summary><div class='docblock'>Converts to this type from the input type.</div></details></div></details>","From<XEvent>","x11_dl::xlib::XPointerMovedEvent"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-XMotionEvent\" class=\"impl\"><a class=\"src rightside\" href=\"src/x11_dl/xlib.rs.html#1528\">source</a><a href=\"#impl-Clone-for-XMotionEvent\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"x11_dl/xlib/struct.XMotionEvent.html\" title=\"struct x11_dl::xlib::XMotionEvent\">XMotionEvent</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/x11_dl/xlib.rs.html#1528\">source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; <a class=\"struct\" href=\"x11_dl/xlib/struct.XMotionEvent.html\" title=\"struct x11_dl::xlib::XMotionEvent\">XMotionEvent</a></h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.75.0/src/core/clone.rs.html#169\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","x11_dl::xlib::XPointerMovedEvent"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-XMotionEvent\" class=\"impl\"><a class=\"src rightside\" href=\"src/x11_dl/xlib.rs.html#1528\">source</a><a href=\"#impl-Debug-for-XMotionEvent\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"x11_dl/xlib/struct.XMotionEvent.html\" title=\"struct x11_dl::xlib::XMotionEvent\">XMotionEvent</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/x11_dl/xlib.rs.html#1528\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"type\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/type.Result.html\" title=\"type core::fmt::Result\">Result</a></h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","x11_dl::xlib::XPointerMovedEvent"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()